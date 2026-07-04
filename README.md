# Om Janahithaya English Medium School Website

Production-ready website for **Om Janahithaya English Medium School** in Arala, Bantwal, Dakshina Kannada, Karnataka.

## Tech Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS v3**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **React Hook Form + Zod** (form validation)
- **next-sitemap** (SEO sitemap)
- **JSON-LD Schema** (structured data)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and update:

- `SITE_URL` — Production domain
- `NEXT_PUBLIC_GA_ID` — Google Analytics 4 measurement ID

## Build & Deploy

```bash
npm run build
npm start
```

Deploy to **Vercel** (configured in `vercel.json` with Mumbai region `bom1`).

## SEO Features

- Next.js Metadata API on all pages
- Dynamic sitemap (`app/sitemap.ts`) + next-sitemap postbuild
- JSON-LD: Organization, School, LocalBusiness, WebSite, Article, BreadcrumbList
- Open Graph images and meta tags
- Target keywords: best school in Bantwal, English medium school Bantwal, school admission Bantwal

## Project Structure

See the prompt specification for full file structure.

## Google Search Console

1. Deploy the site
2. Add property at [Google Search Console](https://search.google.com/search-console)
3. Verify via DNS or HTML tag
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

## Customization

Update school details in `lib/constants.ts` (phone, email, address, social links, fees, faculty, etc.).

Replace placeholder images in `public/` with actual school photos.
