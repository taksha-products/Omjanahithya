'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  GraduationCap,
  Star,
  BookOpen,
  Palette,
  BookMarked,
  Monitor,
  Trophy,
} from 'lucide-react';
import { PROGRAMS } from '@/lib/constants';
import { ProgramCardButton } from '@/components/shared/ProgramCardButton';

const GRADE_ICONS = [Star, BookOpen, Palette, BookMarked, Monitor, Trophy];

const inViewOnce = { once: true, margin: '-60px' } as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#FAFAFA] py-20 lg:py-28"
      aria-label="Our programs — Nursery to Class 10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-8 opacity-60"
        style={{
          backgroundImage: 'radial-gradient(#1A3FD430 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          width: 110,
          height: 110,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[32px] border-accent/15"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        <div className="mb-12 text-center">
          <motion.p
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-accent"
          >
            Our Programs
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={0.08}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mb-3 font-heading text-4xl font-black leading-tight tracking-tight text-primary lg:text-5xl"
          >
            From Nursery to Class 10—
            <br />
            <span className="text-accent">We&apos;ve Got You Covered</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.14}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mx-auto max-w-xl text-base leading-relaxed text-text-muted"
          >
            Comprehensive Karnataka State Board programs for every stage of
            learning, delivered in English medium from Arala, Bantwal.
          </motion.p>
        </div>

        {/* Mobile: 1 card · Tablet: 3 cards · Desktop: 6 cards (snap + swipe) */}
        <div
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] lg:snap-none lg:overflow-x-auto [&::-webkit-scrollbar]:hidden"
        >
          {PROGRAMS.map((program, i) => {
            const Icon = GRADE_ICONS[i];

            return (
              <motion.div
                key={program.id}
                data-program-card
                custom={i * 0.07}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={inViewOnce}
                className="
                  group/card flex shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                  w-full max-w-full
                  sm:snap-start sm:w-[calc((100%-2*1.25rem)/3)]
                  lg:snap-start lg:w-[calc((100%-5*1.25rem)/6)]
                "
              >
                <div className="flex-1 p-5">
                  <div className="mb-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ background: 'rgba(249,115,22,0.08)' }}
                    >
                      <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    </div>
                  </div>

                  <p className="mb-0.5 text-sm font-black uppercase tracking-wide text-primary">
                    {program.gradeLabel}
                  </p>
                  <p className="mb-0.5 text-sm font-semibold text-accent">
                    {program.stageName}
                  </p>
                  <p className="mb-3 text-xs text-text-muted">{program.subLabel}</p>
                  <p className="text-xs leading-relaxed text-text-muted">
                    {program.description}
                  </p>
                </div>

                <div className="relative mx-3 mb-3 h-36 overflow-hidden rounded-xl bg-gray-50">
                  <Image
                    src={program.image}
                    alt={`${program.stageName} students at Om Janahithaya School Bantwal`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>

                <div className="flex justify-start px-4 pb-4">
                  <ProgramCardButton href="/admissions" label="New Admissions" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-gray-100 bg-white px-6 py-5 shadow-md sm:flex-row sm:items-center sm:gap-6"
        >
          <div
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent"
          >
            <GraduationCap className="h-7 w-7 text-white" strokeWidth={1.75} />
          </div>

          <div className="flex-1">
            <p className="text-base font-black leading-tight text-primary sm:text-lg">
              A Strong Foundation.{' '}
              <span className="text-accent">A Bright Future.</span>
            </p>
            <p className="mt-0.5 text-sm text-text-muted">
              Empowering students at every stage with knowledge, values, and
              confidence for life.
            </p>
          </div>

          <Link
            href="/admissions"
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-lg bg-accent px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-md"
          >
            Explore Admissions
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
