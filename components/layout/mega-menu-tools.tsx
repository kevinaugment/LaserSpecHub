'use client';

import Link from 'next/link';

interface ToolItem {
  name: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

const tools: ToolItem[] = [
  {
    name: 'Power Calculator',
    href: '/tools/power-calculator',
    description: 'Calculate required laser power for your materials',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'Workspace Matcher',
    href: '/tools/workspace-matcher',
    description: 'Find equipment matching your workspace size',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3z" />
      </svg>
    ),
  },
  {
    name: 'Laser Type Wizard',
    href: '/tools/laser-type-wizard',
    description: 'Get personalized laser type recommendations',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    name: 'Cost Estimator',
    href: '/tools/cost-estimator',
    description: 'Estimate operational costs for laser cutting',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Power Density Calculator',
    href: '/tools/power-density-calculator',
    description: 'Calculate beam power density and intensity',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Kerf Calculator',
    href: '/tools/kerf-calculator',
    description: 'Calculate cutting kerf width for precision',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    name: 'Chiller Calculator',
    href: '/tools/chiller-calculator',
    description: 'Size your cooling system requirements',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    name: 'Nozzle Life Calculator',
    href: '/tools/nozzle-life-calculator',
    description: 'Estimate nozzle replacement intervals',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Gas Flow Calculator',
    href: '/tools/gas-flow-calculator',
    description: 'Calculate gas consumption and costs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    name: 'Cutting Time Calculator',
    href: '/tools/cutting-time-calculator',
    description: 'Calculate cycle time and production capacity',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

interface MegaMenuToolsProps {
  onItemClick?: () => void;
}

export function MegaMenuTools({ onItemClick }: MegaMenuToolsProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Interactive Calculators & Tools</h3>
        <p className="text-sm text-gray-600">Professional tools to help you make informed decisions</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            onClick={onItemClick}
            className="group p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all duration-200"
          >
            <div className="flex items-start space-x-3">
              <div className="text-blue-600 group-hover:text-blue-700 flex-shrink-0">
                {tool.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-700 mb-1">
                  {tool.name}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {tool.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <Link
          href="/equipment"
          onClick={onItemClick}
          className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center"
        >
          Browse Equipment Database
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}




