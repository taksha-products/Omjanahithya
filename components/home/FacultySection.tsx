'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Award, GraduationCap } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

const FACULTY = [
  {
    name: 'Mrs. Lakshmi Rao',
    role: 'School Administration',
    subject: 'Principal',
    qualification: 'M.Ed, B.Ed',
    experience: '20+ Years',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
    subjectBg: 'bg-accent',
  },
  {
    name: 'Mr. Ravi Kumar',
    role: 'English Language & Literature',
    subject: 'English',
    qualification: 'M.A, B.Ed',
    experience: '18+ Years',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
    subjectBg: 'bg-[#1A3FD4]',
  },
  {
    name: 'Mrs. Sunita Shetty',
    role: 'Primary Classes',
    subject: 'Primary',
    qualification: 'B.Ed, D.Ed',
    experience: '12+ Years',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80',
    subjectBg: 'bg-emerald-600',
  },
  {
    name: 'Mr. Suresh Bhat',
    role: 'Physics & Chemistry',
    subject: 'Science',
    qualification: 'M.Sc, B.Ed',
    experience: '15+ Years',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    subjectBg: 'bg-violet-600',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function FacultySection() {
  return (
    <section
      id="faculty"
      className="relative overflow-hidden bg-[#F8F9FB] py-20 lg:py-28"
      aria-label="Faculty at Om Janahithaya English Medium School"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-accent/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-6 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#1A3FD420 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          width: 100,
          height: 100,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-14 text-center">
          <motion.span
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              mb-4 inline-block rounded-full border border-accent/40
              px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent
            "
          >
            Our Faculty
          </motion.span>

          <motion.h2
            variants={fadeUp}
            custom={0.08}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 font-heading text-4xl font-black leading-tight tracking-tight text-primary lg:text-5xl"
          >
            Meet Our <span className="text-accent">Dedicated</span> Educators
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.14}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-xl text-base text-slate-500"
          >
            Experienced teachers committed to every student&apos;s success
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {FACULTY.map((member) => (
            <motion.div
              key={member.name}
              variants={cardAnim}
              className="
                group relative cursor-pointer overflow-hidden rounded-3xl bg-white
                shadow-sm transition-shadow duration-500 hover:shadow-2xl
              "
            >
              <div
                className="
                  absolute bottom-8 left-0 top-8 z-20 w-1 origin-center scale-y-0
                  rounded-full bg-accent transition-transform duration-300 ease-out
                  group-hover:scale-y-100
                "
                aria-hidden="true"
              />

              <div className="relative h-60 overflow-hidden">
                <Image
                  src={member.photo}
                  alt={`${member.name} — ${member.role} at Om Janahithaya English Medium School Bantwal`}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                  aria-hidden="true"
                />

                <span
                  className={`absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest text-white ${member.subjectBg}`}
                >
                  {member.subject}
                </span>

                <div
                  className="
                    absolute right-3 top-3 flex items-center gap-1 rounded-full
                    bg-white/90 px-2.5 py-1 text-[10px] font-black text-primary backdrop-blur-sm
                  "
                >
                  <Award className="h-3 w-3 text-accent" strokeWidth={2.5} aria-hidden="true" />
                  {member.experience}
                </div>
              </div>

              <div className="p-5 pb-6">
                <h3 className="mb-0.5 text-lg font-black leading-tight text-primary">
                  {member.name}
                </h3>
                <p className="mb-1 text-sm text-slate-500">{member.role}</p>
                <p className="text-xs text-slate-400">{member.qualification}</p>

                <div
                  className="
                    mt-0 max-h-0 overflow-hidden
                    transition-all duration-300 ease-out
                    group-hover:mt-4 group-hover:max-h-12
                  "
                >
                  <Link
                    href="/faculty"
                    className="
                      inline-flex items-center gap-1.5 rounded-xl border border-accent/30
                      px-4 py-2 text-sm font-bold text-accent transition-all duration-200 hover:border-accent
                    "
                  >
                    View Profile
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="mb-5 flex items-center justify-center gap-2 text-sm text-slate-400">
            <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" />
            {SCHOOL.teacherCount} dedicated educators shaping futures in Bantwal &amp; Dakshina
            Kannada
          </p>

          <Link
            href="/faculty"
            className="
              inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4
              text-sm font-bold text-white transition-all duration-200
              hover:-translate-y-0.5 hover:bg-[#0F1424] hover:shadow-lg
            "
          >
            View All Faculty
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
