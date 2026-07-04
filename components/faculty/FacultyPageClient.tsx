'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SCHOOL } from '@/lib/constants';
import { ALL_FACULTY, FACULTY_FILTERS } from '@/lib/page-data';

export default function FacultyPageClient() {
  const [filter, setFilter] = useState('All');

  const filtered =
    filter === 'All'
      ? ALL_FACULTY
      : ALL_FACULTY.filter((f) => f.department === filter);

  return (
    <>
      <div className="container-custom section-padding">
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {FACULTY_FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                filter === f ? 'bg-primary text-white' : 'bg-surface text-text-main'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((faculty) => (
            <div
              key={faculty.name}
              className="rounded-2xl bg-white p-6 text-center shadow-card transition-transform hover:scale-[1.03]"
            >
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full">
                <Image src={faculty.image} alt={faculty.name} width={112} height={112} className="h-full w-full object-cover" sizes="112px" />
              </div>
              <h3 className="mt-4">{faculty.name}</h3>
              <p className="text-sm font-medium text-primary">{faculty.subject}</p>
              <p className="mt-1 text-xs text-text-muted">{faculty.qualification}</p>
              <p className="mt-2 text-xs font-semibold text-accent">{faculty.yearsExperience}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-surface p-8 text-center md:p-12">
          <h2 className="text-2xl font-bold">Join Our Team</h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-muted leading-relaxed">
            Passionate educators looking to make a difference in Bantwal are welcome to apply.
            Send your resume to {SCHOOL.email}
          </p>
          <a href={`mailto:${SCHOOL.email}?subject=Teaching Application`} className="btn-secondary mt-6">
            Send Application
          </a>
        </div>
      </div>
    </>
  );
}
