"use client"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },

  { href: "#contact", label: "Contact" },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [hideHeader, setHideHeader] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    let lastScroll = window.scrollY
    const onScroll = () => {
      if (window.innerWidth < 768) {
        setHideHeader(window.scrollY > lastScroll && window.scrollY > 40)
        lastScroll = window.scrollY
      }
      setScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Helper to detect mobile screen
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <>
      {/* Only show header if not mobile menu open on mobile */}
      {!(isMobile && open) && (
        <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${hideHeader ? "-translate-y-full" : "translate-y-0"} md:translate-y-0 ${scrolled ? "bg-white shadow" : "bg-transparent"}`}>
          <div className="container mx-auto px-6 flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Adrilink Logo" className="h-18 w-18" />
              <span className={`font-bold text-2xl md:text-4xl ${scrolled ? "text-black" : "text-white"}`}>Adrilink Limited</span>
            </Link>
            <nav className="hidden md:flex gap-8">
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} className={`${scrolled ? "text-black hover:text-primary" : "text-white hover:text-accent"} font-medium transition-colors`}>
                  {link.label}
                </a>
              ))}
            </nav>
            <button className={`md:hidden p-2 rounded ${scrolled ? "text-black" : "text-white"}`} onClick={() => setOpen(true)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>
      )}
      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white/60 backdrop-blur-sm flex justify-end" onClick={() => setOpen(false)}>
          <nav
            className="relative w-4/5 max-w-xs h-full bg-white rounded-l-2xl shadow-2xl p-6 flex flex-col gap-8 animate-slide-in"
            onClick={e => e.stopPropagation()}
          >
            {/* Logo and close button */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Adrilink Logo" className="h-18 w-18" />
                <span className="font-bold text-primary">Adrilink Limited</span>
              </div>
              <button className="p-2 rounded-full bg-accent/20 hover:bg-accent/40 text-accent" onClick={() => setOpen(false)}>
                <X className="w-7 h-7" />
              </button>
            </div>
            <hr className="border-accent/30 mb-4" />
            {/* Menu links */}
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xl font-bold text-primary py-3 px-4 rounded-lg hover:bg-accent/30 focus:bg-accent/40 transition-colors tracking-wide shadow-sm"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
      <style jsx>{`
        @keyframes slide-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 0.3s cubic-bezier(.4,0,.2,1);
        }
      `}</style>
    </>
  )
}

export default Header
