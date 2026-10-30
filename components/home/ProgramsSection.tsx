'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { PROGRAMS as PROGRAMS_DATA } from '@/lib/constants';

const PROGRAM_META: Record<
  string,
  {
    label: string;
    title: string;
    age: string;
    points: string[];
    href: string;
  }
> = {
  nursery: {
    label: 'Nursery',
    title: 'Early Years — Pre-Primary',
    age: 'Ages 3–4',
    points: ['Structured play & storytelling', 'Phonics and early numeracy', 'Social skill development'],
    href: '/academics#pre-primary',
  },
  lkg: {
    label: 'LKG',
    title: 'Foundation Stage — Lower Kindergarten',
    age: 'Ages 4–5',
    points: ['Alphabet & number recognition', 'Rhymes, art & craft', 'Building classroom confidence'],
    href: '/academics#pre-primary',
  },
  ukg: {
    label: 'UKG',
    title: 'Preparatory Stage — Upper Kindergarten',
    age: 'Ages 5–6',
    points: ['Reading & writing readiness', 'Basic maths concepts', 'School routine & discipline'],
    href: '/academics#pre-primary',
  },
  primary: {
    label: 'Class 1–5',
    title: 'Primary Years',
    age: 'Ages 6–11',
    points: ['Karnataka State Board syllabus', 'English medium instruction', 'Co-curricular & sports'],
    href: '/academics#primary',
  },
  'upper-primary': {
    label: 'Class 6–8',
    title: 'Middle School',
    age: 'Ages 11–14',
    points: ['Science & Maths depth', 'Computer lab sessions', 'Leadership & cultural programs'],
    href: '/academics#upper-primary',
  },
  secondary: {
    label: 'Class 9–10',
    title: 'SSLC Preparation',
    age: 'Ages 14–16',
    points: ['98% board pass rate', 'Regular mock exams & tests', 'Personal mentoring & guidance'],
    href: '/academics#secondary',
  },
};

const PROGRAMS = PROGRAMS_DATA.map((program) => {
  const meta = PROGRAM_META[program.id];
  return {
    id: program.id,
    label: meta.label,
    title: meta.title,
    age: meta.age,
    desc: program.description,
    points: meta.points,
    href: meta.href,
    photo: program.image,
  };
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

const expandTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] };

/** Uniform description color — overrides any inherited link/accent styling */
const DESC_COLLAPSED =
  'text-text-muted [&_*]:!text-text-muted [&_a]:!text-text-muted [&_a]:no-underline [&_a]:pointer-events-none';
const DESC_EXPANDED =
  'text-white/70 [&_*]:!text-white/70 [&_a]:!text-white/70 [&_a]:no-underline [&_a]:pointer-events-none';

function ProgramThumbnail({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg ring-2 ring-gray-100">
      <Image src={src} alt={alt} fill className="object-cover object-center" sizes="96px" />
    </div>
  );
}

function ProgramPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-center"
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
    </div>
  );
}

function ProgramCta({ href, isOpen }: { href: string; isOpen: boolean }) {
  return (
    <Link
      href={href}
      className={`
        inline-flex shrink-0 items-center gap-2.5 rounded-full px-6 py-3.5
        text-sm font-semibold transition-all duration-300
        ${
          isOpen
            ? 'bg-white text-primary hover:bg-white/90'
            : 'bg-primary/[0.06] text-primary group-hover/card:bg-accent group-hover/card:text-white'
        }
      `}
    >
      Learn More
      <ArrowUpRight
        className={`h-4 w-4 transition-transform duration-300 ${!isOpen ? 'group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5' : ''}`}
        aria-hidden="true"
      />
    </Link>
  );
}

