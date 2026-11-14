import { IMAGES } from './images';

const SITE_URL = 'https://omjanahithaya.com';

export const SCHOOL = {
  name: 'Om Janahithaya English Medium School',
  shortName: 'Om Janahithaya School',
  // TODO: Replace with actual founding year
  tagline: 'Shaping Bright Futures Since 1998',
  subTagline:
    'Quality English Medium Education from Nursery to 10th Standard',
  address: 'Arala, Bantwal, Dakshina Kannada, Karnataka — 574219',
  // TODO: Replace with actual phone number
  phone: '+91-XXXXXXXXXX',
  // TODO: Replace with actual alternate phone number
  phone2: '+91-XXXXXXXXXX',
  // TODO: Replace with actual school email if different
  email: 'info@omjanahithaya.com',
  // TODO: Replace with actual WhatsApp number (country code + number, no +)
  whatsapp: '91XXXXXXXXXX',
  mapUrl: 'https://maps.app.goo.gl/7PjEBmuvyGiEkD6j8',
  mapEmbed:
    'https://maps.google.com/maps?q=Om+Janahithaya+English+Medium+School+Arala+Bantwal+Dakshina+Kannada+Karnataka+574219&output=embed&z=16',
  siteUrl: SITE_URL,
  socialFacebook: 'https://facebook.com/omjanahithaya',
  socialInstagram: 'https://instagram.com/omjanahithaya',
  socialTwitter: 'https://twitter.com/omjanahithaya',
  socialLinkedIn: 'https://linkedin.com/company/omjanahithaya',
  socialYoutube: 'https://youtube.com/@omjanahithaya',
  // TODO: Update after Google Business Profile setup
  googleBusiness: 'https://g.page/omjanahithaya',
  googleRating: '4.9',
  // TODO: Replace with actual founding year
  established: '1998',
  studentCount: '500+',
  teacherCount: '30+',
  passPct: '98%',
  yearsExp: '25+ Years',
  description:
    'Om Janahithaya English Medium School in Arala, Bantwal offers quality Karnataka State Board education from Nursery to Class 10 (SSLC). One of the best English medium schools in Bantwal and Dakshina Kannada.',
  aboutParagraph1:
    'Om Janahithaya English Medium School has been a trusted name for parents seeking the best English medium school in Bantwal. Located in Arala, we combine academic rigour with values-based education from Nursery to Class 10.',
  aboutParagraph2:
    'Our Karnataka State Board curriculum prepares students for SSLC excellence while nurturing confidence, creativity, and character across Bantwal and Dakshina Kannada.',
  board: 'Karnataka State Board',
  grades: 'Nursery to Class 10 (SSLC)',
  // TODO: Replace with actual GA4 measurement ID
  gaId: process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX',
};

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Results', href: '/results' },
  { label: 'Fees', href: '/fee-structure' },
  { label: 'News & Events', href: '/news-events' },
  { label: 'Contact', href: '/contact' },
];

export const STATS = [
  { label: 'Years of Excellence', value: SCHOOL.yearsExp },
  { label: 'Students', value: SCHOOL.studentCount },
  { label: 'Teachers', value: SCHOOL.teacherCount },
  { label: 'Pass Rate', value: SCHOOL.passPct },
];

