import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Laser Cutting Calculators & Tools - LaserSpecHub',
  description:
    'Interactive laser cutting calculators and tools: power density, kerf width, cost estimation, gas flow, chiller sizing, and equipment selection wizards.',
  keywords: [
    'laser cutting calculator',
    'power density calculator',
    'kerf calculator',
    'cost estimator',
    'laser selection tool',
    'gas flow calculator',
  ],
  alternates: { canonical: 'https://laserspechub.com/tools' },
  openGraph: {
    title: 'Laser Cutting Calculators & Interactive Tools',
    description: 'Free online calculators for laser cutting parameter optimization and equipment selection',
    type: 'website',
    url: 'https://laserspechub.com/tools',
  },
};

const tools = [
  {
    category: 'Parameter Calculators',
    icon: '📐',
    description: 'Calculate optimal cutting parameters and technical specifications',
    items: [
      {
        title: 'Power Density Calculator',
        href: '/tools/power-density-calculator',
        description: 'Calculate power density (W/cm²) for optimal cutting performance',
        icon: '⚡',
        popular: true,
      },
      {
        title: 'Kerf Width Calculator',
        href: '/tools/kerf-calculator',
        description: 'Estimate kerf width and path compensation for accurate part dimensions',
        icon: '📏',
        popular: true,
      },
      {
        title: 'Power Calculator',
        href: '/tools/power-calculator',
        description: 'Determine required laser power based on material and thickness',
        icon: '🔋',
      },
      {
        title: 'Cutting Time Calculator',
        href: '/tools/cutting-time-calculator',
        description: 'Calculate cycle time, production capacity, and time breakdown',
        icon: '⏱️',
      },
      {
        title: 'Gas Flow Calculator',
        href: '/tools/gas-flow-calculator',
        description: 'Calculate gas consumption rates and monthly operating costs',
        icon: '💨',
      },
    ],
  },
  {
    category: 'Equipment Selection',
    icon: '🎯',
    description: 'Find the perfect laser system for your application',
    items: [
      {
        title: 'Laser Type Selection Wizard',
        href: '/tools/laser-type-wizard',
        description: 'Interactive wizard to determine ideal laser type (CO2/Fiber) for your needs',
        icon: '🧙',
        popular: true,
      },
      {
        title: 'Workspace Size Matcher',
        href: '/tools/workspace-matcher',
        description: 'Match your part sizes to optimal cutting bed dimensions',
        icon: '📦',
      },
    ],
  },
  {
    category: 'Cost & ROI Analysis',
    icon: '💰',
    description: 'Estimate operating costs and return on investment',
    items: [
      {
        title: 'Operating Cost Estimator',
        href: '/tools/cost-estimator',
        description: 'Calculate per-part costs including power, gas, consumables, and labor',
        icon: '💵',
        popular: true,
      },
      {
        title: 'Nozzle Life Calculator',
        href: '/tools/nozzle-life-calculator',
        description: 'Estimate nozzle replacement intervals and consumable costs',
        icon: '🔧',
      },
    ],
  },
  {
    category: 'System Design',
    icon: '🏗️',
    description: 'Size and specify support equipment',
    items: [
      {
        title: 'Chiller Capacity Calculator',
        href: '/tools/chiller-calculator',
        description: 'Calculate required chiller capacity for your laser system',
        icon: '❄️',
      },
    ],
  },
];

const quickLinks = [
  {
    title: 'Technical Guides',
    href: '/guides',
    description: 'Browse comprehensive laser cutting guides and references',
    icon: '📚',
  },
  {
    title: 'Equipment Database',
    href: '/equipment',
    description: 'Search and compare laser cutting systems',
    icon: '🔍',
  },
  {
    title: 'Troubleshooting',
    href: '/guides/troubleshooting-guide',
    description: '31 common issues with diagnostic solutions',
    icon: '🔧',
  },
];

export default function ToolsIndexPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-4">Laser Cutting Calculators & Tools</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Free interactive calculators and tools for laser cutting parameter optimization, cost analysis, and equipment selection. All calculations based on industry standards and real-world data.
        </p>
      </div>

      {/* Popular Tools Highlight */}
      <Card className="mb-10 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            Most Popular Tools
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {tools
              .flatMap((cat) => cat.items)
              .filter((tool) => tool.popular)
              .map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors bg-white dark:bg-gray-900"
                >
                  <div className="text-3xl mb-2">{tool.icon}</div>
                  <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1 text-sm">
                    {tool.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{tool.description}</p>
                </Link>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* Tool Categories */}
      <div className="space-y-8">
        {tools.map((category) => (
          <Card key={category.category}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <div className="text-xl">{category.category}</div>
                  <div className="text-sm font-normal text-muted-foreground mt-1">
                    {category.description}
                  </div>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {category.items.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="group block p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-3">
                      <div className="text-3xl">{tool.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-2">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{tool.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      <Card className="mt-10">
        <CardHeader>
          <CardTitle className="text-lg">Related Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-colors"
              >
                <div className="text-2xl mb-2">{link.icon}</div>
                <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-1">
                  {link.title}
                </h3>
                <p className="text-xs text-muted-foreground">{link.description}</p>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Info Box */}
      <Card className="mt-10 bg-gray-50 dark:bg-gray-900">
        <CardContent className="pt-6">
          <div className="text-sm text-muted-foreground space-y-3">
            <p>
              <strong className="text-foreground">About These Tools:</strong> All calculators are based on industry-standard formulas, manufacturer specifications, and real-world testing data. Results provide guidance for parameter optimization but should be validated through test cuts on your specific equipment and materials.
            </p>
            <p>
              <strong className="text-foreground">Data Privacy:</strong> All calculations are performed client-side in your browser. No data is transmitted to our servers or third parties.
            </p>
            <p className="text-center pt-2">
              Need a custom calculator or have suggestions? <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact us</Link>
            </p>
          </div>
        </CardContent>
      </Card>

      {/* SEO Footer */}
      <div className="mt-10 text-center text-xs text-muted-foreground">
        <p>
          Last Updated: November 2, 2025 | {tools.reduce((acc, cat) => acc + cat.items.length, 0)} Interactive Tools Available
        </p>
      </div>
    </div>
  );
}

