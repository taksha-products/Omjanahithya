'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Award, GraduationCap } from 'lucide-react'

// ── Faculty data ── keep EXACT names/roles/qualifications/experience ──
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
]

// ── Card container animation — stagger children ──────────────
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const cardAnim = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
}

export function FacultySection() {
  return (
    <section
      id="faculty"
      className="relative bg-[#F8F9FB] py-20 lg:py-28 overflow-hidden"
      aria-label="Faculty at Om Janahithaya English Medium School"
    >
      {/* ── Decorative: orange arc top-right ── */}
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-72 h-72 border-[40px] border-accent/10 rounded-full pointer-events-none"
      />

      {/* ── Decorative: dot grid bottom-left ── */}
      <div
        aria-hidden
        className="absolute bottom-10 left-6 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(#1A3FD420 1.5px, transparent 1.5px)',
          backgroundSize: '18px 18px',
          width: 100,
          height: 100,
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">
        {/* ── Section header ─────────────────────────────────── */}
        <div className="text-center mb-14">
          <motion.span
            variants={fadeUp} custom={0}
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="inline-block text-accent text-xs font-bold uppercase tracking-[0.2em] border border-accent/40 rounded-full px-4 py-1.5 mb-4"
          >
            Our Faculty
          </motion.span>

          <motion.h2
            variants={fadeUp} custom={0.08}
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="font-heading font-black text-primary text-4xl lg:text-5xl leading-tight tracking-tight mb-4"
          >
            Meet Our{' '}
            <span className="text-accent">Dedicated</span>{' '}
            Educators
          </motion.h2>

          <motion.p
            variants={fadeUp} custom={0.14}
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            className="text-slate-500 text-base max-w-xl mx-auto"
          >
            Experienced teachers committed to every student&apos;s success
          </motion.p>
        </div>

        {/* ── 4-column equal card grid ────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FACULTY.map((f) => (
            <motion.div
              key={f.name}
              variants={cardAnim}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
            >
              {/* ── Orange left border — grows on hover ── */}
              <div className="absolute left-0 top-8 bottom-8 w-1 rounded-full bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-out origin-center z-20" />

              {/* ── Photo — top 60% of card ── */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={f.photo}
                  alt={`${f.name} — ${f.role} at Om Janahithaya English Medium School Bantwal`}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Bottom gradient over photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Subject badge — bottom left of photo */}
                <span className={`absolute bottom-3 left-3 text-[10px] font-black uppercase tracking-widest text-white px-2.5 py-1 rounded-full ${f.subjectBg}`}>
                  {f.subject}
                </span>

                {/* Experience badge — top right */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Award className="w-3 h-3 text-accent" strokeWidth={2.5} />
                  {f.experience}
                </div>
              </div>

              {/* ── Info area ── */}
              <div className="p-5 pb-6">
                <h3 className="text-primary font-black text-lg leading-tight mb-0.5">{f.name}</h3>
                <p className="text-slate-500 text-sm mb-1">{f.role}</p>
                <p className="text-slate-400 text-xs">{f.qualification}</p>

                {/* ── View Profile — slides down on hover ── */}
                <div className="overflow-hidden max-h-0 group-hover:max-h-12 transition-all duration-300 ease-out mt-0 group-hover:mt-4">
                  <Link
                    href="/faculty"
                    className="inline-flex items-center gap-1.5 text-accent font-bold text-sm border border-accent/30 hover:border-accent px-4 py-2 rounded-xl transition-all duration-200"
                  >
                    View Profile
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ─────────────────────────────────────── */}
        <motion.div
          variants={fadeUp} custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          {/* Trust line */}
          <p className="text-slate-400 text-sm mb-5 flex items-center justify-center gap-2">
            <GraduationCap className="w-4 h-4 text-accent" />
            30+ dedicated educators shaping futures in Bantwal &amp; Dakshina Kannada
          </p>

          <Link
            href="/faculty"
            className="inline-flex items-center gap-2 bg-primary hover:bg-[#0F1424] text-white font-bold text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Faculty
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FacultySection
