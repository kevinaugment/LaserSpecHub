import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import { MaterialParametersTable } from '@/components/cheatsheets/material-thickness-parameters-table';
import { MaterialQuickNav } from '@/components/cheatsheets/material-quick-nav';
import { MaterialComparisonMatrix } from '@/components/cheatsheets/material-comparison-matrix';
import { ParameterRelationshipChart } from '@/components/cheatsheets/parameter-relationship-chart';
import { QuickParameterFinder } from '@/components/cheatsheets/quick-parameter-finder';
import {
  ALL_MATERIAL_PARAMETERS,
  MATERIAL_PARAMETERS_VERSION,
  MATERIAL_PARAMETERS_LAST_UPDATE,
  CARBON_STEEL_OXYGEN,
} from '@/lib/data/cheatsheets/material-thickness-parameters-data';
import { ALL_MATERIAL_CHARACTERISTICS } from '@/lib/data/cheatsheets/material-comparison-data';

export const metadata: Metadata = {
  title: 'Laser Cutting Material Thickness Parameters Guide - LaserSpecHub',
  description:
    'Comprehensive laser cutting material thickness parameter reference table, including cutting speed, gas pressure, nozzle diameter and focus position parameters for carbon steel, stainless steel, aluminum alloy and other materials at different powers and thicknesses. Based on data from mainstream manufacturers like TRUMPF and Bystronic.',
  keywords: [
    'laser cutting parameters',
    'cutting speed table',
    'material thickness parameters',
    'process parameter reference',
    'cutting parameters',
  ],
  alternates: {
    canonical: 'https://laserspechub.com/guides/material-thickness-parameters',
  },
  openGraph: {
    title: 'Laser Cutting Material Thickness Parameters - Complete Process Parameter Guide',
    description:
      'Quickly find cutting parameters for different materials, thicknesses and powers, including speed, gas pressure, nozzle and focus position.',
    type: 'article',
    url: 'https://laserspechub.com/guides/material-thickness-parameters',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Laser Cutting Material Thickness Parameters Guide',
  description: 'Detailed laser cutting process parameter database',
  author: {
    '@type': 'Organization',
    name: 'LaserSpecHub',
  },
  datePublished: MATERIAL_PARAMETERS_LAST_UPDATE,
  dateModified: MATERIAL_PARAMETERS_LAST_UPDATE,
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Laser Cutting Material Thickness Parameters Guide</h1>
        <p className="text-muted-foreground">
          Compiled based on process manuals from mainstream laser equipment manufacturers such as TRUMPF, Bystronic, Amada, and Mazak.
          Covers recommended cutting parameters for common materials like carbon steel, stainless steel, and aluminum alloy at different powers and thicknesses.
        </p>
        <div className="mt-2 text-sm text-muted-foreground">
          Data Version: {MATERIAL_PARAMETERS_VERSION} | 
          Last Updated: {MATERIAL_PARAMETERS_LAST_UPDATE}
        </div>
      </div>

      {/* Quick Navigation Cards */}
      <MaterialQuickNav />

      {/* Usage Guide */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-lg">How to Use This Reference Guide</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <strong>1. Select Material Type</strong>
            <p className="text-muted-foreground mt-1">
              Choose the parameter table corresponding to your material (carbon steel, stainless steel, aluminum alloy, etc.)
            </p>
          </div>
          <div>
            <strong>2. Determine Laser Power</strong>
            <p className="text-muted-foreground mt-1">
              Use the dropdown menu to select your equipment's laser power level (1kW-12kW)
            </p>
          </div>
          <div>
            <strong>3. Find Corresponding Thickness</strong>
            <p className="text-muted-foreground mt-1">
              Locate your material thickness in the table to obtain complete process parameters
            </p>
          </div>
          <div>
            <strong>4. Fine-Tune Parameters</strong>
            <p className="text-muted-foreground mt-1">
              Table parameters are reference values. Adjust ±10-15% based on equipment condition, material batch, and quality requirements
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Material Comparison Matrix */}
      <MaterialComparisonMatrix materials={ALL_MATERIAL_CHARACTERISTICS} />

      {/* Parameter Relationship Chart */}
      <ParameterRelationshipChart materialData={CARBON_STEEL_OXYGEN} />

      {/* Quick Parameter Finder */}
      <QuickParameterFinder />

      {/* Deep Technical Content */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Understanding Material-Specific Parameters | 材料特性深度解析</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Carbon Steel Cutting Characteristics | 碳钢切割特性</h3>
            <p className="mb-3">
              Carbon steel remains the most common material in laser cutting operations, accounting for over 60% of industrial cutting applications. 
              Its favorable laser absorption characteristics and oxygen-assist cutting capability make it economical to process. However, understanding 
              the nuances between different carbon steel grades is crucial for optimal results.
            </p>
            <p className="mb-3">
              碳钢是激光切割中最常见的材料,占工业切割应用的60%以上。其良好的激光吸收特性和氧气助燃切割能力使其加工经济高效。
              但理解不同碳钢等级之间的细微差别对获得最佳结果至关重要。
            </p>
            <p className="mb-3">
              For mild steel (Q235, SPCC), oxygen-assist cutting provides the fastest speeds and lowest operating costs. The exothermic reaction 
              between oxygen and iron contributes additional energy, allowing higher cutting speeds than nitrogen cutting. For example, a 3kW 
              fiber laser cutting 6mm mild steel achieves 3.5 m/min with oxygen versus 2.2 m/min with nitrogen. However, oxygen cutting produces 
              an oxide layer requiring post-processing for applications demanding clean edges.
            </p>
            <p className="mb-3">
              High-carbon steels (&gt;0.3% carbon) require more careful parameter control due to potential hardening in the heat-affected zone. 
              Reducing cutting speed by 15-20% and using nitrogen instead of oxygen often produces better results, especially for tooling 
              and precision parts where edge hardness variation is problematic.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Stainless Steel Complexity | 不锈钢的复杂性</h3>
            <p className="mb-3">
              Stainless steel presents unique challenges due to its low thermal conductivity and high reflectivity. Heat accumulation during 
              cutting can cause edge oxidation and warping if parameters aren't optimized. The choice between nitrogen and air assist significantly 
              impacts both quality and operating costs.
            </p>
            <p className="mb-3">
              不锈钢因其低导热性和高反射率而带来独特挑战。如果参数未优化,切割过程中的热量积累会导致边缘氧化和变形。
              氮气和空气辅助之间的选择显著影响质量和运营成本。
            </p>
            <p className="mb-3">
              For austenitic stainless (304, 316), <Link href="/guides/assist-gas-chart" className="text-primary-600 hover:text-primary-700 font-medium underline">nitrogen cutting</Link> at 10-18 bar produces oxide-free edges critical for food processing, 
              medical, and architectural applications. Air cutting offers 80% cost savings but produces slight oxidation acceptable for 
              structural applications. Advanced <Link href="/guides/process-optimization-guide" className="text-primary-600 hover:text-primary-700 font-medium underline">parameter optimization</Link> and adaptive control systems 
              can automatically adjust parameters real-time based on material feedback, ensuring consistent quality across varying material 
              conditions while minimizing gas consumption by 15-25%.
            </p>
            <p className="mb-3">
              Duplex stainless steels require 20-30% lower cutting speeds than austenitic grades due to higher strength. The parameter 
              tables provide baseline values, but field optimization through test cuts is recommended for critical applications.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Aluminum Alloy Challenges | 铝合金挑战</h3>
            <p className="mb-3">
              Aluminum cutting represents one of the most technically demanding applications in fiber laser cutting. High reflectivity 
              (particularly at 1.06μm wavelength) and high thermal conductivity require higher power density and precise parameter control 
              to achieve reliable results.
            </p>
            <p className="mb-3">
              铝材切割是光纤激光切割中技术要求最高的应用之一。高反射率(特别是在1.06μm波长)和高导热率需要更高的功率密度和精确的参数控制才能获得可靠结果。
            </p>
            <p className="mb-3">
              Key parameters for aluminum success include: (1) Higher <Link href="/guides/power-selection-guide" className="text-primary-600 hover:text-primary-700 font-medium underline">power requirement</Link> - typically 30-40% more power than equivalent steel 
              thickness; (2) Nitrogen pressure 12-18 bar minimum to prevent oxidation and ensure clean cuts; (3) Larger <Link href="/guides/nozzle-selection-guide" className="text-primary-600 hover:text-primary-700 font-medium underline">nozzle standoff</Link> 
              (0.8-1.2mm) to manage melt ejection; (4) <Link href="/guides/focus-position-guide" className="text-primary-600 hover:text-primary-700 font-medium underline">Focus position optimization</Link> - typically -2 to -4mm for thick aluminum to maximize 
              power density penetration.
            </p>
            <p className="mb-3">
              Different aluminum alloys vary significantly. Pure aluminum (1xxx series) cuts easily but tends to produce more dross. 
              5xxx series marine-grade aluminum cuts cleanly with proper parameters. 6xxx series architectural aluminum requires careful 
              speed control to avoid burning. 7xxx series aerospace aluminum demands the most careful parameter optimization due to high 
              strength and crack sensitivity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Power-Thickness Relationships | 功率-厚度关系</h3>
            <p className="mb-3">
              Understanding the power-thickness relationship is fundamental to effective parameter selection. The relationship is not linear 
              but follows a complex curve influenced by material properties, desired cutting speed, and quality requirements.
            </p>
            <p className="mb-3">
              For steel cutting, the rule of thumb suggests 1kW per 3-4mm thickness for economic <Link href="/guides/cutting-speed-chart" className="text-primary-600 hover:text-primary-700 font-medium underline">cutting speeds</Link> (2-4 m/min). However, 
              this dramatically shifts at thickness extremes. Thin materials (0.5-2mm) can be cut very fast with lower power, where a 1kW 
              laser achieves 15-25 m/min. Thick materials (20mm+) require disproportionately high power - cutting 25mm steel economically 
              demands 12-15kW, not the 7-8kW that linear scaling would suggest.
            </p>
            <p className="mb-3">
              This non-linearity stems from heat dissipation dynamics. In thin materials, heat quickly dissipates through conduction, 
              requiring high power density but brief dwell time. In thick materials, heat accumulation helps cutting, but the deeper 
              kerf requires sustained high power to maintain melt pool dynamics throughout the thickness.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Parameter Optimization Methodology | 参数优化方法论</h3>
            <p className="mb-3">
              The parameters in this guide provide tested starting points, but optimal parameters for your specific equipment, material 
              supply, and quality requirements require systematic optimization. A structured approach yields the best results:
            </p>
            <p className="mb-3">
              本指南中的参数提供了经过测试的起点,但针对您的特定设备、材料供应和质量要求的最佳参数需要系统化优化。结构化方法产生最佳结果。
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li><strong>Baseline Establishment</strong>: Start with table values at mid-range for thickness and power</li>
              <li><strong>Speed Optimization</strong>: Increase speed in 10% increments until quality degrades, then back off 15%</li>
              <li><strong>Pressure Tuning</strong>: Adjust gas pressure ±2 bar to optimize melt ejection and edge quality</li>
              <li><strong>Focus Refinement</strong>: Test focus positions in 0.5mm steps across ±2mm range</li>
              <li><strong>Nozzle Selection</strong>: Try adjacent nozzle sizes if edge quality issues persist</li>
              <li><strong>Documentation</strong>: Record all successful parameters with material batch information</li>
            </ul>
            <p className="mb-3">
              Advanced users should implement Design of Experiments (DOE) methodology for multi-parameter optimization. This statistical 
              approach efficiently explores parameter space and identifies optimal combinations faster than sequential single-variable testing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Material Batch Variation Impact | 材料批次变化影响</h3>
            <p className="mb-3">
              One of the most underestimated factors in parameter optimization is material batch variation. Even from the same supplier 
              with identical specifications, batches can vary in: surface condition (mill scale, rust, oil), chemical composition within 
              spec tolerance, grain structure from rolling process, and internal stress distribution.
            </p>
            <p className="mb-3">
              These variations can cause 10-20% fluctuation in optimal cutting speed. Professional shops maintain parameter libraries 
              by material supplier and batch code. When changing material batches, always perform <Link href="/guides/troubleshooting-guide" className="text-primary-600 hover:text-primary-700 font-medium underline">test cuts</Link> before production runs, 
              even with seemingly identical specifications.
            </p>
            <p className="mb-3">
              Galvanized and pre-coated steels present additional complexity. Zinc coating burns off during cutting, affecting gas 
              dynamics and requiring modified nozzle standoff. Pre-painted materials require reduced power to avoid burning paint 
              beyond cut edge. These materials typically need 15-25% speed reduction compared to bare steel.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Parameter Tables */}
      <div className="space-y-10">
        {ALL_MATERIAL_PARAMETERS.map((material) => (
          <div key={material.materialId} id={material.materialId}>
            <MaterialParametersTable materialData={material} />
          </div>
        ))}
      </div>

      {/* Parameter Explanation */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Parameter Definitions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <strong className="text-blue-600 dark:text-blue-400">Cutting Speed (m/min)</strong>
              <p className="text-muted-foreground mt-1">
                The speed at which the cutting head moves along the cutting path. Too fast causes incomplete penetration; too slow produces dross and burn marks.
              </p>
            </div>
            <div>
              <strong className="text-green-600 dark:text-green-400">Gas Pressure (bar)</strong>
              <p className="text-muted-foreground mt-1">
                Assist gas jet pressure. Oxygen cutting typically uses 0.3-0.6 bar; nitrogen cutting requires 10-20 bar.
              </p>
            </div>
            <div>
              <strong className="text-orange-600 dark:text-orange-400">Nozzle Diameter (mm)</strong>
              <p className="text-muted-foreground mt-1">
                Nozzle orifice size. Thin sheets use small nozzles (1.0-1.5mm); thick plates use large nozzles (2.0-3.5mm).
              </p>
            </div>
            <div>
              <strong className="text-red-600 dark:text-red-400">Focus Position (mm)</strong>
              <p className="text-muted-foreground mt-1">
                Laser beam focus position relative to material surface. Negative value = focus inside material; positive value = focus above material.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Parameter Optimization Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  <strong>Speed Priority</strong>: Maximize speed while maintaining cut quality to improve productivity
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  <strong>Quality Priority</strong>: Reduce speed by 15-20% to significantly improve edge quality and perpendicularity
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  <strong>Cost Optimization</strong>: Use oxygen for carbon steel; choose nitrogen or air for stainless based on quality requirements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  <strong>First Article Testing</strong>: Always perform test cuts when changing materials or batches to verify parameters
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  <strong>Documentation</strong>: Build your own parameter database and record actual optimal parameters
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Related Tools & Guides */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Related Calculation Tools</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/power-calculator" className="underline hover:text-primary">
                Laser Power Requirement Calculator
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Calculate required laser power based on material and thickness
              </p>
            </div>
            <div>
              <Link href="/tools/kerf-calculator" className="underline hover:text-primary">
                Laser Cutting Kerf Width Calculator
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Estimate kerf width and compensation values
              </p>
            </div>
            <div>
              <Link href="/tools/cost-estimator" className="underline hover:text-primary">
                Laser Cutting Cost Estimator
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Calculate complete cutting costs including gas, power, and time
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Related Technical Guides</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/guides/focus-position-guide" className="underline hover:text-primary">
                Focus Position Adjustment Guide
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                How to properly adjust and calibrate focus position
              </p>
            </div>
            <div>
              <Link href="/guides/process-optimization-guide" className="underline hover:text-primary">
                Process Optimization Guide
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Systematic parameter optimization methodology
              </p>
            </div>
            <div>
              <Link href="/guides/troubleshooting-guide" className="underline hover:text-primary">
                Troubleshooting Guide
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                Resolve common cutting quality issues
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <Card className="mt-8 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/20">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-sm mb-2 text-yellow-900 dark:text-yellow-200">
            Disclaimer
          </h3>
          <p className="text-xs text-yellow-800 dark:text-yellow-300 leading-relaxed">
            This reference guide data is compiled from publicly available technical documentation and industry standards 
            from mainstream laser equipment manufacturers, provided for reference only. Actual cutting parameters are 
            influenced by multiple factors including equipment model, laser condition, material batch, environmental 
            conditions, and quality requirements, and may differ from the values shown. Please adjust parameters based 
            on your equipment manufacturer's technical manual and on-site test cutting results. This site assumes no 
            responsibility for any direct or indirect losses resulting from the use of this data.
          </p>
          <p className="text-xs text-yellow-800 dark:text-yellow-300 mt-2">
            Data Last Updated: {MATERIAL_PARAMETERS_LAST_UPDATE} | 
            Recommended to review parameter validity every 6 months
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

