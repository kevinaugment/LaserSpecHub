'use client';

import { useState } from 'react';

interface InternationalStandard {
  name: string;
  fullName: string;
  region: string;
  grade1Equivalent: string;
  grade2Equivalent: string;
  grade3Equivalent: string;
  grade4Equivalent: string;
  keyDifferences: string[];
}

interface StandardsComparisonProps {
  standards: InternationalStandard[];
}

export function StandardsComparisonTable({ standards }: StandardsComparisonProps) {
  const [expandedStandard, setExpandedStandard] = useState<string | null>(null);

  const getRegionColor = (region: string) => {
    switch (region) {
      case 'International': return 'bg-blue-100 text-blue-800';
      case 'North America': return 'bg-green-100 text-green-800';
      case 'Europe': return 'bg-purple-100 text-purple-800';
      case 'Japan': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Comparison Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Standard
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Region
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade 1<br/>Equivalent
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade 2<br/>Equivalent
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade 3<br/>Equivalent
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade 4<br/>Equivalent
                </th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {standards.map((standard, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-900">{standard.name}</div>
                    <div className="text-xs text-gray-500">{standard.fullName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRegionColor(standard.region)}`}>
                      {standard.region}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">
                    {standard.grade1Equivalent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">
                    {standard.grade2Equivalent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">
                    {standard.grade3Equivalent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900 font-medium">
                    {standard.grade4Equivalent}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => setExpandedStandard(expandedStandard === standard.name ? null : standard.name)}
                      className="text-primary-600 hover:text-primary-900 text-sm font-medium"
                    >
                      {expandedStandard === standard.name ? 'Hide ▲' : 'Show ▼'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Expanded Details */}
      {expandedStandard && (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-6">
          {standards.filter(s => s.name === expandedStandard).map((standard, index) => (
            <div key={index}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{standard.name}</h3>
                  <p className="text-sm text-gray-600">{standard.fullName}</p>
                </div>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getRegionColor(standard.region)}`}>
                  {standard.region}
                </span>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Differences & Characteristics:</h4>
                <ul className="space-y-2">
                  {standard.keyDifferences.map((diff, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-700">
                      <span className="mr-2 text-primary-600 font-bold">•</span>
                      <span>{diff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Key Insights */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="text-lg font-bold text-gray-900 mb-3">🌍 Global Standards Overview</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs mr-2 flex-shrink-0">1</span>
              <p><strong>ISO 9013:2017</strong> is the primary international standard for thermal cutting quality classification worldwide</p>
            </div>
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-800 font-bold text-xs mr-2 flex-shrink-0">2</span>
              <p><strong>AWS D1.1</strong> focuses on weldability rather than cutting quality, common in North American structural steel</p>
            </div>
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-800 font-bold text-xs mr-2 flex-shrink-0">3</span>
              <p><strong>EN 1090</strong> covers entire fabrication process with execution classes, required for CE marking in Europe</p>
            </div>
            <div className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-800 font-bold text-xs mr-2 flex-shrink-0">4</span>
              <p><strong>JIS B0417</strong> is widely used in Asia-Pacific region and generally compatible with ISO standards</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">
          <h3 className="text-lg font-bold text-yellow-900 mb-3">⚠️ Important Considerations</h3>
          <ul className="space-y-2 text-sm text-yellow-900">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Not directly interchangeable:</strong> Grade equivalents are approximate, not exact conversions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Specify the standard:</strong> Always reference which standard applies to your project requirements</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Regional requirements:</strong> Some regions mandate specific standards for compliance (e.g., CE marking)</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Customer specifications:</strong> Customer drawings may reference any of these standards</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span><strong>Welding vs cutting:</strong> AWS focuses on weldability, ISO on cutting quality - different priorities</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Quick Reference Guide */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-3">📋 Quick Reference Guide</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">When to use ISO 9013:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• International projects</li>
              <li>• Laser/plasma/oxyfuel cutting quality specification</li>
              <li>• General manufacturing and fabrication</li>
              <li>• When customer doesn't specify a standard</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">When to use AWS D1.1:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Structural steel welding in North America</li>
              <li>• Bridge and building construction</li>
              <li>• When edge preparation for welding is critical</li>
              <li>• Customer specifies AWS compliance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">When to use EN 1090:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Steel structures sold in European Union</li>
              <li>• CE marking compliance required</li>
              <li>• Execution class specified in contract</li>
              <li>• European construction projects</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">When to use JIS B0417:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Projects in Japan and Asia-Pacific</li>
              <li>• Japanese customer specifications</li>
              <li>• Compatible with ISO requirements</li>
              <li>• Regional manufacturing standards</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
