import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Authentication',
  description: 'Sign in or register for LaserSpecHub to access personalized features',
  path: '/auth',
  keywords: ['login', 'register', 'authentication', 'sign in', 'sign up'],
  noIndex: true, // Authentication pages should not be indexed
});

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

