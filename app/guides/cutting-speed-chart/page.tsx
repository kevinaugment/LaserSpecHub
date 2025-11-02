import { Metadata } from 'next';
import { 
  ALL_LASER_SPEED_DATA,
  CUTTING_SPEED_LAST_UPDATE,
  DATA_DISCLAIMER
} from '@/lib/data/cheatsheets/cutting-speed-data';
import { CuttingSpeedTable } from '@/components/cheatsheets/cutting-speed-table';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';
import { 
  SpeedVsPowerCurve,
  MaterialComparisonChart,
  ThicknessImpactGraph,
  GasTypeComparison,
  QualitySpeedMatrix
} from '@/components/cheatsheets/cutting-speed-visualizations';
import { ProductionTimeCalculator } from '@/components/cheatsheets/production-time-calculator';
import { SpeedComparisonTool } from '@/components/cheatsheets/speed-comparison-tool';

export const metadata: Metadata = {
  title: 'Laser Cutting Speed Chart - Reference Data by Material & Thickness | LaserSpecHub',
  description: 'Comprehensive laser cutting speed reference chart covering fiber laser and CO2 laser cutting speeds for stainless steel, carbon steel, aluminum, acrylic, and more. Based on real equipment test data from major manufacturers.',
  keywords: [
    'laser cutting speed chart',
    'cutting speed by material',
    'fiber laser speed',
    'CO2 laser speed',
    'laser cutting parameters',
    'cutting speed reference',
    'metal cutting speed',
    'laser speed table'
  ],
  openGraph: {
    title: 'Laser Cutting Speed Reference Chart | LaserSpecHub',
    description: 'Quick reference for laser cutting speeds across different materials, thicknesses, and power levels',
    type: 'article',
  },
};

