import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StructuredData } from '@/components/ui/structured-data';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Cutting Programming Tips Guide',
  description: 'Programming tips for laser cutting engineers: CAD drawing preparation, path planning, parameter settings, automated programming, and common error avoidance to significantly improve programming efficiency and quality.',
  path: '/guides/programming-tips',
  keywords: ['programming tips', 'CAM software', 'FastCAM', 'automated nesting', 'parameter library'],
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Laser Cutting Programming Tips Guide',
  description: 'Practical handbook for improving programming efficiency and quality',
  datePublished: '2025-10-31',
  dateModified: '2025-10-31',
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <StructuredData type="TechArticle" data={structuredData} />

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">Laser Cutting Programming Tips Guide</h1>
        <p className="text-lg text-muted-foreground">Efficient practices covering drawings, paths, parameters, and automation</p>
      </div>

      {/* 1. CAD Drawing Preparation */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">1. CAD Drawing Preparation</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">Quality Checks</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Closed curves, duplicate line removal, minimal segment cleanup</div>
              <div>• Layer standards and naming consistency</div>
              <div>• DXF preferred to avoid version compatibility issues</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Drawing Optimization</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Common edge merging and fillet simplification</div>
              <div>• Small feature adaptation to minimum kerf and nozzle diameter</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 2. Path Planning */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">2. Path Planning</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">Cutting Sequence</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Inner contours first, then small parts, finally outer contours</div>
              <div>• Balance thermal deformation control with shortest path</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Lead-ins/Lead-outs & Piercing</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Line/arc leads: 2-5mm, 90°/45° angles</div>
              <div>• Pierce away from finished area, prefer scrap zones</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. Parameter Settings */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">3. Parameter Settings</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">Parameter Library & Fine-tuning</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Build material-thickness-power parameter library</div>
              <div>• Speed ±10%, power ±5%, gas pressure ±0.1bar, focus ±0.5mm</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Special Geometries</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Small holes: diameter &lt; thickness, reduce speed 50%</div>
              <div>• Sharp corners: corner deceleration and radius transitions</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Automation & Efficiency */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">4. Automation & Efficiency</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">Automated Programming</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Process database configuration and auto-nesting parameters</div>
              <div>• Path optimization algorithms and collision detection</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Templates & Batch Processing</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Common part library and parameter templates</div>
              <div>• Multi-drawing batch import and parameter assignment</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. Common Errors & Checklist */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">5. Common Errors & Checklist</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader><CardTitle className="text-lg">Common Errors</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Cutting outer contour first causes deformation and tolerance issues</div>
              <div>• Lead lines too long/short cause notches/overburn</div>
              <div>• Pierce points in finished area</div>
              <div>• Common-line conditions not met causing part scatter</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-lg">Programming Checklist</CardTitle></CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>☐ Cutting sequence and path continuity</div>
              <div>☐ Lead-in and pierce positions</div>
              <div>☐ Parameters match material</div>
              <div>☐ Collision/interference check</div>
              <div>☐ File naming and version</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Advanced Programming Strategies */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Advanced Programming Strategies</h2>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Nested Part Optimization and Material Yield</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700">
              <strong>Nesting Efficiency Benchmarks:</strong> Professional CAM software can achieve 75-85% material utilization on mixed part batches versus 60-70% for manual nesting. For high-volume production runs of identical parts, optimal nesting patterns can reach 90%+ utilization. The cost impact is substantial—improving from 70% to 80% utilization on $2,000/ton stainless steel saves $200,000 annually for shops processing 100 tons/year.
            </p>
            <p className="text-gray-700">
              <strong>Common-Line Cutting:</strong> When adjacent parts share edges, common-line cutting eliminates duplicate cuts and reduces processing time by 15-30%. However, this technique requires precise parameters—too much heat input causes parts to weld together, too little causes incomplete separation. Optimal common-line gap: 0.1-0.3mm for thin materials (&lt;3mm), 0.3-0.5mm for thick materials (3-12mm). Use micro-joints (0.5-2.0mm tabs) every 200-300mm to prevent parts from shifting during cutting.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Dynamic Parameter Programming for Complex Geometries</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700">
              <strong>Corner Handling:</strong> Sharp corners (angles &lt;45°) accumulate heat and cause overburn. Advanced programming uses automatic corner deceleration—reducing speed to 50-70% within 5-10mm of corner apex. Alternative approach: replace programmed sharp corners with small radius (0.1-0.3mm) arcs that maintain continuous motion while preventing heat accumulation. This technique improves corner quality by 40-60% and reduces processing time compared to full stop-and-go approaches.
            </p>
            <p className="text-gray-700">
              <strong>Small Hole Programming:</strong> Holes with diameter less than material thickness require special treatment. Standard approach: pierce outside hole perimeter and spiral inward. Advanced technique: use pulsed piercing with gradually increasing power (start at 50%, ramp to 100% over 0.5s) to minimize splash and heat-affected zone. For holes &lt;0.8× thickness, reduce cutting speed by 30-50% and increase gas pressure by 15-25% to ensure complete melt ejection.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Parameter Library Management and Continuous Improvement</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-4">
            <p className="text-gray-700">
              <strong>Structured Parameter Database:</strong> High-performing fabrication shops maintain comprehensive parameter libraries organized by: Material type → Grade → Thickness → Laser power → Quality grade (speed-priority vs. quality-priority). Each entry includes not just power/speed/gas but also focus position, nozzle type/diameter, lead-in/out specifics, and piercing parameters. Typical library contains 200-500 parameter sets covering all common material-thickness combinations.
            </p>
            <p className="text-gray-700">
              <strong>Programming Time Reduction:</strong> Well-structured libraries reduce programming time from 15-30 minutes per part (manual parameter selection and testing) to 2-5 minutes (automated parameter assignment from library). For shops programming 20-50 jobs daily, this represents 4-8 hours of labor savings per day, equivalent to 1-2 full-time programmer positions.
            </p>
          </CardContent>
        </Card>
      </section>

      <p className="mt-8 text-xs text-muted-foreground">
        Tip: Record "first-article program + parameters + duration + quality results" in your library to form a continuous improvement loop. Systematic parameter databases can reduce programming time by 60-80% while significantly improving first-piece pass rates.
      </p>
    </div>
  );
}
