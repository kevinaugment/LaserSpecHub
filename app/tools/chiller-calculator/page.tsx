import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';
import ChillerCalculatorForm from '@/components/calculators/chiller-calculator-form';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Chiller Capacity Calculator - Calculate Cooling Requirements',
  description:
    'Professional laser chiller capacity calculator for fiber and CO2 lasers. Calculate required cooling capacity (kW), water flow rate (L/min), and chiller sizing based on laser power, type, ambient temperature, and duty cycle.',
  path: '/tools/chiller-calculator',
  keywords: [
    'laser chiller calculator',
    'chiller capacity calculator',
    'laser cooling calculator',
    'chiller sizing calculator',
    'laser water chiller',
    'cooling capacity calculation',
    'laser chiller requirements',
    'water flow rate calculator',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Calculate Laser Chiller Cooling Requirements',
  description: 'Step-by-step guide to determine chiller capacity and water flow requirements for laser cutting systems',
  steps: [
    {
      name: 'Enter Laser Parameters',
      text: 'Input laser power (kW), laser type (fiber or CO2), ambient temperature, target water temperature, and operating duty cycle',
    },
    {
      name: 'Review Cooling Requirements',
      text: 'Get required cooling capacity in kW and kcal/h, recommended water flow rate in L/min, and chiller sizing recommendations',
    },
    {
      name: 'Select Chiller System',
      text: 'Use the calculated values to select an appropriately sized chiller system with adequate cooling capacity and flow rate',
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
            Laser Chiller Capacity Calculator
          </h1>
          <p className="text-base text-gray-600">
            Calculate required cooling capacity and water flow rate for fiber and CO2 laser systems. Ensure optimal laser performance and longevity with proper chiller sizing.
          </p>
        </div>

        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <ChillerCalculatorForm />
        </div>

        {/* Technical Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Why Chiller Sizing Matters</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>
                Proper chiller sizing is critical for laser system performance and reliability. Undersized chillers can lead to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Temperature Fluctuations:</strong> Inconsistent laser output and beam quality</li>
                <li><strong>Thermal Stress:</strong> Reduced component lifespan and increased maintenance</li>
                <li><strong>Power Drift:</strong> Laser power variations affecting cutting quality</li>
                <li><strong>System Shutdowns:</strong> Overheating protection activation</li>
              </ul>
              <p className="mt-3">
                Properly sized chillers maintain stable operating temperatures, ensuring consistent laser performance and maximizing equipment lifespan.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Cooling Requirements</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>Laser cooling requirements depend on several factors:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Laser Power:</strong> Higher power lasers generate more heat requiring greater cooling capacity</li>
                <li><strong>Laser Type:</strong> Fiber lasers typically require 1.2-1.5x laser power in cooling capacity; CO2 lasers require 0.8-1.2x</li>
                <li><strong>Efficiency:</strong> Laser efficiency (typically 30-40% for fiber, 10-15% for CO2) determines heat generation</li>
                <li><strong>Ambient Temperature:</strong> Higher ambient temperatures increase cooling load</li>
                <li><strong>Duty Cycle:</strong> Continuous operation requires higher capacity than intermittent use</li>
                <li><strong>Water Temperature:</strong> Lower target temperatures require higher capacity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Typical Chiller Sizing */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Typical Chiller Sizing Guidelines</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Laser Power</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Laser Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Cooling Capacity</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Water Flow Rate</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Temperature Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">1-2 kW</td>
                  <td className="px-4 py-3">Fiber</td>
                  <td className="px-4 py-3">1.5-3 kW</td>
                  <td className="px-4 py-3">8-15 L/min</td>
                  <td className="px-4 py-3">20-25°C</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">3-6 kW</td>
                  <td className="px-4 py-3">Fiber</td>
                  <td className="px-4 py-3">4-9 kW</td>
                  <td className="px-4 py-3">15-30 L/min</td>
                  <td className="px-4 py-3">20-25°C</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">6-12 kW</td>
                  <td className="px-4 py-3">Fiber</td>
                  <td className="px-4 py-3">9-18 kW</td>
                  <td className="px-4 py-3">30-60 L/min</td>
                  <td className="px-4 py-3">20-25°C</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">2-4 kW</td>
                  <td className="px-4 py-3">CO2</td>
                  <td className="px-4 py-3">2-5 kW</td>
                  <td className="px-4 py-3">10-20 L/min</td>
                  <td className="px-4 py-3">18-22°C</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">4-10 kW</td>
                  <td className="px-4 py-3">CO2</td>
                  <td className="px-4 py-3">5-12 kW</td>
                  <td className="px-4 py-3">20-50 L/min</td>
                  <td className="px-4 py-3">18-22°C</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Values shown are typical for standard operating conditions (ambient 25°C, duty cycle 80%). 
            Actual requirements vary based on specific equipment, operating environment, and application demands. 
            Always consult laser and chiller manufacturer specifications.
          </p>
        </div>

        {/* Related Content */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/tools/power-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Calculator</h3>
              <p className="text-sm text-gray-600">Calculate required laser power for your cutting application</p>
            </Link>
            <Link href="/tools/power-density-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Density</h3>
              <p className="text-sm text-gray-600">Calculate laser power density for optimal cutting performance</p>
            </Link>
            <Link href="/guides/safety-operations" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Safety Operations</h3>
              <p className="text-sm text-gray-600">Laser safety guidelines and operational best practices</p>
            </Link>
            <Link href="/guides/installation-requirements" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Installation Requirements</h3>
              <p className="text-sm text-gray-600">Cooling system installation and requirements</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> This calculator provides estimates based on typical laser efficiency and operating conditions. 
            Actual cooling requirements depend on specific equipment models, beam quality, operating parameters, and environmental conditions. 
            Always consult laser and chiller manufacturer specifications for accurate sizing. Consider adding 20-30% capacity margin for optimal performance and longevity.
          </p>
        </div>
      </div>
    </>
  );
}
