import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Complete Laser Equipment Selection Guide - Buyer's Decision Framework 2025',
  description:
    'Comprehensive 2000+ word guide to selecting laser cutting equipment. Detailed evaluation criteria, vendor comparison matrix, ROI calculation, and decision frameworks for $50k-$500k+ investments.',
  path: '/guides/selection',
  keywords: [
    'laser equipment selection',
    'laser buying guide',
    'laser machine specifications',
    'equipment evaluation criteria',
    'laser vendor comparison',
    'laser ROI calculation',
    'equipment selection matrix',
  ],
});

export default function SelectionGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-10">
      <article className="prose max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Complete Laser Equipment Selection Guide
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          Choosing the right laser cutting equipment is a significant capital investment ($50,000-$500,000+) that impacts your production capabilities for 10-15 years. This comprehensive guide provides a systematic framework for evaluating specifications, comparing vendors, calculating ROI, and making confident purchasing decisions.
        </p>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-lg">
          <p className="text-gray-800 text-sm">
            <strong>💡 Selection Reality Check:</strong> 60-70% of laser equipment buyers regret their purchase within 2 years due to underestimating power requirements, overestimating work area needs, or choosing based on price alone. This guide helps you avoid the $100k+ mistakes that plague first-time buyers.
          </p>
        </div>

        {/* Pre-Selection: Understanding Your Needs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pre-Selection Analysis: Know Before You Shop</h2>
          
          <p className="text-gray-700 mb-6">
            Before contacting vendors, complete a thorough internal assessment. This prevents sales pressure from driving decisions and ensures you evaluate equipment against YOUR requirements, not the vendor's inventory.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-3">⚠️ Common Selection Mistakes to Avoid</h3>
            <div className="space-y-2 text-sm text-yellow-800">
              <div className="flex items-start">
                <span className="font-bold mr-2">1.</span>
                <span><strong>Buying based on price alone:</strong> A $120k system that meets 80% of needs costs more long-term than a $180k system meeting 100% (outsourcing, workarounds, lost opportunities).</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold mr-2">2.</span>
                <span><strong>Overbuying work area:</strong> 3m×6m platform costs $50k-80k more than 2m×3m but sits 40% empty if your largest part is 1.5m. Material handling complexity increases exponentially with size.</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold mr-2">3.</span>
                <span><strong>Underbuying laser power:</strong> 3kW fiber cuts 10mm steel at 0.8 m/min; 6kW cuts at 2.5 m/min (3x throughput). Power upgrade later costs 2-3x more than buying right initially.</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold mr-2">4.</span>
                <span><strong>Ignoring total cost of ownership:</strong> $150k system with $30/hr operating cost vs $200k system with $18/hr cost breaks even at 4,200 operating hours (2 years at single shift). Choose based on 10-year TCO.</span>
              </div>
              <div className="flex items-start">
                <span className="font-bold mr-2">5.</span>
                <span><strong>Neglecting service network:</strong> Premium European brands offer 24-48hr parts delivery and factory-trained technicians. Budget Asian brands may have 2-4 week lead times and limited local support, costing $5k-15k per day in downtime.</span>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Analysis (Critical Foundation)</h3>
          <p className="text-gray-700 mb-4">
            Your material mix determines laser type (fiber vs CO2), power requirements, and assist gas costs. Analyze your last 12 months of production or projected first 3 years:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Material Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Thickness Range</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">% of Volume</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Laser Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Carbon Steel</td>
                  <td className="border border-gray-300 px-4 py-2">1-20mm</td>
                  <td className="border border-gray-300 px-4 py-2">60%+</td>
                  <td className="border border-gray-300 px-4 py-2">Fiber laser (1064nm) - fast, efficient, low cost</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Stainless Steel</td>
                  <td className="border border-gray-300 px-4 py-2">0.5-12mm</td>
                  <td className="border border-gray-300 px-4 py-2">20-40%</td>
                  <td className="border border-gray-300 px-4 py-2">Fiber laser - nitrogen assist required (higher cost)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Aluminum</td>
                  <td className="border border-gray-300 px-4 py-2">1-10mm</td>
                  <td className="border border-gray-300 px-4 py-2">10-30%</td>
                  <td className="border border-gray-300 px-4 py-2">Fiber 6kW+ (reflective, needs high power)</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Acrylic/Wood</td>
                  <td className="border border-gray-300 px-4 py-2">3-25mm</td>
                  <td className="border border-gray-300 px-4 py-2">Varies</td>
                  <td className="border border-gray-300 px-4 py-2">CO2 laser (10600nm) - better absorption for non-metals</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Decision Rule:</strong> If 70%+ of your work is metal (steel/stainless/aluminum), choose fiber laser. If 50%+ is non-metal (acrylic, wood, leather), choose CO2. Mixed work requires two machines or hybrid system (rare, expensive).
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Production Volume & Throughput Requirements</h3>
          <p className="text-gray-700 mb-4">
            Calculate required throughput to determine power and automation needs. Underestimating by 30% is common—factor in growth, reject rates, and setup time:
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Throughput Calculation Example</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Scenario:</strong> Sheet metal fabricator, 10,000 parts/month, average 300×300mm brackets, 3mm steel</p>
              <p><strong>Cutting time per part:</strong></p>
              <ul className="ml-6 space-y-1">
                <li>• 3kW fiber: 90 seconds/part = 25 hours/1000 parts</li>
                <li>• 6kW fiber: 45 seconds/part = 12.5 hours/1000 parts</li>
                <li>• 12kW fiber: 30 seconds/part = 8.3 hours/1000 parts</li>
              </ul>
              <p className="mt-3"><strong>Monthly cutting time (10,000 parts):</strong></p>
              <ul className="ml-6 space-y-1">
                <li>• 3kW: 250 hours (requires 1.5 shifts at 85% utilization)</li>
                <li>• 6kW: 125 hours (single shift at 70% utilization)</li>
                <li>• 12kW: 83 hours (single shift at 45% utilization - overkill)</li>
              </ul>
              <p className="mt-3 font-semibold text-blue-900">
                <strong>Optimal choice:</strong> 6kW fiber provides headroom for growth, single-shift operation, and acceptable ROI. 3kW requires multi-shift (labor cost +$40k/year). 12kW wastes $80k+ in capital.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Budget & Financial Planning</h3>
          <p className="text-gray-700 mb-4">
            Laser equipment costs extend far beyond the purchase price. Plan for total 5-year cost of ownership:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Cost Category</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Initial</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Annual (Years 1-5)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">5-Year Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Equipment Purchase</td>
                  <td className="border border-gray-300 px-4 py-2">$150,000</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">$150,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Installation & Training</td>
                  <td className="border border-gray-300 px-4 py-2">$15,000</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">$15,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Facility Prep (electrical, ventilation)</td>
                  <td className="border border-gray-300 px-4 py-2">$10,000-25,000</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">$17,500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Operating Costs (gas, power, consumables)</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">$30,000-50,000</td>
                  <td className="border border-gray-300 px-4 py-2">$200,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Maintenance & Repairs</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">$8,000-15,000</td>
                  <td className="border border-gray-300 px-4 py-2">$57,500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Labor (operator + programmer)</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">$60,000-80,000</td>
                  <td className="border border-gray-300 px-4 py-2">$350,000</td>
                </tr>
                <tr className="font-semibold">
                  <td className="border border-gray-300 px-4 py-2">5-Year TCO</td>
                  <td className="border border-gray-300 px-4 py-2">$182,500</td>
                  <td className="border border-gray-300 px-4 py-2">$123,000/year</td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-900">$790,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-700 mb-6">
            <strong>Key Insight:</strong> Equipment purchase represents only 19% of 5-year TCO. Operating costs (25%) and labor (44%) dominate. A $50k premium for higher efficiency (lower gas consumption, faster cutting) pays back in 12-18 months through reduced operating costs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 1: Define Your Requirements</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Material Considerations</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>What materials will you cut? (metals, non-metals, or both)</li>
            <li>Material thickness range required</li>
            <li>Special material properties (reflective, brittle, etc.)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Production Requirements</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Daily/monthly production volume</li>
            <li>Maximum part size needed</li>
            <li>Required cutting speed and quality</li>
            <li>Single or multi-shift operation</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">Budget Constraints</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Initial investment budget</li>
            <li>Operating cost considerations</li>
            <li>Maintenance and consumables budget</li>
            <li>ROI expectations and timeline</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 2: Key Specifications to Evaluate</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Laser Power</h3>
              <p className="text-gray-700">
                Higher power enables faster cutting and thicker materials. Common ranges: 1-3kW (thin materials), 
                4-6kW (medium), 8-12kW+ (thick materials and high-speed production).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Work Area Size</h3>
              <p className="text-gray-700">
                Must accommodate your largest parts plus spacing. Common sizes: 1m×1m (small), 
                2m×3m (medium), 3m×6m+ (large format). Consider material utilization.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Positioning Accuracy</h3>
              <p className="text-gray-700">
                Critical for precision work. Typical ranges: ±0.05mm (standard), ±0.03mm (precision), 
                ±0.01mm (ultra-precision). Match to your quality requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Control System</h3>
              <p className="text-gray-700">
                Affects ease of use and capabilities. Popular options: Cypcut, Ruida, Beckhoff. 
                Consider software compatibility and learning curve.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Vendor Evaluation</h2>
          
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Reputation & Experience:</strong> Years in business, customer reviews, industry standing</li>
            <li><strong>Technical Support:</strong> Response times, expertise level, availability</li>
            <li><strong>Training:</strong> Initial training programs, ongoing education</li>
            <li><strong>Parts & Service:</strong> Spare parts availability, service network</li>
            <li><strong>Warranty:</strong> Coverage period, what's included, service terms</li>
            <li><strong>Customization:</strong> Ability to modify for specific needs</li>
          </ul>
        </section>

        {/* Recommended Vendors & System Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Vendor Shortlist & System Integration</h2>
          <p className="text-gray-700 mb-4">
            Beyond specifications, evaluate the vendor’s ability to integrate control systems, optimize cutting parameters,
            and provide upgrade paths. For example, manufacturers like
            <a href="https://opmtlaser.com/technology/adaptive-cutting-control" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener"> OPMT Laser</a>
            offer adaptive cutting control and modular power upgrades that help future-proof your investment and reduce gas consumption by 15-25% in real production.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Request parameter libraries for your materials</li>
            <li>Confirm CNC compatibility (Cypcut, Beckhoff, Siemens) and post-processor support</li>
            <li>Check upgrade paths: power modules, automation, assist gas systems</li>
          </ul>
        </section>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
          <h3 className="font-semibold text-blue-900 mb-2">Pro Tip</h3>
          <p className="text-blue-800">
            Request a test cut with your actual materials before finalizing your purchase. 
            This reveals real-world performance and helps validate specifications.
          </p>
        </div>

        <section className="not-prose mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Use Our Selection Tools</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/tools/laser-type-wizard">
              <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Laser Type Wizard</h3>
                  <p className="text-sm text-gray-600">Get personalized laser type recommendations</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/equipment">
              <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Equipment Database</h3>
                  <p className="text-sm text-gray-600">Browse and filter laser cutting machines</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

