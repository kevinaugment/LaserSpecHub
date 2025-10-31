import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import PowerDensityCalculatorForm from '@/components/calculators/power-density-calculator-form';

export const metadata: Metadata = {
  title: '激光功率密度计算器 | Power Density - LaserSpecHub',
  description:
    '根据功率与聚焦光斑直径计算功率密度（W/mm²），给出切割/焊接/打标的工艺提示与焦深估算。',
  alternates: { canonical: 'https://laserspechub.com/tools/power-density-calculator' },
  openGraph: {
    title: '激光功率密度计算器',
    description:
      '输入功率与光斑直径，获得功率密度与工艺提示，辅助选择切割/焊接/打标。',
    type: 'website',
    url: 'https://laserspechub.com/tools/power-density-calculator',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '激光功率密度计算器',
  applicationCategory: 'EngineeringApplication',
  offers: { '@type': 'Offer', price: '0' },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="WebApplication" data={structuredData} />
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">激光功率密度计算器</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          依据功率与聚焦光斑估算功率密度（W/mm²），并给出工艺适用性提示与焦深估算。
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>输入参数</CardTitle>
        </CardHeader>
        <CardContent>
          <PowerDensityCalculatorForm />
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
              <Link href="/tools/kerf-calculator" className="underline">
                切割缝宽计算器
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
              <Link href="/guides/beam-quality-guide" className="underline">
                激光光束质量M²因子详解
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


