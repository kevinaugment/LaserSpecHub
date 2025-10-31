import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import ChillerCalculatorForm from '@/components/calculators/chiller-calculator-form';

export const metadata: Metadata = {
  title: '冷却器容量计算器 | Chiller Sizing - LaserSpecHub',
  description:
    '根据激光类型、功率、环境温度与占空比估算所需制冷量与水流量，辅助冷却器选型。',
  alternates: { canonical: 'https://laserspechub.com/tools/chiller-calculator' },
  openGraph: {
    title: '冷却器容量计算器',
    description: '输入工况，获得所需制冷量（kW/kcal·h）与建议水流量（L/min）。',
    type: 'website',
    url: 'https://laserspechub.com/tools/chiller-calculator',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '冷却器容量计算器',
  applicationCategory: 'EngineeringApplication',
  offers: { '@type': 'Offer', price: '0' },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="WebApplication" data={structuredData} />
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">冷却器容量计算器</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          按激光类型与工况估算所需制冷量与水流量，供冷却器容量选型参考。
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>输入参数</CardTitle>
        </CardHeader>
        <CardContent>
          <ChillerCalculatorForm />
        </CardContent>
      </Card>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>相关工具</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/power-calculator" className="underline">
                激光功率需求计算器
              </Link>
            </div>
            <div>
              <Link href="/tools/power-density-calculator" className="underline">
                功率密度计算器
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>建议阅读</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/guides/safety-operations" className="underline">
                激光切割安全操作规程
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


