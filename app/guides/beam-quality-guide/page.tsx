import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: '激光光束质量M²因子详解 | Beam Quality Guide - LaserSpecHub',
  description:
    '深入解析激光光束质量M²因子的物理定义、测量方法和实际影响。了解M²值如何影响切割性能、焦斑尺寸和焦深,以及如何根据M²值选择合适的激光器。基于ISO 11146标准。',
  keywords: [
    '激光光束质量',
    'M²因子',
    'M2 factor',
    'beam quality',
    '光束参数积',
    'BPP',
  ],
  alternates: {
    canonical: 'https://laserspechub.com/guides/beam-quality-guide',
  },
  openGraph: {
    title: '激光光束质量M²因子详解 - 从原理到应用',
    description:
      '全面解析M²因子的物理意义、测量标准和对切割性能的影响',
    type: 'article',
    url: 'https://laserspechub.com/guides/beam-quality-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '激光光束质量M²因子详解',
  description: '激光束质量评价标准与应用指南',
  author: {
    '@type': 'Organization',
    name: 'LaserSpecHub',
  },
  datePublished: '2025-10-31',
  dateModified: '2025-10-31',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">激光光束质量M²因子详解</h1>
        <p className="text-lg text-muted-foreground">
          从物理原理到实际应用,全面理解激光束质量评价标准
        </p>
      </div>

      {/* 1. M²因子基础概念 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. 什么是M²因子</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>物理定义</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed">
              M²(读作"M平方")是衡量激光束质量的国际标准参数,定义为实际激光束的光束参数积(BPP)与理想高斯光束BPP的比值。
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-sm mb-2">数学表达式</h4>
              <div className="font-mono text-sm space-y-2">
                <div>M² = BPP<sub>实际</sub> / BPP<sub>理想</sub></div>
                <div className="text-xs text-muted-foreground mt-3">其中:</div>
                <div className="text-xs">BPP = θ × w₀ (光束参数积)</div>
                <div className="text-xs">θ = 发散角半角 (rad)</div>
                <div className="text-xs">w₀ = 束腰半径 (mm)</div>
              </div>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-green-500 font-bold">✓</span>
                <div>
                  <strong>理想高斯光束</strong>: M² = 1.0 (完美的TEM₀₀模式)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <div>
                  <strong>高质量激光</strong>: M² = 1.0 - 1.2 (接近高斯分布)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold">•</span>
                <div>
                  <strong>多模激光</strong>: M² = 1.5 - 5.0 (混合模式)
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-500 font-bold">×</span>
                <div>
                  <strong>低质量激光</strong>: M² {'>'} 5.0 (远离高斯分布)
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>M²与光束发散角的关系</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">
              M²值越大,光束发散角越大,聚焦后的光斑也越大。这直接影响激光的能量密度和加工精度。
            </p>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-xs">
              <div>聚焦光斑直径: d = (4 × M² × λ × f) / (π × D)</div>
              <div className="mt-3 text-xs text-muted-foreground space-y-1">
                <div>λ = 波长 (μm)</div>
                <div>f = 聚焦镜焦距 (mm)</div>
                <div>D = 入射光束直径 (mm)</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. M²因子的测量 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. M²因子的测量方法</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>ISO 11146标准测量</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              根据ISO 11146国际标准,M²测量需要在焦点前后多个位置测量光束直径,然后拟合双曲线函数得到。
            </p>
            
            <div className="space-y-3 text-sm">
              <div>
                <strong className="text-blue-600 dark:text-blue-400">测量步骤:</strong>
                <ol className="mt-2 space-y-2 ml-4 list-decimal">
                  <li>在焦点附近选择至少10个测量位置</li>
                  <li>使用光束分析仪测量每个位置的光束直径</li>
                  <li>记录轴向位置(z坐标)和对应的光束直径(w)</li>
                  <li>将数据拟合到双曲线函数: w²(z) = w₀² + (M²λz/πw₀)²</li>
                  <li>从拟合参数计算M²值</li>
                </ol>
              </div>

              <div>
                <strong className="text-green-600 dark:text-green-400">测量设备:</strong>
                <ul className="mt-2 space-y-1 ml-4 list-disc text-muted-foreground">
                  <li>CCD光束分析仪</li>
                  <li>刀口扫描系统</li>
                  <li>针孔扫描系统</li>
                  <li>商用M²测量仪(如Ophir BeamSquared)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h4 className="font-semibold text-sm mb-2 text-yellow-900 dark:text-yellow-200">
              测量注意事项
            </h4>
            <ul className="space-y-1.5 text-sm text-yellow-800 dark:text-yellow-300">
              <li>• M²测量需要专业设备,普通用户通常查阅设备厂商提供的数据</li>
              <li>• 测量结果受环境因素影响(温度、气流、振动)</li>
              <li>• 不同测量方法得到的结果可能略有差异(通常在5%以内)</li>
              <li>• 激光器老化会导致M²值逐渐增大</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 3. M²对切割性能的影响 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. M²值对切割性能的影响</h2>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3.1 对焦斑尺寸的影响</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                M²值直接决定了聚焦光斑的最小直径。M²越小,可获得的最小光斑越小,能量密度越高。
              </p>
              
              <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded border border-blue-200 dark:border-blue-800">
                <h5 className="font-semibold mb-2">示例计算</h5>
                <div className="space-y-2 text-xs font-mono">
                  <div>已知: λ=1064nm, f=127mm, D=20mm</div>
                  <div className="mt-2 space-y-1">
                    <div>M²=1.05: d ≈ 0.09 mm</div>
                    <div>M²=1.8: d ≈ 0.15 mm</div>
                    <div>M²=2.5: d ≈ 0.21 mm</div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground">
                光斑直径增大意味着能量密度降低,可能需要降低切割速度或增加功率来补偿。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3.2 对切割质量的影响</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong className="text-green-600 dark:text-green-400">高质量光束(M² {'<'} 1.2):</strong>
                <ul className="mt-1.5 space-y-1 ml-4 list-disc text-muted-foreground">
                  <li>切边光滑细腻</li>
                  <li>适合薄板精密切割</li>
                  <li>小孔切割能力强</li>
                  <li>拐角质量好</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-orange-600 dark:text-orange-400">多模光束(M² = 1.8-2.5):</strong>
                <ul className="mt-1.5 space-y-1 ml-4 list-disc text-muted-foreground">
                  <li>切边质量一般</li>
                  <li>适合厚板切割</li>
                  <li>能量分布更均匀</li>
                  <li>容错性好</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">3.3 对焦深的影响</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">
              焦深(Depth of Focus, DOF)是指光斑直径增大到1.414倍时的轴向距离范围。
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg font-mono text-xs">
              <div>焦深公式: DOF = ± (π × w₀² × M²) / (2 × λ)</div>
            </div>

            <div className="grid gap-3 text-sm">
              <div className="flex items-start gap-3 p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <div>
                  <strong>大焦深(M²较大)</strong>: 对焦点位置的容错性高,适合厚板切割和不平材料
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-950/20 rounded border border-blue-200 dark:border-blue-800">
                <span className="text-blue-500 font-bold mt-0.5">•</span>
                <div>
                  <strong>小焦深(M²较小)</strong>: 能量集中,精度高,但对焦点位置敏感,需要精确控制
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4. 不同激光器的M²值 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. 不同激光器的M²值范围</h2>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">激光器类型</th>
                    <th className="text-left py-3 px-4">典型M²值</th>
                    <th className="text-left py-3 px-4">光束特点</th>
                    <th className="text-left py-3 px-4">主要应用</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4 font-medium">单模光纤激光器</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        1.05 - 1.15
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">极高质量,接近高斯分布</td>
                    <td className="py-3 px-4 text-xs">精密切割、打标、微加工</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">多模光纤激光器</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        1.8 - 2.5
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">能量分布均匀,焦深大</td>
                    <td className="py-3 px-4 text-xs">厚板切割、焊接、熔覆</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">CO₂激光器</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        1.0 - 1.1
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">高质量,稳定性好</td>
                    <td className="py-3 px-4 text-xs">通用切割、雕刻、打标</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">碟片激光器</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        1.8 - 2.2
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">高功率,良好光束质量</td>
                    <td className="py-3 px-4 text-xs">焊接、切割、表面处理</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">半导体激光器</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                        10 - 50
                      </span>
                    </td>
                    <td className="py-3 px-4 text-muted-foreground">光束质量较差</td>
                    <td className="py-3 px-4 text-xs">泵浦源、热处理</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 5. 如何根据M²值选择激光器 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. 如何根据M²值选择激光器</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>选择决策流程</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-200">
                  精密加工 → 选择 M² {'<'} 1.2
                </h4>
                <ul className="space-y-1 text-blue-800 dark:text-blue-300">
                  <li>• 薄板精密切割(≤3mm)</li>
                  <li>• 小孔切割(直径 {'<'} 板厚)</li>
                  <li>• 精细打标和雕刻</li>
                  <li>• 电子行业、精密零件</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold mb-2 text-green-900 dark:text-green-200">
                  通用加工 → 选择 M² = 1.5-2.0
                </h4>
                <ul className="space-y-1 text-green-800 dark:text-green-300">
                  <li>• 中等厚度切割(3-12mm)</li>
                  <li>• 钣金加工</li>
                  <li>• 平衡精度和效率</li>
                  <li>• 制造业主流应用</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold mb-2 text-orange-900 dark:text-orange-200">
                  厚板加工 → 选择 M² = 2.0-3.0
                </h4>
                <ul className="space-y-1 text-orange-800 dark:text-orange-300">
                  <li>• 厚板切割(12-30mm)</li>
                  <li>• 焊接应用</li>
                  <li>• 对焦点位置容错性高</li>
                  <li>• 重工业、船舶制造</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>成本与性能平衡</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>
              一般来说,M²值越小的激光器技术难度越大,价格也越高。选择时需要在成本和性能之间找到平衡点。
            </p>
            
            <div className="grid gap-3 md:grid-cols-2 text-xs">
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded">
                <strong>单模光纤激光器</strong> (M² ≈ 1.1)
                <div className="mt-1 text-muted-foreground">
                  价格: 同功率多模产品的1.5-2倍<br />
                  适合: 高精度要求,预算充足
                </div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded">
                <strong>多模光纤激光器</strong> (M² ≈ 2.0)
                <div className="mt-1 text-muted-foreground">
                  价格: 标准价格<br />
                  适合: 通用切割,性价比高
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 6. M²与其他参数的关系 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. M²值与其他光束参数的关系</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">M²与BPP</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                <strong>光束参数积(Beam Parameter Product, BPP)</strong> 是另一个常用的光束质量指标。
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-xs">
                BPP = M² × (λ / π) × 10³ mm·mrad
              </div>
              <p className="text-muted-foreground">
                BPP越小,光束质量越好。BPP是M²的实际物理表现,直接影响聚焦光斑大小。
              </p>
              <div className="text-xs">
                示例: 1064nm激光,M²=1.8<br />
                BPP = 1.8 × (1.064/π) × 10³ ≈ 0.61 mm·mrad
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">M²与亮度(Brightness)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                <strong>激光亮度</strong> 定义为单位面积单位立体角内的功率,与M²成反比关系。
              </p>
              <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded font-mono text-xs">
                Brightness ∝ P / (M²)²
              </div>
              <p className="text-muted-foreground">
                这意味着M²增大1倍,亮度下降4倍。因此单模激光器虽然功率较低,但亮度可能比多模激光器更高。
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>综合评估方法</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-3">
              选择激光器时,不应只关注M²值,而应综合考虑多个因素:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">1.</span>
                <span><strong>应用需求</strong>: 精密切割、厚板切割还是通用加工</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">2.</span>
                <span><strong>功率大小</strong>: M²相同时,功率越大,加工能力越强</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">3.</span>
                <span><strong>波长</strong>: 不同波长对材料的吸收率不同</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">4.</span>
                <span><strong>稳定性</strong>: 长期运行的M²稳定性和一致性</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">5.</span>
                <span><strong>成本</strong>: 设备采购成本和维护成本</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Related Links */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>相关工具</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/laser-type-wizard" className="underline hover:text-primary">
                激光类型选择向导
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                根据需求推荐合适的激光器类型
              </p>
            </div>
            <div>
              <Link href="/tools/power-calculator" className="underline hover:text-primary">
                激光功率需求计算器
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                计算所需的激光功率
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>相关指南</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/guides/focus-position-guide" className="underline hover:text-primary">
                焦点位置调整指南
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                如何正确设置焦点位置
              </p>
            </div>
            <div>
              <Link href="/guides/wavelength-absorption" className="underline hover:text-primary">
                激光波长与材料吸收率
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                不同波长对材料的加工效果
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Source */}
      <Card className="mt-8 bg-gray-50 dark:bg-gray-900">
        <CardContent className="pt-6 text-xs text-muted-foreground">
          <strong>数据来源:</strong>
          <ul className="mt-2 space-y-1 ml-4 list-disc">
            <li>ISO 11146 - 激光和激光相关设备 - 激光束宽度、发散角和光束传播比的测试方法</li>
            <li>IPG Photonics 技术白皮书 - 光纤激光束质量与应用</li>
            <li>Coherent 应用手册 - 激光束质量评价与测量</li>
            <li>相关光学教材和学术论文</li>
          </ul>
          <p className="mt-3">
            更新日期: 2025-10-31 | 
            本文内容基于国际标准和主流激光器厂商技术资料,供工程技术人员参考学习使用。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

