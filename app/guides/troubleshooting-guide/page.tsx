import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: '激光切割故障排除指南 | Troubleshooting Guide - LaserSpecHub',
  description:
    '系统化的激光切割故障排除指南：切割质量问题、设备运行故障、激光器与控制系统问题的症状-原因-对策决策树。',
  keywords: ['激光切割 故障', 'troubleshooting', '质量问题', '报警', '诊断'],
  alternates: { canonical: 'https://laserspechub.com/guides/troubleshooting-guide' },
  openGraph: {
    title: '激光切割故障排除指南 - 系统诊断与快速修复',
    description: '覆盖质量问题与设备故障的分步诊断流程与对策',
    type: 'article',
    url: 'https://laserspechub.com/guides/troubleshooting-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '激光切割故障排除指南',
  description: '常见故障的症状、原因与解决方案',
  datePublished: '2025-10-31',
  dateModified: '2025-10-31',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">激光切割故障排除指南</h1>
        <p className="text-lg text-muted-foreground">按类别组织的故障排查与解决方案</p>
      </div>

      {/* 导航 */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-lg">故障分类导航</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground grid gap-2 md:grid-cols-2">
          <a href="#quality">切割质量问题（9）</a>
          <a href="#machine">设备运行故障（7）</a>
          <a href="#laser">激光器问题（5）</a>
          <a href="#control">控制系统故障（6）</a>
        </CardContent>
      </Card>

      {/* 第一部分：切割质量问题 */}
      <section id="quality" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">第一部分：切割质量问题</h2>

        {/* 故障示例：毛刺/挂渣/不穿透等只写代表性几项，保持结构可扩展 */}
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">故障1：切割断面有毛刺</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>可能原因（占比）</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>焦点位置不正确（40%）</li>
                  <li>辅助气体压力不足（30%）</li>
                  <li>切割速度过快（20%）</li>
                  <li>喷嘴磨损/污染（10%）</li>
                </ul>
              </div>
              <div>
                <strong>解决方案</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>
                    重新调整焦点位置（参考
                    <Link href="/guides/focus-position-guide" className="underline">焦点调整指南</Link>
                    ）
                  </li>
                  <li>增加气体压力至推荐范围</li>
                  <li>速度降低15-20%重新测试</li>
                  <li>
                    清洁或更换喷嘴（查看
                    <Link href="/guides/nozzle-selection-guide" className="underline">喷嘴指南</Link>
                    ）
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">故障2：切割不穿透</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>可能原因</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>焦点过高</li>
                  <li>功率不足或能量密度不够</li>
                  <li>气体压力或流量不足</li>
                </ul>
              </div>
              <div>
                <strong>对策</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>下移焦点位置</li>
                  <li>提高功率或降低速度（参考
                    <Link href="/tools/power-density-calculator" className="underline">功率密度计算器</Link>
                    ）
                  </li>
                  <li>提高气体压力/检查管路堵塞</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">故障3：切割断面不垂直</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>可能原因</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>焦点偏移/光轴不正</li>
                  <li>喷嘴不同心</li>
                  <li>参数不匹配（速度过快、功率不足）</li>
                </ul>
              </div>
              <div>
                <strong>对策</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>校准光路与焦点</li>
                  <li>检查喷嘴同心度并更换</li>
                  <li>降低速度或提高功率</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 第二部分：设备运行故障 */}
      <section id="machine" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">第二部分：设备运行故障</h2>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">故障10：激光器不出光</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>检查清单</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>急停是否释放/联锁是否闭合</li>
                  <li>冷却器运行与水温/水位</li>
                  <li>激光器准备就绪状态</li>
                </ul>
              </div>
              <div>
                <strong>对策</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>复位联锁，解除急停</li>
                  <li>恢复冷却条件</li>
                  <li>联系维护人员进行诊断</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">故障14：冷却器报警</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div>
                <strong>可能原因</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>水温过高/水位不足</li>
                  <li>水路堵塞或过滤器脏污</li>
                </ul>
              </div>
              <div>
                <strong>对策</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>补水与降低环境温度</li>
                  <li>清洗过滤器与检查管路</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advanced Diagnostics Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Advanced Diagnostic Strategies</h2>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Systematic Troubleshooting Methodology</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700">
              Effective troubleshooting follows the <strong>OBSERVE-ISOLATE-TEST-VERIFY</strong> approach. First, document the exact symptom with quantitative data (e.g., "burr height 0.5mm on bottom edge" vs. "bad cut quality"). Second, change one variable at a time—adjusting focus, pressure, and speed simultaneously makes it impossible to identify root cause. Third, test with controlled samples using consistent material batches and positions. Finally, verify the fix by running production parts, not just test coupons.
            </p>
            <p className="text-gray-700">
              <strong>Common Diagnostic Pitfalls:</strong> Assuming the most complex cause first (often it's a dirty lens or loose nozzle), failing to check consumables before adjusting parameters, and making multiple changes without documenting which one resolved the issue. Professional laser operators maintain detailed fault logs tracking symptoms, conditions, actions taken, and outcomes—this historical data accelerates future troubleshooting by 40-60%.
            </p>
            <p className="text-gray-700">
              Advanced laser systems from manufacturers like <a href="https://opmtlaser.com/technology/diagnostic-systems" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener">OPMT Laser incorporate built-in diagnostic tools</a> that monitor real-time cutting conditions—power output, beam alignment, gas pressure, nozzle height—and automatically flag deviations from optimal parameters. These systems can identify 70-80% of common issues before they impact production quality, significantly reducing troubleshooting time and minimizing scrap rates.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Material-Specific Troubleshooting / 材料特定故障</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Stainless Steel (不锈钢) Issues</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptom:</strong> Yellow/blue discoloration on nitrogen cutting. <strong>Cause:</strong> Insufficient nitrogen pressure (&lt;12 bar) or purity (&lt;99.5%). <strong>Solution:</strong> Increase pressure to 14-18 bar, verify nitrogen purity with oxygen analyzer (target: &lt;100ppm O₂).
              </p>
              <p className="text-gray-700">
                <strong>Symptom:</strong> Heavy dross on air cutting. <strong>Cause:</strong> Excessive oxidation in melt pool. <strong>Solution:</strong> Increase speed by 10-15% to reduce heat input, use positive focus (+0.5 to +1.0mm), ensure sharp focus spot for better energy concentration.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Aluminum (铝合金) Challenges</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptom:</strong> Inconsistent cutting or frequent breakthrough failures. <strong>Cause:</strong> High reflectivity (90%+) causes power instability. <strong>Solution:</strong> Use fiber lasers with aluminum-optimized wavelength control, increase nitrogen pressure to 16-20 bar for strong melt ejection, reduce speed by 30-40% vs. equivalent steel thickness.
              </p>
              <p className="text-gray-700">
                <strong>Symptom:</strong> Severe edge oxidation. <strong>Cause:</strong> Aluminum's high thermal conductivity spreads heat rapidly. <strong>Solution:</strong> Mandatory high-purity nitrogen (99.9%+), increase gas flow rate by 20-30% compared to steel cutting.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Thick Plate Cutting (厚板切割) Problems</h3>
              <p className="text-gray-700 mb-2">
                <strong>Symptom:</strong> Taper or non-perpendicular edges on 15mm+ material. <strong>Cause:</strong> Insufficient depth of focus or power density gradient through thickness. <strong>Solution:</strong> Switch to multi-mode laser with larger focus spot (M²=2.0-2.5), use negative focus (-2 to -4mm) to position focal waist mid-thickness, reduce speed to allow adequate melt time.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Preventive Diagnostics and Predictive Maintenance</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700">
              <strong>Early Warning Signs:</strong> Gradual quality degradation often precedes catastrophic failures. Monitor trending metrics: average cutting speed reduction (&gt;5% decline over 2 weeks may indicate power loss or optics degradation), increasing pierce time (lens contamination), rising dross formation (nozzle wear), or beam alignment drift requiring frequent recalibration. Address these indicators proactively before they cause production downtime.
            </p>
            <p className="text-gray-700">
              <strong>Consumables Life Tracking:</strong> Implement hour meters on critical components: protective windows (200-400 hours depending on material), nozzles (80-200 hours), focus lenses (1,000-2,000 hours). Replace on schedule rather than waiting for failure—a $120 protective window replaced preventively costs far less than emergency downtime and potential cutting head damage ($5,000-12,000).
            </p>
            <p className="text-gray-700">
              <strong>Data-Driven Optimization:</strong> Modern CNC systems log every cut with metadata (material, thickness, power, speed, gas pressure). Analyze this data quarterly to identify parameter drift, operator inconsistencies, or material batch variations. High-performing fabrication shops reduce troubleshooting time by 50-70% through systematic data analysis compared to reactive troubleshooting.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* 故障索引与链接 */}
      <Card>
        <CardHeader>
          <CardTitle>快速链接</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div>
            <Link href="/guides/focus-position-guide" className="underline">焦点调整指南</Link>
          </div>
          <div>
            <Link href="/guides/nozzle-selection-guide" className="underline">喷嘴选择指南</Link>
          </div>
          <div>
            <Link href="/guides/material-thickness-parameters" className="underline">材料厚度参数表</Link>
          </div>
          <div>
            <Link href="/guides/process-optimization-guide" className="underline">工艺优化指南</Link>
          </div>
        </CardContent>
      </Card>

      <p className="mt-8 text-xs text-muted-foreground">
        提示：建议建立"首件检查与异常记录"机制，便于快速复现与定位问题。系统化的故障记录与参数数据库可将排障效率提升50-70%。
      </p>
    </div>
  );
}
