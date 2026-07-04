'use client'

import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
}

export function AboutStory() {
  return (
    <section
      className="bg-white py-14 lg:py-20"
      aria-label="Our story, vision and mission"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ── LEFT: Our Story ──────────────────────────── */}
          <div className="lg:col-span-5">

            {/* Label */}
            <motion.p
              variants={fadeUp} custom={0}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-4"
            >
              Our Story
            </motion.p>

            {/* H2 */}
            <motion.h2
              variants={fadeUp} custom={0.07}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="font-heading font-black text-primary text-3xl lg:text-4xl leading-tight tracking-tight mb-4"
            >
              Building Excellence
              <br />Since 1998
            </motion.h2>

            {/* Orange divider */}
            <motion.div
              variants={fadeUp} custom={0.1}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="w-12 h-1 bg-accent rounded-full mb-7"
            />

            {/* Body — SEO paragraphs */}
            <motion.div
              variants={fadeUp} custom={0.14}
              initial="hidden" whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 text-slate-500 text-[15px] leading-relaxed"
            >
              <p>
                Om Janahithaya English Medium School was founded in 1998 in Arala,
                Bantwal with a vision to provide the best English medium education
                in Bantwal. From a modest beginning, we have grown into a trusted
                institution serving 500+ students across Dakshina Kannada.
              </p>
              <p>
                Our Karnataka State Board affiliated curriculum, delivered from Nursery
                to Class 10 (SSLC), combines academic rigour with sports, arts, and
                values education. Parents across Bantwal, Mangalore, and surrounding
                villages choose us for consistent SSLC results, caring faculty, and
                affordable fees.
              </p>
              <p>
                Beyond academics, Om Janahithaya actively contributes to the
                community through cultural events, sports competitions, and outreach
                programs that build strong ties with families and local institutions.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Vision + Mission cards ────────────── */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:pt-2">

            {/* Vision card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="bg-[#F5F7FA] border border-slate-200/80 rounded-2xl p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-primary/[0.08] flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-primary text-xl mb-4">
                Our Vision
              </h3>

              {/* Text */}
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                To be the most trusted English medium school in Bantwal,
                recognized for academic excellence, holistic development,
                and nurturing every child&apos;s unique potential.
              </p>

              {/* Navy underline */}
              <div className="w-8 h-0.5 bg-primary rounded-full mt-8" />
            </motion.div>

            {/* Mission card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              className="bg-[#F5F7FA] border border-slate-200/80 rounded-2xl p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-primary text-xl mb-4">
                Our Mission
              </h3>

              {/* Text */}
              <p className="text-slate-500 text-sm leading-relaxed flex-1">
                To provide quality Karnataka State Board education in English
                medium, fostering intellectual curiosity, character, and
                confidence from Nursery through SSLC.
              </p>

              {/* Orange underline */}
              <div className="w-8 h-0.5 bg-accent rounded-full mt-8" />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutStory
