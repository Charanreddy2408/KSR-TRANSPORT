import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Fleet } from "@/components/sections/Fleet"
import { Services } from "@/components/sections/Services"
import { Clients } from "@/components/sections/Clients"
import { CEO } from "@/components/sections/CEO"
import { Branches } from "@/components/sections/Branches"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="min-h-screen bg-slate-50 flex flex-col overflow-x-hidden min-w-0 w-full" role="main">
      <Hero />
      <About />
      <CEO />
      <Fleet />
      <Services />
      <Clients />
      <Branches />
      <Contact />
      <Footer />
      </main>
    </>
  );
}
