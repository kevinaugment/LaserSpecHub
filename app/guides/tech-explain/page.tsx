import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generatePageMetadata } from '@/lib/utils/metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { KerfEstimator } from './kerf-estimator';
import { PowerDensityMini } from './power-density-mini';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Technical Specifications Explained - Complete Professional Guide',
  description:
    'Comprehensive guide to laser cutting technical specifications: beam quality, wavelength, focal length, spot size, kerf width, power density, pulse frequency, cooling systems, assist gas, safety classifications, and maintenance intervals.',
  path: '/guides/tech-explain',
  keywords: [
    'laser specifications',
    'beam quality',
    'laser wavelength',
    'positioning accuracy',
    'focal length',
    'spot size',
    'kerf width',
    'power density',
    'pulse frequency',
    'beam divergence',
    'cooling systems',
    'assist gas specifications',
    'laser safety classification',
    'maintenance intervals',
    'technical terms',
  ],
});

export default function TechExplainPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <article className="prose max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Laser Technical Specifications Explained
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-8">
          Comprehensive professional guide to laser cutting technical specifications. 
          Understand beam quality, wavelength, focal parameters, power density, and all critical 
          specifications that impact cutting performance and equipment selection.
        </p>

        {/* Section 1: Beam Quality (M²) - ENHANCED */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Beam Quality (M²)</h2>
          <p className="text-gray-700 mb-4">
            The M² (M-squared) value indicates how close the laser beam is to a perfect Gaussian beam. 
            Lower values mean better beam quality. M² directly determines the minimum achievable spot size.
          </p>
          
          <div className="not-prose mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Spot Size Formula</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                  d = (4 × M² × λ × f) / (π × D)
                </div>
                <div className="mt-3 text-sm text-gray-600 space-y-1">
                  <p>Where:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>d = focused spot diameter (mm)</li>
                    <li>M² = beam quality factor</li>
                    <li>λ = wavelength (μm)</li>
                    <li>f = focal length (mm)</li>
                    <li>D = collimated beam diameter (mm)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Laser Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Typical M² Range</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Beam Characteristics</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Best Applications</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Single-Mode Fiber</td>
                    <td className="border border-gray-300 px-4 py-2">1.05 - 1.15</td>
                    <td className="border border-gray-300 px-4 py-2">Near-perfect Gaussian</td>
                    <td className="border border-gray-300 px-4 py-2">Precision thin sheet cutting</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Multi-Mode Fiber</td>
                    <td className="border border-gray-300 px-4 py-2">1.8 - 2.5</td>
                    <td className="border border-gray-300 px-4 py-2">Uniform energy distribution</td>
                    <td className="border border-gray-300 px-4 py-2">Thick plate cutting, welding</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">CO₂ Laser</td>
                    <td className="border border-gray-300 px-4 py-2">1.0 - 1.1</td>
                    <td className="border border-gray-300 px-4 py-2">Excellent beam quality</td>
                    <td className="border border-gray-300 px-4 py-2">Non-metals, general cutting</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Disk Laser</td>
                    <td className="border border-gray-300 px-4 py-2">1.8 - 2.2</td>
                    <td className="border border-gray-300 px-4 py-2">High power, good quality</td>
                    <td className="border border-gray-300 px-4 py-2">Welding, thick cutting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900">
              <strong>Impact:</strong> Better beam quality (lower M²) enables finer details, 
              smaller focus spot, and higher precision cutting. For thin materials (&lt;3mm), M² &lt; 1.2 
              provides 30-40% faster cutting speeds.
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Learn more: <Link href="/guides/beam-quality-guide" className="text-primary-600 hover:text-primary-700 underline">Complete Beam Quality Guide</Link>
          </p>
        </section>

        {/* Section 2: Wavelength - ENHANCED */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Wavelength</h2>
          <p className="text-gray-700 mb-4">
            The wavelength of the laser beam determines which materials it can cut effectively. 
            Material absorption rates vary dramatically with wavelength, directly impacting cutting efficiency and power requirements.
          </p>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Material</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Fiber (1.06 μm)</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">CO₂ (10.6 μm)</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Recommended Laser</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Mild Steel</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">88-92%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-50">8-10%</td>
                    <td className="border border-gray-300 px-4 py-2">Fiber</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Stainless Steel</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">90-92%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-50">10-12%</td>
                    <td className="border border-gray-300 px-4 py-2">Fiber</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Aluminum</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-50">8-12%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-50">2-5%</td>
                    <td className="border border-gray-300 px-4 py-2">Fiber (high power)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Copper</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-50">5-8%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-50">2-4%</td>
                    <td className="border border-gray-300 px-4 py-2">Green laser preferred</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Acrylic</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-50">5-10%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">90-95%</td>
                    <td className="border border-gray-300 px-4 py-2">CO₂</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Wood</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-red-50">10-15%</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">85-92%</td>
                    <td className="border border-gray-300 px-4 py-2">CO₂</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900 mb-2">
              <strong>Temperature Dependence:</strong> Absorption rates increase with temperature. 
              Cold aluminum absorbs ~8% at 1.06 μm, but absorption increases to 15-25% once heated 
              to 400-600°C during cutting. This is why piercing reflective metals is more challenging 
              than continuous cutting.
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Learn more: <Link href="/guides/wavelength-absorption" className="text-primary-600 hover:text-primary-700 underline">Wavelength Absorption Chart</Link> | <Link href="/guides/co2-vs-fiber-laser" className="text-primary-600 hover:text-primary-700 underline">CO₂ vs Fiber Comparison</Link>
          </p>
        </section>

        {/* Section 3: Positioning vs Repeat Accuracy - ENHANCED */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Positioning vs Repeat Accuracy</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="not-prose">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Positioning Accuracy</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">
                  <p className="mb-3">
                    How accurately the machine can move to a commanded position. 
                    Affects how well the cut matches the design dimensions.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-2">Typical Values:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Entry-level: ±0.05 - ±0.1 mm</li>
                      <li>• Industrial: ±0.02 - ±0.05 mm</li>
                      <li>• High-precision: ±0.01 - ±0.02 mm</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="not-prose">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Repeat Accuracy</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">
                  <p className="mb-3">
                    How consistently the machine returns to the same position. 
                    Critical for multi-pass operations and part-to-part consistency.
                  </p>
                  <div className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold mb-2">Typical Values:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Entry-level: ±0.03 mm</li>
                      <li>• Industrial: ±0.01 - ±0.02 mm</li>
                      <li>• High-precision: ±0.005 mm</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Application</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Required Accuracy</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Tolerance Impact</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">General fabrication</td>
                    <td className="border border-gray-300 px-4 py-2">±0.1 mm</td>
                    <td className="border border-gray-300 px-4 py-2">Standard sheet metal tolerances</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Precision parts</td>
                    <td className="border border-gray-300 px-4 py-2">±0.05 mm</td>
                    <td className="border border-gray-300 px-4 py-2">Tight-fit assemblies</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Electronics enclosures</td>
                    <td className="border border-gray-300 px-4 py-2">±0.02 mm</td>
                    <td className="border border-gray-300 px-4 py-2">Precise mounting holes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Medical devices</td>
                    <td className="border border-gray-300 px-4 py-2">±0.01 mm</td>
                    <td className="border border-gray-300 px-4 py-2">Critical dimensional control</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900">
              <strong>Key Difference:</strong> Positioning accuracy affects absolute dimensional accuracy, 
              while repeat accuracy affects consistency between identical parts. High repeat accuracy 
              with calibration can compensate for moderate positioning accuracy.
            </p>
          </div>
        </section>

        {/* Section 4: Power Consumption vs Laser Power - ENHANCED */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Power Consumption vs Laser Power</h2>
          <p className="text-gray-700 mb-4">
            Don't confuse total power consumption with laser output power. Understanding efficiency 
            is critical for operating cost calculations and facility electrical planning.
          </p>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Laser Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-center">Wall-Plug Efficiency</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">6kW Output Example</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Total Consumption</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Fiber Laser</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">25-35%</td>
                    <td className="border border-gray-300 px-4 py-2">6kW output</td>
                    <td className="border border-gray-300 px-4 py-2">~20-25 kW total</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">CO₂ Laser</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-50">8-15%</td>
                    <td className="border border-gray-300 px-4 py-2">6kW output</td>
                    <td className="border border-gray-300 px-4 py-2">~40-50 kW total</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Disk Laser</td>
                    <td className="border border-gray-300 px-4 py-2 text-center bg-green-50">20-25%</td>
                    <td className="border border-gray-300 px-4 py-2">6kW output</td>
                    <td className="border border-gray-300 px-4 py-2">~25-30 kW total</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="not-prose mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Operating Cost Example</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <p className="mb-3">10,000 hours/year operation at $0.12/kWh electricity rate:</p>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 bg-green-50 rounded">
                    <span className="font-medium">6kW Fiber Laser:</span>
                    <span>22 kW × 10,000 hrs × $0.12 = <strong>$26,400/year</strong></span>
                  </div>
                  <div className="flex justify-between p-2 bg-yellow-50 rounded">
                    <span className="font-medium">6kW CO₂ Laser:</span>
                    <span>45 kW × 10,000 hrs × $0.12 = <strong>$54,000/year</strong></span>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    Fiber laser saves ~$27,600/year in electricity costs for equivalent output power.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Calculate costs: <Link href="/tools/cost-estimator" className="text-primary-600 hover:text-primary-700 underline">Operating Cost Estimator</Link>
          </p>
        </section>

        {/* Section 5: Cutting Speed Parameters - ENHANCED */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cutting Speed Parameters</h2>
          <p className="text-gray-700 mb-4">
            Cutting speed specifications are always given for specific conditions. Understanding these 
            conditions is essential for realistic performance expectations.
          </p>

          <div className="not-prose mb-4">
            <Card variant="bordered">
              <CardContent className="p-6">
                <div className="text-sm space-y-2 text-gray-700">
                  <p><strong>Example:</strong> &quot;Steel 10mm @ 2.8 m/min&quot;</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Material: Mild steel</li>
                    <li>Thickness: 10mm</li>
                    <li>Speed: 2.8 meters per minute</li>
                    <li>Conditions: Oxygen assist gas, standard quality</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Material</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Thickness</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">6kW Fiber</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Assist Gas</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Mild Steel</td>
                    <td className="border border-gray-300 px-4 py-2">3mm</td>
                    <td className="border border-gray-300 px-4 py-2">8-12 m/min</td>
                    <td className="border border-gray-300 px-4 py-2">Oxygen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Mild Steel</td>
                    <td className="border border-gray-300 px-4 py-2">10mm</td>
                    <td className="border border-gray-300 px-4 py-2">2.5-3.5 m/min</td>
                    <td className="border border-gray-300 px-4 py-2">Oxygen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Stainless Steel</td>
                    <td className="border border-gray-300 px-4 py-2">3mm</td>
                    <td className="border border-gray-300 px-4 py-2">6-9 m/min</td>
                    <td className="border border-gray-300 px-4 py-2">Nitrogen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Stainless Steel</td>
                    <td className="border border-gray-300 px-4 py-2">8mm</td>
                    <td className="border border-gray-300 px-4 py-2">1.5-2.5 m/min</td>
                    <td className="border border-gray-300 px-4 py-2">Nitrogen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Aluminum</td>
                    <td className="border border-gray-300 px-4 py-2">3mm</td>
                    <td className="border border-gray-300 px-4 py-2">4-7 m/min</td>
                    <td className="border border-gray-300 px-4 py-2">Nitrogen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900 mb-2">
              <strong>Factors Affecting Speed:</strong>
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>• Laser power and beam quality</li>
              <li>• Assist gas type, pressure, and purity</li>
              <li>• Focus position and nozzle standoff</li>
              <li>• Material surface condition and composition</li>
              <li>• Required edge quality (speed vs quality trade-off)</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Learn more: <Link href="/guides/cutting-speed-chart" className="text-primary-600 hover:text-primary-700 underline">Complete Cutting Speed Chart</Link>
          </p>
        </section>

        {/* Section 6: Control Systems & Integration - REWRITTEN (OPMT removed) */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Control Systems & Integration</h2>
          <p className="text-gray-700 mb-4">
            Control system capability directly impacts cut quality, speed optimization, and ease of use. 
            Advanced controllers can dynamically adjust parameters such as focus position, assist gas pressure, 
            and duty cycle based on real-time sensor feedback.
          </p>

          <div className="not-prose mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Common CNC Controller Types</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Industrial PC-Based Controllers</p>
                    <p className="text-xs text-gray-600">Beckhoff TwinCAT, Siemens Sinumerik, Fanuc - High performance, extensive I/O, advanced motion control</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Dedicated Laser Controllers</p>
                    <p className="text-xs text-gray-600">Cypcut, Fscut, RayTools - Laser-specific features, integrated parameter libraries, user-friendly interfaces</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Embedded Controllers</p>
                    <p className="text-xs text-gray-600">PA8000, Ruida, Leetro - Cost-effective, reliable, suitable for standard applications</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-gray-700 mb-3">
            <strong>Key Integration Considerations:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>Parameter libraries for common materials (reduces setup time)</li>
            <li>Auto-focus and height sensing capabilities</li>
            <li>Compatibility with CAM/nesting software (e.g., SigmaNEST, Lantek, Radan)</li>
            <li>Post-processor availability for your CAD/CAM workflow</li>
            <li>Adaptive cutting modes (power modulation, speed optimization)</li>
            <li>Edge quality profiles (high-speed vs high-quality modes)</li>
            <li>Remote monitoring and diagnostics support</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900">
              <strong>Tip:</strong> Evaluate control systems based on your specific workflow. 
              A sophisticated controller with poor CAM integration may be less productive than 
              a simpler system with seamless software compatibility.
            </p>
          </div>
        </section>

        {/* Section 7: NEW - Focal Length & Spot Size */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Focal Length & Spot Size</h2>
          <p className="text-gray-700 mb-4">
            Focal length is the distance from the focusing lens to the focal point. It directly 
            determines spot size and depth of focus, impacting cutting precision and material thickness capability.
          </p>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Focal Length</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Spot Size</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Depth of Focus</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Best Applications</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">5&quot; (127mm)</td>
                    <td className="border border-gray-300 px-4 py-2">Small (0.08-0.12mm)</td>
                    <td className="border border-gray-300 px-4 py-2">Small (±0.2mm)</td>
                    <td className="border border-gray-300 px-4 py-2">Thin materials (&lt;3mm), precision cutting</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">7.5&quot; (190mm)</td>
                    <td className="border border-gray-300 px-4 py-2">Medium (0.12-0.18mm)</td>
                    <td className="border border-gray-300 px-4 py-2">Medium (±0.4mm)</td>
                    <td className="border border-gray-300 px-4 py-2">Standard cutting (3-12mm), general purpose</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">10&quot; (254mm)</td>
                    <td className="border border-gray-300 px-4 py-2">Large (0.18-0.25mm)</td>
                    <td className="border border-gray-300 px-4 py-2">Large (±0.6mm)</td>
                    <td className="border border-gray-300 px-4 py-2">Thick materials (12-25mm), tolerant of focus drift</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="not-prose mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Spot Size Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded font-mono text-sm mb-3">
                  d = (4 × M² × λ × f) / (π × D)
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Where:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>d = focused spot diameter (mm)</li>
                    <li>M² = beam quality factor</li>
                    <li>λ = wavelength (μm, typically 1.064 for fiber)</li>
                    <li>f = focal length (mm)</li>
                    <li>D = collimated beam diameter before lens (mm)</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded text-xs">
                  <strong>Example:</strong> M²=1.8, λ=1.064μm, f=127mm, D=20mm → d ≈ 0.15mm
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900">
              <strong>Trade-off:</strong> Short focal length = smaller spot = higher precision but less tolerance 
              for material flatness. Long focal length = larger spot = better for thick materials but lower 
              precision on thin sheets.
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Learn more: <Link href="/guides/focus-position-guide" className="text-primary-600 hover:text-primary-700 underline">Focus Position Guide</Link> | <Link href="/tools/power-density-calculator" className="text-primary-600 hover:text-primary-700 underline">Power Density Calculator</Link>
          </p>
        </section>

        {/* Section 8: NEW - Kerf Width */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Kerf Width</h2>
          <p className="text-gray-700 mb-4">
            Kerf width is the width of material removed during the cutting process. It affects part 
            dimensional accuracy, material utilization, and assembly fit. Understanding kerf is essential 
            for precise manufacturing.
          </p>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Laser Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Typical Kerf Width</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Material Thickness</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Factors</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Fiber Laser</td>
                    <td className="border border-gray-300 px-4 py-2">0.1 - 0.3mm</td>
                    <td className="border border-gray-300 px-4 py-2">1-20mm metals</td>
                    <td className="border border-gray-300 px-4 py-2">Spot size, assist gas, power</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">CO₂ Laser</td>
                    <td className="border border-gray-300 px-4 py-2">0.15 - 0.4mm</td>
                    <td className="border border-gray-300 px-4 py-2">1-25mm materials</td>
                    <td className="border border-gray-300 px-4 py-2">Wider for thick materials</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">High-Precision</td>
                    <td className="border border-gray-300 px-4 py-2">0.08 - 0.15mm</td>
                    <td className="border border-gray-300 px-4 py-2">&lt;3mm thin sheet</td>
                    <td className="border border-gray-300 px-4 py-2">Small spot, optimized parameters</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="not-prose mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Kerf Width Estimation</CardTitle>
              </CardHeader>
              <CardContent>
                <KerfEstimator />
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900 mb-2">
              <strong>Impact on Manufacturing:</strong>
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>• Part dimensions: Must account for kerf in CAD design (kerf compensation)</li>
              <li>• Material utilization: Larger kerf = more waste material</li>
              <li>• Assembly fit: Kerf variation affects tight-tolerance assemblies</li>
              <li>• Compensation: CAM software typically applies automatic kerf offset</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Learn more: <Link href="/tools/kerf-calculator" className="text-primary-600 hover:text-primary-700 underline">Kerf Calculator Tool</Link>
          </p>
        </section>

        {/* Section 9: NEW - Power Density */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Power Density</h2>
          <p className="text-gray-700 mb-4">
            Power density is the laser power per unit area at the focus spot. It determines which 
            processes (cutting, welding, marking) can be performed and directly impacts material processing speed and quality.
          </p>

          <div className="not-prose mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Power Density Calculation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded font-mono text-sm mb-3">
                  Power Density = P / (π × r²)
                </div>
                <div className="text-sm text-gray-600 space-y-1 mb-3">
                  <p>Where:</p>
                  <ul className="list-disc list-inside ml-2">
                    <li>P = Laser power (W)</li>
                    <li>r = Focus spot radius (mm)</li>
                    <li>Result = Power density (W/mm²)</li>
                  </ul>
                </div>
                <PowerDensityMini />
              </CardContent>
            </Card>
          </div>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Power Density Range</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Typical Application</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Example</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">&gt;1000 W/mm²</td>
                    <td className="border border-gray-300 px-4 py-2">Cutting</td>
                    <td className="border border-gray-300 px-4 py-2">6kW, 0.15mm spot → ~34,000 W/mm²</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">100-1000 W/mm²</td>
                    <td className="border border-gray-300 px-4 py-2">Welding</td>
                    <td className="border border-gray-300 px-4 py-2">4kW, 0.4mm spot → ~8,000 W/mm²</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">10-100 W/mm²</td>
                    <td className="border border-gray-300 px-4 py-2">Marking, Engraving</td>
                    <td className="border border-gray-300 px-4 py-2">50W, 0.2mm spot → ~800 W/mm²</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">&lt;10 W/mm²</td>
                    <td className="border border-gray-300 px-4 py-2">Surface Treatment</td>
                    <td className="border border-gray-300 px-4 py-2">Low power, large spot applications</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900">
              <strong>Critical Factor:</strong> Power density, not just total power, determines process capability. 
              A 3kW laser with 0.08mm spot (60,000 W/mm²) can cut faster than a 6kW laser with 0.3mm spot 
              (21,000 W/mm²) on thin materials. This is why beam quality (M²) is so important.
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Learn more: <Link href="/tools/power-density-calculator" className="text-primary-600 hover:text-primary-700 underline">Power Density Calculator</Link>
          </p>
        </section>

        {/* Section 10: NEW - Pulse Frequency & Duty Cycle */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pulse Frequency & Duty Cycle</h2>
          <p className="text-gray-700 mb-4">
            Lasers can operate in continuous wave (CW) or pulsed mode. Pulsed operation enables precise 
            control over energy delivery, reducing heat-affected zones and enabling cutting of reflective materials.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="not-prose">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Continuous Wave (CW)</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">
                  <p className="mb-3">Laser output is constant over time. Standard mode for most cutting applications.</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Constant power delivery</li>
                    <li>• Best for thick materials</li>
                    <li>• High average power</li>
                    <li>• Standard for 3kW+ systems</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="not-prose">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Pulsed Mode</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700">
                  <p className="mb-3">Laser output is modulated with pulses. Better control for precision and reflective materials.</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Peak power &gt; average power</li>
                    <li>• Reduced heat-affected zone</li>
                    <li>• Better for thin materials</li>
                    <li>• Effective for aluminum, copper</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Typical Range</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Application Impact</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Pulse Frequency</td>
                    <td className="border border-gray-300 px-4 py-2">1 Hz - 5000 Hz</td>
                    <td className="border border-gray-300 px-4 py-2">Higher frequency = smoother cut, lower peak power</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Duty Cycle</td>
                    <td className="border border-gray-300 px-4 py-2">10% - 90%</td>
                    <td className="border border-gray-300 px-4 py-2">Percentage of time laser is ON. Higher = more like CW</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Peak Power</td>
                    <td className="border border-gray-300 px-4 py-2">1.5× - 3× Average</td>
                    <td className="border border-gray-300 px-4 py-2">Short bursts enable higher peak for breakthrough</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900">
              <strong>Key Relationship:</strong> Peak Power = Average Power / Duty Cycle. A 6kW average laser 
              at 50% duty cycle has 12kW peak power, enabling better piercing of reflective materials. This is 
              why pulsed mode is often preferred for aluminum and copper cutting.
            </p>
          </div>
        </section>

        {/* Section 11: NEW - Beam Divergence */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Beam Divergence</h2>
          <p className="text-gray-700 mb-4">
            Beam divergence describes the rate at which the laser beam expands as it travels from the source. 
            Lower divergence means the beam stays more collimated over distance, critical for long beam delivery paths.
          </p>

          <div className="not-prose mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Understanding Divergence</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-3">
                <p>
                  Beam divergence is measured in milliradians (mrad) and represents the half-angle of beam expansion.
                </p>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="font-semibold mb-2">Typical Values:</p>
                  <ul className="space-y-1 text-xs">
                    <li>• Single-mode fiber lasers: 0.5 - 1.0 mrad</li>
                    <li>• Multi-mode fiber lasers: 1.5 - 2.5 mrad</li>
                    <li>• CO₂ lasers: 0.8 - 1.5 mrad</li>
                  </ul>
                </div>
                <p className="text-xs text-gray-600">
                  Beam divergence is directly related to M² and wavelength. Better beam quality (lower M²) 
                  produces lower divergence and better collimation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900">
              <strong>Impact:</strong> Lower divergence enables longer beam delivery paths without significant 
              beam expansion. This is why fiber lasers (delivered via fiber optic cable) can have very long 
              delivery paths, while CO₂ lasers using mirrors need shorter, carefully aligned beam paths.
            </p>
          </div>
        </section>

        {/* Section 12: NEW - Cooling Systems */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cooling Systems</h2>
          <p className="text-gray-700 mb-4">
            All lasers generate waste heat that must be removed. Inadequate cooling reduces performance, 
            shortens component life, and can cause system failure. Proper chiller sizing is critical.
          </p>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Laser Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Cooling Requirement</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">6kW Example</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Water Temp</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Fiber Laser</td>
                    <td className="border border-gray-300 px-4 py-2">3-4× output power</td>
                    <td className="border border-gray-300 px-4 py-2">18-24 kW chiller</td>
                    <td className="border border-gray-300 px-4 py-2">20-25°C</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">CO₂ Laser</td>
                    <td className="border border-gray-300 px-4 py-2">1.5-2× output power</td>
                    <td className="border border-gray-300 px-4 py-2">9-12 kW chiller</td>
                    <td className="border border-gray-300 px-4 py-2">18-22°C</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Disk Laser</td>
                    <td className="border border-gray-300 px-4 py-2">3-3.5× output power</td>
                    <td className="border border-gray-300 px-4 py-2">18-21 kW chiller</td>
                    <td className="border border-gray-300 px-4 py-2">18-23°C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="not-prose mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Key Cooling Parameters</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <ul className="space-y-2">
                  <li><strong>Flow Rate:</strong> Typically 15-30 liters/min for industrial systems</li>
                  <li><strong>Water Quality:</strong> Deionized or distilled water (conductivity &lt; 10 μS/cm)</li>
                  <li><strong>Temperature Stability:</strong> ±1-2°C for consistent performance</li>
                  <li><strong>Pressure:</strong> 2-4 bar typical operating pressure</li>
                  <li><strong>Ambient Conditions:</strong> Chiller must handle facility ambient temperature</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900">
              <strong>Critical:</strong> Undersized chillers cause thermal drift, reduced power, and premature 
              component failure. Always size chillers 20-30% above calculated requirement to handle peak loads 
              and high ambient temperatures.
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Calculate requirements: <Link href="/tools/chiller-calculator" className="text-primary-600 hover:text-primary-700 underline">Chiller Calculator</Link>
          </p>
        </section>

        {/* Section 13: NEW - Assist Gas Specifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Assist Gas Specifications</h2>
          <p className="text-gray-700 mb-4">
            Assist gas is critical for laser cutting. It removes molten material, protects optics, and 
            influences cut quality. Gas type, pressure, and purity directly impact cutting performance and operating costs.
          </p>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Gas Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Pressure Range</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Purity Requirement</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Oxygen (O₂)</td>
                    <td className="border border-gray-300 px-4 py-2">0.5 - 3 bar</td>
                    <td className="border border-gray-300 px-4 py-2">&gt;99.5%</td>
                    <td className="border border-gray-300 px-4 py-2">Mild steel (exothermic reaction boosts cutting)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Nitrogen (N₂)</td>
                    <td className="border border-gray-300 px-4 py-2">5 - 20 bar</td>
                    <td className="border border-gray-300 px-4 py-2">&gt;99.95%</td>
                    <td className="border border-gray-300 px-4 py-2">Stainless steel, aluminum (clean, oxide-free edges)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Air (Compressed)</td>
                    <td className="border border-gray-300 px-4 py-2">8 - 15 bar</td>
                    <td className="border border-gray-300 px-4 py-2">Dry, filtered</td>
                    <td className="border border-gray-300 px-4 py-2">Mild steel, cost-sensitive applications</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Argon (Ar)</td>
                    <td className="border border-gray-300 px-4 py-2">3 - 10 bar</td>
                    <td className="border border-gray-300 px-4 py-2">&gt;99.99%</td>
                    <td className="border border-gray-300 px-4 py-2">Titanium, special alloys (inert protection)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900 mb-2">
              <strong>Cost Considerations:</strong>
            </p>
            <ul className="text-sm text-blue-900 space-y-1">
              <li>• Oxygen: $0.50-1.00 per kg (economical for steel)</li>
              <li>• Nitrogen: $1.50-3.00 per kg (high consumption for thick stainless)</li>
              <li>• Air: Compressor electricity only (lowest operating cost)</li>
              <li>• On-site nitrogen generators: High upfront cost, low operating cost for high-volume users</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Learn more: <Link href="/guides/assist-gas-chart" className="text-primary-600 hover:text-primary-700 underline">Assist Gas Chart</Link> | <Link href="/guides/nozzle-selection-guide" className="text-primary-600 hover:text-primary-700 underline">Nozzle Selection Guide</Link>
          </p>
        </section>

        {/* Section 14: NEW - Safety Classifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Laser Safety Classifications</h2>
          <p className="text-gray-700 mb-4">
            Lasers are classified by hazard level according to international standards (IEC 60825-1). 
            Industrial cutting lasers are typically Class 4, requiring comprehensive safety measures.
          </p>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Class</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Hazard Level</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Examples</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Safety Measures</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Class 1</td>
                    <td className="border border-gray-300 px-4 py-2">Safe under normal use</td>
                    <td className="border border-gray-300 px-4 py-2">CD players, enclosed systems</td>
                    <td className="border border-gray-300 px-4 py-2">None required</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Class 2</td>
                    <td className="border border-gray-300 px-4 py-2">Low power visible</td>
                    <td className="border border-gray-300 px-4 py-2">Laser pointers (&lt;1mW)</td>
                    <td className="border border-gray-300 px-4 py-2">Blink reflex protects eye</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Class 3R</td>
                    <td className="border border-gray-300 px-4 py-2">Low risk, visible</td>
                    <td className="border border-gray-300 px-4 py-2">Laser pointers (1-5mW)</td>
                    <td className="border border-gray-300 px-4 py-2">Avoid direct viewing</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Class 3B</td>
                    <td className="border border-gray-300 px-4 py-2">Moderate hazard</td>
                    <td className="border border-gray-300 px-4 py-2">Therapy lasers (5-500mW)</td>
                    <td className="border border-gray-300 px-4 py-2">Protective eyewear required</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="border border-gray-300 px-4 py-2 font-medium">Class 4</td>
                    <td className="border border-gray-300 px-4 py-2">High hazard</td>
                    <td className="border border-gray-300 px-4 py-2">Industrial cutting lasers</td>
                    <td className="border border-gray-300 px-4 py-2">Full enclosure, interlocks, training</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="not-prose mb-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Class 4 Safety Requirements</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700">
                <ul className="space-y-2">
                  <li><strong>Full Enclosure:</strong> Laser must be fully enclosed during operation</li>
                  <li><strong>Interlocks:</strong> Automatic shutdown when enclosure is opened</li>
                  <li><strong>Warning Labels:</strong> Visible signage on equipment and facility</li>
                  <li><strong>Operator Training:</strong> Certified laser safety training required</li>
                  <li><strong>Protective Equipment:</strong> Wavelength-specific safety glasses when servicing</li>
                  <li><strong>Beam Stops:</strong> Prevent stray reflections and beam escape</li>
                  <li><strong>Fume Extraction:</strong> Remove potentially harmful fumes and particles</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Learn more: <Link href="/guides/laser-safety-classes" className="text-primary-600 hover:text-primary-700 underline">Safety Classes Guide</Link> | <Link href="/guides/compliance-certification" className="text-primary-600 hover:text-primary-700 underline">Compliance & Certification</Link>
          </p>
        </section>

        {/* Section 15: NEW - Maintenance Intervals */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Maintenance Intervals</h2>
          <p className="text-gray-700 mb-4">
            Regular maintenance is essential for consistent performance, long equipment life, and safe operation. 
            Maintenance requirements vary by laser type and usage intensity.
          </p>

          <div className="not-prose mb-4">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Frequency</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Maintenance Tasks</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Critical For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Daily</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="text-xs space-y-1">
                        <li>• Inspect nozzle condition</li>
                        <li>• Clean protective window</li>
                        <li>• Check assist gas pressure</li>
                        <li>• Remove cutting debris</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Cut quality, optics protection</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Weekly</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="text-xs space-y-1">
                        <li>• Clean focusing lens (if dirty)</li>
                        <li>• Check beam alignment</li>
                        <li>• Inspect gas filtration</li>
                        <li>• Clean fume extraction filters</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Beam quality, system cleanliness</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Monthly</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="text-xs space-y-1">
                        <li>• Chiller service (filter, fluid level)</li>
                        <li>• Calibrate focus position</li>
                        <li>• Check all interlocks</li>
                        <li>• Lubricate motion system</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Cooling, accuracy, safety</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Quarterly</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="text-xs space-y-1">
                        <li>• Full beam path alignment</li>
                        <li>• Replace consumables (seals, filters)</li>
                        <li>• Calibrate power meter</li>
                        <li>• Comprehensive system check</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Performance optimization</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">Annually</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <ul className="text-xs space-y-1">
                        <li>• Factory service inspection</li>
                        <li>• Replace all optical components</li>
                        <li>• Electrical safety testing</li>
                        <li>• Software updates</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-4 py-2">Long-term reliability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-blue-900">
              <strong>Maintenance Cost:</strong> Budget 5-10% of equipment purchase price annually for maintenance, 
              consumables, and service. Neglected maintenance causes 3-5× higher repair costs and significant downtime.
            </p>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            Learn more: <Link href="/guides/maintenance-schedule" className="text-primary-600 hover:text-primary-700 underline">Complete Maintenance Schedule</Link>
          </p>
        </section>

        {/* Related Tools & Guides Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools & Guides</h2>
          <p className="text-gray-700 mb-6">
            Explore our comprehensive collection of calculators and guides to deepen your understanding 
            of laser cutting technology and optimize your equipment selection.
          </p>

          <div className="not-prose">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Calculators</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <Link href="/tools/power-calculator" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Power Calculator</h4>
                <p className="text-sm text-gray-600">Calculate required laser power</p>
              </Link>
              <Link href="/tools/power-density-calculator" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Power Density Calculator</h4>
                <p className="text-sm text-gray-600">Compute power density and process type</p>
              </Link>
              <Link href="/tools/kerf-calculator" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Kerf Calculator</h4>
                <p className="text-sm text-gray-600">Estimate kerf width for CAD compensation</p>
              </Link>
              <Link href="/tools/chiller-calculator" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Chiller Calculator</h4>
                <p className="text-sm text-gray-600">Size cooling system requirements</p>
              </Link>
              <Link href="/tools/cost-estimator" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Cost Estimator</h4>
                <p className="text-sm text-gray-600">Calculate operating costs</p>
              </Link>
              <Link href="/tools/workspace-matcher" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Workspace Matcher</h4>
                <p className="text-sm text-gray-600">Find optimal work area size</p>
              </Link>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Guides</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/guides/beam-quality-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Beam Quality Guide</h4>
                <p className="text-sm text-gray-600">Deep dive into M² factor</p>
              </Link>
              <Link href="/guides/wavelength-absorption" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Wavelength Absorption</h4>
                <p className="text-sm text-gray-600">Material absorption rates by wavelength</p>
              </Link>
              <Link href="/guides/co2-vs-fiber-laser" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">CO₂ vs Fiber Laser</h4>
                <p className="text-sm text-gray-600">Comprehensive technology comparison</p>
              </Link>
              <Link href="/guides/focus-position-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Focus Position Guide</h4>
                <p className="text-sm text-gray-600">Optimize focus for different materials</p>
              </Link>
              <Link href="/guides/cutting-speed-chart" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Cutting Speed Chart</h4>
                <p className="text-sm text-gray-600">Speed reference for materials</p>
              </Link>
              <Link href="/guides/assist-gas-chart" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Assist Gas Chart</h4>
                <p className="text-sm text-gray-600">Gas selection and parameters</p>
              </Link>
              <Link href="/guides/nozzle-selection-guide" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Nozzle Selection</h4>
                <p className="text-sm text-gray-600">Choose optimal nozzle type</p>
              </Link>
              <Link href="/guides/laser-safety-classes" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Safety Classes</h4>
                <p className="text-sm text-gray-600">Laser safety standards explained</p>
              </Link>
              <Link href="/guides/maintenance-schedule" className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
                <h4 className="font-medium text-gray-900 mb-1">Maintenance Schedule</h4>
                <p className="text-sm text-gray-600">Preventive maintenance guide</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Data Disclaimer */}
        <section className="mb-8">
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Disclaimer</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              All specifications and values presented in this guide represent typical industry ranges based on 
              current technology and established standards. Actual specifications vary by manufacturer, model, 
              configuration, and operating conditions. Values are provided for educational and comparison purposes. 
              Always consult equipment documentation and manufacturer specifications for exact technical data relevant 
              to your specific equipment. No fabricated or speculative data has been included—all ranges reflect 
              verifiable industry norms as of 2024-2025.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

