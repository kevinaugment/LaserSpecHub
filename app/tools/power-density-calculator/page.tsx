import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';
import PowerDensityCalculatorForm from '@/components/calculators/power-density-calculator-form';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Power Density Calculator - Calculate Intensity for Cutting & Welding',
  description:
    'Professional laser power density calculator. Calculate power density (W/mm²) based on laser power and focused spot diameter. Get process recommendations for cutting, welding, marking, and depth of focus calculations for optimal beam positioning.',
  path: '/tools/power-density-calculator',
  keywords: [
    'laser power density calculator',
    'power density calculation',
    'laser intensity calculator',
    'spot size calculator',
    'beam power density',
    'laser cutting intensity',
    'welding power density',
    'focal spot diameter',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Calculate Laser Power Density',
  description: 'Step-by-step guide to calculate power density for laser cutting, welding, and marking applications',
  steps: [
    {
      name: 'Enter Laser Parameters',
      text: 'Input laser power (kW or W), focused spot diameter (mm), and beam quality factor M² if known',
    },
    {
      name: 'Review Power Density',
      text: 'Get calculated power density in W/mm² and MW/cm², along with process suitability recommendations',
    },
    {
      name: 'Apply to Process',
      text: 'Use power density values to optimize cutting speed, weld penetration, or marking quality based on material and application',
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
            Laser Power Density Calculator
          </h1>
          <p className="text-base text-gray-600">
            Calculate laser power density for cutting, welding, and marking applications. Determine optimal intensity based on focused spot size and laser power.
          </p>
        </div>

        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <PowerDensityCalculatorForm />
        </div>

        {/* Technical Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Understanding Power Density</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>
                <strong>Power Density</strong> (also called intensity or irradiance) is the laser power concentrated 
                per unit area at the focal point. It is calculated as:
              </p>
              <div className="bg-white p-3 rounded border border-gray-200 font-mono text-center">
                Power Density = Power / (π × (Diameter/2)²)
              </div>
              <p>Higher power density enables:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Faster Cutting:</strong> More energy per area increases cutting speed</li>
                <li><strong>Deeper Penetration:</strong> Essential for welding thick materials</li>
                <li><strong>Cleaner Cuts:</strong> Sufficient energy for complete material vaporization</li>
                <li><strong>Smaller HAZ:</strong> Concentrated energy minimizes heat-affected zone</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Factors Affecting Power Density</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Laser Power:</strong> Higher power increases density proportionally</li>
                <li><strong>Focal Spot Diameter:</strong> Smaller spots dramatically increase density (inverse square relationship)</li>
                <li><strong>Beam Quality (M²):</strong> Lower M² values enable smaller focal spots and higher density</li>
                <li><strong>Focal Length:</strong> Shorter focal length lenses produce smaller spots</li>
                <li><strong>Wavelength:</strong> Shorter wavelengths can be focused to smaller spots</li>
                <li><strong>Focus Position:</strong> Maximum density occurs at focal point</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">
                <strong>Note:</strong> Typical fiber laser (M²=1.05-1.2) can achieve spot diameters of 0.02-0.15mm, 
                while CO2 lasers (M²=1.1-1.3) typically achieve 0.15-0.3mm spots.
              </p>
            </div>
          </div>
        </div>

        {/* Process Guidelines */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Power Density Process Guidelines</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Application</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Power Density Range</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Typical Spot Size</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Process Characteristics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Laser Cutting (Thin)</td>
                  <td className="px-4 py-3">1-5 MW/cm²</td>
                  <td className="px-4 py-3">0.05-0.15 mm</td>
                  <td className="px-4 py-3">High speed, clean edges, minimal HAZ</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Laser Cutting (Thick)</td>
                  <td className="px-4 py-3">0.5-2 MW/cm²</td>
                  <td className="px-4 py-3">0.1-0.25 mm</td>
                  <td className="px-4 py-3">Deep penetration, slower speed</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Laser Welding (Deep)</td>
                  <td className="px-4 py-3">1-10 MW/cm²</td>
                  <td className="px-4 py-3">0.2-0.6 mm</td>
                  <td className="px-4 py-3">Keyhole mode, deep penetration</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Laser Welding (Conduction)</td>
                  <td className="px-4 py-3">0.1-0.5 MW/cm²</td>
                  <td className="px-4 py-3">0.5-2.0 mm</td>
                  <td className="px-4 py-3">Shallow weld, minimal spatter</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Laser Marking</td>
                  <td className="px-4 py-3">0.01-0.5 MW/cm²</td>
                  <td className="px-4 py-3">0.05-0.2 mm</td>
                  <td className="px-4 py-3">Surface modification, no cutting</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Laser Engraving</td>
                  <td className="px-4 py-3">0.5-2 MW/cm²</td>
                  <td className="px-4 py-3">0.05-0.15 mm</td>
                  <td className="px-4 py-3">Material removal, depth control</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Power density requirements vary by material. Metals typically require higher densities 
            than non-metals. Values shown are typical ranges for steel processing. Always verify with test samples.
          </p>
        </div>

        {/* Related Content */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/beam-quality-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Beam Quality Guide</h3>
              <p className="text-sm text-gray-600">Understanding M² factor and its impact on focal spot size</p>
            </Link>
            <Link href="/guides/focus-position-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Focus Position Guide</h3>
              <p className="text-sm text-gray-600">Optimizing focus position for different applications</p>
            </Link>
            <Link href="/tools/power-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Power Calculator</h3>
              <p className="text-sm text-gray-600">Calculate required laser power for your application</p>
            </Link>
            <Link href="/tools/kerf-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Kerf Calculator</h3>
              <p className="text-sm text-gray-600">Calculate kerf width based on power and parameters</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> Power density calculations assume Gaussian beam profile and measurements at focal point. 
            Actual values depend on beam quality, optical system, and focus position. Use calculated values as guidelines 
            and verify with test cuts or welds for critical applications. Consult equipment manufacturer specifications for accurate focal spot diameter.
          </p>
        </div>
      </div>
    </>
  );
}
