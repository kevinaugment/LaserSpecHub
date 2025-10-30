import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'CO2 vs Fiber Laser: Complete Technology Comparison Guide',
  description:
    'Comprehensive comparison of CO2 and Fiber laser technologies. Understand the differences, advantages, applications, and how to choose the right laser type for your manufacturing needs.',
  path: '/guides/compare',
  keywords: [
    'CO2 vs fiber laser',
    'laser technology comparison',
    'laser type selection',
    'fiber laser advantages',
    'CO2 laser benefits',
  ],
});

export default function CompareGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <article className="prose max-w-none">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            CO2 vs Fiber Laser: Complete Technology Comparison
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Understanding the fundamental differences between CO2 and Fiber laser technologies 
            is crucial for making the right equipment investment. This guide breaks down everything 
            you need to know to choose the optimal laser type for your application.
          </p>
        </div>

        {/* Quick Comparison Table */}
        <Card variant="bordered" className="mb-8 not-prose">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left p-3 font-semibold">Feature</th>
                    <th className="text-left p-3 font-semibold">Fiber Laser</th>
                    <th className="text-left p-3 font-semibold">CO2 Laser</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="p-3 font-medium">Wavelength</td>
                    <td className="p-3">1.06 μm</td>
                    <td className="p-3">10.6 μm</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-medium">Best For</td>
                    <td className="p-3">Metals (Steel, Aluminum, Brass)</td>
                    <td className="p-3">Non-metals (Acrylic, Wood, Fabric)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Efficiency</td>
                    <td className="p-3">25-30%</td>
                    <td className="p-3">10-15%</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-medium">Maintenance</td>
                    <td className="p-3">Very Low</td>
                    <td className="p-3">Moderate</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Initial Cost</td>
                    <td className="p-3">Higher</td>
                    <td className="p-3">Lower</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-medium">Operating Cost</td>
                    <td className="p-3">Lower</td>
                    <td className="p-3">Higher</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Fiber Laser Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Fiber Laser Technology</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h3>
          <p className="text-gray-700 mb-4">
            Fiber lasers generate the laser beam through optical fibers doped with rare-earth elements 
            like ytterbium. The beam is then delivered through fiber-optic cables, resulting in exceptional 
            beam quality and minimal maintenance requirements.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Advantages</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Superior Metal Cutting:</strong> Highly absorbed by metals, making it ideal for steel, stainless steel, aluminum, and brass</li>
            <li><strong>High Efficiency:</strong> 25-30% electrical-to-optical efficiency, significantly better than CO2</li>
            <li><strong>Low Maintenance:</strong> No mirrors or optical path alignment needed, minimal consumables</li>
            <li><strong>Compact Design:</strong> Smaller footprint due to fiber delivery system</li>
            <li><strong>Fast Cutting Speeds:</strong> Excellent for thin to medium thickness metals</li>
            <li><strong>Long Service Life:</strong> Typically 100,000+ hours before significant degradation</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Applications</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Sheet metal fabrication</li>
            <li>Automotive parts manufacturing</li>
            <li>Electronics and medical device production</li>
            <li>Precision metal cutting up to 25mm thickness</li>
            <li>High-volume production environments</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
            <p className="text-blue-900">
              <strong>Did You Know?</strong> Fiber lasers can cut reflective materials like aluminum 
              and brass much more safely than CO2 lasers, as the shorter wavelength is better absorbed 
              by these metals.
            </p>
          </div>
        </section>

        {/* CO2 Laser Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">CO2 Laser Technology</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">How It Works</h3>
          <p className="text-gray-700 mb-4">
            CO2 lasers use a gas mixture (primarily CO2) as the lasing medium, producing a beam at 
            10.6 micrometers wavelength. This longer wavelength is particularly effective for non-metallic 
            materials and offers superior edge quality for many applications.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Advantages</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Versatile Material Range:</strong> Excellent for wood, acrylic, fabric, leather, and some metals</li>
            <li><strong>Superior Edge Quality:</strong> Produces smooth, polished edges on acrylics and other plastics</li>
            <li><strong>Lower Initial Investment:</strong> Generally more affordable than fiber lasers</li>
            <li><strong>Mature Technology:</strong> Well-established with extensive support and knowledge base</li>
            <li><strong>Thick Material Capability:</strong> Can cut thicker non-metals effectively</li>
            <li><strong>Wide Application Range:</strong> From signage to industrial cutting</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Applications</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Signage and advertising industry</li>
            <li>Woodworking and furniture production</li>
            <li>Acrylic and plastic fabrication</li>
            <li>Textile and fabric cutting</li>
            <li>Packaging prototype development</li>
            <li>Architectural model making</li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 my-6">
            <p className="text-yellow-900">
              <strong>Important Note:</strong> While CO2 lasers can cut thin metals, fiber lasers 
              are generally more efficient and cost-effective for metal-focused operations.
            </p>
          </div>
        </section>

        {/* Decision Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Should You Choose?</h2>
          
          <div className="grid md:grid-cols-2 gap-6 not-prose mb-6">
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="primary" size="lg">Choose Fiber Laser If:</Badge>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Your primary material is metal
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You need high-volume production
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Low operating costs are priority
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Minimal maintenance is important
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You cut reflective metals
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="info" size="lg">Choose CO2 Laser If:</Badge>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You work with non-metallic materials
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Lower initial budget is crucial
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Edge quality is paramount
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    You need material versatility
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Cutting thick non-metals
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tools */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Deciding?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/tools/laser-type-wizard">
              <Card variant="bordered" className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Laser Type Wizard</h3>
                  <p className="text-sm text-gray-600">
                    Answer a few questions to get personalized recommendations
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/tools/power-calculator">
              <Card variant="bordered" className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Power Calculator</h3>
                  <p className="text-sm text-gray-600">
                    Calculate required laser power for your materials
                  </p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment">
              <Card variant="bordered" className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Equipment Database</h3>
                  <p className="text-sm text-gray-600">
                    Browse and compare laser cutting machines
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

