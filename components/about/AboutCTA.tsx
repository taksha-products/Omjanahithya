'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck } from 'lucide-react'

export function AboutCTA() {
  return (
    <section className="relative overflow-hidden h-[180px] lg:h-[200px] flex items-center">

      {/* Background */}
      <Image
        src="/images/students-campus.png"
        alt="Students walking toward Om Janahithaya English Medium School campus, Bantwal"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay — almost full black on left, slightly transparent on right to reveal students */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080E1A]/95 via-[#080E1A]/85 to-[#080E1A]/55" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">
        <div className="flex items-center justify-between gap-8">

          {/* LEFT: Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 min-w-0"
          >
            <h2 className="font-heading font-black text-white text-2xl lg:text-3xl leading-tight tracking-tight mb-1">
              Ready to Shape<br />
              <span className="text-accent">Your Child&apos;s Future?</span>
            </h2>
            <p className="text-slate-300 text-xs mt-2">
              <span className="text-accent font-semibold">Admissions Open</span> for Nursery to Class 10
            </p>
            <p className="text-slate-400 text-xs mt-0.5">
              Join a legacy of excellence, values, and holistic development.
            </p>
          </motion.div>

          {/* RIGHT: Buttons stacked */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="flex flex-col gap-2.5 shrink-0"
          >
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-orange-500 text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg whitespace-nowrap"
            >
              Apply for Admission
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/50 hover:border-white text-white font-bold text-sm px-6 py-2.5 rounded-lg transition-all duration-200 whitespace-nowrap"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              Schedule a Visit
            </Link>
          </motion.div>

        </div>
      </div>

    </section>
  )
}

export default AboutCTA
