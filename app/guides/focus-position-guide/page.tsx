import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Cutting Focus Position Guide - LaserSpecHub',
  description:
    'Detailed laser cutting focus position adjustment guide. Includes definitions of positive, zero, and negative focus, step-by-step methods for ramp test and dot test, focus position recommendations for different materials, and diagnostic methods for focus errors. Based on TRUMPF and Bystronic operation manuals.',
  keywords: [
    'laser focus adjustment',
    'focus position',
    'focus calibration',
    'ramp test',
    'dot test',
    'laser focusing',
  ],
  alternates: {
    canonical: 'https://laserspechub.com/guides/focus-position-guide',
  },
  openGraph: {
    title: 'Laser Cutting Focus Position Guide - Complete Operation Steps',
    description:
      'Learn to correctly adjust and calibrate laser focus position, master practical methods like ramp test and dot test',
    type: 'article',
    url: 'https://laserspechub.com/guides/focus-position-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Laser Cutting Focus Position Adjustment Guide',
  description: 'Detailed step-by-step guide for laser focus position adjustment and calibration',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Understand Focus Position Fundamentals',
      text: 'Learn definitions of positive, zero, and negative focus and their impact on cutting quality',
    },
    {
      '@type': 'HowToStep',
      name: 'Select Appropriate Adjustment Method',
      text: 'Choose ramp test, dot test, or auto-focus system based on equipment and requirements',
    },
    {
      '@type': 'HowToStep',
      name: 'Perform Focus Adjustment',
      text: 'Follow standard procedures to adjust and calibrate focus position',
    },
    {
      '@type': 'HowToStep',
      name: 'Verify and Fine-Tune',
      text: 'Verify focus position through test cuts and fine-tune as needed',
    },
  ],
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <StructuredData type="HowTo" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Laser Cutting Focus Position Adjustment Guide</h1>
        <p className="text-lg text-muted-foreground">
          Master correct focus position adjustment methods to improve cutting quality and efficiency
        </p>
      </div>

      {/* Quick Start */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-lg">Quick Start</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <strong>Why adjust focus position?</strong>
            <p className="text-muted-foreground mt-1">
              Focus position directly affects energy density distribution, thereby impacting cutting speed, edge quality, and penetration capability.
              Different materials and thicknesses require different focus positions for optimal cutting results.
            </p>
          </div>
          <div>
            <strong>How often should focus be adjusted?</strong>
            <p className="text-muted-foreground mt-1">
              After new equipment installation, after replacing focusing lens, when cutting quality deteriorates, or perform quarterly calibration.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 1. Focus Position Fundamentals */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Focus Position Fundamentals</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Focus Position Definitions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">
                  Negative Focus
                </h4>
                <p className="text-sm text-red-800 dark:text-red-300 mb-2">
                  Focus inside material
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• Focus position: -1 ~ -5 mm</div>
                  <div>• Energy concentrated internally</div>
                  <div>• Suitable for thick plate cutting</div>
                  <div>• Strong penetration capability</div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">
                  Zero Focus
                </h4>
                <p className="text-sm text-green-800 dark:text-green-300 mb-2">
                  Focus at material surface
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• Focus position: 0 mm</div>
                  <div>• Energy evenly distributed</div>
                  <div>• General cutting setting</div>
                  <div>• Balanced performance</div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                  Positive Focus
                </h4>
                <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                  Focus above material
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• Focus position: +0.5 ~ +2 mm</div>
                  <div>• Energy concentrated on surface</div>
                  <div>• Suitable for thin sheet cutting</div>
                  <div>• Good surface quality</div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">Impact of Focus Position on Cutting Quality</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Penetration Capability</strong>: Negative focus enhances penetration, positive focus has weaker penetration</li>
                <li>• <strong>Edge Quality</strong>: Zero focus and slight negative focus typically produce smoothest edges</li>
                <li>• <strong>Dross Formation</strong>: Excessive negative focus can cause bottom dross</li>
                <li>• <strong>Cutting Speed</strong>: Negative focus can increase speed, but too deep reduces quality</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Optimal Focus Position by Material</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Material Type</th>
                    <th className="text-left py-3 px-4">Thickness Range</th>
                    <th className="text-left py-3 px-4">Recommended Focus Position</th>
                    <th className="text-left py-3 px-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4 font-medium">Carbon Steel</td>
                    <td className="py-3 px-4">1-6mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        -1 ~ 0 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">Oxygen cutting</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Carbon Steel</td>
                    <td className="py-3 px-4">6-20mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        -2 ~ -1 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">Oxygen cutting, thick plate</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Stainless Steel</td>
                    <td className="py-3 px-4">1-10mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        -1 ~ 0 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">Nitrogen cutting</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Aluminum Alloy</td>
                    <td className="py-3 px-4">1-8mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        0 ~ +1 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">Nitrogen cutting, positive or zero focus</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Copper</td>
                    <td className="py-3 px-4">1-5mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        +0.5 ~ +1 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">Highly reflective material, positive focus</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Acrylic</td>
                    <td className="py-3 px-4">1-20mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        0 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">CO₂ laser, zero focus</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. Focus Position Adjustment Methods */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Focus Position Adjustment Methods</h2>

        <p className="text-sm text-muted-foreground mb-4">
          Combined with intelligent control systems, this significantly improves first-time success rate and consistency. Some manufacturers (such as
          <a href="https://opmtlaser.com/technology/auto-focus-tracking" target="_blank" rel="noopener" className="mx-1 underline text-primary"> OPMT Laser</a>
          ) offer adaptive focus/height tracking solutions that maintain stable focus under material warpage and long-duration processing conditions.
        </p>

        {/* Method 1: Ramp Test */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>Method 1: Ramp Test (Most Common)</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  High accuracy, simple operation, suitable for most equipment
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold rounded-full">
                Recommended
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Required Tools</h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4 list-disc">
                <li>45° ramp block or dedicated ramp tool</li>
                <li>Test plate (typically thin stainless steel or carbon steel)</li>
                <li>Tape measure or steel ruler</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Procedure</h4>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <div>
                    <strong>Place Ramp Block</strong>
                    <p className="text-muted-foreground mt-1">
                      Place the 45° ramp block on the cutting table, ensuring the ramp surface faces the laser beam. Ramp height is typically 40-60mm.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <div>
                    <strong>Adjust Cutting Head Height</strong>
                    <p className="text-muted-foreground mt-1">
                      Move the cutting head above the ramp block, adjust Z-axis height so the nozzle is approximately 1-2mm from the ramp surface (normal cutting height).
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  <div>
                    <strong>Pulse Marking</strong>
                    <p className="text-muted-foreground mt-1">
                      Fire multiple pulse marks (5-10) along the ramp surface in the inclined direction, spaced 5-10mm apart. Use low power (100-300W) and short pulses (10-30ms).
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </span>
                  <div>
                    <strong>Observe Results</strong>
                    <p className="text-muted-foreground mt-1">
                      Remove the ramp block and observe the pulse marks. The <strong className="text-foreground">smallest, roundest, and deepest mark</strong> indicates the focus position.
                      Use a tape measure to measure the vertical height from this point to the ramp base.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    5
                  </span>
                  <div>
                    <strong>Calculate Focus Offset</strong>
                    <p className="text-muted-foreground mt-1">
                      Based on 45° ramp geometry, focus position offset = measured height - (ramp height / √2).
                      Adjust Z-axis parameters to position focus at the desired location (typically at material surface or slightly inside).
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-sm mb-2 text-blue-900 dark:text-blue-200">
                Result Interpretation Tips
              </h4>
              <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300">
                <li>• <strong>Deepest Mark</strong>: Highest energy density, indicates focus position</li>
                <li>• <strong>Mark Shape</strong>: Should be circular; elliptical shape indicates beam axis misalignment</li>
                <li>• <strong>Mark Size</strong>: Smallest spot at focus, increases when defocused</li>
                <li>• <strong>Repeatability</strong>: Recommend measuring 2-3 times and averaging for accuracy</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Method 2: Dot Test */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Method 2: Dot Test</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Simple and fast, suitable for quick checks and rough adjustments
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Applicable Scenarios</h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4 list-disc">
                <li>Quick check if focus has shifted</li>
                <li>Alternative method when dedicated ramp tool unavailable</li>
                <li>Rapid verification during routine maintenance</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Procedure</h4>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>Fire multiple pulse marks at different Z heights on flat material (spaced 2-3mm apart)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Observe which mark is smallest, roundest, and penetrates deepest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>This position indicates current focus; adjust Z-axis to match target position</span>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded border border-yellow-200 dark:border-yellow-800">
              <p className="text-xs text-yellow-800 dark:text-yellow-300">
                <strong>Note:</strong> Dot test has lower accuracy, suitable only for quick checks. For precise adjustment, use the ramp test method.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Method 3: Auto-Focus System */}
        <Card>
          <CardHeader>
            <CardTitle>Method 3: Auto-Focus System</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              High-end equipment feature with high automation level
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">Capacitive Focus Principle</h4>
              <p className="text-sm text-muted-foreground">
                Uses capacitance changes between nozzle and material surface to automatically detect and adjust focus position.
                Suitable for warped materials or scenarios requiring frequent thickness changes.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Operation Procedure</h4>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>Enable auto-focus function in control system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Set target focus position offset (e.g., -1mm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>System automatically detects material surface and adjusts Z-axis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>Begin cutting; system tracks focus position in real-time</span>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">Calibration Frequency Recommendations</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <strong>Daily</strong>: Check capacitive sensor cleanliness</li>
                <li>• <strong>Weekly</strong>: Verify calibration accuracy (using standard block)</li>
                <li>• <strong>Monthly</strong>: Recalibrate system (if deviation detected)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 3. Focus Position Error Diagnosis */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Focus Position Error Diagnosis</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cutting Characteristics: Focus Too High</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>Incomplete Penetration</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Insufficient energy density to penetrate material bottom
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>Bottom Dross or Burrs</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Insufficient energy prevents complete melt ejection
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>Significant Speed Reduction Required</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Compensates for insufficient energy density
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>Excessive Surface Ablation</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Energy concentrated on surface, insufficient at bottom
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800">
                <p className="text-xs font-semibold text-green-900 dark:text-green-200">
                  Solution: Lower Z-axis position to move focus downward
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Cutting Characteristics: Focus Too Low</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>Excessively Wide Surface Kerf</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Focus inside material, larger surface spot size
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>Poor Surface Quality, High Roughness</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Insufficient surface energy density
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>Bottom Kerf Too Narrow or Burnt Edge</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Energy concentrated at bottom
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>Non-Vertical Kerf, Wide at Top Narrow at Bottom</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Uneven energy distribution
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800">
                <p className="text-xs font-semibold text-green-900 dark:text-green-200">
                  Solution: Raise Z-axis position to move focus upward
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Quick Diagnostic Flowchart</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
                <div className="font-semibold mb-3">Symptom → Possible Cause → Solution</div>
                
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-32 flex-shrink-0 font-medium">No Penetration</span>
                    <span className="flex-1 text-muted-foreground">Focus too high or insufficient power</span>
                    <span className="w-28 text-right text-green-600 dark:text-green-400">Lower Z-axis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-32 flex-shrink-0 font-medium">Poor Surface Quality</span>
                    <span className="flex-1 text-muted-foreground">Focus too low</span>
                    <span className="w-28 text-right text-green-600 dark:text-green-400">Raise Z-axis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-32 flex-shrink-0 font-medium">Bottom Dross</span>
                    <span className="flex-1 text-muted-foreground">Focus too high or insufficient pressure</span>
                    <span className="w-28 text-right text-green-600 dark:text-green-400">Lower Z-axis or increase pressure</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-32 flex-shrink-0 font-medium">Wide Top Narrow Bottom</span>
                    <span className="flex-1 text-muted-foreground">Focus too low</span>
                    <span className="w-28 text-right text-green-600 dark:text-green-400">Raise Z-axis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-32 flex-shrink-0 font-medium">Excessively Wide Kerf</span>
                    <span className="flex-1 text-muted-foreground">Focus misaligned or excessive power</span>
                    <span className="w-28 text-right text-green-600 dark:text-green-400">Recalibrate</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4. Frequently Asked Questions */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Frequently Asked Questions (FAQ)</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Q1: How often should focus be recalibrated?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>A:</strong> Depends on usage frequency and accuracy requirements:</p>
              <ul className="ml-4 space-y-1 text-muted-foreground list-disc">
                <li><strong>High Precision Processing</strong>: Weekly check, calibrate immediately if deviation detected</li>
                <li><strong>General Cutting</strong>: Monthly periodic calibration</li>
                <li><strong>Required Calibration Situations</strong>: After lens replacement, after head collision, when cutting quality significantly deteriorates</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Q2: How does lens contamination affect focus position?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>A:</strong> Lens contamination does not change physical focus position, but:</p>
              <ul className="mt-2 ml-4 space-y-1 text-muted-foreground list-disc">
                <li>Reduces transmittance, causing energy density decrease</li>
                <li>Causes beam distortion, affecting spot quality</li>
                <li>Results in cutting effects similar to "focus misalignment"</li>
                <li>Recommend daily cleaning of protective lens, weekly inspection of focusing lens</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Q3: How to select different lens focal lengths?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>A:</strong> Focal length affects spot size and depth of focus:</p>
              <div className="mt-2 space-y-2 text-muted-foreground">
                <div>• <strong>Short Focal Length (50-75mm)</strong>: Small spot, high precision, suitable for thin sheet precision cutting</div>
                <div>• <strong>Standard Focal Length (127mm/5 inches)</strong>: Balanced performance, most commonly used</div>
                <div>• <strong>Long Focal Length (190mm+)</strong>: Large depth of focus, high tolerance, suitable for thick plate cutting</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Q4: Does auto-focus system still require manual calibration?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>A:</strong> Yes. Although auto-focus systems are convenient:</p>
              <ul className="mt-2 ml-4 space-y-1 text-muted-foreground list-disc">
                <li>The system itself requires periodic calibration (typically monthly)</li>
                <li>Different materials have different capacitive properties, which may affect detection accuracy</li>
                <li>Recommend quarterly verification of auto-focus accuracy using ramp test method</li>
                <li>When first using new materials, manually verify focus position</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Links */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Related Guides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/guides/material-thickness-parameters" className="underline hover:text-primary">
                Material Thickness Cutting Parameters
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                View recommended focus positions for different materials
              </p>
            </div>
            <div>
              <Link href="/guides/troubleshooting-guide" className="underline hover:text-primary">
                Laser Cutting Troubleshooting Guide
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Diagnose and resolve cutting quality issues
              </p>
            </div>
            <div>
              <Link href="/guides/lens-specifications" className="underline hover:text-primary">
                Laser Focusing Lens Specifications
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Understand characteristics of different focal length lenses
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/power-density-calculator" className="underline hover:text-primary">
                Laser Power Density Calculator
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Calculate power density at different focus positions
              </p>
            </div>
            <div>
              <Link href="/tools/kerf-calculator" className="underline hover:text-primary">
                Laser Cutting Kerf Width Calculator
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Focus position affects kerf width
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Source */}
      <Card className="mt-8 bg-gray-50 dark:bg-gray-900">
        <CardContent className="pt-6 text-xs text-muted-foreground">
          <strong>References:</strong>
          <ul className="mt-2 space-y-1 ml-4 list-disc">
            <li>TRUMPF Operating Manual - Laser Cutting Machine Focus Calibration Procedures</li>
            <li>Bystronic Training Materials - Focus Position Adjustment and Optimization</li>
            <li>ISO 9013 - Thermal Cutting Quality and Tolerance Standards</li>
            <li>Industry Expert Experience and Best Practices</li>
          </ul>
          <p className="mt-3">
            Last Updated: 2025-10-31 | 
            This guide is based on operating manuals from mainstream laser equipment manufacturers and industry standards, provided for operator reference and learning.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

