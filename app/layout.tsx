import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.laserspechub.com'),
  title: {
    default: 'LaserSpecHub - Laser Equipment Specification Comparison Platform',
    template: '%s | LaserSpecHub',
  },
  description:
    'Compare laser cutting machines specifications, find the perfect equipment for your manufacturing needs. Technical specifications, power calculators, and expert guides.',
  keywords: [
    'laser cutting machine',
    'laser equipment comparison',
    'fiber laser',
    'CO2 laser',
    'laser specifications',
    'equipment selection',
  ],
  authors: [{ name: 'LaserSpecHub Team' }],
  creator: 'LaserSpecHub Team',
  publisher: 'LaserSpecHub',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'LaserSpecHub',
    title: 'LaserSpecHub - Laser Equipment Comparison Platform',
    description:
      'Professional laser equipment specification comparison and selection tools',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LaserSpecHub - Laser Equipment Comparison Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LaserSpecHub',
    description: 'Compare laser equipment specifications',
    images: ['/og-image.png'],
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
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className="min-h-screen bg-white antialiased flex flex-col">
        <Providers>
          <Header />
          <Breadcrumbs />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

