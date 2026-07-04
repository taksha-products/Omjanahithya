'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronLeft, ChevronRight,
  Monitor, FlaskConical, Laptop, BookOpen, Trophy, UtensilsCrossed,
} from 'lucide-react'

const FACILITIES = [
  {
    label: 'Smart Classrooms',
    description: 'Technology-enabled classrooms for interactive learning.',
    photo: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=80',
    icon: Monitor,
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    iconBorder: 'border-blue-100',
  },
  {
    label: 'Science Lab',
    description: 'Well-equipped labs for hands-on science experiences.',
    photo: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&q=80',
    icon: FlaskConical,
    iconColor: 'text-accent',
    iconBg: 'bg-accent/10',
    iconBorder: 'border-orange-100',
  },
  {
    label: 'Computer Lab',
    description: 'Modern computers with internet for digital literacy.',
    photo: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&q=80',
    icon: Laptop,
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    iconBorder: 'border-teal-100',
  },
  {
    label: 'Library',
    description: 'Extensive collection of books and reference materials.',
    photo: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80',
    icon: BookOpen,
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
    iconBorder: 'border-violet-100',
  },
  {
    label: 'Playground',
    description: 'Spacious outdoor area for sports and physical education.',
    photo: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=500&q=80',
    icon: Trophy,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-50',
    iconBorder: 'border-amber-100',
  },
  {
    label: 'Canteen',
    description: 'Clean, hygienic canteen serving nutritious meals.',
    photo: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&q=80',
    icon: UtensilsCrossed,
    iconColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
    iconBorder: 'border-emerald-100',
  },
]

export function Facilities() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({
      left: dir === 'right' ? 280 : -280,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-[#FAFAFA] py-14 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">

        {/* Header row — label + H2 left, arrows right */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3"
            >
              Facilities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.07 }}
              className="font-heading font-black text-primary text-3xl lg:text-4xl"
            >
              Infrastructure &amp; Facilities
            </motion.h2>
          </div>

          {/* Scroll arrows */}
          <div className="flex items-center gap-2 mt-2 shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-accent hover:text-accent text-slate-400 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:border-accent hover:text-accent text-slate-400 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable cards row */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {FACILITIES.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="group relative bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 shrink-0 snap-start w-[220px] sm:w-[240px] overflow-visible"
            >
              {/* Photo */}
              <div className="relative h-44 rounded-t-2xl overflow-hidden">
                <Image
                  src={f.photo}
                  alt={`${f.label} at Om Janahithaya English Medium School Bantwal`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Icon badge — overlaps photo bottom */}
              <div className="px-4 -mt-5 mb-3 relative z-10">
                <div className={`w-10 h-10 rounded-full border-2 ${f.iconBg} ${f.iconBorder} bg-white flex items-center justify-center shadow-sm`}>
                  <f.icon className={`w-4 h-4 ${f.iconColor}`} strokeWidth={1.75} />
                </div>
              </div>

              {/* Info */}
              <div className="px-4 pb-5">
                <h3 className="text-primary font-bold text-sm mb-1.5">{f.label}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Facilities
