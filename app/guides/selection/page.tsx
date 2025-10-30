import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Equipment Selection Guide - How to Choose the Right Machine',
  description:
    'Comprehensive guide to selecting the right laser cutting equipment for your business. Learn about key specifications, evaluation criteria, and decision frameworks.',
  path: '/guides/selection',
  keywords: [
    'laser equipment selection',
    'buying guide',
    'laser machine specifications',
    'equipment evaluation',
  ],
});

export default function SelectionGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <article className="prose max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Laser Equipment Selection Guide
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Choosing the right laser cutting equipment is a significant investment decision. 
          This guide walks you through the essential factors to consider.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Define Your Requirements</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Material Considerations</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>What materials will you cut? (metals, non-metals, or both)</li>
            <li>Material thickness range required</li>
            <li>Special material properties (reflective, brittle, etc.)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Production Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Daily/monthly production volume</li>
            <li>Maximum part size needed</li>
            <li>Required cutting speed and quality</li>
            <li>Single or multi-shift operation</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Budget Constraints</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Initial investment budget</li>
            <li>Operating cost considerations</li>
            <li>Maintenance and consumables budget</li>
            <li>ROI expectations and timeline</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Key Specifications to Evaluate</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Laser Power</h3>
              <p className="text-gray-700">
                Higher power enables faster cutting and thicker materials. Common ranges: 1-3kW (thin materials), 
                4-6kW (medium), 8-12kW+ (thick materials and high-speed production).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Work Area Size</h3>
              <p className="text-gray-700">
                Must accommodate your largest parts plus spacing. Common sizes: 1m×1m (small), 
                2m×3m (medium), 3m×6m+ (large format). Consider material utilization.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Positioning Accuracy</h3>
              <p className="text-gray-700">
                Critical for precision work. Typical ranges: ±0.05mm (standard), ±0.03mm (precision), 
                ±0.01mm (ultra-precision). Match to your quality requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Control System</h3>
              <p className="text-gray-700">
                Affects ease of use and capabilities. Popular options: Cypcut, Ruida, Beckhoff. 
                Consider software compatibility and learning curve.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Vendor Evaluation</h2>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Reputation & Experience:</strong> Years in business, customer reviews, industry standing</li>
            <li><strong>Technical Support:</strong> Response times, expertise level, availability</li>
            <li><strong>Training:</strong> Initial training programs, ongoing education</li>
            <li><strong>Parts & Service:</strong> Spare parts availability, service network</li>
            <li><strong>Warranty:</strong> Coverage period, what's included, service terms</li>
            <li><strong>Customization:</strong> Ability to modify for specific needs</li>
          </ul>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
          <h3 className="font-semibold text-blue-900 mb-2">Pro Tip</h3>
          <p className="text-blue-800">
            Request a test cut with your actual materials before finalizing your purchase. 
            This reveals real-world performance and helps validate specifications.
          </p>
        </div>

        <section className="not-prose mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Use Our Selection Tools</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/tools/laser-type-wizard">
              <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Laser Type Wizard</h3>
                  <p className="text-sm text-gray-600">Get personalized laser type recommendations</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment">
              <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Equipment Database</h3>
                  <p className="text-sm text-gray-600">Browse and filter laser cutting machines</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

