"use client"

import { useState } from "react"
import { Section } from "@/components/ui/Section"
import { ImageLightbox } from "@/components/ui/ImageLightbox"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

export function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const highlights = [
    "17 years of market excellence",
    "40+ Owned Heavy Vehicles",
    "Trailer fleet (32MT & 40MT capacity)",
    "Expertise in ODC transportation",
    "Trusted by major corporations",
    "IBA Certified Partner"
  ]

  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center min-w-0">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="order-2 md:order-1 min-w-0"
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3] md:aspect-auto md:min-h-[360px] bg-[#0B1F3A]/10 w-full min-h-[200px] text-left focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 cursor-zoom-in touch-manipulation"
          >
            <div className="absolute inset-0 bg-[#0B1F3A]/20 z-10" />
            <img
              src="/assets/truck2.jpeg"
              alt="KSR Transport Fleet"
              className="w-full h-full object-cover"
            />
          </button>
          <ImageLightbox
            src="/assets/truck2.jpeg"
            alt="KSR Transport Fleet"
            open={lightboxOpen}
            onClose={() => setLightboxOpen(false)}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="order-1 md:order-2"
        >
          <h2 className="text-[#F97316] font-bold uppercase tracking-wider mb-2 text-sm sm:text-base">About KSR Transport</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4 sm:mb-6">
            Pioneering Heavy Logistics Since 2007
          </h3>
          <p className="text-slate-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
            KSR Transport has established itself as a premier logistics partner for heavy industrial transportation. With over 17 years of experience, we specialize in handling complex logistics challenges, from ODC cargo to large-scale steel transport.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {highlights.map((item, index) => (
              <li key={index} className="flex items-start sm:items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#F97316] flex-shrink-0 mt-0.5 sm:mt-0" />
                <span className="text-slate-700 font-medium text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  )
}
