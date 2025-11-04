import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import { NozzleCrossSectionDiagram } from '@/components/cheatsheets/nozzle-cross-section-diagram';
import { NozzleDecisionTree } from '@/components/cheatsheets/nozzle-decision-tree';
import { NozzleStandoffVisualizer } from '@/components/cheatsheets/nozzle-standoff-visualizer';
import { NozzleComparisonMatrix } from '@/components/cheatsheets/nozzle-comparison-matrix';
import { NozzleWearProgression } from '@/components/cheatsheets/nozzle-wear-progression';
import {
  KERF_WIDTH_TABLE,
  GAS_FLOW_TABLE,
  THREAD_SPECIFICATIONS,
  NOZZLE_MATERIALS,
  ALIGNMENT_PROCEDURE,
} from '@/lib/data/cheatsheets/nozzle-selection-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutting Nozzle Selection Guide - Complete Technical Reference',
  description: 'Comprehensive nozzle selection guide for laser cutting: types, diameter selection, standoff distance, gas flow rates, maintenance, and troubleshooting. Based on Precitec and Raytools specifications.',
  path: '/guides/nozzle-selection-guide',
  keywords: [
    'laser cutting nozzle',
    'nozzle selection guide',
    'nozzle diameter',
    'cutting nozzle types',
    'single layer nozzle',
    'double layer nozzle',
    'nozzle standoff distance',
    'nozzle maintenance',
    'Precitec nozzle',
    'Raytools nozzle',
    'assist gas nozzle',
    'nozzle troubleshooting',
    'Laval nozzle',
    'high speed nozzle',
  ],
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Laser Cutting Nozzle Selection Guide',
  description:
    'Complete technical guide for selecting laser cutting nozzles including types, specifications, and maintenance',
  author: {
    '@type': 'Organization',
    name: 'LaserSpecHub',
  },
  datePublished: '2025-10-31',
  dateModified: '2025-11-02',
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What nozzle diameter should I use for 5mm stainless steel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For 5mm stainless steel with nitrogen, use a 1.5mm diameter double-layer nozzle with 12-15 bar pressure and 200-300 L/min flow rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between single-layer and double-layer nozzles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Single-layer nozzles have one gas channel and are more economical. Double-layer nozzles have inner cutting gas and outer protective gas flows, providing more stable gas flow and better cut quality, recommended for high-quality nitrogen cutting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I replace my laser cutting nozzle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Copper nozzles typically last 120 hours, chrome-plated copper 180 hours, and alloy nozzles 240 hours. Replace when the orifice diameter increases by 10% or cut quality degrades.',
      },
    },
  ],
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />
      <StructuredData type="FAQPage" data={faqStructuredData} />

      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Laser Cutting Nozzle Selection Guide</h1>
        <p className="text-lg text-muted-foreground">
          Choose the right nozzle to optimize cut quality, speed, and operational costs
        </p>
      </div>

      {/* Quick Reference Card */}
      <section className="mb-10">
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              Quick Reference Guide
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-blue-200 dark:border-blue-800">
                    <th className="text-left py-3 px-4 font-semibold">Material</th>
                    <th className="text-left py-3 px-4 font-semibold">Thickness</th>
                    <th className="text-left py-3 px-4 font-semibold">Gas</th>
                    <th className="text-left py-3 px-4 font-semibold">Nozzle Ø</th>
                    <th className="text-left py-3 px-4 font-semibold">Standoff</th>
                    <th className="text-left py-3 px-4 font-semibold">Pressure</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100 dark:divide-blue-900">
                  <tr>
                    <td className="py-3 px-4 font-medium">Carbon Steel</td>
                    <td className="py-3 px-4">1-3mm</td>
                    <td className="py-3 px-4">O₂</td>
                    <td className="py-3 px-4 font-bold text-blue-600 dark:text-blue-400">1.0mm</td>
                    <td className="py-3 px-4">0.7mm</td>
                    <td className="py-3 px-4">0.5-1.0 bar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Carbon Steel</td>
                    <td className="py-3 px-4">3-8mm</td>
                    <td className="py-3 px-4">O₂</td>
                    <td className="py-3 px-4 font-bold text-blue-600 dark:text-blue-400">1.5mm</td>
                    <td className="py-3 px-4">0.8mm</td>
                    <td className="py-3 px-4">1.0-1.5 bar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Stainless Steel</td>
                    <td className="py-3 px-4">1-3mm</td>
                    <td className="py-3 px-4">N₂</td>
                    <td className="py-3 px-4 font-bold text-blue-600 dark:text-blue-400">1.2mm</td>
                    <td className="py-3 px-4">1.0mm</td>
                    <td className="py-3 px-4">10-12 bar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Stainless Steel</td>
                    <td className="py-3 px-4">3-8mm</td>
                    <td className="py-3 px-4">N₂</td>
                    <td className="py-3 px-4 font-bold text-blue-600 dark:text-blue-400">1.5mm</td>
                    <td className="py-3 px-4">1.2mm</td>
                    <td className="py-3 px-4">12-15 bar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Aluminum</td>
                    <td className="py-3 px-4">1-3mm</td>
                    <td className="py-3 px-4">N₂</td>
                    <td className="py-3 px-4 font-bold text-blue-600 dark:text-blue-400">1.2mm</td>
                    <td className="py-3 px-4">1.5mm</td>
                    <td className="py-3 px-4">8-10 bar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Aluminum</td>
                    <td className="py-3 px-4">3-8mm</td>
                    <td className="py-3 px-4">N₂</td>
                    <td className="py-3 px-4 font-bold text-blue-600 dark:text-blue-400">1.5mm</td>
                    <td className="py-3 px-4">1.8mm</td>
                    <td className="py-3 px-4">10-12 bar</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              * Values are typical recommendations. Adjust based on specific laser power, material
              condition, and quality requirements.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section 1: Nozzle Types Overview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. Nozzle Types Overview</h2>

        <h3 className="text-xl font-semibold mb-4 mt-6">Classification by Structure</h3>

        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Single-Layer Nozzle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Structure</strong>
                <p className="text-muted-foreground mt-1">
                  Simple conical design with single gas channel. Gas flows directly through to the
                  orifice.
                </p>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">Applications</strong>
                <ul className="mt-1 space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>Thin to medium thickness (1-10mm)</li>
                  <li>General purpose cutting</li>
                  <li>Cost-sensitive applications</li>
                </ul>
              </div>
              <div>
                <strong className="text-green-500">✓</strong> Low cost, widely available
                <br />
                <strong className="text-red-500">✗</strong> Less stable gas flow
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Double-Layer Nozzle</CardTitle>
              <span className="px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold rounded mt-1 inline-block">
                Recommended
              </span>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Structure</strong>
                <p className="text-muted-foreground mt-1">
                  Dual-chamber design with inner cutting gas and outer protective gas flow. More
                  uniform gas distribution.
                </p>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">Applications</strong>
                <ul className="mt-1 space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>Medium to thick plate (5-20mm)</li>
                  <li>High-quality cutting requirements</li>
                  <li>Stainless steel nitrogen cutting</li>
                </ul>
              </div>
              <div>
                <strong className="text-green-500">✓</strong> Stable flow, better quality
                <br />
                <strong className="text-red-500">✗</strong> Higher price
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">High-Speed Nozzle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Structure</strong>
                <p className="text-muted-foreground mt-1">
                  Convergent-divergent (Laval) design accelerates gas to supersonic speeds through
                  throat section.
                </p>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">Applications</strong>
                <ul className="mt-1 space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>Thin sheet high-speed cutting (≤3mm)</li>
                  <li>High-volume production lines</li>
                  <li>Maximum throughput priority</li>
                </ul>
              </div>
              <div>
                <strong className="text-green-500">✓</strong> Extremely fast cutting
                <br />
                <strong className="text-red-500">✗</strong> Expensive, shorter lifespan
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Cross-Section Diagrams */}
        <div className="mb-6">
          <NozzleCrossSectionDiagram />
        </div>

        <h3 className="text-xl font-semibold mb-4 mt-8">Classification by Material</h3>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Material</th>
                    <th className="text-left py-3 px-4">Thermal Conductivity</th>
                    <th className="text-left py-3 px-4">Wear Resistance</th>
                    <th className="text-left py-3 px-4">Typical Life</th>
                    <th className="text-left py-3 px-4">Cost</th>
                    <th className="text-left py-3 px-4">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {NOZZLE_MATERIALS.map((mat, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-4 font-medium">{mat.material}</td>
                      <td className="py-3 px-4">
                        <span
                          className={
                            mat.thermalConductivity === 'Excellent'
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-blue-600 dark:text-blue-400'
                          }
                        >
                          {mat.thermalConductivity}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={
                            mat.wearResistance === 'Excellent'
                              ? 'text-green-600 dark:text-green-400'
                              : mat.wearResistance === 'Good'
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-orange-600 dark:text-orange-400'
                          }
                        >
                          {mat.wearResistance}
                        </span>
                      </td>
                      <td className="py-3 px-4">{mat.typicalLifeHours}h</td>
                      <td className="py-3 px-4">
                        <span
                          className={
                            mat.relativeCost === 'Low'
                              ? 'text-green-600 dark:text-green-400'
                              : mat.relativeCost === 'Medium'
                              ? 'text-orange-600 dark:text-orange-400'
                              : 'text-red-600 dark:text-red-400'
                          }
                        >
                          {mat.relativeCost}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-xs">{mat.applications}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              * Lifespan values are typical for standard operating conditions. Actual life varies
              based on power, material, gas type, and maintenance practices.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section 2: Interactive Decision Tree */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Interactive Nozzle Selector</h2>
        <p className="text-muted-foreground mb-6">
          Not sure which nozzle to choose? Use our interactive decision tree to get personalized
          recommendations based on your specific cutting requirements.
        </p>
        <NozzleDecisionTree />
      </section>

      {/* Section 3: Diameter Selection */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Nozzle Diameter Selection</h2>

        <p className="text-sm text-muted-foreground mb-4">
          Nozzle diameter is critical for cut quality and efficiency. Selecting the correct
          diameter ensures optimal gas flow, kerf width, and cutting speed.
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Diameter Selection by Material and Thickness</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Nozzle Diameter</th>
                    <th className="text-left py-3 px-4">Material Thickness</th>
                    <th className="text-left py-3 px-4">Assist Gas</th>
                    <th className="text-left py-3 px-4">Cutting Characteristics</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4 font-medium">ø 0.8 - 1.0mm</td>
                    <td className="py-3 px-4">0.5-3mm</td>
                    <td className="py-3 px-4">Oxygen</td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Thin sheet high-speed, precision cutting
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">ø 1.2 - 1.5mm</td>
                    <td className="py-3 px-4">3-8mm</td>
                    <td className="py-3 px-4">Oxygen / Nitrogen</td>
                    <td className="py-3 px-4 text-muted-foreground">
                      General purpose, most common
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">ø 1.8 - 2.0mm</td>
                    <td className="py-3 px-4">8-15mm</td>
                    <td className="py-3 px-4">Oxygen / Nitrogen</td>
                    <td className="py-3 px-4 text-muted-foreground">Medium-thick plate cutting</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">ø 2.5 - 3.0mm</td>
                    <td className="py-3 px-4">15-25mm</td>
                    <td className="py-3 px-4">Oxygen</td>
                    <td className="py-3 px-4 text-muted-foreground">Thick plate cutting</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">ø 3.5 - 5.0mm</td>
                    <td className="py-3 px-4">25mm+</td>
                    <td className="py-3 px-4">Oxygen</td>
                    <td className="py-3 px-4 text-muted-foreground">
                      Ultra-thick plate specialized
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Diameter Selection Principles</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">1.</span>
                <span>
                  <strong>Thinner material = Smaller diameter:</strong> Thin sheets benefit from
                  smaller nozzles for concentrated energy and faster speeds
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">2.</span>
                <span>
                  <strong>Thicker material = Larger diameter:</strong> Thick plates require larger
                  nozzles to ensure adequate gas flow and penetration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">3.</span>
                <span>
                  <strong>Nitrogen requires larger diameter:</strong> Nitrogen cutting typically
                  needs 0.2-0.5mm larger diameter than oxygen for same thickness
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">4.</span>
                <span>
                  <strong>When in doubt, go larger:</strong> Undersized nozzles risk burning out;
                  slightly oversized is safer
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Kerf Width Table */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Nozzle Diameter vs. Kerf Width</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Nozzle Diameter</th>
                    <th className="text-left py-3 px-4">Typical Kerf Width</th>
                    <th className="text-left py-3 px-4">Tolerance</th>
                    <th className="text-left py-3 px-4">Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {KERF_WIDTH_TABLE.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-4 font-medium">{row.nozzleDiameterMm}mm</td>
                      <td className="py-3 px-4">{row.typicalKerfMm}mm</td>
                      <td className="py-3 px-4">{row.toleranceMm}mm</td>
                      <td className="py-3 px-4 text-muted-foreground text-xs">
                        {row.applications}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              * Kerf width varies based on laser power, focus position, and cutting speed. Values
              shown are typical for standard conditions.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section 4: Standoff Distance & Focal Position */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Standoff Distance & Focal Position</h2>

        <p className="text-muted-foreground mb-6">
          Standoff distance (nozzle tip to workpiece) and focal position are critical parameters
          that affect cut quality, gas pressure delivery, and collision risk.
        </p>

        <div className="mb-6">
          <NozzleStandoffVisualizer />
        </div>

        <h3 className="text-xl font-semibold mb-4 mt-8">Material-Specific Standoff Recommendations</h3>

        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Carbon Steel (Oxygen)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong>Standoff:</strong> 0.5-1.0mm
              </div>
              <div>
                <strong>Focal Offset:</strong> 0 to +1mm (at or slightly below surface)
              </div>
              <div className="text-muted-foreground text-xs">
                Lower standoff maintains gas pressure for oxidation reaction. Watch for spatter
                adhesion on nozzle.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Stainless Steel (Nitrogen)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong>Standoff:</strong> 0.8-1.5mm
              </div>
              <div>
                <strong>Focal Offset:</strong> 0 to +2mm
              </div>
              <div className="text-muted-foreground text-xs">
                Slightly higher standoff reduces collision risk. Maintain consistency for quality.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Aluminum (Nitrogen)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong>Standoff:</strong> 1.0-2.0mm
              </div>
              <div>
                <strong>Focal Offset:</strong> 0 to +2mm
              </div>
              <div className="text-muted-foreground text-xs">
                Higher standoff protects optics from reflection damage. Use anti-reflective nozzle
                coating if available.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Non-Metals (Air/Nitrogen)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong>Standoff:</strong> 0.5-1.5mm
              </div>
              <div>
                <strong>Focal Offset:</strong> -1 to +1mm
              </div>
              <div className="text-muted-foreground text-xs">
                Adjust based on material flammability. Control flame with appropriate gas flow.
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Capacitive Height Control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <strong className="text-blue-600 dark:text-blue-400">How It Works</strong>
              <p className="text-muted-foreground mt-1">
                Capacitive sensors detect the electrical capacitance between nozzle and workpiece.
                The control system automatically adjusts Z-axis to maintain constant standoff
                distance, even on warped or uneven materials.
              </p>
            </div>

            <div>
              <strong className="text-green-600 dark:text-green-400">Setup Procedure</strong>
              <ol className="mt-2 space-y-1 ml-4 list-decimal text-muted-foreground">
                <li>Enable capacitive height sensing in control system</li>
                <li>Set target capacitance value (corresponds to desired standoff)</li>
                <li>Calibrate zero point (nozzle touching workpiece)</li>
                <li>Set tracking speed and sensitivity parameters</li>
                <li>Test on sample material and verify standoff accuracy</li>
              </ol>
            </div>

            <div>
              <strong className="text-orange-600 dark:text-orange-400">Calibration Schedule</strong>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>
                  • <strong>Daily:</strong> Check sensor cleanliness, remove dust/debris
                </li>
                <li>
                  • <strong>Weekly:</strong> Verify zero point calibration accuracy
                </li>
                <li>
                  • <strong>After nozzle change:</strong> Mandatory recalibration required
                </li>
                <li>
                  • <strong>After collision:</strong> Check sensor and recalibrate
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 5: Gas Flow & Pressure Requirements */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. Gas Flow & Pressure Requirements</h2>

        <p className="text-muted-foreground mb-6">
          Proper gas flow and pressure are essential for effective cutting. Insufficient flow leads
          to poor slag removal and oxidation, while excessive flow wastes gas without improving
          quality.
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Gas Flow Rates by Nozzle Diameter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Nozzle Ø</th>
                    <th className="text-left py-3 px-4">Oxygen Flow</th>
                    <th className="text-left py-3 px-4">O₂ Pressure</th>
                    <th className="text-left py-3 px-4">Nitrogen Flow</th>
                    <th className="text-left py-3 px-4">N₂ Pressure</th>
                    <th className="text-left py-3 px-4">Air Flow</th>
                    <th className="text-left py-3 px-4">Air Pressure</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {GAS_FLOW_TABLE.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-4 font-medium">{row.nozzleDiameterMm}mm</td>
                      <td className="py-3 px-4">{row.oxygenFlowLMin} L/min</td>
                      <td className="py-3 px-4">{row.oxygenPressureBar} bar</td>
                      <td className="py-3 px-4">{row.nitrogenFlowLMin} L/min</td>
                      <td className="py-3 px-4">{row.nitrogenPressureBar} bar</td>
                      <td className="py-3 px-4">{row.airFlowLMin} L/min</td>
                      <td className="py-3 px-4">{row.airPressureBar} bar</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              * Flow rates and pressures are typical values. Adjust based on material thickness,
              laser power, and cutting speed. Higher values within range for thicker materials.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Gas Purity Requirements</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div>
                <strong>Oxygen:</strong> 99.5%+ purity
              </div>
              <div className="text-muted-foreground text-xs">
                Higher purity improves cutting speed and edge quality. Industrial grade sufficient
                for most applications.
              </div>
              <div className="mt-3">
                <strong>Nitrogen:</strong> 99.99%+ purity (4.0 grade minimum)
              </div>
              <div className="text-muted-foreground text-xs">
                High purity critical for oxide-free edges on stainless steel. Consider 99.999%
                (5.0 grade) for best quality.
              </div>
              <div className="mt-3">
                <strong>Compressed Air:</strong> Clean, dry, oil-free
              </div>
              <div className="text-muted-foreground text-xs">
                Use proper filtration and dryers. Oil contamination damages optics and affects cut
                quality.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Pressure Optimization Tips</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>
                    Start with recommended pressure, then fine-tune based on cut quality
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Too low: Poor slag removal, oxidation, rough edges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Too high: Turbulent flow, excessive gas consumption, no quality gain</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>Monitor gas consumption to optimize operational costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  <span>
                    Use flow meters and pressure gauges to maintain consistent parameters
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
          <CardHeader>
            <CardTitle className="text-base">Related Guide</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="mb-2">
              For comprehensive information on assist gas selection, flow rates, and pressure
              optimization:
            </p>
            <Link
              href="/guides/assist-gas-chart"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              → Assist Gas Selection Chart & Guide
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Section 6: Nozzle Alignment & Centering */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. Nozzle Alignment & Centering</h2>

        <p className="text-muted-foreground mb-6">
          Proper nozzle alignment ensures the laser beam passes through the center of the nozzle
          orifice. Misalignment causes uneven cuts, increased nozzle wear, and potential damage to
          the cutting head.
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Alignment Procedure</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {ALIGNMENT_PROCEDURE.map((step) => (
                <div key={step.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{step.description}</p>
                    <p className="text-xs text-muted-foreground italic">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Signs of Misalignment</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">⚠</span>
                  <span>Cut edge is angled or beveled instead of perpendicular</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">⚠</span>
                  <span>Inconsistent cut quality around part perimeter</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">⚠</span>
                  <span>Excessive nozzle wear on one side</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">⚠</span>
                  <span>Burn marks or damage on nozzle interior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500">⚠</span>
                  <span>Elliptical instead of circular burn pattern on tape test</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Alignment Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Perform alignment check after every nozzle change</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Re-check alignment weekly or after any collision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Keep alignment tools (tape, gauge) readily accessible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Document alignment results in maintenance log</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">✓</span>
                  <span>Train all operators on proper alignment procedure</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Section 7: Nozzle Comparison Tool */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">7. Nozzle Comparison Tool</h2>
        <p className="text-muted-foreground mb-6">
          Compare different nozzle specifications side-by-side to make informed purchasing
          decisions. Consider total cost of ownership, not just initial price.
        </p>
        <NozzleComparisonMatrix />
      </section>

      {/* Section 8: Maintenance & Lifespan Management */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">8. Maintenance & Lifespan Management</h2>

        <p className="text-muted-foreground mb-6">
          Proper maintenance extends nozzle life and maintains cut quality. Regular inspection and
          timely replacement prevent production issues and minimize downtime.
        </p>

        <div className="mb-6">
          <NozzleWearProgression currentHours={0} maxLifeHours={120} />
        </div>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Inspection Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">1.</span>
                  <div>
                    <strong>Visual Inspection</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Check for deformation, cracks, burn marks, or spatter buildup
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">2.</span>
                  <div>
                    <strong>Orifice Diameter Measurement</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Use pin gauge or microscope. Replace if diameter increased by 10%
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">3.</span>
                  <div>
                    <strong>Concentricity Check</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Verify laser beam and nozzle orifice alignment with tape burn test
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">4.</span>
                  <div>
                    <strong>Thread Condition</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Inspect threads for wear or damage that could cause loosening
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Life Extension Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>Daily Cleaning</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Wipe nozzle exterior with soft cloth to remove spatter
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>Collision Avoidance</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Enable collision detection sensors, set appropriate safety height
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>Proper Storage</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Store in dry, dust-free container to prevent scratches
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>Scheduled Replacement</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      Replace proactively before complete failure affects quality
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="text-lg">Common Failure Causes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-12 text-center font-bold text-red-600 dark:text-red-400">
                  50%
                </span>
                <div>
                  <strong>Collision Damage</strong>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    Nozzle impacts workpiece or cutting table causing deformation or breakage.
                    <br />
                    <strong>Prevention:</strong> Enable anti-collision protection, regularly check
                    height sensors, proper Z-axis calibration
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-12 text-center font-bold text-orange-600 dark:text-orange-400">
                  30%
                </span>
                <div>
                  <strong>Spatter Adhesion</strong>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    Molten metal spatter adheres to nozzle interior, disrupting gas flow.
                    <br />
                    <strong>Prevention:</strong> Optimize cutting parameters, use anti-spatter
                    coating, clean regularly
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-12 text-center font-bold text-yellow-600 dark:text-yellow-400">
                  20%
                </span>
                <div>
                  <strong>Normal Wear</strong>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    High-temperature gas flow gradually enlarges orifice diameter over time.
                    <br />
                    <strong>Management:</strong> Track operating hours, measure diameter regularly,
                    establish replacement schedule
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-6 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
          <CardHeader>
            <CardTitle className="text-base">Related Tool</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            <p className="mb-2">Calculate nozzle lifespan and replacement schedule:</p>
            <Link
              href="/tools/nozzle-life-calculator"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              → Nozzle Life Prediction Calculator
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Section 9: Brand & Compatibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">9. Brand Comparison & Compatibility</h2>

        <p className="text-muted-foreground mb-6">
          Understanding brand specifications and compatibility helps with sourcing, inventory
          management, and finding cost-effective alternatives.
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Thread Specifications & Compatibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Brand/Series</th>
                    <th className="text-left py-3 px-4">Thread Specification</th>
                    <th className="text-left py-3 px-4">Compatible With</th>
                    <th className="text-left py-3 px-4">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {THREAD_SPECIFICATIONS.map((spec, idx) => (
                    <tr key={idx}>
                      <td className="py-3 px-4 font-medium">{spec.brand}</td>
                      <td className="py-3 px-4">{spec.threadSpec}</td>
                      <td className="py-3 px-4 text-xs">
                        <ul className="space-y-0.5">
                          {spec.compatibleWith.map((compat, i) => (
                            <li key={i}>• {compat}</li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-3 px-4 text-xs text-muted-foreground">{spec.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Major Brand Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-1">Precitec (Germany)</h4>
                <p className="text-muted-foreground text-xs">
                  Premium brand, excellent quality, higher price point. ProCutter series widely used,
                  HighSpeed series for thin sheet applications.
                </p>
              </div>

              <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800">
                <h4 className="font-semibold mb-1">Raytools (Switzerland)</h4>
                <p className="text-muted-foreground text-xs">
                  High market share, good cost-performance ratio. BM series general purpose, AG
                  series adaptive nozzles with auto height adjustment.
                </p>
              </div>

              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold mb-1">Chinese Brands (WSX, Bodor, etc.)</h4>
                <p className="text-muted-foreground text-xs">
                  Competitive pricing, improving quality. Good option for cost-sensitive applications.
                  Verify thread compatibility before purchasing.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Cross-Brand Replacement Guide</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Compatibility Factors</strong>
                <ul className="mt-2 space-y-1 text-muted-foreground text-xs ml-4 list-disc">
                  <li>Thread specification must match exactly</li>
                  <li>Nozzle height (body length) may vary between brands</li>
                  <li>Standoff distance may need recalibration</li>
                  <li>Gas flow characteristics can differ slightly</li>
                </ul>
              </div>

              <div>
                <strong className="text-green-600 dark:text-green-400">Replacement Tips</strong>
                <ul className="mt-2 space-y-1 text-muted-foreground text-xs ml-4 list-disc">
                  <li>Keep spare nozzles from same brand/batch when possible</li>
                  <li>Test alternative brands on non-critical jobs first</li>
                  <li>Document any parameter adjustments needed</li>
                  <li>Consider total cost including performance, not just price</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800">
          <CardContent className="pt-6 text-xs text-muted-foreground">
            <p>
              <strong>Price Disclaimer:</strong> Nozzle prices vary significantly based on supplier,
              order quantity, and market conditions. Values mentioned in this guide are approximate
              as of 2025 for reference only. Contact suppliers for current pricing.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Section 10: Troubleshooting Guide */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">10. Troubleshooting Common Issues</h2>

        <p className="text-muted-foreground mb-6">
          Quick diagnostic guide for nozzle-related cutting problems. Identifying root causes early
          prevents quality issues and equipment damage.
        </p>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                Symptom 1: Angled or Beveled Cut Edge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong className="text-red-600 dark:text-red-400">Likely Cause:</strong>{' '}
                Nozzle misalignment (beam not centered in orifice)
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Diagnostic Method:</strong>
                <span className="text-muted-foreground ml-2">
                  Perform tape burn test to check beam centering
                </span>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">Solutions:</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Adjust nozzle position or replace nozzle</li>
                  <li>Check cutting head installation and alignment</li>
                  <li>Perform optical path centering calibration</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                Symptom 2: Sudden Quality Degradation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong className="text-red-600 dark:text-red-400">Likely Cause:</strong> Nozzle
                wear or blockage
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Diagnostic Method:</strong>
                <span className="text-muted-foreground ml-2">
                  Visual inspection and orifice diameter measurement
                </span>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">Solutions:</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Clean or replace nozzle</li>
                  <li>Check gas purity and pressure</li>
                  <li>Verify standoff distance is correct</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                Symptom 3: Frequent Collision Alarms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong className="text-red-600 dark:text-red-400">Likely Cause:</strong> Nozzle
                deformation or height sensor malfunction
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Diagnostic Method:</strong>
                <span className="text-muted-foreground ml-2">
                  Visual check for deformation, test height sensor response
                </span>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">Solutions:</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Replace deformed nozzle immediately</li>
                  <li>Calibrate capacitive height sensor</li>
                  <li>Check Z-axis program settings and limits</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                Symptom 4: Nozzle Burning/Damage
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong className="text-red-600 dark:text-red-400">Likely Cause:</strong> Laser
                reflection or undersized nozzle diameter
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Diagnostic Method:</strong>
                <span className="text-muted-foreground ml-2">
                  Check nozzle interior for burn marks and scoring
                </span>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">Solutions:</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Use larger diameter nozzle</li>
                  <li>Review cutting parameters (power, speed) for appropriateness</li>
                  <li>For reflective materials, use anti-reflective nozzles</li>
                  <li>Increase standoff distance for aluminum/copper</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-red-500">⚠</span>
                Symptom 5: Excessive Spatter on Cut Edge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong className="text-red-600 dark:text-red-400">Likely Cause:</strong> Incorrect
                gas pressure or nozzle standoff
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">Diagnostic Method:</strong>
                <span className="text-muted-foreground ml-2">
                  Check gas pressure gauge, measure standoff distance
                </span>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">Solutions:</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>Increase gas pressure within recommended range</li>
                  <li>Adjust standoff distance (typically reduce for more pressure)</li>
                  <li>Verify nozzle orifice is not clogged</li>
                  <li>Consider switching to double-layer nozzle for better gas flow</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
          <CardHeader>
            <CardTitle className="text-base">Related Guides</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>For more comprehensive troubleshooting:</p>
            <div className="flex flex-col gap-2">
              <Link
                href="/guides/process-optimization-guide"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                → Process Optimization Guide
              </Link>
              <Link
                href="/guides/material-thickness-parameters"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                → Material Thickness Cutting Parameters
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Section 11: Related Tools & Guides */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Related Tools & Guides</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Calculators & Tools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <Link
                  href="/tools/nozzle-life-calculator"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Nozzle Life Prediction Calculator
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Estimate nozzle lifespan and replacement schedule based on usage conditions
                </p>
              </div>
              <div>
                <Link
                  href="/tools/kerf-calculator"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Kerf Width Calculator
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Calculate cutting kerf width based on nozzle diameter and parameters
                </p>
              </div>
              <div>
                <Link
                  href="/tools/gas-flow-calculator"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Gas Flow Calculator
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Determine required gas flow rates and monthly consumption
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Technical Guides</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <Link
                  href="/guides/assist-gas-chart"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Assist Gas Selection Chart
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Comprehensive guide to selecting and optimizing assist gas
                </p>
              </div>
              <div>
                <Link
                  href="/guides/material-thickness-parameters"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Material Thickness Cutting Parameters
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Complete parameter tables for different materials and thicknesses
                </p>
              </div>
              <div>
                <Link
                  href="/guides/focus-position-guide"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Focal Position Optimization Guide
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Understand focal point positioning and its impact on cut quality
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Process Optimization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <Link
                  href="/guides/cutting-speed-chart"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Cutting Speed Reference Chart
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Recommended cutting speeds for various materials and thicknesses
                </p>
              </div>
              <div>
                <Link
                  href="/guides/process-optimization-guide"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Process Optimization Guide
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Advanced techniques for maximizing cutting efficiency and quality
                </p>
              </div>
              <div>
                <Link
                  href="/guides/power-selection-guide"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Laser Power Selection Guide
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Choose appropriate laser power for your application requirements
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Maintenance & Safety</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <Link
                  href="/guides/maintenance-schedule"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Equipment Maintenance Schedule
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Complete maintenance checklist including nozzle replacement intervals
                </p>
              </div>
              <div>
                <Link
                  href="/guides/laser-safety-classes"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Laser Safety Classifications
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Understand laser safety standards and protective requirements
                </p>
              </div>
              <div>
                <Link
                  href="/guides/safety-operations"
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  Safe Operation Procedures
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Best practices for safe laser cutting operations
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Data Sources & Disclaimer */}
      <Card className="bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700">
        <CardContent className="pt-6 text-xs text-muted-foreground">
          <strong className="text-sm">References & Data Sources:</strong>
          <ul className="mt-3 space-y-1 ml-4 list-disc">
            <li>Precitec Technical Manuals - ProCutter and HighSpeed nozzle series specifications</li>
            <li>Raytools Product Catalogs - BM series and adaptive nozzle technical data</li>
            <li>Industry standards and best practices from laser cutting professionals</li>
            <li>Field data from production environments and equipment manufacturers</li>
          </ul>
          <p className="mt-4">
            <strong>Last Updated:</strong> November 2, 2025
            <br />
            <strong>Disclaimer:</strong> This guide provides general recommendations based on industry
            standards and manufacturer specifications. Actual parameters may vary based on specific
            equipment, material conditions, and application requirements. Always consult your equipment
            manufacturer's documentation and perform test cuts before production runs. LaserSpecHub is
            not responsible for cutting quality or equipment damage resulting from parameter selection.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
