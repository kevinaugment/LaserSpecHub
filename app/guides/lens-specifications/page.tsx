import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import {
  LENS_FOCAL_LENGTHS,
  LENS_MAINTENANCE,
  LENS_SPECS_LAST_UPDATE,
  DATA_DISCLAIMER
} from '@/lib/data/cheatsheets/lens-specifications-data';
import { LensSpecsComparison } from '@/components/cheatsheets/lens-specs-comparison';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Focusing Lens Specifications Guide - Focal Length Comparison',
  description: 'Complete guide to laser focusing lenses. Compare 50mm to 254mm focal lengths with specifications, applications, and selection criteria for optimal cutting performance.',
  path: '/guides/lens-specifications',
  keywords: [
    'laser focusing lens',
    'focal length selection',
    'lens specifications',
    '127mm lens',
    '50mm lens',
    'depth of focus',
    'spot size',
    'laser optics'
  ],
});

export default function LensSpecificationsPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Focusing Lens Specifications and Selection Guide',
    description: 'Comprehensive guide to selecting laser focusing lenses based on focal length and application',
    author: {
      '@type': 'Organization',
      name: 'LaserSpecHub',
    },
    datePublished: LENS_SPECS_LAST_UPDATE,
    dateModified: LENS_SPECS_LAST_UPDATE,
  };

  return (
    <>
      <StructuredData data={structuredData} />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Laser Focusing Lens Specifications
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Select the optimal focusing lens for your laser cutting application. Compare focal lengths 
              from 50mm to 254mm with detailed specifications, advantages, and recommended uses.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                {LENS_FOCAL_LENGTHS.length} Focal Lengths
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                Technical Data
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                Maintenance Guide
              </span>
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                Updated {LENS_SPECS_LAST_UPDATE}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🔍 Understanding Focal Length
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                The focusing lens focal length is one of the most critical parameters in laser cutting. 
                It determines the spot size, depth of focus, and working distance - all of which directly 
                affect cutting quality, material thickness capability, and operational ease.
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-4">
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Spot Size</h3>
                  <p className="text-sm text-gray-700">
                    Shorter focal length = smaller spot = higher power density = better precision. 
                    50mm lens produces 0.05mm spot vs 254mm producing 0.35mm spot.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Depth of Focus</h3>
                  <p className="text-sm text-gray-700">
                    Longer focal length = larger depth of focus = more tolerant to height variations. 
                    Critical for thick materials and warped sheets.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-gray-900 mb-2">Working Distance</h3>
                  <p className="text-sm text-gray-700">
                    Longer focal length = more clearance between lens and workpiece. 
                    Important for 3D cutting and preventing collisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              🎯 Quick Selection Guide
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-center mb-3">
                  <div className="text-3xl font-bold text-primary-600">50-75mm</div>
                  <div className="text-sm text-gray-600 mt-1">Precision Cutting</div>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Thin materials (0.5-3mm)</li>
                  <li>• High precision required</li>
                  <li>• Electronics, jewelry</li>
                  <li>• Fine details</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 bg-primary-50 border-primary-300">
                <div className="text-center mb-3">
                  <div className="text-3xl font-bold text-primary-600">127mm</div>
                  <div className="text-sm text-gray-600 mt-1">Universal Standard ⭐</div>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Medium materials (3-15mm)</li>
                  <li>• Most versatile</li>
                  <li>• General fabrication</li>
                  <li>• Best all-around choice</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-center mb-3">
                  <div className="text-3xl font-bold text-primary-600">190mm</div>
                  <div className="text-sm text-gray-600 mt-1">Thick Plate</div>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Thick materials (15-25mm)</li>
                  <li>• Large depth of focus</li>
                  <li>• Heavy fabrication</li>
                  <li>• Structural steel</li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="text-center mb-3">
                  <div className="text-3xl font-bold text-primary-600">254mm</div>
                  <div className="text-sm text-gray-600 mt-1">Special Applications</div>
                </div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ultra-thick (&gt;25mm)</li>
                  <li>• 3D tube cutting</li>
                  <li>• Remote processing</li>
                  <li>• Deep engraving</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <LensSpecsComparison lensData={LENS_FOCAL_LENGTHS} />
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              🛠️ Lens Maintenance Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Cleaning Frequency</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded">
                    <span className="text-gray-700">Light Use:</span>
                    <span className="font-medium text-gray-900">{LENS_MAINTENANCE.cleaningFrequency.lightUse}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-yellow-50 rounded">
                    <span className="text-gray-700">Normal Use:</span>
                    <span className="font-medium text-gray-900">{LENS_MAINTENANCE.cleaningFrequency.normalUse}</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-red-50 rounded">
                    <span className="text-gray-700">Heavy Use:</span>
                    <span className="font-medium text-gray-900">{LENS_MAINTENANCE.cleaningFrequency.heavyUse}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Cleaning Method</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {LENS_MAINTENANCE.cleaningMethod.map((method, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-primary-600">#{i + 1}</span>
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-3">⚠️ Replacement Indicators</h3>
                <ul className="space-y-1 text-sm text-red-800">
                  {LENS_MAINTENANCE.replacementIndicators.map((indicator, i) => (
                    <li key={i}>• {indicator}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-900 mb-3">📦 Storage Guidelines</h3>
                <ul className="space-y-1 text-sm text-blue-800">
                  {LENS_MAINTENANCE.storageGuidelines.map((guideline, i) => (
                    <li key={i}>• {guideline}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              💡 Selection Tips & Best Practices
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Start with 127mm (5 inch)</h3>
                <p className="text-sm text-gray-700">
                  If you're unsure, the 127mm focal length is the industry standard for good reason. 
                  It handles 80% of common cutting applications and provides the best balance of precision, 
                  tolerance, and versatility. Most manufacturers ship equipment with 127mm as default.
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Have Multiple Lenses Ready</h3>
                <p className="text-sm text-gray-700">
                  Keep at least 2-3 focal lengths in stock: one for your primary work (likely 127mm), 
                  one for precision jobs (50-75mm), and one for thick materials (190mm). Quick lens changes 
                  prevent production delays and optimize quality for each job.
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Consider Material Flatness</h3>
                <p className="text-sm text-gray-700">
                  If you work with warped sheets or materials with height variations &gt;2mm, use longer 
                  focal lengths (190mm or 254mm) for their larger depth of focus. Short focal lengths 
                  require excellent height control - invest in auto-focus sensors if using 50-75mm lenses.
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-medium text-gray-900 mb-1">Match to Your Application</h3>
                <p className="text-sm text-gray-700">
                  Don't use a 50mm lens for 15mm steel or a 254mm lens for 1mm precision work. 
                  Each focal length has a sweet spot - matching your typical material thickness to 
                  the right lens can improve quality by 30-50% and reduce reject rates.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              🔧 Related Resources
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <a 
                href="/guides/cutting-speed-chart"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Cutting Speed Chart</h3>
                <p className="text-sm text-gray-600">Reference speeds for optimization</p>
              </a>
              <a 
                href="/guides/assist-gas-chart"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Assist Gas Selection</h3>
                <p className="text-sm text-gray-600">Choose the right assist gas</p>
              </a>
              <a 
                href="/tools/power-calculator"
                className="block p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors"
              >
                <h3 className="font-medium text-gray-900 mb-1">Power Calculator</h3>
                <p className="text-sm text-gray-600">Calculate power requirements</p>
              </a>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-xs text-gray-600">
            <p>{DATA_DISCLAIMER}</p>
          </div>
        </div>
      </div>
    </>
  );
}


