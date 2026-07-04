'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'

// ── Nav structure ─────────────────────────────────────────────
const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    children: [
      { label: 'About School',  href: '/about',           desc: 'Our story, vision & mission' },
      { label: 'Our Faculty',   href: '/faculty',         desc: 'Meet our dedicated educators' },
      { label: 'Facilities',    href: '/about#facilities', desc: 'Infrastructure & campus life' },
      { label: 'Core Values',   href: '/about#values',    desc: 'What we stand for' },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Nursery – UKG',       href: '/academics#pre-primary',  desc: 'Early years & kindergarten' },
      { label: 'Primary (1–5)',        href: '/academics#primary',      desc: 'Foundation years' },
      { label: 'Upper Primary (6–8)', href: '/academics#upper-primary', desc: 'Middle school' },
      { label: 'SSLC (9–10)',         href: '/academics#secondary',    desc: 'Board exam preparation' },
      { label: 'Results',             href: '/results',                desc: 'SSLC pass rates & toppers' },
      { label: 'Fee Structure',       href: '/fee-structure',          desc: 'Transparent & affordable' },
    ],
  },
  { label: 'Gallery',       href: '/gallery' },
  { label: 'News & Events', href: '/news-events' },
  { label: 'Contact',       href: '/contact' },
]

// ── Dropdown animation ────────────────────────────────────────
const dropdownVariants = {
  hidden:  { opacity: 0, y: -8, scale: 0.98 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.2,  ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -6, scale: 0.97, transition: { duration: 0.15 } },
}

// ── Single desktop dropdown item ──────────────────────────────
function DropItem({ label, href, desc, onClick }: {
  label: string; href: string; desc: string; onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-orange-50 group transition-colors duration-150"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div>
        <p className="text-primary font-semibold text-sm group-hover:text-accent transition-colors">{label}</p>
        <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
      </div>
    </Link>
  )
}

export function Navbar() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu]         = useState<string | null>(null)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined)

  // Close on route change
  useEffect(() => { setOpenMenu(null); setMobileOpen(false) }, [pathname])

  // Close on outside click
  useEffect(() => {
    const handler = () => setOpenMenu(null)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const handleMouseEnter = (label: string) => {
    clearTimeout(timeoutRef.current)
    setOpenMenu(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 120)
  }

  const isActive = (href?: string) =>
    href ? (href === '/' ? pathname === '/' : pathname.startsWith(href)) : false

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="relative w-44 h-[52px]">
                <Image
                  src="/Omjanahithya Logo.png"
                  alt="Om Janahithaya English Medium School"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                  onMouseLeave={() => item.children && handleMouseLeave()}
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.children ? (
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                        openMenu === item.label
                          ? 'text-accent bg-orange-50'
                          : 'text-slate-600 hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openMenu === item.label ? 'rotate-180 text-accent' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`relative px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 block ${
                        isActive(item.href)
                          ? 'text-accent'
                          : 'text-slate-600 hover:text-primary hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full" />
                      )}
                    </Link>
                  )}

                  {/* Dropdown panel */}
                  <AnimatePresence>
                    {item.children && openMenu === item.label && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={`absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-50 ${
                          item.label === 'Academics' ? 'w-72' : 'w-64'
                        }`}
                        onMouseEnter={() => clearTimeout(timeoutRef.current)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.children.map((child) => (
                          <DropItem
                            key={child.label}
                            {...child}
                            onClick={() => setOpenMenu(null)}
                          />
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right: Apply Now + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/admissions"
                className="hidden sm:inline-flex items-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                Apply Now
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-slate-600 hover:bg-gray-50 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </nav>
      </header>

      {/* ── Mobile menu ───────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-x-0 top-[68px] z-40 bg-white border-b border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-5 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileAccordion(
                            mobileAccordion === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-3 rounded-xl text-sm font-semibold text-primary hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          mobileAccordion === item.label ? 'rotate-180 text-accent' : ''
                        }`} />
                      </button>

                      <AnimatePresence>
                        {mobileAccordion === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3"
                          >
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-accent hover:bg-orange-50 transition-colors"
                              >
                                <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-3 rounded-xl text-sm font-semibold transition-colors ${
                        isActive(item.href)
                          ? 'text-accent bg-orange-50'
                          : 'text-primary hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Apply Now */}
              <div className="pt-3 pb-2">
                <Link
                  href="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold text-sm px-5 py-3 rounded-xl w-full transition-colors duration-200"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
