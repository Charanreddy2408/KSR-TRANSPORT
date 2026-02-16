"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

const HERO_IMAGES = [
  "/assets/truck1.jpeg",
  "/assets/truck2.jpeg",
  "/assets/truck3.jpeg",
  "/assets/truck4.jpeg",
  "/assets/truck5.jpeg",
  "/assets/truck6.jpeg",
  "/assets/truck7.jpeg",
  "/assets/truck8.jpeg",
  "/assets/truck9.jpeg",
  "/assets/truck10.jpeg",
]

const ROTATE_INTERVAL_MS = 3000

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    if (imgError) return
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % HERO_IMAGES.length)
    }, ROTATE_INTERVAL_MS)
    return () => clearInterval(id)
  }, [imgError])

  return (
    <section className="relative min-h-[80vh] sm:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B1F3A]">
      {/* Background: rotating images every 3s */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/92 via-[#0B1F3A]/80 to-[#0B1F3A]/70 z-10" />
        {!imgError ? (
          <>
            {HERO_IMAGES.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`KSR Transport fleet ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-60 transition-opacity duration-700 ease-in-out"
                style={{ opacity: index === currentIndex ? 0.6 : 0, zIndex: index === currentIndex ? 1 : 0 }}
                onError={() => setImgError(true)}
              />
            ))}
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-slate-800 to-[#0B1F3A]" aria-hidden />
        )}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10 pointer-events-none z-[2]" />
      </div>

      <div className="container relative z-20 px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 md:pt-28 pb-10 sm:pb-12 min-w-0 w-full">
        <div className="max-w-4xl mx-auto text-center md:text-left min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">IBA Certified Transport Partner</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-sm">
                <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase">All India Permit</span>
              </span>
            </div>

            <h1 className="text-2xl min-[480px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight break-words">
              17 Years of Trusted <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-orange-400">
                Heavy Transport Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-6 sm:mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Specialized in Steel, ODC, Solar Panels & Industrial Logistics.
              National permit · Reliable, safe, and trusted across India.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-16">
              <Button size="lg" variant="outline" className="h-12 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm" asChild>
                <Link href="#clients">View Our Clients</Link>
              </Button>
            </div>

            {/* Stats – staggered reveal */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-12 border-t border-white/10 pt-6 sm:pt-8 mt-8 sm:mt-12 min-w-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={{
                visible: { transition: { staggerChildren: 0.08 } },
                hidden: {},
              }}
            >
              {[
                { label: "Years Experience", value: "17+" },
                { label: "Owned Vehicles", value: "40+" },
                { label: "Trailer Capacity", value: "32-40MT" },
                { label: "Branches", value: "5 States" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center md:text-left"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 16 },
                  }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
