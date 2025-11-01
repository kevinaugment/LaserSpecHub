import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata, generateHowToSchema } from '@/lib/utils/metadata';
import { WorkspaceMatcherForm } from '@/components/calculators/workspace-matcher-form';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Workspace Size Matcher - Find Optimal Cutting Table Dimensions',
  description:
    'Professional workspace size matcher for laser cutting. Match part dimensions with optimal cutting table size, calculate material utilization, nesting layouts, and sheet requirements. Maximize efficiency and minimize waste.',
  path: '/tools/workspace-matcher',
  keywords: [
    'workspace size calculator',
    'laser table size',
    'cutting bed dimensions',
    'work area matcher',
    'nesting calculator',
    'material utilization calculator',
    'sheet layout optimizer',
    'laser cutting capacity',
  ],
});

const howToSchema = generateHowToSchema({
  name: 'How to Match Optimal Workspace Size for Laser Cutting',
  description: 'Find the best cutting table size based on part dimensions, quantity, and material utilization goals',
  steps: [
    {
      name: 'Enter Part Specifications',
      text: 'Input part length, width, production quantity, and minimum spacing between parts for safe cutting',
    },
    {
      name: 'Configure Nesting Options',
      text: 'Select unit system (metric or imperial) and enable part rotation for optimized nesting layouts',
    },
    {
      name: 'Review Workspace Recommendations',
      text: 'Get ranked workspace sizes with utilization rates, parts per sheet, layout visualizations, and material requirements',
    },
  ],
});

export default function WorkspaceMatcherPage() {
  return (
    <>
      <StructuredData data={howToSchema} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header - Compact */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Laser Workspace Size Matcher
          </h1>
          <p className="text-base text-gray-600">
            Match your part dimensions with optimal laser cutting table size. Calculate material utilization, nesting layouts, and sheet requirements for maximum efficiency.
          </p>
        </div>
        
        {/* Calculator - First Screen */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 md:p-8 mb-8">
          <WorkspaceMatcherForm />
        </div>

        {/* Technical Information */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Workspace Selection Factors</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>Choosing the right workspace size impacts:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Material Utilization:</strong> Larger tables enable better nesting but may waste material for small parts</li>
                <li><strong>Production Efficiency:</strong> Optimal size reduces sheet changes and handling time</li>
                <li><strong>Equipment Cost:</strong> Larger work areas increase machine price and facility requirements</li>
                <li><strong>Flexibility:</strong> Standard sizes (4x8', 5x10', 6x12') offer better material availability</li>
                <li><strong>Batch Size:</strong> Match workspace to typical production quantities</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Nesting Optimization</h2>
            <div className="space-y-3 text-gray-700 text-sm">
              <p>Maximize material utilization through:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong>Part Rotation:</strong> Allow 90° rotation for better fit (typically +10-20% utilization)</li>
                <li><strong>Spacing:</strong> Minimum 2-5mm between parts for safe cutting and part separation</li>
                <li><strong>Common Cutting:</strong> Share cut lines between adjacent parts where possible</li>
                <li><strong>Grain Direction:</strong> Consider material grain for structural parts</li>
                <li><strong>Remnant Usage:</strong> Plan for using leftover material on subsequent jobs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Standard Workspace Sizes */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Standard Laser Cutting Table Sizes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Workspace Size</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Metric (mm)</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Typical Applications</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Material Compatibility</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3">Small (3x5')</td>
                  <td className="px-4 py-3">1000 × 1500</td>
                  <td className="px-4 py-3">Prototyping, small parts, jewelry</td>
                  <td className="px-4 py-3">Small sheets, remnants</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Medium (4x8')</td>
                  <td className="px-4 py-3">1300 × 2500</td>
                  <td className="px-4 py-3">General fabrication, signage</td>
                  <td className="px-4 py-3">Standard 4×8' sheets</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Large (5x10')</td>
                  <td className="px-4 py-3">1500 × 3000</td>
                  <td className="px-4 py-3">Industrial production, large parts</td>
                  <td className="px-4 py-3">5×10' sheets, full utilization</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3">Extra Large (6x12')</td>
                  <td className="px-4 py-3">2000 × 4000</td>
                  <td className="px-4 py-3">Heavy industry, large assemblies</td>
                  <td className="px-4 py-3">Oversized sheets, structural</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Custom</td>
                  <td className="px-4 py-3">Varies</td>
                  <td className="px-4 py-3">Specialized applications</td>
                  <td className="px-4 py-3">Non-standard materials</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Note:</strong> Workspace sizes shown are cutting area dimensions. Actual machine footprint is larger. 
            Standard sheet sizes vary by region (US: 4×8', 5×10'; Europe: 1250×2500mm, 1500×3000mm). 
            Choose workspace matching your typical material suppliers for best utilization.
          </p>
        </div>

        {/* Utilization Guidelines */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Material Utilization Guidelines</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600 mb-2">75-90%</div>
              <h3 className="font-semibold text-gray-900 mb-2">Excellent Utilization</h3>
              <p className="text-gray-700">Optimal nesting with minimal waste. Achievable with part rotation and careful planning.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-600 mb-2">60-75%</div>
              <h3 className="font-semibold text-gray-900 mb-2">Good Utilization</h3>
              <p className="text-gray-700">Acceptable for most applications. Consider rotation or workspace size adjustment.</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600 mb-2">&lt;60%</div>
              <h3 className="font-semibold text-gray-900 mb-2">Poor Utilization</h3>
              <p className="text-gray-700">Significant waste. Review workspace size, part orientation, or batch quantities.</p>
            </div>
          </div>
        </div>

        {/* Related Content */}
        <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/guides/nesting-optimization-guide" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Nesting Optimization</h3>
              <p className="text-sm text-gray-600">Advanced techniques for maximizing material utilization</p>
            </Link>
            <Link href="/guides/work-area-size-comparison" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Work Area Comparison</h3>
              <p className="text-sm text-gray-600">Compare different workspace sizes and their applications</p>
            </Link>
            <Link href="/equipment" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Equipment Database</h3>
              <p className="text-sm text-gray-600">Browse lasers by workspace size and specifications</p>
            </Link>
            <Link href="/tools/cost-estimator" className="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Cost Estimator</h3>
              <p className="text-sm text-gray-600">Calculate material costs and utilization impact</p>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-sm text-yellow-800">
            <strong>Important:</strong> Workspace matching calculations assume rectangular nesting without advanced optimization algorithms. 
            Actual utilization may vary based on part complexity, nesting software capabilities, and production requirements. 
            Professional nesting software can achieve 5-15% better utilization through advanced algorithms. 
            Always verify layouts with actual nesting software before production.
          </p>
        </div>
      </div>
    </>
  );
}
