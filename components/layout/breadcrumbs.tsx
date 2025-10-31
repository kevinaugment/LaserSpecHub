'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

const pathLabelMap: Record<string, string> = {
  comparison: 'Comparison',
  tools: 'Tools',
  'power-calculator': 'Power Calculator',
  'workspace-matcher': 'Workspace Matcher',
  'laser-type-wizard': 'Laser Type Wizard',
  equipment: 'Equipment Database',
  guides: 'Guides',
  compare: 'Technology Comparison',
  selection: 'Selection Guides',
  'tech-explain': 'Technical Explanations',
  reports: 'Industry Reports',
  glossary: 'Glossary & FAQ',
  about: 'About Us',
  contact: 'Contact',
  privacy: 'Privacy Policy',
  terms: 'Terms of Service',
};

export function Breadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    if (pathname === '/') return [];

    const segments = pathname.split('/').filter(Boolean);
    const items: BreadcrumbItem[] = [];
    
    let path = '';
    segments.forEach((segment) => {
      path += `/${segment}`;
      items.push({
        label: pathLabelMap[segment] || segment.charAt(0).toUpperCase() + segment.slice(1),
        href: path,
      });
    });

    return items;
  }, [pathname]);

  if (breadcrumbs.length === 0) return null;

  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-gray-50 border-b border-gray-200 px-4 md:px-6 py-3"
    >
      <ol className="flex flex-wrap items-center space-x-2 text-sm max-w-7xl mx-auto">
        <li>
          <Link 
            href="/" 
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Home
          </Link>
        </li>
        {breadcrumbs.map((item, index) => {
          const isLast = index === breadcrumbs.length - 1;
          return (
            <li key={item.href} className="flex items-center">
              <svg 
                className="w-4 h-4 text-gray-400 mx-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
              {isLast ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href} 
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}











