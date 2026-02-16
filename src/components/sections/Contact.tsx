"use client"

import { Section } from "@/components/ui/Section"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, User, ExternalLink } from "lucide-react"
import { useState } from "react"

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit"
const RECIPIENT_EMAIL = "ksrtransport9@gmail.com"

/** Head office coordinates (Hayathnagar, Hyderabad) - opens in Google Maps */
const GOOGLE_MAPS_URL = "https://www.google.com/maps?q=17.3311,78.5906"

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? ""

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get("name") as string)?.trim() || ""
    const phone = (formData.get("phone") as string)?.trim() || ""
    const email = (formData.get("email") as string)?.trim() || ""
    const message = (formData.get("message") as string)?.trim() || ""

    if (!name || !phone || !message) {
      setStatus("error")
      return
    }

    if (!accessKey) {
      setStatus("error")
      return
    }

    setStatus("sending")
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `KSR Transport – Contact from ${name}`,
          from_name: "KSR Transport Website",
          name,
          phone,
          email: email || "(not provided)",
          message,
          botcheck: formData.get("botcheck") || "",
        }),
      })
      const data = (await res.json()) as { success?: boolean }
      if (data.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <form className="space-y-3 sm:space-y-4 min-w-0" onSubmit={handleSubmit}>
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <div className="space-y-1.5 sm:space-y-2 min-w-0">
          <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">Name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            className="w-full min-h-[44px] h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316]/50 transition-all"
            placeholder="Your Name"
          />
        </div>
        <div className="space-y-1.5 sm:space-y-2 min-w-0">
          <label htmlFor="contact-phone" className="text-sm font-medium text-slate-700">Phone</label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            className="w-full min-h-[44px] h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316]/50 transition-all"
            placeholder="Your Phone Number"
          />
        </div>
      </div>
      <div className="space-y-1.5 sm:space-y-2 min-w-0">
        <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">Email (Optional)</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className="w-full min-h-[44px] h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316]/50 transition-all"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-1.5 sm:space-y-2 min-w-0">
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          className="w-full min-h-[120px] sm:min-h-[132px] sm:h-32 px-3 py-2 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#F97316]/50 focus:border-[#F97316]/50 transition-all resize-none"
          placeholder="How can we help you?"
        />
      </div>
      {status === "success" && (
        <p className="text-sm font-medium text-green-600 bg-green-50 px-3 py-2 rounded-md">
          Message sent. We’ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-600 bg-red-50 px-3 py-2 rounded-md">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <Button type="submit" className="w-full" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  )
}

export function Contact() {
  return (
    <Section id="contact" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-24 min-w-0">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[#F97316] font-bold uppercase tracking-wider mb-2 text-sm sm:text-base">Get in Touch</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0B1F3A] mb-4 sm:mb-6">
            Contact Us
          </h3>
          <p className="text-slate-600 mb-6 sm:mb-8 text-base sm:text-lg">
            Ready to move your heavy cargo? Contact us for a quote or inquiry.
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0B1F3A]/5 rounded-lg flex items-center justify-center shrink-0">
                <User className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B1F3A]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0B1F3A] text-lg">Managing Director</h4>
                <p className="text-slate-700 font-medium">K. Sudharshan Reddy</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0B1F3A]/5 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B1F3A]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0B1F3A] text-base sm:text-lg">Phone Numbers</h4>
                <div className="flex flex-col gap-0">
                   <a href="tel:+919396624567" className="text-slate-700 hover:text-[#F97316] transition-colors min-h-[44px] flex items-center py-1">93966 24567</a>
                   <a href="tel:+919441864333" className="text-slate-700 hover:text-[#F97316] transition-colors min-h-[44px] flex items-center py-1">94418 64333</a>
                   <a href="tel:04024204799" className="text-slate-700 hover:text-[#F97316] transition-colors min-h-[44px] flex items-center py-1">040-2420 4799 (Office)</a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0B1F3A]/5 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B1F3A]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0B1F3A] text-base sm:text-lg">Email</h4>
                 <a href="mailto:ksrtransport9@gmail.com" className="text-slate-700 hover:text-[#F97316] transition-colors break-all min-h-[44px] flex items-center">ksrtransport9@gmail.com</a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0B1F3A]/5 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#0B1F3A]" />
              </div>
              <div>
                <h4 className="font-bold text-[#0B1F3A] text-base sm:text-lg">Head Office Address</h4>
                <p className="text-slate-600 leading-relaxed max-w-sm text-sm sm:text-base mb-3">
                  4-12-15/P 19 EP, Plot No.19, KSR Residency,<br />
                  Road No.1, Arunodaya Nagar,<br />
                  Near Bhagyalatha Bus Stand,<br />
                  Hayathnagar, Hyderabad 500 070
                </p>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-lg bg-[#F97316] text-white text-sm font-semibold hover:bg-[#F97316]/90 transition-colors shadow-sm touch-manipulation"
                >
                  <ExternalLink className="w-4 h-4" />
                  View location
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form – emails to ksrtransport9@gmail.com via Web3Forms (free) */}
        <motion.div
          className="bg-slate-50 p-5 sm:p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4 sm:mb-6">Send us a Message</h3>
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  )
}
