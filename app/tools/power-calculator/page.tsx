import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { PowerCalculatorForm } from '@/components/calculators/power-calculator-form';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Power Calculator - Calculate Required Laser Power for Cutting',
  description:
    'Professional laser power calculator for fiber and CO2 laser cutting. Calculate required laser power based on material type, thickness, cutting speed, and quality requirements. Get accurate recommendations for metal and non-metal cutting applications.',
  path: '/tools/power-calculator',
  keywords: [
    'laser power calculator',
    'laser cutting power calculator',
    'fiber laser power calculator',
    'CO2 laser power calculator',
    'laser wattage calculator',
    'cutting power requirements',
    'material cutting power',
    'laser power formula',
    'laser cutting parameters',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Calculate Required Laser Power for Cutting',
  description: 'Step-by-step guide to calculate laser power requirements for metal and non-metal cutting applications',
  steps: [
    {
      name: 'Select Material Type',
      text: 'Choose from metal materials (steel, stainless steel, aluminum, copper, brass, titanium) or non-metal materials (acrylic, wood, MDF, plywood)',
    },
    {
      name: 'Enter Cutting Parameters',
      text: 'Input material thickness, desired cutting speed in m/min, and select cutting quality level (rough, standard, precision, or mirror finish)',
    },
    {
      name: 'Review Power Recommendations',
      text: 'Get recommended laser power range, suitable laser type (fiber or CO2), and matching equipment recommendations from our database',
    },
  ],
});

export default function PowerCalculatorPage() {
  return (
    <>
      <StructuredData data={howToSchema} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header - Compact */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Laser Power Calculator
          </h1>
          <p className="text-base text-gray-600">
            Calculate required laser power for fiber and CO2 laser cutting based on material properties and cutting parameters.
          </p>
        </div>
        
        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <PowerCalculatorForm />
        </div>

        {/* Technical Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Calculation Methodology</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>
                Laser power requirements are calculated using material-specific properties including density, 
                thermal conductivity, melting point, and vaporization energy. The formula accounts for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Material Thickness:</strong> Directly proportional to power requirements</li>
                <li><strong>Cutting Speed:</strong> Higher speeds require more power</li>
                <li><strong>Material Absorption:</strong> Different materials absorb laser energy differently</li>
                <li><strong>Assist Gas Efficiency:</strong> Oxygen or nitrogen assist affects power needs</li>
                <li><strong>Cut Quality Factor:</strong> Precision cuts require 20-80% additional power</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Laser Type Selection</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p><strong>Fiber Lasers (1-30kW):</strong> Ideal for metals including mild steel, stainless steel, aluminum, 
              copper, brass, and titanium. Wavelength 1070nm provides excellent metal absorption.</p>
              <p><strong>CO2 Lasers (0.1-20kW):</strong> Best for non-metal materials like wood, acrylic, MDF, and plastics. 
              Wavelength 10.6μm offers superior absorption in organic materials.</p>
              <p className="text-xs text-gray-600 mt-4">
                <strong>Note:</strong> Results are estimates. Actual power requirements vary based on equipment, 
                beam quality, focus position, assist gas type, and environmental conditions. Consult manufacturers for specific applications.
              </p>
            </div>
          </div>
        </div>

        {/* Reference Data */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Typical Power Requirements</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Material</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Thickness (mm)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Typical Power Range</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Laser Type</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Mild Steel</td>
                  <td className="px-4 py-3">3-6mm</td>
                  <td className="px-4 py-3">1-3 kW</td>
                  <td className="px-4 py-3">Fiber</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Stainless Steel</td>
                  <td className="px-4 py-3">3-6mm</td>
                  <td className="px-4 py-3">2-4 kW</td>
                  <td className="px-4 py-3">Fiber</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Aluminum</td>
                  <td className="px-4 py-3">3-6mm</td>
                  <td className="px-4 py-3">3-6 kW</td>
                  <td className="px-4 py-3">Fiber</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Acrylic</td>
                  <td className="px-4 py-3">3-10mm</td>
                  <td className="px-4 py-3">40-150W</td>
                  <td className="px-4 py-3">CO2</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Wood</td>
                  <td className="px-4 py-3">6-12mm</td>
                  <td className="px-4 py-3">60-200W</td>
                  <td className="px-4 py-3">CO2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Related Content */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/power-selection-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Selection Guide</h3>
              <p className="text-sm text-gray-600">Comprehensive guide to choosing the right laser power for your application</p>
            </Link>
            <Link href="/guides/co2-vs-fiber-laser" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">CO2 vs Fiber Laser</h3>
              <p className="text-sm text-gray-600">Detailed comparison of laser technologies and applications</p>
            </Link>
            <Link href="/equipment" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Equipment Database</h3>
              <p className="text-sm text-gray-600">Browse laser cutting machines with detailed specifications</p>
            </Link>
            <Link href="/comparison" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Compare Equipment</h3>
              <p className="text-sm text-gray-600">Compare multiple laser cutting machines side-by-side</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
