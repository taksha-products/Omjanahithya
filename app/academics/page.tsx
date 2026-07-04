import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import PageCTA from '@/components/shared/PageCTA';
import SectionHeader from '@/components/shared/SectionHeader';
import SchemaOrg from '@/components/shared/SchemaOrg';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { SCHOOL, PROGRAMS } from '@/lib/constants';
import {
  BookOpen,
  FlaskConical,
  Monitor,
  Library,
  Trophy,
  Palette,
} from 'lucide-react';

export const metadata: Metadata = pageMetadata.academics;

const facilities = [
  { icon: BookOpen, title: 'Smart Classrooms', desc: 'Technology-enabled learning environments' },
  { icon: FlaskConical, title: 'Science Lab', desc: 'Well-equipped laboratory for practical learning' },
  { icon: Monitor, title: 'Computer Lab', desc: 'Modern computers with internet access' },
  { icon: Library, title: 'Library', desc: 'Extensive collection of books and reference materials' },
  { icon: Trophy, title: 'Sports Facilities', desc: 'Playground and indoor sports equipment' },
  { icon: Palette, title: 'Art & Music', desc: 'Dedicated spaces for creative expression' },
];

export default function AcademicsPage() {
  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'Academics', url: `${SCHOOL.siteUrl}/academics` },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchemaData} />
      <PageHero
        title="Academics"
        subtitle={`${SCHOOL.board} English medium education — ${SCHOOL.grades}`}
        breadcrumbs={[{ label: 'Academics' }]}
      />
      <div className="container-custom section-padding">
        <SectionHeader
          label="Programs"
          title="Academic Programs"
          subtitle="From Nursery to SSLC at the best English medium school in Bantwal"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <div key={program.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-card">
              <h3>{program.title}</h3>
              <p className="mt-1 text-sm font-medium text-accent">{program.grades}</p>
              <p className="mt-3 text-sm text-text-muted leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <SectionHeader label="Facilities" title="School Facilities" subtitle="Infrastructure supporting holistic learning" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((f) => (
              <div key={f.title} className="flex gap-4 rounded-2xl bg-surface p-6">
                <f.icon className="h-8 w-8 shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold">{f.title}</h3>
                  <p className="mt-1 text-sm text-text-muted">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <PageCTA />
    </>
  );
}
