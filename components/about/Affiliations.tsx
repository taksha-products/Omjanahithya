'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { BookOpen, MapPin, Hash } from 'lucide-react'

const AFFILIATIONS = [
  {
    logo: '/images/karnataka-emblem.png',
    useImage: true,
    label: 'Karnataka State Board',
    sub: 'SSLC Affiliated',
  },
  {
    icon: Hash,
    iconColor: 'text-blue-700',
    iconBg: 'bg-blue-50',
    label: 'DISE Code',
    sub: '29130101234',
  },
  {
    icon: BookOpen,
    iconColor: 'text-primary',
    iconBg: 'bg-primary/[0.08]',
    label: 'English Medium',
    sub: 'Nursery to Class 10',
  },
  {
    icon: MapPin,
    iconColor: 'text-slate-600',
    iconBg: 'bg-slate-100',
    label: 'Dakshina Kannada',
    sub: 'Bantwal District',
  },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
}

export function Affiliations() {
  return (
    <section className="bg-[#EEF2FF] py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">

        {/* Label */}
        <motion.p
          variants={fadeUp} custom={0}
          initial="hidden" whileInView="visible"
          viewport={{ once: true }}
          className="text-accent text-xs font-bold uppercase tracking-[0.2em] text-center mb-7"
        >
          Affiliations &amp; Recognition
        </motion.p>

        {/* 4 credential cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {AFFILIATIONS.map((a, i) => (
            <motion.div
              key={a.label}
              variants={fadeUp} custom={i * 0.08 + 0.05}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl px-5 py-4 flex items-center gap-4 border border-white/80 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              {/* Icon / Logo */}
              {a.useImage ? (
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={a.logo!}
                    alt={a.label}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${a.iconBg}`}>
                  {a.icon && <a.icon className={`w-5 h-5 ${a.iconColor}`} strokeWidth={1.75} />}
                </div>
              )}

              {/* Text */}
              <div>
                <p className="text-primary font-bold text-sm leading-tight">{a.label}</p>
                <p className="text-slate-400 text-xs mt-0.5">{a.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Affiliations
