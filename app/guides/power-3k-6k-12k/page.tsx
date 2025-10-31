import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: '3kW vs 6kW vs 12kW Fiber Laser: Complete Power Comparison Guide',
  description:
    'Deep-dive comparison of 3kW, 6kW and 12kW fiber lasers: cutting capability, speed, quality, electrical requirements, ROI models, and application fit to help you pick the right power.',
  keywords: [
    '3kW vs 6kW vs 12kW',
    'fiber laser power comparison',
    'laser cutting capability',
    'laser ROI',
    'laser power selection',
  ],
  openGraph: {
    title: '3kW vs 6kW vs 12kW Fiber Laser: Complete Comparison',
    description:
      'Capability, speed, quality, infrastructure, and ROI comparison across 3kW, 6kW and 12kW fiber lasers.',
    type: 'article',
  },
};

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: '3kW vs 6kW vs 12kW Fiber Laser: Complete Power Comparison',
    description:
      'Deep comparison of power classes for fiber laser cutting with recommended use-cases and ROI modeling.',
    datePublished: new Date().toISOString().slice(0, 10),
    dateModified: new Date().toISOString().slice(0, 10),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
      <StructuredData type="TechArticle" data={structuredData} />

      <article className="prose max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          3kW vs 6kW vs 12kW Fiber Laser: Which Power Is Right for You?
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Power determines cutting capability, speed, edge quality, infrastructure requirements and ultimately your return
          on investment. This guide compares the three most common power classes to help you choose the optimal configuration.
        </p>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-3 gap-4 not-prose mb-10">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>3kW (Entry-Precision)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <div>• Best for thin sheet metals (≤ 8-10mm)</div>
              <div>• Excellent edge quality, low operating cost</div>
              <div>• Ideal for job shops, precision parts</div>
            </CardContent>
          </Card>
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>6kW (All-rounder)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <div>• Covers 0.5-20mm carbon steel (typical)</div>
              <div>• 40-70% faster than 3kW on 6-10mm</div>
              <div>• Best versatility and ROI for mixed work</div>
            </CardContent>
          </Card>
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>12kW (High-Throughput)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <div>• Thick plate (≤ 30mm) capability</div>
              <div>• Highest speeds on 10-20mm+ steels</div>
              <div>• Suited to production lines/24×7</div>
            </CardContent>
          </Card>
        </div>

        {/* Capability by Material */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cutting Capability by Material</h2>
          <div className="grid md:grid-cols-3 gap-6 not-prose">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Carbon Steel</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>3kW:</strong> 0.5-12mm (best ≤ 8mm), O₂ for speed / N₂ for clean</div>
                <div><strong>6kW:</strong> 0.5-20mm (sweet spot 6-16mm), high speed on 8-12mm</div>
                <div><strong>12kW:</strong> 0.5-30mm, production grade on 15-25mm</div>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Stainless Steel</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>3kW:</strong> 0.5-6mm (N₂), excellent cosmetic edges</div>
                <div><strong>6kW:</strong> 0.5-12mm (N₂), balanced speed and quality</div>
                <div><strong>12kW:</strong> 0.5-20mm (N₂), best for 8-16mm throughput</div>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Aluminum (5xxx/6xxx)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>3kW:</strong> 0.5-5mm (N₂), careful parameter control</div>
                <div><strong>6kW:</strong> 0.5-8mm (N₂), robust window for speed</div>
                <div><strong>12kW:</strong> 0.5-12mm (N₂), faster on 6-10mm, thick limits by ejection</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Speed Benchmarks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Typical Cutting Speed Benchmarks</h2>
          <div className="grid md:grid-cols-3 gap-6 not-prose">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>3kW</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <div>Steel 3mm (O₂): 8-12 m/min</div>
                <div>Steel 6mm (O₂): 2.5-3.8 m/min</div>
                <div>Stainless 3mm (N₂): 5-8 m/min</div>
                <div>Aluminum 3mm (N₂): 4-6 m/min</div>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>6kW</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <div>Steel 3mm (O₂): 14-18 m/min</div>
                <div>Steel 6mm (O₂): 4-6 m/min</div>
                <div>Stainless 6mm (N₂): 4-6 m/min</div>
                <div>Aluminum 6mm (N₂): 3-4.5 m/min</div>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>12kW</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <div>Steel 10mm (O₂): 2.2-3.2 m/min</div>
                <div>Steel 20mm (O₂): 1.4-2.0 m/min</div>
                <div>Stainless 10mm (N₂): 2.0-3.0 m/min</div>
                <div>Aluminum 10mm (N₂): 1.4-2.2 m/min</div>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-gray-500 mt-3">Values represent typical production-quality ranges; actual speeds depend on material, gas, optics and setup.</p>
        </section>

        {/* Quality, Cost and Infrastructure */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Edge Quality, Operating Cost and Infrastructure</h2>
          <div className="grid md:grid-cols-3 gap-6 not-prose">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Edge Quality</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>3kW:</strong> Best cosmetic finish on thin sheets; precise small holes</div>
                <div><strong>6kW:</strong> Balanced quality across 3-12mm; minor dross on 16mm+</div>
                <div><strong>12kW:</strong> Excellent on 8-16mm at speed; thick plate quality depends on ejection</div>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Operating Cost</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div>Higher power reduces cost-per-part in volume due to time savings</div>
                <div>N₂ consumption rises with speed/nozzle size; O₂ cheaper but oxidizes edges</div>
                <div>Optics/nozzle wear increases with throughput; plan preventative maintenance</div>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Electrical & Facility</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>3kW:</strong> ~20-25kW system draw; standard 3-phase</div>
                <div><strong>6kW:</strong> ~40-55kW total with chiller and auxiliaries</div>
                <div><strong>12kW:</strong> ~80-110kW total; verify transformer, cabling, HVAC</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ROI Models */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">ROI Modeling (Illustrative)</h2>
          <div className="grid md:grid-cols-3 gap-6 not-prose">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Assumptions</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <div>Utilization: 6 hours/day, 22 days/month</div>
                <div>Labor: $28/h; Energy: $0.12/kWh</div>
                <div>Consumables: $3-6/h (nozzles/lenses)</div>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Throughput Gain</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <div>6kW vs 3kW: 40-70% faster on 6-10mm</div>
                <div>12kW vs 6kW: 20-35% faster on 12-20mm</div>
                <div>Per-part time savings drives ROI</div>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Payback Window</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <div>3kW → 6kW upgrade: 12-24 months (mixed work)</div>
                <div>6kW → 12kW upgrade: 18-36 months (thick plate focus)</div>
                <div>Depends on hours, mix, and pricing</div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded not-prose text-sm text-blue-900">
            Tip: Manufacturers like
            <a href="https://opmtlaser.com/products/modular-power-systems" className="ml-1 text-primary-700 font-medium" target="_blank" rel="noopener"> OPMT Laser</a>
            offer modular power upgrades, allowing a staged investment path—start at 4-6kW and upgrade to 8-12kW when volume increases.
          </div>
        </section>

        {/* Decision Matrix */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Decision Matrix</h2>
          <div className="grid md:grid-cols-3 gap-6 not-prose">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Choose 3kW if…</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <div>• Thin metals (≤ 6-8mm) dominate workload</div>
                <div>• Highest cosmetic edge quality required</div>
                <div>• Limited facility power / starter budget</div>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Choose 6kW if…</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <div>• Mixed job shop from 1-16mm</div>
                <div>• Need best balance of speed & cost</div>
                <div>• One-machine versatility is priority</div>
              </CardContent>
            </Card>
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Choose 12kW if…</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-1">
                <div>• Regularly cut 10-30mm carbon steel</div>
                <div>• High-volume production / 24×7</div>
                <div>• Facility supports 100kW+ load</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Resources */}
        <section className="not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Tools & Guides</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/tools/power-calculator" className="block">
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Power Calculator</h3>
                  <p className="text-sm text-gray-600">Estimate required power by material and thickness</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/power-selection-guide" className="block">
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Power Selection Guide</h3>
                  <p className="text-sm text-gray-600">Comprehensive buying guide for power levels</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/cutting-speed-chart" className="block">
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Cutting Speed Chart</h3>
                  <p className="text-sm text-gray-600">Reference speeds across materials and powers</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}


