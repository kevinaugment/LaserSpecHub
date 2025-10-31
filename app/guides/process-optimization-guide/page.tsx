import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: '激光切割工艺优化指南 | Process Optimization Guide - LaserSpecHub',
  description:
    '系统化的激光切割工艺优化指南：速度优化、质量优化、材料利用率、成本控制、专项工艺与工艺数据库建立。基于TRUMPF、Bystronic工程指南与精益生产实践。',
  keywords: [
    '激光切割工艺优化',
    'laser cutting process optimization',
    '速度优化',
    '质量优化',
    '成本优化',
  ],
  alternates: {
    canonical: 'https://laserspechub.com/guides/process-optimization-guide',
  },
  openGraph: {
    title: '激光切割工艺优化指南 - 提效、提质、降本的系统方法',
    description:
      '覆盖速度、质量、材料利用率、成本及专项工艺的全面优化指南',
    type: 'article',
    url: 'https://laserspechub.com/guides/process-optimization-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '激光切割工艺优化指南',
  description: '从速度、质量、成本到专项工艺的系统优化方案',
  author: {
    '@type': 'Organization',
    name: 'LaserSpecHub',
  },
  datePublished: '2025-10-31',
  dateModified: '2025-10-31',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">激光切割工艺优化指南</h1>
        <p className="text-lg text-muted-foreground">
          围绕“速度、质量、成本、利用率”四大目标，提供工程可落地的优化方法
        </p>
      </div>

      {/* 1. 工艺优化总体思路 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. 工艺优化总体思路</h2>
        <Card>
          <CardContent className="pt-6 space-y-4 text-sm">
            <div>
              <strong>优化目标定义</strong>
              <ul className="mt-2 ml-4 list-disc text-muted-foreground">
                <li>速度优先：在满足质量要求的前提下最大化产能</li>
                <li>质量优先：以边缘质量等级与尺寸精度为约束优化参数</li>
                <li>成本优先：综合气体、电力、折旧与人工成本</li>
              </ul>
            </div>
            <div>
              <strong>参数相互影响</strong>
              <p className="text-muted-foreground mt-1">
                功率、速度、焦点、气压与喷嘴直径存在耦合，需联动优化而非单点调整。
              </p>
            </div>
            <div>
              <strong>实施步骤</strong>
              <ol className="mt-2 ml-4 list-decimal text-muted-foreground">
                <li>基线测试：建立标准件参数基线</li>
                <li>单因子扫描：围绕焦点/速度/气压进行小范围扫描</li>
                <li>多因子组合：锁定候选组合做对比试切</li>
                <li>首件确认：依据ISO 9013质量等级验收</li>
                <li>固化入库：参数入库与版本管理</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. 切割速度优化 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. 切割速度优化</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">限制因素分析</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>• 功率上限与能量密度</div>
              <div>• 材料热传导与熔池稳定</div>
              <div>• 机械加速度与急停距离</div>
              <div>• 气体动力学与排渣效率</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">速度优化方法</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <div>• 构建功率-速度匹配曲线，识别平台区与失稳区</div>
              <div>• 厚度-速度速查：参考参数表并做±10%微调</div>
              <div>• 拐角/小圆减速：分段速度曲线或曲率自适应</div>
              <div>• 飞行切割：薄板连续图形效率+20-30%</div>
            </CardContent>
          </Card>
        </div>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>速度优化案例</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <div>• 3mm不锈钢：在焦点-0.5mm、氮气14bar前提下，速度由2.6 → 3.2 m/min，边缘质量维持2级</div>
            <div>• 1.5mm碳钢：氧气切割喷嘴ø1.2 → ø1.0，速度+12%，氧化边可控</div>
          </CardContent>
        </Card>
      </section>

      {/* 3. 切割质量优化 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. 切割质量优化</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">质量等级与评价</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <div className="text-muted-foreground">ISO 9013 1-4级：粗糙度、垂直度、挂渣与热影响区。</div>
              <div>
                <Link href="/guides/edge-quality-standards" className="underline">边缘质量标准表</Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">常见问题与调整</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3">质量问题</th>
                      <th className="text-left py-2 px-3">主要参数</th>
                      <th className="text-left py-2 px-3">调整方向</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y text-muted-foreground">
                    <tr>
                      <td className="py-2 px-3">挂渣</td>
                      <td className="py-2 px-3">气压、速度</td>
                      <td className="py-2 px-3">增压、降速</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">毛刺</td>
                      <td className="py-2 px-3">焦点、速度</td>
                      <td className="py-2 px-3">调焦、降速</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3">烧边</td>
                      <td className="py-2 px-3">功率、速度</td>
                      <td className="py-2 px-3">降功率、提速</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. 材料利用率优化 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. 材料利用率优化</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">排版策略</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 大件优先、边角利用、共边切割</div>
              <div>• 零件方向统一，减少换向</div>
              <div>• 自动排版结合手工微调</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">路径优化</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 切割顺序：内→外，小件优先</div>
              <div>• 穿孔位置择在废料区</div>
              <div>• 引入引出线优化与微连接设计</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. 成本优化 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. 成本优化</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">气体消耗</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 氧气/氮气/空气的成本与质量差异</div>
              <div>• 压力优化：避免过压空耗</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">易损件寿命</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 喷嘴、保护镜片的保养与更换周期</div>
              <div>
                <Link href="/tools/nozzle-life-calculator" className="underline">喷嘴寿命预测器</Link>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">能耗优化</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 待机节能、夜间电价策略</div>
              <div>• 生产计划与换线时间优化</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6. 专项工艺优化 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. 专项工艺优化</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">厚板切割</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 多次切割与分层穿孔</div>
              <div>• 大直径喷嘴与负焦设置</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">高反材料</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 铜铝：正焦或零焦，专用防反射方案</div>
              <div>• 建议先试切与功率限制</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">小孔与内角</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 拐角减速与动态功率</div>
              <div>• 小孔速度降低30-50%</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 7. 工艺数据库建立 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">7. 工艺数据库建立</h2>
        <Card>
          <CardContent className="pt-6 space-y-3 text-sm text-muted-foreground">
            <div>• 结构：材料-厚度-功率-喷嘴-焦点-速度-气压-备注</div>
            <div>• 模板化：常用零件参数模板与快速调用</div>
            <div>• 版本化：记录日期、操作员与变更原因，便于追溯</div>
          </CardContent>
        </Card>
      </section>

      {/* Related */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>相关速查与工具</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>
              <Link href="/guides/material-thickness-parameters" className="underline">材料厚度切割参数表</Link>
            </div>
            <div>
              <Link href="/tools/kerf-calculator" className="underline">切缝估算器</Link>
            </div>
            <div>
              <Link href="/tools/power-density-calculator" className="underline">功率密度计算器</Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>标准与参考</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-muted-foreground space-y-1">
            <div>• TRUMPF 工程指南</div>
            <div>• Bystronic 工艺参数</div>
            <div>• ISO 9013 切割质量等级</div>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        数据声明：本指南基于主流厂商与行业标准，实际参数需结合设备状态与试切结果微调。
      </p>
    </div>
  );
}
