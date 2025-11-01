import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';
import NozzleLifeCalculatorForm from '@/components/calculators/nozzle-life-calculator-form';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutting Nozzle Life Calculator - Predict Replacement Cycle',
  description:
    'Professional laser cutting nozzle life calculator. Predict nozzle service life, replacement cycles, and maintenance costs based on nozzle material, cutting parameters, power, and assist gas. Optimize maintenance planning and reduce downtime.',
  path: '/tools/nozzle-life-calculator',
  keywords: [
    'nozzle life calculator',
    'laser nozzle lifespan',
    'nozzle replacement cycle',
    'cutting nozzle maintenance',
    'nozzle wear calculator',
    'laser consumables cost',
    'nozzle service life',
    'cutting head nozzle',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Calculate Laser Cutting Nozzle Service Life',
  description: 'Step-by-step guide to predict nozzle lifespan and optimize replacement scheduling',
  steps: [
    {
      name: 'Enter Nozzle Specifications',
      text: 'Input nozzle material (copper, chrome-plated copper, or alloy), nozzle type (single layer or double layer), and diameter',
    },
    {
      name: 'Input Operating Conditions',
      text: 'Enter laser power, cutting material type, material thickness, assist gas type, and daily operating hours',
    },
    {
      name: 'Review Life Prediction',
      text: 'Get estimated nozzle service life in hours, replacement cycle in days, monthly costs, and maintenance recommendations',
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
            Laser Cutting Nozzle Life Calculator
          </h1>
          <p className="text-base text-gray-600">
            Predict nozzle service life and replacement cycles based on material, cutting conditions, and operating intensity. Optimize maintenance planning and control consumable costs.
          </p>
        </div>

        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <NozzleLifeCalculatorForm />
        </div>

        {/* Technical Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nozzle Material Comparison</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <div>
                <h3 className="font-semibold mb-1">Copper Nozzles</h3>
                <p>• Excellent thermal conductivity (400 W/m·K)</p>
                <p>• Base service life: 80-120 hours</p>
                <p>• Cost-effective for standard applications</p>
                <p>• Suitable for: Carbon steel, stainless steel (thin)</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Chrome-Plated Copper Nozzles</h3>
                <p>• Enhanced wear and corrosion resistance</p>
                <p>• Service life: 120-180 hours (50% longer)</p>
                <p>• Better for high-intensity production</p>
                <p>• Suitable for: All materials, high-power cutting</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">Alloy Nozzles (Brass/Bronze)</h3>
                <p>• Maximum durability and heat resistance</p>
                <p>• Service life: 180-240 hours</p>
                <p>• Higher initial cost, lower long-term cost</p>
                <p>• Suitable for: Thick plate, continuous operation</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Main Failure Modes</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <div>
                <h3 className="font-semibold mb-1">1. Collision Damage (50%)</h3>
                <p>• Nozzle strikes workpiece or cutting table</p>
                <p>• Causes deformation and misalignment</p>
                <p>• Prevention: Capacitive height sensing, proper programming</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">2. Spatter Adhesion (30%)</h3>
                <p>• Molten metal adheres to nozzle bore</p>
                <p>• Reduces gas flow and cutting quality</p>
                <p>• Prevention: Proper gas pressure, regular cleaning</p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">3. Thermal Wear (20%)</h3>
                <p>• High-temperature oxidation and erosion</p>
                <p>• Bore diameter increases over time</p>
                <p>• Prevention: Optimal power settings, cooling</p>
              </div>
            </div>
          </div>
        </div>

        {/* Typical Nozzle Life */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Typical Nozzle Service Life</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Nozzle Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Material</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Typical Life (hours)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Cost Range</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Best Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Single Layer</td>
                  <td className="px-4 py-3">Copper</td>
                  <td className="px-4 py-3">80-120</td>
                  <td className="px-4 py-3">$15-30</td>
                  <td className="px-4 py-3">Thin materials, low power</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Single Layer</td>
                  <td className="px-4 py-3">Chrome-Plated</td>
                  <td className="px-4 py-3">120-180</td>
                  <td className="px-4 py-3">$25-50</td>
                  <td className="px-4 py-3">General purpose, high power</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Double Layer</td>
                  <td className="px-4 py-3">Copper</td>
                  <td className="px-4 py-3">100-150</td>
                  <td className="px-4 py-3">$30-60</td>
                  <td className="px-4 py-3">Thick materials, oxygen cutting</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Double Layer</td>
                  <td className="px-4 py-3">Chrome-Plated</td>
                  <td className="px-4 py-3">150-220</td>
                  <td className="px-4 py-3">$50-100</td>
                  <td className="px-4 py-3">Heavy-duty, continuous operation</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Single/Double</td>
                  <td className="px-4 py-3">Alloy (Brass)</td>
                  <td className="px-4 py-3">180-240</td>
                  <td className="px-4 py-3">$80-150</td>
                  <td className="px-4 py-3">Maximum durability required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Service life varies significantly based on operating conditions, maintenance practices, 
            and operator skill. Values shown are typical for well-maintained systems with proper collision avoidance. 
            Actual life may be 50% lower with poor practices or 30% higher with excellent maintenance.
          </p>
        </div>

        {/* Best Practices */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Best Practices to Extend Nozzle Life</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-sm">
              <h3 className="font-semibold text-gray-900">Daily Maintenance</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Inspect nozzle bore for spatter buildup</li>
                <li>✓ Clean with appropriate solvent or ultrasonic cleaner</li>
                <li>✓ Check nozzle concentricity with laser beam</li>
                <li>✓ Verify nozzle seating and O-ring condition</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm">
              <h3 className="font-semibold text-gray-900">Operational Tips</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Use capacitive height sensing for collision avoidance</li>
                <li>✓ Set appropriate standoff distance (0.5-1.5mm)</li>
                <li>✓ Optimize gas pressure for material and thickness</li>
                <li>✓ Replace when cutting quality degrades</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm">
              <h3 className="font-semibold text-gray-900">Gas Selection Impact</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Nitrogen cutting: 30-50% longer nozzle life</li>
                <li>✓ Oxygen cutting: Higher temperatures, faster wear</li>
                <li>✓ Air cutting: Moderate wear, cost-effective</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm">
              <h3 className="font-semibold text-gray-900">Inventory Management</h3>
              <ul className="space-y-1 text-gray-700">
                <li>✓ Keep 2-3 spare nozzles per diameter</li>
                <li>✓ Stock multiple diameters for different applications</li>
                <li>✓ Track replacement frequency for budgeting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/nozzle-selection-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Nozzle Selection Guide</h3>
              <p className="text-sm text-gray-600">Choose the right nozzle type and diameter for your application</p>
            </Link>
            <Link href="/guides/maintenance-schedule" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Maintenance Schedule</h3>
              <p className="text-sm text-gray-600">Complete laser system maintenance planning and schedules</p>
            </Link>
            <Link href="/tools/cost-estimator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cost Estimator</h3>
              <p className="text-sm text-gray-600">Calculate complete operating costs including consumables</p>
            </Link>
            <Link href="/guides/assist-gas-chart" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Assist Gas Guide</h3>
              <p className="text-sm text-gray-600">Select optimal assist gas for different materials</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Data Sources:</strong> Calculations based on technical specifications from leading nozzle manufacturers 
            including Precitec, Raytools, WSX, and industry field data. Actual nozzle life depends on equipment maintenance, 
            operator skill, cutting parameters, and environmental conditions. Results are estimates for planning purposes. 
            Always track actual replacement cycles for your specific operations.
          </p>
        </div>
      </div>
    </>
  );
}