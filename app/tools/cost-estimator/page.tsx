import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import CostEstimatorForm from '@/components/calculators/cost-estimator-form';

export const metadata: Metadata = {
  title: '激光切割成本估算器 | Cost Estimator - LaserSpecHub',
  description:
    '按切割长度、材料、板厚、功率、电价与气体等输入计算材料、电力、气体、折旧、人工成本与占比，输出总成本。',
  alternates: { canonical: 'https://laserspechub.com/tools/cost-estimator' },
  openGraph: {
    title: '激光切割成本估算器',
    description: '材料、电力、气体、折旧、人工分项成本与总成本估算。',
    type: 'website',
    url: 'https://laserspechub.com/tools/cost-estimator',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '激光切割成本估算器',
  applicationCategory: 'EngineeringApplication',
  offers: { '@type': 'Offer', price: '0' },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="WebApplication" data={structuredData} />
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">激光切割成本估算器</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          分项计算材料、电力、气体、折旧与人工成本，帮助进行报价与工艺优化。
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>输入参数</CardTitle>
        </CardHeader>
        <CardContent>
          <CostEstimatorForm />
        </CardContent>
      </Card>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>相关工具</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/kerf-calculator" className="underline">
                切割缝宽计算器
              </Link>
            </div>
            <div>
              <Link href="/tools/power-density-calculator" className="underline">
                功率密度计算器
              </Link>
            </div>
            <div>
              <Link href="/tools/chiller-calculator" className="underline">
                冷却器容量计算器
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
              <Link href="/guides/process-optimization-guide" className="underline">
                激光切割工艺优化指南
              </Link>
            </div>
            <div>
              <Link href="/guides/nesting-optimization-guide" className="underline">
                排版优化指南
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


