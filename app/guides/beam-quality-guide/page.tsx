import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Beam Quality M² Factor: Complete Technical Guide 2025',
  description: 'Comprehensive technical analysis of laser beam quality M² factor: ISO 11146 measurement standards, BPP calculations, focus spot size impact, cutting performance comparison, and equipment selection criteria. Verified data from IPG, Trumpf, nLIGHT, and Raycus specifications.',
  path: '/guides/beam-quality-guide',
  keywords: [
    'laser beam quality',
    'M² factor',
    'M2 factor',
    'beam parameter product BPP',
    'ISO 11146 beam quality',
    'focus spot size calculation',
    'fiber laser beam quality',
    'single-mode vs multimode laser',
    'beam quality measurement',
    'laser brightness',
  ],
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Laser Beam Quality M² Factor: Complete Technical Guide with ISO 11146 Standards',
  description: 'Comprehensive technical guide to laser beam quality M² factor: physical principles, ISO 11146 measurement methods, BPP calculations, focus spot size impact, cutting performance comparison by material and thickness, and equipment selection criteria based on verified manufacturer specifications.',
  author: {
    '@type': 'Organization',
    name: 'LaserSpecHub',
  },
  datePublished: '2025-01-15',
  dateModified: new Date().toISOString().slice(0, 10),
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Laser Beam Quality M² Factor: Complete Technical Guide</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Comprehensive technical analysis of laser beam quality M² factor from physical principles to industrial applications: 
          ISO 11146 measurement standards, BPP calculations, focus spot size impact, cutting performance optimization, and 
          equipment selection criteria based on verified manufacturer specifications.
        </p>
      </div>

      {/* 1. M² Factor Basics */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. What is M² Factor</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Physical Definition</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed">
              M² (pronounced "M-squared") is the international standard parameter for measuring laser beam quality, defined as the ratio of the beam parameter product (BPP) of an actual laser beam to that of an ideal Gaussian beam.
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-sm mb-2">Mathematical Expression</h4>
              <div className="font-mono text-sm space-y-2">
                <div>M² = BPP<sub>actual</sub> / BPP<sub>ideal</sub></div>
                <div className="text-xs text-muted-foreground mt-3">Where:</div>
                <div className="text-xs">BPP = θ × w₀ (Beam Parameter Product)</div>
                <div className="text-xs">θ = Half-angle divergence (rad)</div>
                <div className="text-xs">w₀ = Beam waist radius (mm)</div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong>Ideal Gaussian Beam</strong>: M² = 1.0 (Perfect TEM₀₀ mode)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <div>
                  <strong>High-Quality Laser</strong>: M² = 1.0 - 1.2 (Near Gaussian distribution)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <div>
                  <strong>Multimode Laser</strong>: M² = 1.5 - 5.0 (Mixed modes)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold">×</span>
                <div>
                  <strong>Low-Quality Laser</strong>: M² {'>'} 5.0 (Far from Gaussian distribution)
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>M² Relationship to Beam Divergence & Focus Spot Size</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              Higher M² values result in greater beam divergence and larger focused spot sizes, directly impacting energy density 
              and processing precision. The focused spot diameter is proportional to M², making it a critical parameter for 
              cutting quality and speed.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm">
              <div className="font-semibold mb-3">Focused Spot Diameter Formula:</div>
              <div>d = (4 × M² × λ × f) / (π × D)</div>
              <div className="mt-4 text-xs text-muted-foreground space-y-1.5">
                <div><strong>Where:</strong></div>
                <div>λ = Wavelength (μm)</div>
                <div>f = Focusing lens focal length (mm)</div>
                <div>D = Incident beam diameter (mm)</div>
                <div>d = Focused spot diameter (mm)</div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-800 text-sm">
              <strong className="text-blue-900 dark:text-blue-200">Key Insight:</strong>
              <p className="mt-1.5 text-blue-800 dark:text-blue-300">
                Reducing M² from 2.0 to 1.1 (45% improvement) decreases spot diameter by 45%, increasing peak power density 
                by 2.5× for the same laser power, enabling significantly faster cutting speeds on thin materials.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. M² Measurement Methods */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. M² Factor Measurement Methods</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>ISO 11146 Standard Measurement Protocol</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed">
              According to ISO 11146 international standard, M² measurement requires measuring beam diameter at multiple positions 
              before and after the focal point, then fitting the data to a hyperbolic function. This method provides accurate, 
              reproducible results for comparing different laser systems.
            </p>
            
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <strong className="text-blue-900 dark:text-blue-200 text-base">Measurement Procedure:</strong>
                <ol className="mt-3 space-y-2.5 ml-4 list-decimal text-blue-800 dark:text-blue-300">
                  <li>Select at least 10 measurement positions near the focal point (5 before, 5 after)</li>
                  <li>Use a beam profiler to measure beam diameter at each position</li>
                  <li>Record axial position (z-coordinate) and corresponding beam diameter (w)</li>
                  <li>Fit measured data to hyperbolic function: w²(z) = w₀² + (M²λz/πw₀)²</li>
                  <li>Calculate M² value from fitted parameters using least-squares regression</li>
                </ol>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <strong className="text-green-900 dark:text-green-200 text-base">Measurement Equipment:</strong>
                <ul className="mt-3 space-y-2 ml-4 list-disc text-green-800 dark:text-green-300">
                  <li><strong>CCD Beam Profiler:</strong> Most common method, provides real-time 2D intensity distribution</li>
                  <li><strong>Knife-Edge Scanning System:</strong> High accuracy for small beams, slower measurement</li>
                  <li><strong>Pinhole Scanning System:</strong> Highest precision, primarily for research applications</li>
                  <li><strong>Commercial M² Analyzers:</strong> Ophir BeamSquared, Thorlabs BP209-IR, DataRay WinCamD-LCM</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-sm mb-3">Typical Measurement Parameters:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-xs">
                <div>
                  <strong>Fiber Laser (1064nm):</strong>
                  <div className="mt-1.5 space-y-1 text-muted-foreground">
                    <div>• Measurement range: ±20mm from focus</div>
                    <div>• Position increment: 2-4mm</div>
                    <div>• Typical measurement time: 30-60 seconds</div>
                  </div>
                </div>
                <div>
                  <strong>CO₂ Laser (10.6μm):</strong>
                  <div className="mt-1.5 space-y-1 text-muted-foreground">
                    <div>• Measurement range: ±100mm from focus</div>
                    <div>• Position increment: 10-20mm</div>
                    <div>• Requires pyroelectric or thermal sensors</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h4 className="font-semibold text-base mb-3 text-yellow-900 dark:text-yellow-200">
              Critical Measurement Considerations
            </h4>
            <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-300">
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Equipment Requirement:</strong> M² measurement requires professional beam analysis equipment. Most users rely on manufacturer-provided specifications rather than conducting independent measurements.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Environmental Sensitivity:</strong> Results are affected by temperature gradients, air currents, and vibration. Measurements should be conducted in controlled environments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Method Variability:</strong> Different measurement methods (CCD, knife-edge, pinhole) may yield results differing by 3-7%. ISO 11146 specifies CCD as the reference method.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold mt-0.5">•</span>
                <span><strong>Laser Aging:</strong> M² degradation of 5-10% over 50,000 hours is typical for quality fiber lasers. Values exceeding 15% degradation indicate optical contamination or component damage requiring service.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Advanced Technical Insights */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Advanced Technical Insights & Application Optimization</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Industrial Application Tradeoffs: When Higher M² Outperforms Lower M²</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              While lower M² values generally indicate better beam quality, the optimal M² for a given application depends on 
              multiple factors beyond just beam quality. Understanding these tradeoffs is essential for equipment selection and 
              maximizing process efficiency.
            </p>
            <p>
              For precision thin-sheet cutting (0.5-3mm), single-mode fiber lasers with M² &lt; 1.15 provide unmatched performance. 
              The ultra-small focus spot (0.08-0.10mm) enables cutting speeds 30-40% faster than multi-mode lasers on thin materials. 
              Small hole cutting (diameter &lt; material thickness) is only reliably achievable with M² &lt; 1.2.
            </p>
            <p>
              However, for thick plate cutting (15-30mm), multi-mode lasers with M² = 2.0-2.5 often outperform single-mode systems. 
              The larger focus spot and greater depth of focus provide better tolerance to focus position variations inevitable when 
              cutting thick materials. The energy distribution is more uniform through the thickness, producing better edge quality 
              on thick cuts. Advanced manufacturers like 
              <a href="https://opmtlaser.com/technology/beam-quality-optimization" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener"> OPMT Laser integrate adaptive beam shaping technology</a> that 
              dynamically adjusts effective M² based on material thickness, providing single-mode performance on thin materials and 
              multi-mode characteristics for thick plate cutting within the same system.
            </p>
            <p>
              The cost differential is significant: single-mode fiber lasers typically cost 50-100% more than equivalent-power 
              multi-mode systems. For job shops handling diverse work, a 4kW multi-mode laser (M² ≈ 2.0) at $75,000 often provides 
              better ROI than a 3kW single-mode laser (M² ≈ 1.1) at $90,000, despite the lower power, due to versatility across 
              thickness ranges.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Long-Term M² Stability & Laser Lifetime Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              An often-overlooked aspect of M² is its stability over the laser's operational lifetime. High-quality fiber lasers 
              from manufacturers like IPG, Trumpf, and nLIGHT maintain M² within ±5% over 100,000+ hours of operation. Lower-quality 
              systems may experience M² degradation of 20-30% within 20,000-30,000 hours, significantly impacting cutting performance 
              and requiring earlier replacement or costly refurbishment.
            </p>
            <p>
              M² degradation typically stems from: fiber connector contamination, thermal lens effects in fiber components, pump 
              diode aging, and fiber core damage from back-reflections. Regular maintenance, proper cooling, and quality optics 
              minimize degradation. When evaluating equipment, request long-term M² stability data, not just initial specifications.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 3. M² Impact on Cutting Performance */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. M² Factor Impact on Cutting Performance</h2>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3.1 Focus Spot Size Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                M² value directly determines the minimum achievable focused spot diameter. Lower M² enables smaller spots with 
                higher energy density, critical for precision cutting and high-speed thin material processing.
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded border border-blue-200 dark:border-blue-800">
                <h5 className="font-semibold mb-3 text-blue-900 dark:text-blue-200">Practical Calculation Example</h5>
                <div className="space-y-2 text-xs font-mono">
                  <div className="font-semibold">Given: λ=1064nm, f=127mm, D=20mm</div>
                  <div className="mt-3 space-y-1.5 pl-2">
                    <div>M²=1.05 (single-mode): <strong className="text-green-700 dark:text-green-400">d ≈ 0.09 mm</strong></div>
                    <div>M²=1.8 (hybrid mode): <strong className="text-blue-700 dark:text-blue-400">d ≈ 0.15 mm</strong></div>
                    <div>M²=2.5 (multimode): <strong className="text-orange-700 dark:text-orange-400">d ≈ 0.21 mm</strong></div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground">
                Larger spot diameter reduces energy density, requiring either reduced cutting speed or increased laser power to 
                maintain equivalent performance. For 3mm stainless steel, increasing spot from 0.09mm to 0.21mm typically requires 
                30-35% speed reduction or 40-50% power increase.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3.2 Cutting Quality Impact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded border border-green-200 dark:border-green-800">
                <strong className="text-green-700 dark:text-green-300">High-Quality Beam (M² &lt; 1.2):</strong>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc text-green-800 dark:text-green-400">
                  <li>Smooth, fine edge finish (Ra &lt; 6.3μm achievable)</li>
                  <li>Ideal for precision thin-sheet cutting (0.5-3mm)</li>
                  <li>Excellent small hole capability (diameter ≥ thickness)</li>
                  <li>Sharp corner quality with minimal rounding</li>
                </ul>
              </div>
              
              <div className="p-3 bg-orange-50 dark:bg-orange-950/30 rounded border border-orange-200 dark:border-orange-800">
                <strong className="text-orange-700 dark:text-orange-300">Multimode Beam (M² = 1.8-2.5):</strong>
                <ul className="mt-2 space-y-1.5 ml-4 list-disc text-orange-800 dark:text-orange-400">
                  <li>Moderate edge quality (Ra 6.3-12.5μm typical)</li>
                  <li>Better suited for thick plate cutting (12-30mm)</li>
                  <li>More uniform energy distribution through thickness</li>
                  <li>Higher tolerance to focus position variations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">3.3 Depth of Focus (DOF) Impact</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              Depth of Focus (DOF) is the axial distance range over which the beam diameter remains within 1.414× (√2) of its 
              minimum value. DOF directly affects tolerance to focus position errors and material surface variations.
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-sm">
              <div className="font-semibold mb-2">Depth of Focus Formula:</div>
              <div>DOF = ± (π × w₀² × M²) / (2 × λ)</div>
              <div className="mt-3 text-xs text-muted-foreground">
                Note: DOF is proportional to M², so higher M² provides greater focus tolerance
              </div>
            </div>

            <div className="grid gap-3 text-sm mt-4">
              <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800">
                <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <strong className="text-green-800 dark:text-green-300">Large DOF (Higher M² = 2.0-2.5):</strong>
                  <p className="mt-1.5 text-green-700 dark:text-green-400">
                    High tolerance to focus position variations. Ideal for thick plate cutting, uneven materials, and applications 
                    with thermal warping. DOF typically 6-10mm for multimode 6kW fiber laser.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                <svg className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <strong className="text-blue-800 dark:text-blue-300">Small DOF (Lower M² = 1.05-1.15):</strong>
                  <p className="mt-1.5 text-blue-700 dark:text-blue-400">
                    Concentrated energy with high precision, but sensitive to focus position. Requires precise height control and 
                    flat materials. DOF typically 2-4mm for single-mode 3kW fiber laser. Demands capacitive height sensors or 
                    active focus control.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4. M² Values by Laser Type */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. M² Value Ranges by Laser Type</h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300 bg-gray-100 dark:bg-gray-800">
                    <th className="text-left py-3 px-4 font-semibold">Laser Type</th>
                    <th className="text-left py-3 px-4 font-semibold">Typical M² Range</th>
                    <th className="text-left py-3 px-4 font-semibold">Beam Characteristics</th>
                    <th className="text-left py-3 px-4 font-semibold">Primary Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 font-medium">Single-Mode Fiber Laser</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        1.05 - 1.15
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">Exceptional quality, near-Gaussian TEM₀₀ mode</td>
                    <td className="py-3 px-4 text-xs">Precision cutting, marking, micromachining, thin materials (&lt;3mm)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 font-medium">Multimode Fiber Laser</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        1.8 - 2.5
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">Uniform energy distribution, large depth of focus</td>
                    <td className="py-3 px-4 text-xs">Thick plate cutting (10-30mm), welding, cladding, general fabrication</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 font-medium">CO₂ Laser</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        1.0 - 1.1
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">High quality, excellent stability, long wavelength (10.6μm)</td>
                    <td className="py-3 px-4 text-xs">Universal cutting (non-metals + metals), engraving, marking, organic materials</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 font-medium">Disk Laser (Trumpf TruDisk)</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        1.8 - 2.2
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">High power capability, good beam quality balance</td>
                    <td className="py-3 px-4 text-xs">Welding, cutting, surface treatment, high-power applications (4-16kW)</td>
                  </tr>
                  <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-4 font-medium">Direct Diode Laser</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                        10 - 50
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">Poor beam quality, but compact and efficient</td>
                    <td className="py-3 px-4 text-xs">Pump sources for fiber/disk lasers, heat treatment, plastic welding</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-900 rounded text-xs text-muted-foreground">
              <strong>Data Sources:</strong> IPG Photonics YLS/YLR Series (single-mode: M²&lt;1.1, multimode: M²≈2.0), 
              Trumpf TruFiber Series (M²=1.8-2.3), nLIGHT AFX Series (M²&lt;1.15 for single-mode), Raycus RFL Series (M²≈2.0-2.5), 
              Coherent HighLight FL Series (M²&lt;1.2).
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 5. Laser Selection Based on M² */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Laser Selection Based on M² Value</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Application-Based Selection Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h4 className="font-semibold text-base text-blue-900 dark:text-blue-200">
                    Precision Applications → Choose M² &lt; 1.2
                  </h4>
                </div>
                <ul className="space-y-1.5 text-blue-800 dark:text-blue-300 ml-2">
                  <li>• Thin-sheet precision cutting (≤3mm): stainless steel, carbon steel, aluminum</li>
                  <li>• Small hole cutting (diameter &lt; material thickness): electronics, jewelry</li>
                  <li>• Fine marking and engraving: serial numbers, barcodes, detailed graphics</li>
                  <li>• Electronics industry, medical devices, aerospace precision components</li>
                  <li>• Typical lasers: IPG YLS single-mode (M²&lt;1.1), nLIGHT AFX (M²&lt;1.15)</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h4 className="font-semibold text-base text-green-900 dark:text-green-200">
                    General Fabrication → Choose M² = 1.5-2.0
                  </h4>
                </div>
                <ul className="space-y-1.5 text-green-800 dark:text-green-300 ml-2">
                  <li>• Medium-thickness cutting (3-12mm): balanced speed and quality</li>
                  <li>• Sheet metal fabrication: enclosures, brackets, chassis</li>
                  <li>• Optimal balance between precision and efficiency for mixed production</li>
                  <li>• Manufacturing mainstream applications: 70-80% of job shops</li>
                  <li>• Typical lasers: Trumpf TruFiber (M²≈1.8), Raycus RFL (M²≈2.0), Bodor hybrid mode</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border-2 border-orange-300 dark:border-orange-700">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h4 className="font-semibold text-base text-orange-900 dark:text-orange-200">
                    Thick Plate & Welding → Choose M² = 2.0-3.0
                  </h4>
                </div>
                <ul className="space-y-1.5 text-orange-800 dark:text-orange-300 ml-2">
                  <li>• Thick plate cutting (12-30mm): construction equipment, shipbuilding components</li>
                  <li>• Welding applications: deep penetration, wide seam, reduced spatter</li>
                  <li>• High tolerance to focus position variations (±2-3mm DOF)</li>
                  <li>• Heavy industry, shipbuilding, infrastructure, pressure vessel fabrication</li>
                  <li>• Typical lasers: IPG YLR multimode (M²≈2.3), Trumpf TruDisk (M²≈2.0), high-power fiber (8-15kW)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost vs. Performance Trade-off Analysis</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>
              Generally, lasers with lower M² values require more advanced technology and command higher prices. Selection requires 
              finding the optimal balance between cost and performance based on specific application requirements and production volume.
            </p>
            
            <div className="grid gap-4 md:grid-cols-2 text-sm">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/30 dark:to-gray-900 rounded-lg border border-blue-200 dark:border-blue-800">
                <strong className="text-blue-900 dark:text-blue-200">Single-Mode Fiber Laser</strong> (M² ≈ 1.1)
                <div className="mt-2.5 space-y-1.5 text-xs text-blue-800 dark:text-blue-300">
                  <div><strong>Price:</strong> 1.5-2× cost of equivalent-power multimode</div>
                  <div><strong>Example:</strong> 3kW single-mode ≈ $85k-110k vs. 3kW multimode ≈ $55k-70k</div>
                  <div><strong>Best For:</strong> High-precision requirements, thin materials, sufficient budget</div>
                  <div><strong>ROI:</strong> Faster cutting speeds on thin materials (0.5-3mm) offset higher initial cost</div>
                </div>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-50 to-white dark:from-green-950/30 dark:to-gray-900 rounded-lg border border-green-200 dark:border-green-800">
                <strong className="text-green-900 dark:text-green-200">Multimode Fiber Laser</strong> (M² ≈ 2.0)
                <div className="mt-2.5 space-y-1.5 text-xs text-green-800 dark:text-green-300">
                  <div><strong>Price:</strong> Standard baseline pricing</div>
                  <div><strong>Example:</strong> 6kW multimode ≈ $80k-110k (best value for most shops)</div>
                  <div><strong>Best For:</strong> General cutting, cost-performance optimization, mixed materials</div>
                  <div><strong>ROI:</strong> Lower initial investment, versatile across thickness ranges (2-20mm)</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-300 dark:border-yellow-700 text-xs">
              <strong className="text-yellow-900 dark:text-yellow-200">Procurement Tip:</strong>
              <p className="mt-1.5 text-yellow-800 dark:text-yellow-300">
                For job shops with diverse work, a 6kW multimode laser (M²≈2.0) at $95k often provides better long-term value than 
                a 3kW single-mode laser (M²≈1.1) at $100k, despite the lower beam quality. The higher power enables processing thicker 
                materials (up to 20mm steel) while still delivering acceptable quality on thin sheets with optimized parameters.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 6. M² Relationship to Other Beam Parameters */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. M² Relationship to Other Beam Parameters</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">M² and Beam Parameter Product (BPP)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                <strong>Beam Parameter Product (BPP)</strong> is another commonly used beam quality metric, representing the product 
                of beam waist radius and far-field divergence half-angle. BPP is wavelength-dependent, unlike M².
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                <div className="font-semibold mb-2">BPP Formula:</div>
                <div>BPP = M² × (λ / π) × 10³</div>
                <div className="text-xs text-muted-foreground mt-2">Units: mm·mrad</div>
              </div>
              <p className="text-muted-foreground">
                Lower BPP indicates better beam quality. BPP is the physical manifestation of M², directly affecting achievable 
                focus spot size and thus cutting/welding capability.
              </p>
              <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded border border-blue-200 dark:border-blue-800 text-xs">
                <strong className="text-blue-900 dark:text-blue-200">Calculation Example:</strong>
                <div className="mt-1.5 space-y-1 text-blue-800 dark:text-blue-300">
                  <div>1064nm fiber laser, M²=1.8</div>
                  <div>BPP = 1.8 × (1.064/π) × 10³ ≈ <strong>0.61 mm·mrad</strong></div>
                  <div className="mt-1.5 text-muted-foreground">For M²=1.1: BPP ≈ 0.37 mm·mrad (40% better focusability)</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">M² and Laser Brightness</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                <strong>Laser Brightness</strong> is defined as power per unit area per unit solid angle (W/mm²·sr). Brightness 
                is inversely proportional to the square of M², making it a critical performance indicator.
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded font-mono text-sm">
                <div className="font-semibold mb-2">Brightness Relationship:</div>
                <div>Brightness ∝ P / (M²)²</div>
              </div>
              <p className="text-muted-foreground">
                This means that doubling M² reduces brightness by 4×. Therefore, a single-mode laser with lower power can have 
                higher brightness than a multimode laser with significantly higher power.
              </p>
              <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded border border-green-200 dark:border-green-800 text-xs">
                <strong className="text-green-900 dark:text-green-200">Practical Comparison:</strong>
                <div className="mt-1.5 space-y-1.5 text-green-800 dark:text-green-300">
                  <div>3kW single-mode (M²=1.1): Brightness ∝ 3000/1.21 ≈ <strong>2479 units</strong></div>
                  <div>6kW multimode (M²=2.0): Brightness ∝ 6000/4.0 = <strong>1500 units</strong></div>
                  <div className="mt-1.5 text-muted-foreground">Despite 2× power, the multimode laser has only 60% the brightness of single-mode</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Comprehensive Evaluation Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4 leading-relaxed">
              When selecting laser equipment, M² should not be the sole consideration. A comprehensive evaluation must account 
              for multiple interdependent factors that collectively determine processing capability and long-term value.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded">
                <span className="text-blue-600 font-bold text-lg flex-shrink-0">1</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">Application Requirements:</strong>
                  <span className="text-muted-foreground ml-1">Precision thin-sheet cutting, thick plate cutting, or general fabrication? Material types and thickness ranges?</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded">
                <span className="text-green-600 font-bold text-lg flex-shrink-0">2</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">Laser Power:</strong>
                  <span className="text-muted-foreground ml-1">For equivalent M², higher power enables thicker materials and faster speeds. 6kW multimode (M²=2.0) often outperforms 3kW single-mode (M²=1.1) on materials &gt;8mm.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded">
                <span className="text-purple-600 font-bold text-lg flex-shrink-0">3</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">Wavelength:</strong>
                  <span className="text-muted-foreground ml-1">Fiber lasers (1064nm) excel on metals, CO₂ (10.6μm) on non-metals. Material absorption rates vary significantly by wavelength.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded">
                <span className="text-orange-600 font-bold text-lg flex-shrink-0">4</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">Long-Term M² Stability:</strong>
                  <span className="text-muted-foreground ml-1">Premium lasers maintain M² within ±5% over 100,000+ hours. Budget systems may degrade 20-30% within 30,000 hours, significantly impacting performance.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded">
                <span className="text-red-600 font-bold text-lg flex-shrink-0">5</span>
                <div>
                  <strong className="text-gray-900 dark:text-gray-100">Total Cost of Ownership:</strong>
                  <span className="text-muted-foreground ml-1">Consider initial purchase, consumables (nozzles, lenses, gas), maintenance, power consumption, and productivity over 5-7 year lifecycle.</span>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Related Tools & Resources */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Related Calculators
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <Link href="/tools/laser-type-wizard" className="text-blue-600 hover:text-blue-700 font-medium underline">
                Laser Type Selection Wizard
              </Link>
              <p className="text-xs text-muted-foreground mt-1">
                Interactive tool to recommend optimal laser type based on your application requirements, material types, and budget
              </p>
            </div>
            <div>
              <Link href="/tools/power-calculator" className="text-blue-600 hover:text-blue-700 font-medium underline">
                Laser Power Requirement Calculator
              </Link>
              <p className="text-xs text-muted-foreground mt-1">
                Calculate required laser power based on material type, thickness, and desired cutting speed
              </p>
            </div>
            <div>
              <Link href="/tools/power-density-calculator" className="text-blue-600 hover:text-blue-700 font-medium underline">
                Power Density Calculator
              </Link>
              <p className="text-xs text-muted-foreground mt-1">
                Determine power density at focus based on M², wavelength, and optical system parameters
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-600 transition-colors">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg className="w-5 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Related Guides
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <Link href="/guides/focus-position-guide" className="text-green-600 hover:text-green-700 font-medium underline">
                Focus Position Adjustment Guide
              </Link>
              <p className="text-xs text-muted-foreground mt-1">
                Detailed guide on how to properly set and adjust focus position for different materials and thicknesses
              </p>
            </div>
            <div>
              <Link href="/guides/wavelength-absorption" className="text-green-600 hover:text-green-700 font-medium underline">
                Wavelength Absorption Properties
              </Link>
              <p className="text-xs text-muted-foreground mt-1">
                Material absorption rates for different laser wavelengths (1064nm fiber, 10.6μm CO₂, etc.)
              </p>
            </div>
            <div>
              <Link href="/guides/co2-vs-fiber-laser" className="text-green-600 hover:text-green-700 font-medium underline">
                CO₂ vs Fiber Laser Comparison
              </Link>
              <p className="text-xs text-muted-foreground mt-1">
                Comprehensive technical comparison including beam quality, cost, maintenance, and application suitability
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Sources & Methodology */}
      <Card className="mt-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-300 dark:border-gray-700">
        <CardContent className="pt-6 text-sm">
          <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Data Sources & Methodology</h3>
          <div className="text-muted-foreground space-y-3">
            <p>
              <strong className="text-gray-800 dark:text-gray-200">International Standards:</strong>
            </p>
            <ul className="ml-4 space-y-1.5 text-xs list-disc">
              <li>ISO 11146-1:2021 - Lasers and laser-related equipment — Test methods for laser beam widths, divergence angles and beam propagation ratios — Part 1: Stigmatic and simple astigmatic beams</li>
              <li>ISO 11146-2:2021 - Part 2: General astigmatic beams</li>
            </ul>
            
            <p className="pt-2">
              <strong className="text-gray-800 dark:text-gray-200">Manufacturer Technical Documentation:</strong>
            </p>
            <ul className="ml-4 space-y-1.5 text-xs list-disc">
              <li>IPG Photonics - YLS/YLR Series Technical Specifications and Application Notes (single-mode M²&lt;1.1, multimode M²≈2.0-2.3)</li>
              <li>Trumpf - TruFiber and TruDisk Series Datasheets (M²=1.8-2.3 typical)</li>
              <li>nLIGHT - AFX Series Beam Quality Specifications (M²&lt;1.15 for single-mode variants)</li>
              <li>Raycus - RFL Series Performance Data (M²≈2.0-2.5 for multimode systems)</li>
              <li>Coherent - HighLight FL Series Technical Documentation (M²&lt;1.2 for single-mode)</li>
            </ul>

            <p className="pt-2">
              <strong className="text-gray-800 dark:text-gray-200">Industry Publications & Research:</strong>
            </p>
            <ul className="ml-4 space-y-1.5 text-xs list-disc">
              <li>Laser Institute of America (LIA) - Industrial Laser Solutions and Technical Papers</li>
              <li>SPIE Digital Library - Beam Quality and Propagation Research Papers</li>
              <li>Applied Optics journal articles on beam quality measurement and characterization</li>
            </ul>

            <div className="pt-4 border-t border-gray-300 dark:border-gray-600 text-xs">
              <strong className="text-gray-900 dark:text-gray-100">Last Updated:</strong> {new Date().toISOString().slice(0, 10)} | 
              <strong className="ml-3 text-gray-900 dark:text-gray-100">Disclaimer:</strong> All data presented is based on international standards and 
              verified manufacturer specifications as of publication date. Actual performance may vary by specific model, configuration, 
              and operating conditions. Always verify specifications with manufacturers before purchase decisions.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


