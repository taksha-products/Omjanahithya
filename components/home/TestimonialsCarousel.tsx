'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import SectionLabel from '@/components/shared/SectionLabel';
import { fadeUp, inViewViewport } from '@/lib/animations';

const MARQUEE_COUNT = 8;

function buildRowItems(offset = 0) {
  return Array.from({ length: MARQUEE_COUNT }, (_, i) => {
    const testimonial = TESTIMONIALS[(i + offset) % TESTIMONIALS.length];
    return { ...testimonial, key: `${offset}-${i}-${testimonial.name}` };
  });
}

function getInitials(name: string) {
  const cleaned = name.replace(/^(Mrs?\.|Ms\.)\s*/i, '').trim();
  const parts = cleaned.split(/\s+/);
  return parts
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

function TestimonialCard({
  name,
  role,
  content,
  rating,
}: {
  name: string;
  role: string;
  content: string;
  rating: number;
}) {
  return (
    <article
      className="w-72 shrink-0 rounded-2xl border border-border bg-white px-6 py-5 shadow-md md:w-80"
    >
      <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
        ))}
      </div>

      <p className="mt-4 text-sm italic leading-relaxed text-text-muted line-clamp-4">
        &ldquo;{content}&rdquo;
      </p>

      <div className="mt-5 flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary"
          aria-hidden="true"
        >
          {getInitials(name)}
        </div>
        <div className="min-w-0">
          <p className="truncate font-bold text-text-main">{name}</p>
          <p className="truncate text-xs text-text-muted">{role}</p>
        </div>
      </div>
    </article>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: ReturnType<typeof buildRowItems>;
  reverse?: boolean;
}) {
  const loop = [...items, ...items];

  return (
    <div className="group overflow-hidden">
      <div
        className={`flex w-max gap-4 py-1 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } group-hover:[animation-play-state:paused]`}
      >
        {loop.map((item, index) => (
          <TestimonialCard
            key={`${item.key}-${index}`}
            name={item.name}
            role={item.role}
            content={item.content}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsCarousel() {
  const row1 = buildRowItems(0);
  const row2 = buildRowItems(2);

  return (
    <section className="section-padding bg-off-white">
      <div className="container-custom">
        <motion.div
          className="mb-10 text-center md:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewViewport}
        >
          <SectionLabel>Testimonials</SectionLabel>
          <h2>What Parents & Students Say</h2>
          <p className="body-lg mx-auto mt-4 max-w-2xl">
            Trusted by families across Bantwal and Dakshina Kannada
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 overflow-hidden">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>
      </div>
    </section>
  );
}
