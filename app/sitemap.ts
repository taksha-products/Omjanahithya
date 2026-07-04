import { MetadataRoute } from 'next';
import { SCHOOL } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blog-posts';

const PRIORITY_MAP: Record<string, { priority: number; changeFrequency: MetadataRoute.Sitemap[0]['changeFrequency'] }> = {
  '': { priority: 1.0, changeFrequency: 'weekly' },
  '/admissions': { priority: 0.9, changeFrequency: 'monthly' },
  '/about': { priority: 0.8, changeFrequency: 'monthly' },
  '/contact': { priority: 0.8, changeFrequency: 'monthly' },
  '/results': { priority: 0.7, changeFrequency: 'monthly' },
};

const DEFAULT_PAGE = { priority: 0.6, changeFrequency: 'monthly' as const };

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SCHOOL.siteUrl;

  const staticPaths = [
    '',
    '/admissions',
    '/about',
    '/contact',
    '/results',
    '/academics',
    '/faculty',
    '/gallery',
    '/fee-structure',
    '/news-events',
    '/blog',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((path) => {
    const config = PRIORITY_MAP[path] ?? DEFAULT_PAGE;
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: config.changeFrequency,
      priority: config.priority,
    };
  });

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes];
}
