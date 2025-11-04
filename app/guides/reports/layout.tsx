import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: '2025 Laser Equipment Market Research Report',
  description: 'Download comprehensive 2025 laser cutting equipment market research report. Analysis of 50+ laser systems, market trends, pricing data, and technical specifications comparison.',
  path: '/guides/reports',
  keywords: [
    'laser equipment market report',
    'laser cutting market research',
    'equipment comparison report',
    '2025 laser market analysis',
    'laser industry report',
  ],
});

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


