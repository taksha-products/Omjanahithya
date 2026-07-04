/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/og-image.jpg',
        destination: '/opengraph-image',
      },
      {
        source: '/school-building.jpg',
        destination: '/images/school-building.jpg',
      },
      {
        source: '/logo.png',
        destination: '/logo.svg',
      },
    ];
  },
};

module.exports = nextConfig;