import Link from 'next/link';
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'LaserSpecHub - Laser Equipment Specification Comparison Platform',
  description:
    'Compare laser cutting machines specifications, find the perfect equipment for your manufacturing needs. Technical specifications, power calculators, and expert guides.',
  path: '/',
  keywords: [
    'laser cutting machine',
    'laser equipment comparison',
    'fiber laser',
    'CO2 laser',
    'laser specifications',
    'equipment selection',
    'power calculator',
    'laser machine database',
  ],
});

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LaserSpecHub',
    url: 'https://www.laserspechub.com',
    description: 'Compare laser cutting equipment specifications, calculate power requirements, and find the perfect machine for your manufacturing needs.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.laserspechub.com/equipment?search={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LaserSpecHub',
    url: 'https://www.laserspechub.com',
    description: 'Professional laser equipment comparison and selection platform',
    sameAs: [],
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <StructuredData data={organizationData} />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Compare Laser Equipment Specifications
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Find the perfect laser cutting machine for your manufacturing
              needs. Compare technical specifications, calculate power
              requirements, and make informed decisions. Learn more in our{' '}
              <Link href="/guides/selection" className="text-blue-600 hover:text-blue-800 font-medium underline">
                comprehensive equipment selection guide
              </Link>
              {' '}or explore our{' '}
              <Link href="/guides/co2-vs-fiber-laser" className="text-blue-600 hover:text-blue-800 font-medium underline">
                CO2 vs Fiber laser comparison
              </Link>
              .
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/comparison" className="btn-primary text-lg px-8 py-3">
                Compare Equipment
              </Link>
              <Link
                href="/equipment"
                className="btn-secondary text-lg px-8 py-3"
              >
                Browse Database
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Professional Tools for Equipment Selection
          </h2>
            <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">
                Equipment Comparison
              </h3>
              <p className="text-gray-600 mb-4">
                Compare up to 5 laser machines side-by-side. View detailed
                specifications and identify key differences.
              </p>
              <Link href="/comparison" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Try Comparison Tool →
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Power Calculator</h3>
              <p className="text-gray-600 mb-4">
                Calculate required laser power based on material type,
                thickness, and cutting requirements. See our{' '}
                <Link href="/guides/power-selection-guide" className="text-blue-600 hover:text-blue-800 font-medium underline">
                  power selection guide
                </Link>
                {' '}for detailed recommendations.
              </p>
              <Link href="/tools/power-calculator" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Use Power Calculator →
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-3">Selection Wizard</h3>
              <p className="text-gray-600 mb-4">
                Get personalized recommendations for laser type (CO2, Fiber, or
                Solid) based on your application. Start with our{' '}
                <Link href="/guides/selection" className="text-blue-600 hover:text-blue-800 font-medium underline">
                  complete selection guide
                </Link>
                .
              </p>
              <Link href="/tools/laser-type-wizard" className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                Launch Wizard →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Resources & Guides
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/guides/selection" className="card hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">
                Equipment Selection Guide
              </h3>
              <p className="text-sm text-gray-600">
                Complete framework for evaluating and selecting laser equipment
              </p>
            </Link>
            <Link href="/guides/power-selection-guide" className="card hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">
                Power Selection Guide
              </h3>
              <p className="text-sm text-gray-600">
                Determine the right laser power for your materials and thickness
              </p>
            </Link>
            <Link href="/tools/cutting-time-calculator" className="card hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">
                Cutting Time Calculator
              </h3>
              <p className="text-sm text-gray-600">
                Calculate production times and throughput for your parts
              </p>
            </Link>
            <Link href="/guides/material-thickness-parameters" className="card hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-blue-600">
                Material Parameters
              </h3>
              <p className="text-sm text-gray-600">
                Reference guide for cutting parameters by material and thickness
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Laser Equipment?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Access our comprehensive database of 50+ laser cutting machines. Browse{' '}
            <Link href="/equipment" className="text-blue-600 hover:text-blue-800 font-medium underline">
              equipment specifications
            </Link>
            , use our{' '}
            <Link href="/comparison" className="text-blue-600 hover:text-blue-800 font-medium underline">
              comparison tool
            </Link>
            , or explore{' '}
            <Link href="/guides" className="text-blue-600 hover:text-blue-800 font-medium underline">
              expert guides
            </Link>
            {' '}to make informed decisions.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/equipment" className="btn-primary text-lg px-8 py-3">
              Start Exploring
            </Link>
            <Link href="/guides/selection" className="btn-secondary text-lg px-8 py-3">
              Read Selection Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}






