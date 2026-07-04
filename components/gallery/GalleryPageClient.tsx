'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import {
  GALLERY_FILTERS,
  GALLERY_IMAGES_FULL,
  GALLERY_VIDEOS,
} from '@/lib/page-data';
import PageCTA from '@/components/shared/PageCTA';

const GalleryLightbox = dynamic(() => import('@/components/gallery/GalleryLightbox'), {
  ssr: false,
});

export default function GalleryPageClient() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === 'All'
      ? GALLERY_IMAGES_FULL
      : GALLERY_IMAGES_FULL.filter((img) => img.category === filter);

  const lightboxImage =
    lightbox !== null && filtered[lightbox]
      ? { src: filtered[lightbox].src, alt: filtered[lightbox].alt }
      : null;

  return (
    <>
      <div className="container-custom section-padding">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {GALLERY_FILTERS.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === cat ? 'bg-primary text-white' : 'bg-surface text-text-main hover:bg-primary/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-4 md:columns-3">
          {filtered.map((image, index) => (
            <button
              key={`${image.src}-${index}`}
              type="button"
              onClick={() => setLightbox(index)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-deep/0 transition-colors group-hover:bg-deep/40" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <ZoomIn className="h-10 w-10 text-white" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-center text-2xl font-bold">Event Videos</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {GALLERY_VIDEOS.map((video) => (
              <div key={video.title} className="overflow-hidden rounded-2xl shadow-card">
                <div className="aspect-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    className="h-full w-full"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="p-4 text-sm font-semibold text-text-main">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GalleryLightbox image={lightboxImage} onClose={() => setLightbox(null)} />

      <PageCTA />
    </>
  );
}
