import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata: Metadata = generatePageMetadata({
  title: 'Complete Laser Equipment Selection Guide - Buyer Decision Framework 2025',
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

          <h3 className="text-xl font-semibold text-gray-900 mb-4">ROI Calculation Framework</h3>
          <p className="text-gray-700 mb-4">
            Calculate return on investment using this formula to validate equipment purchase decisions:
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">ROI Formula</h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="bg-white p-4 rounded border border-blue-200">
                <p className="font-mono text-base mb-2">ROI = (Net Savings - Initial Investment) / Initial Investment × 100%</p>
                <p className="text-xs text-gray-600">Net Savings = Annual Revenue Increase + Operating Cost Savings - Annual Operating Costs</p>
              </div>
              
              <div className="mt-4">
                <p className="font-semibold mb-2">Example Calculation:</p>
                <ul className="space-y-1 ml-4">
                  <li>• Initial Investment: $180,000</li>
                  <li>• Annual Revenue Increase (faster production): $85,000</li>
                  <li>• Operating Cost Savings (efficiency): $32,000/year</li>
                  <li>• Annual Operating Costs: $45,000</li>
                  <li>• Net Savings Year 1: $85,000 + $32,000 - $45,000 = $72,000</li>
                  <li>• ROI Year 1: ($72,000 - $180,000) / $180,000 = -60% (payback period)</li>
                  <li>• ROI Year 2: (Cumulative $144,000) = -20%</li>
                  <li>• ROI Year 3: (Cumulative $216,000) = +20%</li>
                </ul>
                <p className="mt-3 font-semibold text-blue-900">Payback Period: 2.5 years | 5-Year ROI: 100%+</p>
              </div>
            </div>
          </div>
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

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Beam Quality (M² Value)</h3>
              <p className="text-gray-700 mb-3">
                Beam quality directly impacts cutting precision and edge quality. M² value measures how close the laser beam is to an ideal Gaussian beam (M² = 1 is perfect).
              </p>
              
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">M² Value</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Beam Quality</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Application</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Focus Spot Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">1.0 - 1.3</td>
                      <td className="border border-gray-300 px-4 py-2">Excellent</td>
                      <td className="border border-gray-300 px-4 py-2">Ultra-precise cutting, fine features</td>
                      <td className="border border-gray-300 px-4 py-2">20-30μm</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">1.3 - 2.0</td>
                      <td className="border border-gray-300 px-4 py-2">Very Good</td>
                      <td className="border border-gray-300 px-4 py-2">High precision cutting, thin materials</td>
                      <td className="border border-gray-300 px-4 py-2">30-50μm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">2.0 - 4.0</td>
                      <td className="border border-gray-300 px-4 py-2">Good</td>
                      <td className="border border-gray-300 px-4 py-2">Standard cutting, medium thickness</td>
                      <td className="border border-gray-300 px-4 py-2">50-100μm</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">4.0 - 8.0</td>
                      <td className="border border-gray-300 px-4 py-2">Acceptable</td>
                      <td className="border border-gray-300 px-4 py-2">High-power cutting, thick materials</td>
                      <td className="border border-gray-300 px-4 py-2">100-200μm</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">&gt; 8.0</td>
                      <td className="border border-gray-300 px-4 py-2">Poor</td>
                      <td className="border border-gray-300 px-4 py-2">Rough cutting only, not recommended</td>
                      <td className="border border-gray-300 px-4 py-2">&gt; 200μm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Recommendation:</strong> For precision work (≤±0.05mm), choose M² ≤ 2.0. For standard work, M² ≤ 4.0 is acceptable. Higher M² values indicate lower beam quality but may be acceptable for high-power thick material cutting.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting Speed Reference</h3>
              <p className="text-gray-700 mb-3">
                Reference cutting speeds for common materials (fiber laser, optimal conditions):
              </p>
              
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Material</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Thickness</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">3kW Speed</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">6kW Speed</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">12kW Speed</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2" rowSpan={3}>Carbon Steel</td>
                      <td className="border border-gray-300 px-4 py-2">3mm</td>
                      <td className="border border-gray-300 px-4 py-2">5.0 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">8.5 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">12.0 m/min</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">6mm</td>
                      <td className="border border-gray-300 px-4 py-2">2.0 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">4.5 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">7.0 m/min</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">10mm</td>
                      <td className="border border-gray-300 px-4 py-2">0.8 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">2.5 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">4.5 m/min</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2" rowSpan={2}>Stainless Steel</td>
                      <td className="border border-gray-300 px-4 py-2">3mm</td>
                      <td className="border border-gray-300 px-4 py-2">3.5 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">6.0 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">9.0 m/min</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">6mm</td>
                      <td className="border border-gray-300 px-4 py-2">1.2 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">3.0 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">5.0 m/min</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2" rowSpan={2}>Aluminum</td>
                      <td className="border border-gray-300 px-4 py-2">3mm</td>
                      <td className="border border-gray-300 px-4 py-2">4.0 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">7.5 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">11.0 m/min</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">6mm</td>
                      <td className="border border-gray-300 px-4 py-2">1.5 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">4.0 m/min</td>
                      <td className="border border-gray-300 px-4 py-2">6.5 m/min</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Speeds assume optimal gas pressure, focus position, and material quality. Actual speeds may vary ±15-20% based on equipment condition and material properties.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assist Gas Selection Guide</h3>
              <p className="text-gray-700 mb-3">
                Assist gas selection significantly impacts cut quality, speed, and operating costs:
              </p>
              
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left">Gas Type</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Material</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Cost/m³</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Edge Quality</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Speed Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Oxygen</td>
                      <td className="border border-gray-300 px-4 py-2">Carbon Steel (3mm+)</td>
                      <td className="border border-gray-300 px-4 py-2">$0.08-0.15</td>
                      <td className="border border-gray-300 px-4 py-2">Oxidized edge, good</td>
                      <td className="border border-gray-300 px-4 py-2">+30-50% faster</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Nitrogen</td>
                      <td className="border border-gray-300 px-4 py-2">Stainless Steel, Aluminum</td>
                      <td className="border border-gray-300 px-4 py-2">$0.12-0.25</td>
                      <td className="border border-gray-300 px-4 py-2">Clean, oxide-free</td>
                      <td className="border border-gray-300 px-4 py-2">Base speed</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">Compressed Air</td>
                      <td className="border border-gray-300 px-4 py-2">Thin Carbon Steel</td>
                      <td className="border border-gray-300 px-4 py-2">$0.02-0.05</td>
                      <td className="border border-gray-300 px-4 py-2">Slightly oxidized</td>
                      <td className="border border-gray-300 px-4 py-2">+15-25% faster</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-4 py-2">Argon</td>
                      <td className="border border-gray-300 px-4 py-2">Titanium, Reactive Metals</td>
                      <td className="border border-gray-300 px-4 py-2">$0.30-0.50</td>
                      <td className="border border-gray-300 px-4 py-2">Excellent, clean</td>
                      <td className="border border-gray-300 px-4 py-2">-10-20% slower</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-green-900 mb-2">Cost Comparison Example</h4>
                <p className="text-sm text-green-800">
                  For 1000 hours/year operation, 8 m³/h flow rate:<br/>
                  • Oxygen: $640-1,200/year | Nitrogen: $960-2,000/year | Air: $160-400/year<br/>
                  <strong>Using compressed air instead of nitrogen saves $560-1,840/year</strong> but requires clean, dry air system ($5k-8k initial investment, payback in 3-5 years for high-volume operations).
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 3: Vendor Evaluation</h2>
          
          <p className="text-gray-700 mb-6">
            Use this scoring matrix to objectively compare vendors. Rate each criterion from 1-10, then weight by importance.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Evaluation Criterion</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Weight</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Score (1-10)</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Evaluation Points</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Reputation & Experience</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">15%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-xs">Years in business, industry awards, customer testimonials</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Technical Support</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">20%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-xs">Response time (target: &lt;4hr), on-site availability, remote support</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Parts & Service Network</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">15%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-xs">Parts lead time, local warehouse, service centers</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Training & Documentation</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">10%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-xs">Initial training hours, materials quality, ongoing support</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Warranty Coverage</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">10%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-xs">Coverage period, included components, service terms</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Equipment Performance</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">15%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-xs">Speed, accuracy, edge quality vs. specifications</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium">Customization Options</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">5%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-xs">Ability to modify for specific needs, upgrade paths</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 font-medium">Total Cost of Ownership</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">10%</td>
                  <td className="border border-gray-300 px-4 py-2 text-center">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-xs">5-year TCO including operating costs, maintenance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-900 mb-2">Weighted Score Calculation</h4>
            <p className="text-sm text-blue-800">
              Final Score = Σ (Criterion Score × Weight). Vendor with highest weighted score (typically 7.5+) should be shortlisted. 
              For critical operations, set minimum thresholds: Technical Support ≥ 8.0, Parts Availability ≥ 7.0.
            </p>
          </div>
        </section>

        {/* Decision Trees */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Decision Trees: Quick Selection Guides</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Laser Type Decision Tree</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="font-bold mr-2">Start:</span>
                  <span>What is your primary material?</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>Metals (≥70%):</strong> Choose <strong>Fiber Laser</strong> (1064nm wavelength)</span>
                  </div>
                  <div className="ml-4 text-xs text-gray-600">
                    • Carbon Steel: Excellent cutting speed, oxygen assist<br/>
                    • Stainless Steel: High quality, nitrogen assist required<br/>
                    • Aluminum: 6kW+ recommended for reflective surface<br/>
                    • Copper/Brass: Fiber laser optimal, may require higher power
                  </div>
                  <div className="flex items-start mt-3">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>Non-Metals (≥50%):</strong> Choose <strong>CO2 Laser</strong> (10600nm wavelength)</span>
                  </div>
                  <div className="ml-4 text-xs text-gray-600">
                    • Acrylic/PMMA: Excellent edge quality<br/>
                    • Wood/MDF: Fast, clean cutting<br/>
                    • Leather/Fabric: Precise, minimal charring<br/>
                    • Paper/Cardboard: High-speed processing
                  </div>
                  <div className="flex items-start mt-3">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>Mixed (40-60% each):</strong> Consider two machines or hybrid system (rare, expensive)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Power Selection Decision Tree</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start">
                  <span className="font-bold mr-2">Step 1:</span>
                  <span>What is your maximum material thickness?</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>&lt; 3mm:</strong> 1-3kW sufficient</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>3-8mm:</strong> 3-6kW recommended</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>8-15mm:</strong> 6-8kW required</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>15-25mm:</strong> 8-12kW needed</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>&gt; 25mm:</strong> 12kW+ or multiple passes</span>
                  </div>
                </div>
                <div className="flex items-start mt-4">
                  <span className="font-bold mr-2">Step 2:</span>
                  <span>What is your production volume?</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>Low (&lt;500 parts/month):</strong> Lower power acceptable, prioritize cost</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>Medium (500-5000 parts/month):</strong> Match power to thickness, consider speed</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>High (&gt;5000 parts/month):</strong> Consider 1 power level higher for throughput</span>
                  </div>
                </div>
                <div className="flex items-start mt-4">
                  <span className="font-bold mr-2">Step 3:</span>
                  <span>What is your shift schedule?</span>
                </div>
                <div className="ml-6 space-y-2">
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>Single shift:</strong> Size power for 70-80% utilization</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>Double shift:</strong> Size power for 60-70% utilization</span>
                  </div>
                  <div className="flex items-start">
                    <span className="font-bold mr-2">→</span>
                    <span><strong>24/7 operation:</strong> Size power for 50-60% utilization, prioritize reliability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Cost Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Maintenance Cost Analysis</h2>
          
          <p className="text-gray-700 mb-4">
            Preventive maintenance costs significantly impact total cost of ownership. Plan for these recurring expenses:
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">Maintenance Item</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Frequency</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Cost per Service</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Annual Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Routine Inspection</td>
                  <td className="border border-gray-300 px-4 py-2">Monthly</td>
                  <td className="border border-gray-300 px-4 py-2">$200-400</td>
                  <td className="border border-gray-300 px-4 py-2">$2,400-4,800</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Optics Cleaning & Alignment</td>
                  <td className="border border-gray-300 px-4 py-2">Quarterly</td>
                  <td className="border border-gray-300 px-4 py-2">$500-800</td>
                  <td className="border border-gray-300 px-4 py-2">$2,000-3,200</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Lens Replacement (CO2)</td>
                  <td className="border border-gray-300 px-4 py-2">6-12 months</td>
                  <td className="border border-gray-300 px-4 py-2">$800-1,500</td>
                  <td className="border border-gray-300 px-4 py-2">$800-3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Focusing Lens (Fiber)</td>
                  <td className="border border-gray-300 px-4 py-2">12-24 months</td>
                  <td className="border border-gray-300 px-4 py-2">$400-800</td>
                  <td className="border border-gray-300 px-4 py-2">$200-800</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Laser Source Service (CO2 Tube)</td>
                  <td className="border border-gray-300 px-4 py-2">2,000-8,000 hours</td>
                  <td className="border border-gray-300 px-4 py-2">$3,000-8,000</td>
                  <td className="border border-gray-300 px-4 py-2">$3,000-8,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Nozzle & Consumables</td>
                  <td className="border border-gray-300 px-4 py-2">As needed</td>
                  <td className="border border-gray-300 px-4 py-2">$50-200</td>
                  <td className="border border-gray-300 px-4 py-2">$1,500-3,000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Motion System Service</td>
                  <td className="border border-gray-300 px-4 py-2">Annually</td>
                  <td className="border border-gray-300 px-4 py-2">$1,500-3,000</td>
                  <td className="border border-gray-300 px-4 py-2">$1,500-3,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Electrical System Check</td>
                  <td className="border border-gray-300 px-4 py-2">Annually</td>
                  <td className="border border-gray-300 px-4 py-2">$800-1,500</td>
                  <td className="border border-gray-300 px-4 py-2">$800-1,500</td>
                </tr>
                <tr className="font-semibold bg-blue-50">
                  <td className="border border-gray-300 px-4 py-2">Total Annual Maintenance</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2">-</td>
                  <td className="border border-gray-300 px-4 py-2 text-blue-900">$12,200-27,300</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-yellow-900 mb-2">Fiber vs CO2 Maintenance Cost Comparison</h4>
            <p className="text-sm text-yellow-800">
              <strong>Fiber Laser:</strong> Lower maintenance ($12k-20k/year). No CO2 tube replacement, longer diode life (100,000+ hours), fewer optics to maintain.<br/>
              <strong>CO2 Laser:</strong> Higher maintenance ($20k-27k/year). Tube replacement every 2-8k hours ($3k-8k each), more frequent optics service.<br/>
              <strong>5-Year Maintenance Savings (Fiber vs CO2):</strong> $40k-35k, partially offsetting higher initial cost.
            </p>
          </div>
        </section>

        {/* Recommended Vendors & System Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Step 4: Vendor Shortlist & System Integration</h2>
          <p className="text-gray-700 mb-4">
            Beyond specifications, evaluate the vendor's ability to integrate control systems, optimize cutting parameters,
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

