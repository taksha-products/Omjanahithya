import { Metadata } from 'next';
import PageHero from '@/components/shared/PageHero';
import PageCTA from '@/components/shared/PageCTA';
import SchemaOrg from '@/components/shared/SchemaOrg';
import ContactForm from '@/components/shared/ContactForm';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import { SCHOOL } from '@/lib/constants';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
} from 'lucide-react';

export const metadata: Metadata = pageMetadata.contact;

const MAP_EMBED_FALLBACK =
  'https://maps.google.com/maps?q=Om+Janahithaya+English+Medium+School+Arala+Bantwal+Dakshina+Kannada+Karnataka+574219&output=embed&z=16';

const WHATSAPP_URL = `https://wa.me/${SCHOOL.whatsapp}?text=Hello,%20I%20would%20like%20to%20contact%20Om%20Janahithaya%20School`;

export default function ContactPage() {
  const breadcrumbSchemaData = breadcrumbSchema([
    { name: 'Home', url: SCHOOL.siteUrl },
    { name: 'Contact', url: `${SCHOOL.siteUrl}/contact` },
  ]);

  const mapSrc = SCHOOL.mapEmbed.startsWith('http')
    ? SCHOOL.mapEmbed
    : MAP_EMBED_FALLBACK;

  const infoCards = [
    { icon: MapPin, title: 'Address', content: SCHOOL.address },
    { icon: Phone, title: 'Phone', content: SCHOOL.phone, href: `tel:${SCHOOL.phone}` },
    { icon: Mail, title: 'Email', content: SCHOOL.email, href: `mailto:${SCHOOL.email}` },
    { icon: Clock, title: 'School Hours', content: 'Monday – Friday: 8:30 AM – 4:30 PM' },
  ];

  return (
    <>
      <SchemaOrg schema={breadcrumbSchemaData} />
      <PageHero
        title="Contact Us"
        subtitle="Om Janahithaya English Medium School — Arala, Bantwal, Karnataka"
        breadcrumbs={[{ label: 'Contact' }]}
      />

      <div className="container-custom section-padding">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2>Send Us a Message</h2>
            <p className="mt-2 text-text-muted">We&apos;ll respond within 24 hours.</p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div>
            <h2>Contact Information</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {infoCards.map((item) => (
                <div key={item.title} className="rounded-2xl bg-surface p-5 shadow-sm">
                  <item.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold text-text-main">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-1 text-sm text-text-muted hover:text-primary"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-text-muted">{item.content}</p>
                  )}
                </div>
              ))}
            </div>

            {SCHOOL.phone2 && (
              <div className="mt-4 rounded-2xl bg-surface p-5">
                <Phone className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 className="mt-3 font-semibold">Alternate Phone</h3>
                <a
                  href={`tel:${SCHOOL.phone2}`}
                  className="text-sm text-text-muted hover:text-primary"
                >
                  {SCHOOL.phone2}
                </a>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <a
                href={SCHOOL.socialFacebook}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target rounded-full bg-surface transition-colors hover:bg-primary hover:text-white"
                aria-label="Visit us on Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={SCHOOL.socialInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target rounded-full bg-surface transition-colors hover:bg-primary hover:text-white"
                aria-label="Visit us on Instagram"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span
              className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-text-main shadow-sm"
            >
              📍 Find Us in Arala, Bantwal
            </span>
            <a
              href={SCHOOL.googleBusiness}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-text-main shadow-sm transition-colors hover:border-accent hover:text-accent"
            >
              ⭐ {SCHOOL.googleRating} on Google · Rated by parents in Bantwal
            </a>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div
              className="overflow-hidden rounded-3xl shadow-2xl h-[300px] md:h-[450px]"
            >
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Om Janahithaya School location on Google Maps — Arala, Bantwal"
                className="h-full w-full"
              />
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl bg-[#25D366] p-6 text-white shadow-xl transition-transform hover:scale-[1.02] lg:sticky lg:top-24"
            >
              <p className="text-lg font-bold">💬 Chat With Us on WhatsApp</p>
              <p className="mt-2 text-sm text-white/90">Quick replies · Mon–Sat 9AM–5PM</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold underline-offset-4 hover:underline">
                Open WhatsApp →
              </span>
            </a>
          </div>
        </div>
      </section>

      <PageCTA />
    </>
  );
}
