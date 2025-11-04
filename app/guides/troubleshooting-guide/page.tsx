import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutting Troubleshooting Guide',
  description: 'Comprehensive laser cutting and engraving troubleshooting guide: 31 common issues covering quality problems, equipment faults, CO2 vs fiber laser differences, emergency procedures, and preventive maintenance schedules.',
  path: '/guides/troubleshooting-guide',
  keywords: ['laser cutting troubleshooting', 'laser engraving problems', 'quality problems', 'equipment fault', 'diagnostics', 'laser repair', 'CO2 vs fiber', 'emergency procedures', 'preventive maintenance'],
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Laser Cutting and Engraving Troubleshooting Guide',
  description: 'Comprehensive troubleshooting guide covering 31 common issues, emergency procedures, laser type comparisons, and preventive maintenance schedules',
  datePublished: '2025-10-31',
  dateModified: '2025-11-02',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Laser Cutting Troubleshooting Guide</h1>
        <p className="text-lg text-muted-foreground">Organized troubleshooting solutions by category</p>
      </div>

      {/* Quick Start: Top 3 Most Common Issues */}
      <Card className="mb-8 border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            Quick Start: Most Common Issues
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-4">
          <p className="text-muted-foreground">Start here: These 3 issues account for 65% of all cutting quality problems</p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
              <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">#1 Burrs on Edge (40%)</h3>
              <p className="text-xs text-muted-foreground mb-2">Quick Check: Focus position → Gas pressure</p>
              <a href="#quality" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">→ See Issue 1</a>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
              <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">#2 Excessive Dross (15%)</h3>
              <p className="text-xs text-muted-foreground mb-2">Quick Check: Gas pressure → Nozzle condition</p>
              <a href="#quality" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">→ See Issue 4</a>
            </div>
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-900">
              <h3 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">#3 Incomplete Penetration (10%)</h3>
              <p className="text-xs text-muted-foreground mb-2">Quick Check: Laser power → Cutting speed</p>
              <a href="#quality" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">→ See Issue 2</a>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Procedures */}
      <Card className="mb-8 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20" id="emergency">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="text-2xl">🚨</span>
            Emergency Procedures
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-semibold text-red-600 dark:text-red-400 mb-2">Fire or Excessive Smoke</h3>
              <ol className="text-xs text-muted-foreground space-y-1 list-decimal ml-4">
                <li>Press EMERGENCY STOP immediately</li>
                <li>Activate assist gas to blow out flames</li>
                <li>Do NOT open machine doors until smoke clears</li>
                <li>If fire persists &gt;10 seconds, use CO₂ extinguisher</li>
                <li>Evacuate and call emergency services if uncontrollable</li>
              </ol>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-orange-600 dark:text-orange-400 mb-2">Laser Exposure Incident</h3>
              <ol className="text-xs text-muted-foreground space-y-1 list-decimal ml-4">
                <li>Press EMERGENCY STOP immediately</li>
                <li>Do NOT rub eyes if exposure suspected</li>
                <li>Seek immediate medical attention for eye exposure</li>
                <li>Document incident details (time, power level, duration)</li>
                <li>Report to safety officer per facility protocol</li>
              </ol>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Equipment Damage Assessment</h3>
              <ol className="text-xs text-muted-foreground space-y-1 list-decimal ml-4">
                <li>Press EMERGENCY STOP if abnormal sounds/behavior</li>
                <li>Do NOT restart until visual inspection complete</li>
                <li>Check for collision damage (nozzle, lens, mirrors)</li>
                <li>Inspect for coolant leaks or electrical damage</li>
                <li>Contact certified technician before resuming operation</li>
              </ol>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Safe Shutdown Procedure</h3>
              <ol className="text-xs text-muted-foreground space-y-1 list-decimal ml-4">
                <li>Complete current cut or press PAUSE (not E-stop)</li>
                <li>Reduce laser power to 0% in CNC software</li>
                <li>Allow chiller to run for 5 minutes cooldown</li>
                <li>Close gas cylinder valves</li>
                <li>Power off laser source, then CNC, then chiller</li>
              </ol>
            </div>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-300 dark:border-yellow-700 rounded p-3 text-xs">
            <strong className="text-yellow-800 dark:text-yellow-300">Safety First:</strong> When in doubt, press EMERGENCY STOP and consult qualified personnel. Equipment can be repaired; injuries cannot be undone. See <Link href="/guides/safety-operations" className="underline text-blue-600 dark:text-blue-400">Safety Operations Guide</Link> for complete protocols.
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">Fault Category Navigation</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground grid gap-2 md:grid-cols-2">
          <a href="#emergency" className="hover:text-primary hover:underline font-semibold text-red-600 dark:text-red-400">🚨 Emergency Procedures</a>
          <a href="#quality" className="hover:text-primary hover:underline">Cutting Quality Issues (9)</a>
          <a href="#machine" className="hover:text-primary hover:underline">Equipment Operation Faults (6)</a>
          <a href="#laser" className="hover:text-primary hover:underline">Laser Source Problems (4)</a>
          <a href="#control" className="hover:text-primary hover:underline">Control System Faults (4)</a>
          <a href="#optical" className="hover:text-primary hover:underline">Optical Path Problems (3)</a>
          <a href="#engraving" className="hover:text-primary hover:underline">Engraving Issues (5)</a>
          <a href="#laser-types" className="hover:text-primary hover:underline">CO2 vs Fiber Comparison</a>
          <a href="#diagnostics" className="hover:text-primary hover:underline">Diagnostic Methodology</a>
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
              {/* Focus Position Diagram */}
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                <svg viewBox="0 0 600 300" className="w-full max-w-2xl mx-auto" role="img" aria-label="Focus position diagram showing positive, zero, and negative focus positions">
                  <defs>
                    <linearGradient id="beamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.8}} />
                      <stop offset="100%" style={{stopColor: '#1d4ed8', stopOpacity: 0.9}} />
                    </linearGradient>
                  </defs>
                  
                  {/* Positive Focus (+1mm) */}
                  <g>
                    <text x="100" y="30" textAnchor="middle" className="fill-current text-sm font-semibold">Positive (+1mm)</text>
                    <rect x="50" y="150" width="100" height="40" fill="#6b7280" stroke="#374151" strokeWidth="2"/>
                    <text x="100" y="175" textAnchor="middle" className="fill-white text-xs">Material</text>
                    <path d="M 100 50 L 90 140 L 110 140 Z" fill="url(#beamGradient)" opacity="0.7"/>
                    <circle cx="100" cy="120" r="4" fill="#ef4444"/>
                    <text x="100" y="115" textAnchor="middle" className="fill-current text-xs">Focal Point</text>
                    <line x1="100" y1="150" x2="100" y2="125" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/>
                    <text x="100" y="210" textAnchor="middle" className="fill-current text-xs">Good for thin materials</text>
                  </g>
                  
                  {/* Zero Focus (0mm) */}
                  <g>
                    <text x="300" y="30" textAnchor="middle" className="fill-current text-sm font-semibold">Zero (0mm)</text>
                    <rect x="250" y="150" width="100" height="40" fill="#6b7280" stroke="#374151" strokeWidth="2"/>
                    <text x="300" y="175" textAnchor="middle" className="fill-white text-xs">Material</text>
                    <path d="M 300 50 L 290 140 L 310 140 Z" fill="url(#beamGradient)" opacity="0.7"/>
                    <circle cx="300" cy="150" r="4" fill="#ef4444"/>
                    <text x="300" y="145" textAnchor="middle" className="fill-current text-xs">Focal Point</text>
                    <text x="300" y="210" textAnchor="middle" className="fill-current text-xs">Standard position</text>
                  </g>
                  
                  {/* Negative Focus (-1mm) */}
                  <g>
                    <text x="500" y="30" textAnchor="middle" className="fill-current text-sm font-semibold">Negative (-1mm)</text>
                    <rect x="450" y="150" width="100" height="40" fill="#6b7280" stroke="#374151" strokeWidth="2"/>
                    <text x="500" y="175" textAnchor="middle" className="fill-white text-xs">Material</text>
                    <path d="M 500 50 L 490 140 L 510 140 Z" fill="url(#beamGradient)" opacity="0.7"/>
                    <circle cx="500" cy="165" r="4" fill="#ef4444"/>
                    <text x="500" y="180" textAnchor="middle" className="fill-current text-xs">Focal Point</text>
                    <line x1="500" y1="150" x2="500" y2="160" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,2"/>
                    <text x="500" y="210" textAnchor="middle" className="fill-current text-xs">Good for thick materials</text>
                  </g>
                  
                  {/* Legend */}
                  <g transform="translate(200, 250)">
                    <path d="M 0 0 L 10 15 L 20 0 Z" fill="url(#beamGradient)" opacity="0.7"/>
                    <text x="25" y="12" className="fill-current text-xs">Laser Beam</text>
                    <circle cx="80" cy="7" r="3" fill="#ef4444"/>
                    <text x="90" y="12" className="fill-current text-xs">Focal Point</text>
                  </g>
                </svg>
                <p className="text-center text-xs text-muted-foreground mt-2">Focus position significantly affects cut quality. Adjust based on material thickness and desired edge characteristics.</p>
              </div>
              
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
              {/* Nozzle Alignment Diagram */}
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                <svg viewBox="0 0 500 280" className="w-full max-w-xl mx-auto" role="img" aria-label="Nozzle alignment diagram showing correct vs incorrect beam centering">
                  <defs>
                    <radialGradient id="beamCenter" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" style={{stopColor: '#ef4444', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#dc2626', stopOpacity: 0.5}} />
                    </radialGradient>
                  </defs>
                  
                  {/* Correct Alignment */}
                  <g>
                    <text x="125" y="25" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-sm font-semibold">✓ Correct Alignment</text>
                    
                    {/* Nozzle Body */}
                    <rect x="75" y="50" width="100" height="60" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" rx="5"/>
                    {/* Nozzle Bore */}
                    <ellipse cx="125" cy="110" rx="20" ry="8" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
                    {/* Centered Beam */}
                    <line x1="125" y1="40" x2="125" y2="110" stroke="#ef4444" strokeWidth="3"/>
                    <circle cx="125" cy="110" r="3" fill="url(#beamCenter)"/>
                    {/* Gas Flow Arrows */}
                    <path d="M 105 120 L 105 150 M 100 145 L 105 150 L 110 145" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                    <path d="M 125 120 L 125 150 M 120 145 L 125 150 L 130 145" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                    <path d="M 145 120 L 145 150 M 140 145 L 145 150 L 150 145" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                    <text x="125" y="170" textAnchor="middle" className="fill-current text-xs">Even Gas Flow</text>
                    
                    {/* Material Cut */}
                    <rect x="80" y="180" width="90" height="40" fill="#6b7280" stroke="#374151" strokeWidth="2"/>
                    <line x1="125" y1="150" x2="125" y2="220" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3"/>
                    <text x="125" y="240" textAnchor="middle" className="fill-green-600 dark:fill-green-400 text-xs font-semibold">Perpendicular Cut</text>
                  </g>
                  
                  {/* Incorrect Alignment */}
                  <g transform="translate(250, 0)">
                    <text x="125" y="25" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-sm font-semibold">✗ Misaligned</text>
                    
                    {/* Nozzle Body */}
                    <rect x="75" y="50" width="100" height="60" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" rx="5"/>
                    {/* Nozzle Bore */}
                    <ellipse cx="125" cy="110" rx="20" ry="8" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
                    {/* Off-center Beam */}
                    <line x1="115" y1="40" x2="115" y2="110" stroke="#ef4444" strokeWidth="3"/>
                    <circle cx="115" cy="110" r="3" fill="url(#beamCenter)"/>
                    {/* Uneven Gas Flow */}
                    <path d="M 100 120 L 95 150 M 90 145 L 95 150 L 100 145" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                    <path d="M 120 120 L 120 150 M 115 145 L 120 150 L 125 145" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                    <path d="M 145 120 L 155 150 M 150 145 L 155 150 L 160 145" stroke="#3b82f6" strokeWidth="3" fill="none"/>
                    <text x="125" y="170" textAnchor="middle" className="fill-current text-xs">Uneven Gas Flow</text>
                    
                    {/* Material Cut - Angled */}
                    <path d="M 80 180 L 170 180 L 165 220 L 85 220 Z" fill="#6b7280" stroke="#374151" strokeWidth="2"/>
                    <line x1="115" y1="150" x2="110" y2="220" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,3"/>
                    <text x="125" y="240" textAnchor="middle" className="fill-red-600 dark:fill-red-400 text-xs font-semibold">Angled Cut</text>
                  </g>
                  
                  {/* Legend */}
                  <g transform="translate(150, 260)">
                    <line x1="0" y1="0" x2="20" y2="0" stroke="#ef4444" strokeWidth="2"/>
                    <text x="25" y="5" className="fill-current text-xs">Laser Beam</text>
                    <line x1="80" y1="0" x2="100" y2="0" stroke="#3b82f6" strokeWidth="2"/>
                    <path d="M 95 -3 L 100 0 L 95 3" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                    <text x="105" y="5" className="fill-current text-xs">Assist Gas</text>
                  </g>
                </svg>
                <p className="text-center text-xs text-muted-foreground mt-2">Proper beam centering in nozzle bore is critical for perpendicular cuts and consistent quality.</p>
              </div>
              
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
                  <li>
                    Check nozzle concentricity (see{' '}
                    <Link href="/guides/nozzle-selection-guide#alignment" className="underline">Nozzle Alignment Guide</Link>
                    )
                  </li>
                  <li>Reduce speed or increase power</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 4: Excessive Dross Formation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Insufficient assist gas pressure (60%)</li>
                  <li>Cutting speed too slow (25%)</li>
                  <li>Nozzle blockage or wear (10%)</li>
                  <li>Focus position too low (5%)</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>
                    Increase gas pressure (reference{' '}
                    <Link href="/guides/assist-gas-chart" className="underline">Gas Pressure Chart</Link>
                    )
                  </li>
                  <li>Increase cutting speed by 10-15%</li>
                  <li>Clean or replace nozzle, check orifice diameter</li>
                  <li>Raise focus position slightly (+0.5 to +1mm)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 5: Rough Cut Edge (High Striations)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Incorrect focus position</li>
                  <li>Vibration in cutting head or gantry</li>
                  <li>Unsuitable cutting speed</li>
                  <li>Insufficient power density</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>
                    Optimize focus position (see{' '}
                    <Link href="/guides/focus-position-guide" className="underline">Focus Position Guide</Link>
                    )
                  </li>
                  <li>Check mechanical components for wear or looseness</li>
                  <li>Adjust speed ±15% to find optimal zone</li>
                  <li>Increase laser power or reduce speed</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 6: Burning or Excessive Heat-Affected Zone</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Cutting speed too slow</li>
                  <li>Excessive laser power</li>
                  <li>Poor heat dissipation</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Increase cutting speed</li>
                  <li>Reduce laser power output</li>
                  <li>Use positive focus position for thin materials</li>
                  <li>Consider using nitrogen instead of oxygen</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 7: Inconsistent Cut Quality</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Unstable laser power output</li>
                  <li>Material thickness or quality variation</li>
                  <li>Unstable gas pressure</li>
                  <li>Thermal lens effect in optics</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Check laser source stability and diagnostics</li>
                  <li>Verify material batch consistency</li>
                  <li>Install gas pressure regulator/stabilizer</li>
                  <li>Clean protective window and check lens condition</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 8: Corner Overburn</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Deceleration at corners causes heat accumulation</li>
                  <li>Lack of corner power compensation</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Enable corner power reduction in CNC settings</li>
                  <li>Reduce power by 10-20% at sharp corners</li>
                  <li>Increase corner speed if machine supports</li>
                  <li>
                    See{' '}
                    <Link href="/guides/process-optimization-guide" className="underline">Process Optimization Guide</Link>
                    {' '}for advanced corner strategies
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 9: Pierce Marks or Spatter</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Excessive pierce power</li>
                  <li>Insufficient pierce gas pressure</li>
                  <li>Too short pierce delay time</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Reduce pierce power to 60-80% of cutting power</li>
                  <li>Increase pierce gas pressure slightly</li>
                  <li>Extend pierce time by 100-200ms</li>
                  <li>Use softer pierce ramp profile in CNC</li>
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
              <CardTitle className="text-lg">Issue 11: Chiller Alarm</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Water temperature too high/insufficient water level</li>
                  <li>Water circuit blockage or dirty filter</li>
                  <li>Ambient temperature exceeds specification</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Add deionized water and check level sensor</li>
                  <li>Clean water filter and check pump operation</li>
                  <li>Improve workshop ventilation</li>
                  <li>Check chiller condenser for dust accumulation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 12: Cutting Head Collision Detection</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Actual collision with workpiece or clamps</li>
                  <li>Capacitive sensor malfunction or contamination</li>
                  <li>Incorrect Z-axis zero point</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Inspect nozzle for damage, check fixture clearances</li>
                  <li>Clean capacitive sensor, recalibrate if needed</li>
                  <li>Recalibrate Z-axis zero point and height sensing</li>
                  <li>Verify program coordinates and machine limits</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 13: Axis Motion Errors</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Servo drive faults or encoder errors</li>
                  <li>Mechanical obstruction or binding</li>
                  <li>Lubrication insufficient</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Check servo drive error codes and diagnostics</li>
                  <li>Inspect guide rails and drive components</li>
                  <li>Lubricate linear guides and ball screws</li>
                  <li>Check encoder cables for damage</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 14: Gas Supply Problems</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              {/* Gas Pressure System Diagram */}
              <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
                <svg viewBox="0 0 700 200" className="w-full max-w-3xl mx-auto" role="img" aria-label="Gas pressure system diagram from cylinder to cutting head">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                    </marker>
                  </defs>
                  
                  {/* Gas Cylinder */}
                  <g>
                    <rect x="20" y="60" width="80" height="100" fill="#6b7280" stroke="#374151" strokeWidth="2" rx="5"/>
                    <circle cx="60" cy="60" r="15" fill="#4b5563" stroke="#374151" strokeWidth="2"/>
                    <text x="60" y="130" textAnchor="middle" className="fill-white text-xs font-semibold">GAS</text>
                    <text x="60" y="145" textAnchor="middle" className="fill-white text-xs">Cylinder</text>
                    <text x="60" y="180" textAnchor="middle" className="fill-current text-xs font-semibold">200 bar</text>
                  </g>
                  
                  {/* Pressure Gauge 1 */}
                  <circle cx="130" cy="110" r="20" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
                  <text x="130" y="115" textAnchor="middle" className="fill-white text-xs font-bold">P1</text>
                  
                  {/* Connection Line 1 */}
                  <line x1="100" y1="110" x2="110" y2="110" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                  
                  {/* Regulator */}
                  <g>
                    <rect x="180" y="80" width="100" height="60" fill="#9ca3af" stroke="#4b5563" strokeWidth="2" rx="5"/>
                    <text x="230" y="105" textAnchor="middle" className="fill-current text-xs font-semibold">Pressure</text>
                    <text x="230" y="120" textAnchor="middle" className="fill-current text-xs font-semibold">Regulator</text>
                    <circle cx="230" cy="135" r="8" fill="#4b5563" stroke="#374151" strokeWidth="1"/>
                    <text x="230" y="165" textAnchor="middle" className="fill-current text-xs font-semibold">Set: 15 bar</text>
                  </g>
                  
                  {/* Connection Line 2 */}
                  <line x1="150" y1="110" x2="180" y2="110" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                  
                  {/* Pressure Gauge 2 */}
                  <circle cx="310" cy="110" r="20" fill="#1f2937" stroke="#374151" strokeWidth="2"/>
                  <text x="310" y="115" textAnchor="middle" className="fill-white text-xs font-bold">P2</text>
                  
                  {/* Connection Line 3 */}
                  <line x1="280" y1="110" x2="290" y2="110" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                  
                  {/* Filter */}
                  <g>
                    <rect x="360" y="90" width="60" height="40" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" rx="3"/>
                    <line x1="370" y1="100" x2="370" y2="120" stroke="#475569" strokeWidth="1"/>
                    <line x1="375" y1="100" x2="375" y2="120" stroke="#475569" strokeWidth="1"/>
                    <line x1="380" y1="100" x2="380" y2="120" stroke="#475569" strokeWidth="1"/>
                    <line x1="385" y1="100" x2="385" y2="120" stroke="#475569" strokeWidth="1"/>
                    <line x1="390" y1="100" x2="390" y2="120" stroke="#475569" strokeWidth="1"/>
                    <line x1="395" y1="100" x2="395" y2="120" stroke="#475569" strokeWidth="1"/>
                    <line x1="400" y1="100" x2="400" y2="120" stroke="#475569" strokeWidth="1"/>
                    <line x1="405" y1="100" x2="405" y2="120" stroke="#475569" strokeWidth="1"/>
                    <line x1="410" y1="100" x2="410" y2="120" stroke="#475569" strokeWidth="1"/>
                    <text x="390" y="150" textAnchor="middle" className="fill-current text-xs font-semibold">Filter</text>
                  </g>
                  
                  {/* Connection Line 4 */}
                  <line x1="330" y1="110" x2="360" y2="110" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                  
                  {/* Solenoid Valve */}
                  <g>
                    <rect x="450" y="95" width="70" height="30" fill="#f59e0b" stroke="#d97706" strokeWidth="2" rx="3"/>
                    <text x="485" y="113" textAnchor="middle" className="fill-white text-xs font-semibold">Valve</text>
                    <rect x="470" y="85" width="30" height="10" fill="#6b7280" stroke="#374151" strokeWidth="1"/>
                    <text x="485" y="150" textAnchor="middle" className="fill-current text-xs font-semibold">Solenoid</text>
                  </g>
                  
                  {/* Connection Line 5 */}
                  <line x1="420" y1="110" x2="450" y2="110" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                  
                  {/* Flow Line to Cutting Head */}
                  <line x1="520" y1="110" x2="570" y2="110" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#arrowhead)"/>
                  
                  {/* Cutting Head */}
                  <g>
                    <rect x="580" y="80" width="90" height="60" fill="#6366f1" stroke="#4f46e5" strokeWidth="2" rx="5"/>
                    <text x="625" y="105" textAnchor="middle" className="fill-white text-xs font-semibold">Cutting</text>
                    <text x="625" y="120" textAnchor="middle" className="fill-white text-xs font-semibold">Head</text>
                    <ellipse cx="625" cy="140" rx="15" ry="5" fill="#4f46e5" stroke="#4338ca" strokeWidth="1"/>
                    <text x="625" y="165" textAnchor="middle" className="fill-current text-xs font-semibold">Nozzle</text>
                  </g>
                  
                  {/* Labels for Check Points */}
                  <g>
                    <text x="130" y="40" textAnchor="middle" className="fill-current text-xs font-semibold">Check Point 1:</text>
                    <text x="130" y="52" textAnchor="middle" className="fill-current text-xs">Cylinder Pressure</text>
                    
                    <text x="310" y="40" textAnchor="middle" className="fill-current text-xs font-semibold">Check Point 2:</text>
                    <text x="310" y="52" textAnchor="middle" className="fill-current text-xs">Working Pressure</text>
                    
                    <text x="485" y="40" textAnchor="middle" className="fill-current text-xs font-semibold">Check Point 3:</text>
                    <text x="485" y="52" textAnchor="middle" className="fill-current text-xs">Valve Operation</text>
                  </g>
                </svg>
                <p className="text-center text-xs text-muted-foreground mt-2">Gas system troubleshooting: Check cylinder level → Verify regulator setting → Inspect filter → Test valve operation → Measure cutting head pressure.</p>
              </div>
              
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Gas cylinder empty or pressure too low</li>
                  <li>Regulator malfunction</li>
                  <li>Line leaks or valve closed</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Check cylinder pressure gauge, replace if needed</li>
                  <li>Inspect and calibrate pressure regulator</li>
                  <li>
                    Perform leak test with soap solution (see{' '}
                    <Link href="/guides/assist-gas-chart" className="underline">Gas Safety Procedures</Link>
                    )
                  </li>
                  <li>Verify all gas valves in proper position</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 15: Emergency Stop Activated</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>E-stop button pressed (operator or safety trigger)</li>
                  <li>Safety interlock open (door, light curtain)</li>
                  <li>External equipment fault signal</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Release E-stop button by rotating clockwise</li>
                  <li>Check all safety interlocks and doors</li>
                  <li>Verify external equipment status (chiller, exhaust)</li>
                  <li>Review machine diagnostics for fault source</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 3: Laser Source Problems */}
      <section id="laser" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Section 3: Laser Source Problems</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 16: Laser Power Degradation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Laser diode aging (fiber laser)</li>
                  <li>Contaminated optics reducing transmission</li>
                  <li>Thermal management issues</li>
                  <li>Power supply degradation</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Perform laser power calibration/measurement</li>
                  <li>Clean all optical elements systematically</li>
                  <li>Check cooling water temperature and flow</li>
                  <li>Contact manufacturer for diode replacement assessment</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 17: Laser Won't Start or Fire</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Safety interlocks not satisfied</li>
                  <li>Laser source fault or protection mode</li>
                  <li>Communication error between controller and laser</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Verify all interlocks closed (chiller, doors, emergency stop)</li>
                  <li>Check laser ready/fault indicators on control panel</li>
                  <li>Inspect communication cables and connections</li>
                  <li>Review laser error log for fault codes</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 18: Unstable Laser Output</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Power supply instability</li>
                  <li>Thermal fluctuations in laser cavity</li>
                  <li>Cooling system inconsistency</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Install power stabilizer/UPS if needed</li>
                  <li>Allow adequate warmup time (15-30 min)</li>
                  <li>Check water temperature stability (±1°C)</li>
                  <li>Verify power supply voltage within spec</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 19: Laser Overheating Alarm</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Insufficient cooling water flow or temperature</li>
                  <li>High ambient temperature</li>
                  <li>Duty cycle exceeded</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Check chiller operation and set point</li>
                  <li>Inspect water flow rate and filter condition</li>
                  <li>Reduce duty cycle or implement cooling breaks</li>
                  <li>Improve workshop air conditioning</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 4: Control System Faults */}
      <section id="control" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Section 4: Control System Faults</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 20: CNC Not Responding</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Software crash or frozen</li>
                  <li>Communication loss with machine controller</li>
                  <li>Computer hardware malfunction</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Restart CNC software and controller</li>
                  <li>Check Ethernet/serial cable connections</li>
                  <li>Verify network settings and IP addresses</li>
                  <li>Test with alternative control computer if available</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 21: Program Won't Load or Run</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>File format incompatibility</li>
                  <li>Corrupted program file</li>
                  <li>Memory full or insufficient resources</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Verify file format compatibility (.nc, .gcode, etc.)</li>
                  <li>Re-generate program from CAM software</li>
                  <li>Delete old unused programs to free memory</li>
                  <li>Check program for syntax errors</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 22: Machine Coordinates Off/Lost</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Power interruption during operation</li>
                  <li>Encoder feedback loss</li>
                  <li>Mechanical collision shifted position</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Perform machine homing sequence</li>
                  <li>Re-establish work coordinate system (WCS)</li>
                  <li>Check encoder cables and connections</li>
                  <li>Verify home switches functioning properly</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 23: Height Sensing Malfunction</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Capacitive sensor contamination</li>
                  <li>Sensor calibration drift</li>
                  <li>Material surface conditions interfering</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Clean sensor surface with alcohol wipe</li>
                  <li>
                    Recalibrate height sensor (see{' '}
                    <Link href="/guides/nozzle-selection-guide" className="underline">Standoff Calibration</Link>
                    )
                  </li>
                  <li>Verify sensor mounting and electrical connections</li>
                  <li>Test on clean material surface</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 5: Optical Path Problems */}
      <section id="optical" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Section 5: Optical Path Problems</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 24: Beam Alignment Drift</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Mirror misalignment from vibration or thermal expansion</li>
                  <li>Loose mirror mounts</li>
                  <li>Building settlement affecting machine frame</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Perform beam alignment check with burn paper</li>
                  <li>Adjust mirror angles systematically from laser source</li>
                  <li>Tighten all mirror mounting hardware</li>
                  <li>Schedule quarterly alignment verification</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 25: Optics Contamination</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Spatter or smoke deposition on protective window</li>
                  <li>Dust accumulation on mirrors/lenses</li>
                  <li>Condensation from temperature changes</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Clean protective window daily with lens tissue</li>
                  <li>Inspect and clean focusing lens weekly</li>
                  <li>Check collimator and beam delivery optics monthly</li>
                  <li>Maintain positive air pressure in beam path</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 26: Focusing Lens Damage</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Excessive power density causing thermal damage</li>
                  <li>Spatter strike from piercing operations</li>
                  <li>Reflective material backreflection</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Replace damaged lens immediately</li>
                  <li>
                    Verify nozzle diameter adequate for power (see{' '}
                    <Link href="/guides/nozzle-selection-guide" className="underline">Nozzle Selection</Link>
                    )
                  </li>
                  <li>Increase standoff distance for reflective materials</li>
                  <li>Optimize pierce parameters to reduce spatter</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 6: Engraving Issues */}
      <section id="engraving" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Section 6: Engraving Issues</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 27: Uneven Engraving Depth</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Non-flat work surface or material warping</li>
                  <li>Inconsistent focal distance across engraving area</li>
                  <li>Z-axis height sensing malfunction</li>
                  <li>Variable material density or coating thickness</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Verify work table flatness with precision level (tolerance: ±0.1mm over 500mm)</li>
                  <li>Enable automatic height sensing for uneven surfaces</li>
                  <li>Use vacuum table or weight fixtures to flatten material</li>
                  <li>Calibrate Z-axis and verify focus consistency across bed</li>
                  <li>Test material batch consistency before production run</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 28: Raster Engraving Artifacts/Banding</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Servo acceleration/deceleration inconsistency</li>
                  <li>Backlash in motion system (belts, rails)</li>
                  <li>Incorrect scanning gap or line spacing</li>
                  <li>Power modulation frequency mismatch with scan speed</li>
                  <li>Bi-directional scanning offset error</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Reduce acceleration values by 20-30% in CNC settings</li>
                  <li>Inspect and tension drive belts (proper tension: 3-5mm deflection under finger pressure)</li>
                  <li>Check linear rail bearing wear and lubrication</li>
                  <li>Optimize scan gap: typically 0.1-0.15mm for 500 DPI equivalent</li>
                  <li>Calibrate bi-directional offset compensation in controller</li>
                  <li>Use uni-directional scanning for highest quality (50% speed penalty)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 29: Vector Engraving Quality Issues</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Speed too high for material response time</li>
                  <li>Insufficient power for desired depth</li>
                  <li>Corner speed reduction causing depth variation</li>
                  <li>Focus position not optimized for shallow engraving</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Reduce engraving speed to 50-150 mm/s for fine detail</li>
                  <li>Use positive focus (+0.5 to +2mm) for shallow surface engraving</li>
                  <li>Enable corner power compensation (reduce 15-25% at corners)</li>
                  <li>Multiple passes at lower power provide better control than single high-power pass</li>
                  <li>
                    See{' '}
                    <Link href="/guides/focus-position-guide" className="underline">Focus Position Guide</Link>
                    {' '}for engraving-specific focus settings
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 30: Image Distortion or Skewing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Gantry not square to bed (perpendicularity error)</li>
                  <li>Encoder scaling factor incorrect</li>
                  <li>Belt slip or irregular tension</li>
                  <li>Software scaling or resolution mismatch</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Perform gantry squareness calibration (measure diagonal distances, adjust until equal within 0.5mm)</li>
                  <li>Engrave test grid pattern (100x100mm square) and measure actual dimensions</li>
                  <li>Adjust encoder counts-per-mm in controller if scaling error detected</li>
                  <li>Verify belt tension equal on both sides of gantry</li>
                  <li>Check image import resolution matches machine DPI settings</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Issue 31: Inconsistent Power in Engraving Mode</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>Possible Causes</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>PWM/analog power modulation frequency too low</li>
                  <li>Laser minimum power threshold issues</li>
                  <li>Power supply ripple or instability</li>
                  <li>Software grayscale conversion errors</li>
                </ul>
              </div>
              <div>
                <strong>Solutions</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Increase PWM frequency to 20-25 kHz (fiber lasers) or 5-10 kHz (CO2 lasers)</li>
                  <li>Calibrate laser minimum power setting (typically 10-15% for stable output)</li>
                  <li>Perform power ramp test: 10-100% in 10% increments, measure actual output</li>
                  <li>Use dithering algorithms (Floyd-Steinberg, Jarvis) for better grayscale rendering</li>
                  <li>Check controller DAC resolution (minimum 8-bit, prefer 12-bit for smooth gradients)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CO2 vs Fiber Laser Comparison */}
      <section id="laser-types" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">CO2 vs Fiber Laser Troubleshooting Comparison</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Laser Type Differences in Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold">Issue Type</th>
                    <th className="text-left py-3 px-4 font-semibold">CO2 Laser (10.6μm)</th>
                    <th className="text-left py-3 px-4 font-semibold">Fiber Laser (1.06μm)</th>
                    <th className="text-left py-3 px-4 font-semibold">Key Differences</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="py-3 px-4 font-medium">Reflective Materials (Al, Cu, Brass)</td>
                    <td className="py-3 px-4 text-muted-foreground">Extremely difficult, high reflectivity (90-95%) can damage optics. Avoid or use special coatings.</td>
                    <td className="py-3 px-4 text-muted-foreground">Manageable with proper settings. Reflectivity 70-85%. Increase nitrogen pressure to 16-20 bar, reduce speed 30-40%.</td>
                    <td className="py-3 px-4 text-xs">Fiber lasers handle reflective metals far better due to wavelength absorption characteristics</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Focus Sensitivity</td>
                    <td className="py-3 px-4 text-muted-foreground">Larger focal spot (0.15-0.3mm), more forgiving focus tolerance (±1-2mm). Longer Rayleigh length.</td>
                    <td className="py-3 px-4 text-muted-foreground">Smaller focal spot (0.05-0.15mm), critical focus positioning (±0.5mm). Shorter depth of focus.</td>
                    <td className="py-3 px-4 text-xs">Fiber lasers require more precise focus calibration and maintenance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Power Degradation Pattern</td>
                    <td className="py-3 px-4 text-muted-foreground">Gradual tube wear over 2,000-10,000 hours. Rechargeable tubes available. Monitor voltage increase as indicator.</td>
                    <td className="py-3 px-4 text-muted-foreground">Diode aging over 30,000-100,000 hours. Non-serviceable by user. Monitor total operating hours and power calibration.</td>
                    <td className="py-3 px-4 text-xs">Fiber lasers have 3-10x longer operational life but cannot be refurbished</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Optics Contamination</td>
                    <td className="py-3 px-4 text-muted-foreground">ZnSe lenses and mirrors highly susceptible to moisture, spatter. Clean every 40-100 hours. Cost: $150-600/lens.</td>
                    <td className="py-3 px-4 text-muted-foreground">Quartz protective window primary concern. Clean every 100-300 hours. Fiber delivery path sealed. Cost: $50-200/window.</td>
                    <td className="py-3 px-4 text-xs">Fiber lasers have simpler optics maintenance with sealed beam delivery</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Beam Alignment Issues</td>
                    <td className="py-3 px-4 text-muted-foreground">Multiple mirror alignment critical. Thermal drift affects alignment. Quarterly calibration recommended. Complex adjustment procedure.</td>
                    <td className="py-3 px-4 text-muted-foreground">Fiber cable delivery eliminates most alignment issues. Collimator and focus lens only. Stable over temperature. Annual check sufficient.</td>
                    <td className="py-3 px-4 text-xs">Fiber lasers drastically reduce beam alignment troubleshooting frequency</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Thin Material (&lt;1mm) Cutting</td>
                    <td className="py-3 px-4 text-muted-foreground">Excellent for thin materials. Lower power density suitable for delicate work. Minimal heat-affected zone achievable.</td>
                    <td className="py-3 px-4 text-muted-foreground">Excessive power density can cause breakthrough damage. Use defocused beam (+2 to +4mm) or reduce power to 20-40%.</td>
                    <td className="py-3 px-4 text-xs">CO2 lasers naturally better suited for very thin material processing</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Thick Material (&gt;15mm) Cutting</td>
                    <td className="py-3 px-4 text-muted-foreground">Limited capability above 20-25mm even at high power (4-6kW). Oxygen assist essential for carbon steel.</td>
                    <td className="py-3 px-4 text-muted-foreground">Superior performance up to 30-40mm with 6-12kW systems. Better power density penetration. Nitrogen or oxygen assist.</td>
                    <td className="py-3 px-4 text-xs">Fiber lasers excel at thick plate cutting due to higher power density</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Electrical Efficiency</td>
                    <td className="py-3 px-4 text-muted-foreground">8-15% wall-plug efficiency. Higher operating costs. Significant cooling requirements (chiller capacity 2-3x laser power).</td>
                    <td className="py-3 px-4 text-muted-foreground">25-40% wall-plug efficiency. Lower operating costs. Reduced cooling needs (chiller capacity 1-1.5x laser power).</td>
                    <td className="py-3 px-4 text-xs">Fiber lasers offer 60-70% reduction in energy consumption per watt of laser output</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Startup/Warmup Time</td>
                    <td className="py-3 px-4 text-muted-foreground">15-30 minute warmup required for thermal stability. Power instability if started cold.</td>
                    <td className="py-3 px-4 text-muted-foreground">Instant-on capability. Full power available within 1-2 minutes. No thermal warmup needed.</td>
                    <td className="py-3 px-4 text-xs">Fiber lasers eliminate warmup-related troubleshooting issues</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Non-Metal Materials</td>
                    <td className="py-3 px-4 text-muted-foreground">Excellent for wood, acrylic, leather, fabric, paper. Primary choice for organic materials and plastics.</td>
                    <td className="py-3 px-4 text-muted-foreground">Limited effectiveness on non-metals due to poor absorption at 1.06μm wavelength. Not recommended for organic materials.</td>
                    <td className="py-3 px-4 text-xs">CO2 lasers are the standard for non-metal material processing</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded text-xs">
              <strong className="text-blue-900 dark:text-blue-300">Selection Guidance:</strong> CO2 lasers excel at non-metals, thin materials, and applications requiring larger spot sizes. Fiber lasers dominate metal processing, especially reflective metals, thick plates, and high-speed production. When troubleshooting, always consider your laser type's inherent characteristics before assuming equipment malfunction.
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Advanced Diagnostics Section */}
      <section id="diagnostics" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Advanced Diagnostic Strategies</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Systematic Troubleshooting Methodology</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Effective troubleshooting follows the <strong>OBSERVE-ISOLATE-TEST-VERIFY</strong> approach. First, document the exact symptom with quantitative data (e.g., "burr height 0.5mm on bottom edge" vs. "bad cut quality"). Second, change one variable at a time—adjusting focus, pressure, and speed simultaneously makes it impossible to identify root cause. Third, test with controlled samples using consistent material batches and positions. Finally, verify the fix by running production parts, not just test coupons.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Common Diagnostic Pitfalls:</strong> Assuming the most complex cause first (often it's a dirty lens or loose nozzle), failing to check consumables before adjusting parameters, and making multiple changes without documenting which one resolved the issue. Professional laser operators maintain detailed fault logs tracking symptoms, conditions, actions taken, and outcomes—this historical data accelerates future troubleshooting by 40-60%.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Quick Diagnostic Decision Tree</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold">Symptom</th>
                    <th className="text-left py-3 px-4 font-semibold">Primary Check</th>
                    <th className="text-left py-3 px-4 font-semibold">Secondary Check</th>
                    <th className="text-left py-3 px-4 font-semibold">Reference</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="py-3 px-4 font-medium">Burrs on edge</td>
                    <td className="py-3 px-4 text-muted-foreground">Focus position</td>
                    <td className="py-3 px-4 text-muted-foreground">Gas pressure</td>
                    <td className="py-3 px-4">
                      <Link href="/guides/focus-position-guide" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">
                        Focus Guide
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Incomplete penetration</td>
                    <td className="py-3 px-4 text-muted-foreground">Laser power</td>
                    <td className="py-3 px-4 text-muted-foreground">Cutting speed</td>
                    <td className="py-3 px-4">
                      <Link href="/guides/material-thickness-parameters" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">
                        Parameters
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Excessive dross</td>
                    <td className="py-3 px-4 text-muted-foreground">Gas pressure</td>
                    <td className="py-3 px-4 text-muted-foreground">Nozzle condition</td>
                    <td className="py-3 px-4">
                      <Link href="/guides/assist-gas-chart" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">
                        Gas Chart
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Angled cut surface</td>
                    <td className="py-3 px-4 text-muted-foreground">Nozzle alignment</td>
                    <td className="py-3 px-4 text-muted-foreground">Beam centering</td>
                    <td className="py-3 px-4">
                      <Link href="/guides/nozzle-selection-guide#alignment" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">
                        Nozzle Alignment
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Inconsistent quality</td>
                    <td className="py-3 px-4 text-muted-foreground">Optics cleanliness</td>
                    <td className="py-3 px-4 text-muted-foreground">Material variation</td>
                    <td className="py-3 px-4">
                      <Link href="/guides/lens-specifications" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">
                        Optics Guide
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Corner overburn</td>
                    <td className="py-3 px-4 text-muted-foreground">Power compensation</td>
                    <td className="py-3 px-4 text-muted-foreground">Speed settings</td>
                    <td className="py-3 px-4">
                      <Link href="/guides/process-optimization-guide" className="text-blue-600 dark:text-blue-400 hover:underline text-xs">
                        Process Guide
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Material-Specific Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Stainless Steel Issues</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Symptom:</strong> Yellow/blue discoloration on nitrogen cutting. <strong>Cause:</strong> Insufficient nitrogen pressure (&lt;12 bar) or purity (&lt;99.5%). <strong>Solution:</strong> Increase pressure to 14-18 bar, verify nitrogen purity with oxygen analyzer (target: &lt;100ppm O₂). Refer to{' '}
                <Link href="/guides/assist-gas-chart" className="text-blue-600 dark:text-blue-400 hover:underline">Assist Gas Guide</Link> for gas purity specifications.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Symptom:</strong> Heavy dross on air cutting. <strong>Cause:</strong> Excessive oxidation in melt pool. <strong>Solution:</strong> Increase speed by 10-15% to reduce heat input, use positive focus (+0.5 to +1.0mm), ensure sharp focus spot for better energy concentration.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Aluminum Challenges</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Symptom:</strong> Inconsistent cutting or frequent breakthrough failures. <strong>Cause:</strong> High reflectivity (90%+) causes power instability. <strong>Solution:</strong> Use fiber lasers with aluminum-optimized wavelength control, increase nitrogen pressure to 16-20 bar for strong melt ejection, reduce speed by 30-40% vs. equivalent steel thickness. See{' '}
                <Link href="/guides/material-thickness-parameters" className="text-blue-600 dark:text-blue-400 hover:underline">aluminum cutting parameters</Link>.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Symptom:</strong> Severe edge oxidation. <strong>Cause:</strong> Aluminum's high thermal conductivity spreads heat rapidly. <strong>Solution:</strong> Mandatory high-purity nitrogen (99.9%+), increase gas flow rate by 20-30% compared to steel cutting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Thick Plate Cutting Problems</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Symptom:</strong> Taper or non-perpendicular edges on 15mm+ material. <strong>Cause:</strong> Insufficient depth of focus or power density gradient through thickness. <strong>Solution:</strong> Use negative focus (-2 to -4mm) to position focal waist mid-thickness, reduce speed to allow adequate melt time. Consult{' '}
                <Link href="/guides/focus-position-guide" className="text-blue-600 dark:text-blue-400 hover:underline">Focus Position Guide</Link> for thick plate strategies.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Carbon Steel Oxygen Cutting</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Symptom:</strong> Excessive slag or rough bottom edge. <strong>Cause:</strong> Oxygen pressure too high or cutting speed too slow causing over-oxidation. <strong>Solution:</strong> Reduce oxygen pressure to 0.3-0.6 bar for thin materials (1-6mm), increase speed by 10-15%, ensure nozzle standoff at 0.7-1.0mm. Reference{' '}
                <Link href="/guides/cutting-speed-chart" className="text-blue-600 dark:text-blue-400 hover:underline">Speed Chart</Link>.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Brass Cutting Challenges</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Symptom:</strong> Inconsistent penetration or reflective damage to optics. <strong>Cause:</strong> Brass has high reflectivity (85-90% for CO2, 70-80% for fiber) and high thermal conductivity causing rapid heat dissipation. Zinc vaporization at 907°C can create fumes.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Solution:</strong> Fiber lasers strongly preferred over CO2. Use high-purity nitrogen (99.9%+) at 16-20 bar pressure. Reduce speed by 25-35% compared to steel of equivalent thickness. Use negative focus (-1 to -2mm) for materials &gt;3mm. Ensure excellent fume extraction due to zinc oxide vapor. Monitor protective window for contamination—brass produces more optical fouling than steel.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Copper Cutting (Pure and Alloys)</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Symptom:</strong> Extremely difficult to cut, frequent failures, or laser damage. <strong>Cause:</strong> Copper has the highest reflectivity (95%+ for CO2, 90-95% for fiber at room temperature) and thermal conductivity (400 W/m·K) of common metals. Heat dissipates faster than laser can melt material.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution for Fiber Lasers:</strong> Only fiber lasers can reliably cut copper. Use maximum available power (minimum 3kW for thin sheets, 6-12kW for &gt;3mm). Preheat material to 200-300°C if possible to reduce reflectivity. Nitrogen pressure 18-22 bar. Extremely slow speeds: 50-70% of steel cutting speed. Use burst/pulsed mode if available for piercing. Monitor cutting head for reflected energy damage.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>CO2 Laser Warning:</strong> Pure copper cutting with CO2 lasers is generally not feasible and dangerous to optics. Reflectivity can cause catastrophic damage. Only copper alloys with &lt;80% copper content (like brass or bronze) are suitable for CO2 processing, and even then with extreme caution.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Titanium and Titanium Alloys</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Symptom:</strong> Excessive oxidation, discoloration, or embrittlement of cut edges. <strong>Cause:</strong> Titanium is highly reactive with oxygen at elevated temperatures, forming brittle titanium oxide layer. However, material cuts relatively easily due to low thermal conductivity and high laser absorption.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Solution:</strong> Mandatory use of inert gas—argon preferred over nitrogen for critical applications (aerospace, medical). Argon provides better shielding against oxidation. Pressure: 12-16 bar. If using nitrogen (cost consideration), increase purity to 99.99%+ and pressure to 16-20 bar. Use positive focus (+0.5 to +1mm) for clean top edge. Speed comparable to stainless steel but power may need 10-15% increase.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Quality Inspection:</strong> Titanium cut edges should be silver-gray. Blue, purple, or gold discoloration indicates oxygen contamination and potential embrittlement. For critical applications, perform dye penetrant testing or metallurgical inspection of heat-affected zone. See{' '}
                <Link href="/guides/edge-quality-standards" className="text-blue-600 dark:text-blue-400 hover:underline">Edge Quality Standards</Link> for titanium-specific criteria.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Preventive Diagnostics and Predictive Maintenance</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Early Warning Signs:</strong> Gradual quality degradation often precedes catastrophic failures. Monitor trending metrics: average cutting speed reduction (&gt;5% decline over 2 weeks may indicate power loss or optics degradation), increasing pierce time (lens contamination), rising dross formation (nozzle wear), or beam alignment drift requiring frequent recalibration. Address these indicators proactively before they cause production downtime.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Consumables Life Tracking:</strong> Implement hour meters on critical components: protective windows (200-400 hours depending on material), nozzles (80-200 hours), focus lenses (1,000-2,000 hours). Replace on schedule rather than waiting for failure—a $120 protective window replaced preventively costs far less than emergency downtime and potential cutting head damage ($5,000-12,000). See{' '}
              <Link href="/guides/nozzle-selection-guide" className="text-blue-600 dark:text-blue-400 hover:underline">Nozzle Life Management</Link>.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Data-Driven Optimization:</strong> Modern CNC systems log every cut with metadata (material, thickness, power, speed, gas pressure). Analyze this data quarterly to identify parameter drift, operator inconsistencies, or material batch variations. High-performing fabrication shops reduce troubleshooting time by 50-70% through systematic data analysis compared to reactive troubleshooting. Explore{' '}
              <Link href="/guides/process-optimization-guide" className="text-blue-600 dark:text-blue-400 hover:underline">Process Optimization</Link> strategies.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Environmental Factors Affecting Laser Performance</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Temperature Effects</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Optimal Range:</strong> 18-25°C (64-77°F). Outside this range, beam alignment drift can occur due to thermal expansion of machine frame and optical mounts. Every 10°C temperature change can shift beam position by 0.1-0.3mm, affecting cut quality.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Troubleshooting:</strong> If quality issues appear seasonally or during temperature swings, check beam alignment and recalibrate focus. Install HVAC or thermal barriers to maintain stable workshop temperature. Monitor chiller water temperature stability (±1°C required).
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Humidity Impact</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Optimal Range:</strong> 40-60% relative humidity (RH). High humidity (&gt;70% RH) causes condensation on optics, especially when equipment is cooler than ambient. Low humidity (&lt;30% RH) increases static electricity, attracting dust to optics.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Troubleshooting:</strong> Moisture spots on lenses indicate condensation issues—install dehumidifier or increase workshop temperature. Rapid optics contamination suggests static buildup—use anti-static spray on work surfaces and increase humidity. Store optics in sealed containers with desiccant packs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Vibration from External Sources</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Sensitivity:</strong> Laser cutting requires vibration isolation below 0.05g (0.5 m/s²). External vibration from nearby machinery, forklifts, or building resonance causes inconsistent cut quality, especially visible in fine details and corners.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Troubleshooting:</strong> Perform cut quality test when suspected sources are off vs. on. Install vibration isolation pads under machine feet (typical isolation: 90% reduction at 5-50 Hz). Separate laser from stamping presses, grinders, or heavy traffic areas. Use smartphone accelerometer apps to measure baseline vibration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Air Quality and Fume Extraction</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                <strong>Requirements:</strong> Proper fume extraction (minimum 1,000-2,000 CFM for typical cutting bed) prevents smoke recirculation that contaminates optics. Inadequate extraction also creates hazardous work environment and can trigger fire alarms.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Troubleshooting:</strong> Visible smoke in work area or rapid protective window contamination indicates insufficient extraction. Check filter loading (differential pressure gauge should read &lt;2 inches H₂O). Verify exhaust fan operation and duct integrity. Clean or replace filters per manufacturer schedule (typically every 2-6 months depending on utilization).
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-950/30 border border-green-300 dark:border-green-700 rounded p-3 text-xs">
              <strong className="text-green-800 dark:text-green-300">Best Practice:</strong> Install environmental monitoring system tracking temperature, humidity, and vibration. Many modern CNC controllers support sensor inputs for automated data logging. Correlating environmental data with quality metrics enables predictive maintenance and rapid root cause analysis.
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Preventive Maintenance Schedule</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                    <th className="text-left py-3 px-4 font-semibold">Component</th>
                    <th className="text-left py-3 px-4 font-semibold">Inspection Frequency</th>
                    <th className="text-left py-3 px-4 font-semibold">Replacement Interval</th>
                    <th className="text-left py-3 px-4 font-semibold">Warning Signs</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td className="py-3 px-4 font-medium">Protective Window</td>
                    <td className="py-3 px-4 text-muted-foreground">Daily (visual), Weekly (clean)</td>
                    <td className="py-3 px-4 text-muted-foreground">200-400 hours or when contamination cannot be removed</td>
                    <td className="py-3 px-4 text-xs">Yellowing, pitting, stubborn stains, reduced cutting performance</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Focusing Lens</td>
                    <td className="py-3 px-4 text-muted-foreground">Weekly (inspect), Bi-weekly (clean)</td>
                    <td className="py-3 px-4 text-muted-foreground">1,000-2,000 hours or when damaged</td>
                    <td className="py-3 px-4 text-xs">Visible coating damage, thermal cracks, power loss, beam quality degradation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Nozzle</td>
                    <td className="py-3 px-4 text-muted-foreground">Daily (check centering/damage)</td>
                    <td className="py-3 px-4 text-muted-foreground">80-200 hours (single-layer), 500-1,000 hours (ceramic)</td>
                    <td className="py-3 px-4 text-xs">Oval orifice, spatter buildup, inconsistent gas flow, burrs increase</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Mirrors (CO2 only)</td>
                    <td className="py-3 px-4 text-muted-foreground">Monthly (inspect), Quarterly (clean)</td>
                    <td className="py-3 px-4 text-muted-foreground">2-5 years or when coating damaged</td>
                    <td className="py-3 px-4 text-xs">Power loss, beam alignment drift, visible coating deterioration</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Collimator (Fiber only)</td>
                    <td className="py-3 px-4 text-muted-foreground">Quarterly (inspect)</td>
                    <td className="py-3 px-4 text-muted-foreground">5,000-10,000 hours or when damaged</td>
                    <td className="py-3 px-4 text-xs">Beam quality issues, focal spot enlargement, power instability</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Chiller Water/Filter</td>
                    <td className="py-3 px-4 text-muted-foreground">Weekly (level check), Monthly (quality check)</td>
                    <td className="py-3 px-4 text-muted-foreground">Water: 6-12 months, Filter: 3-6 months</td>
                    <td className="py-3 px-4 text-xs">Discolored water, reduced flow rate, temperature instability, algae growth</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Drive Belts</td>
                    <td className="py-3 px-4 text-muted-foreground">Monthly (tension check)</td>
                    <td className="py-3 px-4 text-muted-foreground">2,000-4,000 hours or when worn</td>
                    <td className="py-3 px-4 text-xs">Excessive deflection (&gt;5mm), fraying, position loss, belt dust accumulation</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Linear Rails/Guides</td>
                    <td className="py-3 px-4 text-muted-foreground">Monthly (lubrication), Quarterly (wear check)</td>
                    <td className="py-3 px-4 text-muted-foreground">5-10 years depending on usage</td>
                    <td className="py-3 px-4 text-xs">Increased noise, rough motion, visible wear tracks, positioning errors</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Assist Gas Filters</td>
                    <td className="py-3 px-4 text-muted-foreground">Monthly (inspect), Clean as needed</td>
                    <td className="py-3 px-4 text-muted-foreground">6-12 months or when pressure drop &gt;0.5 bar</td>
                    <td className="py-3 px-4 text-xs">Reduced pressure downstream, moisture in gas line, cutting quality decline</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Exhaust Filters</td>
                    <td className="py-3 px-4 text-muted-foreground">Monthly (pressure check)</td>
                    <td className="py-3 px-4 text-muted-foreground">2-6 months depending on material types</td>
                    <td className="py-3 px-4 text-xs">Reduced suction, visible smoke in workspace, pressure &gt;2 inches H₂O</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Capacitive Sensor</td>
                    <td className="py-3 px-4 text-muted-foreground">Weekly (clean), Monthly (calibrate)</td>
                    <td className="py-3 px-4 text-muted-foreground">3-5 years or when unreliable</td>
                    <td className="py-3 px-4 text-xs">Inconsistent sensing, false triggers, calibration drift, spatter buildup</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Beam Alignment (CO2)</td>
                    <td className="py-3 px-4 text-muted-foreground">Quarterly (verify), Semi-annually (full calibration)</td>
                    <td className="py-3 px-4 text-muted-foreground">N/A (adjustment only)</td>
                    <td className="py-3 px-4 text-xs">Off-center burn patterns, position-dependent quality variation</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded text-xs">
              <strong className="text-orange-900 dark:text-orange-300">Cost-Benefit Analysis:</strong> Preventive maintenance costs approximately 15-25% of reactive maintenance over 5-year equipment life. A $150 protective window replaced on schedule prevents potential $5,000-12,000 cutting head damage from spatter strike. Track maintenance hours and consumable costs to optimize intervals for your specific operating conditions.
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Related Technical Guides */}
      <div className="grid gap-6 md:grid-cols-2 mb-10">
        <Card>
          <CardHeader>
            <CardTitle>Process Parameter Guides</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-3">
            <div>
              <Link href="/guides/focus-position-guide" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Focus Position Adjustment Guide
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Learn proper focus calibration techniques and troubleshoot focus-related issues
              </p>
            </div>
            <div>
              <Link href="/guides/nozzle-selection-guide" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Nozzle Selection & Maintenance
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Choose correct nozzles, check alignment, and optimize standoff distance
              </p>
            </div>
            <div>
              <Link href="/guides/material-thickness-parameters" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Material Thickness Parameters
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Reference cutting parameters for different materials and thicknesses
              </p>
            </div>
            <div>
              <Link href="/guides/assist-gas-chart" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Assist Gas Selection Chart
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Optimize gas type, pressure, and flow rates for your application
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Optimization & Safety</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-3">
            <div>
              <Link href="/guides/process-optimization-guide" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Process Optimization Guide
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Advanced strategies for maximizing cutting efficiency and quality
              </p>
            </div>
            <div>
              <Link href="/guides/cutting-speed-chart" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Cutting Speed Reference Chart
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Find optimal cutting speeds for various materials and power levels
              </p>
            </div>
            <div>
              <Link href="/guides/edge-quality-standards" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Edge Quality Standards
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Understand quality classifications and inspection criteria
              </p>
            </div>
            <div>
              <Link href="/guides/safety-operations" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                Safe Operation Procedures
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Essential safety protocols and emergency procedures
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calculators & Tools */}
      <Card className="mb-10">
        <CardHeader>
          <CardTitle>Related Calculators & Tools</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3 text-sm">
          <div>
            <Link href="/tools/power-density-calculator" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Power Density Calculator
            </Link>
            <p className="text-xs text-muted-foreground mt-0.5">
              Calculate required power for your cutting application
            </p>
          </div>
          <div>
            <Link href="/tools/kerf-calculator" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Kerf Width Calculator
            </Link>
            <p className="text-xs text-muted-foreground mt-0.5">
              Estimate kerf width and compensation values
            </p>
          </div>
          <div>
            <Link href="/tools/gas-flow-calculator" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Gas Flow Calculator
            </Link>
            <p className="text-xs text-muted-foreground mt-0.5">
              Determine gas consumption and monthly costs
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Footer Disclaimer */}
      <Card className="mt-10 bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <CardContent className="pt-6 text-xs text-muted-foreground space-y-3">
          <div>
            <strong className="text-sm text-foreground">References & Data Sources:</strong>
            <ul className="mt-2 space-y-1 ml-4 list-disc">
              <li>Manufacturer Service Manuals: TRUMPF, Bystronic, Mazak, Amada, and Prima Power troubleshooting guides</li>
              <li>Industry Standards: ISO 9013 (Thermal Cutting Quality Standards), AWS D1.1 (Structural Welding Code)</li>
              <li>Technical Documentation: Precitec and Raytools cutting head maintenance procedures</li>
              <li>Field Experience: Aggregated data from production environments and certified laser operators</li>
            </ul>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-700 pt-3">
            <p>
              <strong className="text-foreground">Disclaimer:</strong> This troubleshooting guide provides general diagnostic procedures based on industry best practices and manufacturer documentation. Actual troubleshooting procedures may vary by equipment model, laser type, control system, and specific operating conditions. Always consult your equipment manufacturer's service manual for model-specific procedures and safety requirements. For complex issues or when in doubt, contact qualified service technicians.
            </p>
          </div>
          <div className="border-t border-gray-300 dark:border-gray-700 pt-3">
            <p>
              <strong className="text-foreground">Pro Tip:</strong> Establish a "first-piece inspection and anomaly logging" system for faster problem reproduction and identification. Maintain detailed fault logs tracking symptoms, environmental conditions, actions taken, and outcomes. Systematic documentation can improve troubleshooting efficiency by 50-70% and build valuable institutional knowledge.
            </p>
          </div>
          <div className="text-center border-t border-gray-300 dark:border-gray-700 pt-3">
            <p>Last Updated: November 2, 2025 | Page Version: 3.0 (Enhanced with Engraving, Emergency Procedures, Laser Type Comparison)</p>
            <p className="mt-1">Questions or suggestions? <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link></p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
