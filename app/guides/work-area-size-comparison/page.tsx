import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Work Area Size: 1m vs 2m vs 3m Platform Comparison | LaserSpecHub',
  description:
    'Comprehensive guide to selecting laser cutting work area size: material utilization, throughput, facility requirements, automation compatibility and cost analysis for 1m, 2m and 3m platforms.',
  keywords: [
    'laser work area size',
    'cutting bed size',
    '1m vs 2m vs 3m laser',
    'work table selection',
    'laser platform size',
    'material utilization',
  ],
  openGraph: {
    title: 'Laser Work Area Size Selection: 1m vs 2m vs 3m Complete Guide',
    description:
      'Material utilization, throughput, facility and cost comparison across laser cutting platform sizes.',
    type: 'article',
  },
};

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser Cutting Work Area Size Selection: 1m, 2m, 3m Platform Comparison',
    description:
      'Detailed analysis of laser cutting work area sizes covering material efficiency, throughput, facility requirements and total cost.',
    datePublished: new Date().toISOString().slice(0, 10),
    dateModified: new Date().toISOString().slice(0, 10),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
      <StructuredData type="TechArticle" data={structuredData} />

      <article className="prose max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          激光设备工作区尺寸选择：1米、2米还是3米平台？
        </h1>
        <h2 className="text-2xl text-gray-700 mb-4">
          Laser Work Area Size Selection: 1m, 2m or 3m Platform?
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Work area size is one of the most critical equipment selection decisions, impacting material utilization, 
          throughput, facility requirements, and total investment. This guide compares the three standard platform 
          sizes to help you optimize for your production needs.
        </p>

        {/* Quick Overview */}
        <div className="grid md:grid-cols-3 gap-4 not-prose mb-10">
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>1m Class (Compact)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <div><strong>Typical:</strong> 1000×1000mm, 1250×1250mm</div>
              <div>• Small shop, prototyping, jewelry</div>
              <div>• Low facility footprint (~15-20m²)</div>
              <div>• Entry investment ($40k-80k)</div>
            </CardContent>
          </Card>
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>2m Class (Standard)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <div><strong>Typical:</strong> 1500×3000mm, 2000×4000mm</div>
              <div>• Job shops, general fabrication</div>
              <div>• Moderate footprint (~40-60m²)</div>
              <div>• Mid investment ($80k-150k)</div>
            </CardContent>
          </Card>
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>3m Class (Large Format)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-1">
              <div><strong>Typical:</strong> 2500×6000mm, 3000×8000mm</div>
              <div>• Production lines, shipbuilding</div>
              <div>• Large footprint (~80-120m²)</div>
              <div>• High investment ($150k-300k+)</div>
            </CardContent>
          </Card>
        </div>

        {/* Material Utilization */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">材料利用率分析 | Material Utilization Analysis</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">标准板材尺寸匹配 | Standard Sheet Size Matching</h3>
          <p className="text-gray-700 mb-4">
            Material utilization is the percentage of raw material converted to finished parts. Poor matching between 
            work area and standard sheet sizes leads to waste. Understanding regional material standards is critical.
          </p>

          <div className="not-prose mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">常见板材尺寸 Common Sheet Sizes</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>中国标准 China Standard</CardTitle>
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
                  <CardTitle>国际标准 International</CardTitle>
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

          <h3 className="text-xl font-semibold text-gray-900 mb-3">平台尺寸与材料利用率 Platform Size vs Utilization</h3>
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
            <strong>实际案例 Real Example:</strong> A job shop cutting 1250×2500mm sheets with a 1000×1000mm machine 
            must pre-cut sheets into quarters, losing 15-20% to kerf and edge waste. Upgrading to 1500×3000mm platform 
            increases utilization to 82%, saving $15,000-25,000/year in material costs at 500 sheets/month.
          </div>
        </section>

        {/* Throughput & Productivity */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">产能与效率 | Throughput & Productivity</h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">单次加工能力 Single-Cycle Capacity</h3>
          <p className="text-gray-700 mb-4">
            Larger work areas enable processing more parts per cycle, reducing loading/unloading frequency. This 
            significantly impacts throughput for small-to-medium parts.
          </p>

          <div className="not-prose mb-6">
            <h4 className="font-semibold text-gray-900 mb-2">示例：加工200mm×300mm零件 Example: 200mm×300mm Parts</h4>
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

          <h3 className="text-xl font-semibold text-gray-900 mb-3">大型零件加工 Large Part Processing</h3>
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">设施要求 | Facility Requirements</h2>

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

          <h3 className="text-xl font-semibold text-gray-900 mb-3">物流与搬运 Logistics & Material Handling</h3>
          <p className="text-gray-700 mb-4">
            Larger platforms require more sophisticated material handling. 1m platforms can use manual loading with 
            simple carts. 2m platforms typically need forklift access and may benefit from semi-automated loading. 
            3m platforms almost always require automated loading/unloading systems (shuttle tables, tower storage) 
            to maintain productivity, adding $30k-100k to total investment.
          </p>
        </section>

        {/* Cost Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">成本分析 | Cost Analysis</h2>

          <div className="not-prose mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">初始投资对比 Initial Investment Comparison</h3>
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

          <h3 className="text-xl font-semibold text-gray-900 mb-3">运营成本 Operating Costs</h3>
          <p className="text-gray-700 mb-4">
            Larger platforms have higher fixed costs (electricity, maintenance, floor space) but lower per-part variable 
            costs due to better material utilization and reduced loading overhead. The crossover point depends on production 
            volume and part mix.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 not-prose text-sm text-blue-900 mb-6">
            <strong>ROI示例 ROI Example:</strong> Job shop cutting 500 sheets/month (1250×2500mm):
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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">自动化集成 | Automation Integration</h2>

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
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">选型决策框架 | Selection Decision Framework</h2>

          <div className="grid md:grid-cols-3 gap-6 not-prose">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle className="text-green-700">选择1m平台 Choose 1m If...</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div>✓ 小零件为主 (&lt;300mm) Small parts primary</div>
                <div>✓ 样品/原型制作 Prototyping/samples</div>
                <div>✓ 有限预算 Limited budget (&lt;$80k)</div>
                <div>✓ 小型车间 Small shop space</div>
                <div>✓ 低产量 Low volume (&lt;100 parts/day)</div>
                <div>✓ 珠宝/工艺品 Jewelry/crafts</div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle className="text-blue-700">选择2m平台 Choose 2m If...</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div>✓ 通用钣金加工 General sheet metal</div>
                <div>✓ 标准板材 (1.25×2.5m, 1.5×3m)</div>
                <div>✓ 混合零件尺寸 Mixed part sizes</div>
                <div>✓ 中等产量 Medium volume</div>
                <div>✓ 最佳性价比 Best ROI balance</div>
                <div>✓ 未来自动化可能 Future automation option</div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle className="text-orange-700">选择3m平台 Choose 3m If...</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div>✓ 大型零件 (&gt;1.5m) Large parts required</div>
                <div>✓ 高产量生产 High-volume production</div>
                <div>✓ 24/7运营 24/7 operation</div>
                <div>✓ 船舶/重工 Shipbuilding/heavy industry</div>
                <div>✓ 自动化产线 Automated line</div>
                <div>✓ 充足设施 Adequate facility (&gt;100m²)</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Resources */}
        <section className="not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">相关资源 Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/tools/workspace-matcher" className="block">
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">工作区匹配工具 Workspace Matcher</h3>
                  <p className="text-sm text-gray-600">Calculate optimal work area for your parts</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/selection" className="block">
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">设备选型指南 Equipment Selection</h3>
                  <p className="text-sm text-gray-600">Complete laser equipment buying guide</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/comparison" className="block">
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">设备对比 Equipment Comparison</h3>
                  <p className="text-sm text-gray-600">Compare laser machines by work area</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

