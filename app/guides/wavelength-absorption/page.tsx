import { Metadata } from 'next';
import {
  MATERIAL_ABSORPTION_DATA,
  LASER_TYPES,
  WAVELENGTH_ABSORPTION_LAST_UPDATE,
  DATA_DISCLAIMER
} from '@/lib/data/cheatsheets/wavelength-absorption-data';
import { WavelengthAbsorptionMatrix } from '@/components/cheatsheets/wavelength-absorption-matrix';
import { Breadcrumbs } from '@/components/layout/breadcrumbs';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Wavelength Absorption Chart - Material Compatibility Guide | LaserSpecHub',
  description: 'Comprehensive wavelength absorption data for laser materials. Compare how different materials absorb CO2, fiber, Nd:YAG, green, and UV laser wavelengths. Scientific data for optimal laser selection.',
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
  openGraph: {
    title: 'Laser Wavelength & Material Absorption Chart | LaserSpecHub',
    description: 'Scientific reference for laser wavelength absorption rates across metals and non-metals',
    type: 'article',
  },
};

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
          <Breadcrumbs />

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


