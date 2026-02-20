"use client"

import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { useState } from "react"

/**
 * Client names (exact display text). Logo paths in CLIENT_LOGO_PATH; files in public/assets/.
 * Each card shows both logo (when available) and company name.
 */
const clientNames = [
  "Steel Authority of India Limited",
  "Larsen & Toubro Ltd",
  "MS Agarwal Foundries Ltd",
  "Hetero Drugs & Labs",
  "Aurobindo Pharma Ltd",
  "CS Constructions Pvt Ltd",
  "Shankar Narayana Constructions Pvt Ltd",
  "GVPR Engineers Limited",
  "Navayuga Engineering Company Ltd",
  "BSCPL Infrastructure Ltd",
  "KEC International Ltd",
  "Shapoorji Pallonji Ltd",
  "Simplex Infrastructures Ltd",
  "KVR Rail Infra Projects Pvt Ltd",
  "Chettinadu Cement Corporation Ltd",
  "Renewsys India Pvt Ltd",
  "Raghav Constructions",
  "Bharat Petroleum",
  "Indian Oil",
  "BPCL",
  "IOCL",
  "Madhucon",
  "Lanco",
  "DRDL",
  "Medhani",
  "My Home",
  "Aparna",
  "Singareni Collieries"
]

/**
 * Logo filename per client (file in public/assets/). Path rendered as /assets/<filename>.
 */
const CLIENT_LOGO_PATH: Record<string, string> = {
  "Steel Authority of India Limited": "steel authority of india logo.webp",
  "Larsen & Toubro Ltd": "larsend and tourbo logo.webp",
  "MS Agarwal Foundries Ltd": "ms agarwal logo.webp",
  "Hetero Drugs & Labs": "hetero logo.webp",
  "Aurobindo Pharma Ltd": "aurobindo logo.webp",
  "CS Constructions Pvt Ltd": "cs constructions logo.png",
  "BSCPL Infrastructure Ltd": "bscpl-logo.png",
  "KEC International Ltd": "kec_logo_.png",
  "Shapoorji Pallonji Ltd": "shapoorji logo.svg",
  "Simplex Infrastructures Ltd": "simplex-logo.png",
  "Shankar Narayana Constructions Pvt Ltd": "shankar narayana logo.webp",
  "GVPR Engineers Limited": "GVPR-Logo.png",
  "Navayuga Engineering Company Ltd": "navayuga logo.png",
  "Chettinadu Cement Corporation Ltd": "Chettinad-logo.png",
  "Renewsys India Pvt Ltd": "renewsys logo.avif",
  "Bharat Petroleum": "bharat-petroleum-logo.webp",
  "Indian Oil": "indian-oil-corporation logo.webp",
  BPCL: "bharat-petroleum-logo.webp",
  IOCL: "indian-oil-corporation logo.webp",
  Madhucon: "madhucon-logo.webp",
  "My Home": "My-Home-logo.jpg",
  Aparna: "aparna-logo.svg",
  DRDL: "drdl logo.webp",
  Medhani: "medhini-logo-120x120.webp",
  Lanco: "Lanco Infratech Logo.webp",
  "Singareni Collieries": "sigareni logo.webp",
}

function getLogoPath(name: string): string | null {
  const file = CLIENT_LOGO_PATH[name]
  if (!file) return null
  return `/assets/${encodeURIComponent(file)}`
}

function ClientCard({ name, className }: { name: string; className: string }) {
  const [imageError, setImageError] = useState(false)
  const path = getLogoPath(name)
  const hasLogo = Boolean(path && !imageError)

  return (
    <div
      className={`${className} flex flex-col items-center justify-center gap-2 min-h-[80px] text-center`}
      title={name}
    >
      <div className="h-10 min-h-10 flex items-center justify-center w-full">
        {hasLogo && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={path!}
            alt=""
            className="max-h-10 max-w-full w-auto object-contain shrink-0 block"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <span className="font-semibold text-xs sm:text-sm leading-tight line-clamp-2">
        {name}
      </span>
    </div>
  )
}

const clientsReversed = [...clientNames].reverse()

export function Clients() {
  return (
    <Section id="clients" className="bg-white overflow-hidden" container={false}>
      <motion.div
        className="container px-4 sm:px-6 mx-auto mb-8 sm:mb-12 text-center min-w-0"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-[#F97316] font-bold uppercase tracking-wider mb-2 text-sm sm:text-base">Our Trusted Partners</h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F3A]">
          Serving Industry Leaders
        </h3>
      </motion.div>

      <div className="relative flex flex-col gap-6 sm:gap-8 py-6 sm:py-8">
        {/* Row 1: Left to Right */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...clientNames, ...clientNames].map((name, index) => (
              <div
                key={`r1-${name}-${index}`}
                className="mx-3 sm:mx-4 md:mx-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-slate-50 border border-slate-100 rounded-lg shadow-sm text-[#0B1F3A] font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center min-w-[140px] sm:min-w-[180px] md:min-w-[200px]"
              >
                <ClientCard
                  name={name}
                  className="text-[#0B1F3A] font-semibold text-sm sm:text-base md:text-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex overflow-hidden group">
          <div className="flex animate-marquee-reverse whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...clientsReversed, ...clientsReversed].map((name, index) => (
              <div
                key={`r2-${name}-${index}`}
                className="mx-2 sm:mx-4 md:mx-8 px-3 sm:px-6 py-2.5 sm:py-3 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-700 font-medium text-sm sm:text-base md:text-lg flex items-center justify-center min-w-[140px] sm:min-w-[180px] md:min-w-[200px]"
              >
                <ClientCard
                  name={name}
                  className="text-slate-700 font-medium text-sm sm:text-base md:text-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </Section>
  )
}
