import { SCHOOL, NAV_LINKS } from './constants';
import { IMAGES } from './images';
import { BLOG_POSTS } from './blog-posts';

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: 'Arala',
  addressLocality: 'Bantwal',
  addressRegion: 'Karnataka',
  postalCode: '574219',
  addressCountry: 'IN',
};

function getSocialLinks(): string[] {
  return [
    SCHOOL.socialFacebook,
    SCHOOL.socialInstagram,
    SCHOOL.socialTwitter,
    SCHOOL.socialLinkedIn,
    SCHOOL.socialYoutube,
    SCHOOL.googleBusiness,
  ].filter(Boolean);
}

/** Homepage — combined EducationalOrganization + LocalBusiness */
export function schoolSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'LocalBusiness'],
    '@id': `${SCHOOL.siteUrl}/#organization`,
    name: SCHOOL.name,
    alternateName: 'Om Janahithaya School Arala',
    description:
      'Best English Medium School in Bantwal offering quality education from Nursery to 10th Standard. Located in Arala, Bantwal, Dakshina Kannada, Karnataka.',
    url: SCHOOL.siteUrl,
    logo: `${SCHOOL.siteUrl}/logo.png`,
    image: IMAGES.schoolBuilding,
    telephone: SCHOOL.phone,
    email: SCHOOL.email,
    address: postalAddress,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '12.8908',
      longitude: '75.0353',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '09:00',
      closes: '16:30',
    },
    educationalCredentialAwarded: 'Karnataka State Board SSLC',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Classes Offered',
      itemListElement: [
        { '@type': 'Course', name: 'Nursery' },
        { '@type': 'Course', name: 'LKG' },
        { '@type': 'Course', name: 'UKG' },
        { '@type': 'Course', name: 'Class 1 to 10' },
      ],
    },
    sameAs: getSocialLinks(),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SCHOOL.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SCHOOL.siteUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SCHOOL.siteUrl}/blog/${post.slug}`,
    },
  };
}

export function getSchoolSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    '@id': `${SCHOOL.siteUrl}/#school`,
    name: SCHOOL.name,
    url: SCHOOL.siteUrl,
    description: SCHOOL.description,
    telephone: SCHOOL.phone,
    email: SCHOOL.email,
    address: postalAddress,
    educationalCredentialAwarded: 'SSLC (Karnataka State Board)',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'SSLC',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Karnataka State Education Board',
      },
    },
  };
}

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SCHOOL.siteUrl}/#website`,
    url: SCHOOL.siteUrl,
    name: SCHOOL.name,
    description: SCHOOL.description,
    publisher: { '@id': `${SCHOOL.siteUrl}/#organization` },
    inLanguage: 'en-IN',
  };
}

/** @deprecated Use schoolSchema() */
export function getRootLayoutSchemas() {
  return schoolSchema();
}

/** @deprecated Use breadcrumbSchema() */
export const getBreadcrumbSchema = breadcrumbSchema;

/** @deprecated Use faqSchema() */
export const getFAQPageSchema = faqSchema;

/** @deprecated Use articleSchema() */
export const getArticleSchema = articleSchema;

export function getAllSchemas() {
  return [schoolSchema(), getSchoolSchema(), getWebsiteSchema()];
}

export function getAllRoutes() {
  const staticRoutes = NAV_LINKS.map((link) => link.href).filter(
    (href) => href !== '/'
  );
  const blogRoutes = BLOG_POSTS.map((post) => `/blog/${post.slug}`);
  return ['/', ...staticRoutes, '/blog', ...blogRoutes];
}
