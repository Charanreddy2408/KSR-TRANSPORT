"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0B1F3A] text-white pt-12 sm:pt-16 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="container px-4 sm:px-6 max-w-7xl mx-auto min-w-0">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4 sm:mb-6" aria-label="KSR Transport Home">
              <img
                src="/assets/logo.jpeg"
                alt="KSR Transport"
                className="h-10 w-auto max-h-12 min-h-[40px] object-contain object-left"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed mb-4 sm:mb-6 max-w-md">
              Specialized in heavy logistics, ODC transportation, and industrial movement across India with over 30 years of excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-[#F97316]">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {["Home", "About", "Fleet", "Services", "Clients", "Contact"].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                    className="text-slate-300 hover:text-white hover:translate-x-1 transition-all inline-block text-sm min-h-[44px] flex items-center py-2 -my-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-[#F97316]">Our Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Steel Transportation",
                "ODC Cargo",
                "Solar Panel Logistics",
                "Industrial Equipment",
                "Heavy Machinery"
              ].map((item) => (
                <li key={item} className="text-slate-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 text-[#F97316]">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-5 h-5 shrink-0 text-[#F97316] mt-0.5" />
                <span>
                  4-12-15/P 19 EP, Plot No.19, KSR Residency,<br />
                  Road No.1, Arunodaya Nagar,<br />
                  Near Bhagyalatha Bus Stand,<br />
                  Hayathnagar, Hyderabad 500 070
                </span>
              </li>
              <li className="flex items-start sm:items-center gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 shrink-0 text-[#F97316] mt-0.5 sm:mt-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919396624567" className="hover:text-white min-h-[44px] flex items-center py-1 -my-1">93966 24567</a>
                  <a href="tel:+919441864333" className="hover:text-white min-h-[44px] flex items-center py-1 -my-1">94418 64333</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-4 h-4 shrink-0 text-[#F97316]" />
                <a href="tel:04024204799" className="hover:text-white min-h-[44px] flex items-center py-1 -my-1">040-2420 4799</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300 min-w-0">
                <Mail className="w-4 h-4 shrink-0 text-[#F97316]" />
                <a href="mailto:ksrtransport9@gmail.com" className="hover:text-white break-all">ksrtransport9@gmail.com</a>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-slate-700/50 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 text-center sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <p>&copy; {currentYear} KSR Transport. All rights reserved.</p>
          <p>Designed & Developed for Excellence</p>
        </motion.div>
      </div>
    </footer>
  )
}
