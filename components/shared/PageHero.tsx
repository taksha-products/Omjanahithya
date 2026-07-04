import Breadcrumb from '@/components/shared/Breadcrumb';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-deep pb-16 pt-12 md:pb-20 md:pt-16">
      <div
        className="page-hero-dots pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="container-custom relative z-10">
        <Breadcrumb items={breadcrumbs} light />
        <h1 className="section-h2 mt-4 blue-gradient-text">{title}</h1>
        <div className="mt-4 h-1 w-16 rounded-full bg-accent" aria-hidden="true" />
        {subtitle && (
          <p className="body-lg mt-4 max-w-2xl text-dark-muted">
            {subtitle}
          </p>
        )}
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 text-off-white">
        <svg
          viewBox="0 0 1440 56"
          preserveAspectRatio="none"
          className="block h-10 w-full fill-current md:h-14"
          aria-hidden="true"
        >
          <path d="M0,32 C240,56 480,8 720,32 C960,48 1200,16 1440,32 L1440,56 L0,56 Z" />
        </svg>
      </div>
    </section>
  );
}
