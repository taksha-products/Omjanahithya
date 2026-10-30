'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { SCHOOL } from '@/lib/constants';

function useCountUp(target: number, start: number, duration = 1.6) {
  const [count, setCount] = useState(start);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const startTime = performance.now();
    const range = target - start;

    const tick = (now: number) => {
      const elapsed = (now - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + range * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, start, duration]);

  return { ref, count };
}

function StatItem({
  value,
  suffix,
  label,
  from,
}: {
  value: number;
  suffix: string;
  label: string;
  from: number;
}) {
  const { ref, count } = useCountUp(value, from);

  return (
    <div ref={ref} className="text-center">
      <p className="text-3xl font-black leading-none text-primary">
        {count}
        {suffix}
      </p>
      <p className="mt-1.5 text-xs font-medium leading-tight text-slate-400">{label}</p>
    </div>
  );
}

const HIGHLIGHTS = [
  'Karnataka State Board SSLC curriculum',
  'Nursery to Class 10 — one trusted school',
  'English medium education in Bantwal since 1998',
  '98% SSLC pass rate, year after year',
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white pb-20 pt-8 lg:pb-28 lg:pt-10"
      aria-label="About Om Janahithaya English Medium School Bantwal"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-12 right-6 opacity-25"
        style={{
          backgroundImage: 'radial-gradient(#0F1B3525 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          width: 130,
          height: 130,
        }}
      />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:pr-4">
            <motion.span
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                mb-5 inline-block rounded-full border border-accent/30
                px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent
              "
            >
              About Us
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.07}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-2 font-heading text-4xl font-black leading-tight tracking-tight text-primary lg:text-5xl"
            >
              A Legacy of Excellence{' '}
              <span className="block">
                in <span className="text-accent">Bantwal</span>
              </span>
            </motion.h2>

            <motion.div
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-6 h-1 w-14 rounded-full bg-accent"
            />

            <motion.div
              variants={fadeUp}
              custom={0.14}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 space-y-4 text-base leading-relaxed text-slate-600"
            >
              <p>
                For over {SCHOOL.yearsExp}, {SCHOOL.aboutParagraph1}
              </p>
              <p>{SCHOOL.aboutParagraph2}</p>
            </motion.div>

            <motion.ul
              variants={fadeUp}
              custom={0.19}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10 space-y-3"
            >
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              variants={fadeUp}
              custom={0.24}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10 grid grid-cols-2 gap-4 border-b border-t border-gray-100 py-6 sm:grid-cols-4"
            >
              <StatItem value={25} suffix="+" label="Years of Trust" from={18} />
              <StatItem value={500} suffix="+" label="Students" from={460} />
              <StatItem value={30} suffix="+" label="Educators" from={22} />
              <StatItem value={98} suffix="%" label="SSLC Result" from={88} />
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={0.29}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href="/about"
                className="
                  inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5
                  text-sm font-bold text-white transition-all duration-200
                  hover:-translate-y-0.5 hover:bg-[#0F1424] hover:shadow-lg
                "
              >
                Explore Our Story
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>

          <div className="relative lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl lg:h-[480px]"
            >
              <Image
                src="/images/schoolimage.JPG"
                alt="Om Janahithaya English Medium School campus, Arala, Bantwal"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#080E1A]/40 via-transparent to-transparent"
                aria-hidden="true"
              />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="absolute bottom-6 right-6 rounded-2xl bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur-sm"
              >
                <p className="text-sm font-black leading-tight text-primary">Nurturing Minds.</p>
                <p className="text-sm font-black leading-tight text-accent">Building Futures.</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.88, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="
                absolute -bottom-8 -left-4 h-[160px] w-[160px] overflow-hidden rounded-2xl
                border-4 border-white shadow-2xl lg:-left-8 lg:h-[200px] lg:w-[200px]
              "
            >
              <Image
                src="/images/teacher-students.png"
                alt="Students learning at Om Janahithaya School Bantwal"
                fill
                className="object-cover object-top"
                sizes="200px"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="
                absolute -right-3 -top-5 rounded-2xl bg-accent px-5 py-4 text-center
                text-white shadow-xl lg:-right-6
              "
            >
              <p className="text-3xl font-black leading-none">25+</p>
              <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-white/80">
                Years of
                <br />
                Excellence
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
