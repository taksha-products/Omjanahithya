'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export function FounderMessage() {
  return (
    <section className="bg-[#FAFAFA] py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col lg:flex-row overflow-hidden"
        >

          {/* ── LEFT: Founder photo ──────────────────────── */}
          <div className="relative lg:w-[38%] shrink-0">

            {/* Dot grid — decorative, left edge */}
            <div
              aria-hidden
              className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none z-10"
              style={{
                backgroundImage: 'radial-gradient(#F9731650 1.5px, transparent 1.5px)',
                backgroundSize: '14px 14px',
                width: 48,
                height: 120,
              }}
            />

            {/* Photo */}
            <div className="relative h-72 lg:h-full min-h-[340px]">
              <Image
                src="/images/founder.png"
                alt="Sri Shantharama Shetty — Founder of Om Janahithaya English Medium School, Bantwal"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle warm overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* ── RIGHT: Message content ───────────────────── */}
          <div className="relative flex-1 px-8 lg:px-12 py-10 flex flex-col justify-center">

            {/* Faint logo watermark — bottom right */}
            <div
              aria-hidden
              className="absolute bottom-6 right-6 w-28 h-28 opacity-[0.06] pointer-events-none"
            >
              <Image
                src="/images/Omjanahithya LogoOnly.png"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Label */}
            <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Leadership
            </p>

            {/* H2 */}
            <h2 className="font-heading font-black text-primary text-2xl lg:text-3xl mb-6">
              Founder&apos;s Message
            </h2>

            {/* Quote block */}
            <div className="relative">
              {/* Opening quote mark */}
              <span
                aria-hidden
                className="absolute -top-4 -left-2 text-accent font-serif text-7xl leading-none select-none"
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p className="text-slate-600 text-[15px] leading-relaxed pl-6 pr-8">
                Om Janahithaya English Medium School was founded with a clear
                vision of providing quality education to future generations.
                Established with the motive of nurturing the most creative
                and thoughtful minds of society, we strive to create an
                atmosphere of reverence for education — where academics,
                sports, and co-curricular activities mould our learners
                and inspire them to be the brightest and the best.
              </p>

              {/* Closing quote mark */}
              <span
                aria-hidden
                className="block text-right text-accent font-serif text-7xl leading-none -mt-4 select-none"
              >
                &rdquo;
              </span>
            </div>

            {/* Signature + name */}
            <div className="mt-2 flex items-end gap-4">
              <div>
                <p
                  className="text-primary text-2xl mb-2"
                  style={{ fontFamily: 'var(--font-dancing), cursive' }}
                >
                  Shantharama Shetty
                </p>
                <p className="text-primary font-bold text-sm">
                  Sri Shantharama Shetty
                </p>
                <p className="text-slate-400 text-xs mt-0.5">
                  Founder, Om Janahithaya English Medium School
                </p>
                <p className="text-slate-400 text-xs">
                  Guddeyangady, Arala, Bantwal — 574 211
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default FounderMessage
