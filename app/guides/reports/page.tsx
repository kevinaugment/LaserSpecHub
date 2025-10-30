import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Equipment Market Report & Industry Trends',
  description:
    '2025 laser equipment market analysis, industry trends, technology innovations, and purchasing insights for manufacturing decision-makers.',
  path: '/guides/reports',
  keywords: [
    'laser equipment market',
    'industry report',
    'laser trends 2025',
    'market analysis',
  ],
});

export default function ReportsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <article className="prose max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          2025 Laser Equipment Market Report
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Key trends, market insights, and technology developments in the laser cutting industry.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Overview</h2>
          <p className="text-gray-700 mb-4">
            The laser cutting equipment market continues strong growth, driven by:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Increasing automation in manufacturing</li>
            <li>Growing demand for precision metal fabrication</li>
            <li>Shift from traditional cutting to laser technology</li>
            <li>Emerging markets expansion in Asia and Eastern Europe</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Trends</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Higher Power Fiber Lasers</h3>
              <p className="text-gray-700">
                12kW-40kW+ fiber lasers becoming more accessible, enabling faster cutting of thick materials 
                and increased throughput for high-volume production.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">2. AI-Powered Optimization</h3>
              <p className="text-gray-700">
                Machine learning algorithms optimizing cutting parameters in real-time, reducing material 
                waste and improving edge quality automatically.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Smart Manufacturing Integration</h3>
              <p className="text-gray-700">
                IoT connectivity, predictive maintenance, and seamless ERP integration becoming standard 
                features rather than premium options.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Green Technology Focus</h3>
              <p className="text-gray-700">
                Energy-efficient designs, reduced consumables, and eco-friendly processes addressing 
                environmental regulations and sustainability goals.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pricing Trends</h2>
          <p className="text-gray-700 mb-4">
            2025 equipment pricing observations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Entry-level CO2 (100W-150W):</strong> $5,000-$15,000</li>
            <li><strong>Mid-range Fiber (3-6kW):</strong> $60,000-$120,000</li>
            <li><strong>High-power Fiber (12kW+):</strong> $200,000-$500,000+</li>
            <li><strong>Trend:</strong> Prices declining for mid-range while capabilities increase</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Regional Insights</h2>
          
          <div className="grid md:grid-cols-2 gap-6 not-prose">
            <Card variant="bordered">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Asia-Pacific</h3>
                <p className="text-sm text-gray-700">
                  Largest market share, driven by Chinese manufacturers offering competitive pricing. 
                  Rapid adoption in automotive and electronics sectors.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">North America</h3>
                <p className="text-sm text-gray-700">
                  Focus on high-end, automated systems. Strong demand for domestic manufacturing renaissance 
                  and reshoring initiatives.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Europe</h3>
                <p className="text-sm text-gray-700">
                  Emphasis on precision engineering and energy efficiency. Strict regulations driving 
                  innovation in safety and environmental standards.
                </p>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Emerging Markets</h3>
                <p className="text-sm text-gray-700">
                  Growing rapidly in India, Southeast Asia, and Eastern Europe as manufacturing capabilities 
                  expand and labor costs rise.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Explore Equipment Options</h2>
          <Link href="/equipment">
            <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Browse Equipment Database</h3>
                <p className="text-sm text-gray-600">
                  Compare specifications and prices across manufacturers
                </p>
              </CardContent>
            </Card>
          </Link>
        </section>
      </article>
    </div>
  );
}
