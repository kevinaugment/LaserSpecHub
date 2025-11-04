import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Equipment Comparison Tool - Compare Specifications & Pricing',
  description: 'Compare up to 5 laser cutting machines side-by-side with detailed specifications, pricing, and performance metrics. Free comparison tool for fiber lasers, CO2 lasers, and more. Export to PDF or share your comparison.',
  path: '/comparison',
  keywords: [
    'laser equipment comparison',
    'laser cutter comparison',
    'fiber laser vs CO2',
    'laser machine specs',
    'equipment comparison tool',
    'laser specifications',
    'laser price comparison',
  ],
});

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

