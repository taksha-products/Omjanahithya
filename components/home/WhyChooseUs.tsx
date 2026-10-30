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
  Award,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Users,
    title: 'Experienced Faculty',
    description: '30+ dedicated teachers with years of classroom expertise',
  },
  {
    icon: Trophy,
    title: 'Outstanding Results',
    description: 'Consistent 95–98% pass rate in SSLC board exams',
  },
  {
    icon: GraduationCap,
    title: 'Affordable Education',
    description: 'Quality schooling accessible to every family in Bantwal',
  },
  {
    icon: Monitor,
    title: 'Smart Classrooms',
    description: 'Technology-enabled learning environment for modern students',
  },
  {
    icon: Palette,
    title: 'Holistic Development',
    description: 'Sports, arts, cultural events, and co-curricular activities',
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
      className="relative overflow-hidden bg-[#F8F9FB] py-20 lg:py-28"
      aria-label="Why choose Om Janahithaya School"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left — heading + photo + stats strip */}
          <div>
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
              Why Choose Us
            </motion.span>

            <motion.h2
              variants={fadeUp}
              custom={0.08}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 font-heading text-4xl font-black leading-tight tracking-tight text-primary lg:text-5xl"
            >
              Why Bantwal&apos;s Parents Choose{' '}
              <span className="text-accent">Om Janahithaya</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={0.14}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-8 max-w-md text-base leading-relaxed text-text-muted"
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
              className="overflow-hidden rounded-2xl shadow-md ring-1 ring-gray-100"
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

              <div className="flex bg-primary">
                <div className="flex flex-1 items-center gap-3 border-r border-white/10 px-5 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Trophy className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-lg font-black leading-none text-accent">95–98%</p>
                    <p className="mt-0.5 text-xs text-white/70">SSLC Pass Rate</p>
                  </div>
                </div>
                <div className="flex flex-1 items-center gap-3 px-5 py-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Award className="h-5 w-5 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-lg font-black leading-none text-white">25+</p>
                    <p className="mt-0.5 text-xs text-white/70">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right — feature cards */}
          <div className="grid grid-cols-2 content-start gap-4 lg:mt-16">
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
                    group flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm
                    transition-all duration-300
                    hover:-translate-y-0.5 hover:border-accent/20 hover:shadow-md
                  "
                >
                  <div
                    className="
                      mb-4 flex h-12 w-12 items-center justify-center rounded-full
                      border-2 border-accent/30 bg-accent/10
                      transition-colors duration-300 group-hover:border-accent/50 group-hover:bg-accent/15
                    "
                  >
                    <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  </div>

                  <h3 className="mb-2 text-sm font-bold leading-snug text-primary lg:text-base">
                    {feature.title}
                  </h3>

                  <p className="flex-1 text-xs leading-relaxed text-text-muted lg:text-sm">
                    {feature.description}
                  </p>

                  <div className="mt-4 h-0.5 w-10 rounded-full bg-accent" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA — navy band only */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 overflow-hidden rounded-2xl bg-primary shadow-lg"
        >
          <div className="flex flex-col items-start gap-6 px-7 py-7 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent">
              <School className="h-7 w-7 text-white" strokeWidth={1.75} aria-hidden="true" />
            </div>

            <div className="flex-1">
              <p className="text-lg font-black leading-tight text-white lg:text-xl">
                Ready to Give Your Child the Best Start?
              </p>
              <p className="mt-1 text-sm text-white/70">
                Join hundreds of happy families in Bantwal and Dakshina Kannada.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="
                  inline-flex items-center gap-2 whitespace-nowrap rounded-xl
                  bg-accent px-6 py-3 text-sm font-bold text-white
                  transition-all duration-200 hover:bg-orange-500
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
