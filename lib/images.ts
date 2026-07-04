/**
 * Hero & media asset paths under /public/
 *
 * =============================================================================
 * SECTION 18 — DRONE VIDEO SOURCING GUIDE
 * =============================================================================
 *
 * Until real Om Janahithaya campus drone footage is available, use free stock
 * for development and compress before production deploy.
 *
 * OPTION A — Free stock (development)
 * -----------------------------------
 * 1. Pexels (school / aerial / Karnataka):
 *    https://www.pexels.com/search/videos/school%20aerial/
 *
 * 2. Pixabay (school aerial):
 *    https://pixabay.com/videos/search/school%20aerial/
 *
 *    Search tips: "school aerial", "campus drone", "education aerial India"
 *    Prefer landscape 1920×1080 or higher, 30fps or 24fps.
 *
 * 3. Download the MP4, then compress (target under 8MB for fast hero load):
 *
 *    ffmpeg -i original.mp4 -vcodec h264 -acodec aac -vf scale=1920:-2 -crf 28 hero-drone.mp4
 *
 * 4. Place compressed file at:
 *    /public/videos/hero-drone.mp4
 *
 * 5. Poster image (shown before video loads / on slow connections):
 *    Set IMAGES.heroPoster in lib/images.ts (Unsplash URL or local /public path)
 *
 * OPTION B — Production (real campus footage)
 * -------------------------------------------
 * - Record drone flyover of Arala campus (golden hour recommended).
 * - Edit to 15–30s loop-friendly clip; export H.264 MP4 1920px wide.
 * - Upload to Cloudflare R2, Vercel Blob, or CDN.
 * - Set env: NEXT_PUBLIC_HERO_VIDEO_URL=https://your-cdn.com/hero-drone.mp4
 *
 * OPTION C — Dev fallback (no local file)
 * ---------------------------------------
 * HeroSection includes a Pexels remote <source> fallback via HERO_DRONE_DEV_FALLBACK
 * when /public/videos/hero-drone.mp4 is missing. Do not rely on this in production.
 *
 * Used in: components/home/HeroSection.tsx
 * Config:  .env.example → NEXT_PUBLIC_HERO_VIDEO_URL
 * =============================================================================
 */

export const IMAGES = {
  // Hero / main background
  heroPoster:
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80',
  // Hero section aerial campus (local asset)
  heroBackground: '/images/Hero-section_BG.png',
  // Official school logo (navbar, documents)
  schoolLogo: '/Omjanahithya Logo.png',
  // School building exterior
  schoolBuilding:
    'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
  // Students in classroom (group, bright, engaged)
  students:
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
  // Happy students studying
  studentsStudying:
    'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=1200&q=80',
  // School corridor / hallway
  classroom:
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80',
  // Library
  library:
    'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1200&q=80',
  // Sports / playground
  sports:
    'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200&q=80',
  // Graduation / achievement
  graduation:
    'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=1200&q=80',
  // Science lab
  scienceLab:
    'https://images.unsplash.com/photo-1532094349884-543559c0852b?w=1200&q=80',
  // Computer lab
  computerLab:
    'https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=80',
  // Playground outdoor
  playground:
    'https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200&q=80',
  // Principal (professional Indian teacher/educator)
  principal:
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  // Teacher male
  teacherMale:
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
  // Teacher female
  teacherFemale:
    'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  // Teacher 2 male
  teacherMale2:
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  // Student boy (topper)
  studentBoy:
    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80',
  // Student girl (topper)
  studentGirl:
    'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&q=80',
  // Student girl 2 (topper)
  studentGirl2:
    'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=300&q=80',
  // Student boy 2 (topper)
  studentBoy2:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80',
  // Annual day / cultural event
  annualDay:
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
  // Independence day / national event
  independenceDay:
    'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=80',
  // Science fair
  scienceFair:
    'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1200&q=80',
  // School kids outdoor
  kidsOutdoor:
    'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=1200&q=80',
  // Classroom teaching
  teaching:
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80',
  // Students reading
  reading:
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80',
  // Legacy aliases (used in page-data)
  placeholder:
    'https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80',
  canteen:
    'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=1200&q=80',
} as const;

/** Pexels aerial placeholder — remote <source> fallback during local dev */
export const HERO_DRONE_DEV_FALLBACK =
  'https://videos.pexels.com/video-files/3571264/3571264-sd_640_360_30fps.mp4';

export const VIDEOS = {
  /** Local file; override with NEXT_PUBLIC_HERO_VIDEO_URL for CDN in production */
  heroDrone:
    process.env.NEXT_PUBLIC_HERO_VIDEO_URL?.trim() || '/videos/hero-drone.mp4',
  heroDroneDevFallback: HERO_DRONE_DEV_FALLBACK,
} as const;
