"use client"

import { useState } from "react"
import { Section } from "@/components/ui/Section"
import { ImageLightbox } from "@/components/ui/ImageLightbox"
import { motion } from "framer-motion"

const fleetImages = [
  { src: "/assets/truck3.jpeg", alt: "KSR Transport heavy haul" },
  { src: "/assets/truck4.jpeg", alt: "KSR Transport flatbed cargo" },
  { src: "/assets/truck5.jpeg", alt: "KSR Transport secured load" },
  { src: "/assets/truck6.jpeg", alt: "KSR Transport fleet" },
  { src: "/assets/truck7.jpeg", alt: "KSR Transport logistics" },
  { src: "/assets/truck8.jpeg", alt: "KSR Transport national permit" },
  { src: "/assets/truck9.jpeg", alt: "KSR Transport cargo" },
  { src: "/assets/truck10.jpeg", alt: "KSR Transport convoy" },
]

export function Fleet() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <Section id="fleet" className="bg-slate-50">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[#F97316] font-bold uppercase tracking-wider mb-2 text-sm sm:text-base">
          Our Fleet
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F3A]">
          Trusted Vehicles, Reliable Delivery
        </h3>
        <p className="text-slate-600 mt-3 sm:mt-4 text-base sm:text-lg px-2">
          40+ owned vehicles. Heavy-duty trailers and prime movers for steel, ODC, and industrial cargo.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 min-w-0">
        {fleetImages.map((item, index) => (
          <motion.button
            type="button"
            key={item.src}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative rounded-lg sm:rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-[4/3] min-h-[100px] bg-slate-200 text-left cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#F97316] focus:ring-offset-2 touch-manipulation"
            onClick={() => setLightbox({ src: item.src, alt: item.alt })}
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 pointer-events-none"
            />
            <div className="absolute inset-0 bg-[#0B1F3A]/0 group-hover:bg-[#0B1F3A]/20 transition-colors duration-300" />
          </motion.button>
        ))}
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          open={!!lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </Section>
  )
}
