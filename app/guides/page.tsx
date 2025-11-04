import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutting Guides & Resources',
  description: 'Comprehensive laser cutting and engraving guides: technical parameters, safety protocols, troubleshooting, process optimization, and equipment selection resources.',
  path: '/guides',
  keywords: [
    'laser cutting guides',
    'laser parameters',
    'cutting charts',
    'safety guides',
    'troubleshooting',
    'process optimization',
    'equipment selection',
  ],
});

const guideCategories = [
  {
    title: 'Getting Started',
    icon: '🎯',
    description: 'Essential guides for selecting and understanding laser cutting systems',
    guides: [
      {
        title: 'Equipment Selection Guide',
        href: '/guides/selection',
        description: 'Choose the right laser system for your application',
      },
      {
        title: 'CO2 vs Fiber Laser Comparison',
        href: '/guides/co2-vs-fiber-laser',
        description: 'Understand the differences and choose the right technology',
      },
      {
        title: 'Power Selection Guide (3kW vs 6kW vs 12kW)',
        href: '/guides/power-3k-6k-12k',
        description: 'Determine optimal laser power for your materials and thickness',
      },
      {
        title: 'Work Area Size Comparison',
        href: '/guides/work-area-size-comparison',
        description: 'Compare bed sizes and choose appropriate work envelope',
      },
    ],
  },
  {
    title: 'Technical Parameters',
    icon: '📊',
    description: 'Reference charts and specifications for laser cutting operations',
    guides: [
      {
        title: 'Material Thickness Parameters',
        href: '/guides/material-thickness-parameters',
        description: 'Power, speed, and gas settings by material and thickness',
      },
      {
        title: 'Cutting Speed Chart',
        href: '/guides/cutting-speed-chart',
        description: 'Optimal cutting speeds for various materials and power levels',
      },
      {
        title: 'Assist Gas Selection Chart',
        href: '/guides/assist-gas-chart',
        description: 'Gas type, pressure, and flow rate recommendations',
      },
      {
        title: 'Focus Position Guide',
        href: '/guides/focus-position-guide',
        description: 'Focal point positioning strategies for different applications',
      },
      {
        title: 'Nozzle Selection Guide',
        href: '/guides/nozzle-selection-guide',
        description: 'Choose correct nozzle type, diameter, and standoff distance',
      },
      {
        title: 'Penetration Depth Analysis',
        href: '/guides/penetration-depth',
        description: 'Maximum cutting thickness capabilities by laser type and power',
      },
    ],
  },
  {
    title: 'Process Optimization',
    icon: '⚙️',
    description: 'Advanced techniques for improving cut quality and efficiency',
    guides: [
      {
        title: 'Process Optimization Guide',
        href: '/guides/process-optimization-guide',
        description: 'Maximize cutting speed and quality through parameter tuning',
      },
      {
        title: 'Edge Quality Standards',
        href: '/guides/edge-quality-standards',
        description: 'ISO 9013 quality classifications and inspection criteria',
      },
      {
        title: 'Nesting Optimization Guide',
        href: '/guides/nesting-optimization-guide',
        description: 'Maximize material utilization and reduce waste',
      },
      {
        title: 'Programming Tips',
        href: '/guides/programming-tips',
        description: 'CNC programming best practices and optimization strategies',
      },
      {
        title: 'Precision Factors Comparison',
        href: '/guides/precision-factors-comparison',
        description: 'Factors affecting cutting accuracy and positioning precision',
      },
    ],
  },
  {
    title: 'Troubleshooting & Maintenance',
    icon: '🔧',
    description: 'Diagnose problems and maintain optimal system performance',
    guides: [
      {
        title: 'Troubleshooting Guide',
        href: '/guides/troubleshooting-guide',
        description: '31 common issues with diagnostic procedures and solutions',
        featured: true,
      },
      {
        title: 'Maintenance Schedule',
        href: '/guides/maintenance-schedule',
        description: 'Preventive maintenance intervals and procedures',
      },
      {
        title: 'Cutting Method Comparison',
        href: '/guides/cutting-method-comparison',
        description: 'Compare laser, plasma, waterjet, and other cutting methods',
      },
    ],
  },
  {
    title: 'Safety & Compliance',
    icon: '🛡️',
    description: 'Safety protocols and regulatory compliance information',
    guides: [
      {
        title: 'Safe Operation Procedures',
        href: '/guides/safety-operations',
        description: 'Essential safety protocols and emergency procedures',
      },
      {
        title: 'Laser Safety Classes',
        href: '/guides/laser-safety-classes',
        description: 'Class 1-4 laser classifications and safety requirements',
      },
      {
        title: 'Compliance & Certification',
        href: '/guides/compliance-certification',
        description: 'CE, FDA, OSHA regulations and certification requirements',
      },
      {
        title: 'Installation Requirements',
        href: '/guides/installation-requirements',
        description: 'Facility requirements for laser system installation',
      },
    ],
  },
  {
    title: 'Technical Deep Dives',
    icon: '🔬',
    description: 'Advanced technical concepts and specifications',
    guides: [
      {
        title: 'Beam Quality Guide',
        href: '/guides/beam-quality-guide',
        description: 'M² factor, beam divergence, and optical quality metrics',
      },
      {
        title: 'Lens Specifications',
        href: '/guides/lens-specifications',
        description: 'Focal length, coating, material specifications',
      },
      {
        title: 'Wavelength Absorption',
        href: '/guides/wavelength-absorption',
        description: 'Material absorption characteristics by laser wavelength',
      },
      {
        title: 'Control Systems Comparison',
        href: '/guides/control-systems-comparison',
        description: 'CNC controller brands, features, and compatibility',
      },
      {
        title: 'Technical Explanations',
        href: '/guides/tech-explain',
        description: 'In-depth explanations of laser cutting physics and concepts',
      },
    ],
  },
  {
    title: 'Tools & Calculators',
    icon: '🧮',
    description: 'Interactive tools for calculations and equipment selection',
    guides: [
      {
        title: 'Power Density Calculator',
        href: '/tools/power-density-calculator',
        description: 'Calculate power density for your cutting application',
      },
      {
        title: 'Kerf Width Calculator',
        href: '/tools/kerf-calculator',
        description: 'Estimate kerf width and compensation values',
      },
      {
        title: 'Cost Estimator',
        href: '/tools/cost-estimator',
        description: 'Calculate operating costs and production economics',
      },
      {
        title: 'Laser Type Selection Wizard',
        href: '/tools/laser-type-wizard',
        description: 'Interactive tool to find your ideal laser system',
      },
      {
        title: 'All Calculators →',
        href: '/tools',
        description: 'View all interactive tools and calculators',
      },
    ],
  },
  {
    title: 'Reference Materials',
    icon: '📚',
    description: 'Glossaries, reports, and comparison tools',
    guides: [
      {
        title: 'Laser Cutting Glossary',
        href: '/guides/glossary',
        description: 'Comprehensive glossary of laser cutting terminology',
      },
      {
        title: 'Equipment Comparison Tool',
        href: '/guides/compare',
        description: 'Side-by-side comparison of laser cutting systems',
      },
      {
        title: 'Technical Reports',
        href: '/guides/reports',
        description: 'Industry reports, research, and technical papers',
      },
    ],
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Laser Cutting Guides & Resources</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Comprehensive technical guides, reference charts, troubleshooting resources, and best practices for laser cutting and engraving operations. From equipment selection to advanced process optimization.
        </p>
      </div>

      {/* Quick Access - Featured Guides */}
      <Card className="mb-10 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            Most Popular Guides
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <Link
              href="/guides/troubleshooting-guide"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors bg-white dark:bg-gray-900"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">🔧 Troubleshooting Guide</h3>
              <p className="text-xs text-muted-foreground">31 issues with solutions</p>
            </Link>
            <Link
              href="/guides/material-thickness-parameters"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors bg-white dark:bg-gray-900"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">📊 Material Parameters</h3>
              <p className="text-xs text-muted-foreground">Complete cutting parameters</p>
            </Link>
            <Link
              href="/guides/selection"
              className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors bg-white dark:bg-gray-900"
            >
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">🎯 Equipment Selection</h3>
              <p className="text-xs text-muted-foreground">Choose the right system</p>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Guide Categories */}
      <div className="space-y-8">
        {guideCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <div className="text-xl">{category.title}</div>
                  <div className="text-sm font-normal text-muted-foreground mt-1">
                    {category.description}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.guides.map((guide) => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className={`block p-4 rounded-lg border transition-colors ${
                      guide.featured
                        ? 'border-blue-300 dark:border-blue-700 bg-blue-50/50 dark:bg-blue-950/20 hover:border-blue-500 dark:hover:border-blue-500'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500'
                    }`}
                  >
                    <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{guide.description}</p>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <Card className="mt-10 bg-gray-50 dark:bg-gray-900">
        <CardContent className="pt-6 text-center">
          <h2 className="text-xl font-semibold mb-2">Need Help Choosing Equipment?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Browse our equipment database or use our comparison tools to find the perfect laser system
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/equipment"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Browse Equipment
            </Link>
            <Link
              href="/comparison"
              className="px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors text-sm font-medium"
            >
              Compare Systems
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* SEO Footer */}
      <div className="mt-10 text-center text-xs text-muted-foreground">
        <p>
          Last Updated: November 2, 2025 | {guideCategories.reduce((acc, cat) => acc + cat.guides.length, 0)} Guides Available
        </p>
      </div>
    </div>
  );
}

