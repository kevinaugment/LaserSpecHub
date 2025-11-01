import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';
import KerfCalculatorForm from '@/components/calculators/kerf-calculator-form';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutting Kerf Calculator - Calculate Kerf Width & Compensation',
  description:
    'Professional laser cutting kerf width calculator. Estimate kerf based on laser power, material type, thickness, nozzle diameter, and cutting speed. Get compensation values and nesting optimization recommendations for fiber and CO2 laser cutting.',
  path: '/tools/kerf-calculator',
  keywords: [
    'laser kerf calculator',
    'kerf width calculator',
    'laser cutting kerf',
    'kerf compensation',
    'laser kerf width',
    'cutting kerf calculation',
    'material kerf compensation',
    'laser beam width',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Calculate Laser Cutting Kerf Width',
  description: 'Step-by-step guide to estimate kerf width and compensation for laser cutting applications',
  steps: [
    {
      name: 'Enter Laser Parameters',
      text: 'Input laser power (kW), material type (carbon steel, stainless steel, aluminum, etc.), material thickness (mm), nozzle diameter (mm), and cutting speed (mm/min)',
    },
    {
      name: 'Review Kerf Calculation',
      text: 'Get estimated kerf width, compensation values for CAD nesting, and recommendations based on your cutting parameters',
    },
    {
      name: 'Apply Compensation',
      text: 'Use the compensation values in your CAD software when designing parts to account for material removed during cutting',
    },
  ],
});

export default function Page() {
  return (
    <>
      <StructuredData data={howToSchema} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header - Compact */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Laser Cutting Kerf Calculator
          </h1>
          <p className="text-base text-gray-600">
            Calculate kerf width for laser cutting operations. Get compensation values for precise part dimensions and nesting optimization recommendations.
          </p>
        </div>

        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <KerfCalculatorForm />
        </div>

        {/* Technical Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Understanding Kerf</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>
                <strong>Kerf</strong> is the width of material removed during laser cutting. It represents the actual 
                cut width caused by the laser beam and material vaporization. Accurate kerf calculation is essential for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Dimensional Accuracy:</strong> Parts will be smaller by half the kerf width on each cut edge</li>
                <li><strong>Nesting Optimization:</strong> Proper spacing prevents parts from being undersized</li>
                <li><strong>CAD Compensation:</strong> Adjust part dimensions to account for material loss</li>
                <li><strong>Material Utilization:</strong> Optimize spacing between nested parts</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Factors Affecting Kerf Width</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>Kerf width depends on multiple factors:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Laser Power:</strong> Higher power increases kerf width</li>
                <li><strong>Material Type:</strong> Different materials have varying absorption and thermal properties</li>
                <li><strong>Material Thickness:</strong> Thicker materials typically produce wider kerf</li>
                <li><strong>Nozzle Diameter:</strong> Larger nozzles allow wider gas flow affecting kerf</li>
                <li><strong>Cutting Speed:</strong> Faster speeds may result in narrower kerf but require proper power</li>
                <li><strong>Focus Position:</strong> Optimal focus minimizes kerf width</li>
                <li><strong>Assist Gas:</strong> Gas type and pressure influence kerf characteristics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Typical Kerf Values */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Typical Kerf Width Ranges</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Material</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Thickness (mm)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Typical Kerf (mm)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Power Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Carbon Steel</td>
                  <td className="px-4 py-3">1-3mm</td>
                  <td className="px-4 py-3">0.1-0.15</td>
                  <td className="px-4 py-3">1-3 kW</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Carbon Steel</td>
                  <td className="px-4 py-3">3-6mm</td>
                  <td className="px-4 py-3">0.15-0.25</td>
                  <td className="px-4 py-3">2-6 kW</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Stainless Steel</td>
                  <td className="px-4 py-3">1-3mm</td>
                  <td className="px-4 py-3">0.12-0.18</td>
                  <td className="px-4 py-3">2-4 kW</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Aluminum</td>
                  <td className="px-4 py-3">1-3mm</td>
                  <td className="px-4 py-3">0.15-0.25</td>
                  <td className="px-4 py-3">3-6 kW</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Aluminum</td>
                  <td className="px-4 py-3">3-6mm</td>
                  <td className="px-4 py-3">0.25-0.35</td>
                  <td className="px-4 py-3">4-8 kW</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Kerf width varies based on specific equipment, beam quality, focus position, 
            and cutting parameters. These values are typical ranges for fiber laser cutting with optimal settings. 
            Always verify with test cuts for critical applications.
          </p>
        </div>

        {/* Related Content */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/nesting-optimization-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Nesting Optimization</h3>
              <p className="text-sm text-gray-600">Maximize material utilization with proper spacing and kerf compensation</p>
            </Link>
            <Link href="/guides/material-thickness-parameters" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Material Parameters</h3>
              <p className="text-sm text-gray-600">Reference guide for cutting parameters by material and thickness</p>
            </Link>
            <Link href="/tools/power-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Calculator</h3>
              <p className="text-sm text-gray-600">Calculate required laser power for your cutting application</p>
            </Link>
            <Link href="/equipment" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Equipment Database</h3>
              <p className="text-sm text-gray-600">Browse laser cutting machines with detailed specifications</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> This calculator provides estimates based on typical cutting conditions. 
            Actual kerf width should be verified with test cuts using your specific equipment and parameters. 
            Consult manufacturer technical manuals and perform on-site testing for critical applications requiring precise dimensional accuracy.
          </p>
        </div>
      </div>
    </>
  );
}
