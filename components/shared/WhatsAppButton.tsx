'use client';

import { MessageCircle } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${SCHOOL.whatsapp}?text=Hello,%20I%20want%20to%20enquire%20about%20admission%20at%20Om%20Janahithaya%20School`;

  return (
    <div className="group fixed bottom-6 right-6 z-50 max-md:bottom-5 max-md:right-5">
      <span
        className="pointer-events-none absolute -top-10 right-0 whitespace-nowrap rounded-lg bg-deep px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100"
      >
        Chat with us on WhatsApp
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 whatsapp-pulse focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
