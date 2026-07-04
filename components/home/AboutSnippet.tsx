'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Users, Presentation } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';
import { IMAGES } from '@/lib/images';

const ABOUT_STATS = [
  { icon: Calendar, value: SCHOOL.yearsExp, label: 'Years' },
  { icon: Users, value: SCHOOL.studentCount, label: 'Students' },
  { icon: Presentation, value: SCHOOL.teacherCount, label: 'Teachers' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function AboutSnippet() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
      aria-label="About Om Janahithaya School"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-4"
        style={{
          backgroundImage: 'radial-gradient(#1A3FD420 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          width: 120,
          height: 120,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent"
            >
              About Us
            </motion.p>

            <motion.h2
              custom={0.1}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 font-heading text-4xl font-black leading-tight tracking-tight text-primary lg:text-5xl"
            >
              A Legacy of Excellence
              <br className="hidden sm:block" />
              in <span className="text-accent">Bantwal</span>
            </motion.h2>

            <motion.div
              custom={0.15}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 h-1 w-12 rounded-full bg-accent"
            />

            <motion.div
              custom={0.2}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 space-y-4 text-base leading-relaxed text-text-muted"
            >
              <p>
                For over {SCHOOL.yearsExp}, {SCHOOL.aboutParagraph1}
              </p>
              <p>{SCHOOL.aboutParagraph2}</p>
            </motion.div>

            <motion.div
              custom={0.3}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10 grid grid-cols-3 gap-4"
            >
              {ABOUT_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  <div className="mb-2 flex justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                      <stat.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                    </div>
                  </div>
                  <p className="mb-0.5 text-2xl font-black leading-none text-primary">
                    {stat.value}
                  </p>
                  <p className="mb-2 text-xs font-medium text-text-muted">{stat.label}</p>
                  <div className="mx-auto h-0.5 w-6 rounded-full bg-accent" />
                </div>
              ))}
            </motion.div>

            <motion.div
              custom={0.4}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-light hover:shadow-lg"
              >
                Explore Our Story
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
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-6 z-0 h-32 w-32 rounded-full bg-accent/25"
            />

            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={IMAGES.schoolBuilding}
                alt="Om Janahithaya English Medium School building aerial view, Arala, Bantwal, Karnataka"
                width={720}
                height={520}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div
                className="absolute bottom-5 right-5 flex max-w-[220px] items-center gap-3 rounded-2xl bg-primary px-5 py-4 shadow-xl"
              >
                <div className="shrink-0">
                  <svg
                    className="h-9 w-9 text-accent"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <p className="text-sm font-bold leading-snug text-white">
                  Nurturing Minds.
                  <br />
                  Building Futures.
                </p>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-4 z-0"
              style={{
                backgroundImage: 'radial-gradient(#F9731640 1.5px, transparent 1.5px)',
                backgroundSize: '18px 18px',
                width: 100,
                height: 100,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
