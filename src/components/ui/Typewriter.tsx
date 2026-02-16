"use client"

import { useState, useEffect, useRef } from "react"

interface TypewriterProps {
  text: string
  speed?: number
  startDelay?: number
  cursor?: boolean
  className?: string
  as?: "span" | "h1" | "h2" | "p"
}

export function Typewriter({
  text,
  speed = 80,
  startDelay = 0,
  cursor = true,
  className = "",
  as: Tag = "span",
}: TypewriterProps) {
  const [display, setDisplay] = useState("")
  const [done, setDone] = useState(false)
  const [started, setStarted] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(startTimer)
  }, [startDelay])

  useEffect(() => {
    if (!started || !text) return

    if (indexRef.current >= text.length) {
      setDone(true)
      return
    }

    const timer = setInterval(() => {
      indexRef.current += 1
      setDisplay(text.slice(0, indexRef.current))
      if (indexRef.current >= text.length) {
        setDone(true)
        clearInterval(timer)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [started, text, speed])

  return (
    <Tag className={className}>
      {display}
      {cursor && !done && (
        <span className="animate-[cursor-blink_0.8s_ease-in-out_infinite]" aria-hidden>
          |
        </span>
      )}
    </Tag>
  )
}
