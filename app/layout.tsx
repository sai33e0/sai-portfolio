import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'SAI KRUPA NAIK D | AI & ML Portfolio',
    template: '%s | SAI KRUPA NAIK D'
  },
  description: '3rd-year CSE (AI & ML) student passionate about machine learning and web development. Showcasing projects, skills, and journey toward becoming a high-impact developer.',
  keywords: ['AI developer', 'machine learning', 'web development', 'React', 'Next.js', 'TypeScript', 'Python', 'portfolio'],
  authors: [{ name: 'SAI KRUPA NAIK D' }],
  creator: 'SAI KRUPA NAIK D',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://saikrupanaikd.github.io/sai-portfolio',
    title: 'SAI KRUPA NAIK D - AI & ML Portfolio',
    description: 'AI & ML enthusiast showcasing innovative projects and technical skills.',
    siteName: 'SAI KRUPA NAIK D Portfolio',
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
    title: 'SAI KRUPA NAIK D | AI & ML Portfolio',
    description: 'AI & ML enthusiast showcasing innovative projects and technical skills.',
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
  name: 'SAI KRUPA NAIK D',
  jobTitle: 'AI & ML Developer',
  description: '3rd-year CSE student passionate about artificial intelligence and machine learning',
  url: 'https://saikrupanaikd.github.io/sai-portfolio',
  sameAs: [
    'https://linkedin.com/in/saikrupanaikd',
    'https://github.com/saikrupanaikd'
  ],
  knowsAbout: [
    'Machine Learning',
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    'Python'
  ],
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'University Name'
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