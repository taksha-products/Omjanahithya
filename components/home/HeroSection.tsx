'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  BookOpen,
  Trophy,
  Globe,
  GraduationCap,
  Users,
  Presentation,
  Award,
  Building2,
  Play,
} from 'lucide-react';
import { IMAGES } from '@/lib/images';

/** Aerial campus background — do not change src */
const bgImage = IMAGES.heroBackground;

const FEATURE_CARDS = [
  {
    icon: BookOpen,
    title: 'Academic',
    subtitle: 'Excellence',
  },
  {
    icon: Trophy,
    title: '98%',
    subtitle: 'Board Results',
  },
  {
    icon: Globe,
    title: 'Holistic',
    subtitle: 'Development',
  },
  {
    icon: GraduationCap,
    title: 'SSLC',
    subtitle: 'Specialist School',
  },
];

const STATS = [
  { icon: Users, value: '500+', label: 'Students' },
  { icon: Presentation, value: '30+', label: 'Faculty' },
  { icon: Award, value: '25+', label: 'Years of Excellence' },
  { icon: Building2, value: '98%', label: 'Board Pass Rate' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative w-full" aria-label="Hero">
      <div className="relative h-[620px] w-full overflow-hidden md:h-[680px] lg:h-[720px]">
        <Image
          src={bgImage}
          alt="Om Janahithaya English Medium School campus aerial view, Arala, Bantwal, Karnataka"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0F1B35]/85 via-[#0F1B35]/50 to-[#0F1B35]/20"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 lg:px-8">
          <div className="flex w-full items-center justify-between gap-8">
            <div className="max-w-xl flex-1">
              <motion.p
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent"
              >
                Welcome to Om Janahithaya
              </motion.p>

              <motion.h1
                custom={0.1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-3 font-heading font-black leading-[1.05] tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
              >
                Nurturing Young Minds
                <br />
                For <span className="text-accent">A Brighter Future</span>
              </motion.h1>

              <motion.p
                custom={0.2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-8 max-w-md text-base leading-relaxed text-white/75 lg:text-lg"
              >
                Quality English Medium education from Nursery to Class 10 in the
                heart of Bantwal, Dakshina Kannada.
              </motion.p>

              <motion.div
                custom={0.3}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/30"
                >
                  Explore Admissions
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                >
                  <span
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40"
                  >
                    <Play className="ml-0.5 h-3 w-3 fill-white text-white" aria-hidden="true" />
                  </span>
                  Virtual Tour
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="hidden shrink-0 flex-col gap-3 lg:flex"
            >
              {FEATURE_CARDS.map((card, i) => (
                <motion.div
                  key={card.subtitle}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="flex w-52 items-center gap-4 rounded-xl bg-white px-5 py-3.5 shadow-lg transition-shadow duration-200 hover:shadow-xl"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10"
                  >
                    <card.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="text-sm font-black leading-tight text-primary">{card.title}</p>
                    <p className="text-xs font-medium text-text-muted">{card.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-12 max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="grid grid-cols-2 divide-y divide-gray-100 rounded-2xl bg-white px-4 py-5 shadow-2xl shadow-black/15 md:grid-cols-4 md:divide-x md:divide-y-0"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 px-6 py-3 md:py-0">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10"
              >
                <stat.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
              </div>
              <div>
                <p className="text-2xl font-black leading-none tracking-tight text-primary">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-xs font-medium text-text-muted">{stat.label}</p>
                <div className="mt-1.5 h-0.5 w-8 rounded-full bg-accent" aria-hidden="true" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