export default function ProgramsSection() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="programs"
      className="bg-[#F8F9FB] py-20 lg:py-28"
      aria-label="Academic programs at Om Janahithaya English Medium School Bantwal"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <motion.span
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              mb-4 inline-block rounded-full border border-accent/30
              px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent
            "
          >
            Our Programs
          </motion.span>
          <motion.h2
            variants={fadeUp}
            custom={0.08}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-3 font-heading text-4xl font-black leading-tight tracking-tight text-primary lg:text-5xl"
          >
            From Nursery to Class 10 —{' '}
            <span className="block text-accent">We&apos;ve Got You Covered</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={0.14}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-xl text-base text-slate-500"
          >
            Comprehensive Karnataka State Board programs for every stage of learning,
            delivered in English medium from Arala, Bantwal.
          </motion.p>
        </div>

        <div className="space-y-4" onMouseLeave={() => setActive(null)}>
          {PROGRAMS.map((prog) => {
            const isOpen = active === prog.id;

            return (
              <div
                key={prog.id}
                aria-expanded={isOpen}
                onMouseEnter={() => setActive(prog.id)}
                className={`
                  group/card overflow-hidden rounded-xl transition-all duration-400
                  ${
                    isOpen
                      ? 'bg-primary shadow-2xl ring-1 ring-primary/30'
                      : 'min-h-[168px] bg-white shadow-sm ring-1 ring-gray-100 hover:-translate-y-0.5 hover:shadow-lg hover:ring-accent/25 sm:min-h-[152px]'
                  }
                `}
              >
                <div className="p-7 lg:p-9">
                  {isOpen ? (
                    <>
                      <h3 className="font-heading text-2xl font-bold leading-snug text-white lg:text-[1.65rem]">
                        {prog.title}
                      </h3>
                      <AnimatePresence initial={false}>
                        <motion.div
                          key="expanded"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={expandTransition}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 grid grid-cols-1 gap-8 lg:mt-8 lg:grid-cols-[3fr_2fr] lg:items-start lg:gap-10">
                            <div className="flex min-w-0 flex-col">
                              <p className={`mb-5 text-base leading-relaxed ${DESC_EXPANDED}`}>
                                {prog.desc}
                              </p>
                              <ul className="mb-8 space-y-3">
                                {prog.points.map((pt) => (
                                  <li
                                    key={pt}
                                    className="flex items-start gap-3 text-[15px] leading-snug text-white/90"
                                  >
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10">
                                      <Check className="h-3 w-3 text-accent" strokeWidth={3} />
                                    </span>
                                    <span className="min-w-0 flex-1">{pt}</span>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-auto">
                                <ProgramCta href={prog.href} isOpen />
                              </div>
                            </div>

                            <ProgramPhoto
                              src={prog.photo}
                              alt={`${prog.title} at Om Janahithaya School Bantwal`}
                            />
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </>
                  ) : (
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0 flex-1">
                        <div className="mb-3 flex flex-wrap items-center gap-2.5">
                          <span className="rounded-full bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent">
                            {prog.label}
                          </span>
                          <span className="text-xs font-medium text-slate-400">{prog.age}</span>
                        </div>
                        <h3 className="font-heading text-xl font-bold leading-snug text-primary sm:text-2xl">
                          {prog.title}
                        </h3>
                        <p
                          className={`mt-3 line-clamp-2 min-h-12 text-base leading-relaxed ${DESC_COLLAPSED}`}
                        >
                          {prog.desc}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-4 sm:gap-5">
                        <div className="hidden sm:block">
                          <ProgramThumbnail
                            src={prog.photo}
                            alt={`${prog.title} at Om Janahithaya School Bantwal`}
                          />
                        </div>
                        <ProgramCta href={prog.href} isOpen={false} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="
            mt-10 flex flex-col items-start justify-between gap-4 rounded-2xl
            border border-gray-100 bg-white px-6 py-5 shadow-sm sm:flex-row sm:items-center
          "
        >
          <div>
            <p className="text-base font-black text-primary">
              A Strong Foundation. <span className="text-accent">A Bright Future.</span>
            </p>
            <p className="mt-0.5 text-sm text-slate-400">
              Empowering students at every stage with knowledge, values, and confidence for life.
            </p>
          </div>
          <Link
            href="/admissions"
            className="
              inline-flex shrink-0 items-center gap-2 rounded-xl bg-accent px-5 py-3
              text-sm font-bold text-white transition-all duration-200 hover:bg-orange-500
            "
          >
            Explore Admissions
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
