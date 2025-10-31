import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: '激光切割喷嘴选择指南 | Nozzle Selection Guide - LaserSpecHub',
  description:
    '全面的激光切割喷嘴选择指南。详解单层、双层、高速喷嘴的特点,喷嘴直径与材料厚度的匹配关系,喷嘴高度设置方法,以及维护保养技巧。基于Precitec、Raytools技术手册。',
  keywords: [
    '激光喷嘴',
    'nozzle selection',
    '喷嘴选择',
    '喷嘴直径',
    '切割喷嘴',
  ],
  alternates: {
    canonical: 'https://laserspechub.com/guides/nozzle-selection-guide',
  },
  openGraph: {
    title: '激光切割喷嘴选择指南 - 如何选择合适的喷嘴',
    description:
      '了解不同类型喷嘴的特点,掌握喷嘴选择和维护的最佳实践',
    type: 'article',
    url: 'https://laserspechub.com/guides/nozzle-selection-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '激光切割喷嘴选择指南',
  description: '激光切割喷嘴类型、选择标准和维护指南',
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
        <h1 className="text-3xl font-bold mb-3">激光切割喷嘴选择指南</h1>
        <p className="text-lg text-muted-foreground">
          选择正确的喷嘴,提升切割质量和效率
        </p>
      </div>

      {/* 1. 喷嘴类型分类 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. 喷嘴类型分类</h2>

        <h3 className="text-xl font-semibold mb-4 mt-6">按层数分类</h3>
        
        <div className="grid gap-6 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">单层喷嘴</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong className="text-blue-600 dark:text-blue-400">结构特点</strong>
                <p className="text-muted-foreground mt-1">
                  最简单的喷嘴结构,一个锥形通道,气体从喷嘴孔直接喷出。
                </p>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">应用场景</strong>
                <ul className="mt-1 space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>薄到中等厚度切割(1-10mm)</li>
                  <li>通用加工场景</li>
                  <li>成本敏感型应用</li>
                </ul>
              </div>
              <div>
                <strong className="text-green-500">✓</strong> 优点: 成本低,通用性好<br />
                <strong className="text-red-500">✗</strong> 缺点: 气流不如双层稳定
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">双层喷嘴</CardTitle>
              <span className="px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold rounded mt-1 inline-block">
                推荐
              </span>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong className="text-blue-600 dark:text-blue-400">结构特点</strong>
                <p className="text-muted-foreground mt-1">
                  内外两层结构,外层为保护气流,内层为切割气流,气体分布更均匀。
                </p>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">应用场景</strong>
                <ul className="mt-1 space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>中厚板切割(5-20mm)</li>
                  <li>高质量切割要求</li>
                  <li>不锈钢氮气切割</li>
                </ul>
              </div>
              <div>
                <strong className="text-green-500">✓</strong> 优点: 气流稳定,质量好<br />
                <strong className="text-red-500">✗</strong> 缺点: 价格较高
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">高速喷嘴</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <strong className="text-blue-600 dark:text-blue-400">结构特点</strong>
                <p className="text-muted-foreground mt-1">
                  特殊气动设计,拉瓦尔(Laval)型喷管,超音速气流。
                </p>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">应用场景</strong>
                <ul className="mt-1 space-y-1 text-muted-foreground ml-4 list-disc">
                  <li>薄板极速切割(≤3mm)</li>
                  <li>高速生产线</li>
                  <li>追求最高速度</li>
                </ul>
              </div>
              <div>
                <strong className="text-green-500">✓</strong> 优点: 速度极快<br />
                <strong className="text-red-500">✗</strong> 缺点: 价格昂贵,寿命较短
              </div>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-4 mt-8">按材质分类</h3>

        <Card>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">材质</th>
                    <th className="text-left py-3 px-4">导热性能</th>
                    <th className="text-left py-3 px-4">耐磨性</th>
                    <th className="text-left py-3 px-4">寿命</th>
                    <th className="text-left py-3 px-4">成本</th>
                    <th className="text-left py-3 px-4">适用场景</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4 font-medium">纯铜</td>
                    <td className="py-3 px-4">
                      <span className="text-green-600 dark:text-green-400">优秀</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-orange-600 dark:text-orange-400">一般</span>
                    </td>
                    <td className="py-3 px-4">120h</td>
                    <td className="py-3 px-4 text-green-600 dark:text-green-400">低</td>
                    <td className="py-3 px-4 text-xs">通用切割,成本敏感</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">镀铬铜</td>
                    <td className="py-3 px-4">
                      <span className="text-green-600 dark:text-green-400">优秀</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-green-600 dark:text-green-400">良好</span>
                    </td>
                    <td className="py-3 px-4">180h (+50%)</td>
                    <td className="py-3 px-4 text-orange-600 dark:text-orange-400">中</td>
                    <td className="py-3 px-4 text-xs">高强度生产,性价比最佳</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">合金喷嘴</td>
                    <td className="py-3 px-4">
                      <span className="text-blue-600 dark:text-blue-400">良好</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-green-600 dark:text-green-400">优秀</span>
                    </td>
                    <td className="py-3 px-4">240h (+100%)</td>
                    <td className="py-3 px-4 text-red-600 dark:text-red-400">高</td>
                    <td className="py-3 px-4 text-xs">极端工况,特殊应用</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. 喷嘴直径选择 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. 喷嘴直径选择</h2>

        <p className="text-sm text-muted-foreground mb-4">
          为了在不同材料与厚度下快速获得稳定质量,可结合厂商提供的参数库。像
          <a href="https://opmtlaser.com/technology/nozzle-parameter-library" target="_blank" rel="noopener" className="mx-1 underline text-primary"> OPMT Laser</a>
          提供按材质/厚度/气体的喷嘴直径与压力推荐,能显著缩短调参时间。
        </p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>直径与应用对应表</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">喷嘴直径(mm)</th>
                    <th className="text-left py-3 px-4">适用材料厚度</th>
                    <th className="text-left py-3 px-4">适用气体</th>
                    <th className="text-left py-3 px-4">切割特点</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4 font-medium">ø 0.8 - 1.0</td>
                    <td className="py-3 px-4">0.5-3mm</td>
                    <td className="py-3 px-4">氧气</td>
                    <td className="py-3 px-4 text-muted-foreground">薄板高速,精细切割</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">ø 1.2 - 1.5</td>
                    <td className="py-3 px-4">3-8mm</td>
                    <td className="py-3 px-4">氧气/氮气</td>
                    <td className="py-3 px-4 text-muted-foreground">通用型,最常用</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">ø 1.8 - 2.0</td>
                    <td className="py-3 px-4">8-15mm</td>
                    <td className="py-3 px-4">氧气/氮气</td>
                    <td className="py-3 px-4 text-muted-foreground">中厚板切割</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">ø 2.5 - 3.0</td>
                    <td className="py-3 px-4">15-25mm</td>
                    <td className="py-3 px-4">氧气</td>
                    <td className="py-3 px-4 text-muted-foreground">厚板切割</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">ø 3.5 - 5.0</td>
                    <td className="py-3 px-4">25mm以上</td>
                    <td className="py-3 px-4">氧气</td>
                    <td className="py-3 px-4 text-muted-foreground">超厚板专用</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
          <CardHeader>
            <CardTitle className="text-lg">直径选择原则</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-blue-900 dark:text-blue-200">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">1.</span>
                <span><strong>越薄选越小</strong>: 薄板用小喷嘴,能量更集中,速度更快</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">2.</span>
                <span><strong>越厚选越大</strong>: 厚板需要大喷嘴,保证气流量和穿透力</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">3.</span>
                <span><strong>氮气比氧气大</strong>: 氮气切割通常需要比氧气大0.2-0.5mm的喷嘴</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">4.</span>
                <span><strong>宁大勿小</strong>: 喷嘴太小容易烧毁,选择时略大于理论值更安全</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 3. 喷嘴高度设置 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. 喷嘴高度(离焦量)设置</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>不同材料的喷嘴高度</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="font-semibold text-sm mb-3">碳钢(氧气切割)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 喷嘴高度: 0.5-1.0mm</li>
                  <li>• 特点: 较低的高度保证气体压力</li>
                  <li>• 注意: 避免喷溅粘附喷嘴</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="font-semibold text-sm mb-3">不锈钢(氮气切割)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 喷嘴高度: 0.8-1.5mm</li>
                  <li>• 特点: 稍高的高度减少碰撞风险</li>
                  <li>• 注意: 保持高度一致性</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="font-semibold text-sm mb-3">铝材(氮气切割)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 喷嘴高度: 1.0-2.0mm</li>
                  <li>• 特点: 更高的高度防止反射损伤</li>
                  <li>• 注意: 使用防反射喷嘴</li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="font-semibold text-sm mb-3">非金属(空气)</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 喷嘴高度: 0.5-1.5mm</li>
                  <li>• 特点: 根据材料易燃性调整</li>
                  <li>• 注意: 火焰控制</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>喷嘴高度自动控制</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <div>
              <strong className="text-blue-600 dark:text-blue-400">电容式高度控制原理</strong>
              <p className="text-muted-foreground mt-1">
                喷嘴与材料表面形成电容,系统通过检测电容变化自动调整喷嘴高度,
                保持恒定的喷嘴-工件间距。
              </p>
            </div>
            
            <div>
              <strong className="text-green-600 dark:text-green-400">设置方法</strong>
              <ol className="mt-2 space-y-1 ml-4 list-decimal text-muted-foreground">
                <li>在控制系统中启用电容式高度跟踪</li>
                <li>设置目标电容值(对应特定高度)</li>
                <li>校准零点(喷嘴接触工件时的电容值)</li>
                <li>设置跟踪速度和灵敏度</li>
              </ol>
            </div>

            <div>
              <strong className="text-orange-600 dark:text-orange-400">校准频率</strong>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>• <strong>每天</strong>: 检查电容传感器清洁度</li>
                <li>• <strong>每周</strong>: 验证零点校准</li>
                <li>• <strong>更换喷嘴后</strong>: 必须重新校准</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4. 喷嘴维护与寿命管理 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. 喷嘴维护与寿命管理</h2>

        <div className="grid gap-6 md:grid-cols-2 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">喷嘴检查项目</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">1.</span>
                  <div>
                    <strong>外观检查</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      检查是否有变形、裂纹、烧蚀痕迹
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">2.</span>
                  <div>
                    <strong>孔径测量</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      使用针规测量,孔径增大10%应更换
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">3.</span>
                  <div>
                    <strong>同心度检查</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      激光束与喷嘴孔不同心会导致切割倾斜
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">4.</span>
                  <div>
                    <strong>螺纹检查</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      螺纹磨损会导致喷嘴松动
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">寿命延长技巧</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>每日清洁</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      用柔软布擦拭喷嘴外表面,去除喷溅
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>避免碰撞</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      使用防碰撞传感器,设置合理的安全高度
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>正确存储</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      放在干燥、防尘的容器中,避免划伤
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  <div>
                    <strong>定期更换</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      不要等到完全损坏才更换,影响切割质量
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="text-lg">常见损坏原因</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-12 text-center font-bold text-red-600 dark:text-red-400">50%</span>
                <div>
                  <strong>碰撞损坏</strong>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    喷嘴与工件或切割台碰撞,导致变形或断裂。<br />
                    <strong>预防:</strong> 启用防碰撞保护,定期检查切割高度传感器
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-12 text-center font-bold text-orange-600 dark:text-orange-400">30%</span>
                <div>
                  <strong>喷溅附着</strong>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    熔融金属喷溅粘附在喷嘴内壁,影响气流。<br />
                    <strong>预防:</strong> 调整切割参数,使用防粘涂层喷嘴,及时清洁
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-12 text-center font-bold text-yellow-600 dark:text-yellow-400">20%</span>
                <div>
                  <strong>正常磨损</strong>
                  <p className="text-muted-foreground text-xs mt-0.5">
                    高温气流长期冲刷导致孔径增大。<br />
                    <strong>对策:</strong> 定期测量孔径,建立更换计划
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 5. 品牌与型号对照 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">5. 品牌与型号对照</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>主流品牌喷嘴对比</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold mb-2">Precitec (德国)</h4>
                <p className="text-muted-foreground text-xs">
                  • 高端品牌,质量可靠,价格昂贵<br />
                  • ProCutter系列:单层/双层喷嘴,适配主流激光设备<br />
                  • HighSpeed系列:超音速喷嘴,薄板极速切割
                </p>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold mb-2">Raytools (瑞士)</h4>
                <p className="text-muted-foreground text-xs">
                  • 性价比高,市场占有率大<br />
                  • BM系列:通用喷嘴,广泛兼容<br />
                  • AG系列:自适应喷嘴,自动调节高度
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="font-semibold mb-2">WSX (中国)</h4>
                <p className="text-muted-foreground text-xs">
                  • 国产品牌,性价比极高<br />
                  • D系列:单层喷嘴,适合通用切割<br />
                  • HP系列:高性能双层喷嘴
                </p>
              </div>

              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <h4 className="font-semibold mb-2">其他国产品牌</h4>
                <p className="text-muted-foreground text-xs">
                  柏楚、奥森、嘉泰等国产品牌,质量稳定,价格实惠,适合成本敏感型应用
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>通用性与兼容性</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <strong>螺纹规格对照</strong>
              <p className="text-muted-foreground mt-1 text-xs">
                • M11×1: Precitec ProCutter系列标准<br />
                • M14×1: Raytools BM系列标准<br />
                • M12×1: WSX及部分国产品牌<br />
                • M16×1.5: 部分老式设备
              </p>
            </div>

            <div>
              <strong>跨品牌替代方案</strong>
              <p className="text-muted-foreground mt-1 text-xs">
                大部分国产喷嘴可替代进口品牌,但需注意:<br />
                • 螺纹规格必须匹配<br />
                • 喷嘴高度(离焦量)可能不同,需重新校准<br />
                • 建议购买同品牌备件,避免兼容性问题
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 6. 喷嘴故障诊断 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">6. 喷嘴故障诊断</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">症状1: 切割断面倾斜</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong className="text-red-600 dark:text-red-400">可能原因:</strong> 喷嘴不同心
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">诊断方法:</strong> 
                <span className="text-muted-foreground ml-2">
                  用红光指示器检查激光束是否通过喷嘴孔中心
                </span>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">解决方案:</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>调整喷嘴位置或更换喷嘴</li>
                  <li>检查切割头安装是否正确</li>
                  <li>校准光路对中</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">症状2: 切割质量突然下降</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong className="text-red-600 dark:text-red-400">可能原因:</strong> 喷嘴磨损或堵塞
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">诊断方法:</strong> 
                <span className="text-muted-foreground ml-2">
                  目视检查喷嘴孔,测量孔径是否增大
                </span>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">解决方案:</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>清洁或更换喷嘴</li>
                  <li>检查气体纯度和压力</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">症状3: 频繁碰撞报警</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong className="text-red-600 dark:text-red-400">可能原因:</strong> 喷嘴变形或高度传感器故障
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">诊断方法:</strong> 
                <span className="text-muted-foreground ml-2">
                  目视检查喷嘴是否变形,测试高度传感器
                </span>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">解决方案:</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>更换变形喷嘴</li>
                  <li>校准高度传感器</li>
                  <li>检查切割程序Z轴设置</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">症状4: 喷嘴烧毁</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <strong className="text-red-600 dark:text-red-400">可能原因:</strong> 激光反射或喷嘴过小
              </div>
              <div>
                <strong className="text-blue-600 dark:text-blue-400">诊断方法:</strong> 
                <span className="text-muted-foreground ml-2">
                  检查喷嘴内壁是否有烧蚀痕迹
                </span>
              </div>
              <div>
                <strong className="text-green-600 dark:text-green-400">解决方案:</strong>
                <ul className="mt-1 ml-4 list-disc text-muted-foreground">
                  <li>使用更大直径喷嘴</li>
                  <li>检查切割参数是否过于激进</li>
                  <li>高反射材料使用专用防反射喷嘴</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Links */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>相关工具</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/nozzle-life-calculator" className="underline hover:text-primary">
                喷嘴寿命预测器
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                预测喷嘴使用寿命和更换周期
              </p>
            </div>
            <div>
              <Link href="/tools/kerf-calculator" className="underline hover:text-primary">
                激光切割缝宽计算器
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                喷嘴直径影响切缝宽度
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
              <Link href="/guides/material-thickness-parameters" className="underline hover:text-primary">
                材料厚度切割参数表
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                不同厚度对应的喷嘴直径
              </p>
            </div>
            <div>
              <Link href="/guides/maintenance-schedule" className="underline hover:text-primary">
                激光设备维护周期表
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                包含喷嘴的完整维护计划
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Data Source */}
      <Card className="mt-8 bg-gray-50 dark:bg-gray-900">
        <CardContent className="pt-6 text-xs text-muted-foreground">
          <strong>参考资料:</strong>
          <ul className="mt-2 space-y-1 ml-4 list-disc">
            <li>Precitec 技术手册 - ProCutter喷嘴系列</li>
            <li>Raytools 产品目录 - 切割头与喷嘴选型指南</li>
            <li>行业专家经验和最佳实践</li>
          </ul>
          <p className="mt-3">
            更新日期: 2025-10-31 | 
            本指南内容基于主流喷嘴制造商技术手册和行业实践,供用户参考。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

