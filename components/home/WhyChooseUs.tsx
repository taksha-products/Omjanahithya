'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Users,
  Trophy,
  GraduationCap,
  Palette,
  Monitor,
  Shield,
  School,
  ArrowRight,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: '30+ dedicated teachers with years of classroom expertise',
    highlight: '30+ Teachers  ·  Avg 10yrs Experience',
    large: true,
  },
  {
    icon: Trophy,
    title: 'Outstanding Results',
    description: 'Consistent 95–98% pass rate in SSLC board exams',
    accentWord: '95–98%',
  },
  {
    icon: GraduationCap,
    title: 'Affordable Education',
    description: 'Quality schooling accessible to every family in Bantwal',
  },
  {
    icon: Palette,
    title: 'Holistic Development',
    description: 'Sports, arts, cultural events, and co-curricular activities',
  },
  {
    icon: Monitor,
    title: 'Smart Classrooms',
    description: 'Technology-enabled learning environment for modern students',
  },
  {
    icon: Shield,
    title: 'Safe & Nurturing',
    description: 'Safe campus with caring environment for every child',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative overflow-hidden bg-[#080E1A] py-20 lg:py-28"
      aria-label="Why choose Om Janahithaya School"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-10 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(rgba(249,115,22,0.35) 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          width: 100,
          height: 140,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border-[28px] border-accent/20"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <motion.p
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent"
            >
              Why Choose Us
            </motion.p>

            <motion.h2
              variants={fadeUp}
              custom={0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 font-heading text-4xl font-black leading-tight tracking-tight text-white lg:text-5xl"
            >
              Why Bantwal&apos;s Parents
              <br />
              <span className="text-accent">Choose Us</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.14}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 max-w-md text-base leading-relaxed text-slate-400"
            >
              Providing academic excellence, character development, and a nurturing
              environment for every child in Bantwal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/teacher-students.png"
                alt="Indian teacher with students in school uniforms at Om Janahithaya English Medium School Bantwal"
                width={640}
                height={420}
                className="w-full object-cover"
                style={{ aspectRatio: '16/10' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-[#080E1A]/90 via-transparent to-transparent"
                aria-hidden="true"
              />

              <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                <div
                  className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#0D1B35]/90 px-4 py-3 backdrop-blur-sm"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15"
                  >
                    <Trophy className="h-4 w-4 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-lg font-black leading-none text-accent">95–98%</p>
                    <p className="mt-0.5 text-xs text-slate-400">SSLC Pass Rate</p>
                  </div>
                </div>
                <div
                  className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-[#0D1B35]/90 px-4 py-3 backdrop-blur-sm"
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15"
                  >
                    <Trophy className="h-4 w-4 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-lg font-black leading-none text-white">25+</p>
                    <p className="mt-0.5 text-xs text-slate-400">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-0 grid grid-cols-2 content-start gap-4 lg:mt-16">
            {FEATURES.map((feature, i) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  custom={i * 0.07}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-40px' }}
                  className="
                    group rounded-2xl border border-white/5 bg-[#0D1B35] p-5
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5
                  "
                >
                  <div
                    className="
                      mb-4 flex h-12 w-12 items-center justify-center rounded-full
                      bg-accent/15 transition-colors duration-300 group-hover:bg-accent/25
                    "
                  >
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  </div>

                  <h3 className="mb-2 text-sm font-bold leading-snug text-white lg:text-base">
                    {feature.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-slate-400 lg:text-sm">
                    {feature.accentWord
                      ? feature.description
                          .split(feature.accentWord)
                          .map((part, idx, arr) =>
                            idx < arr.length - 1 ? (
                              <span key={idx}>
                                {part}
                                <span className="font-semibold text-accent">
                                  {feature.accentWord}
                                </span>
                              </span>
                            ) : (
                              <span key={idx}>{part}</span>
                            )
                          )
                      : feature.description}
                  </p>

                  {feature.highlight && (
                    <p className="mt-3 text-xs font-semibold text-accent">
                      {feature.highlight}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mt-14 overflow-hidden rounded-2xl border border-white/10"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/school-night.png"
              alt=""
              fill
              className="object-cover object-center opacity-20"
              sizes="100vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#0D1B35]/85" aria-hidden="true" />
          </div>

          <div
            className="relative z-10 flex flex-col items-start gap-6 px-7 py-7 sm:flex-row sm:items-center"
          >
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent"
            >
              <School className="h-7 w-7 text-white" strokeWidth={1.75} aria-hidden="true" />
            </div>

            <div className="flex-1">
              <p className="text-lg font-black leading-tight text-white lg:text-xl">
                Ready to Give Your Child the Best Start?
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Join hundreds of happy families in Bantwal and Dakshina Kannada.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-2 whitespace-nowrap rounded-xl
                  bg-accent px-6 py-3 text-sm font-bold text-white
                  transition-all duration-200 hover:bg-amber-500
                "
              >
                Schedule a Visit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/admissions"
                className="
                  inline-flex items-center gap-2 whitespace-nowrap rounded-xl
                  border-2 border-white/30 bg-transparent px-6 py-3 text-sm font-bold text-white
                  transition-all duration-200 hover:border-white/50 hover:bg-white/10
                "
              >
                Apply Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
