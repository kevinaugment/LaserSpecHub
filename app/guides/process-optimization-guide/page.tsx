import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import {
  QualityTroubleshootingTable,
  MaterialOptimizationTable,
  ProcessFlowDiagram,
  ParameterInteractionDiagram,
  CostBreakdownChart
} from '@/components/cheatsheets/process-optimization-tables';
import {
  COST_BREAKDOWN_DATA,
  PROCESS_DATABASE_SCHEMA,
  KPI_METRICS,
  DATA_DISCLAIMER
} from '@/lib/data/cheatsheets/process-optimization-data';

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
  dateModified: '2025-11-02',
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
        
        <div className="mb-6">
          <ProcessFlowDiagram className="mb-6" />
        </div>

        <Card className="mb-6">
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
                Power, speed, focus, gas pressure and nozzle diameter are coupled and require coordinated optimization rather than single-point adjustment. Changing any single parameter affects multiple aspects of the cutting process.
              </p>
            </div>
            <div>
              <strong>Implementation Steps</strong>
              <ol className="mt-2 ml-4 list-decimal text-muted-foreground">
                <li>Baseline testing: Establish standard part parameter baseline with current settings</li>
                <li>Single-factor sweep: Small-range scanning around focus/speed/pressure (±10-20% from baseline)</li>
                <li>Multi-factor combination: Lock candidate combinations for comparative test cuts</li>
                <li>First-article confirmation: Accept according to ISO 9013 quality grade with quantitative measurements</li>
                <li>Database entry: Parameter library with version control and validation date</li>
              </ol>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Parameter Coupling Network</h3>
          <ParameterInteractionDiagram />
          <p className="mt-4 text-sm text-muted-foreground">
            The diagram above illustrates how cutting parameters are interconnected. Strong coupling (thick lines) indicates that changing one parameter requires immediate adjustment of the coupled parameter. For example, increasing cutting speed requires proportional increase in laser power to maintain energy density. Medium and weak couplings show secondary effects that may require fine-tuning during optimization.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Design of Experiments (DOE) Methodology</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-3">
            <p className="text-muted-foreground">
              For complex optimization involving multiple parameters, use factorial design or Taguchi methods to reduce test iterations while identifying optimal combinations:
            </p>
            <ul className="ml-4 list-disc text-muted-foreground space-y-1">
              <li><strong>Full Factorial:</strong> Test all combinations of 2-3 parameters at 2-3 levels each. Example: Power (3kW, 6kW) × Speed (2, 3, 4 m/min) × Focus (-1, 0, +1mm) = 18 test cuts.</li>
              <li><strong>Fractional Factorial:</strong> Reduce tests by 50-75% using orthogonal arrays while maintaining statistical validity. Suitable for 4+ parameters.</li>
              <li><strong>One-Factor-at-a-Time (OFAT):</strong> Simple but inefficient. Misses interaction effects between parameters. Use only for initial screening.</li>
            </ul>
            <p className="text-muted-foreground mt-3">
              <strong>Best Practice:</strong> Start with OFAT to identify parameter ranges, then use factorial design to optimize interactions. Document all test results with photos and measurements for future reference.
            </p>
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
        
        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quality Grades & Evaluation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div className="text-muted-foreground">
                ISO 9013 defines 4 quality grades based on surface roughness (Ra), perpendicularity tolerance (u), dross attachment, and heat-affected zone (HAZ) width:
              </div>
              <ul className="ml-4 list-disc text-muted-foreground space-y-1">
                <li><strong>Grade 1:</strong> Precision work, Ra ≤6.3μm, u ≤0.3mm, no dross</li>
                <li><strong>Grade 2:</strong> General fabrication, Ra ≤10μm, u ≤0.5mm, minimal dross</li>
                <li><strong>Grade 3:</strong> Structural work, Ra ≤12.5μm, u ≤0.8mm, removable dross</li>
                <li><strong>Grade 4:</strong> Non-critical, Ra ≤20μm, u ≤1.2mm, dross acceptable</li>
              </ul>
              <div className="mt-3">
                <Link href="/guides/edge-quality-standards" className="underline text-blue-600 hover:text-blue-700">
                  View Complete Edge Quality Standards Table →
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Measurement Methodology</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <div><strong className="text-foreground">Surface Roughness (Ra):</strong> Use profilometer or roughness tester. Measure at mid-thickness, 3 locations per sample.</div>
              <div><strong className="text-foreground">Perpendicularity (u):</strong> Measure deviation from vertical using square or angle gauge. Calculate u = t × tan(α) where t = thickness, α = angle deviation.</div>
              <div><strong className="text-foreground">Dross:</strong> Visual inspection and tactile test. Weigh dross per meter of cut for quantitative assessment.</div>
              <div><strong className="text-foreground">HAZ Width:</strong> Metallographic cross-section with etching to reveal microstructure change. Measure under microscope.</div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Comprehensive Quality Troubleshooting</h3>
          <p className="text-sm text-muted-foreground mb-4">
            The interactive table below provides detailed troubleshooting for common quality issues. Click any issue to expand full diagnostic procedures, root causes ranked by likelihood, and solutions with effectiveness ratings.
          </p>
          <QualityTroubleshootingTable />
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
        
        <div className="mb-6">
          <CostBreakdownChart />
          <p className="mt-4 text-sm text-muted-foreground text-center">
            Typical cost distribution for medium-thickness steel cutting with nitrogen assist gas. Actual percentages vary by material, thickness, and gas type.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-1 mb-6">
          {COST_BREAKDOWN_DATA.map((component, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{component.component}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {component.percentageMin}-{component.percentageMax}% (typical: {component.typicalPercentage}%)
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                <div>
                  <strong>Optimization Strategies:</strong>
                  <ul className="mt-2 ml-4 list-disc text-muted-foreground space-y-1">
                    {component.optimizationStrategies.map((strategy, sIdx) => (
                      <li key={sIdx}>{strategy}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-lg border border-green-200 dark:border-green-800">
                  <strong className="text-green-900 dark:text-green-200">Savings Potential:</strong>
                  <span className="text-green-800 dark:text-green-300 ml-2">{component.savingsPotential}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Cost Calculation Formulas</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <div>
              <strong>Gas Cost per Part:</strong>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg mt-2 font-mono text-xs">
                Cost = (Cutting Time × Flow Rate × Gas Price) + (Pierce Count × Pierce Gas Volume × Gas Price)
              </div>
              <p className="text-muted-foreground mt-2">
                Example: 5 min cutting @ 15 m³/h flow + 20 pierces @ 0.1 m³ each, nitrogen @ $0.50/m³ = (5/60 × 15 × 0.50) + (20 × 0.1 × 0.50) = $0.625 + $1.00 = $1.625/part
              </p>
            </div>
            <div>
              <strong>Power Cost per Part:</strong>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg mt-2 font-mono text-xs">
                Cost = (Laser Power × Time × Efficiency Factor × Electricity Rate) / 1000
              </div>
              <p className="text-muted-foreground mt-2">
                Example: 6kW laser, 5 min cutting, 30% efficiency, $0.12/kWh = (6 × 5/60 × 0.30 × 0.12) = $0.018/part
              </p>
            </div>
            <div>
              <strong>Consumable Cost per Part:</strong>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg mt-2 font-mono text-xs">
                Cost = (Nozzle Cost / Nozzle Life Hours × Part Time) + (Lens Cost / Lens Life Hours × Part Time)
              </div>
              <p className="text-muted-foreground mt-2">
                Example: $15 nozzle / 100 hrs + $120 lens / 1000 hrs, 5 min part = ($15/100 + $120/1000) × 5/60 = $0.022/part
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 6. Specialized Process Optimization */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Specialized Process Optimization</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3">Material-Specific Guidelines</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Different materials require significantly different parameter strategies. Select a material below to view comprehensive optimization guidelines including gas requirements, parameter ranges, special considerations, and common challenges.
          </p>
          <MaterialOptimizationTable />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Thick Plate Cutting (&gt;20mm)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div><strong className="text-foreground">Multi-Pass Strategy:</strong> For plates &gt;25mm, consider 2-pass cutting: rough cut at high speed, finish cut at reduced speed for quality.</div>
              <div><strong className="text-foreground">Oxygen Pressure Progression:</strong> Start pierce at low pressure (1-2 bar), ramp to cutting pressure (4-6 bar) over 0.5-1 second to prevent blowback.</div>
              <div><strong className="text-foreground">Focus Position:</strong> Use negative focus (-2 to -4mm) to position focal waist at mid-thickness for better penetration.</div>
              <div><strong className="text-foreground">Speed Ramping:</strong> Reduce speed by 40-60% compared to thin plate. Monitor for incomplete penetration at corners.</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tube and Pipe Cutting</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div><strong className="text-foreground">Rotary Axis Calibration:</strong> Verify chuck concentricity and rotary axis alignment before production. Runout &gt;0.2mm causes quality issues.</div>
              <div><strong className="text-foreground">Gas Flow Considerations:</strong> Internal assist gas delivery through tube end or external nozzle. Internal delivery more efficient for thin-wall tubes.</div>
              <div><strong className="text-foreground">Speed Adjustment:</strong> Reduce linear speed by 20-30% vs flat sheet due to curved surface geometry and reduced gas effectiveness.</div>
              <div><strong className="text-foreground">Programming Tips:</strong> Use tube-specific CAM software for automatic collision detection and optimal nozzle positioning.</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 7. Process Database Development */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. Process Database Development</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Recommended Database Schema</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-muted/50 border-b">
                    <th className="text-left p-2 font-semibold">Field Name</th>
                    <th className="text-left p-2 font-semibold">Data Type</th>
                    <th className="text-left p-2 font-semibold">Required</th>
                    <th className="text-left p-2 font-semibold">Description</th>
                    <th className="text-left p-2 font-semibold">Example Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {PROCESS_DATABASE_SCHEMA.slice(0, 10).map((field, idx) => (
                    <tr key={idx} className="hover:bg-muted/30">
                      <td className="p-2 font-medium">{field.fieldName}</td>
                      <td className="p-2 text-muted-foreground">{field.dataType}</td>
                      <td className="p-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${field.required ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'}`}>
                          {field.required ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="p-2 text-muted-foreground">{field.description}</td>
                      <td className="p-2 font-mono text-muted-foreground">{field.exampleValue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Showing 10 of {PROCESS_DATABASE_SCHEMA.length} recommended fields. Complete schema includes quality metrics, validation info, and notes fields.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Data Collection & Validation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <div><strong className="text-foreground">First-Article Testing:</strong> Conduct quantitative measurements on first part: kerf width (±0.05mm), edge roughness Ra (profilometer), perpendicularity (angle gauge), HAZ width (microscope).</div>
              <div><strong className="text-foreground">Photo Documentation:</strong> Take standardized photos of cut edge at 3 locations (entry, mid, exit) for each quality grade. Use consistent lighting and magnification.</div>
              <div><strong className="text-foreground">Operator Feedback:</strong> Record ease of setup, any issues encountered, and subjective quality assessment. Operator experience often reveals subtle problems.</div>
              <div><strong className="text-foreground">Production Validation:</strong> Run minimum 10 parts to verify consistency. Calculate first-pass yield rate and cycle time variance.</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Version Control & Management</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2 text-muted-foreground">
              <div><strong className="text-foreground">Version Numbering:</strong> Use semantic versioning (v1.0, v1.1, v2.0). Increment minor version for parameter tweaks, major version for significant changes.</div>
              <div><strong className="text-foreground">Change Tracking:</strong> Log all parameter changes with date, operator, reason, and results. This audit trail enables root cause analysis of quality issues.</div>
              <div><strong className="text-foreground">Approval Workflow:</strong> Require supervisor approval for new parameters before production use. Prevents untested parameters from causing scrap.</div>
              <div><strong className="text-foreground">Backup & Recovery:</strong> Export database weekly to external storage. Cloud backup recommended for multi-site operations.</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Statistical Process Control (SPC)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-3">
            <p className="text-muted-foreground">
              Implement SPC to monitor parameter stability and detect drift before quality issues occur:
            </p>
            <ul className="ml-4 list-disc text-muted-foreground space-y-1">
              <li><strong className="text-foreground">Control Charts:</strong> Plot key metrics (cutting speed, gas pressure, edge roughness) over time. Set control limits at ±3 standard deviations from mean.</li>
              <li><strong className="text-foreground">Trend Analysis:</strong> Identify gradual parameter drift (e.g., lens contamination causing power loss). Address before reaching control limits.</li>
              <li><strong className="text-foreground">Capability Analysis:</strong> Calculate Cpk for critical dimensions. Target Cpk ≥1.33 for process capability. Cpk &lt;1.0 indicates process cannot meet specifications consistently.</li>
              <li><strong className="text-foreground">Quarterly Review:</strong> Analyze SPC data to identify improvement opportunities, update parameter targets, and retire obsolete entries.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 8. Continuous Improvement & KPI Monitoring */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Continuous Improvement & KPI Monitoring</h2>
        
        <p className="text-sm text-muted-foreground mb-6">
          Systematic monitoring of key performance indicators (KPIs) enables data-driven optimization and early detection of process degradation. Track these metrics to quantify improvement and justify optimization investments.
        </p>

        <div className="space-y-6">
          {KPI_METRICS.map((kpi, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">{kpi.metricName}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                <div>
                  <strong>Description:</strong>
                  <p className="text-muted-foreground mt-1">{kpi.description}</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <strong>Calculation Method:</strong>
                    <div className="bg-gray-50 dark:bg-gray-900 p-2 rounded mt-1 font-mono text-xs">
                      {kpi.calculationMethod}
                    </div>
                  </div>
                  <div>
                    <strong>Target Value:</strong>
                    <p className="text-muted-foreground mt-1">{kpi.targetValue}</p>
                  </div>
                </div>
                <div>
                  <strong>Measurement Frequency:</strong>
                  <span className="text-muted-foreground ml-2">{kpi.measurementFrequency}</span>
                </div>
                <div>
                  <strong>Improvement Actions:</strong>
                  <ul className="mt-2 ml-4 list-disc text-muted-foreground space-y-1">
                    {kpi.improvementActions.map((action, aIdx) => (
                      <li key={aIdx}>{action}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Implementing a Continuous Improvement Culture</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-3">
            <p className="text-muted-foreground">
              Successful process optimization requires organizational commitment beyond technical changes:
            </p>
            <ul className="ml-4 list-disc text-muted-foreground space-y-2">
              <li><strong className="text-foreground">Daily Production Meetings:</strong> 15-minute standup to review previous day KPIs, discuss issues, and plan improvements. Focus on facts and data, not blame.</li>
              <li><strong className="text-foreground">Operator Empowerment:</strong> Train operators to identify and document quality issues. Implement suggestion system with recognition for improvements.</li>
              <li><strong className="text-foreground">Root Cause Analysis:</strong> Use 5-Why or fishbone diagrams for recurring issues. Document findings and corrective actions in database.</li>
              <li><strong className="text-foreground">Benchmark Tracking:</strong> Compare performance against industry standards and internal historical data. Celebrate improvements, investigate degradation.</li>
              <li><strong className="text-foreground">Investment Justification:</strong> Use KPI data to quantify ROI for equipment upgrades, software purchases, or training programs. Data-driven proposals get approved faster.</li>
            </ul>
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
            <div>• TRUMPF Process Optimization Guide 2024</div>
            <div>• Bystronic Cutting Parameter Handbook 2024</div>
            <div>• ISO 9013:2017 Thermal Cutting Classification</div>
            <div>• Industry Field Data and Best Practices</div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-xs text-blue-900 dark:text-blue-200">
          <strong>Data Disclaimer:</strong> {DATA_DISCLAIMER}
        </p>
      </div>
    </div>
  );
}
