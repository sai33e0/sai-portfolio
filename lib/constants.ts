// App-wide constants

export const APP_CONFIG = {
  name: 'Sai Krupa Naik D',
  title: 'AI & ML Developer',
  subtitle: '3rd Year B.Tech CSE (AI & ML)',
  description: 'Driven and detail-oriented Computer Science student specializing in Artificial Intelligence and Machine Learning, seeking opportunities to apply data-driven solutions, full-stack development expertise, and innovative problem-solving to real-world challenges.',
  url: process.env.NODE_ENV === 'production'
    ? 'https://sai33e0.github.io/portfolio'
    : 'http://localhost:3000',
} as const;

export const SOCIAL_LINKS = {
  github: 'https://github.com/sai33e0',
  linkedin: 'https://www.linkedin.com/in/dungathu-sai-18b577253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  instagram: 'https://www.instagram.com/saiiiiiiiiiiii_____?igsh=MWdrdzE5ejRxMTliNA==',
  twitter: 'https://twitter.com/saikrupanaikd',
  email: 'dhungathusaikrupanaik@gmail.com',
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