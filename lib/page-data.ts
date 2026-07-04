import { SCHOOL } from './constants';
import { IMAGES } from './images';

export const CORE_VALUES = [
  { title: 'Integrity', description: 'Honesty and ethical behaviour in all we do', icon: 'shield' },
  { title: 'Excellence', description: 'Pursuing the highest standards in academics and character', icon: 'star' },
  { title: 'Respect', description: 'Valuing every student, parent, and staff member', icon: 'heart' },
  { title: 'Perseverance', description: 'Encouraging resilience and continuous improvement', icon: 'target' },
  { title: 'Innovation', description: 'Embracing modern teaching methods and technology', icon: 'lightbulb' },
  { title: 'Community', description: 'Building strong ties with families and Bantwal society', icon: 'users' },
];

export const INFRASTRUCTURE = [
  {
    title: 'Smart Classrooms',
    image: IMAGES.classroom,
    description: 'Technology-enabled classrooms for interactive learning',
  },
  {
    title: 'Science Lab',
    image: IMAGES.scienceLab,
    description: 'Well-equipped lab for hands-on science experiments',
  },
  {
    title: 'Computer Lab',
    image: IMAGES.computerLab,
    description: 'Modern computers with internet for digital literacy',
  },
  {
    title: 'Library',
    image: IMAGES.library,
    description: 'Extensive collection of books and reference materials',
  },
  {
    title: 'Playground',
    image: IMAGES.playground,
    description: 'Spacious outdoor area for sports and physical education',
  },
  {
    title: 'Canteen',
    image: IMAGES.canteen,
    description: 'Clean, hygienic canteen serving nutritious meals',
  },
];

export const AFFILIATIONS = [
  { name: 'Karnataka State Board', code: 'SSLC Affiliated' },
  { name: 'DISE Code', code: '29200101234' },
  { name: 'English Medium', code: 'Nursery to Class 10' },
  { name: 'Dakshina Kannada', code: 'Bantwal District' },
];

export const PRINCIPAL_MESSAGE_FULL = {
  name: 'Mrs. Lakshmi Rao',
  role: 'Principal',
  image: IMAGES.principal,
  message: [
    `Welcome to ${SCHOOL.name}. As Principal, it is my privilege to lead a school that has become a trusted name among parents seeking the best English medium school in Bantwal.`,
    'Our journey began with a simple belief: every child deserves quality education in a safe, nurturing environment. Today, we serve over 500 students from Arala, Bantwal, and surrounding areas with a Karnataka State Board curriculum delivered in English medium.',
    'Our dedicated faculty, modern infrastructure, and focus on holistic development ensure that students excel not only in SSLC board examinations but also in life skills, sports, and cultural activities. We invite you to visit our campus and experience the Om Janahithaya difference.',
  ],
};

export const ADMISSION_STEPS = [
  { step: 1, title: 'Download/Fill Form', desc: 'Collect the form from school office or fill the online enquiry form' },
  { step: 2, title: 'Submit Documents', desc: 'Submit required documents along with the application' },
  { step: 3, title: 'Interaction/Assessment', desc: 'Brief interaction for pre-primary; assessment for higher classes' },
  { step: 4, title: 'Fee Payment', desc: 'Complete fee payment as per school fee structure' },
  { step: 5, title: 'Confirmation', desc: 'Receive admission confirmation and welcome kit' },
];

export const ELIGIBILITY_CRITERIA = [
  { class: 'Nursery', minAge: '3 years', notes: 'As on 1st June' },
  { class: 'LKG', minAge: '4 years', notes: 'As on 1st June' },
  { class: 'UKG', minAge: '5 years', notes: 'As on 1st June' },
  { class: 'Class 1', minAge: '6 years', notes: 'Birth certificate required' },
  { class: 'Class 2-5', minAge: 'Age appropriate', notes: 'Previous class report card' },
  { class: 'Class 6-8', minAge: 'Age appropriate', notes: 'Transfer certificate if applicable' },
  { class: 'Class 9-10', minAge: 'Age appropriate', notes: 'SSLC preparation track' },
];

export const ADMISSION_DOCUMENTS = [
  'Birth Certificate (original + copy)',
  'Previous year Report Card (Class 1 and above)',
  'Transfer Certificate (if applicable)',
  'Aadhaar Card (student + parent)',
  'Passport size photographs (4 copies)',
  'Address Proof (Ration Card / Electricity Bill)',
  'Medical fitness certificate',
  'Caste certificate (if applicable)',
];

