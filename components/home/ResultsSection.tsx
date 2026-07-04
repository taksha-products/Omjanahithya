'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Star, ArrowRight, Medal } from 'lucide-react'

// ── Year-wise results — keep your EXACT data ─────────────────
const YEARLY_RESULTS = [
  { year: 'SSLC 2024', percentage: 98, students: 147 },
  { year: 'SSLC 2023', percentage: 97, students: 134 },
  { year: 'SSLC 2022', percentage: 95, students: 138 },
]

// ── Toppers — keep your EXACT names and percentages ──────────
// Replace Unsplash URLs with real student photos when available
const TOPPERS = [
  {
    name: 'Ananya Rao',
    percentage: '98%',
    year: 'Class of 2024',
    photo: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400&q=80',
  },
  {
    name: 'Rohan Shetty',
    percentage: '97%',
    year: 'Class of 2024',
    photo: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80',
  },
  {
    name: 'Priya Gowda',
    percentage: '96%',
    year: 'Class of 2024',
    photo: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80',
  },
  {
    name: 'Karthik Bhat',
    percentage: '95%',
    year: 'Class of 2023',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
  },
]

// ── Achievement badges — keep your EXACT text ────────────────
const ACHIEVEMENTS = [
  { icon: Trophy, label: 'Academic Excellence' },
  { icon: Medal,  label: 'State Rank Holder' },
  { icon: Trophy, label: 'District Top 10' },
  { icon: Star,   label: 'Sports Champions' },
  { icon: Star,   label: 'Cultural Excellence' },
  // duplicate for seamless marquee loop
  { icon: Trophy, label: 'Academic Excellence' },
  { icon: Medal,  label: 'State Rank Holder' },
  { icon: Trophy, label: 'District Top 10' },
  { icon: Star,   label: 'Sports Champions' },
  { icon: Star,   label: 'Cultural Excellence' },
]

// ── Animated progress bar ─────────────────────────────────────
function ProgressBar({ percentage, delay = 0 }: { percentage: number; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="relative h-1.5 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-full bg-accent rounded-full"
        initial={{ width: 0 }}
        animate={inView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay }}
      />
    </div>
  )
}

// ── Fade-up animation ─────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
}

export function ResultsSection() {
  return (
    <section
      id="results"
      className="relative bg-[#080E1A] overflow-hidden py-20 lg:py-28"
      aria-label="Academic results and achievements of Om Janahithaya English Medium School Bantwal"
    >
      {/* Decorative: orange arc top-left */}
      <div
        aria-hidden
        className="absolute -top-16 -left-16 w-56 h-56 border-[28px] border-accent/15 rounded-full pointer-events-none"
      />
      {/* Decorative: dot grid bottom-right */}
      <div
        aria-hidden
        className="absolute bottom-24 right-6 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(rgba(249,115,22,0.4) 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          width: 100,
          height: 120,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">

        {/* ── Section header — centered ──────────────────────── */}
        <div className="text-center mb-14">
          <motion.span
            variants={fadeUp} custom={0}
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-accent text-xs font-bold uppercase tracking-[0.2em] border border-accent/30 rounded-full px-4 py-1.5 mb-4"
          >
            Academic Results
          </motion.span>

          <motion.h2
            variants={fadeUp} custom={0.08}
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="font-heading font-black text-white text-4xl lg:text-5xl leading-tight tracking-tight mb-4"
          >
            Pride of Excellence —{' '}
            <span className="text-accent">Consistent</span>{' '}
            SSLC Success
          </motion.h2>

          <motion.p
            variants={fadeUp} custom={0.14}
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-slate-400 text-base max-w-2xl mx-auto"
          >
            Year-on-year board results and student achievements that make Om Janahithaya
            a trusted name in Bantwal.
          </motion.p>
        </div>

        {/* ── Two-column: Results timeline + Topper grid ─────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14">

          {/* LEFT: Year-wise pass rate with progress bars */}
          <div>
            <motion.p
              variants={fadeUp} custom={0}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="text-white/50 text-xs font-bold uppercase tracking-widest mb-8"
            >
              Year-wise Pass Rate
            </motion.p>

            <div className="space-y-8">
              {YEARLY_RESULTS.map((r, i) => (
                <motion.div
                  key={r.year}
                  custom={i * 0.1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {/* Year + percentage on one line */}
                  <div className="flex items-end justify-between mb-3">
                    <span className="text-slate-400 text-sm font-semibold">{r.year}</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-accent font-black text-4xl leading-none">
                        {r.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Animated progress bar */}
                  <ProgressBar percentage={r.percentage} delay={i * 0.15 + 0.2} />

                  {/* Students count below bar */}
                  <p className="text-slate-500 text-xs mt-2">
                    {r.students} students passed
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Overall stat callout */}
            <motion.div
              variants={fadeUp} custom={0.4}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 bg-[#0D1B35] border border-white/5 rounded-2xl p-6 flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6 text-accent" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-white font-black text-xl leading-tight">95–98% average</p>
                <p className="text-slate-400 text-sm mt-0.5">
                  SSLC pass rate over last 3 years — one of Bantwal&apos;s highest
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Topper cards — 2×2 grid */}
          <div>
            <motion.p
              variants={fadeUp} custom={0}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="text-white/50 text-xs font-bold uppercase tracking-widest mb-8"
            >
              Our Toppers
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {TOPPERS.map((t, i) => (
                <motion.div
                  key={t.name}
                  custom={i * 0.08 + 0.1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative bg-[#0D1B35] rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/5 group"
                >
                  {/* Star badge — top right */}
                  <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                    <Star className="w-3.5 h-3.5 text-white fill-white" />
                  </div>

                  {/* Photo */}
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={t.photo}
                      alt={`${t.name} — SSLC topper at Om Janahithaya School Bantwal`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B35] via-transparent to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-4 pt-3">
                    <p className="text-accent font-black text-xl leading-none mb-1">
                      {t.percentage}
                    </p>
                    <p className="text-white font-bold text-sm leading-snug">{t.name}</p>
                    <p className="text-slate-500 text-xs mt-0.5 uppercase tracking-wider">
                      {t.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Achievement marquee ────────────────────────────── */}
        <div className="relative overflow-hidden border-t border-b border-white/[0.08] py-5 mb-10">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080E1A] to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080E1A] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
          >
            {ACHIEVEMENTS.map((a, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-[#0D1B35] border border-white/[0.08] rounded-full px-5 py-2.5 shrink-0"
              >
                <a.icon className="w-4 h-4 text-accent" strokeWidth={1.75} />
                <span className="text-white text-xs font-bold uppercase tracking-widest whitespace-nowrap">
                  {a.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── View all results CTA ───────────────────────────── */}
        <motion.div
          variants={fadeUp} custom={0.2}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/results"
            className="inline-flex items-center gap-2 border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-200"
          >
            View All Results
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}

export default ResultsSection
