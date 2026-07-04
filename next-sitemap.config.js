/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://omjanahithaya.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    additionalSitemaps: [],
  },
  exclude: ['/api/*'],
  transform: async (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/admissions': 0.9,
      '/about': 0.8,
      '/contact': 0.8,
      '/results': 0.7,
    };

    const isBlog = path.startsWith('/blog/');
    const priority = isBlog ? 0.7 : priorityMap[path] ?? 0.6;

    return {
      loc: path,
      changefreq: path === '/' ? 'weekly' : 'monthly',
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
