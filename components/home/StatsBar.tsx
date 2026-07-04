'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SCHOOL } from '@/lib/constants';
import { IMAGES } from '@/lib/images';
import AnimatedCounter from '@/components/shared/AnimatedCounter';
import { inViewViewport, staggerContainer, springScale } from '@/lib/animations';

const BENTO_STATS = [
  {
    id: 'years',
    value: SCHOOL.yearsExp,
    label: 'Years of Excellence',
    description:
      'A trusted name in Bantwal for quality English medium education, values, and SSLC results.',
    gradient: 'blue-gradient-text',
    className: 'col-span-2 lg:col-span-2',
  },
  {
    id: 'students',
    value: SCHOOL.studentCount,
    label: 'Students',
    gradient: 'accent-gradient-text',
    className: 'col-span-1',
  },
  {
    id: 'teachers',
    value: SCHOOL.teacherCount,
    label: 'Teachers',
    gradient: 'blue-gradient-text',
    className: 'col-span-1',
  },
  {
    id: 'pass',
    value: SCHOOL.passPct,
    label: 'Pass Rate',
    gradient: 'accent-gradient-text',
    className: 'col-span-1',
  },
  {
    id: 'english',
    value: '100%',
    label: 'English Medium',
    gradient: 'blue-gradient-text',
    className: 'col-span-1',
  },
] as const;

function BentoCell({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={springScale} className={`gradient-border ${className}`}>
      <div className="glass-card flex h-full flex-col p-6">{children}</div>
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-deep">
      <motion.div
        className="mx-auto grid max-w-7xl grid-cols-2 gap-4 p-8 md:p-12 lg:grid-cols-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={inViewViewport}
      >
        {BENTO_STATS.map((stat) => (
          <BentoCell key={stat.id} className={stat.className}>
            <AnimatedCounter
              value={stat.value}
              className={`text-5xl font-black md:text-6xl ${stat.gradient}`}
            />
            <p className="mt-1 text-sm uppercase tracking-widest text-dark-muted">
              {stat.label}
            </p>
            {'description' in stat && (
              <p className="mt-2 text-sm text-dark-text">{stat.description}</p>
            )}
          </BentoCell>
        ))}

        <motion.div
          variants={springScale}
          className="gradient-border col-span-2"
        >
          <div className="glass-card relative aspect-[16/10] overflow-hidden p-0 sm:aspect-auto sm:min-h-[180px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster={IMAGES.schoolBuilding}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/videos/hero-drone.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-deep/20" />
            <div className="absolute bottom-4 left-4 rounded-full bg-deep/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-dark-text backdrop-blur-sm">
              Campus Life
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
