import Link from 'next/link'
import Image from 'next/image'
import {
  ChevronRight, MapPin, Phone, Mail, Clock,
  Code2, Lock, BadgeCheck, Heart,
  Facebook, Instagram, Twitter, Linkedin, Youtube,
} from 'lucide-react'

const QUICK_LINKS = [
  { label: 'Home',          href: '/' },
  { label: 'About Us',      href: '/about' },
  { label: 'Academics',     href: '/academics' },
  { label: 'Admissions',    href: '/admissions' },
  { label: 'Faculty',       href: '/faculty' },
  { label: 'Gallery',       href: '/gallery' },
  { label: 'Results',       href: '/results' },
  { label: 'Fees',          href: '/fee-structure' },
  { label: 'News & Events', href: '/news-events' },
  { label: 'Contact Us',    href: '/contact' },
]

const ACADEMICS_LINKS = [
  { label: 'Nursery to UKG',       href: '/academics#pre-primary' },
  { label: 'Primary (Class 1–5)',  href: '/academics#primary' },
  { label: 'Upper Primary (6–8)', href: '/academics#upper-primary' },
  { label: 'Secondary (9–10)',     href: '/academics#secondary' },
  { label: 'Fee Structure',        href: '/fee-structure' },
  { label: 'Results',              href: '/results' },
]

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: 'Visit Us',
    lines: ['Arala, Bantwal, Dakshina Kannada,', 'Karnataka — 574219'],
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+91-XXXXXXXXXX', '+91-XXXXXXXXXX'],
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: ['info@omjanahithaya.com'],
  },
  {
    icon: Clock,
    label: 'School Hours',
    lines: ['Monday – Friday', '8:30 AM – 4:30 PM'],
  },
]

const SOCIALS = [
  { label: 'Facebook',  href: 'https://facebook.com',  hoverColor: 'hover:text-[#1877F2]', Icon: Facebook  },
  { label: 'Instagram', href: 'https://instagram.com', hoverColor: 'hover:text-[#E1306C]', Icon: Instagram },
  { label: 'X',         href: 'https://twitter.com',   hoverColor: 'hover:text-white',      Icon: Twitter   },
  { label: 'LinkedIn',  href: 'https://linkedin.com',  hoverColor: 'hover:text-[#0A66C2]',  Icon: Linkedin  },
  { label: 'YouTube',   href: 'https://youtube.com',   hoverColor: 'hover:text-[#FF0000]',  Icon: Youtube   },
]

// ── Column heading with orange underline ──────────────────────
function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-white font-bold text-sm uppercase tracking-widest mb-2">
        {children}
      </p>
      <div className="w-8 h-0.5 bg-accent rounded-full" />
    </div>
  )
}

// ── Nav link with chevron ─────────────────────────────────────
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-1.5 text-slate-400 hover:text-accent text-sm transition-colors duration-150 group"
      >
        <ChevronRight className="w-3 h-3 shrink-0 text-slate-600 group-hover:text-accent transition-colors" />
        {label}
      </Link>
    </li>
  )
}

export function Footer() {
  return (
    <footer className="relative bg-[#080E1A]" aria-label="Om Janahithaya English Medium School footer">

      {/* Orange accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">

          {/* ── COL 1: Brand ─────────────────────────── */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-5 w-fit block">
              <div className="relative w-44 h-14">
                <Image
                  src="/images/Omjanahithya Lightheme-Logo.png"
                  alt="Om Janahithaya School logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Shaping Bright Futures Since 1998. Quality English Medium Education from
              Nursery to 10th Standard, Arala, Bantwal.
            </p>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-amber-400 text-sm">★</span>
              <span className="text-white text-xs font-bold">4.9</span>
              <span className="text-slate-400 text-xs">Google Rating</span>
              <span className="text-slate-600 text-xs">|</span>
              <span className="text-slate-400 text-xs">Karnataka State Board</span>
            </div>

            {/* Social icons — flat, brand color on hover */}
            <div className="flex items-center gap-4">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`text-slate-500 ${s.hoverColor} transition-colors duration-200`}
                >
                  <s.Icon className="w-4 h-4" strokeWidth={1.75} />
                </a>
              ))}
              {/* Google Maps icon — custom SVG, no Lucide equivalent */}
              <a
                href="https://maps.app.goo.gl/7PjEBmuvyGiEkD6j8"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="text-slate-500 hover:text-[#4285F4] transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── COL 2: Quick Links ───────────────────── */}
          <div>
            <ColHeading>Quick Links</ColHeading>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => <NavLink key={l.label} {...l} />)}
            </ul>
          </div>

          {/* ── COL 3: Academics ─────────────────────── */}
          <div className="relative overflow-hidden">
            <ColHeading>Academics</ColHeading>
            <ul className="space-y-2.5">
              {ACADEMICS_LINKS.map((l) => <NavLink key={l.label} {...l} />)}
            </ul>
          </div>

          {/* ── COL 4: Contact Us ────────────────────── */}
          <div>
            <ColHeading>Contact Us</ColHeading>
            <div className="space-y-3">
              {CONTACT_ITEMS.map((c) => (
                <div
                  key={c.label}
                  className="bg-[#0f1a29] rounded-xl px-4 py-3 border border-[#1e3a6e]/50"
                >
                  <p className="text-accent text-xs font-bold mb-1 flex items-center gap-1.5">
                    <c.icon className="w-3.5 h-3.5" strokeWidth={1.75} />
                    {c.label}
                  </p>
                  {c.lines.map((line, i) => (
                    <p key={i} className="text-slate-400 text-xs leading-relaxed">{line}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/[0.08]" />

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">

          {/* Copyright */}
          <p>© {new Date().getFullYear()} Om Janahithaya English Medium School, Arala, Bantwal. All rights reserved.</p>

          {/* Trust chips */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-emerald-500" strokeWidth={1.75} />
              Secure Website
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="w-3.5 h-3.5 text-blue-400" strokeWidth={1.75} />
              Karnataka Board Affiliated
            </span>
            <span className="text-slate-700">|</span>
            <span className="flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" strokeWidth={0} />
              Made with care in Karnataka
            </span>
          </div>

          {/* Credit */}
          <a
            href="http://taaksha.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-slate-300 transition-colors group"
          >
            <Code2 className="w-3.5 h-3.5 text-accent" strokeWidth={1.75} />
            Designed &amp; Developed by{' '}
            <span className="text-accent font-semibold group-hover:underline ml-1">Taksha</span>
          </a>

        </div>
      </div>

    </footer>
  )
}

export default Footer
