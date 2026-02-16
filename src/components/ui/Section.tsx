"use client"

import * as React from "react"
import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "onAnimationStart" | "onAnimationEnd" | "onDrag" | "onDragStart" | "onDragEnd"> {
  container?: boolean
  className?: string
  id?: string
}

const sectionReveal = {
  initial: { opacity: 0, y: 56, scale: 0.99 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: { once: true, margin: "-60px 0px -60px 0px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
}

export function Section({
  children,
  className,
  container = true,
  ...props
}: SectionProps) {
  return (
    <motion.section
      className={cn("py-12 sm:py-16 md:py-20 lg:py-24", className)}
      initial={sectionReveal.initial}
      whileInView={sectionReveal.whileInView}
      viewport={sectionReveal.viewport}
      transition={sectionReveal.transition}
      {...(props as HTMLMotionProps<"section">)}
    >
      {container ? (
        <div className="container px-4 sm:px-6 md:px-8 mx-auto max-w-7xl min-w-0">
          {children}
        </div>
      ) : (
        children
      )}
    </motion.section>
  )
}
