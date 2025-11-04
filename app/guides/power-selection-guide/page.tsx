import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import Link from 'next/link';
import {
  ALL_POWER_GUIDES,
  POWER_SELECTION_LAST_UPDATE,
  DATA_DISCLAIMER
} from '@/lib/data/cheatsheets/power-selection-data';
import { PowerSelectionCards } from '@/components/cheatsheets/power-selection-cards';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Power Selection Guide - Choose the Right Power Level',
  description: 'Complete guide to selecting laser power levels for your application. Compare 1kW-20kW fiber lasers and 40W-300W CO2 lasers with detailed specifications, pricing, and recommendations.',
  path: '/guides/power-selection-guide',
  keywords: [
    'laser power selection',
    'laser wattage guide',
    'fiber laser power',
    'CO2 laser power',
    'laser power comparison',
    'how to choose laser power',
    'laser buying guide',
    'laser power requirements'
  ],
});

export default function PowerSelectionGuidePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Select Laser Power Level',
    description: 'Guide to choosing the right laser power for your cutting and fabrication needs',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Determine Material Type',
        text: 'Identify if you primarily work with metals (fiber laser) or non-metals (CO2 laser)'
      },
      {
        '@type': 'HowToStep',
        name: 'Assess Material Thickness',
        text: 'Measure the maximum thickness you need to cut regularly'
      },
      {
        '@type': 'HowToStep',
        name: 'Consider Production Volume',
        text: 'Evaluate your daily/weekly cutting requirements and shift patterns'
      },
      {
        '@type': 'HowToStep',
        name: 'Review Budget',
        text: 'Compare initial investment and operating costs against your budget'
      }
    ],
    datePublished: POWER_SELECTION_LAST_UPDATE,
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
              Laser Power Selection Guide
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Choose the optimal laser power level for your application. This comprehensive guide 
              helps you match material thickness, production volume, and budget to the right equipment. 
              Need help determining your material thickness requirements? Check our{' '}
              <Link href="/guides/material-thickness-parameters" className="text-blue-600 hover:text-blue-800 font-medium underline">
                Material Thickness Parameters Guide
              </Link>
              {' '}or use our{' '}
              <Link href="/tools/power-calculator" className="text-blue-600 hover:text-blue-800 font-medium underline">
                Power Calculator
              </Link>
              {' '}for automated recommendations. For complete equipment selection guidance, see our{' '}
              <Link href="/guides/selection" className="text-blue-600 hover:text-blue-800 font-medium underline">
                Complete Selection Guide
              </Link>
              .
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                Equipment Selection
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Price Comparison
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Application Guide
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Updated {POWER_SELECTION_LAST_UPDATE}
              </span>
            </div>
          </div>

          {/* Decision Flowchart */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎯 Quick Selection Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 border border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For Metal Cutting</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-700">1-2kW</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Thin Sheets (0.5-5mm)</div>
                      <div className="text-gray-600">Small shops, startups, prototyping</div>
                      <div className="text-primary-600 font-medium">$35k-60k</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-700">3-4kW</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Medium (0.5-12mm)</div>
                      <div className="text-gray-600">Job shops, diverse work</div>
                      <div className="text-primary-600 font-medium">$60k-100k</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-2xl font-bold text-primary-700">6-8kW</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Thick Plates (0.5-20mm)</div>
                      <div className="text-gray-600">High-volume production</div>
                      <div className="text-primary-600 font-medium">$100k-150k</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xl font-bold text-primary-700">12-20kW</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Ultra-thick (0.5-30mm+)</div>
                      <div className="text-gray-600">Industrial, 24/7 operation</div>
                      <div className="text-primary-600 font-medium">$180k-350k+</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-5 border border-green-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">For Non-Metal Cutting</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-2xl font-bold text-green-700">40-80W</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Hobby & Small Projects</div>
                      <div className="text-gray-600">Crafts, education, startups</div>
                      <div className="text-green-600 font-medium">$3k-8k</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xl font-bold text-green-700">100-150W</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Small Business</div>
                      <div className="text-gray-600">Signs, packaging, prototypes</div>
                      <div className="text-green-600 font-medium">$10k-25k</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-20 h-20 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="text-xl font-bold text-green-700">180-300W</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Production</div>
                      <div className="text-gray-600">Furniture, thick materials</div>
                      <div className="text-green-600 font-medium">$30k-60k</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fiber Laser Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-t-lg px-6 py-4">
              <h2 className="text-2xl font-bold">
                {ALL_POWER_GUIDES[0]?.category}
              </h2>
              <p className="text-primary-100 mt-1">
                {ALL_POWER_GUIDES[0]?.wavelength} • High efficiency for steel, stainless steel, aluminum
              </p>
            </div>
            <div className="bg-white border-x border-b border-gray-200 rounded-b-lg p-6">
              {ALL_POWER_GUIDES[0] && <PowerSelectionCards categoryData={ALL_POWER_GUIDES[0]} />}
            </div>
          </div>

          {/* CO2 Laser Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg px-6 py-4">
              <h2 className="text-2xl font-bold">
                {ALL_POWER_GUIDES[1]?.category}
              </h2>
              <p className="text-green-100 mt-1">
                {ALL_POWER_GUIDES[1]?.wavelength} • Versatile for acrylic, wood, plastics, fabrics
              </p>
            </div>
            <div className="bg-white border-x border-b border-gray-200 rounded-b-lg p-6">
              {ALL_POWER_GUIDES[1] && <PowerSelectionCards categoryData={ALL_POWER_GUIDES[1]} />}
            </div>
          </div>

          {/* Deep Dive: Understanding Power Requirements */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              📊 Understanding Laser Power Requirements
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Selecting the right laser power is one of the most critical decisions when investing in laser 
                cutting equipment. Power directly impacts cutting speed, material thickness capability, edge 
                quality, and operational costs. Understanding the relationship between power, material properties, 
                and production requirements is essential for optimal equipment selection.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">The Power-Material Relationship</h3>
              <p className="mb-4">
                Laser power requirements vary dramatically based on material type and thickness. For steel cutting 
                with fiber lasers, the relationship is roughly exponential: a 3kW laser can cut 10mm mild steel at 
                approximately 1.5 m/min, while a 6kW laser doubles that speed to 3 m/min. However, for thicker 
                materials (20mm+), higher power becomes essential rather than just beneficial.
              </p>
              <p className="mb-4">
                Material reflectivity also plays a crucial role. Highly reflective materials like aluminum and copper 
                require more power to achieve the same cutting speed as steel. A 4kW fiber laser cutting 6mm aluminum 
                performs similarly to a 3kW laser cutting steel of the same thickness. Understanding these material-specific 
                characteristics helps avoid under-powered equipment purchases.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Production Volume Considerations</h3>
              <p className="mb-4">
                Production volume dramatically affects optimal power selection. High-volume operations benefit from 
                higher power through increased throughput. For example, a fabrication shop processing 100 parts daily 
                in 10mm steel might find that a 6kW laser completes the job in half the time of a 3kW system, 
                potentially eliminating the need for second-shift operations and reducing labor costs by 40%. Leading 
                manufacturers like <a href="https://opmtlaser.com/products/power-series" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener">OPMT Laser</a> offer 
                comprehensive power series from 3kW to 20kW, allowing businesses to match their exact production requirements 
                and scale up as demand grows.
              </p>
              <p className="mb-4">
                Consider the total cost per part, not just equipment price. Higher-power lasers have higher initial 
                costs but lower cost-per-part at volume. A 12kW system might cost $220,000 versus $80,000 for a 3kW 
                system, but if you're cutting 1000 parts monthly, the 12kW system can achieve ROI within 18-24 months 
                through faster cycle times and increased daily capacity.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Future-Proofing Your Investment</h3>
              <p className="mb-4">
                Many businesses make the mistake of buying exactly what they need today. However, laser cutting 
                equipment typically has a 10-15 year lifespan. Consider purchasing 20-30% more power than current 
                needs to accommodate business growth and future material requirements. The marginal cost difference 
                between 4kW and 6kW is often less than 25%, but the capability difference is substantial.
              </p>
              <p className="mb-4">
                For businesses focused on innovation and customization, manufacturers like OPMT Laser offer 
                <a href="https://opmtlaser.com/products/modular-power-systems" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener"> modular power upgrade systems</a> that 
                allow starting with lower power and upgrading as business grows. This approach provides a cost-effective 
                path to scale capacity without replacing the entire machine, making it ideal for startups and growing 
                fabrication businesses planning long-term expansion.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Power vs. Speed vs. Quality Trade-offs</h3>
              <p className="mb-4">
                Higher power doesn't always mean better results. For precision applications requiring excellent edge 
                quality, moderate power with slower cutting speeds often produces superior results. A 3kW laser at 
                optimal speed can produce better edge finish than a 12kW laser running at maximum speed on the same 
                material thickness.
              </p>
              <p className="mb-4">
                The key is matching power to application. Job shops handling diverse work benefit from mid-range 
                power (4-6kW) providing versatility. Production facilities focusing on specific parts benefit from 
                optimizing power for that application. Medical device manufacturers cutting thin precision parts might 
                prefer 2-3kW for superior control, while shipbuilding operations cutting 30mm plate need 15-20kW minimum.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Electrical Infrastructure Requirements</h3>
              <p className="mb-4">
                Higher power lasers require substantial electrical infrastructure. A 12kW fiber laser typically requires 
                a 100kW power supply (accounting for conversion efficiency and support systems), demanding three-phase 
                480V power. Before committing to high-power equipment, verify your facility can support the electrical 
                load. Upgrading electrical infrastructure can add $20,000-$50,000 to project costs.
              </p>
              <p className="mb-4">
                Consider total facility power consumption including chillers, dust collection, and air compressors. 
                A complete 8kW laser cutting system typically consumes 75-85kW total. Calculate monthly electricity 
                costs: at $0.12/kWh running single shift, expect $2,000-2,500/month in electricity alone for an 8kW system.
              </p>
            </div>
          </div>

          {/* ROI Considerations */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              💰 ROI and Total Cost of Ownership
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Initial Investment</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Equipment purchase price</li>
                  <li>• Installation and commissioning</li>
                  <li>• Initial training</li>
                  <li>• Facility modifications</li>
                  <li>• Safety equipment</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Operating Costs</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Electricity consumption</li>
                  <li>• Assist gas (N₂, O₂, Air)</li>
                  <li>• Consumables (nozzles, lenses)</li>
                  <li>• Maintenance and service</li>
                  <li>• Operator wages</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Revenue Factors</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Production capacity</li>
                  <li>• Material utilization</li>
                  <li>• Quality and precision</li>
                  <li>• Versatility (multiple materials)</li>
                  <li>• Market competitiveness</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Rule of Thumb:</strong> Higher power lasers have faster ROI when utilized at 
                capacity. A 6kW laser running 2 shifts can have better ROI than a 3kW running 3 shifts 
                due to higher throughput and lower per-part costs.
              </p>
            </div>
          </div>

          {/* Selection Checklist */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              ✅ Power Selection Checklist
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Material Requirements</h3>
                <label className="flex items-start text-sm">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>Identified primary materials (metal vs. non-metal)</span>
                </label>
                <label className="flex items-start text-sm">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>Measured maximum material thickness</span>
                </label>
                <label className="flex items-start text-sm">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>Considered future material needs</span>
                </label>
                <label className="flex items-start text-sm">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>Defined quality requirements (edge quality, precision)</span>
                </label>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Production & Budget</h3>
                <label className="flex items-start text-sm">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>Calculated daily/weekly cutting requirements</span>
                </label>
                <label className="flex items-start text-sm">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>Determined number of production shifts</span>
                </label>
                <label className="flex items-start text-sm">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>Set total budget (initial + 1st year operating costs)</span>
                </label>
                <label className="flex items-start text-sm">
                  <input type="checkbox" className="mt-1 mr-2" />
                  <span>Verified facility electrical capacity</span>
                </label>
              </div>
            </div>
          </div>

          {/* Related Tools */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              🔧 Related Tools & Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="/tools/power-calculator"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Power Calculator</h3>
                <p className="text-sm text-gray-600">Calculate exact power needs by material</p>
              </a>
              <a 
                href="/tools/laser-type-wizard"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Laser Type Wizard</h3>
                <p className="text-sm text-gray-600">Interactive guide to laser type selection</p>
              </a>
              <a 
                href="/guides/cutting-speed-chart"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Cutting Speed Chart</h3>
                <p className="text-sm text-gray-600">Reference speeds for different powers</p>
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


