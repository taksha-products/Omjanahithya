import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import PageCTA from '@/components/shared/PageCTA';
import SchemaOrg from '@/components/shared/SchemaOrg';
import EventCountdown from '@/components/shared/EventCountdown';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { SCHOOL } from '@/lib/constants';
import { UPCOMING_EVENTS, PAST_NEWS } from '@/lib/page-data';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata: Metadata = pageMetadata.newsEvents;

export default function NewsEventsPage() {
  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'News & Events', url: `${SCHOOL.siteUrl}/news-events` },
  ]);

  return (
    <>
      <SchemaOrg schema={breadcrumbSchemaData} />
      <PageHero
        title="News & Events"
        subtitle="Latest updates and upcoming events at Om Janahithaya School Bantwal"
        breadcrumbs={[{ label: 'News & Events' }]}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2>Upcoming Events</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {UPCOMING_EVENTS.map((event) => (
              <article key={event.id} className="rounded-2xl border border-gray-100 bg-surface p-6 shadow-card">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-bold text-white">
                    <Calendar className="h-3 w-3" />
                    {new Date(event.date).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <EventCountdown targetDate={event.date} />
                </div>
                <h3 className="mt-4">{event.title}</h3>
                <p className="mt-2 text-sm text-text-muted leading-relaxed">{event.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          <h2>News Archive</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PAST_NEWS.map((item) => (
              <article key={item.id} className="rounded-2xl bg-white p-6 shadow-card">
                <p className="text-xs font-bold text-accent">
                  {new Date(item.date).toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <h3 className="mt-2">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.excerpt}</p>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
