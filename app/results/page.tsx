import Image from 'next/image';
import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import PageCTA from '@/components/shared/PageCTA';
import SchemaOrg from '@/components/shared/SchemaOrg';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { SCHOOL, SSLC_TOPPERS } from '@/lib/constants';
import { RESULTS_BY_YEAR, SUBJECT_ACHIEVEMENTS, AWARDS_MEDALS } from '@/lib/page-data';
import { Trophy } from 'lucide-react';

export const metadata: Metadata = pageMetadata.results;

export default function ResultsPage() {
  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'Results', url: `${SCHOOL.siteUrl}/results` },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchemaData} />
      <PageHero
        title="SSLC Results & Achievements"
        subtitle="Consistent excellence in 10th Board exams — top performing school near Bantwal"
        breadcrumbs={[{ label: 'Results' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2>10th Board Results (2020–2024)</h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4">Year</th>
                  <th className="px-6 py-4">Pass Rate</th>
                  <th className="px-6 py-4">Distinction</th>
                </tr>
              </thead>
              <tbody>
                {RESULTS_BY_YEAR.map((r, i) => (
                  <tr key={r.year} className={i % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                    <td className="px-6 py-4 font-bold">SSLC {r.year}</td>
                    <td className="px-6 py-4 font-semibold text-accent">{r.passRate}%</td>
                    <td className="px-6 py-4">{r.distinction}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <h2 className="text-center">SSLC Toppers</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SSLC_TOPPERS.map((topper) => (
              <div key={topper.name} className="rounded-2xl bg-white p-6 text-center shadow-card">
                <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full">
                  <Image src={topper.image} alt={topper.name} width={96} height={96} className="h-full w-full object-cover" sizes="96px" />
                </div>
                <h3 className="mt-4">{topper.name}</h3>
                <p className="text-lg font-bold text-accent">{topper.marks}</p>
                <p className="text-sm text-text-muted">SSLC {topper.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-center">Subject-wise Achievement</h2>
          <div className="mt-10 space-y-5">
            {SUBJECT_ACHIEVEMENTS.map((s) => (
              <div key={s.subject}>
                <div className="mb-2 flex justify-between text-sm font-medium">
                  <span>{s.subject}</span>
                  <span className="text-accent">{s.score}% avg.</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-surface">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${s.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-center text-white">Awards & Medals</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {AWARDS_MEDALS.map((award) => (
              <div key={award} className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3">
                <Trophy className="h-5 w-5 text-accent" />
                <span>{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
