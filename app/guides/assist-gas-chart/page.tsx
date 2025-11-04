import { Metadata } from 'next';
import {
  ASSIST_GAS_DATA,
  ASSIST_GAS_LAST_UPDATE,
  DATA_DISCLAIMER
} from '@/lib/data/cheatsheets/assist-gas-data';
import { AssistGasCards } from '@/components/cheatsheets/assist-gas-cards';
import { MaterialGasMatrix } from '@/components/cheatsheets/material-gas-matrix';
import { PressureThicknessChart } from '@/components/cheatsheets/pressure-thickness-chart';
import { GasDecisionTree } from '@/components/cheatsheets/gas-decision-tree';
import { GasFlowDiagram } from '@/components/cheatsheets/gas-flow-diagram';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Assist Gas Selection Chart - Parameters & Cost Comparison | LaserSpecHub',
  description: 'Complete guide to assist gas selection for laser cutting. Compare oxygen, nitrogen, compressed air, and argon with detailed parameters, costs, and applications for different materials.',
  keywords: [
    'laser assist gas',
    'cutting gas selection',
    'oxygen vs nitrogen laser',
    'assist gas parameters',
    'laser gas cost',
    'nitrogen cutting',
    'oxygen cutting',
    'compressed air laser'
  ],
  openGraph: {
    title: 'Laser Assist Gas Selection Chart | LaserSpecHub',
    description: 'Choose the right assist gas for your laser cutting application with detailed parameters and cost analysis',
    type: 'article',
  },
};

