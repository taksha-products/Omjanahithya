'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

const FACTS = [
  // TODO: needs confirming with the school
  { label: 'Established', value: SCHOOL.established, ticker: `Est. ${SCHOOL.established}` },
  { label: 'Curriculum', value: SCHOOL.board, ticker: SCHOOL.board },
  { label: 'Classes', value: 'Nursery to Class 10', ticker: 'Nursery → Class 10' },
  { label: 'Medium of instruction', value: 'English', ticker: 'English medium' },
  // TODO: needs confirming with the school
  { label: 'SSLC results', value: `${SCHOOL.passPct} pass rate`, ticker: `${SCHOOL.passPct} SSLC pass rate` },
];

type Word = { text: string; style?: 'serif' | 'underline' };

const HEADLINE: Word[] = [
  { text: 'A' },
  { text: 'legacy' },
  { text: 'of' },
  { text: 'excellence', style: 'serif' },
  { text: 'in' },
  { text: 'Bantwal.', style: 'underline' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

function PaintedWord({
  word,
  progress,
  range,
  reduceMotion,
}: {
  word: Word;
  progress: MotionValue<number>;
  range: [number, number];
  reduceMotion: boolean;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const underline = useTransform(progress, [range[0], 1], [0, 1]);

  return (
    <motion.span
      style={{ opacity: reduceMotion ? 1 : opacity }}
      className={`relative inline-block ${
        word.style === 'serif'
          ? 'pr-1 font-accent-serif text-[1.12em] font-normal italic tracking-normal text-accent-deep'
          : ''
      }`}
    >
      {word.text}
      {word.style === 'underline' && (
        <svg
          aria-hidden="true"
          viewBox="0 0 200 12"
          preserveAspectRatio="none"
          className="absolute -bottom-1.5 left-0 h-3 w-[92%] text-accent lg:-bottom-2"
        >
          <motion.path
            d="M3 9 C 45 3, 110 2, 197 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            style={{ pathLength: reduceMotion ? 1 : underline }}
          />
        </svg>
      )}
    </motion.span>
  );
}

function Star({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function AboutSection() {
  const reduceMotion = useReducedMotion() ?? false;

  const headlineRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress: headlineProgress } = useScroll({
    target: headlineRef,
    offset: ['start 0.9', 'start 0.35'],
  });

  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: revealProgress } = useScroll({
    target: photoRef,
    offset: ['start end', 'center center'],
  });
  const { scrollYProgress: passProgress } = useScroll({
    target: photoRef,
    offset: ['start end', 'end start'],
  });
  // Card opens out to full bleed as it reaches the middle of the screen
  const clipPath = useTransform(
    revealProgress,
    [0, 1],
    ['inset(0% 8% 0% 8% round 28px)', 'inset(0% 0% 0% 0% round 0px)']
  );
  // Rests slightly zoomed so the building fills the wide frame; settles slowly on scroll
  const imageScale = useTransform(passProgress, [0, 1], [1.25, 1.15]);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white pb-16 pt-10 lg:pb-20 lg:pt-14"
      aria-label="About Om Janahithaya English Medium School Bantwal"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-deep">
              About the school
            </p>
            <h2
              ref={headlineRef}
              className="font-heading text-[2.5rem] font-bold leading-[1.12] tracking-[-0.03em] text-primary sm:text-6xl lg:text-[4.25rem]"
            >
              {HEADLINE.map((word, i) => {
                const step = 1 / HEADLINE.length;
                return (
                  <span key={word.text}>
                    <PaintedWord
                      word={word}
                      progress={headlineProgress}
                      range={[i * step * 0.8, i * step * 0.8 + step]}
                      reduceMotion={reduceMotion}
                    />
                    {i < HEADLINE.length - 1 && ' '}
                  </span>
                );
              })}
            </h2>
          </div>

          <motion.div
            variants={fadeUp}
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-5 lg:col-start-8 lg:pt-12"
          >
            <p className="text-lg leading-relaxed text-slate-800 lg:text-xl lg:leading-relaxed">
              Since {SCHOOL.established}, {SCHOOL.aboutParagraph1}
            </p>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {SCHOOL.aboutParagraph2}
            </p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Explore our story
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent transition-transform duration-300 group-hover:-rotate-45">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>

      <div ref={photoRef} className="relative mt-14 lg:mt-20">
        <motion.div
          style={{ clipPath: reduceMotion ? 'none' : clipPath }}
          className="relative aspect-[3/2] w-full overflow-hidden bg-slate-100 sm:aspect-[2/1] lg:aspect-auto lg:h-[min(42.857vw,680px)]"
        >
          <motion.div
            className="absolute inset-0 origin-[50%_40%]"
            style={{ scale: reduceMotion ? 1.15 : imageScale }}
          >
            <Image
              src="/images/campus-main-block.jpg"
              alt="Main block and courtyard of Om Janahithaya English Medium School, Arala, Bantwal"
              fill
              className="object-cover object-[50%_40%]"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>

        {/* Rotating stamp — decorative; the same facts are in the list below */}
        <div
          aria-hidden="true"
          className="absolute -top-12 right-[6%] z-10 h-24 w-24 sm:-top-14 sm:h-28 sm:w-28 lg:-top-16 lg:h-32 lg:w-32"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full animate-spin-slow motion-reduce:animate-none">
            <circle cx="50" cy="50" r="50" className="fill-primary" />
            <defs>
              <path id="about-stamp-circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
            </defs>
            <text className="fill-white text-[9.5px] font-bold uppercase tracking-[0.2em]">
              <textPath href="#about-stamp-circle">
                {/* TODO: year needs confirming with the school */}
                Est. {SCHOOL.established} · Arala · Bantwal ·
              </textPath>
            </text>
          </svg>
          <Star className="absolute inset-0 m-auto h-7 w-7 text-accent lg:h-9 lg:w-9" />
        </div>

        <p className="mx-auto mt-3 max-w-7xl px-5 text-sm text-slate-500 lg:px-8">
          The main block and courtyard during the monsoon, Arala, Bantwal.
        </p>
      </div>

      <dl className="sr-only">
        {FACTS.map((fact) => (
          <div key={fact.label}>
            <dt>{fact.label}</dt>
            <dd>{fact.value}</dd>
          </div>
        ))}
      </dl>

      {/* Moving ticker; reduced-motion visitors get the static row below instead */}
      <div
        aria-hidden="true"
        className="group mt-12 overflow-hidden border-y border-slate-200 py-5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:hidden lg:mt-16 lg:py-7"
      >
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {FACTS.map((fact, i) => (
                <li key={fact.label} className="flex items-center">
                  <span
                    className={`whitespace-nowrap px-6 lg:px-10 ${
                      i % 2
                        ? 'font-accent-serif text-[2.1rem] italic text-accent-deep lg:text-[4.25rem]'
                        : 'font-heading text-3xl font-bold tracking-[-0.02em] text-primary lg:text-6xl'
                    }`}
                  >
                    {fact.ticker}
                  </span>
                  <Star className="h-5 w-5 shrink-0 text-accent lg:h-8 lg:w-8" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <ul
        aria-hidden="true"
        className="mx-auto mt-12 hidden max-w-7xl flex-wrap items-center gap-x-5 gap-y-2 border-y border-slate-200 px-5 py-5 font-heading text-xl font-bold text-primary motion-reduce:flex lg:px-8"
      >
        {FACTS.map((fact) => (
          <li key={fact.label} className="flex items-center gap-5">
            {fact.ticker}
            <Star className="h-3.5 w-3.5 text-accent" />
          </li>
        ))}
      </ul>
    </section>
  );
}
