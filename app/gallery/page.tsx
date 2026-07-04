import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import SchemaOrg from '@/components/shared/SchemaOrg';
import GalleryPageClient from '@/components/gallery/GalleryPageClient';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { SCHOOL } from '@/lib/constants';

export const metadata: Metadata = pageMetadata.gallery;

export default function GalleryPage() {
  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'Gallery', url: `${SCHOOL.siteUrl}/gallery` },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchemaData} />
      <PageHero
        title="School Gallery"
        subtitle="Annual Day, Sports Day, classrooms, and life at Om Janahithaya Bantwal"
        breadcrumbs={[{ label: 'Gallery' }]}
      />
      <GalleryPageClient />
    </>
  );
}