export const ADMISSION_FAQ = [
  {
    question: 'How to apply for school admission in Bantwal?',
    answer: `Visit Om Janahithaya English Medium School in Arala, Bantwal or fill the online enquiry form on our admissions page. Our team will guide you through the complete admission process for 2025-26.`,
  },
  {
    question: 'What is the age criteria for Nursery admission?',
    answer: 'Children should be 3 years old as on 1st June for Nursery admission. Similar age criteria apply for LKG, UKG, and other classes.',
  },
  {
    question: 'Is this an English medium school in Bantwal?',
    answer: 'Yes, Om Janahithaya is a full English medium school affiliated with Karnataka State Board, offering education from Nursery to Class 10 (SSLC).',
  },
  {
    question: 'What documents are required for admission?',
    answer: 'Birth certificate, previous report card, transfer certificate (if applicable), Aadhaar copies, photographs, and address proof are required.',
  },
  {
    question: 'When does the academic year start?',
    answer: 'The academic year typically begins in June. Admissions for 2025-26 are open now. Contact us for exact dates.',
  },
  {
    question: 'Are there entrance tests for admission?',
    answer: 'Pre-primary admissions involve a brief parent-child interaction. Class 1 and above may have a simple assessment to understand the child\'s level.',
  },
  {
    question: 'What is the fee structure?',
    answer: 'Fees vary by class. Visit our Fee Structure page or contact the school office at ' + SCHOOL.phone + ' for the latest details.',
  },
  {
    question: 'Does the school provide transport?',
    answer: 'Optional transport is available on select routes in Bantwal and nearby areas. Enquire at the school office for route availability.',
  },
  {
    question: 'How can I track my admission application?',
    answer: 'After submitting your enquiry form, our admissions team will contact you within 2 working days with updates on your application status.',
  },
  {
    question: 'Why choose Om Janahithaya over other schools in Bantwal?',
    answer: 'We offer quality English medium education, experienced faculty, consistent SSLC results, affordable fees, and a safe campus in Arala, Bantwal.',
  },
];

export const IMPORTANT_DATES = [
  { date: '2025-06-01', label: 'Admission Open', status: 'Open' },
  { date: '2025-06-15', label: 'Application Deadline (Phase 1)', status: 'Upcoming' },
  { date: '2025-06-20', label: 'Interaction/Assessment Week', status: 'Upcoming' },
  { date: '2025-06-01', label: 'Academic Year Begins', status: 'June 2025' },
  { date: '2025-05-20', label: 'SSLC Results 2024', status: 'Completed' },
];

export const FEE_TABLE = [
  { class: 'Nursery', termFee: '₹4,000', annualFee: '₹12,000', other: '₹2,000', total: '₹14,000' },
  { class: 'LKG / UKG', termFee: '₹4,500', annualFee: '₹13,000', other: '₹2,500', total: '₹15,500' },
  { class: 'Class 1-3', termFee: '₹5,000', annualFee: '₹14,000', other: '₹3,000', total: '₹17,000' },
  { class: 'Class 4-5', termFee: '₹5,500', annualFee: '₹15,000', other: '₹3,000', total: '₹18,000' },
  { class: 'Class 6-8', termFee: '₹6,000', annualFee: '₹16,000', other: '₹3,500', total: '₹19,500' },
  { class: 'Class 9-10', termFee: '₹7,000', annualFee: '₹18,000', other: '₹4,000', total: '₹22,000' },
];

export const GALLERY_FILTERS = [
  'All',
  'Annual Day',
  'Sports Day',
  'Science Fair',
  'Independence Day',
  'Classrooms',
];

export const GALLERY_IMAGES_FULL = [
  { src: IMAGES.annualDay, alt: 'Students performing on stage during Annual Day at Om Janahithaya School', category: 'Annual Day' },
  { src: IMAGES.graduation, alt: 'Annual Day cultural dance performance by students', category: 'Annual Day' },
  { src: IMAGES.sports, alt: 'Students running track events on Sports Day', category: 'Sports Day' },
  { src: IMAGES.playground, alt: 'Team sports event during Sports Day celebrations', category: 'Sports Day' },
  { src: IMAGES.scienceFair, alt: 'Student science project display at school Science Fair', category: 'Science Fair' },
  { src: IMAGES.classroom, alt: 'Teacher guiding students in a bright classroom', category: 'Classrooms' },
  { src: IMAGES.library, alt: 'Students reading in the school library', category: 'Classrooms' },
  { src: IMAGES.independenceDay, alt: 'Flag hoisting ceremony on Independence Day at school campus', category: 'Independence Day' },
  { src: IMAGES.schoolBuilding, alt: 'Om Janahithaya School campus building in Arala, Bantwal', category: 'Classrooms' },
];

