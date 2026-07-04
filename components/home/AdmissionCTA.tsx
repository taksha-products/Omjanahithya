'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';
import { fadeUp, inViewViewport } from '@/lib/animations';

export default function AdmissionCTA() {
  return (
    <motion.section
      className="relative overflow-hidden bg-accent-gradient py-20 lg:py-24"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={inViewViewport}
    >
      <div className="grain-overlay pointer-events-none absolute inset-0" aria-hidden="true" />

      <span
        className="pointer-events-none absolute -left-4 top-1/2 -translate-y-1/2 select-none text-[120px] font-black leading-none text-white/5 sm:text-[160px] lg:text-[200px]"
        aria-hidden="true"
      >
        2025
      </span>

      <div
        className="pointer-events-none absolute -right-16 top-8 h-48 w-48 rounded-full border border-white/10 animate-float"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-12 left-[15%] h-24 w-24 rotate-45 border border-white/10 animate-float"
        style={{ animationDelay: '1.2s' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[20%] top-1/3 h-16 w-16 rounded-2xl bg-white/5 animate-float"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-white/40">
            Limited Seats Available
          </p>

          <h2 className="mt-4 text-5xl font-black tracking-tight text-white lg:text-7xl">
            Start Your Child&apos;s Journey Today
          </h2>

          <p className="mt-6 text-lg text-white/90 md:text-xl">
            Admissions open for 2025-26. Nursery to Class 10.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-10 py-4 font-bold text-accent shadow-xl transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              Apply Online Now
            </Link>
            <a
              href={`tel:${SCHOOL.phone}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border-2 border-white px-10 py-4 font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Us: {SCHOOL.phone}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