export const PROGRAMS = [
  {
    id: 'nursery',
    title: 'Nursery',
    gradeLabel: 'NURSERY',
    stageName: 'Early Years',
    subLabel: 'Pre-Primary',
    grades: 'Pre-Primary',
    description:
      'Play-based early learning with phonics, motor skills, and creative activities for young children.',
    icon: 'blocks',
    image: IMAGES.kidsOutdoor.replace('w=1200', 'w=600'),
    href: '/academics',
    isFirst: true,
  },
  {
    id: 'lkg',
    title: 'LKG',
    gradeLabel: 'LKG',
    stageName: 'Foundation Stage',
    subLabel: 'Lower Kindergarten',
    grades: 'Lower Kindergarten',
    description:
      'Foundation year with storytelling, rhymes, and activity-based introduction to letters and numbers.',
    icon: 'book-open',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
    href: '/academics',
  },
  {
    id: 'ukg',
    title: 'UKG',
    gradeLabel: 'UKG',
    stageName: 'Preparatory Stage',
    subLabel: 'Upper Kindergarten',
    grades: 'Upper Kindergarten',
    description:
      'School readiness program building literacy, numeracy, and social skills before Class 1.',
    icon: 'graduation-cap',
    image: IMAGES.ukgClassroom.replace('w=1200', 'w=600'),
    href: '/academics',
  },
  {
    id: 'primary',
    title: 'Primary',
    gradeLabel: 'CLASS 1–5',
    stageName: 'Primary Years',
    subLabel: 'Class 1 – 5',
    grades: 'Class 1 – 5',
    description:
      'Strong foundation in English, Maths, Science & Social Studies with Karnataka State Board curriculum.',
    icon: 'book-open',
    image: IMAGES.students.replace('w=1200', 'w=600'),
    href: '/academics',
  },
  {
    id: 'upper-primary',
    title: 'Upper Primary',
    gradeLabel: 'CLASS 6–8',
    stageName: 'Middle School',
    subLabel: 'Class 6 – 8',
    grades: 'Class 6 – 8',
    description:
      'Critical thinking, computer education, and co-curricular development for middle school learners.',
    icon: 'monitor',
    image: IMAGES.computerLab.replace('w=1200', 'w=600'),
    href: '/academics',
  },
  {
    id: 'secondary',
    title: 'Secondary',
    gradeLabel: 'CLASS 9–10',
    stageName: 'SSLC Preparation',
    subLabel: 'Class 9 – 10',
    grades: 'Class 9 – 10',
    description:
      'Focused SSLC board preparation with expert faculty, assessments, and career guidance.',
    icon: 'award',
    image: IMAGES.studentsStudying.replace('w=1200', 'w=600'),
    href: '/academics',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Faculty',
    description: '30+ dedicated teachers with years of classroom expertise',
    icon: 'users',
    color: '#1A3FD4',
  },
  {
    title: 'Outstanding Results',
    description: 'Consistent 95–98% pass rate in SSLC board exams',
    icon: 'trending-up',
    color: '#FF5C00',
  },
  {
    title: 'Affordable Education',
    description: 'Quality schooling accessible to every family in Bantwal',
    icon: 'wallet',
    color: '#3B5FEE',
  },
  {
    title: 'Holistic Development',
    description: 'Sports, arts, cultural events, and co-curricular activities',
    icon: 'heart',
    color: '#FF7A2E',
  },
  {
    title: 'Smart Classrooms',
    description: 'Technology-enabled learning environment',
    icon: 'monitor',
    color: '#1A3FD4',
  },
  {
    title: 'Safe & Nurturing',
    description: 'Safe campus with caring environment for every child',
    icon: 'shield-check',
    color: '#FF5C00',
  },
];

export const PRINCIPAL_MESSAGE = {
  title: "Principal's Message",
  quote:
    'At Om Janahithaya, we believe every child can excel with the right guidance, care, and opportunities.',
  name: 'Mrs. Lakshmi Rao',
  role: 'Principal',
};

export const FACULTY_HIGHLIGHTS = [
  {
    name: 'Mrs. Lakshmi Rao',
    role: 'Principal',
    subject: 'School Administration',
    qualification: 'M.Ed, B.Ed',
    yearsExperience: '20+ Years',
    image: IMAGES.principal,
  },
  {
    name: 'Mr. Ravi Kumar',
    role: 'English',
    subject: 'English Language & Literature',
    qualification: 'M.A, B.Ed',
    yearsExperience: '18+ Years',
    image: IMAGES.teacherMale,
  },
  {
    name: 'Mrs. Sunita Shetty',
    role: 'Primary Education',
    subject: 'Primary Classes',
    qualification: 'B.Ed, D.Ed',
    yearsExperience: '12+ Years',
    image: IMAGES.teacherFemale,
  },
  {
    name: 'Mr. Suresh Bhat',
    role: 'Science',
    subject: 'Physics & Chemistry',
    qualification: 'M.Sc, B.Ed',
    yearsExperience: '15+ Years',
    image: IMAGES.teacherMale2,
  },
];

export const SSLC_TOPPERS = [
  {
    name: 'Ananya Rao',
    marks: '98%',
    year: '2024',
    image: IMAGES.studentGirl,
  },
  {
    name: 'Rohan Shetty',
    marks: '97%',
    year: '2024',
    image: IMAGES.studentBoy,
  },
  {
    name: 'Priya Gowda',
    marks: '96%',
    year: '2024',
    image: IMAGES.studentGirl2,
  },
  {
    name: 'Karthik Bhat',
    marks: '95%',
    year: '2023',
    image: IMAGES.studentBoy2,
  },
];

export const ACHIEVEMENT_BADGES = [
  { label: 'State Rank Holder', icon: 'trophy' },
  { label: 'District Top 10', icon: 'medal' },
  { label: 'Sports Champions', icon: 'trophy' },
  { label: 'Cultural Excellence', icon: 'star' },
];

export const ACADEMICS_LINKS = [
  { label: 'Nursery to UKG', href: '/academics' },
  { label: 'Primary (Class 1-5)', href: '/academics' },
  { label: 'Upper Primary (6-8)', href: '/academics' },
  { label: 'Secondary (9-10)', href: '/academics' },
  { label: 'Fee Structure', href: '/fee-structure' },
  { label: 'Results', href: '/results' },
];

export const RESULTS = [
  { year: '2024', passRate: '98%', distinction: '45%', topScore: '98%', studentsPassed: 147 },
  { year: '2023', passRate: '97%', distinction: '42%', topScore: '97%', studentsPassed: 142 },
  { year: '2022', passRate: '95%', distinction: '38%', topScore: '95%', studentsPassed: 138 },
];

