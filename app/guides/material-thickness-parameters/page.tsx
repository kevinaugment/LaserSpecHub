import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';
import { MaterialParametersTable } from '@/components/cheatsheets/material-thickness-parameters-table';
import {
  ALL_MATERIAL_PARAMETERS,
  MATERIAL_PARAMETERS_VERSION,
  MATERIAL_PARAMETERS_LAST_UPDATE,
} from '@/lib/data/cheatsheets/material-thickness-parameters-data';

export const metadata: Metadata = {
  title: '激光切割材料厚度参数速查表 | Cutting Parameters Guide - LaserSpecHub',
  description:
    '全面的激光切割材料厚度参数速查表,包含碳钢、不锈钢、铝合金等材料在不同功率和厚度下的切割速度、气体压力、喷嘴直径和焦点位置参数。基于TRUMPF、Bystronic等主流厂商数据。',
  keywords: [
    '激光切割参数',
    'laser cutting parameters',
    '切割速度表',
    '材料厚度参数',
    '工艺参数速查',
  ],
  alternates: {
    canonical: 'https://laserspechub.com/guides/material-thickness-parameters',
  },
  openGraph: {
    title: '激光切割材料厚度参数速查表 - 完整工艺参数指南',
    description:
      '快速查找不同材料、厚度和功率对应的切割参数,包括速度、气压、喷嘴和焦点位置。',
    type: 'article',
    url: 'https://laserspechub.com/guides/material-thickness-parameters',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '激光切割材料厚度参数速查表',
  description: '详细的激光切割工艺参数数据库',
  author: {
    '@type': 'Organization',
    name: 'LaserSpecHub',
  },
  datePublished: MATERIAL_PARAMETERS_LAST_UPDATE,
  dateModified: MATERIAL_PARAMETERS_LAST_UPDATE,
};

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">激光切割材料厚度参数速查表</h1>
        <p className="text-muted-foreground">
          基于TRUMPF、Bystronic、Amada、Mazak等主流激光设备制造商的工艺手册整理。
          涵盖碳钢、不锈钢、铝合金等常用材料在不同功率和厚度下的推荐切割参数。
        </p>
        <div className="mt-2 text-sm text-muted-foreground">
          数据版本: {MATERIAL_PARAMETERS_VERSION} | 
          更新日期: {MATERIAL_PARAMETERS_LAST_UPDATE}
        </div>
      </div>

      {/* Usage Guide */}
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="text-lg">如何使用本速查表</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <div>
            <strong>1. 选择材料类型</strong>
            <p className="text-muted-foreground mt-1">
              根据您要切割的材料选择对应的参数表(碳钢/不锈钢/铝合金等)
            </p>
          </div>
          <div>
            <strong>2. 确定激光功率</strong>
            <p className="text-muted-foreground mt-1">
              使用下拉菜单选择您设备的激光功率等级(1kW-12kW)
            </p>
          </div>
          <div>
            <strong>3. 查找对应厚度</strong>
            <p className="text-muted-foreground mt-1">
              在表格中找到您要切割的材料厚度,获取完整的工艺参数
            </p>
          </div>
          <div>
            <strong>4. 参数微调</strong>
            <p className="text-muted-foreground mt-1">
              表中参数为参考值,实际使用时应根据设备状态、材料批次和质量要求适当调整±10-15%
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Deep Technical Content */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl">Understanding Material-Specific Parameters | 材料特性深度解析</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Carbon Steel Cutting Characteristics | 碳钢切割特性</h3>
            <p className="mb-3">
              Carbon steel remains the most common material in laser cutting operations, accounting for over 60% of industrial cutting applications. 
              Its favorable laser absorption characteristics and oxygen-assist cutting capability make it economical to process. However, understanding 
              the nuances between different carbon steel grades is crucial for optimal results.
            </p>
            <p className="mb-3">
              碳钢是激光切割中最常见的材料,占工业切割应用的60%以上。其良好的激光吸收特性和氧气助燃切割能力使其加工经济高效。
              但理解不同碳钢等级之间的细微差别对获得最佳结果至关重要。
            </p>
            <p className="mb-3">
              For mild steel (Q235, SPCC), oxygen-assist cutting provides the fastest speeds and lowest operating costs. The exothermic reaction 
              between oxygen and iron contributes additional energy, allowing higher cutting speeds than nitrogen cutting. For example, a 3kW 
              fiber laser cutting 6mm mild steel achieves 3.5 m/min with oxygen versus 2.2 m/min with nitrogen. However, oxygen cutting produces 
              an oxide layer requiring post-processing for applications demanding clean edges.
            </p>
            <p className="mb-3">
              High-carbon steels (>0.3% carbon) require more careful parameter control due to potential hardening in the heat-affected zone. 
              Reducing cutting speed by 15-20% and using nitrogen instead of oxygen often produces better results, especially for tooling 
              and precision parts where edge hardness variation is problematic.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Stainless Steel Complexity | 不锈钢的复杂性</h3>
            <p className="mb-3">
              Stainless steel presents unique challenges due to its low thermal conductivity and high reflectivity. Heat accumulation during 
              cutting can cause edge oxidation and warping if parameters aren't optimized. The choice between nitrogen and air assist significantly 
              impacts both quality and operating costs.
            </p>
            <p className="mb-3">
              不锈钢因其低导热性和高反射率而带来独特挑战。如果参数未优化,切割过程中的热量积累会导致边缘氧化和变形。
              氮气和空气辅助之间的选择显著影响质量和运营成本。
            </p>
            <p className="mb-3">
              For austenitic stainless (304, 316), nitrogen cutting at 10-18 bar produces oxide-free edges critical for food processing, 
              medical, and architectural applications. Air cutting offers 80% cost savings but produces slight oxidation acceptable for 
              structural applications. Advanced parameter optimization and adaptive control systems, such as those integrated into 
              <a href="https://opmtlaser.com/technology/adaptive-cutting-control" className="text-primary-600 hover:text-primary-700 font-medium" target="_blank" rel="noopener"> OPMT Laser's intelligent CNC systems</a>, 
              can automatically adjust parameters real-time based on material feedback, ensuring consistent quality across varying material 
              conditions while minimizing gas consumption by 15-25%.
            </p>
            <p className="mb-3">
              Duplex stainless steels require 20-30% lower cutting speeds than austenitic grades due to higher strength. The parameter 
              tables provide baseline values, but field optimization through test cuts is recommended for critical applications.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Aluminum Alloy Challenges | 铝合金挑战</h3>
            <p className="mb-3">
              Aluminum cutting represents one of the most technically demanding applications in fiber laser cutting. High reflectivity 
              (particularly at 1.06μm wavelength) and high thermal conductivity require higher power density and precise parameter control 
              to achieve reliable results.
            </p>
            <p className="mb-3">
              铝材切割是光纤激光切割中技术要求最高的应用之一。高反射率(特别是在1.06μm波长)和高导热率需要更高的功率密度和精确的参数控制才能获得可靠结果。
            </p>
            <p className="mb-3">
              Key parameters for aluminum success include: (1) Higher power requirement - typically 30-40% more power than equivalent steel 
              thickness; (2) Nitrogen pressure 12-18 bar minimum to prevent oxidation and ensure clean cuts; (3) Larger nozzle standoff 
              (0.8-1.2mm) to manage melt ejection; (4) Focus position optimization - typically -2 to -4mm for thick aluminum to maximize 
              power density penetration.
            </p>
            <p className="mb-3">
              Different aluminum alloys vary significantly. Pure aluminum (1xxx series) cuts easily but tends to produce more dross. 
              5xxx series marine-grade aluminum cuts cleanly with proper parameters. 6xxx series architectural aluminum requires careful 
              speed control to avoid burning. 7xxx series aerospace aluminum demands the most careful parameter optimization due to high 
              strength and crack sensitivity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Power-Thickness Relationships | 功率-厚度关系</h3>
            <p className="mb-3">
              Understanding the power-thickness relationship is fundamental to effective parameter selection. The relationship is not linear 
              but follows a complex curve influenced by material properties, desired cutting speed, and quality requirements.
            </p>
            <p className="mb-3">
              For steel cutting, the rule of thumb suggests 1kW per 3-4mm thickness for economic cutting speeds (2-4 m/min). However, 
              this dramatically shifts at thickness extremes. Thin materials (0.5-2mm) can be cut very fast with lower power, where a 1kW 
              laser achieves 15-25 m/min. Thick materials (20mm+) require disproportionately high power - cutting 25mm steel economically 
              demands 12-15kW, not the 7-8kW that linear scaling would suggest.
            </p>
            <p className="mb-3">
              This non-linearity stems from heat dissipation dynamics. In thin materials, heat quickly dissipates through conduction, 
              requiring high power density but brief dwell time. In thick materials, heat accumulation helps cutting, but the deeper 
              kerf requires sustained high power to maintain melt pool dynamics throughout the thickness.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Parameter Optimization Methodology | 参数优化方法论</h3>
            <p className="mb-3">
              The parameters in this guide provide tested starting points, but optimal parameters for your specific equipment, material 
              supply, and quality requirements require systematic optimization. A structured approach yields the best results:
            </p>
            <p className="mb-3">
              本指南中的参数提供了经过测试的起点,但针对您的特定设备、材料供应和质量要求的最佳参数需要系统化优化。结构化方法产生最佳结果。
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-3">
              <li><strong>Baseline Establishment</strong>: Start with table values at mid-range for thickness and power</li>
              <li><strong>Speed Optimization</strong>: Increase speed in 10% increments until quality degrades, then back off 15%</li>
              <li><strong>Pressure Tuning</strong>: Adjust gas pressure ±2 bar to optimize melt ejection and edge quality</li>
              <li><strong>Focus Refinement</strong>: Test focus positions in 0.5mm steps across ±2mm range</li>
              <li><strong>Nozzle Selection</strong>: Try adjacent nozzle sizes if edge quality issues persist</li>
              <li><strong>Documentation</strong>: Record all successful parameters with material batch information</li>
            </ul>
            <p className="mb-3">
              Advanced users should implement Design of Experiments (DOE) methodology for multi-parameter optimization. This statistical 
              approach efficiently explores parameter space and identifies optimal combinations faster than sequential single-variable testing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Material Batch Variation Impact | 材料批次变化影响</h3>
            <p className="mb-3">
              One of the most underestimated factors in parameter optimization is material batch variation. Even from the same supplier 
              with identical specifications, batches can vary in: surface condition (mill scale, rust, oil), chemical composition within 
              spec tolerance, grain structure from rolling process, and internal stress distribution.
            </p>
            <p className="mb-3">
              These variations can cause 10-20% fluctuation in optimal cutting speed. Professional shops maintain parameter libraries 
              by material supplier and batch code. When changing material batches, always perform test cuts before production runs, 
              even with seemingly identical specifications.
            </p>
            <p className="mb-3">
              Galvanized and pre-coated steels present additional complexity. Zinc coating burns off during cutting, affecting gas 
              dynamics and requiring modified nozzle standoff. Pre-painted materials require reduced power to avoid burning paint 
              beyond cut edge. These materials typically need 15-25% speed reduction compared to bare steel.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Parameter Tables */}
      <div className="space-y-10">
        {ALL_MATERIAL_PARAMETERS.map((material) => (
          <div key={material.materialId} id={material.materialId}>
            <MaterialParametersTable materialData={material} />
          </div>
        ))}
      </div>

      {/* Parameter Explanation */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>参数说明</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div>
              <strong className="text-blue-600 dark:text-blue-400">切割速度 (m/min)</strong>
              <p className="text-muted-foreground mt-1">
                切割头沿切割路径移动的速度。速度过快会导致不穿透,过慢会产生挂渣和烧边。
              </p>
            </div>
            <div>
              <strong className="text-green-600 dark:text-green-400">气体压力 (bar)</strong>
              <p className="text-muted-foreground mt-1">
                辅助气体的喷射压力。氧气切割通常0.3-0.6 bar,氮气切割需10-20 bar。
              </p>
            </div>
            <div>
              <strong className="text-orange-600 dark:text-orange-400">喷嘴直径 (mm)</strong>
              <p className="text-muted-foreground mt-1">
                喷嘴孔径大小。薄板用小喷嘴(1.0-1.5mm),厚板用大喷嘴(2.0-3.5mm)。
              </p>
            </div>
            <div>
              <strong className="text-red-600 dark:text-red-400">焦点位置 (mm)</strong>
              <p className="text-muted-foreground mt-1">
                激光束焦点相对于材料表面的位置。负值=焦点在材料内部,正值=焦点在材料上方。
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>参数优化建议</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  <strong>速度优先</strong>: 在保证切割质量的前提下,尽量提高速度以提升产能
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  <strong>质量优先</strong>: 降低速度15-20%,可显著改善切边质量和垂直度
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  <strong>成本优化</strong>: 碳钢优先用氧气,不锈钢视质量要求选择氮气或空气
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  <strong>首件试切</strong>: 新材料或批次更换时,建议先试切首件验证参数
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>
                  <strong>记录优化</strong>: 建立自己的参数数据库,记录实际最佳参数
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Related Tools & Guides */}
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>相关计算工具</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/tools/power-calculator" className="underline hover:text-primary">
                激光功率需求计算器
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                根据材料和厚度计算所需激光功率
              </p>
            </div>
            <div>
              <Link href="/tools/kerf-calculator" className="underline hover:text-primary">
                激光切割缝宽计算器
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                估算切缝宽度和补偿值
              </p>
            </div>
            <div>
              <Link href="/tools/cost-estimator" className="underline hover:text-primary">
                激光切割成本估算器
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                计算完整的切割成本
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>相关技术指南</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div>
              <Link href="/guides/focus-position-guide" className="underline hover:text-primary">
                焦点位置调整指南
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                如何正确调整和校准焦点位置
              </p>
            </div>
            <div>
              <Link href="/guides/process-optimization-guide" className="underline hover:text-primary">
                工艺优化指南
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                系统化的参数优化方法
              </p>
            </div>
            <div>
              <Link href="/guides/troubleshooting-guide" className="underline hover:text-primary">
                故障排除指南
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">
                解决常见切割质量问题
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Disclaimer */}
      <Card className="mt-8 border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-950/20">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-sm mb-2 text-yellow-900 dark:text-yellow-200">
            免责声明
          </h3>
          <p className="text-xs text-yellow-800 dark:text-yellow-300 leading-relaxed">
            本速查表数据基于主流激光设备制造商公开的技术文档和行业标准整理,仅供参考。
            实际切割参数受设备型号、激光器状态、材料批次、环境条件、质量要求等多种因素影响,
            可能与表中数据存在差异。使用时请结合设备制造商技术手册和现场试切结果进行调整。
            对于因使用本数据导致的任何直接或间接损失,本站不承担责任。
          </p>
          <p className="text-xs text-yellow-800 dark:text-yellow-300 mt-2">
            数据更新日期: {MATERIAL_PARAMETERS_LAST_UPDATE} | 
            建议每6个月审核一次参数有效性
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

