/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export → deployable to Cloudflare Pages (free) as plain files in /out
  output: 'export',
  trailingSlash: false,
  images: {
    // Next.js image optimization needs a server; static export serves images as-is
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'img.youtube.com' },
    ],
  },
};

module.exports = nextConfig;
