"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Fleet", href: "#fleet" },
  { name: "Services", href: "#services" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
]

const TOP_ZONE_PX = 100
const SHOW_NAVBAR_SCROLL_THRESHOLD = 80

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [mouseInTopZone, setMouseInTopZone] = React.useState(false)
  const [scrollY, setScrollY] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMouseInTopZone(e.clientY < TOP_ZONE_PX)
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const isVisible = scrollY < SHOW_NAVBAR_SCROLL_THRESHOLD || mouseInTopZone
  const isScrolled = scrollY > 20

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center min-h-[64px] sm:min-h-[72px] pt-[env(safe-area-inset-top)]",
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-2 sm:py-3" : "bg-transparent py-3 sm:py-4"
      )}
    >
      <div className="container flex items-center justify-between min-h-[48px] w-full min-w-0">
        <Link
          href="/"
          aria-label="KSR Transport Home"
          className="flex h-[48px] w-[140px] sm:w-[160px] shrink-0 items-center justify-center overflow-hidden rounded-md bg-white shadow-sm"
        >
          <img
            src="/assets/logo.jpeg"
            alt="KSR Transport"
            className="max-h-[44px] w-full max-w-[130px] sm:max-w-[150px] object-contain object-center"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#F97316] py-2",
                isScrolled ? "text-slate-700" : "text-white/90"
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button variant={isScrolled ? "primary" : "secondary"} size="sm" asChild>
            <Link href="#contact" className="gap-2">
              <Phone className="w-4 h-4" />
              <span>Call Us</span>
            </Link>
          </Button>
        </nav>

        <button
          type="button"
          className="md:hidden min-h-[44px] min-w-[44px] p-3 -mr-1 rounded-lg transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F97316]/50"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className={cn("w-6 h-6", isScrolled ? "text-slate-900" : "text-white")} /> : <Menu className={cn("w-6 h-6", isScrolled ? "text-slate-900" : "text-white")} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 px-4 py-4 pb-6 shadow-lg animate-in slide-in-from-top-2 max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="min-h-[44px] flex items-center text-base font-medium text-slate-700 hover:text-[#0B1F3A] py-2 -mx-2 px-2 rounded-md hover:bg-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full gap-2 min-h-[44px] mt-2" asChild>
              <Link href="#contact" onClick={() => setIsOpen(false)}>
                <Phone className="w-4 h-4" />
                Call Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
