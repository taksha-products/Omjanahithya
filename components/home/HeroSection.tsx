'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { IMAGES, VIDEOS } from '@/lib/images';

const bgImage = IMAGES.heroBackground;
const heroVideo = VIDEOS.heroDrone;

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
    <section className="relative w-full overflow-hidden" aria-label="Hero">
      <div className="relative h-[620px] w-full md:h-[680px] lg:h-[720px]">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={bgImage}
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-label="Om Janahithaya English Medium School campus aerial drone view, Arala, Bantwal, Karnataka"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div
            className="absolute inset-0 bg-gradient-to-r from-[#0F1B35]/85 via-[#0F1B35]/50 to-[#0F1B35]/20"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 lg:px-8">
          <div className="max-w-xl">
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
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/40">
                  <Play className="ml-0.5 h-3 w-3 fill-white text-white" aria-hidden="true" />
                </span>
                Virtual Tour
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Diagonal cut — bridges the dark hero into the white About section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 leading-none" aria-hidden="true">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="block h-12 w-full text-accent md:h-16 lg:h-20"
          >
            <path d="M0,80 L1440,10 L1440,80 Z" fill="#ffffff" />
            <line
              x1="0"
              y1="80"
              x2="1440"
              y2="10"
              stroke="currentColor"
              strokeWidth="2"
              strokeOpacity="0.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
