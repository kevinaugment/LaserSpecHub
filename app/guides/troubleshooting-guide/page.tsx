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
        </CardContent>
      </Card>

      <p className="mt-8 text-xs text-muted-foreground">
        提示：建议建立“首件检查与异常记录”机制，便于快速复现与定位问题。
      </p>
    </div>
  );
}
