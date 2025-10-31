import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import NozzleLifeCalculatorForm from '@/components/calculators/nozzle-life-calculator-form';

export const metadata: Metadata = {
  title: '激光切割喷嘴寿命预测器 | Nozzle Life Calculator - LaserSpecHub',
  description:
    '在线激光切割喷嘴寿命预测计算器。根据喷嘴材质、类型、切割材料、功率等参数，预测喷嘴使用寿命、更换周期和月度成本，提供延长寿命建议。',
  keywords: ['喷嘴寿命', 'nozzle life calculator', '喷嘴更换周期', '激光切割维护成本'],
  alternates: {
    canonical: 'https://laserspechub.com/tools/nozzle-life-calculator',
  },
  openGraph: {
    title: '激光切割喷嘴寿命预测器 - 精准预测更换周期',
    description:
      '输入喷嘴配置和切割参数，获取使用寿命预测、成本分析和延长寿命建议。',
    type: 'website',
    url: 'https://laserspechub.com/tools/nozzle-life-calculator',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '激光切割喷嘴寿命预测器',
  applicationCategory: 'EngineeringApplication',
  offers: { '@type': 'Offer', price: '0' },
  description: '预测激光切割喷嘴使用寿命，优化维护成本',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <StructuredData type="WebApplication" data={structuredData} />
      
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">激光切割喷嘴寿命预测器</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          基于喷嘴材质、切割工况和工作强度，预测喷嘴使用寿命和更换周期，帮助您优化维护计划和控制成本。
        </p>
      </div>

      <div className="mb-8">
        <NozzleLifeCalculatorForm />
      </div>

      {/* 关于喷嘴寿命的说明 */}
      <div className="mt-10 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>影响喷嘴寿命的主要因素</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <h3 className="font-medium mb-1">1. 喷嘴材质</h3>
              <p className="text-muted-foreground">
                • <strong>纯铜喷嘴</strong>: 导热性能好，成本低，基础寿命约120小时<br />
                • <strong>镀铬铜喷嘴</strong>: 耐磨性提升50%，寿命约180小时，适合高强度生产<br />
                • <strong>合金喷嘴</strong>: 最耐用，寿命可达240小时，但成本较高
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">2. 切割工况</h3>
              <p className="text-muted-foreground">
                • <strong>功率</strong>: 高功率增加热负荷，加速磨损<br />
                • <strong>材料厚度</strong>: 厚板切割时间长，喷嘴暴露在高温环境更久<br />
                • <strong>辅助气体</strong>: 氧气切割温度高，氮气相对温和
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">3. 喷嘴损坏的主要原因</h3>
              <p className="text-muted-foreground">
                • <strong>碰撞损坏 (50%)</strong>: 与工件或切割台碰撞导致变形<br />
                • <strong>喷溅附着 (30%)</strong>: 金属喷溅粘附在喷嘴内壁<br />
                • <strong>正常磨损 (20%)</strong>: 长期高温氧化和气流冲刷
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>相关工具</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <Link href="/tools/cost-estimator" className="underline hover:text-primary">
                  激光切割成本估算器
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">计算完整的运营成本</p>
              </div>
              <div>
                <Link href="/tools/chiller-calculator" className="underline hover:text-primary">
                  冷却器容量计算器
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">配套设备选型</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>相关指南</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>
                <Link href="/guides/nozzle-selection-guide" className="underline hover:text-primary">
                  激光切割喷嘴选择指南
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">如何选择合适的喷嘴</p>
              </div>
              <div>
                <Link href="/guides/maintenance-schedule" className="underline hover:text-primary">
                  激光设备维护周期表
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">完整的维护计划</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>延长喷嘴寿命的实用技巧</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ <strong>定期清洁</strong>: 每天检查喷嘴内壁，清除喷溅附着物</li>
              <li>✓ <strong>避免碰撞</strong>: 使用电容式高度跟踪系统，设置合理的安全高度</li>
              <li>✓ <strong>保持同心度</strong>: 定期检查激光束与喷嘴的同心度，偏差会导致局部过热</li>
              <li>✓ <strong>选对气体</strong>: 不锈钢切割优先使用氮气而非氧气，可延长寿命30%以上</li>
              <li>✓ <strong>备用喷嘴</strong>: 常备2-3个喷嘴，避免因喷嘴损坏导致停机</li>
              <li>✓ <strong>适时更换</strong>: 切割质量下降时及时更换，避免影响产品质量</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        数据声明：本计算器基于Precitec、Raytools等主流喷嘴厂商技术手册和行业实践经验，
        实际寿命受设备维护、操作习惯、环境条件等多种因素影响，结果仅供参考。
        数据更新日期：2025-10-31。
      </p>
    </div>
  );
}

