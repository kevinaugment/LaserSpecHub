import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';
import CostEstimatorForm from '@/components/calculators/cost-estimator-form';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutting Cost Estimator - Calculate Operating Costs Per Part',
  description:
    'Professional laser cutting cost calculator. Estimate material, electricity, assist gas, equipment depreciation, and labor costs per part or job. Optimize pricing, quotations, and profitability for laser cutting operations.',
  path: '/tools/cost-estimator',
  keywords: [
    'laser cutting cost calculator',
    'laser cutting cost estimator',
    'cutting cost per part',
    'laser operating cost',
    'laser cutting pricing',
    'manufacturing cost calculator',
    'laser cutting quotation',
    'production cost analysis',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Calculate Laser Cutting Costs',
  description: 'Step-by-step guide to estimate complete laser cutting costs including all operating expenses',
  steps: [
    {
      name: 'Enter Job Parameters',
      text: 'Input cutting length, material type and thickness, laser power, cutting speed, and production quantity',
    },
    {
      name: 'Specify Operating Costs',
      text: 'Enter electricity rate, assist gas type and cost, equipment cost and lifespan, labor rate, and operating hours',
    },
    {
      name: 'Review Cost Breakdown',
      text: 'Get detailed cost breakdown per part including material, electricity, gas, depreciation, labor, and total cost with profit margin analysis',
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
            Laser Cutting Cost Estimator
          </h1>
          <p className="text-base text-gray-600">
            Calculate comprehensive operating costs for laser cutting jobs. Get detailed breakdown of material, energy, consumables, depreciation, and labor costs for accurate quotations.
          </p>
        </div>

        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <CostEstimatorForm />
        </div>

        {/* Cost Components */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Direct Costs</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div>
                <strong>Material Cost:</strong> Raw material price based on weight and material type
              </div>
              <div>
                <strong>Assist Gas:</strong> Oxygen, nitrogen, or air consumption during cutting
              </div>
              <div>
                <strong>Electricity:</strong> Laser power consumption and auxiliary equipment
              </div>
              <div>
                <strong>Consumables:</strong> Nozzles, lenses, protective windows
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Indirect Costs</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div>
                <strong>Equipment Depreciation:</strong> Machine cost amortized over lifespan
              </div>
              <div>
                <strong>Labor:</strong> Operator wages and benefits
              </div>
              <div>
                <strong>Maintenance:</strong> Scheduled and preventive maintenance
              </div>
              <div>
                <strong>Facility:</strong> Rent, utilities, insurance (overhead)
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Cost Optimization</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <div>
                <strong>Nesting:</strong> Optimize material utilization to reduce waste
              </div>
              <div>
                <strong>Parameters:</strong> Balance speed and quality for efficiency
              </div>
              <div>
                <strong>Gas Selection:</strong> Choose appropriate gas for material
              </div>
              <div>
                <strong>Batch Size:</strong> Increase production volume to reduce per-part cost
              </div>
            </div>
          </div>
        </div>

        {/* Typical Cost Breakdown */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Typical Cost Distribution</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Cost Category</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Percentage of Total</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Optimization Potential</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Key Factors</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Material</td>
                  <td className="px-4 py-3">40-60%</td>
                  <td className="px-4 py-3">High (nesting)</td>
                  <td className="px-4 py-3">Material price, utilization rate, scrap</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Electricity</td>
                  <td className="px-4 py-3">5-10%</td>
                  <td className="px-4 py-3">Low</td>
                  <td className="px-4 py-3">Laser power, cutting time, efficiency</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Assist Gas</td>
                  <td className="px-4 py-3">10-20%</td>
                  <td className="px-4 py-3">Medium</td>
                  <td className="px-4 py-3">Gas type (N2 vs O2), pressure, flow rate</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Depreciation</td>
                  <td className="px-4 py-3">10-15%</td>
                  <td className="px-4 py-3">Low</td>
                  <td className="px-4 py-3">Equipment cost, utilization, lifespan</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Labor</td>
                  <td className="px-4 py-3">10-20%</td>
                  <td className="px-4 py-3">Medium</td>
                  <td className="px-4 py-3">Automation level, batch size, efficiency</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Consumables</td>
                  <td className="px-4 py-3">3-8%</td>
                  <td className="px-4 py-3">Medium</td>
                  <td className="px-4 py-3">Nozzle life, lens quality, maintenance</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Percentages vary significantly by material type, thickness, and production volume. 
            Material costs dominate for expensive materials (stainless steel, aluminum), while labor and depreciation 
            become more significant for thin materials with short cutting times.
          </p>
        </div>

        {/* Related Content */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/nesting-optimization-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Nesting Optimization</h3>
              <p className="text-sm text-gray-600">Maximize material utilization and reduce waste costs</p>
            </Link>
            <Link href="/guides/process-optimization-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Process Optimization</h3>
              <p className="text-sm text-gray-600">Improve efficiency and reduce operating costs</p>
            </Link>
            <Link href="/tools/nozzle-life-calculator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Nozzle Life Calculator</h3>
              <p className="text-sm text-gray-600">Predict consumable costs and replacement cycles</p>
            </Link>
            <Link href="/guides/assist-gas-chart" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Assist Gas Guide</h3>
              <p className="text-sm text-gray-600">Select cost-effective gas for your application</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> Cost estimates are based on typical operating conditions and industry averages. 
            Actual costs vary by region, material suppliers, utility rates, equipment efficiency, and operational practices. 
            Use these calculations as guidelines for quotations and budgeting. Always verify with actual operational data 
            and adjust for your specific circumstances, overhead costs, and desired profit margins.
          </p>
        </div>
      </div>
    </>
  );
}








