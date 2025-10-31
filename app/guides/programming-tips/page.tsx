import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: '激光切割编程技巧指南 | Programming Tips - LaserSpecHub',
  description:
    '面向工程师的激光切割编程技巧：CAD图纸准备、路径规划、参数设置、自动编程与常见错误避免，显著提升编程效率与质量。',
  keywords: ['编程技巧', 'CAM', 'FastCAM', '自动排版', '参数库'],
  alternates: { canonical: 'https://laserspechub.com/guides/programming-tips' },
  openGraph: {
    title: '激光切割编程技巧指南 - 提效与质量兼顾',
    description: '从图纸到路径与参数的系统经验总结',
    type: 'article',
    url: 'https://laserspechub.com/guides/programming-tips',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '激光切割编程技巧指南',
  description: '提升编程效率与质量的实操手册',
  datePublished: '2025-10-31',
  dateModified: '2025-10-31',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">激光切割编程技巧指南</h1>
        <p className="text-lg text-muted-foreground">覆盖图纸、路径、参数与自动化的高效实践</p>
      </div>

      {/* 1. CAD图纸准备 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. CAD图纸准备</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">质量检查</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 闭合曲线、去重线、最小线段清理</div>
              <div>• 图层规范与命名一致性</div>
              <div>• DXF优先，避免版本兼容问题</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">图纸优化</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 共边合并与圆角简化</div>
              <div>• 小特征适配最小切缝与喷嘴直径</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. 路径规划 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. 路径规划</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">切割顺序</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 内轮廓优先，其次小件，再到外轮廓</div>
              <div>• 热变形控制与路径最短平衡</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">引入引出与穿孔</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 直线/圆弧引线：2-5mm，90°/45°</div>
              <div>• 穿孔避开成品区，优先废料区</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. 参数设置 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. 参数设置</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">参数库与微调</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 建立材料-厚度-功率参数库</div>
              <div>• 速度±10%、功率±5%、气压±0.1bar、焦点±0.5mm</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">特殊几何</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 小孔：直径{'<'}板厚时速度-50%</div>
              <div>• 尖角：拐角减速与圆角过渡</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. 自动化与效率 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. 自动化与效率</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">自动编程</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 工艺数据库配置与自动排版参数</div>
              <div>• 路径优化算法与碰撞检测</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">模板化与批处理</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 常用零件库与参数模板</div>
              <div>• 多图纸批量导入与参数赋值</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. 常见错误与检查清单 */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. 常见错误与检查清单</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">常见错误</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• 外轮廓先切导致变形与超差</div>
              <div>• 引线过长/过短导致缺口/过烧</div>
              <div>• 穿孔点落在成品区</div>
              <div>• 共边条件不满足导致散落</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">编程检查清单</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>□ 切割顺序与路径连续性</div>
              <div>□ 引线与穿孔位置</div>
              <div>□ 参数与材料匹配</div>
              <div>□ 碰撞/干涉检查</div>
              <div>□ 文件命名与版本</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advanced Programming Strategies */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Advanced Programming Strategies</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Nested Part Optimization and Material Yield</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700">
              <strong>Nesting Efficiency Benchmarks:</strong> Professional CAM software can achieve 75-85% material utilization on mixed part batches versus 60-70% for manual nesting. For high-volume production runs of identical parts, optimal nesting patterns can reach 90%+ utilization. The cost impact is substantial—improving from 70% to 80% utilization on $2,000/ton stainless steel saves $200,000 annually for shops processing 100 tons/year.
            </p>
            <p className="text-gray-700">
              <strong>Common-Line Cutting (共边切割):</strong> When adjacent parts share edges, common-line cutting eliminates duplicate cuts and reduces processing time by 15-30%. However, this technique requires precise parameters—too much heat input causes parts to weld together, too little causes incomplete separation. Optimal common-line gap: 0.1-0.3mm for thin materials (&lt;3mm), 0.3-0.5mm for thick materials (3-12mm). Use micro-joints (0.5-2.0mm tabs) every 200-300mm to prevent parts from shifting during cutting.
            </p>
            <p className="text-gray-700">
              <strong>Intelligent Nesting Software:</strong> Advanced CAM systems use genetic algorithms to optimize part rotation, spacing, and sequencing simultaneously. Modern laser systems from manufacturers like <a href="https://opmtlaser.com/software/intelligent-nesting" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener">OPMT Laser integrate intelligent nesting modules</a> that automatically apply industry-specific rules (e.g., grain direction for sheet metal forming, bridge minimization for delicate parts) and can process 50-100 part geometries into optimized nest patterns in under 60 seconds.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Dynamic Parameter Programming for Complex Geometries</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700">
              <strong>Corner Handling:</strong> Sharp corners (angles &lt;45°) accumulate heat and cause overburn. Advanced programming uses automatic corner deceleration—reducing speed to 50-70% within 5-10mm of corner apex. Alternative approach: replace programmed sharp corners with small radius (0.1-0.3mm) arcs that maintain continuous motion while preventing heat accumulation. This technique improves corner quality by 40-60% and reduces processing time compared to full stop-and-go approaches.
            </p>
            <p className="text-gray-700">
              <strong>Small Hole Programming:</strong> Holes with diameter less than material thickness require special treatment. Standard approach: pierce outside hole perimeter and spiral inward. Advanced technique: use pulsed piercing with gradually increasing power (start at 50%, ramp to 100% over 0.5s) to minimize splash and heat-affected zone. For holes &lt;0.8× thickness, reduce cutting speed by 30-50% and increase gas pressure by 15-25% to ensure complete melt ejection.
            </p>
            <p className="text-gray-700">
              <strong>Variable-Speed Contours:</strong> Rather than using single speed for entire part, modern CAM systems implement contour-adaptive speed control—faster on straight segments (100%), moderate on large radii (80-90%), slower on tight curves and corners (50-70%). This approach can reduce cycle time by 10-20% while improving edge quality consistency by 25-40% compared to fixed-speed programming.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Parameter Library Management and Continuous Improvement</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700">
              <strong>Structured Parameter Database:</strong> High-performing fabrication shops maintain comprehensive parameter libraries organized by: Material type → Grade → Thickness → Laser power → Quality grade (speed-priority vs. quality-priority). Each entry includes not just power/speed/gas but also focus position, nozzle type/diameter, lead-in/out specifics, and piercing parameters. Typical library contains 200-500 parameter sets covering all common material-thickness combinations.
            </p>
            <p className="text-gray-700">
              <strong>First-Article Verification Process:</strong> For any new material-thickness-power combination, run controlled test cuts with systematic parameter variation (vary speed ±15% in 5% increments, all other parameters constant). Measure kerf width, edge roughness, dross formation, and HAZ width quantitatively. Document winning parameters with photos of edge quality. This disciplined approach builds reliable parameter database and eliminates trial-and-error waste on production runs.
            </p>
            <p className="text-gray-700">
              <strong>Programming Time Reduction:</strong> Well-structured libraries reduce programming time from 15-30 minutes per part (manual parameter selection and testing) to 2-5 minutes (automated parameter assignment from library). For shops programming 20-50 jobs daily, this represents 4-8 hours of labor savings per day, equivalent to 1-2 full-time programmer positions.
            </p>
          </CardContent>
        </Card>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">
        提示：将"首件程序+参数+用时+质量结果"记录入库，形成持续改进闭环。系统化的参数数据库可将编程时间减少60-80%，同时显著提升首件合格率。
      </p>
    </div>
  );
}