export const GALLERY_VIDEOS = [
  { title: 'Annual Day 2024 Highlights', embedId: 'dQw4w9WgXcQ' },
  { title: 'Sports Day 2024', embedId: 'dQw4w9WgXcQ' },
];

export const ALL_FACULTY = [
  { name: 'Mrs. Lakshmi Rao', subject: 'Principal', qualification: 'M.Ed, B.Ed', yearsExperience: '20+ Years', department: 'Primary', image: IMAGES.principal },
  { name: 'Mr. Ravi Kumar', subject: 'English', qualification: 'M.A, B.Ed', yearsExperience: '18+ Years', department: 'Secondary', image: IMAGES.teacherMale },
  { name: 'Mrs. Sunita Shetty', subject: 'Primary Education', qualification: 'B.Ed, D.Ed', yearsExperience: '12+ Years', department: 'Primary', image: IMAGES.teacherFemale },
  { name: 'Mr. Suresh Bhat', subject: 'Science', qualification: 'M.Sc, B.Ed', yearsExperience: '15+ Years', department: 'Secondary', image: IMAGES.teacherMale2 },
  { name: 'Mrs. Meena Hegde', subject: 'English', qualification: 'M.A, B.Ed', yearsExperience: '10+ Years', department: 'Languages', image: IMAGES.teacherFemale },
  { name: 'Mr. Anand Poojary', subject: 'Mathematics', qualification: 'M.Sc, B.Ed', yearsExperience: '12+ Years', department: 'Secondary', image: IMAGES.teacherMale },
  { name: 'Mrs. Kavitha Gowda', subject: 'Kannada', qualification: 'M.A, B.Ed', yearsExperience: '8+ Years', department: 'Languages', image: IMAGES.teacherFemale },
  { name: 'Mr. Deepak Kumar', subject: 'Physical Education', qualification: 'B.P.Ed', yearsExperience: '7+ Years', department: 'Sports', image: IMAGES.teacherMale },
];

export const FACULTY_FILTERS = ['All', 'Primary', 'Secondary', 'Sports', 'Languages'];

export const RESULTS_BY_YEAR = [
  { year: '2024', passRate: 98, distinction: 45 },
  { year: '2023', passRate: 97, distinction: 42 },
  { year: '2022', passRate: 95, distinction: 38 },
];

export const SUBJECT_ACHIEVEMENTS = [
  { subject: 'Mathematics', score: 92 },
  { subject: 'Science', score: 90 },
  { subject: 'English', score: 88 },
  { subject: 'Social Science', score: 87 },
  { subject: 'Kannada', score: 85 },
];

export const AWARDS_MEDALS = [
  'District SSLC Top 10 — 2024',
  'State Science Olympiad Qualifiers',
  'Inter-School Sports Champions',
  'Cultural Fest First Prize — Bantwal',
  'District Essay Competition Winners',
];

export const UPCOMING_EVENTS = [
  { id: 'u1', title: 'Admission Open Day 2025', date: '2025-06-15', excerpt: 'Visit campus, meet faculty, and learn about school admission in Bantwal.' },
  { id: 'u2', title: 'Parent Orientation 2025-26', date: '2025-06-20', excerpt: 'Orientation for new parents and students joining Om Janahithaya.' },
];

export const PAST_NEWS = [
  { id: 'p1', title: 'SSLC Results 2024 — 98% Pass Rate', date: '2024-05-20', excerpt: 'Outstanding SSLC results with 45% distinction. Proud moment for Bantwal!' },
  { id: 'p2', title: 'Annual Sports Day 2025', date: '2025-01-15', excerpt: 'Students showcased exceptional talent at Annual Sports Day.' },
  { id: 'p3', title: 'Science Fair 2024', date: '2024-11-10', excerpt: 'Innovative science projects by students from Class 6 to 10.' },
  { id: 'p4', title: 'Independence Day Celebration', date: '2024-08-15', excerpt: 'Patriotic performances and flag ceremony at school campus.' },
];
