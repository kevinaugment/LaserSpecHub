import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: '激光 vs 等离子 vs 水刀 对比 | Cutting Method Comparison - LaserSpecHub',
  description:
    '从精度、质量、热影响区、速度、厚度、材料适用性、投资与运行成本等维度对比激光、等离子、水刀三种切割技术，并提供场景决策建议。',
  keywords: ['laser vs plasma vs waterjet', '切割方法对比', '设备选型'],
  alternates: { canonical: 'https://laserspechub.com/guides/cutting-method-comparison' },
  openGraph: {
    title: '激光 vs 等离子 vs 水刀 对比 - 选型参考',
    description: '三种切割技术的综合对比与决策建议',
    type: 'article',
    url: 'https://laserspechub.com/guides/cutting-method-comparison',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '激光 vs 等离子 vs 水刀 对比',
  description: '多维度技术与成本对比的选型指南',
  datePublished: '2025-10-31',
  dateModified: '2025-10-31',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">激光 vs 等离子 vs 水刀 对比</h1>
        <p className="text-lg text-muted-foreground">技术性能与成本的客观对比，辅助设备选型</p>
      </div>

      {/* 1. 综合性能对比 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. 综合性能对比</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">对比项目</th>
                    <th className="text-left py-3 px-4">激光</th>
                    <th className="text-left py-3 px-4">等离子</th>
                    <th className="text-left py-3 px-4">水刀</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-muted-foreground">
                  <tr>
                    <td className="py-3 px-4 font-medium">切割精度</td>
                    <td className="py-3 px-4">±0.1mm</td>
                    <td className="py-3 px-4">±0.5mm</td>
                    <td className="py-3 px-4">±0.2mm</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">切边质量</td>
                    <td className="py-3 px-4">优秀</td>
                    <td className="py-3 px-4">良好</td>
                    <td className="py-3 px-4">优秀</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">热影响区</td>
                    <td className="py-3 px-4">极小</td>
                    <td className="py-3 px-4">较大</td>
                    <td className="py-3 px-4">无</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">速度(10mm碳钢)</td>
                    <td className="py-3 px-4">≈2.5 m/min</td>
                    <td className="py-3 px-4">≈3.0 m/min</td>
                    <td className="py-3 px-4">≈0.3 m/min</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">最大厚度(碳钢)</td>
                    <td className="py-3 px-4">40mm</td>
                    <td className="py-3 px-4">150mm</td>
                    <td className="py-3 px-4">200mm+</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">材料适用性</td>
                    <td className="py-3 px-4">金属优</td>
                    <td className="py-3 px-4">导电材料</td>
                    <td className="py-3 px-4">几乎所有</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">设备投资</td>
                    <td className="py-3 px-4">高</td>
                    <td className="py-3 px-4">中</td>
                    <td className="py-3 px-4">高</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">运行成本</td>
                    <td className="py-3 px-4">中</td>
                    <td className="py-3 px-4">低</td>
                    <td className="py-3 px-4">高</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. 成本对比 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. 成本对比</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">设备投资</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 激光：1kW 50-80万；3kW 80-120万；6kW 120-180万；12kW 200-300万</div>
              <div>• 等离子：手持 1-3万；100A 10-20万；200A 20-40万；高精 40-50万</div>
              <div>• 水刀：普通 40-80万；加砂 80-150万；五轴 150-200万</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">运行成本（示例：10mm碳钢，100m）</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 激光（6kW）：电费≈25元；气体≈50元（O₂）；易损件≈5元；合计≈80元</div>
              <div>• 等离子（200A）：电费≈15元；气体≈5元；易损件≈20元；合计≈40元</div>
              <div>• 水刀：电费≈35元；砂≈200元；易损件≈10元；合计≈245元</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. 应用场景选择 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. 应用场景选择</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">激光切割</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>✓ 薄板高精度（≤10mm）</div>
              <div>✓ 不锈钢亮面切割</div>
              <div>✓ 复杂轮廓与小孔</div>
              <div>✗ 超厚板（>30mm）</div>
              <div>✗ 预算极度有限</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">等离子切割</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>✓ 厚板（10-150mm）</div>
              <div>✓ 碳钢快速切割</div>
              <div>✓ 预算有限、精度一般</div>
              <div>✗ 高精度/小孔</div>
              <div>✗ 非金属</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">水刀切割</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <div>✓ 高反材料/热敏材料</div>
              <div>✓ 复合材料/超厚材料</div>
              <div>✓ 无热影响要求</div>
              <div>✗ 预算有限</div>
              <div>✗ 高速需求</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. 决策建议 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">4. 决策建议</h2>
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground space-y-2">
            <div>• 主要材料：金属→优先激光/等离子；非金属→优先水刀</div>
            <div>• 厚度范围：<10mm→激光；10-30mm→激光/等离子；>30mm→等离子/水刀</div>
            <div>• 精度等级：±0.1mm→激光；±0.5mm→等离子；±0.2mm→水刀</div>
            <div>• 预算：低→等离子；中→激光；高→激光或水刀</div>
          </CardContent>
        </Card>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">注：以上数据基于公开资料与行业经验，实际性能因设备型号与工艺设置而异。</p>
    </div>
  );
}
