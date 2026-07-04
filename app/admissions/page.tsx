import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import PageCTA from '@/components/shared/PageCTA';
import SectionHeader from '@/components/shared/SectionHeader';
import SchemaOrg from '@/components/shared/SchemaOrg';
import AdmissionForm from '@/components/shared/AdmissionForm';
import FAQAccordion from '@/components/shared/FAQAccordion';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqSchema as buildFaqSchema } from '@/lib/schema';
import { SCHOOL } from '@/lib/constants';
import {
  ADMISSION_STEPS,
  ELIGIBILITY_CRITERIA,
  ADMISSION_DOCUMENTS,
  ADMISSION_FAQ,
  IMPORTANT_DATES,
} from '@/lib/page-data';
import { Check } from 'lucide-react';

export const metadata: Metadata = pageMetadata.admissions;

export default function AdmissionsPage() {
  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'Admissions', url: `${SCHOOL.siteUrl}/admissions` },
  ]);
  const faqSchemaData = buildFaqSchema(ADMISSION_FAQ);

  return (
    <>
      <SchemaOrg schema={[breadcrumbSchemaData, faqSchemaData]} />
      <PageHero
        title="Admissions 2025-26"
        subtitle="Apply for school admission in Bantwal — Nursery to Class 10 at Om Janahithaya"
        breadcrumbs={[{ label: 'Admissions' }]}
      />

      <div className="container-custom section-padding">
        <SectionHeader
          label="How It Works"
          title="Admission Process"
          subtitle="Five simple steps to secure your child's seat"
        />
        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-primary/20 md:block" />
          <div className="space-y-8">
            {ADMISSION_STEPS.map((step) => (
              <div key={step.step} className="flex gap-6 md:items-start">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white shadow-lg">
                  {step.step}
                </div>
                <div className="rounded-2xl bg-surface p-6 flex-1">
                  <h3>{step.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader label="Eligibility" title="Eligibility & Age Criteria" subtitle="Minimum age requirements by class" />
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 font-semibold">Class</th>
                  <th className="px-6 py-4 font-semibold">Minimum Age</th>
                  <th className="px-6 py-4 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {ELIGIBILITY_CRITERIA.map((row, i) => (
                  <tr key={row.class} className={i % 2 === 0 ? 'bg-white' : 'bg-surface'}>
                    <td className="px-6 py-4 font-semibold text-text-main">{row.class}</td>
                    <td className="px-6 py-4">{row.minAge}</td>
                    <td className="px-6 py-4 text-text-muted">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader label="Documents" title="Documents Required" subtitle="Checklist for admission application" />
          <div className="grid gap-4 sm:grid-cols-2">
            {ADMISSION_DOCUMENTS.map((doc) => (
              <div key={doc} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-text-main">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader label="Apply Online" title="Online Enquiry Form" subtitle="Apply for school admission in Bantwal online" centered={false} />
            <AdmissionForm />
          </div>
          <div>
            <SectionHeader label="Timeline" title="Important Dates" subtitle="Admission timeline 2025-26" centered={false} />
            <div className="space-y-4">
              {IMPORTANT_DATES.map((item) => (
                <div key={item.label} className="flex gap-4 rounded-2xl bg-surface p-5">
                  <div className="text-center">
                    <p className="text-xs font-bold uppercase text-accent">
                      {new Date(item.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {new Date(item.date).getDate()}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-text-main">{item.label}</p>
                    <p className="text-sm text-text-muted">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader label="FAQ" title="Frequently Asked Questions" subtitle="School admission Bantwal — common queries" />
          <FAQAccordion items={ADMISSION_FAQ} />
        </div>
      </div>

      <PageCTA title="Start Your Admission Journey Today" />
    </>
  );
}
