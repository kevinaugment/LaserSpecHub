import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Laser Penetration Depth & Cutting Capacity Guide 2025 | LaserSpecHub',
  description:
    'Comprehensive technical guide to laser penetration depth: power density calculations, cutting capacity by material and thickness, focus position optimization, piercing strategies, and parameter tuning. Verified data from Trumpf, IPG, Bystronic, and Mazak specifications.',
  keywords: [
    'laser penetration depth',
    'laser cutting capacity',
    'power density calculation',
    'energy coupling efficiency',
    'focus position optimization',
    'piercing techniques laser',
    'maximum cutting thickness',
    'laser power vs thickness',
    'kerf depth analysis',
  ],
  openGraph: {
    title: 'Laser Penetration Depth & Cutting Capacity: Complete Technical Guide 2025',
    description: 'Comprehensive analysis of penetration depth physics, power density calculations, cutting capacity tables, and parameter optimization for maximum throughput.',
    type: 'article',
  },
};

export default function PenetrationDepthPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Penetration Depth and Cutting Capacity: Complete Technical Guide',
    description: 'Comprehensive technical analysis of laser penetration depth physics, power density calculations, cutting capacity by material and thickness, focus position optimization, and piercing strategies based on verified manufacturer data.',
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().split('T')[0],
    author: {
      '@type': 'Organization',
      name: 'LaserSpecHub',
    },
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />

          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Laser Penetration Depth & Cutting Capacity Technical Guide
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Comprehensive technical analysis of laser penetration depth: power density physics, energy coupling efficiency, 
              cutting capacity by material and thickness, focus position optimization, piercing strategies, and parameter 
              tuning for maximum throughput. Based on verified manufacturer specifications and industrial testing data.
            </p>
          </div>

          {/* Physics Fundamentals */}
          <section className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">1. Physics of Laser Penetration Depth</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Power Density & Energy Coupling</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Laser penetration depth is fundamentally determined by <strong>power density</strong> at the material surface 
                    and <strong>energy coupling efficiency</strong>. Power density (also called intensity or irradiance) is the 
                    laser power concentrated per unit area at the focus. Higher power density enables deeper penetration by rapidly 
                    reaching melting/vaporization temperatures throughout the material thickness.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-3">Power Density Formula</h4>
                      <div className="font-mono text-sm space-y-2">
                        <div className="font-semibold">I = P / A = 4P / (πd²)</div>
                        <div className="text-xs text-blue-800 dark:text-blue-300 mt-3 space-y-1">
                          <div>I = Power density (W/mm²)</div>
                          <div>P = Laser power (W)</div>
                          <div>d = Focused spot diameter (mm)</div>
                          <div>A = Focused spot area (mm²)</div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded text-xs">
                        <strong>Example:</strong> 6kW laser, 0.15mm spot<br/>
                        I = 4×6000 / (π×0.15²) ≈ <strong>339,000 W/mm²</strong>
                      </div>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-900 dark:text-green-200 mb-3">Energy Coupling Efficiency</h4>
                      <div className="font-mono text-sm space-y-2">
                        <div className="font-semibold">η = A(λ,T) × cos(θ) × S × G</div>
                        <div className="text-xs text-green-800 dark:text-green-300 mt-3 space-y-1">
                          <div>η = Coupling efficiency (0-1)</div>
                          <div>A(λ,T) = Material absorption at wavelength & temp</div>
                          <div>θ = Incidence angle (0° = perpendicular)</div>
                          <div>S = Surface condition factor</div>
                          <div>G = Gas interaction factor</div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded text-xs">
                        <strong>Typical Values:</strong><br/>
                        Fiber (1064nm) on steel: η ≈ 0.30-0.45<br/>
                        CO₂ (10.6μm) on steel: η ≈ 0.10-0.25
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Critical Thresholds for Penetration</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="border border-gray-300 px-4 py-2 text-left">Process</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Required Power Density</th>
                          <th className="border border-gray-300 px-4 py-2 text-left">Typical Material Response</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Surface Heating</td>
                          <td className="border border-gray-300 px-4 py-2">10³ - 10⁴ W/mm²</td>
                          <td className="border border-gray-300 px-4 py-2">Marking, annealing, surface treatment</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Melting (Thin Sheets)</td>
                          <td className="border border-gray-300 px-4 py-2">10⁴ - 10⁵ W/mm²</td>
                          <td className="border border-gray-300 px-4 py-2">Cutting &lt;3mm, fast speeds, clean kerf</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 font-medium">Deep Penetration</td>
                          <td className="border border-gray-300 px-4 py-2">10⁵ - 10⁶ W/mm²</td>
                          <td className="border border-gray-300 px-4 py-2">Cutting 5-20mm, piercing, high assist gas</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2 font-medium">Vaporization</td>
                          <td className="border border-gray-300 px-4 py-2">&gt;10⁶ W/mm²</td>
                          <td className="border border-gray-300 px-4 py-2">Thick plate piercing (&gt;20mm), ablation</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cutting Capacity Data */}
          <section className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">2. Maximum Cutting Capacity by Laser Power & Material</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700">
                  Maximum cutting thickness is determined by laser power, beam quality (M²), assist gas type/pressure, and material properties. 
                  The tables below present verified cutting capacity data from major manufacturers (Trumpf, IPG, Mazak, Bystronic) for 
                  production-quality cutting (ISO 9013 quality grade 3-4).
                </p>

                <div className="overflow-x-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Carbon Steel (Mild Steel) - Oxygen Assist</h3>
                  <table className="w-full text-sm border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-3 py-2 text-left">Laser Power</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Max Thickness</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Typical Speed (5mm)</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Pierce Time (10mm)</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">O₂ Pressure</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">1kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">6mm</td>
                        <td className="border border-gray-300 px-3 py-2">3.0-4.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">1.5-2.5s</td>
                        <td className="border border-gray-300 px-3 py-2">0.6-1.0 bar</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium">2kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">12mm</td>
                        <td className="border border-gray-300 px-3 py-2">4.5-6.0 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">2.0-3.0s</td>
                        <td className="border border-gray-300 px-3 py-2">0.8-1.2 bar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">3kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">16mm</td>
                        <td className="border border-gray-300 px-3 py-2">5.5-7.0 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">2.5-3.5s</td>
                        <td className="border border-gray-300 px-3 py-2">1.0-1.5 bar</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium">4kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">20mm</td>
                        <td className="border border-gray-300 px-3 py-2">6.0-8.0 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">3.0-4.5s</td>
                        <td className="border border-gray-300 px-3 py-2">1.2-1.8 bar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">6kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">25mm</td>
                        <td className="border border-gray-300 px-3 py-2">7.5-10.0 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">4.0-6.0s</td>
                        <td className="border border-gray-300 px-3 py-2">1.5-2.2 bar</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium">8kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">30mm</td>
                        <td className="border border-gray-300 px-3 py-2">9.0-12.0 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">5.0-7.5s</td>
                        <td className="border border-gray-300 px-3 py-2">1.8-2.5 bar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">12kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">40mm</td>
                        <td className="border border-gray-300 px-3 py-2">12.0-16.0 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">7.0-10.0s</td>
                        <td className="border border-gray-300 px-3 py-2">2.0-3.0 bar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="overflow-x-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Stainless Steel (304/316) - Nitrogen Assist</h3>
                  <table className="w-full text-sm border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-3 py-2 text-left">Laser Power</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Max Thickness</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Typical Speed (3mm)</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Pierce Time (10mm)</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">N₂ Pressure</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">1kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">4mm</td>
                        <td className="border border-gray-300 px-3 py-2">2.5-3.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">3.0-4.5s</td>
                        <td className="border border-gray-300 px-3 py-2">10-14 bar</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium">2kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">8mm</td>
                        <td className="border border-gray-300 px-3 py-2">3.5-4.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">4.5-6.0s</td>
                        <td className="border border-gray-300 px-3 py-2">12-16 bar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">3kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">10mm</td>
                        <td className="border border-gray-300 px-3 py-2">4.0-5.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">5.5-7.5s</td>
                        <td className="border border-gray-300 px-3 py-2">14-18 bar</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium">4kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">12mm</td>
                        <td className="border border-gray-300 px-3 py-2">4.5-6.0 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">6.5-9.0s</td>
                        <td className="border border-gray-300 px-3 py-2">14-18 bar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">6kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">20mm</td>
                        <td className="border border-gray-300 px-3 py-2">5.5-7.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">9.0-12.0s</td>
                        <td className="border border-gray-300 px-3 py-2">16-20 bar</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium">8kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">25mm</td>
                        <td className="border border-gray-300 px-3 py-2">6.5-8.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">11.0-15.0s</td>
                        <td className="border border-gray-300 px-3 py-2">16-20 bar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">12kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">30mm</td>
                        <td className="border border-gray-300 px-3 py-2">8.0-11.0 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">14.0-20.0s</td>
                        <td className="border border-gray-300 px-3 py-2">18-22 bar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="overflow-x-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Aluminum (5083/6061) - Nitrogen Assist</h3>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-3 py-2 text-left">Laser Power</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Max Thickness</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Typical Speed (3mm)</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">Pierce Time (8mm)</th>
                        <th className="border border-gray-300 px-3 py-2 text-left">N₂ Pressure</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">1kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">3mm</td>
                        <td className="border border-gray-300 px-3 py-2">3.0-4.0 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">4.0-6.0s</td>
                        <td className="border border-gray-300 px-3 py-2">14-18 bar</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium">2kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">6mm</td>
                        <td className="border border-gray-300 px-3 py-2">4.0-5.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">6.0-8.5s</td>
                        <td className="border border-gray-300 px-3 py-2">16-20 bar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">3kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">8mm</td>
                        <td className="border border-gray-300 px-3 py-2">5.0-6.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">7.5-10.0s</td>
                        <td className="border border-gray-300 px-3 py-2">16-20 bar</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium">4kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">10mm</td>
                        <td className="border border-gray-300 px-3 py-2">5.5-7.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">9.0-12.5s</td>
                        <td className="border border-gray-300 px-3 py-2">16-20 bar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">6kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">15mm</td>
                        <td className="border border-gray-300 px-3 py-2">7.0-9.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">12.0-16.0s</td>
                        <td className="border border-gray-300 px-3 py-2">18-22 bar</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-3 py-2 font-medium">8kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">20mm</td>
                        <td className="border border-gray-300 px-3 py-2">8.5-11.5 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">15.0-20.0s</td>
                        <td className="border border-gray-300 px-3 py-2">18-22 bar</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-3 py-2 font-medium">12kW Fiber</td>
                        <td className="border border-gray-300 px-3 py-2">25mm</td>
                        <td className="border border-gray-300 px-3 py-2">11.0-15.0 m/min</td>
                        <td className="border border-gray-300 px-3 py-2">18.0-25.0s</td>
                        <td className="border border-gray-300 px-3 py-2">20-24 bar</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-yellow-900">
                  <strong>Important Notes:</strong>
                  <ul className="mt-2 space-y-1 ml-4 list-disc">
                    <li>Data based on single-mode or high-quality multimode fiber lasers (M²&lt;2.0)</li>
                    <li>Actual performance varies by specific laser model, beam quality, nozzle design, and material grade</li>
                    <li>Pierce times assume optimized ramp-up parameters; actual times may vary ±30%</li>
                    <li>Maximum thickness represents production-quality cutting, not absolute physical limit</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Piercing Techniques */}
          <section className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">3. Advanced Piercing Techniques & Strategies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Piercing is one of the most challenging aspects of laser cutting, particularly for thick materials. Proper piercing 
                  techniques minimize spatter, reduce cycle time, and prevent material damage. The optimal strategy depends on material 
                  type, thickness, and quality requirements.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <h3 className="font-semibold text-blue-900">Pulsed Power Ramping</h3>
                    </div>
                    <div className="text-sm text-blue-800 space-y-2">
                      <p><strong>Method:</strong> Gradually increase power from 40-60% to 100% over 0.3-0.8 seconds</p>
                      <p><strong>Benefits:</strong> Minimizes explosive material ejection and spatter, reduces thermal shock</p>
                      <p><strong>Best For:</strong> Thick materials (≥10mm), stainless steel, aluminum</p>
                      <p><strong>Typical Ramp:</strong> 50% @ 0s → 75% @ 0.3s → 100% @ 0.6s</p>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <h3 className="font-semibold text-green-900">Spiral/Circular Piercing</h3>
                    </div>
                    <div className="text-sm text-green-800 space-y-2">
                      <p><strong>Method:</strong> Start outside final contour, spiral inward with 0.5-2mm radius</p>
                      <p><strong>Benefits:</strong> Distributes heat and molten material over larger area, prevents localized damage</p>
                      <p><strong>Best For:</strong> High-quality parts, materials prone to cracking (thick stainless, hardened steel)</p>
                      <p><strong>Trade-off:</strong> Adds 0.5-2s per pierce but improves edge quality significantly</p>
                    </div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                      </svg>
                      <h3 className="font-semibold text-purple-900">Gas Pressure Strategy</h3>
                    </div>
                    <div className="text-sm text-purple-800 space-y-2">
                      <p><strong>Carbon Steel (O₂):</strong> Start 4-6 bar, ramp to 6-8 bar for thick plates (exothermic assist)</p>
                      <p><strong>Stainless/Aluminum (N₂):</strong> Use high pressure 12-20 bar continuously (melt ejection only)</p>
                      <p><strong>Dynamic Pressure:</strong> Some systems reduce pressure momentarily during pierce to minimize splash</p>
                      <p><strong>Nozzle Distance:</strong> Increase standoff 1-2mm during pierce, return to normal for cutting</p>
                    </div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center mb-3">
                      <svg className="w-6 h-6 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <h3 className="font-semibold text-orange-900">Focus Position Optimization</h3>
                    </div>
                    <div className="text-sm text-orange-800 space-y-2">
                      <p><strong>Thin Materials (≤5mm):</strong> Focus at surface (0mm) for maximum intensity</p>
                      <p><strong>Medium (6-12mm):</strong> Negative focus −1 to −2mm to position beam waist deeper</p>
                      <p><strong>Thick (≥15mm):</strong> Negative focus −2 to −4mm to maintain energy through thickness</p>
                      <p><strong>Adaptive Systems:</strong> Some machines automatically adjust focus during pierce sequence</p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Piercing Time Optimization by Thickness</h3>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Material</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Thickness</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Basic Pierce</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Pulsed Ramp</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Spiral Pierce</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Best Choice</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Carbon Steel</td>
                        <td className="border border-gray-300 px-4 py-2">5mm</td>
                        <td className="border border-gray-300 px-4 py-2">1.5-2.0s</td>
                        <td className="border border-gray-300 px-4 py-2">2.0-2.5s</td>
                        <td className="border border-gray-300 px-4 py-2">2.5-3.0s</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Basic (fast, clean with O₂)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Carbon Steel</td>
                        <td className="border border-gray-300 px-4 py-2">15mm</td>
                        <td className="border border-gray-300 px-4 py-2">4.0-5.5s</td>
                        <td className="border border-gray-300 px-4 py-2">5.0-6.5s</td>
                        <td className="border border-gray-300 px-4 py-2">6.0-7.5s</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Pulsed (reduces splash)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Stainless Steel</td>
                        <td className="border border-gray-300 px-4 py-2">8mm</td>
                        <td className="border border-gray-300 px-4 py-2">5.0-7.0s</td>
                        <td className="border border-gray-300 px-4 py-2">6.0-8.0s</td>
                        <td className="border border-gray-300 px-4 py-2">7.5-9.5s</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Spiral (best quality)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Stainless Steel</td>
                        <td className="border border-gray-300 px-4 py-2">20mm</td>
                        <td className="border border-gray-300 px-4 py-2">12-16s</td>
                        <td className="border border-gray-300 px-4 py-2">14-18s</td>
                        <td className="border border-gray-300 px-4 py-2">17-22s</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Pulsed + High N₂</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Aluminum</td>
                        <td className="border border-gray-300 px-4 py-2">6mm</td>
                        <td className="border border-gray-300 px-4 py-2">6.0-8.5s</td>
                        <td className="border border-gray-300 px-4 py-2">7.5-10.0s</td>
                        <td className="border border-gray-300 px-4 py-2">9.0-12.0s</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Pulsed (high reflectivity)</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Aluminum</td>
                        <td className="border border-gray-300 px-4 py-2">15mm</td>
                        <td className="border border-gray-300 px-4 py-2">14-18s</td>
                        <td className="border border-gray-300 px-4 py-2">16-22s</td>
                        <td className="border border-gray-300 px-4 py-2">20-26s</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Spiral + 20 bar N₂</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Note:</strong> Times based on 6kW fiber laser. Scale proportionally for other powers. Add 20-30% for first-time 
                    parameter development.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Focus Position & Spot Size */}
          <section className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">4. Focus Position & Spot Size Optimization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Focus position is one of the most critical parameters affecting penetration depth and cut quality. The optimal focus 
                  position balances energy density at the surface with energy distribution through the material thickness. Thin materials 
                  benefit from tight focus (small spot, high intensity) near the surface, while thick plates require negative focus to 
                  position the beam waist deeper in the kerf, maintaining sufficient energy density throughout the thickness.
                </p>

                <div className="overflow-x-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Focus Position Recommendations by Material Thickness</h3>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">Thickness Range</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Focus Position</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Nozzle Diameter</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Nozzle Standoff</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Typical Spot Size</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Application Notes</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">0.5-1mm</td>
                        <td className="border border-gray-300 px-4 py-2">+0.5 to +1.0mm</td>
                        <td className="border border-gray-300 px-4 py-2">Ø1.0-1.2mm</td>
                        <td className="border border-gray-300 px-4 py-2">0.8-1.0mm</td>
                        <td className="border border-gray-300 px-4 py-2">0.08-0.10mm</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Ultra-thin sheets: maximum speed, minimum kerf, sharp corners</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">1.5-3mm</td>
                        <td className="border border-gray-300 px-4 py-2">0 to +0.3mm</td>
                        <td className="border border-gray-300 px-4 py-2">Ø1.2-1.5mm</td>
                        <td className="border border-gray-300 px-4 py-2">0.8-1.2mm</td>
                        <td className="border border-gray-300 px-4 py-2">0.10-0.12mm</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Thin sheets: high precision, minimal HAZ, clean edges</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">4-6mm</td>
                        <td className="border border-gray-300 px-4 py-2">−0.5 to −1.0mm</td>
                        <td className="border border-gray-300 px-4 py-2">Ø1.5-1.8mm</td>
                        <td className="border border-gray-300 px-4 py-2">1.0-1.5mm</td>
                        <td className="border border-gray-300 px-4 py-2">0.12-0.15mm</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Medium thickness: balanced speed and quality</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">8-10mm</td>
                        <td className="border border-gray-300 px-4 py-2">−1.0 to −2.0mm</td>
                        <td className="border border-gray-300 px-4 py-2">Ø1.8-2.0mm</td>
                        <td className="border border-gray-300 px-4 py-2">1.2-1.8mm</td>
                        <td className="border border-gray-300 px-4 py-2">0.15-0.18mm</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Moderate speeds, higher gas pressure, negative focus critical</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">12-16mm</td>
                        <td className="border border-gray-300 px-4 py-2">−2.0 to −3.0mm</td>
                        <td className="border border-gray-300 px-4 py-2">Ø2.0-2.3mm</td>
                        <td className="border border-gray-300 px-4 py-2">1.5-2.2mm</td>
                        <td className="border border-gray-300 px-4 py-2">0.18-0.22mm</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Thick plates: deeper focus essential, slower speeds</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">20-25mm</td>
                        <td className="border border-gray-300 px-4 py-2">−3.0 to −4.5mm</td>
                        <td className="border border-gray-300 px-4 py-2">Ø2.3-2.5mm</td>
                        <td className="border border-gray-300 px-4 py-2">1.8-2.5mm</td>
                        <td className="border border-gray-300 px-4 py-2">0.22-0.28mm</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Very thick: high power required, multimode beam beneficial</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">&gt;30mm</td>
                        <td className="border border-gray-300 px-4 py-2">−4.0 to −6.0mm</td>
                        <td className="border border-gray-300 px-4 py-2">Ø2.5-3.0mm</td>
                        <td className="border border-gray-300 px-4 py-2">2.0-3.0mm</td>
                        <td className="border border-gray-300 px-4 py-2">0.28-0.35mm</td>
                        <td className="border border-gray-300 px-4 py-2 text-xs">Extreme thickness: 8-12kW+ required, specialized parameters</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="mt-4 p-4 bg-blue-50 rounded text-xs text-blue-900">
                    <strong>Focus Position Convention:</strong> Positive values (+) mean focus is above the material surface (diverging beam enters material). 
                    Negative values (−) mean focus is below the surface (converging beam continues into material, waist positioned deeper). Most machines use 
                    this convention, but always verify with your specific control system documentation.
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-white rounded-lg border-2 border-green-300">
                    <h4 className="font-semibold text-green-900 mb-3">Thin Material Strategy (≤3mm)</h4>
                    <ul className="text-sm text-green-800 space-y-2">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Focus:</strong> At or slightly above surface (0 to +0.5mm)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Spot:</strong> Smallest achievable (0.08-0.12mm for single-mode lasers)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Benefits:</strong> Maximum power density, fastest speeds, narrowest kerf</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span><strong>Trade-offs:</strong> Less forgiving to height variations, requires precise sensing</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gradient-to-br from-purple-50 to-white rounded-lg border-2 border-purple-300">
                    <h4 className="font-semibold text-purple-900 mb-3">Thick Plate Strategy (≥12mm)</h4>
                    <ul className="text-sm text-purple-800 space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span><strong>Focus:</strong> Well below surface (−2 to −4mm or deeper)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span><strong>Spot:</strong> Larger diameter (0.18-0.28mm), greater depth of focus</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span><strong>Benefits:</strong> Energy distributed through thickness, more stable process</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-600 mr-2">✓</span>
                        <span><strong>Trade-offs:</strong> Slower speeds, wider kerf, higher gas consumption</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Troubleshooting */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5) Troubleshooting Penetration Issues</h2>
            <div className="prose max-w-none text-gray-700 space-y-3">
              <ul className="list-disc ml-5">
                <li><strong>Not piercing / stalls:</strong> Increase gas pressure, reduce speed, apply negative focus, ramp power.</li>
                <li><strong>Excessive spatter/dross:</strong> Reduce power, increase speed slightly, sharpen focus, ensure nozzle concentricity.</li>
                <li><strong>Wide kerf / taper:</strong> Reduce spot size or use multi-mode beam for thick plate; adjust focus deeper.</li>
                <li><strong>Oxidation on stainless:</strong> Switch to nitrogen, increase purity and pressure (14-18 bar).</li>
              </ul>
            </div>
          </div>

          {/* Quick Reference Table */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Quick Reference</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="border rounded p-3 bg-white">
                <h3 className="font-semibold mb-2">Steel (Fiber 1064nm)</h3>
                <p>1kW → 5mm; 3kW → 15mm; 6kW → 30mm (cut); pierce ×1.3 power density</p>
              </div>
              <div className="border rounded p-3 bg-white">
                <h3 className="font-semibold mb-2">Stainless</h3>
                <p>1kW → 3.5-4mm; 3kW → 12mm; 6kW → 20-22mm; N₂ 14-18 bar</p>
              </div>
              <div className="border rounded p-3 bg-white">
                <h3 className="font-semibold mb-2">Aluminum</h3>
                <p>1kW → 2.5-3mm; 3kW → 8-9mm; 6kW → 15-18mm; tight focus, high N₂</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}










