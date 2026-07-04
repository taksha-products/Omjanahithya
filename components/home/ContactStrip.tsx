import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

export default function ContactStrip() {
  return (
    <section className="bg-deep py-12 text-dark-text">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="mb-1 text-sm font-semibold text-dark-text">Address</p>
              <p className="text-sm leading-relaxed text-dark-muted">
                Arala, Bantwal, Dakshina Kannada
                <br />
                Karnataka — 574219
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="mb-1 text-sm font-semibold text-dark-text">Phone Numbers</p>
              <div className="space-y-1 text-sm text-dark-muted">
                <a
                  href={`tel:${SCHOOL.phone}`}
                  className="transition-colors hover:text-accent"
                >
                  {SCHOOL.phone}
                </a>
                {SCHOOL.phone2 && (
                  <a
                    href={`tel:${SCHOOL.phone2}`}
                    className="block transition-colors hover:text-accent"
                  >
                    {SCHOOL.phone2}
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="mb-1 text-sm font-semibold text-dark-text">School Hours</p>
              <p className="text-sm text-dark-muted">Monday – Friday: 8:30 AM – 4:30 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div
            className="w-full overflow-hidden rounded-3xl shadow-2xl"
            style={{ height: '400px' }}
          >
            <iframe
              src={SCHOOL.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Om Janahithaya English Medium School location — Arala, Bantwal, Karnataka"
            />
          </div>
          <a
            href={SCHOOL.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:underline"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Get Directions on Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}
