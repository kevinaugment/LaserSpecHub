import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: '激光切割排版优化指南 | Nesting Optimization Guide - LaserSpecHub',
  description:
    '系统化的激光切割排版优化指南：排版原则、常见方法、软件应用、特殊技术与ROI评估，显著提升材料利用率与效率。',
  keywords: ['nesting', '排版优化', '材料利用率', '共边切割', '余料管理'],
  alternates: { canonical: 'https://laserspechub.com/guides/nesting-optimization-guide' },
  openGraph: {
    title: '激光切割排版优化指南 - 提升材料利用率与效率',
    description: '从原则、方法到软件与案例的完整实践指南',
    type: 'article',
    url: 'https://laserspechub.com/guides/nesting-optimization-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '激光切割排版优化指南',
  description: '提升材料利用率与效率的系统方法',
  datePublished: '2025-10-31',
  dateModified: '2025-10-31',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">激光切割排版优化指南</h1>
        <p className="text-lg text-muted-foreground">以“更高材料利用率+更短加工时间”为导向的系统方法</p>
      </div>

      {/* 1. 排版原则与方法 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. 排版原则与方法</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">基本排版原则</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 大件优先/边角利用/方向统一</div>
              <div>• 最小边距3-5mm，零件间距1-3mm</div>
              <div>• 切割顺序规划与穿孔点选择</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">常见排版方法</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 矩形排列：规则件，75-85%利用率</div>
              <div>• 嵌套排列：异形件，80-90%</div>
              <div>• 共边切割：相同零件，85-92%，切割时间-15-25%</div>
              <div>• 智能算法：遗传/模拟退火，88-95%</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. 软件应用与技巧 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. 软件应用与技巧</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">主流软件对比</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Sigmanest：自动优化强，90-95%</div>
              <div>• FastCAM：通用性好，85-90%</div>
              <div>• Lantek：系统集成好，85-92%</div>
              <div>• 国产：性价比高，80-88%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">使用技巧</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 约束条件：方向/间距/共边边数</div>
              <div>• 参数设置：边距优先/路径最短</div>
              <div>• 手工干预：关键零件锁定与分区排版</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. 特殊排版技术 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. 特殊排版技术</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">共边切割</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 条件：材料/质量一致，轮廓匹配</div>
              <div>• 步骤：CAD处理 → 软件设置 → 路径验证</div>
              <div>• 效果：材料+8~12%，时间-15~25%</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">余料管理</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 余料分类：A≥500×500、B 200~500、C<200</div>
              <div>• 余料库：尺寸标记与优先排版</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">微连接技术</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 宽度0.2-0.5mm，数量随尺寸</div>
              <div>• 减少穿孔与零件掉落</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. ROI评估 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. ROI评估</h2>
        <Card>
          <CardContent className="pt-6 text-sm text-muted-foreground space-y-2">
            <div>• 输入：月材料量、单价、当前利用率</div>
            <div>• 输出：提升5%的年度节省、软件回收期</div>
            <div>• 建议：结合订单结构评估真实收益</div>
          </CardContent>
        </Card>
      </section>

      {/* 5. 相关链接 */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>相关工具</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>
              <Link href="/tools/cost-estimator" className="underline">切割成本估算器</Link>
            </div>
            <div>
              <Link href="/tools/kerf-calculator" className="underline">切缝估算器</Link>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>配套指南</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>
              <Link href="/guides/process-optimization-guide" className="underline">工艺优化指南</Link>
            </div>
            <div>
              <Link href="/guides/material-thickness-parameters" className="underline">材料厚度参数表</Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">提示：排版前优化CAD图纸（闭合、共边、简化小特征），可显著提升利用率与加工效率。</p>
    </div>
  );
}
