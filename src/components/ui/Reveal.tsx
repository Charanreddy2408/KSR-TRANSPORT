"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

const viewport = { once: true, margin: "-40px" }
const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
}: RevealProps) {
  const y = direction === "up" ? 32 : direction === "down" ? -32 : 0
  const x = direction === "left" ? 24 : direction === "right" ? -24 : 0
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={viewport}
      transition={{ ...transition, delay }}
    >
      {children}
    </motion.div>
  )
}
