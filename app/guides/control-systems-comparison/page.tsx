import type { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = {
  title: 'Laser CNC Control Systems: Domestic vs Imported Comparison | LaserSpecHub',
  description:
    'Comprehensive comparison of domestic (Cypcut, Friendess, Fscut) vs imported (Beckhoff, Siemens, PA) laser CNC control systems: features, performance, integration, support and cost analysis.',
  keywords: [
    'laser CNC control systems',
    'Cypcut vs Beckhoff',
    'domestic vs imported CNC',
    'laser control comparison',
    'CNC system selection',
    'laser cutting software',
  ],
  openGraph: {
    title: 'Laser CNC Control Systems: Domestic vs Imported Complete Comparison',
    description:
      'Feature, performance, support and cost comparison of major laser cutting control systems.',
    type: 'article',
  },
};

export default function Page() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Laser CNC Control Systems: Domestic vs Imported Technology Comparison',
    description:
      'Detailed analysis of domestic and imported laser cutting CNC control systems covering functionality, performance, integration and total cost.',
    datePublished: new Date().toISOString().slice(0, 10),
    dateModified: new Date().toISOString().slice(0, 10),
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-6 py-10">
      <StructuredData type="TechArticle" data={structuredData} />

      <article className="prose max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Laser Equipment Control System Comparison: Domestic vs Imported Systems Analysis
        </h1>
        <h2 className="text-2xl text-gray-700 mb-4">
          Laser CNC Control Systems: Domestic vs Imported Comparison
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          The CNC control system is the brain of a laser cutting machine, determining ease of use, cutting quality, 
          automation capability, and long-term operational efficiency. This guide compares mainstream domestic (Chinese) 
          and imported (European/Japanese) control systems to help you evaluate the tradeoffs.
        </p>

        {/* Market Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Landscape</h2>
          
          <div className="grid md:grid-cols-2 gap-6 not-prose mb-6">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Domestic Leaders</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>Cypcut:</strong> 60%+ market share in China, integrated solution</div>
                <div><strong>Friendess:</strong> Strong in mid-range, good software ecosystem</div>
                <div><strong>Fscut:</strong> Budget-friendly, basic functionality</div>
                <div><strong>RayTools:</strong> Emerging player, fiber laser integration</div>
                <div className="text-xs text-gray-600 pt-2">
                  Domestic systems dominate Chinese market due to cost, localization and rapid support.
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Imported Leaders</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>Beckhoff (Germany):</strong> PC-based, TwinCAT software, high flexibility</div>
                <div><strong>Siemens (Germany):</strong> 840D/828D, industrial-grade reliability</div>
                <div><strong>PA (Power Automation, Israel):</strong> Laser-specialized, advanced algorithms</div>
                <div><strong>NUM (Switzerland):</strong> Precision control, aerospace applications</div>
                <div className="text-xs text-gray-600 pt-2">
                  Imported systems preferred for high-end applications, export markets, and demanding quality requirements.
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">功能对比 | Feature Comparison</h2>

          <div className="not-prose mb-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">功能 Feature</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">国产系统 Domestic</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">进口系统 Imported</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">基础切割功能<br/>Basic Cutting</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 完善，满足常规需求<br/>Complete, meets standard needs</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 完善，更多高级选项<br/>Complete, more advanced options</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">自动对焦<br/>Auto Focus</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 标配电容式<br/>Standard capacitive</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 电容+激光测距<br/>Capacitive + laser ranging</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">参数库<br/>Parameter Library</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 丰富，针对国内材料<br/>Rich, optimized for local materials</td>
                    <td className="border border-gray-300 px-4 py-2">△ 需要定制和调试<br/>Requires customization</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">CAM集成<br/>CAM Integration</td>
                    <td className="border border-gray-300 px-4 py-2">△ 支持主流格式<br/>Supports common formats</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 深度集成，API开放<br/>Deep integration, open API</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">自适应切割<br/>Adaptive Cutting</td>
                    <td className="border border-gray-300 px-4 py-2">△ 基础功能<br/>Basic functionality</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 实时反馈调节<br/>Real-time feedback adjustment</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">多轴联动<br/>Multi-axis Control</td>
                    <td className="border border-gray-300 px-4 py-2">△ 3轴标准，5轴有限<br/>3-axis standard, limited 5-axis</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 5轴+，机器人集成<br/>5+ axis, robot integration</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">远程监控<br/>Remote Monitoring</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 云平台，移动端<br/>Cloud platform, mobile app</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 工业物联网集成<br/>Industrial IoT integration</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 font-medium">二次开发<br/>Customization</td>
                    <td className="border border-gray-300 px-4 py-2">△ 有限API<br/>Limited API</td>
                    <td className="border border-gray-300 px-4 py-2">✓ 完全开放，PLC编程<br/>Fully open, PLC programming</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Performance Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">性能分析 | Performance Analysis</h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">切割质量 | Cutting Quality</h3>
          <p className="text-gray-700 mb-4">
            For standard production cutting (carbon steel 3-12mm, stainless 3-8mm), modern domestic systems like Cypcut 
            deliver quality comparable to imported systems. The gap has narrowed significantly since 2015 as domestic 
            manufacturers improved motion control algorithms and parameter optimization.
          </p>
          <p className="text-gray-700 mb-4">
            Imported systems show advantages in edge cases: ultra-thin materials (&lt;0.5mm), thick plates (&gt;20mm), 
            small hole cutting (diameter &lt; thickness), and high-precision applications (±0.02mm tolerance). The superior 
            motion planning, trajectory smoothing, and real-time feedback enable better consistency under challenging conditions.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">运动控制精度 | Motion Control Precision</h3>
          <div className="grid md:grid-cols-2 gap-6 not-prose mb-6">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>国产系统 Domestic</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>定位精度 Positioning:</strong> ±0.03-0.05mm (typical)</div>
                <div><strong>重复精度 Repeatability:</strong> ±0.02mm</div>
                <div><strong>最大速度 Max Speed:</strong> 80-120 m/min</div>
                <div><strong>加速度 Acceleration:</strong> 1.5-2.5G</div>
                <div className="text-xs text-gray-600 pt-2">
                  Sufficient for 90%+ industrial applications, excellent value proposition.
                </div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>进口系统 Imported</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>定位精度 Positioning:</strong> ±0.01-0.02mm (typical)</div>
                <div><strong>重复精度 Repeatability:</strong> ±0.005mm</div>
                <div><strong>最大速度 Max Speed:</strong> 120-200 m/min</div>
                <div><strong>加速度 Acceleration:</strong> 2.5-4.0G</div>
                <div className="text-xs text-gray-600 pt-2">
                  Required for precision applications, aerospace, medical device manufacturing.
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">稳定性与可靠性 | Stability & Reliability</h3>
          <p className="text-gray-700 mb-4">
            Imported systems typically demonstrate better long-term stability, with MTBF (Mean Time Between Failures) 
            of 8,000-12,000 hours versus 5,000-8,000 hours for domestic systems. This matters most for 24/7 production 
            environments where downtime is costly.
          </p>
          <p className="text-gray-700 mb-4">
            However, domestic systems have improved dramatically. Top-tier domestic controllers (Cypcut Pro series) now 
            approach imported system reliability while offering faster local support response times (4-24 hours vs 1-3 days 
            for imported systems in China).
          </p>
        </section>

        {/* Software & Integration */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">软件生态与集成 | Software Ecosystem & Integration</h2>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">用户界面 | User Interface</h3>
          <p className="text-gray-700 mb-4">
            Domestic systems excel in localization: full Chinese interface, Chinese technical documentation, training 
            materials optimized for Chinese operators. This significantly reduces training time (2-3 days vs 5-7 days) 
            and operator errors.
          </p>
          <p className="text-gray-700 mb-4">
            Imported systems offer more sophisticated interfaces with better visualization, simulation, and diagnostic 
            tools. However, Chinese localization is often incomplete, and advanced features may lack Chinese documentation.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mb-3">CAD/CAM集成 | CAD/CAM Integration</h3>
          <p className="text-gray-700 mb-4">
            Imported systems provide superior integration with professional CAD/CAM software (SolidWorks, Inventor, 
            Mastercam). They support direct G-code generation, parametric programming, and API access for custom workflows. 
            This matters for complex parts and automated production lines.
          </p>
          <p className="text-gray-700 mb-4">
            Domestic systems focus on ease of use with built-in nesting software and simplified workflows. For job shops 
            cutting 2D parts from DXF files, domestic systems often provide faster setup and better out-of-box experience. 
            Advanced manufacturers like 
            <a href="https://opmtlaser.com/technology/cnc-integration" className="text-primary-600 hover:text-primary-700 font-medium ml-1" target="_blank" rel="noopener">OPMT Laser offer hybrid solutions</a> that 
            combine domestic control hardware with enhanced CAM integration and parameter libraries, bridging the gap between 
            domestic cost-effectiveness and imported flexibility.
          </p>
        </section>

        {/* Cost Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">成本分析 | Cost Analysis</h2>

          <div className="grid md:grid-cols-3 gap-6 not-prose mb-6">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>初始成本 | Initial Cost</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>国产 Domestic:</strong></div>
                <div>Cypcut: $3,000-6,000</div>
                <div>Friendess: $2,500-5,000</div>
                <div className="pt-2"><strong>进口 Imported:</strong></div>
                <div>Beckhoff: $8,000-15,000</div>
                <div>Siemens: $12,000-25,000</div>
                <div>PA: $10,000-20,000</div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>培训成本 | Training Cost</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>国产 Domestic:</strong></div>
                <div>Training: 2-3 days</div>
                <div>Cost: $500-1,000</div>
                <div>Chinese materials</div>
                <div className="pt-2"><strong>进口 Imported:</strong></div>
                <div>Training: 5-10 days</div>
                <div>Cost: $2,000-5,000</div>
                <div>May require translator</div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle>维护成本 | Maintenance</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div><strong>国产 Domestic:</strong></div>
                <div>Support: Local, fast</div>
                <div>Parts: Readily available</div>
                <div>Annual: $500-1,500</div>
                <div className="pt-2"><strong>进口 Imported:</strong></div>
                <div>Support: May be remote</div>
                <div>Parts: Import delays</div>
                <div>Annual: $1,500-4,000</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 not-prose text-sm text-blue-900 mb-6">
            <strong>5年总拥有成本 5-Year TCO Example:</strong>
            <div className="grid md:grid-cols-2 gap-4 mt-2">
              <div>
                <div className="font-medium">国产系统 Domestic (Cypcut)</div>
                <div>Initial: $5,000</div>
                <div>Training: $800</div>
                <div>Maintenance (5yr): $5,000</div>
                <div className="font-semibold pt-1">Total: ~$10,800</div>
              </div>
              <div>
                <div className="font-medium">进口系统 Imported (Beckhoff)</div>
                <div>Initial: $12,000</div>
                <div>Training: $3,500</div>
                <div>Maintenance (5yr): $12,000</div>
                <div className="font-semibold pt-1">Total: ~$27,500</div>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Framework */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">选型决策框架 | Selection Decision Framework</h2>

          <div className="grid md:grid-cols-2 gap-6 not-prose">
            <Card variant="bordered">
              <CardHeader>
                <CardTitle className="text-green-700">选择国产系统 Choose Domestic If...</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div>✓ 标准钣金加工应用 Standard sheet metal fabrication</div>
                <div>✓ 预算有限 Budget-conscious</div>
                <div>✓ 需要快速本地支持 Need fast local support</div>
                <div>✓ 操作人员中文为主 Chinese-speaking operators</div>
                <div>✓ 简单2D切割为主 Primarily 2D cutting</div>
                <div>✓ 国内市场销售 Domestic market sales</div>
                <div>✓ 中小批量生产 Small-medium batch production</div>
              </CardContent>
            </Card>

            <Card variant="bordered">
              <CardHeader>
                <CardTitle className="text-blue-700">选择进口系统 Choose Imported If...</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-700 space-y-2">
                <div>✓ 高精度要求 (±0.02mm) High precision requirements</div>
                <div>✓ 复杂3D切割 Complex 3D cutting</div>
                <div>✓ 出口欧美市场 Export to EU/US markets</div>
                <div>✓ 24/7连续生产 24/7 continuous production</div>
                <div>✓ 深度CAM集成需求 Deep CAM integration needs</div>
                <div>✓ 航空航天/医疗行业 Aerospace/medical industry</div>
                <div>✓ 自动化产线集成 Automated line integration</div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Future Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">技术趋势 | Technology Trends</h2>
          <p className="text-gray-700 mb-4">
            The performance gap between domestic and imported systems continues to narrow. Chinese manufacturers are 
            investing heavily in R&D, hiring international talent, and acquiring foreign technology. By 2025, top domestic 
            systems are expected to match mid-range imported systems in most performance metrics.
          </p>
          <p className="text-gray-700 mb-4">
            Key development areas include: AI-powered parameter optimization, real-time quality monitoring via vision systems, 
            cloud-based fleet management, and deeper integration with Industry 4.0 ecosystems. Both domestic and imported 
            manufacturers are pursuing these capabilities, with domestic players often moving faster due to proximity to 
            laser equipment manufacturers.
          </p>
          <p className="text-gray-700 mb-4">
            The future likely involves hybrid approaches: domestic hardware with imported algorithms, or modular systems 
            allowing customers to choose components based on specific needs rather than all-or-nothing decisions.
          </p>
        </section>

        {/* Related Resources */}
        <section className="not-prose">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">相关资源 Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/guides/selection" className="block">
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">设备选型指南 Equipment Selection</h3>
                  <p className="text-sm text-gray-600">Complete laser equipment buying guide</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/tech-explain" className="block">
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">技术参数解析 Tech Specs Explained</h3>
                  <p className="text-sm text-gray-600">Understanding laser specifications</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/comparison" className="block">
              <Card variant="bordered">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">设备对比工具 Equipment Comparison</h3>
                  <p className="text-sm text-gray-600">Compare laser machines side-by-side</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}

