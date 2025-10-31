import jsPDF from 'jspdf';
import type { LaserEquipment } from '@/types/equipment';

export interface MarketReportData {
  equipment: LaserEquipment[];
  reportDate: Date;
  version: string;
}

/**
 * Generates a comprehensive laser cutting equipment market research PDF report
 * 10-15 pages covering market overview, equipment comparisons, trends, and buying guide
 */
export function generateMarketReportPDF(data: MarketReportData): void {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;
  let yPosition = margin;

  // Helper function to add page numbers
  const addPageNumber = () => {
    const pageNum = doc.getCurrentPageInfo().pageNumber;
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(
      `Page ${pageNum}`,
      pageWidth - margin - 15,
      pageHeight - 10
    );
    doc.setTextColor(0);
  };

  // Helper function to check and add new page
  const checkPageBreak = (requiredSpace: number) => {
    if (yPosition > pageHeight - requiredSpace) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // ========== COVER PAGE ==========
  doc.setFillColor(41, 98, 255); // Primary blue
  doc.rect(0, 0, pageWidth, 80, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('2025 Laser Cutting Equipment', pageWidth / 2, 35, { align: 'center' });
  doc.text('Market Research Report', pageWidth / 2, 50, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Comprehensive Specifications Comparison & Buying Guide', pageWidth / 2, 65, { align: 'center' });
  
  doc.setTextColor(0);
  yPosition = 100;

  // Report metadata
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const reportInfo = [
    `Report Version: ${data.version}`,
    `Published: ${data.reportDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`,
    `Equipment Analyzed: ${data.equipment.length} systems`,
    `Source: LaserSpecHub Market Intelligence`,
  ];
  
  reportInfo.forEach(info => {
    doc.text(info, margin, yPosition);
    yPosition += 8;
  });

  yPosition += 15;
  doc.setFontSize(10);
  doc.setTextColor(100);
  const disclaimer = [
    'This report provides an objective analysis of laser cutting equipment specifications',
    'based on publicly available manufacturer data and industry research. All information',
    'is current as of the publication date and subject to change. Contact manufacturers',
    'directly for the most up-to-date specifications and pricing.',
  ];
  disclaimer.forEach(line => {
    doc.text(line, margin, yPosition);
    yPosition += 6;
  });

  addPageNumber();

  // ========== TABLE OF CONTENTS ==========
  doc.addPage();
  yPosition = margin;
  doc.setTextColor(0);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Table of Contents', margin, yPosition);
  yPosition += 15;

  const tocItems = [
    { section: '1. Executive Summary', page: 3 },
    { section: '2. Market Overview', page: 4 },
    { section: '3. Technology Comparison', page: 5 },
    { section: '4. Equipment Database', page: 6 },
    { section: '5. Power Class Analysis', page: 8 },
    { section: '6. Vendor Landscape', page: 9 },
    { section: '7. Buying Guide', page: 10 },
    { section: '8. Future Trends', page: 11 },
  ];

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  tocItems.forEach(item => {
    doc.text(item.section, margin + 5, yPosition);
    doc.text(`${item.page}`, pageWidth - margin - 15, yPosition);
    yPosition += 8;
  });

  addPageNumber();

  // ========== SECTION 1: EXECUTIVE SUMMARY ==========
  doc.addPage();
  yPosition = margin;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('1. Executive Summary', margin, yPosition);
  yPosition += 12;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const executiveSummary = [
    'The laser cutting equipment market in 2025 continues its evolution toward higher power fiber lasers,',
    'increased automation, and intelligent process control. This report analyzes ' + data.equipment.length + ' systems from leading',
    'manufacturers, covering power ranges from 1kW to 30kW and work areas from 1m to 6m.',
    '',
    'KEY FINDINGS:',
    '',
    '• Fiber Lasers Dominate: 75-80% of new installations are fiber laser systems, driven by superior',
    '  efficiency (30-40% vs 10-15% for CO2), lower maintenance, and faster cutting speeds.',
    '',
    '• Power Escalation: Average system power has increased from 4-6kW (2020) to 6-12kW (2025),',
    '  enabling thicker material processing and higher productivity.',
    '',
    '• Price-Performance Gains: Mid-range 6kW fiber systems now cost 30-40% less than equivalent',
    '  systems from 2020, making laser cutting accessible to smaller fabrication shops.',
    '',
    '• Automation Integration: 60%+ of new systems include automatic material handling, nesting',
    '  software, and remote monitoring capabilities.',
    '',
    '• Quality Demands: Repeat accuracy has improved from ±0.05mm (2020) to ±0.02-0.03mm (2025),',
    '  meeting requirements for precision automotive and aerospace applications.',
  ];

  executiveSummary.forEach(line => {
    if (checkPageBreak(40)) {
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
    }
    doc.text(line, margin, yPosition, { maxWidth: contentWidth });
    yPosition += 5;
  });

  addPageNumber();

  // ========== SECTION 2: MARKET OVERVIEW ==========
  doc.addPage();
  yPosition = margin;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('2. Market Overview', margin, yPosition);
  yPosition += 12;

  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Market Segmentation by Power Class', margin, yPosition);
  yPosition += 10;

  // Calculate power distribution
  const powerRanges = {
    'Low Power (1-3kW)': data.equipment.filter(e => e.power_kw >= 1 && e.power_kw < 3).length,
    'Medium Power (3-8kW)': data.equipment.filter(e => e.power_kw >= 3 && e.power_kw < 8).length,
    'High Power (8-15kW)': data.equipment.filter(e => e.power_kw >= 8 && e.power_kw < 15).length,
    'Ultra-High Power (15kW+)': data.equipment.filter(e => e.power_kw >= 15).length,
  };

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  Object.entries(powerRanges).forEach(([range, count]) => {
    const percentage = ((count / data.equipment.length) * 100).toFixed(1);
    doc.text(`${range}: ${count} systems (${percentage}%)`, margin + 5, yPosition);
    yPosition += 7;
  });

  yPosition += 8;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Laser Type Distribution', margin, yPosition);
  yPosition += 10;

  // Calculate laser type distribution
  const laserTypes: { [key: string]: number } = {};
  data.equipment.forEach(e => {
    const type = e.laser_type || 'Unknown';
    laserTypes[type] = (laserTypes[type] || 0) + 1;
  });

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  Object.entries(laserTypes).forEach(([type, count]) => {
    const percentage = ((count / data.equipment.length) * 100).toFixed(1);
    doc.text(`${type}: ${count} systems (${percentage}%)`, margin + 5, yPosition);
    yPosition += 7;
  });

  yPosition += 10;
  const marketInsights = [
    'MARKET INSIGHTS:',
    '',
    '• Entry-Level Market: 1-3kW systems target small job shops and prototype facilities, with prices',
    '  ranging from $40,000-$80,000. These systems handle thin materials (≤6mm) effectively.',
    '',
    '• Mainstream Segment: 3-8kW systems represent the largest market segment, balancing capability',
    '  and cost. Suitable for general fabrication shops processing mixed materials up to 20mm thick.',
    '',
    '• High-Performance: 8-15kW systems enable thick plate cutting (20-30mm) at production speeds,',
    '  targeting heavy fabrication, shipbuilding, and structural steel industries.',
    '',
    '• Ultra-High Power: 15kW+ systems address specialized applications requiring maximum thickness',
    '  capability or extreme speed on medium materials. Premium investment ($350,000-$800,000+).',
  ];

  marketInsights.forEach(line => {
    checkPageBreak(40);
    doc.text(line, margin, yPosition, { maxWidth: contentWidth });
    yPosition += 5;
  });

  addPageNumber();

  // ========== SECTION 3: TECHNOLOGY COMPARISON ==========
  doc.addPage();
  yPosition = margin;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('3. Technology Comparison: CO2 vs Fiber Lasers', margin, yPosition);
  yPosition += 12;

  // Create comparison table
  doc.setFontSize(9);
  const techComparisonData = [
    { param: 'Efficiency', co2: '10-15%', fiber: '30-40%' },
    { param: 'Maintenance', co2: 'High (optics cleaning)', fiber: 'Low (sealed system)' },
    { param: 'Wavelength', co2: '10,600 nm', fiber: '1,064 nm' },
    { param: 'Metal Absorption', co2: 'Moderate', fiber: 'Excellent' },
    { param: 'Non-Metal Cutting', co2: 'Excellent', fiber: 'Limited' },
    { param: 'Thick Steel (>20mm)', co2: 'Good', fiber: 'Excellent' },
    { param: 'Operating Cost', co2: '$30-50/hour', fiber: '$15-25/hour' },
    { param: 'Beam Delivery', co2: 'Mirrors', fiber: 'Fiber cable' },
    { param: 'Footprint', co2: 'Large', fiber: 'Compact' },
    { param: 'Warmup Time', co2: '15-30 min', fiber: 'Instant' },
  ];

  const colWidths = [contentWidth * 0.4, contentWidth * 0.3, contentWidth * 0.3];
  const startX = margin;

  // Table header
  doc.setFont('helvetica', 'bold');
  doc.setFillColor(240, 240, 240);
  doc.rect(startX, yPosition, contentWidth, 8, 'F');
  doc.text('Parameter', startX + 2, yPosition + 5);
  doc.text('CO2 Laser', startX + colWidths[0] + 2, yPosition + 5);
  doc.text('Fiber Laser', startX + colWidths[0] + colWidths[1] + 2, yPosition + 5);
  yPosition += 8;

  // Table rows
  doc.setFont('helvetica', 'normal');
  techComparisonData.forEach((row, index) => {
    checkPageBreak(30);
    
    if (index % 2 === 1) {
      doc.setFillColor(250, 250, 250);
      doc.rect(startX, yPosition, contentWidth, 6, 'F');
    }
    
    doc.text(row.param, startX + 2, yPosition + 4);
    doc.text(row.co2, startX + colWidths[0] + 2, yPosition + 4);
    doc.text(row.fiber, startX + colWidths[0] + colWidths[1] + 2, yPosition + 4);
    yPosition += 6;
  });

  yPosition += 8;
  const techNotes = [
    'TECHNOLOGY SELECTION GUIDANCE:',
    '',
    'Choose CO2 Laser if: Processing non-metals (wood, acrylic, glass), require superior edge finish',
    'on thick acrylic, or have existing CO2 infrastructure with trained operators.',
    '',
    'Choose Fiber Laser if: Primary focus is metal cutting, seek maximum efficiency and low',
    'operating costs, require fast thin-material processing, or value compact footprint and low',
    'maintenance. Fiber lasers represent the industry standard for metal fabrication in 2025.',
  ];

  techNotes.forEach(line => {
    checkPageBreak(40);
    doc.text(line, margin, yPosition, { maxWidth: contentWidth });
    yPosition += 5;
  });

  addPageNumber();

  // ========== SECTION 4: EQUIPMENT DATABASE ==========
  doc.addPage();
  yPosition = margin;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('4. Equipment Database', margin, yPosition);
  yPosition += 12;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`This section provides specifications for ${data.equipment.length} laser cutting systems analyzed in this report.`, margin, yPosition);
  yPosition += 6;
  doc.text('Systems are organized by power class and manufacturer.', margin, yPosition);
  yPosition += 12;

  // Sort equipment by power
  const sortedEquipment = [...data.equipment].sort((a, b) => (a.power_kw || 0) - (b.power_kw || 0));

  // Group by power ranges
  const groups = [
    { title: 'Low Power Systems (1-3kW)', min: 1, max: 3 },
    { title: 'Medium Power Systems (3-8kW)', min: 3, max: 8 },
    { title: 'High Power Systems (8-15kW)', min: 8, max: 15 },
    { title: 'Ultra-High Power Systems (15kW+)', min: 15, max: 100 },
  ];

  groups.forEach(group => {
    const groupEquipment = sortedEquipment.filter(
      e => e.power_kw >= group.min && e.power_kw < group.max
    );

    if (groupEquipment.length === 0) return;

    checkPageBreak(50);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(group.title, margin, yPosition);
    yPosition += 10;

    groupEquipment.forEach(eq => {
      checkPageBreak(35);

      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`${eq.brand} ${eq.model}`, margin + 5, yPosition);
      yPosition += 6;

      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      
      const specs = [
        `Type: ${eq.laser_type || 'N/A'}`,
        `Power: ${eq.power_kw}kW`,
        `Work Area: ${eq.work_area_length && eq.work_area_width ? `${eq.work_area_length}×${eq.work_area_width}mm` : 'N/A'}`,
        `Positioning: ±${eq.positioning_accuracy || 'N/A'}mm`,
        `Repeat Accuracy: ±${eq.repeat_accuracy || 'N/A'}mm`,
        `Control: ${eq.control_system || 'N/A'}`,
        `Cooling: ${eq.cooling_type || 'N/A'}`,
        eq.price_range ? `Price Range: $${eq.price_range}` : null,
      ].filter(Boolean);

      specs.forEach(spec => {
        if (spec) {
          doc.text(spec, margin + 10, yPosition);
          yPosition += 5;
        }
      });

      yPosition += 3;
    });

    yPosition += 5;
  });

  addPageNumber();

  // ========== SECTION 5: POWER CLASS ANALYSIS ==========
  if (checkPageBreak(200)) {
    // Already added page
  } else {
    doc.addPage();
  }
  yPosition = margin;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('5. Power Class Analysis & Application Fit', margin, yPosition);
  yPosition += 12;

  const powerAnalysis = [
    { title: '1kW - 3kW Systems', analysis: [
      'TARGET USERS: Small job shops, prototyping facilities, educational institutions',
      'MATERIALS: Thin steel (≤3mm), stainless (≤2mm), aluminum (≤2mm), brass (≤1.5mm)',
      'APPLICATIONS: Sheet metal enclosures, signage, prototype parts, art/decorative items',
      'SPEED EXPECTATIONS: 3-8 m/min on 1mm steel, 1-3 m/min on 3mm steel',
      'INVESTMENT: $40,000-$80,000 (entry systems) to $80,000-$120,000 (premium brands)',
      'OPERATING COST: $12-18/hour (electricity, consumables, depreciation)',
      '',
      'RECOMMENDATION: Ideal for businesses starting with laser cutting or processing primarily thin',
      'materials in low-to-medium volumes. Limited thick material capability constrains future growth.',
    ]},
    { title: '3kW - 8kW Systems (Most Popular)', analysis: [
      'TARGET USERS: General fabrication shops, mid-size manufacturers, contract cutting services',
      'MATERIALS: Steel up to 20mm, stainless up to 12mm, aluminum up to 10mm',
      'APPLICATIONS: HVAC components, machinery parts, structural assemblies, furniture frames',
      'SPEED EXPECTATIONS: 8-15 m/min on 1mm steel, 3-6 m/min on 6mm steel, 0.8-1.5 m/min on 20mm',
      'INVESTMENT: 6kW systems: $120,000-$200,000, 8kW systems: $180,000-$280,000',
      'OPERATING COST: $18-28/hour',
      '',
      'RECOMMENDATION: The sweet spot for most fabricators. Handles 80-90% of typical job mix efficiently.',
      'Best value in terms of capability per dollar invested. Consider 6kW for predominately thin material',
      '(≤6mm), 8kW if regularly processing 10-20mm plate.',
    ]},
    { title: '8kW - 15kW Systems', analysis: [
      'TARGET USERS: Heavy fabrication, structural steel, shipbuilding, large OEMs',
      'MATERIALS: Steel up to 30mm, stainless up to 20mm, aluminum up to 15mm',
      'APPLICATIONS: Thick structural components, heavy machinery parts, pressure vessels',
      'SPEED EXPECTATIONS: 15-25 m/min on 3mm steel, 5-10 m/min on 10mm steel, 1-2 m/min on 25mm',
      'INVESTMENT: 10kW: $250,000-$350,000, 12kW: $280,000-$400,000, 15kW: $350,000-$500,000',
      'OPERATING COST: $28-40/hour',
      '',
      'RECOMMENDATION: For operations with consistent thick-plate demand or extreme speed requirements',
      'on medium materials. Higher investment and operating costs require substantial utilization (1.5-2',
      'shifts minimum) to justify versus 6-8kW systems.',
    ]},
    { title: '15kW+ Ultra-High Power', analysis: [
      'TARGET USERS: Specialized heavy industry, high-volume OEMs, extreme performance applications',
      'MATERIALS: Maximum thickness capability (steel 40mm+, stainless 30mm+)',
      'APPLICATIONS: Shipbuilding, mining equipment, construction machinery, wind turbine components',
      'SPEED: 2x faster than 12kW on thick materials (>15mm), diminishing returns on thin materials',
      'INVESTMENT: $450,000-$800,000+',
      'OPERATING COST: $40-60/hour',
      '',
      'RECOMMENDATION: Only for operations with proven demand for maximum thickness or speed on 10-25mm',
      'range. Most fabricators achieve better ROI with 12kW system plus second machine versus single 20kW+',
      'unit. Consider if shipbuilding, structural steel, or mining equipment represent 60%+ of volume.',
    ]},
  ];

  powerAnalysis.forEach(section => {
    checkPageBreak(80);

    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text(section.title, margin, yPosition);
    yPosition += 8;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    section.analysis.forEach(line => {
      checkPageBreak(30);
      doc.text(line, margin + 5, yPosition, { maxWidth: contentWidth - 5 });
      yPosition += 5;
    });

    yPosition += 5;
  });

  addPageNumber();

  // ========== SECTION 6: VENDOR LANDSCAPE ==========
  doc.addPage();
  yPosition = margin;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('6. Vendor Landscape & Selection Criteria', margin, yPosition);
  yPosition += 12;

  // Group by brand
  const brands: { [key: string]: LaserEquipment[] } = {};
  data.equipment.forEach(e => {
    const brand = e.brand || 'Other';
    if (!brands[brand]) brands[brand] = [];
    brands[brand].push(e);
  });

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`This report analyzes equipment from ${Object.keys(brands).length} manufacturers:`, margin, yPosition);
  yPosition += 10;

  doc.setFontSize(9);
  Object.entries(brands).forEach(([brand, equipment]) => {
    checkPageBreak(25);
    const powerRange = `${Math.min(...equipment.map(e => e.power_kw))}kW - ${Math.max(...equipment.map(e => e.power_kw))}kW`;
    doc.text(`• ${brand}: ${equipment.length} systems analyzed (${powerRange})`, margin + 5, yPosition);
    yPosition += 6;
  });

  yPosition += 10;
  const vendorGuidance = [
    'VENDOR EVALUATION FRAMEWORK:',
    '',
    '1. TECHNICAL CAPABILITY',
    '   • Power range and scalability options',
    '   • Positioning/repeat accuracy specifications',
    '   • Control system sophistication (Siemens, Fanuc, Beckhoff vs. domestic)',
    '   • Automation readiness (material handling integration, Industry 4.0)',
    '',
    '2. SERVICE & SUPPORT',
    '   • Local service presence and response time commitments',
    '   • Training programs (operator, maintenance, programming)',
    '   • Spare parts availability and pricing transparency',
    '   • Remote diagnostic capabilities',
    '',
    '3. TOTAL COST OF OWNERSHIP',
    '   • Initial purchase price vs. expected productivity',
    '   • Energy efficiency and operating costs',
    '   • Maintenance frequency and consumable costs',
    '   • Resale value and typical service life',
    '',
    '4. REPUTATION & REFERENCES',
    '   • Years in business and installation base',
    '   • Customer references in similar industries/applications',
    '   • Financial stability (warranty support long-term)',
    '   • Innovation track record (technology leadership)',
    '',
    'GLOBAL vs DOMESTIC MANUFACTURERS:',
    '',
    'Global Brands (Trumpf, Bystronic, Amada, etc.):',
    '• Premium pricing (often 30-50% higher)',
    '• Established technology and proven reliability',
    '• Comprehensive support networks in major markets',
    '• Best choice for mission-critical applications, aerospace/medical where downtime is unacceptable',
    '',
    'Chinese/Asian Manufacturers (OPMT, Han\'s Laser, BLM, etc.):',
    '• Competitive pricing (best value in 6-12kW range)',
    '• Rapidly improving quality and technology',
    '• Growing service networks (verify local support before purchase)',
    '• Ideal for cost-sensitive applications, general fabrication, operations with in-house technical staff',
    '',
    'STRATEGIC RECOMMENDATION: For most fabrication shops, mid-tier Chinese brands with proven track',
    'records and local service provide optimal price-performance. Reserve premium global brands for',
    'applications with extreme precision, uptime, or compliance requirements (aerospace, medical devices).',
  ];

  vendorGuidance.forEach(line => {
    checkPageBreak(40);
    doc.text(line, margin, yPosition, { maxWidth: contentWidth });
    yPosition += 5;
  });

  addPageNumber();

  // ========== SECTION 7: BUYING GUIDE ==========
  doc.addPage();
  yPosition = margin;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('7. Buyer\'s Guide: Selection Process', margin, yPosition);
  yPosition += 12;

  const buyingGuide = [
    'STEP 1: DEFINE REQUIREMENTS (2-4 weeks)',
    '',
    'A. Material Analysis',
    '   • List all materials you cut today (type, grade, thickness range)',
    '   • Identify materials you want to cut in next 3-5 years',
    '   • Calculate percentage of total volume by material-thickness combination',
    '   • Determine which materials represent 80% of volume (focus requirements here)',
    '',
    'B. Volume & Throughput',
    '   • Current annual material consumption (tons or square meters)',
    '   • Average part size and complexity',
    '   • Batch sizes (single pieces vs. production runs)',
    '   • Growth projections (conservative 5-year plan)',
    '',
    'C. Quality Standards',
    '   • Edge quality requirements (ISO 9013 grade 1-4, or specific Ra/Rz values)',
    '   • Dimensional tolerance requirements (typical: ±0.1-0.2mm, precision: ±0.05mm)',
    '   • Industry certifications needed (AS9100, ISO 13485, etc.)',
    '',
    'D. Budget Reality',
    '   • Equipment budget (be realistic: budget should support requirements)',
    '   • Installation costs (foundation, ventilation, utilities: 10-15% of equipment cost)',
    '   • First-year operating costs (consumables, labor, utilities: estimate 15-25% of purchase price)',
    '   • Financing options vs. cash purchase (impact on ROI calculation)',
    '',
    'STEP 2: SPECIFICATION DEVELOPMENT (1-2 weeks)',
    '',
    'Translate requirements into technical specifications:',
    '',
    '• Laser Power: Based on maximum material thickness (see Power Class Analysis section)',
    '  Rule of thumb: 1kW per 5mm of mild steel cutting capability',
    '',
    '• Work Area: Largest part dimension + 10-15% for part spacing and edge clearance',
    '  Consider: larger work area = better material utilization but higher cost and footprint',
    '',
    '• Positioning Accuracy: General fabrication: ±0.05mm, Precision parts: ±0.03mm, Aerospace: ±0.02mm',
    '',
    '• Control System: Determine if you need advanced features (auto-nesting, remote monitoring,',
    '  ERP integration) or if basic CNC suffices. Advanced systems add $15,000-$40,000.',
    '',
    '• Automation Level: Manual loading vs. automatic material handling (adds $50,000-$200,000+)',
    '',
    'STEP 3: VENDOR EVALUATION (4-6 weeks)',
    '',
    '• Request quotes from 4-6 vendors (mix of global brands and competitive domestic suppliers)',
    '• Schedule factory visits or video tours (understand manufacturing quality)',
    '• Request customer references (call 3+ references, ask about service responsiveness)',
    '• Attend demonstrations with YOUR materials (critical: run your thickest/most challenging parts)',
    '• Review warranty terms (2-year minimum, understand what\'s covered)',
    '',
    'STEP 4: FINANCIAL ANALYSIS (1-2 weeks)',
    '',
    'Build detailed ROI model including:',
    '• Labor savings vs. current cutting methods',
    '• Material yield improvements (better nesting)',
    '• Throughput gains (shorter cycle times)',
    '• Operating cost differences between quotes',
    '• Financing costs if applicable',
    '',
    'Target payback: 2-3 years for most fabrication applications',
    '(Shorter payback possible if replacing very inefficient legacy equipment)',
    '',
    'STEP 5: FINAL NEGOTIATION & PURCHASE (2-4 weeks)',
    '',
    '• Negotiate final pricing (ask for: training, extended warranty, spare parts package)',
    '• Clarify delivery timeline and penalties for delays',
    '• Define acceptance criteria (performance testing before final payment)',
    '• Arrange financing if needed (equipment loans, leases: compare total cost)',
    '• Plan installation logistics (electrical service, ventilation, crane access)',
    '',
    'TOTAL PROCESS TIMELINE: 3-4 months for thorough evaluation',
    'Rushing leads to poor decisions. Allow adequate time for each step.',
  ];

  buyingGuide.forEach(line => {
    checkPageBreak(40);
    doc.text(line, margin, yPosition, { maxWidth: contentWidth });
    yPosition += 5;
  });

  addPageNumber();

  // ========== SECTION 8: FUTURE TRENDS ==========
  doc.addPage();
  yPosition = margin;
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('8. Future Trends & Technology Evolution', margin, yPosition);
  yPosition += 12;

  const futureTrends = [
    '2025-2027 TECHNOLOGY ROADMAP:',
    '',
    '1. POWER ESCALATION CONTINUES',
    '   • 20kW+ systems becoming mainstream for heavy fabrication',
    '   • 30-40kW systems emerging for specialized thick-plate applications',
    '   • Power density improvements allow thicker cutting with same power',
    '',
    '2. INTELLIGENT PROCESS CONTROL',
    '   • Real-time adaptive parameter control based on cut quality feedback',
    '   • Machine learning optimizes parameters from historical cut data',
    '   • Automatic material grade recognition and parameter selection',
    '   • Predictive maintenance based on component usage patterns and vibration analysis',
    '',
    '3. AUTOMATION & LIGHTS-OUT OPERATION',
    '   • Robotic material loading/unloading becomes standard on mid-to-high-end systems',
    '   • Pallet changers enable 24/7 unmanned operation',
    '   • Integrated part sorting and stacking systems',
    '   • Remote monitoring and control from mobile devices',
    '',
    '4. MULTI-MATERIAL & MULTI-PROCESS SYSTEMS',
    '   • Hybrid systems combining cutting, welding, and additive manufacturing',
    '   • Quick-change heads for different processes',
    '   • Specialized beam shaping for optimized cutting of different materials',
    '',
    '5. SUSTAINABILITY FOCUS',
    '   • Further efficiency improvements (targeting 40-45% wall-plug efficiency)',
    '   • Reduced assist gas consumption through optimized nozzle designs',
    '   • Energy recovery from cooling systems',
    '   • Extended component lifespans reducing consumable waste',
    '',
    '6. SOFTWARE & CONNECTIVITY',
    '   • Cloud-based CAM with automatic nesting optimization',
    '   • Digital twin simulation for virtual process development',
    '   • Full ERP/MES integration for production planning',
    '   • Blockchain for parts traceability in regulated industries',
    '',
    'INVESTMENT IMPLICATIONS:',
    '',
    'For buyers in 2025:',
    '• Current technology is mature and reliable - no need to wait for "next generation"',
    '• Ensure purchased system has software/firmware upgrade path for future features',
    '• Consider modular designs allowing power upgrades or automation retrofits',
    '• Prioritize vendors with strong R&D track records and stable financials',
    '',
    'Technology refresh cycles (when to upgrade):',
    '• Entry systems (1-3kW): 5-7 years (rapid obsolescence as technology advances)',
    '• Mid-range (3-12kW): 7-10 years (mature technology, focus on productivity improvements)',
    '• High-power (12kW+): 10-15 years (premium systems retain value and capability longer)',
    '',
    'Typical upgrade triggers:',
    '• Increased material thickness requirements beyond current capability',
    '• Speed/throughput limitations constraining business growth',
    '• Quality/accuracy improvements needed for new customers/applications',
    '• Maintenance costs exceeding 15-20% of annual operating cost (repair vs. replace decision)',
  ];

  futureTrends.forEach(line => {
    checkPageBreak(40);
    doc.text(line, margin, yPosition, { maxWidth: contentWidth });
    yPosition += 5;
  });

  yPosition += 15;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('CONCLUSION', margin, yPosition);
  yPosition += 8;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const conclusion = [
    'The laser cutting equipment market offers unprecedented choice and value in 2025. Fiber laser',
    'technology has matured to the point where even entry-level systems deliver professional results,',
    'while high-end systems push the boundaries of speed, thickness capacity, and automation.',
    '',
    'Success in equipment selection depends on thorough needs analysis, realistic budget planning,',
    'and comprehensive vendor evaluation. Use this report as a starting point for your research,',
    'but always validate with hands-on demonstrations using your specific materials and parts.',
    '',
    'For additional resources and updated equipment specifications, visit LaserSpecHub.com.',
  ];

  conclusion.forEach(line => {
    doc.text(line, margin, yPosition, { maxWidth: contentWidth });
    yPosition += 5;
  });

  addPageNumber();

  // ========== BACK COVER ==========
  doc.addPage();
  doc.setFillColor(41, 98, 255);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('LaserSpecHub', pageWidth / 2, pageHeight / 2 - 20, { align: 'center' });
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Compare Equipment | Calculate Requirements | Make Informed Decisions', pageWidth / 2, pageHeight / 2, { align: 'center' });
  
  doc.setFontSize(10);
  doc.text('www.laserspechub.com', pageWidth / 2, pageHeight / 2 + 20, { align: 'center' });

  // Save PDF
  const filename = `LaserSpecHub-Market-Report-${data.version}.pdf`;
  doc.save(filename);
}

