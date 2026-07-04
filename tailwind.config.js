/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base — dark sections
        deep: {
          DEFAULT: '#080E1A',
          2: '#0D1B35',
          3: '#12224A',
        },
        // Primary — deep navy (reference / FuturePath layout)
        primary: {
          DEFAULT: '#0F1B35',
          light: '#1A3060',
          glow: '#0F1B3520',
        },
        // Accent — orange
        accent: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          glow: '#F9731620',
          dark: '#EA580C',
        },
        // Gold — achievements, premium badges
        gold: {
          DEFAULT: '#F0BC2E',
          light: '#FFD95E',
        },
        // Neutrals
        white: '#FFFFFF',
        'off-white': '#F7F8FC',
        surface: '#EEF2FF',
        border: '#E2E8F0',
        'text-main': '#0A0F1E',
        'text-muted': '#64748B',
        'text-light': '#94A3B8',
        // Dark section text
        'dark-text': '#E8EEFF',
        'dark-muted': '#7B8BAE',
      },
      fontFamily: {
        heading: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-overlay':
          'linear-gradient(to bottom, rgba(8,14,26,0.3) 0%, rgba(8,14,26,0.7) 60%, rgba(8,14,26,1) 100%)',
        'card-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0F1B35 0%, #1A3060 100%)',
        'accent-gradient': 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
        'text-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #94A3B8 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F0BC2E 0%, #FFD95E 100%)',
        'dark-surface': 'linear-gradient(180deg, #080E1A 0%, #0D1B35 100%)',
      },
      fontSize: {
        'h1-desktop': ['56px', { lineHeight: '1.15', fontWeight: '700' }],
        'h1-mobile': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-desktop': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2-mobile': ['28px', { lineHeight: '1.25', fontWeight: '700' }],
        'h3-desktop': ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3-mobile': ['22px', { lineHeight: '1.35', fontWeight: '600' }],
      },
      boxShadow: {
        card: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'card-hover':
          '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'primary-glow': '0 0 40px #0F1B3520',
        'accent-glow': '0 0 40px #F9731620',
      },
    },
  },
  plugins: [],
};
