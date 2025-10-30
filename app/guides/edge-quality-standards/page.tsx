import { Metadata } from 'next';
import {
  ISO_9013_QUALITY_GRADES,
  MEASUREMENT_METHODS,
  EDGE_QUALITY_LAST_UPDATE,
  DATA_DISCLAIMER
} from '@/lib/data/cheatsheets/edge-quality-data';
import { EdgeQualityGrades } from '@/components/cheatsheets/edge-quality-grades';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Cutting Edge Quality Standards - ISO 9013 Guide | LaserSpecHub',
  description: 'Complete guide to laser cutting edge quality standards based on ISO 9013. Compare Grade 1-4 quality levels, defects, and improvement methods for optimal cutting results.',
  keywords: [
    'laser cutting edge quality',
    'ISO 9013 standard',
    'cutting quality grades',
    'edge roughness',
    'perpendicularity tolerance',
    'dross formation',
    'laser cut quality',
    'surface finish'
  ],
  openGraph: {
    title: 'Laser Cutting Edge Quality Standards | LaserSpecHub',
    description: 'ISO 9013 quality grades and defect troubleshooting guide',
    type: 'article',
  },
};

export default function EdgeQualityStandardsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Cutting Edge Quality Standards and Classification',
    description: 'Comprehensive guide to ISO 9013 edge quality standards for laser cutting',
    author: {
      '@type': 'Organization',
      name: 'LaserSpecHub',
    },
    datePublished: EDGE_QUALITY_LAST_UPDATE,
    dateModified: EDGE_QUALITY_LAST_UPDATE,
  };

  return (
    <>
      <StructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Laser Cutting Edge Quality Standards
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Understand and achieve optimal edge quality with ISO 9013 standards. Compare quality grades, 
              identify defects, and learn improvement methods for laser cutting excellence.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                ISO 9013:2017
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                4 Quality Grades
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Defect Solutions
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Updated {EDGE_QUALITY_LAST_UPDATE}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📐 Understanding Edge Quality
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                Edge quality in laser cutting is defined by multiple parameters per ISO 9013:2017 international standard. 
                Each quality grade (1-4) specifies tolerance ranges for perpendicularity, roughness, dross, and other characteristics.
              </p>
              <div className="grid md:grid-cols-4 gap-4 my-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Perpendicularity</h3>
                  <p className="text-sm text-gray-700">
                    Measures how vertical the cut edge is. Critical for welding and assembly. 
                    Grade 1: ±0.05mm, Grade 4: ±0.50mm.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Roughness (Ra)</h3>
                  <p className="text-sm text-gray-700">
                    Surface texture measurement in micrometers. Lower = smoother. 
                    Grade 1: 1.6-3.2μm, Grade 4: 12.5-25μm.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Dross</h3>
                  <p className="text-sm text-gray-700">
                    Molten material re-solidified on bottom edge. Unacceptable in Grade 1, 
                    moderate amounts OK in Grade 4.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">HAZ</h3>
                  <p className="text-sm text-gray-700">
                    Heat Affected Zone - material property changes from thermal input. 
                    Minimize for structural integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              ISO 9013 Quality Classification
            </h2>
            <EdgeQualityGrades grades={ISO_9013_QUALITY_GRADES} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              📏 Quality Measurement Methods
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Parameter</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Standard</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Frequency</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {MEASUREMENT_METHODS.map((method, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{method.parameter}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{method.method}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{method.standard}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">{method.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              💡 Quality Optimization Tips
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Match Quality to Application</h3>
                <p className="text-sm text-gray-700">
                  Don't over-specify. Grade 3 is sufficient for 80% of applications. Reserve Grade 1 for precision 
                  parts where tolerances matter. Using Grade 1 for everything increases costs 80% unnecessarily.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Optimize Gas Selection</h3>
                <p className="text-sm text-gray-700">
                  Nitrogen produces Grade 1-2 quality on stainless steel but costs 3x more than oxygen. 
                  For carbon steel structural parts (Grade 3 acceptable), oxygen saves 60% on gas costs.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Monitor and Control Variables</h3>
                <p className="text-sm text-gray-700">
                  Quality consistency requires controlling: material flatness, lens cleanliness, gas pressure, 
                  nozzle condition, and focus position. Check these daily for Grade 1-2 work.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Document Your Parameters</h3>
                <p className="text-sm text-gray-700">
                  Create a parameter library for each material/thickness/grade combination. Once optimized, 
                  document speeds, powers, gas settings. Reduces setup time and ensures repeatability.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              📊 Quality vs Cost Trade-offs
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Grade</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Speed</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Gas Cost</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Total Cost</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Best Use</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Grade 1</td>
                    <td className="px-4 py-3 text-sm text-red-600">Slow (-50%)</td>
                    <td className="px-4 py-3 text-sm text-red-600">High N₂</td>
                    <td className="px-4 py-3 text-sm font-medium text-red-600">1.8x</td>
                    <td className="px-4 py-3 text-sm">Critical precision parts only</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">Grade 2</td>
                    <td className="px-4 py-3 text-sm text-yellow-600">Medium (-30%)</td>
                    <td className="px-4 py-3 text-sm text-yellow-600">Medium N₂</td>
                    <td className="px-4 py-3 text-sm font-medium text-yellow-600">1.3x</td>
                    <td className="px-4 py-3 text-sm">High-quality production</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium">Grade 3</td>
                    <td className="px-4 py-3 text-sm text-green-600">Fast (baseline)</td>
                    <td className="px-4 py-3 text-sm text-green-600">Low O₂/Air</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-600">1.0x</td>
                    <td className="px-4 py-3 text-sm">Standard production (most common)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium">Grade 4</td>
                    <td className="px-4 py-3 text-sm text-green-600">Very Fast (+20%)</td>
                    <td className="px-4 py-3 text-sm text-green-600">Very Low</td>
                    <td className="px-4 py-3 text-sm font-medium text-green-600">0.6x</td>
                    <td className="px-4 py-3 text-sm">Rough blanking, non-critical</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              🔧 Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="/guides/assist-gas-chart"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Assist Gas Selection</h3>
                <p className="text-sm text-gray-600">Gas choice affects quality significantly</p>
              </a>
              <a 
                href="/guides/cutting-speed-chart"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Cutting Speed Chart</h3>
                <p className="text-sm text-gray-600">Optimize speed-quality balance</p>
              </a>
              <a 
                href="/guides/lens-specifications"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Lens Specifications</h3>
                <p className="text-sm text-gray-600">Lens choice impacts edge quality</p>
              </a>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-xs text-gray-600">
            <p>{DATA_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </>
  );
}


