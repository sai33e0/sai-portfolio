import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sai33e0.github.io/portfolio'),
  title: {
    default: 'Sai Krupa Naik D | AI & ML Developer',
    template: '%s | Sai Krupa Naik D'
  },
  description: 'Driven and detail-oriented Computer Science student specializing in Artificial Intelligence and Machine Learning. Showcasing projects, skills, and expertise in full-stack development and AI solutions.',
  keywords: ['AI developer', 'machine learning', 'full-stack development', 'React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'portfolio'],
  authors: [{ name: 'Sai Krupa Naik D' }],
  creator: 'Sai Krupa Naik D',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sai33e0.github.io/portfolio',
    title: 'Sai Krupa Naik D - AI & ML Developer Portfolio',
    description: 'Computer Science student specializing in AI & ML. Full-stack developer with expertise in building scalable, intelligent systems.',
    siteName: 'Sai Krupa Naik D Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SAI KRUPA NAIK D - AI & ML Developer Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sai Krupa Naik D | AI & ML Developer',
    description: 'Computer Science student specializing in AI & ML. Full-stack developer passionate about building innovative solutions.',
    images: ['/images/twitter-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sai Krupa Naik D',
  jobTitle: 'AI & ML Developer',
  description: 'Computer Science student specializing in Artificial Intelligence and Machine Learning with expertise in full-stack development',
  url: 'https://sai33e0.github.io/portfolio',
  sameAs: [
    'https://linkedin.com/in/saikrupanaikd',
    'https://github.com/sai33e0'
  ],
  knowsAbout: [
    'Machine Learning',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'Node.js',
    'Full-Stack Development'
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Srinivasa Ramanujan Institute of Technology'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans text-primary bg-background">
        {children}
      </body>
    </html>
  );
}