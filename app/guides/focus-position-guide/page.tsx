import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser Cutting Focus Position Guide - LaserSpecHub',
  description:
    'Detailed laser cutting focus position adjustment guide. Includes definitions of positive, zero, and negative focus, step-by-step methods for ramp test and dot test, focus position recommendations for different materials, and diagnostic methods for focus errors. Based on TRUMPF and Bystronic operation manuals.',
  keywords: [
    'laser focus adjustment',
    'focus position',
    'focus calibration',
    'ramp test',
    'dot test',
    'laser focusing',
  ],
  alternates: {
    canonical: 'https://laserspechub.com/guides/focus-position-guide',
  },
  openGraph: {
    title: 'Laser Cutting Focus Position Guide - Complete Operation Steps',
    description:
      'Learn to correctly adjust and calibrate laser focus position, master practical methods like ramp test and dot test',
    type: 'article',
    url: 'https://laserspechub.com/guides/focus-position-guide',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '激光切割焦点位置调整指南',
  description: '详细的激光焦点位置调整操作步骤和方法',
  step: [
    {
      '@type': 'HowToStep',
      name: '理解焦点位置基础概念',
      text: '了解正焦、零焦、负焦的定义和对切割质量的影响',
    },
    {
      '@type': 'HowToStep',
      name: '选择适合的调整方法',
      text: '根据设备和需求选择斜板法、打点法或自动对焦系统',
    },
    {
      '@type': 'HowToStep',
      name: '执行焦点调整操作',
      text: '按照标准步骤进行焦点位置的调整和校准',
    },
    {
      '@type': 'HowToStep',
      name: '验证和微调',
      text: '通过试切验证焦点位置是否正确,并根据需要微调',
    },
  ],
};

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <StructuredData type="HowTo" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">激光切割焦点位置调整指南</h1>
        <p className="text-lg text-muted-foreground">
          掌握正确的焦点位置调整方法,提升切割质量和效率
        </p>
      </div>

      {/* Quick Start */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-lg">快速开始</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <strong>为什么需要调整焦点位置？</strong>
            <p className="text-muted-foreground mt-1">
              焦点位置直接影响能量密度分布,从而影响切割速度、切边质量和穿透能力。
              不同材料和厚度需要不同的焦点位置来获得最佳切割效果。
            </p>
          </div>
          <div>
            <strong>多久需要调整一次？</strong>
            <p className="text-muted-foreground mt-1">
              新设备安装时、更换聚焦镜片后、切割质量下降时、或每季度定期校准一次。
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 1. 焦点位置基础概念 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. 焦点位置基础概念</h2>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>焦点位置定义</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                <h4 className="font-semibold text-red-900 dark:text-red-200 mb-2">
                  负焦 (Negative Focus)
                </h4>
                <p className="text-sm text-red-800 dark:text-red-300 mb-2">
                  焦点在材料内部
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• 焦点位置: -1 ~ -5 mm</div>
                  <div>• 能量集中在内部</div>
                  <div>• 适合厚板切割</div>
                  <div>• 穿透能力强</div>
                </div>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-900 dark:text-green-200 mb-2">
                  零焦 (Zero Focus)
                </h4>
                <p className="text-sm text-green-800 dark:text-green-300 mb-2">
                  焦点在材料表面
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• 焦点位置: 0 mm</div>
                  <div>• 能量均匀分布</div>
                  <div>• 通用切割设置</div>
                  <div>• 平衡性能</div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">
                  正焦 (Positive Focus)
                </h4>
                <p className="text-sm text-blue-800 dark:text-blue-300 mb-2">
                  焦点在材料上方
                </p>
                <div className="text-xs text-muted-foreground space-y-1">
                  <div>• 焦点位置: +0.5 ~ +2 mm</div>
                  <div>• 能量集中在表面</div>
                  <div>• 适合薄板切割</div>
                  <div>• 表面质量好</div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <h4 className="font-semibold text-sm mb-2">焦点位置对切割质量的影响</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>穿透能力</strong>: 负焦增强穿透,正焦穿透能力较弱</li>
                <li>• <strong>切边质量</strong>: 零焦和轻微负焦通常切边最平滑</li>
                <li>• <strong>挂渣情况</strong>: 负焦过深容易在底部挂渣</li>
                <li>• <strong>切割速度</strong>: 负焦可提高速度,但过深会降低质量</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>不同材料的最佳焦点位置</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">材料类型</th>
                    <th className="text-left py-3 px-4">厚度范围</th>
                    <th className="text-left py-3 px-4">推荐焦点位置</th>
                    <th className="text-left py-3 px-4">备注</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4 font-medium">碳钢</td>
                    <td className="py-3 px-4">1-6mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        -1 ~ 0 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">氧气切割</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">碳钢</td>
                    <td className="py-3 px-4">6-20mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        -2 ~ -1 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">氧气切割,厚板</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">不锈钢</td>
                    <td className="py-3 px-4">1-10mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        -1 ~ 0 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">氮气切割</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">铝合金</td>
                    <td className="py-3 px-4">1-8mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        0 ~ +1 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">氮气切割,正焦或零焦</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">铜</td>
                    <td className="py-3 px-4">1-5mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        +0.5 ~ +1 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">高反射材料,正焦</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">亚克力</td>
                    <td className="py-3 px-4">1-20mm</td>
                    <td className="py-3 px-4">
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                        0 mm
                      </span>
                    </td>
                    <td className="py-3 px-4 text-xs text-muted-foreground">CO₂激光,零焦</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 2. 焦点位置调整方法 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. 焦点位置调整方法</h2>

        <p className="text-sm text-muted-foreground mb-4">
          结合智能控制可显著提升一次性成功率与一致性。部分厂商(如
          <a href="https://opmtlaser.com/technology/auto-focus-tracking" target="_blank" rel="noopener" className="mx-1 underline text-primary"> OPMT Laser</a>
          )提供自适应对焦/高度跟踪方案,在材料起伏和长时间加工条件下保持稳定焦点。
        </p>

        {/* 方法1: 斜板法 */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle>方法1: 斜板法(最常用)</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  精度高,操作简单,适合大多数设备
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold rounded-full">
                推荐
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">准备工具</h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4 list-disc">
                <li>45°斜铁或斜板(专用工具)</li>
                <li>测试板材(通常用薄不锈钢或碳钢)</li>
                <li>卷尺或钢尺</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">操作步骤</h4>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <div>
                    <strong>放置斜板</strong>
                    <p className="text-muted-foreground mt-1">
                      将45°斜铁放置在切割台面上,确保斜面朝向激光束。斜铁高度通常为40-60mm。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <div>
                    <strong>调整切割头高度</strong>
                    <p className="text-muted-foreground mt-1">
                      将切割头移动到斜板上方,调整Z轴高度,使喷嘴距离斜板表面约1-2mm(正常切割高度)。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  <div>
                    <strong>脉冲打点</strong>
                    <p className="text-muted-foreground mt-1">
                      在斜面上连续打多个脉冲点(5-10个),沿着斜面倾斜方向,间隔5-10mm。使用低功率(100-300W)和短脉冲(10-30ms)。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    4
                  </span>
                  <div>
                    <strong>观察结果</strong>
                    <p className="text-muted-foreground mt-1">
                      取下斜板,观察脉冲点。<strong className="text-foreground">最小、最圆、最深的点</strong>即为焦点位置。
                      使用卷尺测量该点到斜板底部的垂直高度。
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    5
                  </span>
                  <div>
                    <strong>计算焦点偏移</strong>
                    <p className="text-muted-foreground mt-1">
                      根据45°斜面几何关系,焦点位置偏移量 = 测量高度 - (斜板高度 / √2)。
                      调整Z轴参数使焦点位于所需位置(通常为材料表面或略内)。
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-sm mb-2 text-blue-900 dark:text-blue-200">
                结果判读技巧
              </h4>
              <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-300">
                <li>• <strong>最深的点</strong>: 能量密度最高,即为焦点位置</li>
                <li>• <strong>点的形状</strong>: 应该是圆形,如果是椭圆说明光轴不正</li>
                <li>• <strong>点的大小</strong>: 焦点处光斑最小,偏离焦点则变大</li>
                <li>• <strong>重复性</strong>: 建议测量2-3次取平均值,确保准确性</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 方法2: 打点法 */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>方法2: 打点法</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              简单快速,适合快速检查和粗调
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">适用场景</h4>
              <ul className="space-y-1 text-sm text-muted-foreground ml-4 list-disc">
                <li>快速检查焦点是否偏移</li>
                <li>没有专用斜板工具时的替代方法</li>
                <li>定期维护时的快速验证</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">操作步骤</h4>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>在平板材料上,在不同Z高度打多个脉冲点(间隔2-3mm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>观察哪个点最小、最圆、穿透最深</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>该位置即为当前焦点,调整Z轴使其与目标位置一致</span>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded border border-yellow-200 dark:border-yellow-800">
              <p className="text-xs text-yellow-800 dark:text-yellow-300">
                <strong>注意:</strong> 打点法精度较低,仅适合快速检查。精确调整建议使用斜板法。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 方法3: 自动对焦系统 */}
        <Card>
          <CardHeader>
            <CardTitle>方法3: 自动对焦系统</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              高端设备配备,自动化程度高
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-2">电容式对焦原理</h4>
              <p className="text-sm text-muted-foreground">
                利用喷嘴与材料表面之间的电容变化,自动检测并调整焦点位置。
                适用于不平整材料或需要频繁切换厚度的场景。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">操作流程</h4>
              <ol className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>在控制系统中启用自动对焦功能</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>设置目标焦点位置偏移量(如-1mm)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>系统自动检测材料表面并调整Z轴</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>开始切割,系统实时跟踪焦点位置</span>
                </li>
              </ol>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-2">校准频率建议</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• <strong>每天</strong>: 检查电容传感器清洁度</li>
                <li>• <strong>每周</strong>: 验证校准精度(用标准块)</li>
                <li>• <strong>每月</strong>: 重新校准系统(如发现偏差)</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 3. 焦点位置错误的诊断 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. 焦点位置错误的诊断</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">焦点过高的切割特征</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>切割不穿透</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      能量密度不足以穿透材料底部
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>底部有毛刺或挂渣</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      能量不足导致熔融物无法完全吹出
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>切割速度需要降低很多</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      补偿能量密度不足
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>表面过度烧蚀</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      能量集中在表面,底部能量不足
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800">
                <p className="text-xs font-semibold text-green-900 dark:text-green-200">
                  解决方案: 降低Z轴位置,使焦点下移
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">焦点过低的切割特征</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>表面切缝过宽</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      焦点在内部,表面光斑较大
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>表面质量差,粗糙度高</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      表面能量密度不足
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>底部切口过窄或烧边</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      能量集中在底部
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">×</span>
                  <div>
                    <strong>切口不垂直,上宽下窄</strong>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      能量分布不均
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 dark:bg-green-950/20 rounded border border-green-200 dark:border-green-800">
                <p className="text-xs font-semibold text-green-900 dark:text-green-200">
                  解决方案: 提高Z轴位置,使焦点上移
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle>快速诊断流程图</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border">
                <div className="font-semibold mb-3">症状 → 可能原因 → 解决方案</div>
                
                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-32 flex-shrink-0 font-medium">不穿透</span>
                    <span className="flex-1 text-muted-foreground">焦点过高或功率不足</span>
                    <span className="w-28 text-right text-green-600 dark:text-green-400">降低Z轴</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-32 flex-shrink-0 font-medium">表面质量差</span>
                    <span className="flex-1 text-muted-foreground">焦点过低</span>
                    <span className="w-28 text-right text-green-600 dark:text-green-400">提高Z轴</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-32 flex-shrink-0 font-medium">底部挂渣</span>
                    <span className="flex-1 text-muted-foreground">焦点过高或气压不足</span>
                    <span className="w-28 text-right text-green-600 dark:text-green-400">降低Z轴或增压</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-32 flex-shrink-0 font-medium">切缝上宽下窄</span>
                    <span className="flex-1 text-muted-foreground">焦点过低</span>
                    <span className="w-28 text-right text-green-600 dark:text-green-400">提高Z轴</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-32 flex-shrink-0 font-medium">切缝过宽</span>
                    <span className="flex-1 text-muted-foreground">焦点偏离或功率过高</span>
                    <span className="w-28 text-right text-green-600 dark:text-green-400">重新校准</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4. 常见问题解答 */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. 常见问题解答(FAQ)</h2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Q1: 多久需要重新校准焦点？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-2">
              <p><strong>A:</strong> 取决于使用频率和精度要求:</p>
              <ul className="ml-4 space-y-1 text-muted-foreground list-disc">
                <li><strong>高精度加工</strong>: 每周检查,发现偏差立即校准</li>
                <li><strong>通用切割</strong>: 每月定期校准一次</li>
                <li><strong>必须校准情况</strong>: 更换镜片后、撞头后、切割质量明显下降时</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Q2: 镜片污染如何影响焦点位置？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>A:</strong> 镜片污染不会改变物理焦点位置,但会:</p>
              <ul className="mt-2 ml-4 space-y-1 text-muted-foreground list-disc">
                <li>降低透光率,导致能量密度下降</li>
                <li>引起光束畸变,影响光斑质量</li>
                <li>造成类似"焦点偏离"的切割效果</li>
                <li>建议每天清洁保护镜片,每周检查聚焦镜片</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Q3: 不同镜头焦距如何选择？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>A:</strong> 焦距影响焦斑大小和焦深:</p>
              <div className="mt-2 space-y-2 text-muted-foreground">
                <div>• <strong>短焦距(50-75mm)</strong>: 焦斑小,精度高,适合薄板精密切割</div>
                <div>• <strong>标准焦距(127mm/5英寸)</strong>: 平衡性能,最常用</div>
                <div>• <strong>长焦距(190mm以上)</strong>: 焦深大,容错性高,适合厚板切割</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Q4: 自动对焦系统还需要手动校准吗？</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p><strong>A:</strong> 需要。自动对焦系统虽然方便,但:</p>
              <ul className="mt-2 ml-4 space-y-1 text-muted-foreground list-disc">
                <li>系统本身需要定期校准(通常每月一次)</li>
                <li>不同材料的电容特性不同,可能影响检测精度</li>
                <li>建议每季度用斜板法验证自动对焦的准确性</li>
                <li>首次使用新材料时,应手动验证焦点位置</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Links */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
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
                查看不同材料的推荐焦点位置
              </p>
            </div>
            <div>
              <Link href="/guides/troubleshooting-guide" className="underline hover:text-primary">
                激光切割故障排除指南
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                诊断和解决切割质量问题
              </p>
            </div>
            <div>
              <Link href="/guides/lens-specifications" className="underline hover:text-primary">
                激光聚焦镜片规格表
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                了解不同焦距镜片的特性
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>相关工具</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/power-density-calculator" className="underline hover:text-primary">
                激光功率密度计算器
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                计算不同焦点位置的功率密度
              </p>
            </div>
            <div>
              <Link href="/tools/kerf-calculator" className="underline hover:text-primary">
                激光切割缝宽计算器
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                焦点位置影响切缝宽度
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
            <li>TRUMPF 操作手册 - 激光切割机焦点校准程序</li>
            <li>Bystronic 培训资料 - 焦点位置调整与优化</li>
            <li>ISO 9013 - 热切割质量与公差标准</li>
            <li>行业专家经验和最佳实践</li>
          </ul>
          <p className="mt-3">
            更新日期: 2025-10-31 | 
            本指南内容基于主流激光设备制造商操作手册和行业标准,供操作人员参考学习使用。
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

