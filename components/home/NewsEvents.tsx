'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { NEWS_EVENTS } from '@/lib/constants';
import SectionLabel from '@/components/shared/SectionLabel';
import { staggerContainer, staggerItem, fadeIn, inViewViewport } from '@/lib/animations';

export default function NewsEvents() {
  return (
    <motion.section
      className="py-16 bg-white"
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={inViewViewport}
    >
      <div className="container-custom">
        <div className="mb-10 text-center">
          <SectionLabel className="mx-auto">News & Events</SectionLabel>
          <h2>News & Upcoming Events</h2>
          <p className="body-lg mx-auto mt-4 max-w-2xl">
            Stay updated with the latest from our school
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewViewport}
          className="grid gap-6 md:grid-cols-3"
        >
          {NEWS_EVENTS.map((item) => (
            <motion.article
              key={item.id}
              variants={staggerItem}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                <Calendar className="h-3 w-3" />
                {new Date(item.date).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </span>
              <span className="ml-2 text-xs font-medium text-text-muted">
                {item.category}
              </span>
              <h3 className="mt-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-text-muted line-clamp-3 leading-relaxed">
                {item.excerpt}
              </p>
              <Link
                href="/news-events"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
              >
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link href="/news-events" className="btn-ghost font-semibold inline-flex items-center gap-2">
            View All Events
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
