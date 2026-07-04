'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Award, Users, Presentation, Trophy } from 'lucide-react'

const STATS = [
  { icon: Award,        value: '25+',  label: 'Years of Excellence' },
  { icon: Users,        value: '500+', label: 'Students Empowered'  },
  { icon: Presentation, value: '30+',  label: 'Dedicated Teachers'  },
  { icon: Trophy,       value: '98%',  label: 'SSLC Success Rate'   },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
}

export function AboutHero() {
  return (
    <div className="relative">

      {/* ── Hero section ─────────────────────────────────── */}
      <section className="relative h-[420px] lg:h-[480px] overflow-hidden">

        {/* School building photo */}
        <Image
          src="/images/school-building.png"
          alt="Om Janahithaya English Medium School building, Arala, Bantwal, Dakshina Kannada"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark gradient — covers left 65%, fades to transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080E1A] via-[#080E1A]/85 to-[#080E1A]/20" />

        {/* Content — left aligned */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-8 flex flex-col justify-center pb-20">

          {/* Breadcrumb */}
          <motion.nav
            variants={fadeUp} custom={0}
            initial="hidden" animate="visible"
            className="flex items-center gap-2 text-slate-400 text-xs mb-6"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white">About</span>
          </motion.nav>

          {/* Section label */}
          <motion.p
            variants={fadeUp} custom={0.05}
            initial="hidden" animate="visible"
            className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            About Our School
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={fadeUp} custom={0.1}
            initial="hidden" animate="visible"
            className="font-heading font-black text-white text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight mb-5 max-w-xl"
          >
            Building Bright Futures
            <br />Since{' '}
            <span className="text-accent">1998</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp} custom={0.16}
            initial="hidden" animate="visible"
            className="text-slate-300 text-base lg:text-lg leading-relaxed max-w-md"
          >
            Discover our story, values, and commitment
            <br className="hidden sm:block" />
            to excellence in Bantwal.
          </motion.p>
        </div>
      </section>

      {/* ── Stats bar — overlaps hero bottom ─────────────── */}
      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-8 -mt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="bg-[#0D1B35] border border-white/[0.08] rounded-2xl shadow-2xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.08]"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 px-6 py-5"
            >
              {/* Icon circle */}
              <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                <stat.icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </div>

              {/* Value + label */}
              <div>
                <p className="text-white font-black text-2xl leading-none">{stat.value}</p>
                <p className="text-slate-400 text-xs mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  )
}

export default AboutHero
