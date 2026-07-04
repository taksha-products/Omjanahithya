'use client';

import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { GALLERY_IMAGES } from '@/lib/constants';

const categories = ['All', 'Campus', 'Classroom', 'Facilities', 'Events'];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <div className="container-custom section-padding">
      <Breadcrumb items={[{ label: 'Gallery' }]} />

      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === cat
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-text-main hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image, index) => (
          <div
            key={index}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <div className="absolute bottom-4 left-4 right-4">
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-white">
                  {image.category}
                </span>
                <p className="mt-2 text-sm text-white">{image.alt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
