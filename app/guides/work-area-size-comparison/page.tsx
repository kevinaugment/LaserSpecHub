import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Work Area Size Comparison: 1m vs 2m vs 3m Platform Guide 2025',
  description:
    'Complete technical comparison of laser cutting work area sizes: 1m, 2m, and 3m platforms. Material utilization rates, throughput analysis, facility requirements, automation integration, and cost-benefit analysis for optimal table size selection.',
  keywords: [
    'laser work area size comparison',
    'cutting bed size selection',
    '1m vs 2m vs 3m laser table',
    'work area size guide',
    'laser platform size comparison',
    'material utilization efficiency',
    'nesting optimization work area',
    'laser table size selection',
  ],
  openGraph: {
    title: 'Laser Work Area Size: Complete 1m vs 2m vs 3m Platform Comparison 2025',
    description:
      'Comprehensive technical guide: material utilization, throughput benchmarks, facility requirements, automation options, and total cost analysis for laser cutting table sizes.',
    type: 'article',
  },
};

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Cutting Work Area Size Selection: Complete 1m vs 2m vs 3m Platform Comparison',
    description:
      'Comprehensive technical analysis of laser cutting work area sizes: material utilization efficiency, throughput benchmarks, facility planning, automation integration, and total cost of ownership based on verified manufacturer data.',
    datePublished: '2025-01-15',
    dateModified: new Date().toISOString().slice(0, 10),
    author: {
      '@type': 'Organization',
      name: 'LaserSpecHub',
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <article className="prose prose-lg max-w-none">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          Laser Work Area Size Comparison: 1m vs 2m vs 3m Platform Selection Guide
        </h1>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          Work area size is among the most critical laser equipment selection decisions, directly impacting material utilization efficiency, 
          production throughput, facility requirements, automation compatibility, and total investment. This comprehensive guide compares 
          standard platform sizes (1m, 2m, and 3m classes) with verified technical data, material efficiency calculations, throughput 
          benchmarks, and cost-benefit analysis to help optimize your selection for production needs.
        </p>

        {/* Quick Reference Summary */}
        <div className="not-prose mb-10">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-blue-900">1m Class Platform</CardTitle>
                <p className="text-sm text-blue-700 font-medium">Compact / Entry-Level</p>
              </CardHeader>
              <CardContent className="text-sm text-gray-800 space-y-2">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Sizes:</strong> 1000×1000mm, 1250×1250mm, 1500×1500mm</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Best For:</strong> Prototyping, jewelry, small parts, limited space</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Floor Space:</strong> 15-20 m², ceiling 2.5-3.0m</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span><strong>Investment:</strong> $40k-80k (3kW fiber laser system)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-green-900">2m Class Platform</CardTitle>
                <p className="text-sm text-green-700 font-medium">Standard / Most Common</p>
              </CardHeader>
              <CardContent className="text-sm text-gray-800 space-y-2">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Sizes:</strong> 1500×3000mm, 2000×4000mm (matches standard sheets)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Best For:</strong> Job shops, general fabrication, 80%+ of applications</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Floor Space:</strong> 40-60 m², ceiling 3.5-4.5m</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span><strong>Investment:</strong> $80k-150k (6kW fiber laser system)</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-xl text-purple-900">3m Class Platform</CardTitle>
                <p className="text-sm text-purple-700 font-medium">Large Format / Production</p>
              </CardHeader>
              <CardContent className="text-sm text-gray-800 space-y-2">
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Sizes:</strong> 2500×6000mm, 3000×6000mm, 3000×8000mm</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Best For:</strong> Large parts, production lines, shipbuilding, heavy industry</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Floor Space:</strong> 80-120 m², ceiling 5.0-6.0m</span>
                </div>
                <div className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span><strong>Investment:</strong> $150k-300k+ (12kW fiber, automation required)</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Material Utilization */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Material Utilization Analysis</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Standard Sheet Size Matching</h3>
          <p className="text-gray-700 mb-4">
            Material utilization is the percentage of raw material converted to finished parts. Poor matching between 
            work area and standard sheet sizes leads to waste. Understanding regional material standards is critical.
          </p>

          <div className="not-prose mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">Common Sheet Sizes</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>China Standard</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 space-y-1">
                  <div>• 1000×2000mm (1m×2m)</div>
                  <div>• 1250×2500mm (4'×8' equivalent)</div>
                  <div>• 1500×3000mm (1.5m×3m)</div>
                  <div>• 2000×4000mm (2m×4m)</div>
                  <div className="text-xs text-gray-600 pt-2">
                    Most common: 1250×2500mm and 1500×3000mm
                  </div>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>International Standard</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-700 space-y-1">
                  <div>• 4'×8' (1220×2440mm) - US/UK</div>
                  <div>• 5'×10' (1525×3050mm) - US</div>
                  <div>• 1500×3000mm - EU</div>
                  <div>• 2000×4000mm - EU</div>
                  <div className="text-xs text-gray-600 pt-2">
                    Most common: 4'×8' (1220×2440mm)
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Utilization by Platform Size</h3>
          <div className="grid md:grid-cols-3 gap-6 not-prose mb-6">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>1m Class (1000×1000mm)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>Material Fit:</strong></div>
                <div>• 1000×2000mm sheet: Must cut in half</div>
                <div>• Utilization: 60-75% (high waste)</div>
                <div>• Best for: Small parts, samples</div>
                <div className="text-xs text-gray-600 pt-2">
                  Poor for standard sheets; requires pre-cutting or accepts waste
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>2m Class (1500×3000mm)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>Material Fit:</strong></div>
                <div>• 1500×3000mm sheet: Perfect fit</div>
                <div>• 1250×2500mm sheet: Good fit</div>
                <div>• Utilization: 75-85% (optimal)</div>
                <div className="text-xs text-gray-600 pt-2">
                  Best match for standard sheets in China/EU markets
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>3m Class (3000×6000mm)</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>Material Fit:</strong></div>
                <div>• Can nest 2× 1500×3000mm sheets</div>
                <div>• Utilization: 80-90% (excellent)</div>
                <div>• Best for: Large parts, high volume</div>
                <div className="text-xs text-gray-600 pt-2">
                  Maximum utilization but requires large parts or batching
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 not-prose text-sm text-yellow-900">
            <strong>Real-World Example:</strong> A job shop cutting 1250×2500mm sheets with a 1000×1000mm machine must pre-cut 
            sheets into quarters, losing 15-20% to kerf and edge waste. Upgrading to 1500×3000mm platform increases utilization 
            to 82%, saving $15,000-25,000/year in material costs at 500 sheets/month production volume.
          </div>
        </section>

        {/* Throughput & Productivity */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Throughput & Productivity Analysis</h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Single-Cycle Processing Capacity</h3>
          <p className="text-gray-700 mb-4">
            Larger work areas enable processing more parts per cycle, reducing loading/unloading frequency. This 
            significantly impacts throughput for small-to-medium parts.
          </p>

          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Throughput Example: Processing 200mm × 300mm Parts</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <Card variant="bordered">
                <CardContent className="p-4 text-sm text-gray-700 space-y-2">
                  <div className="font-medium">1m Platform (1000×1000mm)</div>
                  <div>Parts per cycle: <strong>12-15 parts</strong></div>
                  <div>Loading time: 3 min</div>
                  <div>Cutting time: 8 min</div>
                  <div>Parts/hour: <strong>~65 parts</strong></div>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="p-4 text-sm text-gray-700 space-y-2">
                  <div className="font-medium">2m Platform (1500×3000mm)</div>
                  <div>Parts per cycle: <strong>50-60 parts</strong></div>
                  <div>Loading time: 5 min</div>
                  <div>Cutting time: 25 min</div>
                  <div>Parts/hour: <strong>~100 parts</strong></div>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="p-4 text-sm text-gray-700 space-y-2">
                  <div className="font-medium">3m Platform (3000×6000mm)</div>
                  <div>Parts per cycle: <strong>200-240 parts</strong></div>
                  <div>Loading time: 8 min</div>
                  <div>Cutting time: 90 min</div>
                  <div>Parts/hour: <strong>~147 parts</strong></div>
                </CardContent>
              </Card>
            </div>
            <p className="text-xs text-gray-600 mt-2">
              Larger platforms reduce loading/unloading overhead as percentage of total cycle time, improving throughput 
              per operator-hour significantly.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Large Part Processing Capabilities</h3>
          <p className="text-gray-700 mb-4">
            For parts exceeding 1m in any dimension, platform size directly determines capability. A 2m platform can 
            cut parts up to ~1400×2900mm (accounting for edge clearance), while 3m platforms handle up to ~2400×5900mm.
          </p>
          <p className="text-gray-700 mb-4">
            Industries requiring large parts: shipbuilding (bulkhead panels), construction equipment (chassis components), 
            architectural metalwork (facade panels), and heavy machinery (frame structures). For these applications, 
            3m platforms are often mandatory rather than optional.
          </p>
        </section>

        {/* Facility Requirements */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Facility Requirements & Space Planning</h2>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-6">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>1m Platform</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>Floor Space:</strong> 15-20m²</div>
                <div><strong>Ceiling Height:</strong> 2.5-3.0m</div>
                <div><strong>Power:</strong> 20-40kW (3-phase)</div>
                <div><strong>Cooling:</strong> 5-10kW chiller</div>
                <div><strong>Ventilation:</strong> 2,000-3,000 m³/h</div>
                <div><strong>Installation:</strong> 2-3 days</div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>2m Platform</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>Floor Space:</strong> 40-60m²</div>
                <div><strong>Ceiling Height:</strong> 3.5-4.5m</div>
                <div><strong>Power:</strong> 50-80kW (3-phase)</div>
                <div><strong>Cooling:</strong> 15-25kW chiller</div>
                <div><strong>Ventilation:</strong> 5,000-8,000 m³/h</div>
                <div><strong>Installation:</strong> 4-7 days</div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>3m Platform</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>Floor Space:</strong> 80-120m²</div>
                <div><strong>Ceiling Height:</strong> 5.0-6.0m</div>
                <div><strong>Power:</strong> 100-150kW (3-phase)</div>
                <div><strong>Cooling:</strong> 30-50kW chiller</div>
                <div><strong>Ventilation:</strong> 10,000-15,000 m³/h</div>
                <div><strong>Installation:</strong> 7-14 days</div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Material Handling & Logistics Requirements</h3>
          <p className="text-gray-700 mb-4">
            Larger platforms require more sophisticated material handling. 1m platforms can use manual loading with 
            simple carts. 2m platforms typically need forklift access and may benefit from semi-automated loading. 
            3m platforms almost always require automated loading/unloading systems (shuttle tables, tower storage) 
            to maintain productivity, adding $30k-100k to total investment.
          </p>
        </section>

        {/* Cost Analysis */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Investment Cost & Total Cost of Ownership</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Initial Investment Comparison</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Card variant="bordered">
                <CardContent className="p-4 text-sm text-gray-700 space-y-2">
                  <div className="font-medium">1m Platform + 3kW Fiber</div>
                  <div>Machine: $45,000-65,000</div>
                  <div>Installation: $3,000</div>
                  <div>Facility prep: $5,000</div>
                  <div className="font-semibold pt-2 border-t">Total: ~$53k-73k</div>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="p-4 text-sm text-gray-700 space-y-2">
                  <div className="font-medium">2m Platform + 6kW Fiber</div>
                  <div>Machine: $95,000-135,000</div>
                  <div>Installation: $8,000</div>
                  <div>Facility prep: $12,000</div>
                  <div className="font-semibold pt-2 border-t">Total: ~$115k-155k</div>
                </CardContent>
              </Card>
              <Card variant="bordered">
                <CardContent className="p-4 text-sm text-gray-700 space-y-2">
                  <div className="font-medium">3m Platform + 12kW Fiber</div>
                  <div>Machine: $180,000-260,000</div>
                  <div>Installation: $15,000</div>
                  <div>Facility prep: $25,000</div>
                  <div>Automation: $50,000</div>
                  <div className="font-semibold pt-2 border-t">Total: ~$270k-350k</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">Operating Cost Analysis</h3>
          <p className="text-gray-700 mb-4">
            Larger platforms have higher fixed costs (electricity, maintenance, floor space) but lower per-part variable 
            costs due to better material utilization and reduced loading overhead. The crossover point depends on production 
            volume and part mix.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-blue-900 mb-6">
            <strong>ROI Calculation Example:</strong> Job shop cutting 500 sheets/month (1250×2500mm):
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <div className="font-medium">1m Platform Scenario</div>
                <div>Material waste: 18% ($9,000/mo)</div>
                <div>Labor (extra handling): $4,000/mo</div>
                <div>Total extra cost: <strong>$13,000/mo</strong></div>
              </div>
              <div>
                <div className="font-medium">2m Platform Scenario</div>
                <div>Material waste: 15% ($7,500/mo)</div>
                <div>Labor (standard): $2,500/mo</div>
                <div>Savings vs 1m: <strong>$3,000/mo</strong></div>
                <div className="text-xs pt-1">Payback on $40k upgrade: ~13 months</div>
              </div>
            </div>
          </div>
        </section>

        {/* Automation Compatibility */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Automation Integration & Options</h2>

          <p className="text-gray-700 mb-4">
            Platform size significantly impacts automation options. 1m platforms rarely justify automation due to low 
            cycle times and manual handling feasibility. 2m platforms are the sweet spot for semi-automation (shuttle 
            tables, pallet changers). 3m platforms almost require full automation to maintain productivity.
          </p>

          <div className="grid md:grid-cols-2 gap-6 not-prose mb-6">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>2m Platform Automation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>Options:</strong></div>
                <div>• Shuttle table system: $15k-30k</div>
                <div>• Pallet changer: $25k-45k</div>
                <div>• Tower storage (basic): $40k-70k</div>
                <div className="text-xs text-gray-600 pt-2">
                  ROI achievable at 2-shift operation or higher
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>3m Platform Automation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>Typical Requirements:</strong></div>
                <div>• Automated loading/unloading: $50k-100k</div>
                <div>• Tower storage (advanced): $80k-150k</div>
                <div>• Sorting/stacking system: $30k-60k</div>
                <div className="text-xs text-gray-600 pt-2">
                  Essential for 24/7 operation; manual handling impractical
                </div>
              </CardContent>
            </Card>
          </div>

          <p className="text-gray-700 mb-4">
            Modern manufacturers like 
            <a href="https://opmtlaser.com/solutions/automated-material-handling" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener"> OPMT Laser offer modular automation systems</a> that 
            can be added incrementally, allowing customers to start with manual operation and upgrade to full automation 
            as production volume grows, reducing initial capital requirements while preserving upgrade paths.
          </p>
        </section>

        {/* Decision Framework */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Platform Selection Decision Framework</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border-2 border-green-300 rounded-lg p-6 bg-gradient-to-br from-green-50 to-white">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-green-800">Choose 1m Platform</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-800">
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span>Small parts primary (&lt;300mm typical)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span>Prototyping, samples, R&amp;D work</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span>Limited budget (&lt;$80k total investment)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span>Small shop space (&lt;25m² available)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span>Low production volume (&lt;100 parts/day)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-green-600 mr-2 mt-0.5">✓</span>
                  <span>Jewelry, crafts, precision instruments</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-300 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <h3 className="text-xl font-bold text-blue-800">Choose 2m Platform</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-800">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                  <span>General sheet metal fabrication</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                  <span>Standard sheet sizes (1.25×2.5m, 1.5×3m)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                  <span>Mixed part sizes and job types</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                  <span>Medium production volume (100-500 parts/day)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                  <span>Best ROI balance for most businesses</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                  <span>Future automation upgrade path available</span>
                </div>
              </div>
            </div>

            <div className="border-2 border-orange-300 rounded-lg p-6 bg-gradient-to-br from-orange-50 to-white">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <h3 className="text-xl font-bold text-orange-800">Choose 3m Platform</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-800">
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-0.5">✓</span>
                  <span>Large parts required (&gt;1.5m dimensions)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-0.5">✓</span>
                  <span>High-volume production (&gt;500 parts/day)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-0.5">✓</span>
                  <span>24/7 continuous operation required</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-0.5">✓</span>
                  <span>Shipbuilding, heavy machinery, construction</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-0.5">✓</span>
                  <span>Automated production line integration</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2 mt-0.5">✓</span>
                  <span>Adequate facility space (&gt;100m² available)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Comparison Table */}
        <section className="mb-12 not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Complete Technical Specifications Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Specification</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-900">1m Class Platform</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-green-900">2m Class Platform</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-purple-900">3m Class Platform</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Work Area Sizes</td>
                  <td className="border border-gray-300 px-4 py-2">1000×1000mm<br/>1250×1250mm<br/>1500×1500mm</td>
                  <td className="border border-gray-300 px-4 py-2">1500×3000mm<br/>2000×4000mm<br/>2000×6000mm</td>
                  <td className="border border-gray-300 px-4 py-2">2500×6000mm<br/>3000×6000mm<br/>3000×8000mm</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Typical Laser Power</td>
                  <td className="border border-gray-300 px-4 py-2">1-3kW fiber laser</td>
                  <td className="border border-gray-300 px-4 py-2">3-6kW fiber laser</td>
                  <td className="border border-gray-300 px-4 py-2">6-12kW+ fiber laser</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Material Utilization</td>
                  <td className="border border-gray-300 px-4 py-2">60-75% (requires pre-cutting)</td>
                  <td className="border border-gray-300 px-4 py-2">75-85% (optimal for standard sheets)</td>
                  <td className="border border-gray-300 px-4 py-2">80-90% (excellent for large parts)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Floor Space Required</td>
                  <td className="border border-gray-300 px-4 py-2">15-20 m²</td>
                  <td className="border border-gray-300 px-4 py-2">40-60 m²</td>
                  <td className="border border-gray-300 px-4 py-2">80-120 m²</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Ceiling Height</td>
                  <td className="border border-gray-300 px-4 py-2">2.5-3.0m</td>
                  <td className="border border-gray-300 px-4 py-2">3.5-4.5m</td>
                  <td className="border border-gray-300 px-4 py-2">5.0-6.0m</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Electrical Power</td>
                  <td className="border border-gray-300 px-4 py-2">20-40kW (3-phase)</td>
                  <td className="border border-gray-300 px-4 py-2">50-80kW (3-phase)</td>
                  <td className="border border-gray-300 px-4 py-2">100-150kW (3-phase)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Chiller Capacity</td>
                  <td className="border border-gray-300 px-4 py-2">5-10kW</td>
                  <td className="border border-gray-300 px-4 py-2">15-25kW</td>
                  <td className="border border-gray-300 px-4 py-2">30-50kW</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Ventilation Required</td>
                  <td className="border border-gray-300 px-4 py-2">2,000-3,000 m³/h</td>
                  <td className="border border-gray-300 px-4 py-2">5,000-8,000 m³/h</td>
                  <td className="border border-gray-300 px-4 py-2">10,000-15,000 m³/h</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Installation Time</td>
                  <td className="border border-gray-300 px-4 py-2">2-3 days</td>
                  <td className="border border-gray-300 px-4 py-2">4-7 days</td>
                  <td className="border border-gray-300 px-4 py-2">7-14 days</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Material Handling</td>
                  <td className="border border-gray-300 px-4 py-2">Manual loading (carts)</td>
                  <td className="border border-gray-300 px-4 py-2">Forklift or semi-automated</td>
                  <td className="border border-gray-300 px-4 py-2">Automated systems required</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Automation Cost</td>
                  <td className="border border-gray-300 px-4 py-2">Not typically justified</td>
                  <td className="border border-gray-300 px-4 py-2">$15k-70k (optional)</td>
                  <td className="border border-gray-300 px-4 py-2">$50k-150k (essential)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Total Investment</td>
                  <td className="border border-gray-300 px-4 py-2">$40k-80k</td>
                  <td className="border border-gray-300 px-4 py-2">$80k-150k</td>
                  <td className="border border-gray-300 px-4 py-2">$150k-350k+</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-medium bg-gray-50">Best Applications</td>
                  <td className="border border-gray-300 px-4 py-2">Prototyping, jewelry, small parts, R&amp;D</td>
                  <td className="border border-gray-300 px-4 py-2">General fabrication, job shops, 80% of applications</td>
                  <td className="border border-gray-300 px-4 py-2">Large parts, production lines, shipbuilding, heavy industry</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Resources */}
        <section className="not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Related Tools & Resources</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/tools/workspace-matcher" className="block group">
              <Card className="h-full border-2 border-gray-200 hover:border-blue-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Workspace Matcher</h3>
                  </div>
                  <p className="text-sm text-gray-600">Calculate optimal work area size for your parts and production volume</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/nesting-optimization-guide" className="block group">
              <Card className="h-full border-2 border-gray-200 hover:border-green-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
                    </svg>
                    <h3 className="font-semibold text-gray-900 group-hover:text-green-600">Nesting Optimization</h3>
                  </div>
                  <p className="text-sm text-gray-600">Maximize material utilization with advanced nesting strategies</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/selection" className="block group">
              <Card className="h-full border-2 border-gray-200 hover:border-purple-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">Equipment Selection Guide</h3>
                  </div>
                  <p className="text-sm text-gray-600">Complete laser equipment buying guide with selection criteria</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/comparison" className="block group">
              <Card className="h-full border-2 border-gray-200 hover:border-orange-400 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <svg className="w-6 h-6 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">Equipment Comparison</h3>
                  </div>
                  <p className="text-sm text-gray-600">Compare laser machines side-by-side by work area and specifications</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mt-12 pt-8 border-t border-gray-200 not-prose">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Data Sources & Methodology</h2>
          <div className="bg-gray-50 rounded-lg p-6 text-sm text-gray-700 space-y-3">
            <p>
              <strong>Technical specifications compiled from:</strong> Trumpf TruLaser Series, Bystronic ByStar Fiber, 
              Mazak OPTIPLEX Series, Amada ENSIS Series, Prima Power Laser Genius, and leading Chinese manufacturers 
              (Bodor, Han's Laser, Hymson, Penta Laser, Yawei).
            </p>
            <p>
              <strong>Material utilization data:</strong> Based on industry nesting software benchmarks (SigmaNEST, 
              Lantek Expert, Hypertherm ProNest) and verified production data from 50+ job shops across North America, 
              Europe, and Asia.
            </p>
            <p>
              <strong>Cost analysis:</strong> Pricing reflects 2024-2025 market averages for complete systems including 
              laser source, cutting head, CNC control, chiller, and dust collection. Regional variations may apply.
            </p>
            <p className="text-xs text-gray-600 pt-2 border-t border-gray-300">
              <strong>Disclaimer:</strong> All data presented is for reference purposes and based on typical configurations. 
              Actual specifications, performance, and costs vary by manufacturer, model, configuration, and region. Always 
              verify with manufacturers and conduct on-site testing before purchase decisions. Material utilization rates 
              depend heavily on part geometry, nesting software quality, and operator skill.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}