export default function AssistGasChartPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Assist Gas Selection and Parameter Chart',
    description: 'Comprehensive guide to selecting and using assist gases for laser cutting operations',
    author: {
      '@type': 'Organization',
      name: 'LaserSpecHub',
    },
    datePublished: ASSIST_GAS_LAST_UPDATE,
    dateModified: ASSIST_GAS_LAST_UPDATE,
  };

  return (
    <>
      <StructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Laser Assist Gas Selection Chart
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Choose the optimal assist gas for your laser cutting application. This guide covers parameters, 
              costs, edge quality, and safety considerations for oxygen, nitrogen, compressed air, and argon.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                {ASSIST_GAS_DATA.length} Gas Types
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Cost Analysis
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Safety Guidelines
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Updated {ASSIST_GAS_LAST_UPDATE}
              </span>
            </div>
          </div>

          {/* Gas Selection Decision Tree */}
          <div className="mb-8">
            <GasDecisionTree />
          </div>

          {/* Gas Flow Visualization */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🌊 Gas Flow Dynamics Visualization
            </h2>
            <p className="text-gray-600 mb-4">
              Understand how assist gas interacts with the laser beam and material during cutting.
            </p>
            <GasFlowDiagram />
          </div>

          {/* Why Assist Gas Matters */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🔬 Why Assist Gas Matters
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Assist gas is crucial in laser cutting - it removes molten material, protects the lens, 
                and can even participate in the cutting process (exothermic reaction with oxygen). 
                The right gas choice significantly impacts cut quality, speed, and operating costs.
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Speed vs Quality</h3>
                  <p className="text-sm text-gray-700">
                    Oxygen provides maximum speed through exothermic reaction but oxidizes the edge. 
                    Nitrogen is slower but produces clean, oxide-free cuts.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Cost Considerations</h3>
                  <p className="text-sm text-gray-700">
                    Compressed air costs 1/10th of nitrogen but compromises quality. 
                    Calculate cost per part, not just gas price.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Material Specific</h3>
                  <p className="text-sm text-gray-700">
                    Stainless steel requires nitrogen to prevent oxidation. 
                    Carbon steel can use oxygen for speed. Titanium needs argon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Selection Guide */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎯 Quick Selection Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">For Carbon Steel</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-700 flex-shrink-0">Oxygen:</div>
                    <div className="text-gray-600">Maximum speed, oxidized edge, lowest cost</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-700 flex-shrink-0">Nitrogen:</div>
                    <div className="text-gray-600">Clean edge, slower, higher cost</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-700 flex-shrink-0">Air:</div>
                    <div className="text-gray-600">Thin materials only, economical</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">For Stainless Steel</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-700 flex-shrink-0">Nitrogen:</div>
                    <div className="text-gray-600">Required for oxide-free edges (high pressure)</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-700 flex-shrink-0">Air:</div>
                    <div className="text-gray-600">Thin materials, acceptable quality</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-red-700 flex-shrink-0">Oxygen:</div>
                    <div className="text-red-600">Not recommended - causes oxidation</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">For Aluminum</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-700 flex-shrink-0">Nitrogen:</div>
                    <div className="text-gray-600">Best choice, prevents oxidation</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-700 flex-shrink-0">Air:</div>
                    <div className="text-gray-600">Acceptable for thin materials</div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">For Titanium/Reactive Metals</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-gray-700 flex-shrink-0">Argon:</div>
                    <div className="text-gray-600">Only suitable gas, prevents combustion</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-24 font-medium text-red-700 flex-shrink-0">Others:</div>
                    <div className="text-red-600">Not recommended - oxidation risk</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Material-Gas Compatibility Matrix */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📊 Material-Gas Compatibility Matrix
            </h2>
            <p className="text-gray-600 mb-6">
              Quick reference chart showing which gases work best for each material type. Click any cell for detailed information.
            </p>
            <MaterialGasMatrix />
          </div>

          {/* Main Content */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Assist Gas Detailed Parameters
            </h2>
            <AssistGasCards gasData={ASSIST_GAS_DATA} />
          </div>

          {/* Pressure-Thickness Relationship */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📈 Pressure vs Thickness Relationship
            </h2>
            <p className="text-gray-600 mb-6">
              Understand how gas pressure requirements increase with material thickness. Use this chart to determine optimal parameters for your specific application.
            </p>
            <PressureThicknessChart />
          </div>

          {/* Nozzle-Gas Pairing */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              🔩 Nozzle-Gas Pairing Recommendations
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Proper nozzle selection is critical for effective gas delivery. Different gases require specific nozzle types and diameters for optimal performance.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Gas Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Nozzle Type</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Diameter</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Pressure Range</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Optimal Thickness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Oxygen</td>
                    <td className="px-4 py-3 text-gray-700">Single conical</td>
                    <td className="px-4 py-3 text-gray-700">1.0-1.5mm</td>
                    <td className="px-4 py-3 text-gray-700">2-4 bar</td>
                    <td className="px-4 py-3 text-gray-700">3-10mm carbon steel</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Oxygen</td>
                    <td className="px-4 py-3 text-gray-700">Single conical</td>
                    <td className="px-4 py-3 text-gray-700">1.5-2.0mm</td>
                    <td className="px-4 py-3 text-gray-700">3-5 bar</td>
                    <td className="px-4 py-3 text-gray-700">10-20mm carbon steel</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Nitrogen</td>
                    <td className="px-4 py-3 text-gray-700">High-flow conical</td>
                    <td className="px-4 py-3 text-gray-700">2.0-3.0mm</td>
                    <td className="px-4 py-3 text-gray-700">8-15 bar</td>
                    <td className="px-4 py-3 text-gray-700">0.5-6mm stainless steel</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Nitrogen</td>
                    <td className="px-4 py-3 text-gray-700">High-flow conical</td>
                    <td className="px-4 py-3 text-gray-700">3.0-4.0mm</td>
                    <td className="px-4 py-3 text-gray-700">12-20 bar</td>
                    <td className="px-4 py-3 text-gray-700">6-12mm stainless steel</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Nitrogen</td>
                    <td className="px-4 py-3 text-gray-700">Double nozzle</td>
                    <td className="px-4 py-3 text-gray-700">2.5mm</td>
                    <td className="px-4 py-3 text-gray-700">10-18 bar</td>
                    <td className="px-4 py-3 text-gray-700">3-10mm aluminum</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Compressed Air</td>
                    <td className="px-4 py-3 text-gray-700">Single conical</td>
                    <td className="px-4 py-3 text-gray-700">1.5-2.5mm</td>
                    <td className="px-4 py-3 text-gray-700">6-10 bar</td>
                    <td className="px-4 py-3 text-gray-700">0.5-3mm thin materials</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Argon</td>
                    <td className="px-4 py-3 text-gray-700">High-purity conical</td>
                    <td className="px-4 py-3 text-gray-700">1.5-2.5mm</td>
                    <td className="px-4 py-3 text-gray-700">5-10 bar</td>
                    <td className="px-4 py-3 text-gray-700">0.5-5mm titanium</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded p-3 text-sm text-yellow-800">
              <strong>Important:</strong> Larger nozzle diameters (≥3mm) are required for high-pressure nitrogen cutting. 
              Using too small a nozzle can restrict gas flow and reduce cut quality. See our{' '}
              <a href="/guides/nozzle-selection-guide" className="text-primary-600 hover:text-primary-700 font-medium underline">
                Nozzle Selection Guide
              </a>{' '}
              for detailed specifications.
            </div>
          </div>

          {/* Pressure Guidelines */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              💨 Pressure Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Low Pressure (0.1-0.5 MPa / 1-5 bar)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Use:</strong> Non-metals, thin materials, engraving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Gases:</strong> Compressed air, oxygen (thin carbon steel)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Advantage:</strong> Lower gas consumption, quieter operation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-3">High Pressure (0.8-2.0 MPa / 8-20 bar)</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Use:</strong> Stainless steel, aluminum, thick materials</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Gases:</strong> Nitrogen (primary), compressed air</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong>Requirement:</strong> High-pressure equipment, larger nozzles</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> Always start with manufacturer-recommended pressures and adjust based on 
                cut quality. Too low = dross formation; too high = excessive gas consumption and potential lens damage.
              </p>
            </div>
          </div>

          {/* Gas Purity Impact */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              ⚗️ Gas Purity Impact on Cut Quality
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Gas purity significantly affects edge quality and oxidation prevention, especially for stainless steel and aluminum cutting.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Gas</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Purity Level</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Edge Quality Impact</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Cost Multiplier</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 uppercase">Typical Application</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Nitrogen</td>
                    <td className="px-4 py-3 text-gray-700">99.5% (Industrial)</td>
                    <td className="px-4 py-3 text-gray-700">Slight oxidation possible on SS</td>
                    <td className="px-4 py-3 text-gray-700">1.0x (Baseline)</td>
                    <td className="px-4 py-3 text-gray-700">Carbon steel, non-critical</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Nitrogen</td>
                    <td className="px-4 py-3 text-gray-700">99.99% (High Purity)</td>
                    <td className="px-4 py-3 text-green-700 font-medium">Clean, oxide-free edges</td>
                    <td className="px-4 py-3 text-gray-700">1.3x</td>
                    <td className="px-4 py-3 text-gray-700">Stainless steel, aluminum standard</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Nitrogen</td>
                    <td className="px-4 py-3 text-gray-700">99.999% (Ultra-High)</td>
                    <td className="px-4 py-3 text-green-700 font-medium">Perfect mirror finish</td>
                    <td className="px-4 py-3 text-orange-700 font-medium">1.8x</td>
                    <td className="px-4 py-3 text-gray-700">Aerospace, medical, critical</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Argon</td>
                    <td className="px-4 py-3 text-gray-700">99.999% (Ultra-High)</td>
                    <td className="px-4 py-3 text-green-700 font-medium">Pristine, contamination-free</td>
                    <td className="px-4 py-3 text-gray-700">1.0x (for Argon)</td>
                    <td className="px-4 py-3 text-gray-700">Titanium, reactive metals</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">Argon</td>
                    <td className="px-4 py-3 text-gray-700">99.9999% (Six-Nine)</td>
                    <td className="px-4 py-3 text-green-700 font-medium">Absolute purity</td>
                    <td className="px-4 py-3 text-orange-700 font-medium">1.5x (for Argon)</td>
                    <td className="px-4 py-3 text-gray-700">Aerospace, medical implants</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded p-3 text-sm text-blue-800">
              <strong>Key Insight:</strong> For stainless steel cutting, 99.99% nitrogen purity is the industry standard. 
              Using lower purity (99.5%) may result in slight edge discoloration. For critical applications (aerospace, medical), 
              99.999% purity ensures zero oxidation risk.
            </div>
          </div>

          {/* Cost Optimization */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              💰 Cost Optimization Strategies
            </h2>
              <p className="text-sm text-gray-700 mb-4">
              Gas costs can significantly impact your bottom line. For high-volume operations, consider these strategies to optimize your assist gas expenses while maintaining quality standards.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Use Oxygen for Carbon Steel When Possible</h3>
                <p className="text-sm text-gray-700">
                  If edge oxidation is acceptable (structural parts, will be painted), oxygen provides 
                  2-3x faster cutting at 1/3 the cost of nitrogen. ROI improvement can be significant.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Consider On-Site Nitrogen Generation</h3>
                <p className="text-sm text-gray-700">
                  For high-volume nitrogen users, on-site nitrogen generators pay for themselves in 1-2 years. 
                  Reduces cost from $0.45/m³ to $0.10-0.15/m³.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Optimize Pressure Settings</h3>
                <p className="text-sm text-gray-700">
                  Running nitrogen at 15 bar when 10 bar is sufficient wastes 50% more gas. 
                  Test and document optimal pressures for each material/thickness combination.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Use Compressed Air for Thin Materials</h3>
                <p className="text-sm text-gray-700">
                  For carbon steel ≤3mm and stainless ≤2mm, compressed air provides acceptable quality 
                  at 1/10th the cost of nitrogen. Ideal for high-volume, non-critical parts.
                </p>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              🔧 Common Issues & Solutions
            </h2>
            <div className="space-y-3">
              <details className="border border-gray-200 rounded-lg">
                <summary className="px-4 py-3 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                  Excessive dross on bottom edge
                </summary>
                <div className="px-4 pb-3 text-sm text-gray-700">
                  <strong>Causes:</strong> Insufficient gas pressure, wrong nozzle size, cutting speed too slow<br/>
                  <strong>Solutions:</strong> Increase gas pressure by 10-20%, use larger nozzle, increase cutting speed slightly
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg">
                <summary className="px-4 py-3 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                  Oxidation on stainless steel (using nitrogen)
                </summary>
                <div className="px-4 pb-3 text-sm text-gray-700">
                  <strong>Causes:</strong> Nitrogen purity too low, pressure insufficient, air leaks in gas line<br/>
                  <strong>Solutions:</strong> Use ≥99.99% purity nitrogen, increase pressure to 12-18 bar, check all connections
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg">
                <summary className="px-4 py-3 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                  Excessive gas consumption
                </summary>
                <div className="px-4 pb-3 text-sm text-gray-700">
                  <strong>Causes:</strong> Pressure too high, nozzle too large, gas leaks<br/>
                  <strong>Solutions:</strong> Optimize pressure settings, use appropriate nozzle size, inspect for leaks regularly
                </div>
              </details>
              <details className="border border-gray-200 rounded-lg">
                <summary className="px-4 py-3 cursor-pointer font-medium text-gray-900 hover:bg-gray-50">
                  Lens contamination/damage
                </summary>
                <div className="px-4 pb-3 text-sm text-gray-700">
                  <strong>Causes:</strong> Insufficient gas flow, wrong gas type, contaminated gas supply<br/>
                  <strong>Solutions:</strong> Increase flow rate, ensure oil-free compressed air, install gas filtration
                </div>
              </details>
            </div>
          </div>

          {/* Related Tools */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              🔧 Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="/guides/nozzle-selection-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Nozzle Selection Guide</h3>
                <p className="text-sm text-gray-600">Pair the right nozzle with your gas choice</p>
              </a>
              <a 
                href="/guides/cutting-speed-chart"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Cutting Speed Chart</h3>
                <p className="text-sm text-gray-600">Reference speeds with different gases</p>
              </a>
              <a 
                href="/guides/material-thickness-parameters"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Material Thickness Parameters</h3>
                <p className="text-sm text-gray-600">Complete parameter tables by material</p>
              </a>
              <a 
                href="/guides/edge-quality-standards"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Edge Quality Standards</h3>
                <p className="text-sm text-gray-600">Understanding cut edge specifications</p>
              </a>
              <a 
                href="/guides/power-selection-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Power Selection Guide</h3>
                <p className="text-sm text-gray-600">Choose the right laser power</p>
              </a>
              <a 
                href="/guides/troubleshooting-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Troubleshooting Guide</h3>
                <p className="text-sm text-gray-600">Solve common cutting issues</p>
              </a>
              <a 
                href="/guides/safety-operations"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Safety Operations</h3>
                <p className="text-sm text-gray-600">Gas handling and safety procedures</p>
              </a>
              <a 
                href="/guides/maintenance-schedule"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Maintenance Schedule</h3>
                <p className="text-sm text-gray-600">Gas system maintenance guidelines</p>
              </a>
              <a 
                href="/tools/cost-estimator"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Cost Calculator</h3>
                <p className="text-sm text-gray-600">Calculate operational costs by gas type</p>
              </a>
            </div>
          </div>

          {/* Data Disclaimer */}
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-xs text-gray-600">
            <p>{DATA_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </>
  );
}







