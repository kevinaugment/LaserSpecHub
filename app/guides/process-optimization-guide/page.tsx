import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Cutting Process Optimization Guide - LaserSpecHub',
  description:
    'Systematic laser cutting process optimization guide: speed optimization, quality improvement, material utilization, cost control, specialized processes, and process database development. Based on TRUMPF, Bystronic engineering guidelines and lean production practices.',
  keywords: [
    'laser cutting process optimization',
    'speed optimization',
    'quality optimization',
    'cost optimization',
    'lean manufacturing',
  ],
  alternates: {
    canonical: 'https://laserspechub.com/guides/process-optimization-guide',
  },
  openGraph: {
    title: 'Laser Cutting Process Optimization Guide - Efficiency, Quality & Cost Reduction',
    description:
      'Comprehensive optimization guide covering speed, quality, material utilization, cost and specialized processes',
    type: 'article',
    url: 'https://laserspechub.com/guides/process-optimization-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Laser Cutting Process Optimization Guide',
  description: 'Systematic optimization solutions from speed, quality, cost to specialized processes',
  author: {
    '@type': 'Organization',
    name: 'LaserSpecHub',
  },
  datePublished: '2025-10-31',
  dateModified: '2025-10-31',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Laser Cutting Process Optimization Guide</h1>
        <p className="text-lg text-muted-foreground">
          Engineering-implementable optimization methods around four key objectives: speed, quality, cost, and utilization
        </p>
      </div>

      {/* 1. Overall Process Optimization Approach */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Overall Process Optimization Approach</h2>
        <Card>
          <CardContent className="pt-6 space-y-4 text-sm">
            <div>
              <strong>Optimization Objective Definition</strong>
              <ul className="mt-2 ml-4 list-disc text-muted-foreground">
                <li>Speed priority: Maximize throughput while meeting quality requirements</li>
                <li>Quality priority: Optimize parameters with edge quality grade and dimensional accuracy as constraints</li>
                <li>Cost priority: Balance gas, electricity, depreciation and labor costs</li>
              </ul>
            </div>
            <div>
              <strong>Parameter Interactions</strong>
              <p className="text-muted-foreground mt-1">
                Power, speed, focus, gas pressure and nozzle diameter are coupled and require coordinated optimization rather than single-point adjustment.
              </p>
            </div>
            <div>
              <strong>Implementation Steps</strong>
              <ol className="mt-2 ml-4 list-decimal text-muted-foreground">
                <li>Baseline testing: Establish standard part parameter baseline</li>
                <li>Single-factor sweep: Small-range scanning around focus/speed/pressure</li>
                <li>Multi-factor combination: Lock candidate combinations for comparative test cuts</li>
                <li>First-article confirmation: Accept according to ISO 9013 quality grade</li>
                <li>Database entry: Parameter library and version management</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. Cutting Speed Optimization */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Cutting Speed Optimization</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Limiting Factors Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>• Power limit and energy density</div>
              <div>• Material thermal conductivity and melt pool stability</div>
              <div>• Mechanical acceleration and stopping distance</div>
              <div>• Gas dynamics and dross ejection efficiency</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Speed Optimization Methods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>• Build power-speed matching curves, identify plateau and instability regions</div>
              <div>• Thickness-speed quick reference: Use parameter tables with ±10% fine-tuning</div>
              <div>• Corner/small radius deceleration: Segmented speed curves or curvature-adaptive</div>
              <div>• Flying cutting: 20-30% efficiency gain on thin sheet continuous patterns</div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Speed Optimization Case Studies</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <div>• 3mm stainless steel: At focus -0.5mm, nitrogen 14bar, speed increased 2.6 → 3.2 m/min while maintaining Grade 2 edge quality</div>
            <div>• 1.5mm carbon steel: Oxygen cutting nozzle ø1.2 → ø1.0, +12% speed with controlled oxidation edge</div>
          </CardContent>
        </Card>
      </section>

      {/* 3. Cutting Quality Optimization */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Cutting Quality Optimization</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quality Grades & Evaluation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div className="text-muted-foreground">ISO 9013 Grades 1-4: roughness, perpendicularity, dross and heat-affected zone.</div>
              <div>
                <Link href="/guides/edge-quality-standards" className="underline">Edge Quality Standards Table</Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Common Issues & Adjustments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3">Quality Issue</th>
                      <th className="text-left py-2 px-3">Main Parameters</th>
                      <th className="text-left py-2 px-3">Adjustment Direction</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-muted-foreground">
                    <tr>
                      <td className="py-2 px-3">Dross</td>
                      <td className="py-2 px-3">Pressure, speed</td>
                      <td className="py-2 px-3">Increase pressure, reduce speed</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">Burrs</td>
                      <td className="py-2 px-3">Focus, speed</td>
                      <td className="py-2 px-3">Adjust focus, reduce speed</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">Burning/overburn</td>
                      <td className="py-2 px-3">Power, speed</td>
                      <td className="py-2 px-3">Reduce power, increase speed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Material Utilization Optimization */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Material Utilization Optimization</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Nesting Strategy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Large parts first, corner utilization, common-line cutting</div>
              <div>• Unified part orientation to reduce direction changes</div>
              <div>• Automated nesting with manual fine-tuning</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Path Optimization</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Cutting sequence: Inner → outer, small parts priority</div>
              <div>• Pierce locations in scrap zones</div>
              <div>• Lead-in/out optimization and micro-joint design</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. Cost Optimization */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Cost Optimization</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Gas Consumption</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Cost vs quality trade-offs: oxygen/nitrogen/air</div>
              <div>• Pressure optimization: Avoid over-pressure waste</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Energy Consumption</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Laser efficiency and power factor</div>
              <div>• Idle time reduction and batch processing</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Consumables Management</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Nozzle/lens lifespan tracking</div>
              <div>• Preventive replacement vs. reactive repair</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6. Specialized Process Optimization */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Specialized Process Optimization</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Thick Plate Cutting</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Multi-pass cutting vs. single-pass high-power</div>
              <div>• Oxygen pressure progression and speed ramping</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Aluminum & Reflective Materials</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• High-purity nitrogen requirement (99.9%+)</div>
              <div>• Power stability and reflection management</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 7. Process Database Development */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. Process Database Development</h2>
        <Card>
          <CardContent className="pt-6 space-y-4 text-sm">
            <div>
              <strong>Database Structure</strong>
              <p className="text-muted-foreground mt-1">
                Organize by: Material type → Grade → Thickness → Laser power → Quality grade. Include power, speed, gas type/pressure, focus position, nozzle specs, lead-in/out parameters, and pierce settings.
              </p>
            </div>
            <div>
              <strong>Data Collection & Validation</strong>
              <ul className="mt-2 ml-4 list-disc text-muted-foreground">
                <li>First-article testing with quantitative measurements (kerf width, edge roughness, HAZ)</li>
                <li>Photo documentation of edge quality grades</li>
                <li>Operator feedback and production validation</li>
              </ul>
            </div>
            <div>
              <strong>Continuous Improvement</strong>
              <p className="text-muted-foreground mt-1">
                Review database quarterly, incorporate new materials/processes, retire obsolete parameters. Track parameter effectiveness metrics: first-pass yield rate, average cycle time, scrap rate.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Reference Materials */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Related Tools</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>
              <Link href="/tools/power-calculator" className="underline">Power Calculator</Link>
            </div>
            <div>
              <Link href="/tools/cost-estimator" className="underline">Cost Estimator</Link>
            </div>
            <div>
              <Link href="/guides/nesting-optimization-guide" className="underline">Nesting Optimization Guide</Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>References</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2 text-muted-foreground">
            <div>• TRUMPF Engineering Guidelines</div>
            <div>• Bystronic Process Parameters</div>
            <div>• ISO 9013 Cutting Quality Grades</div>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        Data disclaimer: This guide is based on mainstream manufacturer standards and industry practices. Actual parameters require fine-tuning based on equipment condition and test cut results.
      </p>
    </div>
  );
}
