import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProgramsSection from '@/components/home/ProgramsSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FacultySection from '@/components/home/FacultySection';
import ResultsSection from '@/components/home/ResultsSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import NewsEvents from '@/components/home/NewsEvents';
import AdmissionCTA from '@/components/home/AdmissionCTA';
import ContactStrip from '@/components/home/ContactStrip';
import { homeMetadata } from '@/lib/metadata';

const TestimonialsCarousel = dynamic(
  () => import('@/components/home/TestimonialsCarousel'),
  { ssr: true }
);

export const metadata: Metadata = homeMetadata;

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseUs />
      <FacultySection />
      <ResultsSection />
      <TestimonialsCarousel />
      <GalleryPreview />
      <NewsEvents />
      <AdmissionCTA />
      <ContactStrip />
    </>
  );
}
