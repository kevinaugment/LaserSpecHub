import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Equipment Comparison Tool - Compare Up to 5 Machines',
  description:
    'Compare up to 5 laser cutting machines side-by-side with detailed specifications, pricing, and key differences highlighted. Free comparison tool for making informed equipment decisions.',
  path: '/comparison',
  keywords: [
    'laser equipment comparison',
    'laser machine comparison',
    'compare laser cutters',
    'equipment comparison tool',
    'laser specification comparison',
    'side-by-side comparison',
  ],
});

export default function ComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
