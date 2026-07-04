import { Metadata } from 'next';
import { SCHOOL } from './constants';

const BASE_URL = SCHOOL.siteUrl;
const SITE_BRAND = 'Om Janahithaya School';
const SITE_TITLE = `${SITE_BRAND} | Best School in Bantwal`;
const TITLE_TEMPLATE = `%s | ${SITE_BRAND}`;
const DEFAULT_OG_IMAGE = '/og-image.jpg';

export interface GenerateMetaOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string | string[];
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  ogLocale?: string;
  /** When true, title bypasses the root layout template */
  absoluteTitle?: boolean;
}

export function generateMeta(options: GenerateMetaOptions): Metadata {
  const canonical = options.canonical ?? `${BASE_URL}${options.path ?? ''}`;
  const keywords =
    typeof options.keywords === 'string'
      ? options.keywords.split(',').map((k) => k.trim())
      : options.keywords ?? [];

  const ogImage = options.ogImage ?? DEFAULT_OG_IMAGE;
  const ogTitle = options.ogTitle ?? options.title;
  const ogDescription = options.ogDescription ?? options.description;
  const ogType = options.ogType ?? 'website';
  const ogLocale = options.ogLocale ?? 'en_IN';

  const title = options.absoluteTitle
    ? { absolute: options.title }
    : options.title;

  return {
    title,
    description: options.description,
    keywords,
    openGraph: {
      type: ogType,
      locale: ogLocale,
      url: canonical,
      siteName: SCHOOL.name,
      title: ogTitle,
      description: ogDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: SCHOOL.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
    alternates: {
      canonical,
    },
  };
}

/** Root layout defaults — metadataBase, template, robots */
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: SITE_TITLE,
    template: TITLE_TEMPLATE,
  },
  description: SCHOOL.description,
  authors: [{ name: SCHOOL.name }],
  creator: SCHOOL.name,
  publisher: SCHOOL.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'education',
};

export const homeMetadata = generateMeta({
  title: SITE_TITLE,
  description:
    'Om Janahithaya English Medium School in Arala, Bantwal offers quality education from Nursery to 10th Standard. Experienced faculty, 98% pass rate, affordable fees. Admissions open 2025-26.',
  keywords:
    'best school in bantwal, english medium school bantwal, school admission bantwal, nursery school bantwal, 10th class school bantwal, Om Janahithaya school',
  canonical: SCHOOL.siteUrl,
  ogTitle: 'Om Janahithaya English Medium School — Best School in Bantwal',
  ogDescription:
    'Om Janahithaya English Medium School in Arala, Bantwal offers quality education from Nursery to 10th Standard. Experienced faculty, 98% pass rate, affordable fees. Admissions open 2025-26.',
  ogImage: DEFAULT_OG_IMAGE,
  ogType: 'website',
  ogLocale: 'en_IN',
  absoluteTitle: true,
});

export const pageMetadata = {
  about: generateMeta({
    title: 'About Us | Om Janahithaya English Medium School Arala Bantwal',
    description:
      'Learn about Om Janahithaya English Medium School — our history, vision, mission, faculty, and commitment to quality education in Bantwal, Karnataka.',
    path: '/about',
    keywords: ['about Om Janahithaya school', 'school history Bantwal', 'English medium school Arala'],
    absoluteTitle: true,
  }),
  admissions: generateMeta({
    title: 'School Admissions 2025-26 | Om Janahithaya School Bantwal',
    description:
      'Apply for admission at Om Janahithaya English Medium School, Bantwal. Admissions open for Nursery to Class 10. Simple process, affordable fees, quality education.',
    path: '/admissions',
    keywords: [
      'school admission in Bantwal',
      'school admission Bantwal 2025',
      'how to apply school Bantwal',
      'English medium school admission Bantwal',
    ],
    absoluteTitle: true,
  }),
  contact: generateMeta({
    title: 'Contact Us | Om Janahithaya School Arala Bantwal Karnataka',
    description: `Contact Om Janahithaya English Medium School. Address: Arala, Bantwal, Karnataka. Phone: ${SCHOOL.phone}. Get directions, enquire about admissions.`,
    path: '/contact',
    keywords: [
      'Om Janahithaya School Bantwal contact',
      'school address Bantwal',
      'Om Janahithaya phone number',
    ],
    absoluteTitle: true,
  }),
  academics: generateMeta({
    title: 'Academics',
    description:
      'Academic programs from Nursery to SSLC at Om Janahithaya English Medium School, Bantwal. Karnataka State Board curriculum with English medium instruction.',
    path: '/academics',
    keywords: ['academics Bantwal', 'SSLC curriculum', 'Karnataka State Board'],
  }),
  faculty: generateMeta({
    title: 'Faculty',
    description:
      'Meet our experienced and dedicated faculty at Om Janahithaya English Medium School, Bantwal. Qualified teachers committed to student success.',
    path: '/faculty',
    keywords: ['teachers Bantwal school', 'faculty Om Janahithaya'],
  }),
  gallery: generateMeta({
    title: 'Gallery',
    description:
      'Photo gallery of Om Janahithaya English Medium School — campus, classrooms, events, and student activities in Bantwal.',
    path: '/gallery',
  }),
  results: generateMeta({
    title: 'SSLC Results',
    description:
      'SSLC results and academic achievements at Om Janahithaya English Medium School, Bantwal. 98% pass rate with outstanding distinction scores.',
    path: '/results',
    keywords: ['SSLC results Bantwal', 'school results Dakshina Kannada', '10th board results Bantwal'],
  }),
  feeStructure: generateMeta({
    title: 'Fee Structure',
    description:
      'Affordable fee structure at Om Janahithaya English Medium School, Bantwal. Transparent fees for Nursery to Class 10 English medium education.',
    path: '/fee-structure',
    keywords: ['school fees Bantwal', 'fee structure English medium school'],
  }),
  newsEvents: generateMeta({
    title: 'News & Events',
    description:
      'Latest news, events, and announcements from Om Janahithaya English Medium School in Bantwal, Dakshina Kannada.',
    path: '/news-events',
  }),
  blog: generateMeta({
    title: 'Blog',
    description:
      'Education insights, admission guides, and school news from Om Janahithaya English Medium School, Bantwal.',
    path: '/blog',
    keywords: ['best school in Bantwal', 'school blog Bantwal', 'education guides Karnataka'],
  }),
};

/** @deprecated Use generateMeta() */
export function createPageMetadata({
  title,
  description,
  path = '',
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  return generateMeta({ title, description, path, keywords });
}
