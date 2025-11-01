'use client';

import Link from 'next/link';

interface GuideCategory {
  title: string;
  items: {
    name: string;
    href: string;
    badge?: string;
  }[];
}

const guideCategories: GuideCategory[] = [
  {
    title: 'Selection & Comparison',
    items: [
      { name: 'Equipment Selection Guide', href: '/guides/selection', badge: 'Popular' },
      { name: 'CO2 vs Fiber Laser', href: '/guides/co2-vs-fiber-laser' },
      { name: 'Power Selection (3K/6K/12K)', href: '/guides/power-3k-6k-12k' },
      { name: 'Control Systems Comparison', href: '/guides/control-systems-comparison' },
      { name: 'Work Area Size Guide', href: '/guides/work-area-size-comparison' },
    ],
  },
  {
    title: 'Technical Reference',
    items: [
      { name: 'Technical Explanations', href: '/guides/tech-explain', badge: 'New' },
      { name: 'Beam Quality Guide', href: '/guides/beam-quality-guide' },
      { name: 'Wavelength Absorption', href: '/guides/wavelength-absorption' },
      { name: 'Penetration Depth Analysis', href: '/guides/penetration-depth' },
      { name: 'Precision Factors', href: '/guides/precision-factors-comparison' },
    ],
  },
  {
    title: 'Operations & Maintenance',
    items: [
      { name: 'Maintenance Schedule', href: '/guides/maintenance-schedule' },
      { name: 'Safety Operations', href: '/guides/safety-operations' },
      { name: 'Laser Safety Classes', href: '/guides/laser-safety-classes' },
      { name: 'Troubleshooting Guide', href: '/guides/troubleshooting-guide' },
      { name: 'Process Optimization', href: '/guides/process-optimization-guide' },
    ],
  },
  {
    title: 'Quick Reference Charts',
    items: [
      { name: 'Cutting Speed Chart', href: '/guides/cutting-speed-chart' },
      { name: 'Assist Gas Selection', href: '/guides/assist-gas-chart' },
      { name: 'Material Thickness Parameters', href: '/guides/material-thickness-parameters' },
      { name: 'Nozzle Selection Guide', href: '/guides/nozzle-selection-guide' },
      { name: 'Edge Quality Standards', href: '/guides/edge-quality-standards' },
    ],
  },
];

const additionalResources = [
  { name: 'Glossary', href: '/guides/glossary' },
  { name: 'Industry Reports', href: '/guides/reports' },
  { name: 'Compliance & Certification', href: '/guides/compliance-certification' },
  { name: 'Installation Requirements', href: '/guides/installation-requirements' },
];

interface MegaMenuGuidesProps {
  onItemClick?: () => void;
}

export function MegaMenuGuides({ onItemClick }: MegaMenuGuidesProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Expert Guides & Resources</h3>
        <p className="text-sm text-gray-600">Comprehensive guides to help you understand laser technology</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guideCategories.map((category) => (
          <div key={category.title}>
            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
              <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              {category.title}
            </h4>
            <ul className="space-y-2">
              {category.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onItemClick}
                    className="text-sm text-gray-700 hover:text-blue-600 flex items-center group"
                  >
                    <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="flex-1">{item.name}</span>
                    {item.badge && (
                      <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded bg-blue-100 text-blue-700">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-4">
          <span className="text-sm font-medium text-gray-700">Additional Resources:</span>
          {additionalResources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              onClick={onItemClick}
              className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
            >
              {resource.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}




