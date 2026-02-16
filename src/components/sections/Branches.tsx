"use client"

import { Section } from "@/components/ui/Section"
import { BranchesMap } from "./BranchesMap"
import { motion } from "framer-motion"
import { MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

/** All KSR Transport branches with Google Maps coordinates (India). */
export const BRANCH_LOCATIONS = [
  { name: "Hyderabad (Head Office)", lat: 17.3328, lng: 78.6045, state: "Telangana" },
  { name: "Vizag", lat: 17.7392, lng: 83.2247, state: "Andhra Pradesh" },
  { name: "Vijayawada", lat: 16.5062, lng: 80.648, state: "Andhra Pradesh" },
  { name: "Chennai", lat: 13.0827, lng: 80.2707, state: "Tamil Nadu" },
  { name: "Bangalore", lat: 12.9716, lng: 77.5946, state: "Karnataka" },
  { name: "Ballari", lat: 15.1394, lng: 76.9214, state: "Karnataka" },
] as const

const branchGroups = [
  { state: "Telangana", cities: ["Hyderabad (Head Office)"], color: "bg-[#0B1F3A] text-white", lat: 17.3328, lng: 78.6045 },
  { state: "Andhra Pradesh", cities: ["Vizag", "Vijayawada"], color: "bg-[#F97316] text-white", lat: 17.7392, lng: 83.2247 },
  { state: "Tamil Nadu", cities: ["Chennai"], color: "bg-slate-100 text-slate-900 border border-slate-200", lat: 13.0827, lng: 80.2707 },
  { state: "Karnataka", cities: ["Bangalore", "Ballari"], color: "bg-slate-100 text-slate-900 border border-slate-200", lat: 12.9716, lng: 77.5946 },
]

export function Branches() {
  return (
    <Section id="branches" className="bg-slate-50">
      <motion.div
        className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[#F97316] font-bold uppercase tracking-wider mb-2 text-sm sm:text-base">
          Our Network
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-3">
          Strategic Presence Across India
        </h2>
        <p className="text-slate-600 text-sm sm:text-base">
          Hover on a pin for branch details · click a card to open in Google Maps.
        </p>
      </motion.div>

      <motion.div
        className="mb-6 sm:mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <BranchesMap />
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 min-w-0">
        {branchGroups.map((branch, index) => (
          <motion.div
            key={branch.state}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="min-w-0"
          >
            <Link
              href={`https://www.google.com/maps?q=${branch.lat},${branch.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg sm:rounded-xl p-3 sm:p-5 min-h-[72px] sm:min-h-0 flex items-center gap-2 sm:gap-3 group ${branch.color} shadow-md transition-transform hover:-translate-y-0.5 active:scale-[0.98] touch-manipulation`}
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 opacity-90" />
              <div className="min-w-0 flex-1">
                <h3 className="font-bold text-xs sm:text-base truncate">{branch.state}</h3>
                <p className="text-xs sm:text-sm opacity-90 mt-0.5 line-clamp-2">
                  {branch.cities.join(", ")}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100" />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
