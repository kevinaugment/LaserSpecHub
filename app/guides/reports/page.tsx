'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { StructuredData } from '@/components/ui/structured-data';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '2025 Laser Cutting Equipment Market Research Report',
  description:
    'Comprehensive market analysis and equipment comparison report covering 50+ laser systems',
  datePublished: '2025-11-04',
  dateModified: '2025-11-04',
  author: {
    '@type': 'Organization',
    name: 'LaserSpecHub',
  },
};

export default function MarketReportPage() {
  // Set page title
  useEffect(() => {
    document.title = '2025 Laser Equipment Market Research Report | LaserSpecHub';
  }, []);
  const [generating, setGenerating] = useState(false);

  const handleDownloadReport = async () => {
    setGenerating(true);
    try {
      // Dynamically import the PDF generator and equipment data
      const { generateMarketReportPDF } = await import('@/lib/pdf/market-report-generator');
      const equipmentData = await import('@/data/equipment.json');
      
      const equipment = equipmentData.default || equipmentData;
      
      generateMarketReportPDF({
        equipment: equipment as any,
        reportDate: new Date(),
        version: '2025.1',
      });
    } catch (error) {
      console.error('Error generating report:', error);
      alert('Failed to generate report. Please try again.');
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          2025 Laser Cutting Equipment Market Research Report
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          Comprehensive analysis of 50+ laser cutting systems: market trends, technology comparison,
          vendor landscape, and complete buyer's guide.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
            15-Page PDF
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
            50+ Systems Analyzed
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
            Free Download
          </span>
          <span className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
            2025 Edition
          </span>
        </div>
      </div>

      {/* Download CTA Card */}
      <Card className="mb-8 border-primary-200 bg-primary-50">
        <CardHeader>
          <CardTitle className="text-2xl">Download Your Free Copy</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">
            This comprehensive 15-page report provides objective analysis based on manufacturer specifications
            and industry research. Perfect for technical managers, procurement teams, and fabrication engineers
            evaluating laser cutting equipment investments.
          </p>
          <Button
            onClick={handleDownloadReport}
            disabled={generating}
            className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8"
          >
            {generating ? 'Generating PDF...' : 'Download PDF Report (Free)'}
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            No registration required • Instant download • 2.5MB PDF
          </p>
        </CardContent>
      </Card>

      {/* Report Contents */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">What's Inside the Report</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">1. Executive Summary</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc ml-5 space-y-1">
                <li>Key market findings and trends</li>
                <li>Technology evolution snapshot</li>
                <li>Price-performance analysis</li>
                <li>Investment recommendations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">2. Market Overview</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc ml-5 space-y-1">
                <li>Power class segmentation (1-3kW, 3-8kW, 8-15kW, 15kW+)</li>
                <li>Laser type distribution (Fiber, CO2, Solid-state)</li>
                <li>Market insights by segment</li>
                <li>Application trends</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">3. Technology Comparison</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc ml-5 space-y-1">
                <li>CO2 vs Fiber laser detailed comparison</li>
                <li>Efficiency, maintenance, and cost analysis</li>
                <li>Material absorption characteristics</li>
                <li>Technology selection guidance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">4. Equipment Database</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc ml-5 space-y-1">
                <li>50+ systems with full specifications</li>
                <li>Organized by power class</li>
                <li>Price ranges and performance metrics</li>
                <li>Multiple manufacturers covered</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">5. Power Class Analysis</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc ml-5 space-y-1">
                <li>Target users and applications by power</li>
                <li>Material thickness capabilities</li>
                <li>Speed expectations and productivity</li>
                <li>Investment and operating cost ranges</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">6. Vendor Landscape</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc ml-5 space-y-1">
                <li>Manufacturer analysis and portfolios</li>
                <li>Global vs domestic brand comparison</li>
                <li>Vendor evaluation framework</li>
                <li>Service and support considerations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">7. Buyer's Guide</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc ml-5 space-y-1">
                <li>Step-by-step selection process (12 weeks)</li>
                <li>Requirements definition framework</li>
                <li>Vendor evaluation checklist</li>
                <li>ROI analysis methodology</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">8. Future Trends</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="list-disc ml-5 space-y-1">
                <li>2025-2027 technology roadmap</li>
                <li>Automation and Industry 4.0</li>
                <li>Sustainability initiatives</li>
                <li>Investment timing recommendations</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who Should Read This */}
      <section className="mb-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Who Should Read This Report</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Technical Managers</h3>
                <p className="text-sm text-gray-700">
                  Understand technology options, evaluate performance specifications, and match equipment
                  capabilities to your production requirements.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Procurement Teams</h3>
                <p className="text-sm text-gray-700">
                  Compare pricing across vendors, understand total cost of ownership, and develop
                  comprehensive RFP requirements for equipment evaluation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Owners</h3>
                <p className="text-sm text-gray-700">
                  Make informed investment decisions with market intelligence, ROI frameworks, and strategic
                  recommendations for equipment selection.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Key Insights Preview */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-6">Key Insights from the Report</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              📊 Fiber Lasers Dominate Metal Cutting
            </h3>
            <p className="text-sm text-gray-700">
              75-80% of new installations are fiber laser systems, driven by 2-3x better efficiency (30-40%
              vs 10-15% for CO2), lower maintenance, and faster cutting speeds on metal materials.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">⚡ Power Escalation Continues</h3>
            <p className="text-sm text-gray-700">
              Average system power increased from 4-6kW (2020) to 6-12kW (2025). 12kW systems now cost less
              than 6kW systems did 5 years ago, making thick material cutting accessible to more fabricators.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">💰 Best Value: 6kW Mid-Range Systems</h3>
            <p className="text-sm text-gray-700">
              The 3-8kW segment offers optimal price-performance for general fabrication. 6kW systems handle
              80-90% of typical job mixes (steel up to 20mm, stainless to 12mm) at $120,000-$200,000 investment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">🤖 Automation Becoming Standard</h3>
            <p className="text-sm text-gray-700">
              60%+ of new systems include automated material handling, AI-powered nesting software, and
              remote monitoring. These features add 15-25% to equipment cost but improve productivity by 30-50%.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">🌏 Chinese Brands Offer Strong Value</h3>
            <p className="text-sm text-gray-700">
              Quality gap between Chinese and global brands has narrowed significantly. Mid-tier Chinese
              manufacturers (OPMT, Han's, BLM) offer 30-50% cost savings with comparable performance for
              general fabrication applications.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <Card className="border-primary-200 bg-gradient-to-r from-primary-50 to-blue-50">
        <CardContent className="py-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Deep Dive?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Get the complete 15-page report with detailed specifications, vendor analysis, and actionable
            buying guidance. Download now to make your next laser equipment investment with confidence.
          </p>
          <Button
            onClick={handleDownloadReport}
            disabled={generating}
            className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8"
          >
            {generating ? 'Generating PDF...' : 'Download Complete Report (Free)'}
          </Button>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Additional Resources</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Equipment Database</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Browse our interactive equipment database with advanced filtering and comparison tools.
              </p>
              <Link
                href="/equipment"
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Explore Equipment →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Power Calculator</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Calculate the laser power you need based on your materials and production requirements.
              </p>
              <a
                href="/tools/power-calculator"
                className="text-primary-600 hover:text-primary-700 font-medium text-sm"
              >
                Calculate Power →
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <p className="mt-10 text-xs text-muted-foreground">
        Report last updated: November 4, 2025 • Equipment specifications subject to change • Contact
        manufacturers for most current pricing and availability
      </p>
    </div>
  );
}
