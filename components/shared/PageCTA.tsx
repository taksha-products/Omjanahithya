import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface PageCTAProps {
  title?: string;
  subtitle?: string;
}

export default function PageCTA({
  title = 'Ready to Enroll Your Child?',
  subtitle = 'Apply for school admission in Bantwal at Om Janahithaya English Medium School.',
}: PageCTAProps) {
  return (
    <section className="bg-surface py-12 md:py-16">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-text-muted leading-[1.7]">
          {subtitle}
        </p>
        <Link href="/admissions" className="btn-primary mt-6">
          Apply for Admission
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
