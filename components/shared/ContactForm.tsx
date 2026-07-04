'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  queryType: z.string().min(1, 'Select query type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const QUERY_TYPES = [
  'Admission Enquiry',
  'Fee Structure',
  'General Information',
  'Feedback',
  'Other',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const inputClass =
    'mt-1 w-full min-h-[44px] rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    try {
      if (formspreeId) {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ _subject: 'Contact Form - Om Janahithaya', form_type: 'contact', ...data }),
        });
      } else {
        await new Promise((r) => setTimeout(r, 1000));
        console.log('Contact:', data);
      }
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 p-8 text-center" role="status">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600" aria-hidden="true" />
        <h3 className="mt-4 font-bold text-text-main">Message Sent!</h3>
        <p className="mt-2 text-text-muted">We will respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" aria-label="Contact form">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-text-main">Name *</label>
        <input id="contact-name" {...register('name')} className={inputClass} autoComplete="name" />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className="block text-sm font-medium text-text-main">Phone *</label>
          <input id="contact-phone" {...register('phone')} type="tel" className={inputClass} autoComplete="tel" />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-text-main">Email *</label>
          <input id="contact-email" {...register('email')} type="email" className={inputClass} autoComplete="email" />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="contact-query-type" className="block text-sm font-medium text-text-main">Query Type *</label>
        <select id="contact-query-type" {...register('queryType')} className={inputClass}>
          <option value="">Select type</option>
          {QUERY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        {errors.queryType && <p className="mt-1 text-sm text-red-600">{errors.queryType.message}</p>}
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-text-main">Message *</label>
        <textarea id="contact-message" {...register('message')} rows={5} className={inputClass} />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={loading} className="btn-primary">
        {loading ? <><Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Sending...</> : 'Send Message'}
      </button>
    </form>
  );
}
