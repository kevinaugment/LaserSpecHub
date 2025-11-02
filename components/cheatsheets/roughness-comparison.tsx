'use client';

interface RoughnessComparisonProps {
  data: Array<{
    parameter: string;
    definition: string;
    measurement: string;
    typicalUse: string;
  }>;
}

export function RoughnessComparison({ data }: RoughnessComparisonProps) {
  return (
    <div className="space-y-6">
      {/* Visual Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Ra Visualization */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Ra (Arithmetic Average)</h3>
          
          <svg viewBox="0 0 300 200" className="w-full h-auto mb-4">
            {/* Baseline */}
            <line x1="20" y1="100" x2="280" y2="100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
            <text x="285" y="105" fontSize="12" fill="#3b82f6">Centerline</text>
            
            {/* Surface profile */}
            <path 
              d="M 20 100 Q 40 80 60 100 Q 80 120 100 100 Q 120 85 140 100 Q 160 115 180 100 Q 200 90 220 100 Q 240 110 260 100 L 280 100" 
              stroke="#1e40af" 
              strokeWidth="3" 
              fill="none" 
            />
            
            {/* Vertical deviation lines */}
            <line x1="40" y1="80" x2="40" y2="100" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
            <line x1="80" y1="120" x2="80" y2="100" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
            <line x1="120" y1="85" x2="120" y2="100" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
            <line x1="160" y1="115" x2="160" y2="100" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
            <line x1="200" y1="90" x2="200" y2="100" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
            <line x1="240" y1="110" x2="240" y2="100" stroke="#ef4444" strokeWidth="1.5" opacity="0.6" />
            
            {/* Formula */}
            <text x="150" y="160" fontSize="14" textAnchor="middle" fill="#1e40af" fontWeight="bold">
              Ra = Average of |deviations|
            </text>
            
            {/* Measurement area indicator */}
            <rect x="20" y="140" width="260" height="20" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="3,3" />
            <text x="150" y="180" fontSize="11" textAnchor="middle" fill="#6b7280">Evaluation Length</text>
          </svg>
          
          <div className="space-y-2 text-sm text-blue-900">
            <p><strong>Definition:</strong> {data[0]?.definition}</p>
            <p><strong>Measurement:</strong> {data[0]?.measurement}</p>
            <p><strong>Typical Use:</strong> {data[0]?.typicalUse}</p>
          </div>
        </div>

        {/* Rz5 Visualization */}
        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">Rz5 (Mean Height)</h3>
          
          <svg viewBox="0 0 300 200" className="w-full h-auto mb-4">
            {/* Baseline */}
            <line x1="20" y1="100" x2="280" y2="100" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5" />
            <text x="285" y="105" fontSize="12" fill="#10b981">Centerline</text>
            
            {/* Surface profile */}
            <path 
              d="M 20 100 Q 40 70 60 100 Q 80 130 100 100 Q 120 75 140 100 Q 160 125 180 100 Q 200 80 220 100 Q 240 120 260 100 L 280 100" 
              stroke="#059669" 
              strokeWidth="3" 
              fill="none" 
            />
            
            {/* Peak-to-valley measurements (5 largest) */}
            <line x1="40" y1="70" x2="40" y2="100" stroke="#ef4444" strokeWidth="2" />
            <text x="35" y="68" fontSize="10" fill="#ef4444" fontWeight="bold">P1</text>
            
            <line x1="80" y1="100" x2="80" y2="130" stroke="#ef4444" strokeWidth="2" />
            <text x="75" y="145" fontSize="10" fill="#ef4444" fontWeight="bold">V1</text>
            
            <line x1="120" y1="75" x2="120" y2="100" stroke="#ef4444" strokeWidth="2" />
            <text x="115" y="73" fontSize="10" fill="#ef4444" fontWeight="bold">P2</text>
            
            <line x1="160" y1="100" x2="160" y2="125" stroke="#ef4444" strokeWidth="2" />
            <text x="155" y="140" fontSize="10" fill="#ef4444" fontWeight="bold">V2</text>
            
            <line x1="240" y1="100" x2="240" y2="120" stroke="#ef4444" strokeWidth="2" />
            <text x="235" y="135" fontSize="10" fill="#ef4444" fontWeight="bold">V3</text>
            
            {/* Formula */}
            <text x="150" y="160" fontSize="14" textAnchor="middle" fill="#059669" fontWeight="bold">
              Rz5 = Average of 5 largest P-V
            </text>
            
            {/* Measurement area indicator */}
            <rect x="20" y="140" width="260" height="20" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3,3" />
            <text x="150" y="180" fontSize="11" textAnchor="middle" fill="#6b7280">Sampling Length</text>
          </svg>
          
          <div className="space-y-2 text-sm text-green-900">
            <p><strong>Definition:</strong> {data[1]?.definition}</p>
            <p><strong>Measurement:</strong> {data[1]?.measurement}</p>
            <p><strong>Typical Use:</strong> {data[1]?.typicalUse}</p>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aspect</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ra (Arithmetic Average)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rz5 (Mean Height)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Calculation Method</td>
              <td className="px-6 py-4 text-sm text-gray-700">Average of all absolute deviations</td>
              <td className="px-6 py-4 text-sm text-gray-700">Average of 5 largest peak-to-valley heights</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Sensitivity</td>
              <td className="px-6 py-4 text-sm text-gray-700">Less sensitive to extreme variations</td>
              <td className="px-6 py-4 text-sm text-gray-700">Highly sensitive to extreme variations</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">ISO 9013:2017</td>
              <td className="px-6 py-4 text-sm text-gray-700">Secondary reference</td>
              <td className="px-6 py-4 text-sm text-gray-700 font-bold text-green-700">Primary metric ✓</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Typical Values</td>
              <td className="px-6 py-4 text-sm text-gray-700">1.6 - 25 μm (laser cutting)</td>
              <td className="px-6 py-4 text-sm text-gray-700">10 - 160 μm (laser cutting)</td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Conversion</td>
              <td className="px-6 py-4 text-sm text-gray-700" colSpan={2}>
                Approximate: <strong>Rz5 ≈ 5-8 × Ra</strong> (varies by process)
              </td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 text-sm font-medium text-gray-900">Best For</td>
              <td className="px-6 py-4 text-sm text-gray-700">General machining, consistent surfaces</td>
              <td className="px-6 py-4 text-sm text-gray-700">Thermal cutting, surfaces with striations</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Takeaways */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-purple-900 mb-3">🔑 Key Takeaways</h3>
        <ul className="space-y-2 text-sm text-purple-900">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>ISO 9013:2017 uses Rz5</strong> as the primary roughness metric for thermal cutting quality classification</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Rz5 captures extreme variations</strong> better than Ra, making it more suitable for laser cutting with striations</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Both metrics are valid</strong> - Ra is more common in general manufacturing, Rz5 is standard for thermal cutting</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Rough conversion:</strong> Rz5 values are typically 5-8 times larger than Ra values for the same surface</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span><strong>Always specify which metric</strong> when communicating quality requirements to avoid confusion</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
