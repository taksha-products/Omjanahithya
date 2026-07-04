'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck, Star, HeartHandshake,
  MountainSnow, Lightbulb, Users,
} from 'lucide-react'

const VALUES = [
  {
    icon: ShieldCheck,
    label: 'Integrity',
    description: 'Honesty and ethical behavior in all that we do.',
    iconColor: 'text-blue-600',
    iconBg:    'bg-blue-50',
    underline: 'bg-blue-600',
  },
  {
    icon: Star,
    label: 'Excellence',
    description: 'Pursuing the highest standards in academics and character.',
    iconColor: 'text-accent',
    iconBg:    'bg-accent/10',
    underline: 'bg-accent',
  },
  {
    icon: HeartHandshake,
    label: 'Respect',
    description: 'Valuing every student, parent, and staff member.',
    iconColor: 'text-emerald-600',
    iconBg:    'bg-emerald-50',
    underline: 'bg-emerald-600',
  },
  {
    icon: MountainSnow,
    label: 'Perseverance',
    description: 'Encouraging resilience and continuous improvement.',
    iconColor: 'text-violet-600',
    iconBg:    'bg-violet-50',
    underline: 'bg-violet-600',
  },
  {
    icon: Lightbulb,
    label: 'Innovation',
    description: 'Embracing modern teaching methods and technology.',
    iconColor: 'text-amber-500',
    iconBg:    'bg-amber-50',
    underline: 'bg-amber-500',
  },
  {
    icon: Users,
    label: 'Community',
    description: 'Building strong ties with families and society.',
    iconColor: 'text-orange-500',
    iconBg:    'bg-orange-50',
    underline: 'bg-orange-500',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const cardAnim = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

export function CoreValues() {
  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3"
          >
            Our Values
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.07 }}
            className="font-heading font-black text-primary text-3xl lg:text-4xl"
          >
            Our Core Values
          </motion.h2>
        </div>

        {/* 6-card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {VALUES.map((v) => (
            <motion.div
              key={v.label}
              variants={cardAnim}
              className="group flex flex-col items-center text-center bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-md px-5 py-7 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${v.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                <v.icon className={`w-6 h-6 ${v.iconColor}`} strokeWidth={1.75} />
              </div>

              {/* Label */}
              <h3 className="text-primary font-bold text-sm mb-2">{v.label}</h3>

              {/* Description */}
              <p className="text-slate-400 text-xs leading-relaxed flex-1">{v.description}</p>

              {/* Colored underline */}
              <div className={`w-8 h-0.5 rounded-full mt-5 ${v.underline}`} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default CoreValues
