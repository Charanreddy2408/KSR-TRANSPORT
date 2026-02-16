"use client"

import { Section } from "@/components/ui/Section"
import { Typewriter } from "@/components/ui/Typewriter"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const CEO_NAME = "Kommuru Sudharshan Reddy"

export function CEO() {
  return (
    <Section id="ceo" className="bg-[#0B1F3A] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A] via-[#0f2847] to-[#0B1F3A]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F97316]/50 to-transparent" />

      <div className="relative">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
            {/* CEO Photo */}
            <motion.div
              className="lg:col-span-2 flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F97316] to-amber-500 rounded-2xl opacity-30 blur-sm" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 aspect-[3/4] w-full max-w-[280px] mx-auto">
                  <img
                    src="/assets/ceo.jpeg"
                    alt="Kommuru Sudharshan Reddy - Managing Director, KSR Transport"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <motion.p
                className="text-[#F97316] font-bold uppercase tracking-[0.2em] mb-3 text-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Leadership
              </motion.p>
              <motion.div
                className="mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <Typewriter
                  text={CEO_NAME}
                  speed={70}
                  startDelay={400}
                  cursor
                  as="h2"
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white inline"
                />
              </motion.div>
              <motion.p
                className="text-xl text-[#F97316] font-semibold mb-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.28 }}
              >
                Managing Director
              </motion.p>
              <motion.p
                className="text-lg text-white/90 font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Leading CEO of KSR Transport
              </motion.p>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <Quote className="absolute -top-2 -left-1 w-10 h-10 text-[#F97316]/20" />
                <blockquote className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed pl-6 sm:pl-8 pr-2">
                  With over 17 years in heavy logistics, we are committed to moving India&apos;s industry safely and on time. KSR Transport stands for reliability, scale, and trust—from steel to solar, we deliver.
                </blockquote>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