export default function CuttingSpeedChartPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Cutting Speed Reference Chart',
    description: 'Comprehensive reference data for laser cutting speeds across various materials and thicknesses',
    author: {
      '@type': 'Organization',
      name: 'LaserSpecHub',
    },
    datePublished: CUTTING_SPEED_LAST_UPDATE,
    dateModified: CUTTING_SPEED_LAST_UPDATE,
  };

  return (
    <>
      <StructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Laser Cutting Speed Reference Chart
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Comprehensive cutting speed data for fiber and CO2 lasers across various materials and thicknesses. 
              Use this reference to estimate production times and optimize your cutting parameters.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                Fiber Laser Data
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                CO2 Laser Data
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Real Equipment Test Data
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Updated {CUTTING_SPEED_LAST_UPDATE}
              </span>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Understanding Cutting Speeds
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  What Affects Cutting Speed?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong><a href="/guides/power-selection-guide" className="text-primary-600 hover:text-primary-700">Laser Power</a>:</strong> Higher power = faster cutting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong><a href="/guides/material-thickness-parameters" className="text-primary-600 hover:text-primary-700">Material Thickness</a>:</strong> Thicker = slower cutting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong><a href="/guides/wavelength-absorption" className="text-primary-600 hover:text-primary-700">Material Type</a>:</strong> Different absorption rates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong><a href="/guides/assist-gas-chart" className="text-primary-600 hover:text-primary-700">Assist Gas</a>:</strong> Oxygen for speed, nitrogen for quality</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span><strong><a href="/guides/edge-quality-standards" className="text-primary-600 hover:text-primary-700">Quality Requirements</a>:</strong> Precision cuts are slower</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  How to Use This Chart
                </h3>
                <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                  <li>Select your laser type (Fiber or CO2)</li>
                  <li>Choose the material you want to cut</li>
                  <li>Find your material thickness in the table</li>
                  <li>Look across to find speeds for different power levels</li>
                  <li>Consider adjust speeds based on your quality needs</li>
                </ol>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> These are typical speeds under optimal conditions. 
                    Your actual speeds may vary based on equipment condition, material quality, 
                    and specific cutting requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Speed Visualizations */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📊 Key Speed Relationships
            </h2>
            <p className="text-gray-600 mb-6">
              Visual representations of how power, thickness, materials, and gas types affect cutting speeds
            </p>
            
            <div className="grid gap-6">
              <SpeedVsPowerCurve material="Mild Steel" thickness={10} />
              <ThicknessImpactGraph />
              <div className="grid md:grid-cols-2 gap-6">
                <MaterialComparisonChart power="6kW" thickness={5} />
                <GasTypeComparison />
              </div>
              <QualitySpeedMatrix />
            </div>
          </div>

          {/* Deep Technical Content */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Understanding Cutting Speed Dynamics
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Cutting speed is perhaps the most visible performance metric in laser cutting, directly impacting production 
                throughput and operational costs. However, the relationship between laser power, material properties, and achievable 
                cutting speed is complex and non-linear. Understanding these dynamics enables better equipment selection and process 
                optimization.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Physics of Cutting Speed</h3>
              <p>
                Laser cutting speed is fundamentally limited by the rate at which material can be heated to melting/vaporization 
                temperature and ejected from the kerf. This involves three simultaneous processes: energy absorption, heat conduction 
                into surrounding material, and melt ejection via assist gas. The balance between these processes determines maximum 
                achievable speed.
              </p>
              <p>
                For thin materials (0.5-3mm), heat conduction is the limiting factor. Energy quickly dissipates laterally, requiring 
                high power density (small focus spot) and fast traverse to maintain cutting. This is why fiber lasers with excellent 
                beam quality (M² &lt; 1.2) excel at thin sheet cutting, achieving speeds of 20-40 m/min on 1mm steel with just 2-3kW power.
              </p>
              <p>
                For thick materials (12mm+), melt ejection becomes the bottleneck. Even with sufficient power to melt material, 
                assist gas must physically remove molten metal through the entire thickness. This requires high gas pressure (15-20 bar 
                for nitrogen) and <a href="/guides/nozzle-selection-guide" className="text-primary-600 hover:text-primary-700">larger nozzles</a>, but ultimately limits speed regardless of available power. A 12kW laser cutting 20mm 
                steel typically maxes out at 1.5-2.0 m/min, not due to power limitations but melt dynamics.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Material-Specific Speed Characteristics</h3>
              <p>
                Different materials exhibit dramatically different cutting speed profiles. Carbon steel benefits from oxygen-assist 
                cutting, where the exothermic reaction between oxygen and iron contributes 30-40% of total cutting energy. This allows 
                speeds 40-60% faster than nitrogen cutting. For example, 3kW cutting 6mm mild steel: oxygen achieves 3.5 m/min versus 
                nitrogen at 2.2 m/min.
              </p>
              <p>
                Stainless steel's low thermal conductivity means heat stays concentrated in the cutting zone, theoretically beneficial 
                for cutting. However, its high reflectivity at 1.06μm (fiber laser wavelength) and tendency to oxidize require nitrogen 
                assist, reducing speeds 20-30% compared to carbon steel of equivalent thickness. The quality-speed tradeoff is particularly 
                pronounced: achieving mirror-finish edges on stainless requires reducing speed by an additional 25-30% below standard 
                production speeds.
              </p>
              <p>
                Aluminum presents the greatest challenge for fiber lasers due to extreme reflectivity (&gt;90% at 1.06μm) and high thermal 
                conductivity. Successful aluminum cutting requires 30-50% more power than equivalent steel thickness. Modern fiber lasers 
                with specialized aluminum cutting modes employ dynamic power modulation and optimized beam characteristics to improve aluminum 
                absorption, achieving speeds approaching 70-80% of steel cutting rates rather than the traditional 50-60%. <a href="/guides/wavelength-absorption" className="text-primary-600 hover:text-primary-700">Learn more about material absorption characteristics</a>.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Power Scaling and Speed Returns</h3>
              <p>
                A common misconception is that doubling laser power doubles cutting speed. In reality, the relationship follows a power 
                law with diminishing returns. For thin materials (1-3mm), doubling power increases speed by approximately 60-80%. For 
                medium thickness (6-10mm), the increase drops to 40-60%. For thick materials (15mm+), doubling power may only increase 
                speed by 20-30%.
              </p>
              <p>
                This non-linearity stems from heat dissipation dynamics. At higher speeds, less time is available for heat to conduct 
                into surrounding material, requiring disproportionately more power to maintain cutting temperature. Additionally, assist 
                gas dynamics become limiting - there's a maximum rate at which molten material can be ejected regardless of available power.
              </p>
              <p>
                The practical implication: upgrading from 3kW to 6kW provides substantial speed gains (50-70% faster on 6-8mm steel). 
                However, upgrading from 12kW to 20kW yields modest improvements (15-25% faster on 20mm steel), making the investment 
                harder to justify purely on speed grounds. The higher power is better justified for capability (cutting thicker materials) 
                rather than speed on existing thicknesses.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Quality-Speed Tradeoffs</h3>
              <p>
                The speeds shown in reference tables represent standard production quality - smooth edges with minimal dross, acceptable 
                for most fabrication applications. However, different applications demand different quality levels, requiring speed adjustments:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Rough Cutting</strong> (structural parts, will be welded): Increase speed 15-25% above table values. Expect 
                more dross, rougher edges, but acceptable for applications where edges will be covered or further processed.</li>
                <li><strong>Standard Production</strong> (general fabrication): Use table values as-is. Balances speed and quality for 
                most applications.</li>
                <li><strong>High Quality</strong> (visible parts, tight tolerances): Reduce speed 20-30%. Produces smoother edges, better 
                perpendicularity, minimal dross.</li>
                <li><strong>Precision</strong> (medical, aerospace): Reduce speed 35-50%. Achieves mirror-finish edges, excellent dimensional 
                accuracy, zero dross. Often requires multiple passes for thick materials.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Environmental and Operational Factors</h3>
              <p>
                The cutting speeds in reference tables assume optimal conditions: clean material, proper focus, fresh nozzles, optimal 
                gas pressure, and stable power output. Real-world conditions introduce variability that affects achievable speeds:
              </p>
              <p>
                Material surface condition significantly impacts speed. Mill scale, rust, or oil on steel surfaces can reduce effective 
                cutting speed by 10-20%. Pre-painted or galvanized materials require 15-25% speed reduction to avoid burning coatings 
                beyond the cut edge. Material flatness matters too - warped sheets require slower speeds to maintain consistent focus 
                distance, or risk incomplete cuts.
              </p>
              <p>
                Equipment condition is critical. <a href="/guides/nozzle-selection-guide" className="text-primary-600 hover:text-primary-700">Worn nozzles</a> reduce gas flow efficiency, requiring 5-10% speed reduction. Contaminated 
                optics reduce delivered power, effectively operating as if with lower power. <a href="/guides/focus-position-guide" className="text-primary-600 hover:text-primary-700">Focus drift</a> due to thermal effects in 
                continuous operation can reduce effective cutting speed by 10-15% after several hours of operation without recalibration. See our <a href="/guides/process-optimization-guide" className="text-primary-600 hover:text-primary-700">process optimization guide</a> for maintenance best practices.
              </p>
            </div>
          </div>

          {/* Fiber Laser Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-t-lg px-6 py-4">
              <h2 className="text-2xl font-bold">
                {ALL_LASER_SPEED_DATA[0]?.laserType} ({ALL_LASER_SPEED_DATA[0]?.wavelength})
              </h2>
              <p className="text-primary-100 mt-1">
                High-efficiency metal cutting - Best for steel, stainless steel, aluminum
              </p>
            </div>
            <div className="bg-white border-x border-b border-gray-200 rounded-b-lg p-6">
              {ALL_LASER_SPEED_DATA[0] && <CuttingSpeedTable laserData={ALL_LASER_SPEED_DATA[0]} />}
            </div>
          </div>

          {/* CO2 Laser Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg px-6 py-4">
              <h2 className="text-2xl font-bold">
                {ALL_LASER_SPEED_DATA[1]?.laserType} ({ALL_LASER_SPEED_DATA[1]?.wavelength})
              </h2>
              <p className="text-green-100 mt-1">
                Versatile non-metal cutting - Best for acrylic, wood, plastics
              </p>
            </div>
            <div className="bg-white border-x border-b border-gray-200 rounded-b-lg p-6">
              {ALL_LASER_SPEED_DATA[1] && <CuttingSpeedTable laserData={ALL_LASER_SPEED_DATA[1]} />}
            </div>
          </div>

          {/* Advanced Production Time Calculator */}
          <div className="mb-8">
            <ProductionTimeCalculator />
          </div>

          {/* Power Level Comparison */}
          <div className="mb-8">
            <SpeedComparisonTool />
          </div>

          {/* Related Tools & Guides */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              🔧 Related Tools & Guides
            </h2>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <a 
                href="/tools/power-calculator"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">⚡ Power Calculator</h3>
                <p className="text-sm text-gray-600">Calculate required laser power for your material and thickness</p>
              </a>
              <a 
                href="/tools/kerf-calculator"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">📏 Kerf Calculator</h3>
                <p className="text-sm text-gray-600">Calculate kerf width and nesting efficiency</p>
              </a>
              <a 
                href="/tools/cost-estimator"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">💰 Cost Estimator</h3>
                <p className="text-sm text-gray-600">Estimate operating costs per part</p>
              </a>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Parameter Guides</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="/guides/assist-gas-chart"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">💨 Assist Gas Chart</h3>
                <p className="text-sm text-gray-600">Gas selection and pressure recommendations</p>
              </a>
              <a 
                href="/guides/material-thickness-parameters"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">📊 Material Parameters</h3>
                <p className="text-sm text-gray-600">Complete parameter sets by material and thickness</p>
              </a>
              <a 
                href="/guides/nozzle-selection-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">🔧 Nozzle Selection</h3>
                <p className="text-sm text-gray-600">Choose the right nozzle for your application</p>
              </a>
              <a 
                href="/guides/focus-position-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">🎯 Focus Position</h3>
                <p className="text-sm text-gray-600">Optimize focus position for different materials</p>
              </a>
              <a 
                href="/guides/edge-quality-standards"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">✨ Edge Quality Standards</h3>
                <p className="text-sm text-gray-600">Understanding quality grades and requirements</p>
              </a>
              <a 
                href="/guides/process-optimization-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">🚀 Process Optimization</h3>
                <p className="text-sm text-gray-600">Advanced techniques for maximum efficiency</p>
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              ❓ Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Why are my actual speeds different from the chart?
                </h3>
                <p className="text-gray-700 text-sm">
                  Actual speeds depend on many factors: equipment condition, material quality variations, 
                  assist gas pressure, nozzle condition, focus quality, and your specific quality requirements. 
                  These charts show typical speeds under optimal conditions.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Can I cut faster than the chart suggests?
                </h3>
                <p className="text-gray-700 text-sm">
                  You can increase speed for rough cuts, but edge quality will suffer. The speeds shown 
                  are for standard production quality. Reduce speed by 20-30% for high-precision work, 
                  or increase by 10-20% for rough cutting where edge quality is not critical.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  What if my power level isn't shown?
                </h3>
                <p className="text-gray-700 text-sm">
                  Interpolate between nearby power levels. For example, if you have a 5kW laser and the 
                  table shows 4kW and 6kW, your speed will be approximately midway between those values.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Should I use oxygen or nitrogen assist gas?
                </h3>
                <p className="text-gray-700 text-sm">
                  For carbon steel: Use oxygen for maximum speed (speeds shown in table). Use nitrogen 
                  for oxidation-free edges (reduce speed by 30-40%). For stainless steel and aluminum: 
                  Always use nitrogen to prevent oxidation. See our <a href="/guides/assist-gas-chart" className="text-primary-600 hover:text-primary-700">assist gas chart</a> for detailed recommendations.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  How does piercing time affect total production time?
                </h3>
                <p className="text-gray-700 text-sm">
                  Piercing time can be significant, especially for parts with many holes or complex geometries. 
                  For thick materials (10mm+), piercing can take 1-3 seconds per pierce. On a part with 50 pierces, 
                  this adds 50-150 seconds to production time. Use the production time calculator above to account for piercing.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  What gas pressure should I use?
                </h3>
                <p className="text-gray-700 text-sm">
                  Gas pressure increases with material thickness. For mild steel with oxygen: 0.5-1.0 bar for thin materials, 
                  up to 5-6 bar for 20mm+. For nitrogen cutting: 10-14 bar for thin materials, up to 25-30 bar for thick materials. 
                  Higher pressure improves melt ejection but increases operating costs.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  How do I adjust speeds for rusty or painted material?
                </h3>
                <p className="text-gray-700 text-sm">
                  Reduce speed by 10-15% for light rust, 20-25% for heavy rust or mill scale. For painted materials, 
                  reduce speed by 15-20% to prevent excessive burning beyond the cut edge. Galvanized materials require 
                  25-30% speed reduction. Clean material whenever possible for best results.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  What's the impact of worn nozzles on cutting speed?
                </h3>
                <p className="text-gray-700 text-sm">
                  Worn nozzles reduce gas flow efficiency and focus quality, requiring 5-15% speed reduction depending on 
                  wear severity. Replace nozzles every 100-200 pierces for thick materials, or when you notice increased 
                  dross or incomplete cuts. See our <a href="/guides/nozzle-selection-guide" className="text-primary-600 hover:text-primary-700">nozzle selection guide</a> for maintenance schedules.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  How do I calculate realistic production time for complex parts?
                </h3>
                <p className="text-gray-700 text-sm">
                  Use the advanced production time calculator above. Account for: cutting time (length ÷ speed), piercing time 
                  (number of pierces × pierce time), positioning time (~0.5s per pierce), and geometry complexity (reduce effective 
                  speed by 15-50% for parts with many corners or curves). Add 20-30% buffer for sheet loading, part removal, and inspection.
                </p>
              </div>
            </div>
          </div>

          {/* Data Disclaimer */}
          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-xs text-gray-600">
            <p>{DATA_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </>
  );
}


