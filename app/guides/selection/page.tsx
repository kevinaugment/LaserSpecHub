import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
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
    'how to choose laser cutting machine',
    'laser cutter selection guide',
  ],
});

export default function SelectionGuidePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Select Laser Cutting Equipment',
    description: 'Complete step-by-step guide to selecting laser cutting equipment for your application',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Analyze Material Requirements',
        text: 'Identify primary materials, thickness ranges, and production volume to determine laser type and power needs',
      },
      {
        '@type': 'HowToStep',
        name: 'Evaluate Key Specifications',
        text: 'Assess laser power, work area size, positioning accuracy, beam quality, and control systems',
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate Total Cost of Ownership',
        text: 'Consider initial investment, operating costs, maintenance, and ROI over 5-year period',
      },
      {
        '@type': 'HowToStep',
        name: 'Compare Vendors',
        text: 'Evaluate vendor reputation, technical support, parts availability, and service network',
      },
      {
        '@type': 'HowToStep',
        name: 'Make Final Decision',
        text: 'Shortlist vendors, request test cuts, and finalize purchase based on comprehensive evaluation',
      },
    ],
  };

  return (
    <>
      <StructuredData type="HowTo" data={structuredData} />
      
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <article className="prose max-w-none">
          {/* Header Section */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Laser Equipment Selection Guide
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Choosing the right laser cutting equipment is a significant capital investment ($50,000-$500,000+) that impacts your production capabilities for 10-15 years. This comprehensive guide provides a systematic framework for evaluating specifications, comparing vendors, calculating ROI, and making confident purchasing decisions.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <p className="text-gray-800 text-sm leading-relaxed">
                <strong className="text-blue-900">💡 Selection Reality Check:</strong> Industry data shows that 60-70% of laser equipment buyers regret their purchase within 2 years due to underestimating power requirements, overestimating work area needs, or choosing based on price alone. This guide helps you avoid the $100k+ mistakes that plague first-time buyers.
              </p>
            </div>

            {/* Quick Navigation */}
            <nav className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">Quick Navigation</h2>
              <ul className="grid md:grid-cols-3 gap-2 text-sm">
                <li><a href="#pre-selection" className="text-blue-600 hover:text-blue-800">1. Pre-Selection Analysis</a></li>
                <li><a href="#requirements" className="text-blue-600 hover:text-blue-800">2. Define Requirements</a></li>
                <li><a href="#specifications" className="text-blue-600 hover:text-blue-800">3. Key Specifications</a></li>
                <li><a href="#vendor-evaluation" className="text-blue-600 hover:text-blue-800">4. Vendor Evaluation</a></li>
                <li><a href="#decision-trees" className="text-blue-600 hover:text-blue-800">5. Decision Trees</a></li>
                <li><a href="#cost-analysis" className="text-blue-600 hover:text-blue-800">6. Cost Analysis</a></li>
              </ul>
            </nav>
          </header>

          {/* Pre-Selection Analysis Section */}
          <section id="pre-selection" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pre-Selection Analysis: Know Before You Shop</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Before contacting vendors, complete a thorough internal assessment. This prevents sales pressure from driving decisions and ensures you evaluate equipment against YOUR requirements, not the vendor's inventory.
            </p>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4">⚠️ Common Selection Mistakes to Avoid</h3>
              <div className="space-y-3 text-sm text-yellow-800">
                <div className="flex items-start">
                  <span className="font-bold mr-3 min-w-[24px]">1.</span>
                  <div>
                    <strong>Buying based on price alone:</strong> A $120k system that meets 80% of needs costs more long-term than a $180k system meeting 100% (outsourcing, workarounds, lost opportunities).
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-3 min-w-[24px]">2.</span>
                  <div>
                    <strong>Overbuying work area:</strong> 3m×6m platform costs $50k-80k more than 2m×3m but sits 40% empty if your largest part is 1.5m. Material handling complexity increases exponentially with size.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-3 min-w-[24px]">3.</span>
                  <div>
                    <strong>Underbuying laser power:</strong> 3kW fiber cuts 10mm steel at 0.8 m/min; 6kW cuts at 2.5 m/min (3x throughput). Power upgrade later costs 2-3x more than buying right initially.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-3 min-w-[24px]">4.</span>
                  <div>
                    <strong>Ignoring total cost of ownership:</strong> $150k system with $30/hr operating cost vs $200k system with $18/hr cost breaks even at 4,200 operating hours (2 years at single shift). Choose based on 10-year TCO.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-bold mr-3 min-w-[24px]">5.</span>
                  <div>
                    <strong>Neglecting service network:</strong> Premium European brands offer 24-48hr parts delivery and factory-trained technicians. Budget Asian brands may have 2-4 week lead times and limited local support, costing $5k-15k per day in downtime.
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Material Analysis (Critical Foundation)</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Your material mix determines laser type (fiber vs CO2), power requirements, and assist gas costs. Analyze your last 12 months of production or projected first 3 years. For detailed material-specific guidance, see our <Link href="/guides/material-thickness-parameters" className="text-blue-600 hover:text-blue-800 font-medium">Material Thickness Parameters Guide</Link>.
            </p>
            
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Material Type</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Thickness Range</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">% of Volume</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Laser Recommendation</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Assist Gas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Carbon Steel (Mild Steel)</td>
                    <td className="border border-gray-300 px-4 py-3">1-25mm</td>
                    <td className="border border-gray-300 px-4 py-3">60%+</td>
                    <td className="border border-gray-300 px-4 py-3">Fiber laser (1064nm) - fast, efficient, low cost</td>
                    <td className="border border-gray-300 px-4 py-3">Oxygen (3mm+), Air (thin)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Stainless Steel</td>
                    <td className="border border-gray-300 px-4 py-3">0.5-12mm</td>
                    <td className="border border-gray-300 px-4 py-3">20-40%</td>
                    <td className="border border-gray-300 px-4 py-3">Fiber laser - nitrogen assist required (higher cost)</td>
                    <td className="border border-gray-300 px-4 py-3">Nitrogen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Aluminum</td>
                    <td className="border border-gray-300 px-4 py-3">1-15mm</td>
                    <td className="border border-gray-300 px-4 py-3">10-30%</td>
                    <td className="border border-gray-300 px-4 py-3">Fiber 6kW+ (reflective, needs high power)</td>
                    <td className="border border-gray-300 px-4 py-3">Nitrogen</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Copper/Brass</td>
                    <td className="border border-gray-300 px-4 py-3">0.5-8mm</td>
                    <td className="border border-gray-300 px-4 py-3">5-15%</td>
                    <td className="border border-gray-300 px-4 py-3">Fiber 6kW+ (highly reflective)</td>
                    <td className="border border-gray-300 px-4 py-3">Nitrogen</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Acrylic/PMMA</td>
                    <td className="border border-gray-300 px-4 py-3">3-25mm</td>
                    <td className="border border-gray-300 px-4 py-3">Varies</td>
                    <td className="border border-gray-300 px-4 py-3">CO2 laser (10600nm) - better absorption for non-metals</td>
                    <td className="border border-gray-300 px-4 py-3">Air</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Wood/MDF</td>
                    <td className="border border-gray-300 px-4 py-3">3-30mm</td>
                    <td className="border border-gray-300 px-4 py-3">Varies</td>
                    <td className="border border-gray-300 px-4 py-3">CO2 laser - excellent for organic materials</td>
                    <td className="border border-gray-300 px-4 py-3">Air</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>Decision Rule:</strong> If 70%+ of your work is metal (steel/stainless/aluminum), choose fiber laser. If 50%+ is non-metal (acrylic, wood, leather), choose CO2. Mixed work requires two machines or hybrid system (rare, expensive). For detailed comparison, see our <Link href="/guides/co2-vs-fiber-laser" className="text-blue-600 hover:text-blue-800 font-medium">CO2 vs Fiber Laser Guide</Link>.
            </p>

            {/* Visual Decision Flow */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Material Selection Flowchart</h4>
              <div className="flex justify-center items-center">
                <svg width="600" height="400" className="max-w-full h-auto">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="#3b82f6" />
                    </marker>
                  </defs>
                  
                  {/* Start */}
                  <rect x="250" y="20" width="100" height="40" rx="5" fill="#3b82f6" />
                  <text x="300" y="45" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Start</text>
                  
                  {/* Decision */}
                  <polygon points="300,80 280,120 320,120" fill="#fbbf24" />
                  <text x="300" y="110" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">Primary Material?</text>
                  
                  {/* Metals path */}
                  <rect x="140" y="140" width="100" height="50" rx="5" fill="#10b981" />
                  <text x="190" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">70%+ Metals</text>
                  <text x="190" y="182" textAnchor="middle" fill="white" fontSize="11">→ Fiber Laser</text>
                  
                  {/* Non-metals path */}
                  <rect x="360" y="140" width="100" height="50" rx="5" fill="#f59e0b" />
                  <text x="410" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">50%+ Non-Metals</text>
                  <text x="410" y="182" textAnchor="middle" fill="white" fontSize="11">→ CO2 Laser</text>
                  
                  {/* Mixed path */}
                  <rect x="250" y="220" width="100" height="50" rx="5" fill="#ef4444" />
                  <text x="300" y="245" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Mixed Materials</text>
                  <text x="300" y="262" textAnchor="middle" fill="white" fontSize="11">→ Two Machines</text>
                  
                  {/* Arrows */}
                  <line x1="300" y1="60" x2="300" y2="80" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="280" y1="120" x2="190" y2="140" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="320" y1="120" x2="410" y2="140" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrowhead)" />
                  <line x1="300" y1="120" x2="300" y2="220" stroke="#ef4444" strokeWidth="2" markerEnd="url(#arrowhead)" />
                </svg>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Production Volume & Throughput Requirements</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Calculate required throughput to determine power and automation needs. Underestimating by 30% is common—factor in growth, reject rates, and setup time. Use our <Link href="/tools/cutting-time-calculator" className="text-blue-600 hover:text-blue-800 font-medium">Cutting Time Calculator</Link> for accurate calculations.
            </p>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Throughput Calculation Example</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Scenario:</strong> Sheet metal fabricator, 10,000 parts/month, average 300×300mm brackets, 3mm carbon steel</p>
                <p><strong>Cutting time per part (perimeter ~1.2m):</strong></p>
                <ul className="ml-6 space-y-2">
                  <li>• <strong>3kW fiber:</strong> 90 seconds/part = 25 hours/1000 parts</li>
                  <li>• <strong>6kW fiber:</strong> 45 seconds/part = 12.5 hours/1000 parts</li>
                  <li>• <strong>12kW fiber:</strong> 30 seconds/part = 8.3 hours/1000 parts</li>
                </ul>
                <p className="mt-4"><strong>Monthly cutting time (10,000 parts):</strong></p>
                <ul className="ml-6 space-y-2">
                  <li>• <strong>3kW:</strong> 250 hours (requires 1.5 shifts at 85% utilization)</li>
                  <li>• <strong>6kW:</strong> 125 hours (single shift at 70% utilization)</li>
                  <li>• <strong>12kW:</strong> 83 hours (single shift at 45% utilization - overkill)</li>
                </ul>
                <p className="mt-4 font-semibold text-blue-900 bg-blue-50 p-3 rounded">
                  <strong>Optimal choice:</strong> 6kW fiber provides headroom for growth, single-shift operation, and acceptable ROI. 3kW requires multi-shift (labor cost +$40k/year). 12kW wastes $80k+ in capital.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">Budget & Financial Planning</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Laser equipment costs extend far beyond the purchase price. Plan for total 5-year cost of ownership. See our <Link href="/guides/power-selection-guide" className="text-blue-600 hover:text-blue-800 font-medium">Power Selection Guide</Link> for detailed power-level pricing.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost Category</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Initial</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Annual (Years 1-5)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">5-Year Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Equipment Purchase</td>
                    <td className="border border-gray-300 px-4 py-3">$150,000</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">$150,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Installation & Training</td>
                    <td className="border border-gray-300 px-4 py-3">$15,000</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">$15,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Facility Prep (electrical, ventilation)</td>
                    <td className="border border-gray-300 px-4 py-3">$10,000-25,000</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">$17,500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Operating Costs (gas, power, consumables)</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">$30,000-50,000</td>
                    <td className="border border-gray-300 px-4 py-3">$200,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Maintenance & Repairs</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">$8,000-15,000</td>
                    <td className="border border-gray-300 px-4 py-3">$57,500</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Labor (operator + programmer)</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">$60,000-80,000</td>
                    <td className="border border-gray-300 px-4 py-3">$350,000</td>
                  </tr>
                  <tr className="font-semibold bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">5-Year TCO</td>
                    <td className="border border-gray-300 px-4 py-3">$182,500</td>
                    <td className="border border-gray-300 px-4 py-3">$123,000/year</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">$790,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              <strong>Key Insight:</strong> Equipment purchase represents only 19% of 5-year TCO. Operating costs (25%) and labor (44%) dominate. A $50k premium for higher efficiency (lower gas consumption, faster cutting) pays back in 12-18 months through reduced operating costs.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-8">ROI Calculation Framework</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Calculate return on investment using this formula to validate equipment purchase decisions:
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">ROI Formula</h4>
              <div className="space-y-4 text-sm text-gray-700">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-mono text-base mb-2 font-semibold">ROI = (Net Savings - Initial Investment) / Initial Investment × 100%</p>
                  <p className="text-xs text-gray-600 mt-2">Net Savings = Annual Revenue Increase + Operating Cost Savings - Annual Operating Costs</p>
                </div>
                
                <div className="mt-4">
                  <p className="font-semibold mb-2">Example Calculation:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Initial Investment: $180,000</li>
                    <li>• Annual Revenue Increase (faster production): $85,000</li>
                    <li>• Operating Cost Savings (efficiency): $32,000/year</li>
                    <li>• Annual Operating Costs: $45,000</li>
                    <li>• Net Savings Year 1: $85,000 + $32,000 - $45,000 = $72,000</li>
                    <li>• ROI Year 1: ($72,000 - $180,000) / $180,000 = -60% (payback period)</li>
                    <li>• ROI Year 2: (Cumulative $144,000) = -20%</li>
                    <li>• ROI Year 3: (Cumulative $216,000) = +20%</li>
                  </ul>
                  <p className="mt-3 font-semibold text-blue-900 bg-white p-3 rounded border border-blue-200">
                    Payback Period: 2.5 years | 5-Year ROI: 100%+
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Step 1: Define Requirements */}
          <section id="requirements" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 1: Define Your Requirements</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Material Considerations</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>What materials will you cut? (metals, non-metals, or both)</li>
                    <li>Material thickness range required</li>
                    <li>Special material properties (reflective, brittle, etc.)</li>
                    <li>Surface finish requirements</li>
                    <li>Edge quality standards needed</li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/guides/material-thickness-parameters" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      → Material Thickness Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Production Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Daily/monthly production volume</li>
                    <li>Maximum part size needed</li>
                    <li>Required cutting speed and quality</li>
                    <li>Single or multi-shift operation</li>
                    <li>Growth projections</li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/guides/cutting-speed-chart" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      → Cutting Speed Chart
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card variant="bordered" className="mb-6">
              <CardHeader>
                <CardTitle>Budget Constraints</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                  <li>Initial investment budget</li>
                  <li>Operating cost considerations</li>
                  <li>Maintenance and consumables budget</li>
                  <li>ROI expectations and timeline</li>
                  <li>Financing options available</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Step 2: Key Specifications */}
          <section id="specifications" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 2: Key Specifications to Evaluate</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Laser Power</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Higher power enables faster cutting and thicker materials. Common ranges: 1-3kW (thin materials), 
                  4-6kW (medium), 8-12kW+ (thick materials and high-speed production). For detailed power guidance, see our <Link href="/guides/power-selection-guide" className="text-blue-600 hover:text-blue-800 font-medium">Power Selection Guide</Link> and <Link href="/guides/power-3k-6k-12k" className="text-blue-600 hover:text-blue-800 font-medium">3kW vs 6kW vs 12kW Comparison</Link>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Work Area Size</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Must accommodate your largest parts plus spacing. Common sizes: 1m×1m (small), 
                  2m×3m (medium), 3m×6m+ (large format). Consider material utilization. See our <Link href="/guides/work-area-size-comparison" className="text-blue-600 hover:text-blue-800 font-medium">Work Area Size Comparison Guide</Link>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Positioning Accuracy</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Critical for precision work. Typical ranges: ±0.05mm (standard), ±0.03mm (precision), 
                  ±0.01mm (ultra-precision). Match to your quality requirements. See <Link href="/guides/precision-factors-comparison" className="text-blue-600 hover:text-blue-800 font-medium">Precision Factors Comparison</Link>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Control System</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Affects ease of use and capabilities. Popular options: Cypcut, Ruida, Beckhoff, Siemens. 
                  Consider software compatibility and learning curve. See our <Link href="/guides/control-systems-comparison" className="text-blue-600 hover:text-blue-800 font-medium">Control Systems Comparison Guide</Link>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Beam Quality (M² Value)</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Beam quality directly impacts cutting precision and edge quality. M² value measures how close the laser beam is to an ideal Gaussian beam (M² = 1 is perfect). See our <Link href="/guides/beam-quality-guide" className="text-blue-600 hover:text-blue-800 font-medium">Beam Quality Guide</Link> for detailed explanation.
                </p>
                
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">M² Value</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Beam Quality</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Application</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Focus Spot Size</th>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cutting Speed Reference</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Reference cutting speeds for common materials (fiber laser, optimal conditions). For comprehensive speed data, see <Link href="/guides/cutting-speed-chart" className="text-blue-600 hover:text-blue-800 font-medium">Cutting Speed Chart</Link>.
                </p>
                
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Material</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Thickness</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">3kW Speed</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">6kW Speed</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">12kW Speed</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={3}>Carbon Steel</td>
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
                        <td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={2}>Stainless Steel</td>
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
                        <td className="border border-gray-300 px-4 py-2 font-medium" rowSpan={2}>Aluminum</td>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Assist Gas Selection Guide</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Assist gas selection significantly impacts cut quality, speed, and operating costs. See our comprehensive <Link href="/guides/assist-gas-chart" className="text-blue-600 hover:text-blue-800 font-medium">Assist Gas Chart</Link> for detailed information.
                </p>
                
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full border-collapse border border-gray-300 text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Gas Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Material</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Cost/m³</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Edge Quality</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Speed Impact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Oxygen</td>
                        <td className="border border-gray-300 px-4 py-2">Carbon Steel (3mm+)</td>
                        <td className="border border-gray-300 px-4 py-2">$0.08-0.15</td>
                        <td className="border border-gray-300 px-4 py-2">Oxidized edge, good</td>
                        <td className="border border-gray-300 px-4 py-2">+30-50% faster</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Nitrogen</td>
                        <td className="border border-gray-300 px-4 py-2">Stainless Steel, Aluminum</td>
                        <td className="border border-gray-300 px-4 py-2">$0.12-0.25</td>
                        <td className="border border-gray-300 px-4 py-2">Clean, oxide-free</td>
                        <td className="border border-gray-300 px-4 py-2">Base speed</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2 font-medium">Compressed Air</td>
                        <td className="border border-gray-300 px-4 py-2">Thin Carbon Steel</td>
                        <td className="border border-gray-300 px-4 py-2">$0.02-0.05</td>
                        <td className="border border-gray-300 px-4 py-2">Slightly oxidized</td>
                        <td className="border border-gray-300 px-4 py-2">+15-25% faster</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2 font-medium">Argon</td>
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

          {/* Step 3: Vendor Evaluation */}
          <section id="vendor-evaluation" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 3: Vendor Evaluation</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Use this scoring matrix to objectively compare vendors. Rate each criterion from 1-10, then weight by importance.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Evaluation Criterion</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Weight</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Score (1-10)</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Evaluation Points</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Reputation & Experience</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">15%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-xs">Years in business, industry awards, customer testimonials</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Technical Support</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">20%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-xs">Response time (target: &lt;4hr), on-site availability, remote support</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Parts & Service Network</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">15%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-xs">Parts lead time, local warehouse, service centers</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Training & Documentation</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">10%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-xs">Initial training hours, materials quality, ongoing support</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Warranty Coverage</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">10%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-xs">Coverage period, included components, service terms</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Equipment Performance</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">15%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-xs">Speed, accuracy, edge quality vs. specifications</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-medium">Customization Options</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">5%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-xs">Ability to modify for specific needs, upgrade paths</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium">Total Cost of Ownership</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">10%</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-xs">5-year TCO including operating costs, maintenance</td>
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
          <section id="decision-trees" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Decision Trees: Quick Selection Guides</h2>
            
            <div className="space-y-6">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Laser Type Decision Tree</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-gray-700">
                    <div className="flex items-start">
                      <span className="font-bold mr-2">Start:</span>
                      <span>What is your primary material?</span>
                    </div>
                    <div className="ml-6 space-y-3">
                      <div className="flex items-start">
                        <span className="font-bold mr-2">→</span>
                        <div>
                          <strong>Metals (≥70%):</strong> Choose <strong>Fiber Laser</strong> (1064nm wavelength)
                          <div className="ml-4 mt-1 text-xs text-gray-600">
                            • Carbon Steel: Excellent cutting speed, oxygen assist<br/>
                            • Stainless Steel: High quality, nitrogen assist required<br/>
                            • Aluminum: 6kW+ recommended for reflective surface<br/>
                            • Copper/Brass: Fiber laser optimal, may require higher power
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold mr-2">→</span>
                        <div>
                          <strong>Non-Metals (≥50%):</strong> Choose <strong>CO2 Laser</strong> (10600nm wavelength)
                          <div className="ml-4 mt-1 text-xs text-gray-600">
                            • Acrylic/PMMA: Excellent edge quality<br/>
                            • Wood/MDF: Fast, clean cutting<br/>
                            • Leather/Fabric: Precise, minimal charring<br/>
                            • Paper/Cardboard: High-speed processing
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold mr-2">→</span>
                        <span><strong>Mixed (40-60% each):</strong> Consider two machines or hybrid system (rare, expensive)</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Link href="/guides/co2-vs-fiber-laser" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      → Detailed CO2 vs Fiber Comparison
                    </Link>
                  </div>
                </CardContent>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>Power Selection Decision Tree</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm text-gray-700">
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
                    <div className="flex items-start mt-6">
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
                    <div className="flex items-start mt-6">
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
                  <div className="mt-4">
                    <Link href="/guides/power-selection-guide" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      → Detailed Power Selection Guide
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Maintenance Cost Analysis */}
          <section id="cost-analysis" className="mb-12 scroll-mt-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintenance Cost Analysis</h2>
            
            <p className="text-gray-700 mb-4 leading-relaxed">
              Preventive maintenance costs significantly impact total cost of ownership. Plan for these recurring expenses. See our <Link href="/guides/maintenance-schedule" className="text-blue-600 hover:text-blue-800 font-medium">Maintenance Schedule Guide</Link> for detailed maintenance planning.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Maintenance Item</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Frequency</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Cost per Service</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Annual Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Routine Inspection</td>
                    <td className="border border-gray-300 px-4 py-3">Monthly</td>
                    <td className="border border-gray-300 px-4 py-3">$200-400</td>
                    <td className="border border-gray-300 px-4 py-3">$2,400-4,800</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Optics Cleaning & Alignment</td>
                    <td className="border border-gray-300 px-4 py-3">Quarterly</td>
                    <td className="border border-gray-300 px-4 py-3">$500-800</td>
                    <td className="border border-gray-300 px-4 py-3">$2,000-3,200</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Lens Replacement (CO2)</td>
                    <td className="border border-gray-300 px-4 py-3">6-12 months</td>
                    <td className="border border-gray-300 px-4 py-3">$800-1,500</td>
                    <td className="border border-gray-300 px-4 py-3">$800-3,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Focusing Lens (Fiber)</td>
                    <td className="border border-gray-300 px-4 py-3">12-24 months</td>
                    <td className="border border-gray-300 px-4 py-3">$400-800</td>
                    <td className="border border-gray-300 px-4 py-3">$200-800</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Laser Source Service (CO2 Tube)</td>
                    <td className="border border-gray-300 px-4 py-3">2,000-8,000 hours</td>
                    <td className="border border-gray-300 px-4 py-3">$3,000-8,000</td>
                    <td className="border border-gray-300 px-4 py-3">$3,000-8,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Nozzle & Consumables</td>
                    <td className="border border-gray-300 px-4 py-3">As needed</td>
                    <td className="border border-gray-300 px-4 py-3">$50-200</td>
                    <td className="border border-gray-300 px-4 py-3">$1,500-3,000</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Motion System Service</td>
                    <td className="border border-gray-300 px-4 py-3">Annually</td>
                    <td className="border border-gray-300 px-4 py-3">$1,500-3,000</td>
                    <td className="border border-gray-300 px-4 py-3">$1,500-3,000</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Electrical System Check</td>
                    <td className="border border-gray-300 px-4 py-3">Annually</td>
                    <td className="border border-gray-300 px-4 py-3">$800-1,500</td>
                    <td className="border border-gray-300 px-4 py-3">$800-1,500</td>
                  </tr>
                  <tr className="font-semibold bg-blue-50">
                    <td className="border border-gray-300 px-4 py-3">Total Annual Maintenance</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3">-</td>
                    <td className="border border-gray-300 px-4 py-3 text-blue-900">$12,200-27,300</td>
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

          {/* Vendor Shortlist & System Integration */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Step 4: Vendor Shortlist & System Integration</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Beyond specifications, evaluate the vendor's ability to integrate control systems, optimize cutting parameters,
              and provide upgrade paths. For example, manufacturers like
              <a href="https://opmtlaser.com/technology/adaptive-cutting-control" className="text-blue-600 hover:text-blue-800 font-medium ml-1" target="_blank" rel="noopener"> OPMT Laser</a>
              offer adaptive cutting control and modular power upgrades that help future-proof your investment and reduce gas consumption by 15-25% in real production.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Request parameter libraries for your materials</li>
              <li>Confirm CNC compatibility (Cypcut, Beckhoff, Siemens) and post-processor support</li>
              <li>Check upgrade paths: power modules, automation, assist gas systems</li>
              <li>Evaluate software features: nesting optimization, material database, reporting</li>
            </ul>
            <div className="mt-4">
              <Link href="/guides/control-systems-comparison" className="text-blue-600 hover:text-blue-800 font-medium">
                → Control Systems Comparison Guide
              </Link>
            </div>
          </section>

          {/* Action Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Selection Checklist</h2>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Pre-Purchase Tasks</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span>Completed material analysis (12 months data)</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span>Calculated production volume requirements</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span>Determined maximum material thickness</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span>Established budget (initial + 5-year TCO)</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span>Verified facility electrical capacity</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Vendor Evaluation Tasks</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span>Shortlisted 3-5 vendors</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span>Completed vendor scoring matrix</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span>Requested test cuts with actual materials</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span>Verified service network and parts availability</span>
                    </li>
                    <li className="flex items-start">
                      <input type="checkbox" className="mt-1 mr-2" />
                      <span>Reviewed warranty terms and conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pro Tip */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-12">
            <h3 className="font-semibold text-blue-900 mb-2">Pro Tip</h3>
            <p className="text-blue-800">
              Request a test cut with your actual materials before finalizing your purchase. 
              This reveals real-world performance and helps validate specifications. Most reputable vendors offer this service free of charge.
            </p>
          </div>

          {/* Related Tools & Resources */}
          <section className="not-prose mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Use Our Selection Tools</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link href="/tools/laser-type-wizard">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Laser Type Wizard</h3>
                    <p className="text-sm text-gray-600">Get personalized laser type recommendations based on your materials</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/equipment">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Equipment Database</h3>
                    <p className="text-sm text-gray-600">Browse and filter laser cutting machines by specifications</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/comparison">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Comparison Tool</h3>
                    <p className="text-sm text-gray-600">Compare multiple machines side-by-side</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/guides/power-selection-guide">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Power Selection Guide</h3>
                    <p className="text-sm text-gray-600">Detailed guide to choosing laser power levels</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/guides/co2-vs-fiber-laser">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">CO2 vs Fiber Comparison</h3>
                    <p className="text-sm text-gray-600">Comprehensive technology comparison</p>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/tools/cutting-time-calculator">
                <Card variant="bordered" className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">Cutting Time Calculator</h3>
                    <p className="text-sm text-gray-600">Calculate cutting times for your parts</p>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
