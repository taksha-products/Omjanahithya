'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Play } from 'lucide-react';
import {
  GALLERY_PREVIEW_IMAGES,
  GALLERY_PREVIEW_VIDEO,
} from '@/lib/constants';
import SectionLabel from '@/components/shared/SectionLabel';
import { fadeUp, inViewViewport, blurIn } from '@/lib/animations';

const GALLERY_LAYOUT = [
  { area: 'large', type: 'image' as const, index: 0 },
  { area: 'med1', type: 'image' as const, index: 1 },
  { area: 'med2', type: 'image' as const, index: 2 },
  { area: 'med3', type: 'image' as const, index: 3 },
  { area: 'med4', type: 'image' as const, index: 4 },
  { area: 'wide', type: 'video' as const },
] as const;

const gridAreasClass =
  '[grid-template-areas:"large_large_med1_med2"_"large_large_med3_med4"_"large_large_wide_wide"]';

function GalleryImageCell({
  src,
  alt,
  area,
}: {
  src: string;
  alt: string;
  area: string;
}) {
  return (
    <motion.div
      variants={blurIn}
      initial="hidden"
      whileInView="visible"
      viewport={inViewViewport}
      className="min-h-[160px]"
      style={{ gridArea: area }}
    >
      <Link
        href="/gallery"
        className="group relative block h-full min-h-[160px] overflow-hidden rounded-2xl"
      >
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <Camera className="h-8 w-8 text-white" aria-hidden="true" />
        <span className="text-sm font-semibold text-white">View Photo</span>
      </div>
      </Link>
    </motion.div>
  );
}

function GalleryVideoCell({ area }: { area: string }) {
  return (
    <motion.div
      variants={blurIn}
      initial="hidden"
      whileInView="visible"
      viewport={inViewViewport}
      className="min-h-[160px]"
      style={{ gridArea: area }}
    >
      <Link
        href="/gallery"
        className="group relative block h-full min-h-[160px] overflow-hidden rounded-2xl"
        aria-label={`Watch ${GALLERY_PREVIEW_VIDEO.title}`}
      >
        <Image
          src={GALLERY_PREVIEW_VIDEO.src}
          alt={GALLERY_PREVIEW_VIDEO.alt}
          width={800}
          height={450}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/30 to-deep/10"
          aria-hidden="true"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full bg-accent shadow-lg transition-transform group-hover:scale-110"
          >
            <Play className="h-6 w-6 fill-white text-white" aria-hidden="true" />
          </div>
          <span className="text-sm font-semibold text-white">
            {GALLERY_PREVIEW_VIDEO.title}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function GalleryPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="mb-10 text-center md:mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewViewport}
        >
          <SectionLabel>Gallery</SectionLabel>
          <h2>Life at Om Janahithaya School</h2>
          <p className="body-lg mx-auto mt-4 max-w-2xl">
            Glimpses of campus life, classrooms, and celebrations
          </p>
        </motion.div>

        {/* Mobile: simple 2-column grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {GALLERY_PREVIEW_IMAGES.slice(0, 4).map((image) => (
            <Link
              key={image.src}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform group-hover:scale-[1.03]"
                sizes="50vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-deep/40 opacity-0 transition-opacity group-hover:opacity-100">
                <Camera className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
            </Link>
          ))}
          <Link
            href="/gallery"
            className="group relative col-span-2 aspect-video overflow-hidden rounded-2xl"
            aria-label={GALLERY_PREVIEW_VIDEO.title}
          >
            <Image
              src={GALLERY_PREVIEW_VIDEO.src}
              alt={GALLERY_PREVIEW_VIDEO.alt}
              width={800}
              height={450}
              className="h-full w-full object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-deep/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent shadow-lg">
                <Play className="h-5 w-5 fill-white text-white" aria-hidden="true" />
              </div>
              <span className="text-sm font-semibold text-white">
                {GALLERY_PREVIEW_VIDEO.title}
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop: asymmetric grid */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewViewport}
          className={`hidden gap-4 md:grid md:grid-cols-4 md:grid-rows-3 md:min-h-[520px] ${gridAreasClass}`}
        >
          {GALLERY_LAYOUT.map((cell) => {
            if (cell.type === 'video') {
              return <GalleryVideoCell key="video" area={cell.area} />;
            }

            const image = GALLERY_PREVIEW_IMAGES[cell.index];
            return (
              <GalleryImageCell
                key={cell.area}
                src={image.src}
                alt={image.alt}
                area={cell.area}
              />
            );
          })}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewViewport}
        >
          <Link href="/gallery" className="btn-primary">
            Explore Full Gallery →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
