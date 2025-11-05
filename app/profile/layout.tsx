import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'My Profile',
  description: 'Manage your LaserSpecHub account, favorites, and saved comparisons',
  path: '/profile',
  keywords: ['profile', 'account', 'favorites', 'saved comparisons', 'user account'],
  noIndex: true, // User profile pages should not be indexed
});

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

