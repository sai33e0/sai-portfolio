// App-wide constants

export const APP_CONFIG = {
  name: 'SAI KRUPA NAIK D',
  title: 'AI & ML Enthusiast',
  subtitle: 'Aspiring 60 LPA Candidate',
  description: '3rd-year CSE (AI & ML) student passionate about machine learning and web development. Showcasing projects, skills, and journey toward becoming a high-impact developer.',
  url: process.env.NODE_ENV === 'production'
    ? 'https://saikrupanaikd.github.io/sai-portfolio'
    : 'http://localhost:3000',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/saikrupanaikd',
  linkedin: 'https://linkedin.com/in/saikrupanaikd',
  twitter: 'https://twitter.com/saikrupanaikd',
  email: 'saikrupanaik.d@example.com',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Fun', href: '#fun' },
  { name: 'Contact', href: '#contact' }
] as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.2,
    normal: 0.6,
    slow: 0.8,
  },
  ease: {
    easeOut: 'easeOut',
    easeInOut: 'easeInOut',
  },
  stagger: {
    children: 0.1,
    container: 0.15,
  },
  threshold: 0.1,
  once: true,
} as const;

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

export const COLORS = {
  primary: '#000000',
  accent: '#00C8FF',
  secondary: '#666666',
  background: '#ffffff',
  muted: '#f5f5f5',
} as const;