import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import KerfCalculatorForm from '@/components/calculators/kerf-calculator-form';

export const metadata: Metadata = {
  title: '激光切割缝宽计算器 | Kerf Calculator - LaserSpecHub',
  description:
    '在线激光切割缝宽（kerf）计算器。根据激光功率、材料类型、厚度、喷嘴直径与切割速度估算切缝宽度，并给出补偿建议与排版参考。',
  alternates: {
    canonical: 'https://laserspechub.com/tools/kerf-calculator',
  },
  openGraph: {
    title: '激光切割缝宽计算器 - 精准估算切缝宽度',
    description:
      '输入功率、材料、厚度、喷嘴直径与速度，获得kerf估算、补偿与排版建议。',
    type: 'website',
    url: 'https://laserspechub.com/tools/kerf-calculator',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '激光切割缝宽计算器',
  applicationCategory: 'EngineeringApplication',
  offers: { '@type': 'Offer', price: '0' },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="WebApplication" data={structuredData} />
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">激光切割缝宽计算器（Kerf）</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          依据输入的工艺条件，估算切缝宽度，并输出补偿与排版建议。输入范围含常见金属材料与厚度区间。
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>输入参数</CardTitle>
        </CardHeader>
        <CardContent>
          <KerfCalculatorForm />
        </CardContent>
      </Card>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>相关工具</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/cost-estimator" className="underline">
                激光切割成本估算器
              </Link>
            </div>
            <div>
              <Link href="/tools/power-calculator" className="underline">
                激光功率需求计算器
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
              <Link href="/guides/nesting-optimization-guide" className="underline">
                激光切割排版优化指南
              </Link>
            </div>
            <div>
              <Link href="/guides/material-thickness-parameters" className="underline">
                材料厚度切割参数速查表
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <p className="mt-8 text-xs text-muted-foreground">
        注：本工具为估算用途，具体参数应结合制造商技术手册、现场试切与质量标准综合确定。
      </p>
    </div>
  );
}


