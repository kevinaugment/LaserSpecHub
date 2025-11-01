import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Cutting Troubleshooting Guide - LaserSpecHub',
  description:
    'Systematic laser cutting troubleshooting guide: cutting quality issues, equipment malfunctions, laser and control system problems with symptom-cause-solution decision trees.',
  keywords: ['laser cutting troubleshooting', 'quality problems', 'equipment fault', 'diagnostics', 'laser repair'],
  alternates: { canonical: 'https://laserspechub.com/guides/troubleshooting-guide' },
  openGraph: {
    title: 'Laser Cutting Troubleshooting Guide - System Diagnostics & Quick Fixes',
    description: 'Step-by-step diagnostic procedures and solutions for quality issues and equipment failures',
    type: 'article',
    url: 'https://laserspechub.com/guides/troubleshooting-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Laser Cutting Troubleshooting Guide',
  description: 'Common faults: symptoms, causes, and solutions',
  datePublished: '2025-10-31',
  dateModified: '2025-10-31',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Laser Cutting Troubleshooting Guide</h1>
        <p className="text-lg text-muted-foreground">Organized troubleshooting solutions by category</p>
      </div>

      {/* Navigation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Fault Category Navigation</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground grid gap-2 md:grid-cols-2">
          <a href="#quality">Cutting Quality Issues (9)</a>
          <a href="#machine">Equipment Operation Faults (7)</a>
          <a href="#laser">Laser Source Problems (5)</a>
          <a href="#control">Control System Faults (6)</a>
        </CardContent>
      </Card>

      {/* Section 1: Cutting Quality Issues */}
      <section id="quality" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Section 1: Cutting Quality Issues</h2>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 1: Burrs on Cut Edge</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes (Frequency)</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Incorrect focus position (40%)</li>
                  <li>Insufficient assist gas pressure (30%)</li>
                  <li>Cutting speed too high (20%)</li>
                  <li>Worn/contaminated nozzle (10%)</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>
                    Readjust focus position (refer to{' '}
                    <Link href="/guides/focus-position-guide" className="underline">Focus Adjustment Guide</Link>
                    )
                  </li>
                  <li>Increase gas pressure to recommended range</li>
                  <li>Reduce speed by 15-20% and retest</li>
                  <li>
                    Clean or replace nozzle (see{' '}
                    <Link href="/guides/nozzle-selection-guide" className="underline">Nozzle Guide</Link>
                    )
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 2: Incomplete Penetration</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Focus position too high</li>
                  <li>Insufficient power or energy density</li>
                  <li>Insufficient gas pressure or flow</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Lower focus position</li>
                  <li>Increase power or reduce speed (refer to{' '}
                    <Link href="/tools/power-density-calculator" className="underline">Power Density Calculator</Link>
                    )
                  </li>
                  <li>Increase gas pressure/check for blockages</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 3: Non-Perpendicular Cut Surface</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Focus offset/beam axis misalignment</li>
                  <li>Nozzle misalignment</li>
                  <li>Parameter mismatch (speed too high, insufficient power)</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Calibrate beam path and focus</li>
                  <li>Check nozzle concentricity and replace</li>
                  <li>Reduce speed or increase power</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 2: Equipment Operation Faults */}
      <section id="machine" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Section 2: Equipment Operation Faults</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 10: Laser Not Emitting</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Checklist</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Emergency stop released/interlocks closed</li>
                  <li>Chiller running with proper temperature/water level</li>
                  <li>Laser ready status indicator</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Reset interlocks, release emergency stop</li>
                  <li>Restore cooling conditions</li>
                  <li>Contact maintenance personnel for diagnosis</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 14: Chiller Alarm</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Water temperature too high/insufficient water level</li>
                  <li>Water circuit blockage or dirty filter</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Add water and reduce ambient temperature</li>
                  <li>Clean filter and check piping</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advanced Diagnostics Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Advanced Diagnostic Strategies</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Systematic Troubleshooting Methodology</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700">
              Effective troubleshooting follows the <strong>OBSERVE-ISOLATE-TEST-VERIFY</strong> approach. First, document the exact symptom with quantitative data (e.g., "burr height 0.5mm on bottom edge" vs. "bad cut quality"). Second, change one variable at a time—adjusting focus, pressure, and speed simultaneously makes it impossible to identify root cause. Third, test with controlled samples using consistent material batches and positions. Finally, verify the fix by running production parts, not just test coupons.
            </p>
            <p className="text-gray-700">
              <strong>Common Diagnostic Pitfalls:</strong> Assuming the most complex cause first (often it's a dirty lens or loose nozzle), failing to check consumables before adjusting parameters, and making multiple changes without documenting which one resolved the issue. Professional laser operators maintain detailed fault logs tracking symptoms, conditions, actions taken, and outcomes—this historical data accelerates future troubleshooting by 40-60%.
            </p>
            <p className="text-gray-700">
              Advanced laser systems from manufacturers like <a href="https://opmtlaser.com/technology/diagnostic-systems" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener">OPMT Laser incorporate built-in diagnostic tools</a> that monitor real-time cutting conditions—power output, beam alignment, gas pressure, nozzle height—and automatically flag deviations from optimal parameters. These systems can identify 70-80% of common issues before they impact production quality, significantly reducing troubleshooting time and minimizing scrap rates.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Material-Specific Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Stainless Steel Issues</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptom:</strong> Yellow/blue discoloration on nitrogen cutting. <strong>Cause:</strong> Insufficient nitrogen pressure (&lt;12 bar) or purity (&lt;99.5%). <strong>Solution:</strong> Increase pressure to 14-18 bar, verify nitrogen purity with oxygen analyzer (target: &lt;100ppm O₂).
              </p>
              <p className="text-gray-700">
                <strong>Symptom:</strong> Heavy dross on air cutting. <strong>Cause:</strong> Excessive oxidation in melt pool. <strong>Solution:</strong> Increase speed by 10-15% to reduce heat input, use positive focus (+0.5 to +1.0mm), ensure sharp focus spot for better energy concentration.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Aluminum Challenges</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptom:</strong> Inconsistent cutting or frequent breakthrough failures. <strong>Cause:</strong> High reflectivity (90%+) causes power instability. <strong>Solution:</strong> Use fiber lasers with aluminum-optimized wavelength control, increase nitrogen pressure to 16-20 bar for strong melt ejection, reduce speed by 30-40% vs. equivalent steel thickness.
              </p>
              <p className="text-gray-700">
                <strong>Symptom:</strong> Severe edge oxidation. <strong>Cause:</strong> Aluminum's high thermal conductivity spreads heat rapidly. <strong>Solution:</strong> Mandatory high-purity nitrogen (99.9%+), increase gas flow rate by 20-30% compared to steel cutting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Thick Plate Cutting Problems</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptom:</strong> Taper or non-perpendicular edges on 15mm+ material. <strong>Cause:</strong> Insufficient depth of focus or power density gradient through thickness. <strong>Solution:</strong> Switch to multi-mode laser with larger focus spot (M²=2.0-2.5), use negative focus (-2 to -4mm) to position focal waist mid-thickness, reduce speed to allow adequate melt time.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Preventive Diagnostics and Predictive Maintenance</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700">
              <strong>Early Warning Signs:</strong> Gradual quality degradation often precedes catastrophic failures. Monitor trending metrics: average cutting speed reduction (&gt;5% decline over 2 weeks may indicate power loss or optics degradation), increasing pierce time (lens contamination), rising dross formation (nozzle wear), or beam alignment drift requiring frequent recalibration. Address these indicators proactively before they cause production downtime.
            </p>
            <p className="text-gray-700">
              <strong>Consumables Life Tracking:</strong> Implement hour meters on critical components: protective windows (200-400 hours depending on material), nozzles (80-200 hours), focus lenses (1,000-2,000 hours). Replace on schedule rather than waiting for failure—a $120 protective window replaced preventively costs far less than emergency downtime and potential cutting head damage ($5,000-12,000).
            </p>
            <p className="text-gray-700">
              <strong>Data-Driven Optimization:</strong> Modern CNC systems log every cut with metadata (material, thickness, power, speed, gas pressure). Analyze this data quarterly to identify parameter drift, operator inconsistencies, or material batch variations. High-performing fabrication shops reduce troubleshooting time by 50-70% through systematic data analysis compared to reactive troubleshooting.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Links</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div>
            <Link href="/guides/focus-position-guide" className="underline">Focus Adjustment Guide</Link>
          </div>
          <div>
            <Link href="/guides/nozzle-selection-guide" className="underline">Nozzle Selection Guide</Link>
          </div>
          <div>
            <Link href="/guides/material-thickness-parameters" className="underline">Material Thickness Parameters</Link>
          </div>
          <div>
            <Link href="/guides/process-optimization-guide" className="underline">Process Optimization Guide</Link>
          </div>
        </CardContent>
      </Card>

      <p className="mt-8 text-xs text-muted-foreground">
        Tip: Establish a "first-piece inspection and anomaly logging" system for faster problem reproduction and identification. Systematic fault logging and parameter databases can improve troubleshooting efficiency by 50-70%.
      </p>
    </div>
  );
}
