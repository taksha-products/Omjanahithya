import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import PageCTA from '@/components/shared/PageCTA';
import SchemaOrg from '@/components/shared/SchemaOrg';
import FacultyPageClient from '@/components/faculty/FacultyPageClient';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { SCHOOL } from '@/lib/constants';

export const metadata: Metadata = pageMetadata.faculty;

export default function FacultyPage() {
  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'Faculty', url: `${SCHOOL.siteUrl}/faculty` },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchemaData} />
      <PageHero
        title="Our Faculty"
        subtitle={`${SCHOOL.teacherCount} dedicated educators at the best English medium school in Bantwal`}
        breadcrumbs={[{ label: 'Faculty' }]}
      />
      <FacultyPageClient />
      <PageCTA />
    </>
  );
}
