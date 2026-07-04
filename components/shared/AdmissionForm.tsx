'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

const admissionSchema = z.object({
  parentName: z.string().min(2, 'Parent name is required'),
  childName: z.string().min(2, 'Child name is required'),
  dob: z.string().min(1, 'Date of birth is required'),
  grade: z.string().min(1, 'Please select a class'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  message: z.string().optional(),
});

type AdmissionFormData = z.infer<typeof admissionSchema>;

const GRADES = [
  'Nursery', 'LKG', 'UKG',
  'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
  'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
];

export default function AdmissionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
  });

  const onSubmit = async (data: AdmissionFormData) => {
    setLoading(true);
    setError('');
    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: 'Admission Enquiry - Om Janahithaya School',
            form_type: 'admission',
            ...data,
          }),
        });
        if (!res.ok) throw new Error('Submission failed');
      } else {
        await new Promise((r) => setTimeout(r, 1200));
        console.log('Admission enquiry:', data);
      }
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please call ' + SCHOOL.phone);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-green-50 p-8 text-center" role="status">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-text-main">Enquiry Submitted!</h3>
        <p className="mt-2 text-text-muted">
          Our admissions team will contact you within 2 working days. Call{' '}
          <a href={`tel:${SCHOOL.phone}`} className="text-primary">{SCHOOL.phone}</a> for urgent queries.
        </p>
      </div>
    );
  }

  const inputClass =
    'mt-1 w-full min-h-[44px] rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" aria-label="Admission enquiry form">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="admission-parent-name" className="block text-sm font-medium text-text-main">
            Parent Name *
          </label>
          <input
            id="admission-parent-name"
            {...register('parentName')}
            className={inputClass}
            placeholder="Parent / Guardian name"
            autoComplete="name"
          />
          {errors.parentName && <p className="mt-1 text-sm text-red-600">{errors.parentName.message}</p>}
        </div>
        <div>
          <label htmlFor="admission-child-name" className="block text-sm font-medium text-text-main">
            Child Name *
          </label>
          <input
            id="admission-child-name"
            {...register('childName')}
            className={inputClass}
            placeholder="Student name"
          />
          {errors.childName && <p className="mt-1 text-sm text-red-600">{errors.childName.message}</p>}
        </div>
        <div>
          <label htmlFor="admission-dob" className="block text-sm font-medium text-text-main">
            Date of Birth *
          </label>
          <input id="admission-dob" {...register('dob')} type="date" className={inputClass} />
          {errors.dob && <p className="mt-1 text-sm text-red-600">{errors.dob.message}</p>}
        </div>
        <div>
          <label htmlFor="admission-grade" className="block text-sm font-medium text-text-main">
            Class Applying For *
          </label>
          <select id="admission-grade" {...register('grade')} className={inputClass}>
            <option value="">Select class</option>
            {GRADES.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
          {errors.grade && <p className="mt-1 text-sm text-red-600">{errors.grade.message}</p>}
        </div>
        <div>
          <label htmlFor="admission-phone" className="block text-sm font-medium text-text-main">
            Phone *
          </label>
          <input
            id="admission-phone"
            {...register('phone')}
            type="tel"
            className={inputClass}
            placeholder="+91-XXXXXXXXXX"
            autoComplete="tel"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="admission-email" className="block text-sm font-medium text-text-main">
            Email *
          </label>
          <input
            id="admission-email"
            {...register('email')}
            type="email"
            className={inputClass}
            placeholder="email@example.com"
            autoComplete="email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label htmlFor="admission-message" className="block text-sm font-medium text-text-main">
            Message
          </label>
          <textarea
            id="admission-message"
            {...register('message')}
            rows={4}
            className={inputClass}
            placeholder="Any additional information..."
          />
        </div>
      </div>
      {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary w-full md:w-auto">
        {loading ? <><Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" /> Submitting...</> : 'Submit Enquiry'}
      </button>
    </form>
  );
}
