import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import {
  MATERIAL_ABSORPTION_DATA,
  LASER_TYPES,
  WAVELENGTH_ABSORPTION_LAST_UPDATE,
  DATA_DISCLAIMER
} from '@/lib/data/cheatsheets/wavelength-absorption-data';
import { WavelengthAbsorptionMatrix } from '@/components/cheatsheets/wavelength-absorption-matrix';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Wavelength Absorption Chart - Material Compatibility Guide',
  description: 'Comprehensive wavelength absorption data for laser materials. Compare how different materials absorb CO2, fiber, Nd:YAG, green, and UV laser wavelengths. Scientific data for optimal laser selection.',
  path: '/guides/wavelength-absorption',
  keywords: [
    'laser wavelength absorption',
    'material absorption rate',
    'laser material compatibility',
    'wavelength selection',
    'laser physics',
    'material reflectivity',
    'fiber vs CO2 laser',
    'laser material interaction'
  ],
});

export default function WavelengthAbsorptionPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Wavelength and Material Absorption Reference Chart',
    description: 'Scientific data on how different materials absorb various laser wavelengths',
    author: {
      '@type': 'Organization',
      name: 'LaserSpecHub',
    },
    datePublished: WAVELENGTH_ABSORPTION_LAST_UPDATE,
    dateModified: WAVELENGTH_ABSORPTION_LAST_UPDATE,
  };

  return (
    <>
      <StructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Laser Wavelength & Material Absorption Chart
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Understand why certain lasers work better for specific materials. This scientific reference 
              shows absorption rates across different wavelengths, helping you choose the optimal laser type.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                Physics-Based Data
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                {MATERIAL_ABSORPTION_DATA.length} Materials
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {LASER_TYPES.length} Laser Types
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Updated {WAVELENGTH_ABSORPTION_LAST_UPDATE}
              </span>
            </div>
          </div>

          {/* Physics Explanation */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🔬 Why Wavelength Matters
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                When laser light hits a material surface, some energy is <strong>absorbed</strong> (converted to heat for cutting/melting), 
                while the rest is <strong>reflected</strong>. The absorption rate depends heavily on the laser wavelength and material properties.
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Metals</h3>
                  <p className="text-sm text-gray-700">
                    Metals reflect long wavelengths (CO2) but absorb short wavelengths (fiber, green, UV) well. 
                    Copper and aluminum are especially challenging due to high reflectivity.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Non-Metals</h3>
                  <p className="text-sm text-gray-700">
                    Organic materials (wood, acrylic, leather) absorb CO2 wavelength excellently. 
                    They're nearly transparent to fiber laser wavelengths.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Selection Rule</h3>
                  <p className="text-sm text-gray-700">
                    Higher absorption = more efficient cutting = lower power required. 
                    Always choose a laser with high absorption for your primary material.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Matrix */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Material Absorption Matrix
            </h2>
            <WavelengthAbsorptionMatrix />
          </div>

          {/* Laser Type Details */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Laser Wavelength Reference
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {LASER_TYPES.map((laser) => (
                <div key={laser.wavelengthNm} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{laser.name}</h3>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                      {laser.wavelength}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Color:</span>{' '}
                      <span className="text-gray-600">{laser.color}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Sources:</span>{' '}
                      <span className="text-gray-600">{laser.typicalSources.join(', ')}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Best For:</span>{' '}
                      <div className="flex flex-wrap gap-1 mt-1">
                        {laser.commonUses.map((use, i) => (
                          <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Practical Tips */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              💡 Practical Selection Tips
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">For Steel & Stainless Steel</h3>
                <p className="text-sm text-gray-700">
                  Choose fiber laser (1064nm) - 88-92% absorption rate provides excellent efficiency. 
                  CO2 lasers have only 8-10% absorption, requiring much higher power.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">For Aluminum & Copper</h3>
                <p className="text-sm text-gray-700">
                  Highly reflective materials. Use high-power fiber (6kW+), or better yet, green laser (532nm) 
                  or blue laser (450nm) with 55-65% absorption rates.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">For Acrylic, Wood & Plastics</h3>
                <p className="text-sm text-gray-700">
                  CO2 laser (10600nm) is the clear winner with 90-95% absorption. Produces polished edges 
                  on acrylic. Fiber lasers don't work well on these materials.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">For Precision Electronics</h3>
                <p className="text-sm text-gray-700">
                  UV laser (355nm) provides excellent absorption across most materials with minimal heat 
                  affected zone. Ideal for PCBs, silicon, and micro-machining.
                </p>
              </div>
            </div>
          </div>

          {/* Real-World Application Examples */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Real-World Application Examples
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Case Study 1: Sheet Metal Fabrication Shop (Steel/Stainless)
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>Challenge:</strong> Shop processes 70% mild steel (1-6mm), 25% stainless steel (1-4mm), 5% aluminum (1-3mm). 
                    Considering CO2 vs Fiber laser investment.
                  </p>
                  <p className="text-gray-700">
                    <strong>Wavelength Analysis:</strong> Mild steel absorbs 88% of 1064nm (fiber) vs 8% of 10600nm (CO2). Stainless 
                    steel: 92% (fiber) vs 10% (CO2). Aluminum: 8% (fiber) vs 2% (CO2).
                  </p>
                  <p className="text-gray-700">
                    <strong>Decision:</strong> 6kW fiber laser selected. For steel/stainless (95% of volume), fiber provides 9-10x 
                    better absorption than CO2, enabling 3x faster cutting speeds and 60% lower operating costs. Aluminum remains 
                    challenging but manageable with proper parameters. Alternative considered: 12kW CO2 would cost 40% more initially 
                    and $20,000/year more in operating costs while providing inferior performance on primary materials.
                  </p>
                  <p className="text-gray-700">
                    <strong>Result:</strong> Fiber laser cuts 3mm mild steel at 12 m/min vs 4 m/min with equivalent CO2 power. 
                    Payback period: 2.1 years vs 3.8 years for CO2 option.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Case Study 2: Signage & Display Manufacturer (Acrylic/Wood)
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>Challenge:</strong> Company produces custom signage from acrylic (60%), wood (30%), and occasional thin 
                    metals (10%). Evaluating laser options for clean edge quality and versatility.
                  </p>
                  <p className="text-gray-700">
                    <strong>Wavelength Analysis:</strong> Acrylic absorbs 95% of 10600nm (CO2) but only 5-10% of 1064nm (fiber). 
                    Wood: 92% (CO2) vs 15% (fiber). Thin metals favor fiber but represent minority of work.
                  </p>
                  <p className="text-gray-700">
                    <strong>Decision:</strong> 150W CO2 laser chosen. Acrylic cutting with CO2 produces flame-polished edges 
                    (no post-processing needed) due to excellent absorption and longer wavelength's thermal characteristics. Fiber 
                    laser would require 3-5x more power for equivalent results and would produce frosted edges requiring flame 
                    polishing. For occasional thin metal work, outsource or use mechanical cutting.
                  </p>
                  <p className="text-gray-700">
                    <strong>Result:</strong> 10mm acrylic cuts at 15 mm/s with mirror-finish edges. Total system cost $45,000 
                    vs $120,000+ for fiber laser with insufficient non-metal capability. Edge quality eliminates $15,000/year in 
                    polishing labor.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Case Study 3: Electronics Manufacturer (Aluminum Housings & PCBs)
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>Challenge:</strong> Cutting thin aluminum enclosures (0.5-2mm) and precision PCB features. Standard 
                    fiber lasers struggle with aluminum's 92% reflectivity at 1064nm wavelength.
                  </p>
                  <p className="text-gray-700">
                    <strong>Wavelength Analysis:</strong> Aluminum absorption: 8% at 1064nm (fiber), 12% at 10600nm (CO2), 55% at 
                    532nm (green), 65% at 450nm (blue). For precision work, shorter wavelengths also provide smaller spot sizes 
                    and reduced heat-affected zones.
                  </p>
                  <p className="text-gray-700">
                    <strong>Decision:</strong> Dual-wavelength solution: 500W green laser (532nm) for aluminum cutting, 50W UV 
                    laser (355nm) for PCB micro-machining. Green laser's 7x better aluminum absorption vs fiber enables clean 
                    cutting at lower power with minimal dross. UV laser's 355nm wavelength provides &lt;10μm spot size for precision 
                    PCB features (via drilling, trace cutting) with negligible thermal damage to surrounding components.
                  </p>
                  <p className="text-gray-700">
                    <strong>Result:</strong> Aluminum cutting speed increased 4x vs previous fiber laser attempts. PCB processing 
                    achieves ±5μm accuracy with zero charring. Combined system cost $180,000 vs $250,000 for high-power fiber 
                    (12kW+) that would still struggle with aluminum and lack PCB precision capability.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Case Study 4: Automotive Tier 1 Supplier (Mixed Materials & High Volume)
                </h3>
                <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
                  <p className="text-gray-700">
                    <strong>Challenge:</strong> High-volume production of structural components (steel), decorative trim (stainless), 
                    and battery enclosures (aluminum). Need maximum throughput and flexibility across material types.
                  </p>
                  <p className="text-gray-700">
                    <strong>Wavelength Analysis:</strong> Steel/stainless: 88-92% absorption at 1064nm (excellent). Aluminum: 8% 
                    at 1064nm (challenging but manageable with high power). Volume breakdown: 60% steel, 30% stainless, 10% aluminum.
                  </p>
                  <p className="text-gray-700">
                    <strong>Decision:</strong> Dual 12kW fiber laser system. High power compensates for aluminum's poor absorption 
                    (12kW × 8% = effective 960W absorbed, sufficient for 3mm aluminum at production speeds). For steel/stainless 
                    (90% of volume), 12kW provides extreme speeds: 3mm steel at 25 m/min, 6mm steel at 8 m/min. Dual systems 
                    provide redundancy for 24/7 operation.
                  </p>
                  <p className="text-gray-700">
                    <strong>Result:</strong> System processes 180 tons/month vs 120 tons with previous 6kW systems. Aluminum 
                    cutting improved from "problematic" to "acceptable" with optimized parameters (high nitrogen pressure 18 bar, 
                    dynamic power modulation). Total investment $800,000 for dual 12kW systems vs $1.2M for specialized green 
                    laser solution. ROI: 18 months based on throughput gains.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Deep Dive */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technical Deep Dive: Absorption Physics
            </h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Why Metals Reflect Long Wavelengths</h3>
              <p>
                Metals contain free electrons that respond to electromagnetic radiation. At long wavelengths (CO2's 10.6μm), 
                these electrons oscillate efficiently and re-radiate the energy as reflection. At shorter wavelengths (fiber's 
                1.06μm), electron response time cannot match the rapid oscillations, causing energy absorption instead of reflection. 
                This is why fiber lasers (1064nm) achieve 88-92% absorption on steel while CO2 lasers (10600nm) achieve only 8-10%.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Temperature Dependence of Absorption</h3>
              <p>
                Absorption rates increase with temperature. Cold aluminum at room temperature absorbs ~8% of 1064nm radiation, 
                but once heated to 400-600°C during cutting, absorption increases to 15-25%. This is why aluminum cutting requires 
                high-power fiber lasers—initial breakthrough is difficult (low absorption), but once material heats up, cutting 
                becomes more efficient. This also explains why piercing aluminum is more challenging than continuous cutting.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Surface Finish Impact</h3>
              <p>
                Polished metal surfaces reflect more than oxidized or rough surfaces. Mill scale (oxide layer) on hot-rolled steel 
                absorbs 30-40% more laser energy than clean cold-rolled steel. This is why cutting rusty or oxidized materials is 
                often easier than cutting pristine material. Some fabricators intentionally use light surface oxidation (via chemical 
                treatment or controlled rust) to improve fiber laser absorption on aluminum and copper.
              </p>

              <h3 className="text-lg font-semibold text-gray-900">Wavelength Selection Strategy</h3>
              <p>
                <strong>Primary Material Rule:</strong> Choose wavelength optimized for your highest-volume material (typically 70%+ 
                of work). Accept compromises on secondary materials or outsource them. A fiber laser optimized for steel will struggle 
                with aluminum, but if aluminum is only 10% of volume, this is acceptable. Conversely, trying to cut steel with a 
                CO2 laser (optimized for non-metals) results in 10x slower speeds and uneconomical operation.
              </p>
              <p>
                <strong>Multi-Material Shops:</strong> If no single material dominates (e.g., 40% steel, 40% aluminum, 20% acrylic), 
                consider dual-laser solution or hybrid systems. Total cost of two specialized lasers (fiber + CO2) is often lower 
                than attempting one "compromise" solution that performs poorly on all materials. Calculate based on throughput 
                requirements and material-specific absorption rates.
              </p>
            </div>
          </div>

          {/* Related Tools */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              🔧 Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="/tools/laser-type-wizard"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Laser Type Wizard</h3>
                <p className="text-sm text-gray-600">Interactive guide to choose laser type</p>
              </a>
              <a 
                href="/guides/power-selection-guide"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Power Selection Guide</h3>
                <p className="text-sm text-gray-600">Choose the right power level</p>
              </a>
              <a 
                href="/guides/cutting-speed-chart"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Cutting Speed Chart</h3>
                <p className="text-sm text-gray-600">Reference cutting speeds</p>
              </a>
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