export const TESTIMONIALS = [
  {
    name: 'Mrs. Anitha Pai',
    role: 'Parent from Arala, Bantwal',
    content:
      'We chose Om Janahithaya after comparing several schools in Bantwal town. My daughter in Class 8 has improved tremendously in English and Maths. The teachers know every child by name and keep parents informed.',
    rating: 5,
  },
  {
    name: 'Mr. Ramesh Nayak',
    role: 'Parent of SSLC 2024 Student',
    content:
      'Our son scored 96% in SSLC thanks to the dedicated faculty and regular practice tests. Affordable fees compared to Mangalore city schools, yet the quality of English medium education is excellent.',
    rating: 5,
  },
  {
    name: 'Mrs. Kavitha Gowda',
    role: 'Parent of LKG Student, Padil Village',
    content:
      'The pre-primary teachers are so caring. My little one travels from near Padil every day and still loves school. Safe campus, clean classrooms, and a warm community feel — rare to find in rural Bantwal.',
    rating: 5,
  },
  {
    name: 'Mr. Ganesh Shetty',
    role: 'Parent of Class 5 Student',
    content:
      'As a parent in the Bantwal–Mangalore belt, we wanted strong SSLC preparation without sending our child far away. Om Janahithaya in Arala has been the perfect choice for our family.',
    rating: 5,
  },
];

export const GALLERY_IMAGES = [
  {
    src: IMAGES.schoolBuilding,
    alt: 'Om Janahithaya English Medium School building exterior in Arala, Bantwal',
    category: 'Campus',
  },
  {
    src: IMAGES.students,
    alt: 'Students engaged in classroom learning at Om Janahithaya School',
    category: 'Classroom',
  },
  {
    src: IMAGES.library,
    alt: 'School library with students reading books',
    category: 'Facilities',
  },
  {
    src: IMAGES.sports,
    alt: 'Students participating in Sports Day athletics on school playground',
    category: 'Events',
  },
  {
    src: IMAGES.graduation,
    alt: 'SSLC graduation ceremony at Om Janahithaya School',
    category: 'Events',
  },
  {
    src: IMAGES.scienceLab,
    alt: 'Science laboratory with students conducting experiments',
    category: 'Facilities',
  },
];

/** Homepage gallery preview grid — school-appropriate images only */
export const GALLERY_PREVIEW_IMAGES = [
  {
    src: IMAGES.classroom,
    alt: 'Students in classroom at Om Janahithaya School, Bantwal',
    category: 'Classrooms',
  },
  {
    src: IMAGES.students,
    alt: 'Science class activity at Om Janahithaya English Medium School',
    category: 'Academics',
  },
  {
    src: IMAGES.sports,
    alt: 'Sports day at Om Janahithaya School Arala Bantwal',
    category: 'Sports',
  },
  {
    src: IMAGES.annualDay,
    alt: 'Annual day celebration at Om Janahithaya School',
    category: 'Events',
  },
  {
    src: IMAGES.library,
    alt: 'School library at Om Janahithaya English Medium School Bantwal',
    category: 'Infrastructure',
  },
  {
    src: IMAGES.scienceLab,
    alt: 'Science laboratory Om Janahithaya School',
    category: 'Labs',
  },
];

export const GALLERY_PREVIEW_VIDEO = {
  src: IMAGES.graduation,
  alt: 'School life and celebrations at Om Janahithaya School',
  title: 'School Highlights',
};

export const NEWS_EVENTS = [
  {
    id: '1',
    title: 'School Admission 2025-26 Open Now',
    date: '2025-06-01',
    excerpt:
      'Admissions open for Nursery to Class 10. Apply now for school admission in Bantwal at Om Janahithaya English Medium School.',
    image: IMAGES.graduation,
    category: 'Admissions',
  },
  {
    id: '2',
    title: 'Annual Sports Day 2025',
    date: '2025-01-15',
    excerpt:
      'Our students showcased exceptional talent at the Annual Sports Day with track events, team games, and cultural performances.',
    image: IMAGES.sports,
    category: 'Events',
  },
  {
    id: '3',
    title: 'SSLC Results 2024 — 98% Pass Rate',
    date: '2024-05-20',
    excerpt:
      'Congratulations to our SSLC students for achieving 98% pass rate with 45% distinction. Proud moment for Bantwal!',
    image: IMAGES.graduation,
    category: 'Results',
  },
];

export const FEE_STRUCTURE = [
  { grade: 'Nursery', tuition: '₹8,000', annual: '₹12,000', other: '₹2,000' },
  { grade: 'LKG / UKG', tuition: '₹9,000', annual: '₹13,000', other: '₹2,500' },
  { grade: 'Class 1 - 3', tuition: '₹10,000', annual: '₹14,000', other: '₹3,000' },
  { grade: 'Class 4 - 5', tuition: '₹11,000', annual: '₹15,000', other: '₹3,000' },
  { grade: 'Class 6 - 8', tuition: '₹12,000', annual: '₹16,000', other: '₹3,500' },
  { grade: 'Class 9 - 10', tuition: '₹14,000', annual: '₹18,000', other: '₹4,000' },
];
