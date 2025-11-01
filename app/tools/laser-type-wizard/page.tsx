import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { LaserTypeWizardForm } from '@/components/calculators/laser-type-wizard-form';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Type Selection Wizard - Choose CO2, Fiber, or Solid-State Laser',
  description:
    'Professional laser type selection wizard. Get personalized recommendations for CO2, Fiber, or Solid-State lasers based on materials, thickness, production volume, precision requirements, and budget. Make informed equipment decisions.',
  path: '/tools/laser-type-wizard',
  keywords: [
    'laser type selection',
    'laser selection wizard',
    'CO2 vs fiber laser',
    'fiber vs CO2 comparison',
    'laser technology selection',
    'choosing laser type',
    'laser equipment selection',
    'solid-state laser',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Choose the Right Laser Type for Your Application',
  description: 'Step-by-step wizard to find the best laser technology for your manufacturing needs',
  steps: [
    {
      name: 'Specify Materials',
      text: 'Select primary materials you plan to cut: metals (steel, stainless steel, aluminum), non-metals (acrylic, wood, plastics), or both',
    },
    {
      name: 'Define Requirements',
      text: 'Provide details about material thickness range, production volume, precision requirements, and budget constraints',
    },
    {
      name: 'Review Recommendations',
      text: 'Get personalized laser type recommendation with detailed advantages, limitations, cost analysis, and equipment suggestions',
    },
  ],
});

export default function LaserTypeWizardPage() {
  return (
    <>
      <StructuredData data={howToSchema} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header - Compact */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Laser Type Selection Wizard
          </h1>
          <p className="text-base text-gray-600">
            Answer guided questions to get personalized recommendations for CO2, Fiber, or Solid-State laser technology. Find the perfect match for your application and budget.
          </p>
        </div>
        
        {/* Wizard - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <LaserTypeWizardForm />
        </div>

        {/* Laser Technology Comparison */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Fiber Laser</h3>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p><strong>Wavelength:</strong> 1070nm (1.07μm)</p>
              <p><strong>Power Range:</strong> 1-30kW</p>
              <p><strong>Efficiency:</strong> 30-40%</p>
              <p><strong>Maintenance:</strong> Low (20,000-100,000 hours)</p>
            </div>
            <div className="border-t border-blue-200 pt-3">
              <p className="text-xs font-semibold text-gray-900 mb-2">Best For:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Metals: Steel, stainless steel, aluminum, copper, brass</li>
                <li>• Thin to medium thickness (0.5-25mm)</li>
                <li>• High-speed production</li>
                <li>• Precision cutting</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">CO2 Laser</h3>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p><strong>Wavelength:</strong> 10.6μm</p>
              <p><strong>Power Range:</strong> 0.1-20kW</p>
              <p><strong>Efficiency:</strong> 10-15%</p>
              <p><strong>Maintenance:</strong> Medium (2,000-8,000 hours)</p>
            </div>
            <div className="border-t border-green-200 pt-3">
              <p className="text-xs font-semibold text-gray-900 mb-2">Best For:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Non-metals: Acrylic, wood, MDF, plastics, fabric</li>
                <li>• Thin metals (up to 6mm)</li>
                <li>• Versatile applications</li>
                <li>• Lower initial investment</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Solid-State Laser</h3>
            <div className="space-y-2 text-sm text-gray-700 mb-4">
              <p><strong>Wavelength:</strong> 1064nm (Nd:YAG)</p>
              <p><strong>Power Range:</strong> 1-15kW</p>
              <p><strong>Efficiency:</strong> 20-30%</p>
              <p><strong>Maintenance:</strong> Medium-High</p>
            </div>
            <div className="border-t border-purple-200 pt-3">
              <p className="text-xs font-semibold text-gray-900 mb-2">Best For:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Thick metals (10-50mm)</li>
                <li>• Aerospace, automotive</li>
                <li>• High beam quality (M²&lt;1.2)</li>
                <li>• Demanding applications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Detailed Technology Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Fiber Laser</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">CO2 Laser</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Solid-State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 font-medium">Initial Cost</td>
                  <td className="px-4 py-3">$80k-300k</td>
                  <td className="px-4 py-3">$40k-150k</td>
                  <td className="px-4 py-3">$100k-400k</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Operating Cost</td>
                  <td className="px-4 py-3">Low</td>
                  <td className="px-4 py-3">Medium</td>
                  <td className="px-4 py-3">Medium-High</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Cutting Speed (Metals)</td>
                  <td className="px-4 py-3">Very High</td>
                  <td className="px-4 py-3">Low-Medium</td>
                  <td className="px-4 py-3">High</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Edge Quality</td>
                  <td className="px-4 py-3">Excellent</td>
                  <td className="px-4 py-3">Good-Excellent</td>
                  <td className="px-4 py-3">Excellent</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Beam Quality (M²)</td>
                  <td className="px-4 py-3">1.05-1.2</td>
                  <td className="px-4 py-3">1.1-1.3</td>
                  <td className="px-4 py-3">1.05-1.15</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">Maintenance Interval</td>
                  <td className="px-4 py-3">20,000-100,000 hrs</td>
                  <td className="px-4 py-3">2,000-8,000 hrs</td>
                  <td className="px-4 py-3">5,000-15,000 hrs</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Consumables</td>
                  <td className="px-4 py-3">Minimal</td>
                  <td className="px-4 py-3">Gas, mirrors, lenses</td>
                  <td className="px-4 py-3">Lamps, crystals</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Costs and specifications vary by manufacturer, power level, and configuration. 
            Values shown are typical ranges for industrial-grade systems. Consult equipment manufacturers for specific models.
          </p>
        </div>

        {/* Related Content */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/co2-vs-fiber-laser" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">CO2 vs Fiber Laser</h3>
              <p className="text-sm text-gray-600">In-depth comparison of laser technologies and applications</p>
            </Link>
            <Link href="/guides/selection" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Laser Selection Guide</h3>
              <p className="text-sm text-gray-600">Comprehensive guide to choosing laser equipment</p>
            </Link>
            <Link href="/equipment" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Equipment Database</h3>
              <p className="text-sm text-gray-600">Browse lasers by type, power, and specifications</p>
            </Link>
            <Link href="/comparison" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Compare Equipment</h3>
              <p className="text-sm text-gray-600">Side-by-side comparison of laser cutting machines</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> This wizard provides general recommendations based on typical applications and industry standards. 
            Actual laser selection depends on specific requirements including material grades, thickness ranges, production volumes, 
            quality standards, facility constraints, and budget. Always consult with laser equipment manufacturers and conduct 
            test cuts before making final equipment decisions. Consider total cost of ownership including maintenance, consumables, and energy costs.
          </p>
        </div>
      </div>
    </>
  );
}
