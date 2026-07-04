import { Metadata } from 'next';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import { FounderMessage } from '@/components/about/FounderMessage';
import { CoreValues } from '@/components/about/CoreValues';
import { Facilities } from '@/components/about/Facilities';
import { Affiliations } from '@/components/about/Affiliations';
import { AboutCTA } from '@/components/about/AboutCTA';
import SchemaOrg from '@/components/shared/SchemaOrg';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { SCHOOL } from '@/lib/constants';

export const metadata: Metadata = pageMetadata.about;

export default function AboutPage() {
  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'About', url: `${SCHOOL.siteUrl}/about` },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchemaData} />
      <AboutHero />
      <div className="pt-16">
        <AboutStory />
        <FounderMessage />
        <CoreValues />
        <Facilities />
        <Affiliations />
        <AboutCTA />
      </div>
    </>
  );
}
