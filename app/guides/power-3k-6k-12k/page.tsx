import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: '3kW vs 6kW vs 12kW Fiber Laser Power Comparison: Complete Guide 2025',
  description: 'Professional comparison of 3kW, 6kW and 12kW fiber laser cutting systems. Detailed analysis of cutting speeds, material capabilities, operating costs, ROI calculations, and infrastructure requirements. Data-backed guide for optimal power selection.',
  path: '/guides/power-3k-6k-12k',
  keywords: [
    '3kW vs 6kW vs 12kW fiber laser',
    'fiber laser power comparison',
    'laser cutting speed chart',
    'laser power selection guide',
    'fiber laser ROI calculation',
    'laser power requirements',
    '3kW fiber laser',
    '6kW fiber laser',
    '12kW fiber laser',
  ],
});

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '3kW vs 6kW vs 12kW Fiber Laser: Complete Power Comparison',
    description:
      'Comprehensive technical comparison of fiber laser power classes: cutting speeds, material capabilities, operating costs, and ROI analysis based on manufacturer specifications.',
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().slice(0, 10),
    author: {
      '@type': 'Organization',
      name: 'LaserSpecHub',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          3kW vs 6kW vs 12kW Fiber Laser Power Comparison
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Choosing the right fiber laser power is critical for maximizing productivity, edge quality, and return on investment. 
          This comprehensive guide compares 3kW, 6kW, and 12kW fiber laser systems based on verified manufacturer data, 
          cutting speed benchmarks, material capabilities, and real-world operating costs.
        </p>

        {/* Quick Reference Summary */}
        <div className="not-prose mb-10">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-blue-900">3kW Fiber Laser</CardTitle>
                <p className="text-sm text-blue-700 font-medium">Entry-Level Precision</p>
              </CardHeader>
              <CardContent className="text-sm text-gray-800 space-y-2">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Thickness Range:</strong> 0.5-10mm carbon steel, 0.5-6mm stainless steel</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Best For:</strong> Job shops, prototyping, thin sheet fabrication</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Edge Quality:</strong> Excellent on thin materials, minimal dross</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Investment:</strong> $80k-150k, lowest operating costs</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-green-900">6kW Fiber Laser</CardTitle>
                <p className="text-sm text-green-700 font-medium">Versatile Workhorse</p>
              </CardHeader>
              <CardContent className="text-sm text-gray-800 space-y-2">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Thickness Range:</strong> 0.5-20mm carbon steel, 0.5-12mm stainless steel</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Best For:</strong> Mixed production, medium fabrication, contract cutting</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Speed Advantage:</strong> 40-70% faster than 3kW on 6-12mm materials</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Investment:</strong> $150k-250k, best ROI for versatility</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-purple-900">12kW Fiber Laser</CardTitle>
                <p className="text-sm text-purple-700 font-medium">High-Volume Production</p>
              </CardHeader>
              <CardContent className="text-sm text-gray-800 space-y-2">
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Thickness Range:</strong> 0.5-30mm carbon steel, 0.5-20mm stainless steel</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Best For:</strong> Heavy fabrication, structural components, 24/7 operations</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Thick Plate:</strong> Superior performance on 12-25mm materials</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Investment:</strong> $300k-500k, justified by high throughput</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Comprehensive Cutting Capability Table */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Material Cutting Capability Comparison</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Material</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">3kW Capacity</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">6kW Capacity</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">12kW Capacity</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Assist Gas</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Carbon Steel (Mild Steel)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-10mm<br/><span className="text-xs text-gray-500">Optimal: ≤8mm</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-20mm<br/><span className="text-xs text-gray-500">Optimal: 6-16mm</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-30mm<br/><span className="text-xs text-gray-500">Optimal: 12-25mm</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">O₂ (speed)<br/>N₂ (clean edge)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Stainless Steel (304/316)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-6mm<br/><span className="text-xs text-gray-500">Excellent finish</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-12mm<br/><span className="text-xs text-gray-500">Balanced quality</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-20mm<br/><span className="text-xs text-gray-500">High throughput</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">N₂ (16-20 bar)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Aluminum (5052/6061)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-5mm<br/><span className="text-xs text-gray-500">Precise control needed</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-10mm<br/><span className="text-xs text-gray-500">Robust parameters</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-15mm<br/><span className="text-xs text-gray-500">Limited by ejection</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">N₂ (18-22 bar)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Copper (C11000)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-2mm<br/><span className="text-xs text-gray-500">High reflectivity</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-4mm<br/><span className="text-xs text-gray-500">Better absorption</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-6mm<br/><span className="text-xs text-gray-500">Specialized nozzle</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">N₂ / O₂ hybrid</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Brass (C26000)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-3mm<br/><span className="text-xs text-gray-500">Moderate difficulty</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-5mm<br/><span className="text-xs text-gray-500">Good processing</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-8mm<br/><span className="text-xs text-gray-500">Excellent control</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">N₂ (16-20 bar)</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Titanium (Grade 2/5)</td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-4mm<br/><span className="text-xs text-gray-500">Inert gas critical</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-8mm<br/><span className="text-xs text-gray-500">Good edge quality</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">0.5-12mm<br/><span className="text-xs text-gray-500">Fast processing</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">Ar / N₂ (pure)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3 italic">
            Note: Maximum thickness values based on oxygen-assist cutting for carbon steel. Nitrogen cutting reduces maximum thickness by 30-40%. 
            Values represent production-quality cuts; experimental capabilities may extend 10-15% higher with compromised edge quality.
          </p>
        </section>

        {/* Detailed Cutting Speed Comparison Table */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cutting Speed Performance Comparison</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Material & Thickness</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">3kW Speed</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">6kW Speed</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">12kW Speed</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">6kW vs 3kW</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">12kW vs 6kW</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="bg-blue-50">
                  <td colSpan={6} className="px-4 py-2 text-sm font-semibold text-blue-900">Carbon Steel (O₂ Assist)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">1mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">18-22 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">28-35 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">35-45 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+55%</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+29%</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">3mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">8-12 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">14-18 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">18-25 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+50%</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+39%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">6mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">2.5-3.8 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">4-6 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">6-9 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+58%</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+50%</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">10mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">1.2-1.8 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">2.0-3.0 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">2.8-4.2 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+67%</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+40%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">15mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">1.0-1.5 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">1.8-2.5 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+67%</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">20mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">0.6-0.9 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">1.4-2.0 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+122%</td>
                </tr>
                
                <tr className="bg-purple-50">
                  <td colSpan={6} className="px-4 py-2 text-sm font-semibold text-purple-900">Stainless Steel 304/316 (N₂ Assist)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">1mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">12-16 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">18-24 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">25-32 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+50%</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+33%</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">3mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">5-8 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">8-12 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">12-16 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+50%</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+33%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">6mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">2.2-3.5 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">4-6 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">6-8 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+71%</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+33%</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">10mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">1.5-2.5 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">2.5-3.8 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+52%</td>
                </tr>
                
                <tr className="bg-orange-50">
                  <td colSpan={6} className="px-4 py-2 text-sm font-semibold text-orange-900">Aluminum 5052/6061 (N₂ Assist)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">1mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">10-14 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">16-22 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">22-28 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+57%</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+27%</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">3mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">4-6 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">6-9 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">9-13 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+50%</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+44%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">6mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">1.8-2.8 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">3-4.5 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">4.5-6.5 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+56%</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+44%</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">10mm</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">1.2-2.0 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">2.0-3.2 m/min</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-400">—</td>
                  <td className="px-4 py-3 text-sm text-center text-green-600 font-medium">+60%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3 italic">
            <strong>Data Source:</strong> Compiled from Trumpf TruLaser Series, Bystronic ByStar Fiber, and Mazak Optiplex specifications (2024-2025 models). 
            Speeds represent stable production cutting with good edge quality. Peak speeds may be 15-20% higher with optimized parameters. 
            Gas pressure: O₂ at 0.5-1.2 bar, N₂ at 16-20 bar. Nozzle diameters: 1.0-2.5mm depending on thickness.
          </p>
        </section>

        {/* Operating Cost Breakdown */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Hourly Operating Cost Comparison</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Cost Component</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">3kW System</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">6kW System</th>
                  <th className="px-4 py-3 text-center text-xs font-semibold text-gray-900 uppercase tracking-wider">12kW System</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Electrical Power Consumption</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$2.40-3.00/hr<br/><span className="text-xs text-gray-500">20-25kW @ $0.12/kWh</span></td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$4.80-6.60/hr<br/><span className="text-xs text-gray-500">40-55kW @ $0.12/kWh</span></td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$9.60-13.20/hr<br/><span className="text-xs text-gray-500">80-110kW @ $0.12/kWh</span></td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Assist Gas (Nitrogen, avg)</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$3-6/hr<br/><span className="text-xs text-gray-500">15-30 m³/hr @ $0.20/m³</span></td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$6-12/hr<br/><span className="text-xs text-gray-500">30-60 m³/hr @ $0.20/m³</span></td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$10-18/hr<br/><span className="text-xs text-gray-500">50-90 m³/hr @ $0.20/m³</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Consumables (Nozzles, Lenses)</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$2-4/hr<br/><span className="text-xs text-gray-500">Lower wear rates</span></td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$3-6/hr<br/><span className="text-xs text-gray-500">Moderate wear</span></td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$5-9/hr<br/><span className="text-xs text-gray-500">Higher throughput wear</span></td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Maintenance & Service</td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$1-2/hr<br/><span className="text-xs text-gray-500">20,000hr laser life</span></td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$2-4/hr<br/><span className="text-xs text-gray-500">20,000hr laser life</span></td>
                  <td className="px-4 py-3 text-sm text-center text-gray-700">$4-7/hr<br/><span className="text-xs text-gray-500">20,000hr laser life</span></td>
                </tr>
                <tr className="bg-blue-100">
                  <td className="px-4 py-3 text-sm font-bold text-gray-900">Total Hourly Operating Cost</td>
                  <td className="px-4 py-3 text-sm text-center font-bold text-blue-900">$8.40-15/hr</td>
                  <td className="px-4 py-3 text-sm text-center font-bold text-blue-900">$15.80-28.60/hr</td>
                  <td className="px-4 py-3 text-sm text-center font-bold text-blue-900">$29.20-47.20/hr</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Labor Cost (not included above)</td>
                  <td colSpan={3} className="px-4 py-3 text-sm text-center text-gray-700">$25-35/hr operator + $50-75/hr programming (amortized)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3 italic">
            <strong>Note:</strong> Costs exclude material, labor, and facility overhead. Nitrogen pricing varies regionally ($0.15-0.30/m³). 
            Oxygen assist reduces gas costs by 70-80% but produces oxidized edges unsuitable for stainless steel/aluminum. 
            Higher power systems can significantly reduce cost-per-part through time savings when utilization is high.
          </p>
        </section>

        {/* Infrastructure Requirements */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure & Facility Requirements</h2>
          <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">Requirement</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">3kW System</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">6kW System</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-900 uppercase tracking-wider">12kW System</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Electrical Supply</td>
                  <td className="px-4 py-3 text-sm text-gray-700">3-phase 480V, 60A<br/><span className="text-xs text-gray-500">Standard industrial service</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">3-phase 480V, 120A<br/><span className="text-xs text-gray-500">May require panel upgrade</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">3-phase 480V, 200-250A<br/><span className="text-xs text-gray-500">Dedicated transformer recommended</span></td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Cooling System</td>
                  <td className="px-4 py-3 text-sm text-gray-700">3-5 kW chiller<br/>5-10 L/min flow<br/><span className="text-xs text-gray-500">Air-cooled sufficient</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">7-10 kW chiller<br/>15-25 L/min flow<br/><span className="text-xs text-gray-500">Water-cooled preferred</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">15-20 kW chiller<br/>30-50 L/min flow<br/><span className="text-xs text-gray-500">Industrial water-cooled</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Gas Supply</td>
                  <td className="px-4 py-3 text-sm text-gray-700">N₂: 16-20 bar, 30 m³/hr<br/>O₂: 4-8 bar, 15 m³/hr<br/><span className="text-xs text-gray-500">Bottle or generator</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">N₂: 16-20 bar, 60 m³/hr<br/>O₂: 4-8 bar, 30 m³/hr<br/><span className="text-xs text-gray-500">Generator recommended</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">N₂: 18-22 bar, 90 m³/hr<br/>O₂: 4-10 bar, 45 m³/hr<br/><span className="text-xs text-gray-500">High-capacity generator required</span></td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Floor Space</td>
                  <td className="px-4 py-3 text-sm text-gray-700">4×8' table: 25-35 m²<br/>5×10' table: 35-45 m²<br/><span className="text-xs text-gray-500">Includes material handling</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">5×10' table: 40-55 m²<br/>6×12' table: 50-65 m²<br/><span className="text-xs text-gray-500">Loading/unloading space</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">6×12' table: 60-80 m²<br/>6×20' table: 80-100 m²<br/><span className="text-xs text-gray-500">Automation integration space</span></td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">Ventilation & Fume Extraction</td>
                  <td className="px-4 py-3 text-sm text-gray-700">2,000-3,000 m³/hr<br/><span className="text-xs text-gray-500">Standard extraction unit</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">4,000-6,000 m³/hr<br/><span className="text-xs text-gray-500">High-capacity extraction</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">8,000-12,000 m³/hr<br/><span className="text-xs text-gray-500">Industrial extraction system</span></td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">HVAC / Temperature Control</td>
                  <td className="px-4 py-3 text-sm text-gray-700">18-28°C ambient<br/><span className="text-xs text-gray-500">Standard AC acceptable</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">18-26°C recommended<br/><span className="text-xs text-gray-500">Stable temp for accuracy</span></td>
                  <td className="px-4 py-3 text-sm text-gray-700">20-24°C required<br/><span className="text-xs text-gray-500">Precision temp control</span></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3 italic">
            <strong>Planning Note:</strong> Infrastructure investments can add 15-30% to total system cost. 
            Facility readiness should be assessed 3-6 months before equipment delivery. Consider future expansion: 
            oversizing electrical service and cooling by 30-50% allows painless power upgrades.
          </p>
        </section>

        {/* ROI Analysis & Decision Framework */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ROI Analysis & Payback Scenarios</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Scenario: Job Shop (Mixed 3-12mm Work)</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded p-4">
                <div className="font-semibold text-gray-900 mb-2">3kW System</div>
                <div className="space-y-1 text-gray-700">
                  <div>Initial Investment: $100k-130k</div>
                  <div>Avg Speed: 4-6 m/min (6mm)</div>
                  <div>Monthly Capacity: ~800 parts</div>
                  <div>Operating Cost: $12/hr</div>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <div className="font-semibold text-gray-900 mb-2">6kW System</div>
                <div className="space-y-1 text-gray-700">
                  <div>Initial Investment: $180k-230k</div>
                  <div>Avg Speed: 6-9 m/min (6mm)</div>
                  <div>Monthly Capacity: ~1,300 parts</div>
                  <div>Operating Cost: $22/hr</div>
                  <div className="text-green-600 font-medium mt-2">+62% throughput</div>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <div className="font-semibold text-gray-900 mb-2">Payback Analysis</div>
                <div className="space-y-1 text-gray-700">
                  <div>Price Delta: $80k-100k</div>
                  <div>Extra Revenue/month: $8-12k</div>
                  <div className="text-blue-600 font-medium mt-2">Payback: 10-15 months</div>
                  <div className="text-xs text-gray-600 mt-2">Assumes $15-20/part pricing and full utilization</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Scenario: Heavy Fabrication (10-20mm Focus)</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded p-4">
                <div className="font-semibold text-gray-900 mb-2">6kW System</div>
                <div className="space-y-1 text-gray-700">
                  <div>Initial Investment: $190k-240k</div>
                  <div>Avg Speed: 1.5 m/min (15mm)</div>
                  <div>Daily Throughput: 45-60m cut</div>
                  <div>Operating Cost: $24/hr</div>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <div className="font-semibold text-gray-900 mb-2">12kW System</div>
                <div className="space-y-1 text-gray-700">
                  <div>Initial Investment: $340k-420k</div>
                  <div>Avg Speed: 2.5 m/min (15mm)</div>
                  <div>Daily Throughput: 75-100m cut</div>
                  <div>Operating Cost: $38/hr</div>
                  <div className="text-green-600 font-medium mt-2">+67% throughput</div>
                </div>
              </div>
              <div className="bg-white rounded p-4">
                <div className="font-semibold text-gray-900 mb-2">Payback Analysis</div>
                <div className="space-y-1 text-gray-700">
                  <div>Price Delta: $150k-180k</div>
                  <div>Labor Savings: $5-8k/mo</div>
                  <div>Extra Revenue: $10-15k/mo</div>
                  <div className="text-blue-600 font-medium mt-2">Payback: 12-18 months</div>
                  <div className="text-xs text-gray-600 mt-2">Critical for multi-shift operations</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Key ROI Factors</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <div className="font-semibold text-gray-900 mb-2">When Higher Power Pays Off:</div>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Utilization &gt; 50% (4+ hours/shift active cutting)</li>
                  <li>Material thickness in system's optimal range</li>
                  <li>Labor costs high relative to equipment costs</li>
                  <li>Demand exceeds current capacity</li>
                  <li>Multi-shift operations planned</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-gray-900 mb-2">When Lower Power Makes Sense:</div>
                <ul className="space-y-1 ml-4 list-disc">
                  <li>Primarily thin materials (&lt;6mm) with excellent finish requirements</li>
                  <li>Low utilization or prototyping focus</li>
                  <li>Facility constraints (electrical, space, cooling)</li>
                  <li>Budget limited, can upgrade later</li>
                  <li>Single-shift operation with excess capacity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-yellow-900">
            <strong>Pro Tip:</strong> Many manufacturers (Trumpf, Bystronic, Amada, IPG Photonics) offer modular laser sources that allow 
            power upgrades without replacing the entire system. Starting with 4-6kW and field-upgrading to 8-12kW as demand grows 
            can optimize cash flow and minimize risk. Confirm upgrade path before purchase.
          </div>
        </section>

        {/* Decision Framework */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Power Selection Decision Framework</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Choose 3kW If...</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Material Focus:</strong> 90%+ work is ≤8mm carbon steel, ≤6mm stainless/aluminum</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Quality Priority:</strong> Mirror-finish edges, minimal dross, tight tolerances critical</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Budget:</strong> Limited capital ($100k-150k total), low operating costs essential</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Facility:</strong> Standard electrical service (60A 3-phase), limited cooling capacity</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Operation:</strong> Job shop, prototyping, or single-shift production</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">Choose 6kW If...</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Material Mix:</strong> Wide range 1-16mm with concentration in 6-12mm sweet spot</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Versatility:</strong> One machine for entire product line, avoid specialized equipment</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Growth Plan:</strong> Expanding from 3kW or planning capacity increases</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>ROI Balance:</strong> Best payback for mixed contract cutting, general fabrication</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Operation:</strong> 1.5-2 shift production, consistent workflow, moderate-high utilization</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-300 rounded-lg p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Choose 12kW If...</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Thick Plate:</strong> 60%+ work is 10-25mm carbon steel or 8-16mm stainless steel</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Volume:</strong> High-throughput production, multi-shift (16-24hr/day) operations</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Bottleneck:</strong> Current 6kW capacity is saturated, demand exceeds supply</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Infrastructure:</strong> Facility can support 100+kW load, adequate cooling/ventilation</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Industry:</strong> Heavy fabrication, structural, construction, shipbuilding, energy sectors</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Technical Specifications Comparison</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-900">Specification</th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-900">3kW</th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-900">6kW</th>
                    <th className="px-4 py-2 text-center font-semibold text-gray-900">12kW</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-gray-900">Beam Quality (M²)</td>
                    <td className="px-4 py-2 text-center text-gray-700">&lt;1.08</td>
                    <td className="px-4 py-2 text-center text-gray-700">&lt;1.10</td>
                    <td className="px-4 py-2 text-center text-gray-700">&lt;1.15</td>
                  </tr>
                  <tr className="bg-gray-25">
                    <td className="px-4 py-2 text-gray-900">Focus Diameter (typical)</td>
                    <td className="px-4 py-2 text-center text-gray-700">0.06-0.10 mm</td>
                    <td className="px-4 py-2 text-center text-gray-700">0.08-0.12 mm</td>
                    <td className="px-4 py-2 text-center text-gray-700">0.10-0.15 mm</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-900">Wavelength</td>
                    <td className="px-4 py-2 text-center text-gray-700" colSpan={3}>1070 nm ±10nm (Fiber Laser)</td>
                  </tr>
                  <tr className="bg-gray-25">
                    <td className="px-4 py-2 text-gray-900">Power Stability</td>
                    <td className="px-4 py-2 text-center text-gray-700">±2%</td>
                    <td className="px-4 py-2 text-center text-gray-700">±2%</td>
                    <td className="px-4 py-2 text-center text-gray-700">±3%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-900">Laser Source Lifespan</td>
                    <td className="px-4 py-2 text-center text-gray-700" colSpan={3}>20,000-30,000 hours (typical diode life)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="not-prose mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools & Guides</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/tools/power-calculator" className="block group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-primary-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">Power Calculator</h3>
                <p className="text-sm text-gray-600">Calculate required laser power based on material type, thickness, and cutting speed</p>
              </div>
            </Link>
            <Link href="/tools/cost-estimator" className="block group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-primary-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">Cost Estimator</h3>
                <p className="text-sm text-gray-600">Detailed operating cost breakdown including electricity, gas, and maintenance</p>
              </div>
            </Link>
            <Link href="/guides/cutting-speed-chart" className="block group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-primary-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">Cutting Speed Chart</h3>
                <p className="text-sm text-gray-600">Comprehensive speed reference across materials, thickness, and power levels</p>
              </div>
            </Link>
            <Link href="/equipment" className="block group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-primary-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">Equipment Database</h3>
                <p className="text-sm text-gray-600">Browse and compare fiber laser systems by power, manufacturer, and specifications</p>
              </div>
            </Link>
            <Link href="/comparison" className="block group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-primary-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">Compare Equipment</h3>
                <p className="text-sm text-gray-600">Side-by-side comparison tool for multiple laser systems</p>
              </div>
            </Link>
            <Link href="/guides/installation-requirements" className="block group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-primary-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">Installation Requirements</h3>
                <p className="text-sm text-gray-600">Facility planning guide for electrical, cooling, and ventilation systems</p>
              </div>
            </Link>
            <Link href="/guides/co2-vs-fiber-laser" className="block group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-primary-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">CO2 vs Fiber Laser</h3>
                <p className="text-sm text-gray-600">Technology comparison and application-specific recommendations</p>
              </div>
            </Link>
            <Link href="/guides/selection" className="block group">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-5 hover:border-primary-500 hover:shadow-md transition-all">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-700">Complete Selection Guide</h3>
                <p className="text-sm text-gray-600">Comprehensive laser equipment selection framework and decision criteria</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Data Sources & Disclaimer */}
        <section className="not-prose">
          <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 text-sm text-gray-800">
            <h3 className="font-bold text-gray-900 mb-3">Data Sources & Methodology</h3>
            <p className="mb-3">
              <strong>Technical specifications and performance data compiled from:</strong>
            </p>
            <ul className="list-disc ml-6 space-y-1 mb-4">
              <li>Trumpf TruLaser Series 1000-5000 Technical Documentation (2024-2025)</li>
              <li>Bystronic ByStar Fiber Product Specifications & Cutting Charts</li>
              <li>Mazak Optiplex Series Performance Data & Application Guides</li>
              <li>IPG Photonics Laser Source Specifications</li>
              <li>Coherent HighLight Fiber Laser System Data</li>
              <li>Industry benchmarks from FABTECH, EuroBLECH, and published case studies</li>
            </ul>
            <p className="mb-3">
              <strong>Cost estimations based on:</strong> 2025 North American pricing, $0.12/kWh electricity rate, $0.20/m³ nitrogen, 
              standard industrial labor rates, and 20,000-hour laser source lifespan. Regional variations may apply.
            </p>
            <p className="text-xs text-gray-600 italic mt-4">
              <strong>Disclaimer:</strong> All data represents typical performance ranges for production-quality cutting. Actual results depend on 
              specific equipment models, beam quality, focus position, material grade, assist gas purity, environmental conditions, and operator expertise. 
              Always conduct on-site test cuts and consult manufacturer specifications before making equipment decisions. This guide is for informational purposes only.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}


