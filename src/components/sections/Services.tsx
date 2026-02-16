"use client"

import { Section } from "@/components/ui/Section"
import { motion } from "framer-motion"
import { Truck, Factory, Box, BatteryCharging } from "lucide-react"

const services = [
  {
    title: "Steel Transport",
    description: "Specialized fleet for safe and efficient transportation of steel coils, plates, and structural components.",
    icon: Factory,
    accent: "from-amber-500 to-orange-600",
  },
  {
    title: "ODC Cargo",
    description: "Expert handling of Over Dimensional Cargo with specialized trailers and route planning.",
    icon: Truck,
    accent: "from-[#0B1F3A] to-slate-800",
  },
  {
    title: "Solar Panel Logistics",
    description: "Delicate handling and secure transport solutions for solar panels and renewable energy equipment.",
    icon: BatteryCharging,
    accent: "from-emerald-500 to-teal-600",
  },
  {
    title: "Metal Fabrication Logistics",
    description: "End-to-end logistics support for heavy metal fabrication and industrial engineering projects.",
    icon: Box,
    accent: "from-[#F97316] to-amber-600",
  },
]

export function Services() {
  return (
    <Section id="services" className="bg-[#0B1F3A] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A] via-[#0f2847] to-[#0B1F3A]" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F97316] to-transparent opacity-80" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F97316]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="relative">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#F97316] font-bold uppercase tracking-[0.2em] mb-3 text-sm sm:text-base">
            Our Expertise
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Transport Services
          </h2>
          <div className="w-20 h-1 bg-[#F97316] mx-auto rounded-full mb-4" />
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            We deliver excellence in every mile. Specialized solutions for your unique heavy transport needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 min-w-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative min-w-0"
            >
              <div className="h-full rounded-xl sm:rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-[#F97316]/40 hover:shadow-lg hover:shadow-[#F97316]/10">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${service.accent} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#F97316] transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
