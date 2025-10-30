import jsPDF from 'jspdf';
import type { LaserEquipment } from '@/types/equipment';

export interface ComparisonExportData {
  equipment: LaserEquipment[];
  timestamp: Date;
}

export function exportComparisonPDF(data: ComparisonExportData): void {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - 2 * margin;

  let yPosition = margin;

  // Title
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Laser Equipment Comparison', margin, yPosition);
  yPosition += 10;

  // Timestamp
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100);
  doc.text(
    `Generated: ${data.timestamp.toLocaleDateString()} ${data.timestamp.toLocaleTimeString()}`,
    margin,
    yPosition
  );
  yPosition += 15;
  doc.setTextColor(0);

  // Equipment Overview
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Equipment Overview', margin, yPosition);
  yPosition += 8;

  data.equipment.forEach((eq, index) => {
    if (yPosition > pageHeight - 40) {
      doc.addPage();
      yPosition = margin;
    }

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}. ${eq.brand} ${eq.model}`, margin + 5, yPosition);
    yPosition += 6;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(
      `Type: ${eq.laser_type} | Power: ${eq.power_kw} kW`,
      margin + 10,
      yPosition
    );
    yPosition += 5;

    if (eq.price_range) {
      doc.text(`Price Range: $${eq.price_range.replace('-', ' - $')}`, margin + 10, yPosition);
      yPosition += 5;
    }

    yPosition += 5;
  });

  yPosition += 10;

  // Detailed Comparison Table
  if (yPosition > pageHeight - 60) {
    doc.addPage();
    yPosition = margin;
  }

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Detailed Specifications', margin, yPosition);
  yPosition += 8;

  const specs = [
    { label: 'Laser Type', key: 'laser_type' },
    { label: 'Power (kW)', key: 'power_kw' },
    { label: 'Work Area (mm)', getValue: (eq: LaserEquipment) => 
      eq.work_area_length && eq.work_area_width 
        ? `${eq.work_area_length} × ${eq.work_area_width}` 
        : 'N/A' 
    },
    { label: 'Positioning Accuracy (mm)', getValue: (eq: LaserEquipment) => 
      eq.positioning_accuracy ? `±${eq.positioning_accuracy}` : 'N/A' 
    },
    { label: 'Repeat Accuracy (mm)', getValue: (eq: LaserEquipment) => 
      eq.repeat_accuracy ? `±${eq.repeat_accuracy}` : 'N/A' 
    },
    { label: 'Beam Quality (M²)', key: 'beam_quality' },
    { label: 'Wavelength (nm)', key: 'wavelength' },
    { label: 'Control System', key: 'control_system' },
    { label: 'Cooling Type', key: 'cooling_type' },
    { label: 'Power Consumption (kW)', key: 'power_consumption' },
    { label: 'Weight (kg)', key: 'weight' },
  ];

  doc.setFontSize(9);
  const colWidth = contentWidth / (data.equipment.length + 1);

  // Table Header
  doc.setFont('helvetica', 'bold');
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPosition, contentWidth, 8, 'F');
  doc.text('Specification', margin + 2, yPosition + 5);
  
  data.equipment.forEach((eq, index) => {
    const xPos = margin + colWidth * (index + 1);
    const text = `${eq.brand} ${eq.model}`;
    const truncated = text.length > 15 ? text.substring(0, 12) + '...' : text;
    doc.text(truncated, xPos + 2, yPosition + 5);
  });
  yPosition += 8;

  // Table Rows
  doc.setFont('helvetica', 'normal');
  specs.forEach((spec, index) => {
    if (yPosition > pageHeight - 20) {
      doc.addPage();
      yPosition = margin;
      
      // Re-draw header on new page
      doc.setFont('helvetica', 'bold');
      doc.setFillColor(240, 240, 240);
      doc.rect(margin, yPosition, contentWidth, 8, 'F');
      doc.text('Specification', margin + 2, yPosition + 5);
      data.equipment.forEach((eq, idx) => {
        const xPos = margin + colWidth * (idx + 1);
        const text = `${eq.brand} ${eq.model}`;
        const truncated = text.length > 15 ? text.substring(0, 12) + '...' : text;
        doc.text(truncated, xPos + 2, yPosition + 5);
      });
      yPosition += 8;
      doc.setFont('helvetica', 'normal');
    }

    // Alternate row background
    if (index % 2 === 1) {
      doc.setFillColor(250, 250, 250);
      doc.rect(margin, yPosition, contentWidth, 6, 'F');
    }

    // Specification label
    doc.text(spec.label, margin + 2, yPosition + 4);

    // Values
    data.equipment.forEach((eq, eqIndex) => {
      const xPos = margin + colWidth * (eqIndex + 1);
      let value: string;
      
      if ('getValue' in spec && spec.getValue) {
        value = spec.getValue(eq);
      } else if ('key' in spec && spec.key) {
        const rawValue = eq[spec.key as keyof LaserEquipment];
        value = rawValue?.toString() || 'N/A';
      } else {
        value = 'N/A';
      }

      doc.text(value, xPos + 2, yPosition + 4);
    });

    yPosition += 6;
  });

  // Footer
  yPosition = pageHeight - 15;
  doc.setFontSize(8);
  doc.setTextColor(150);
  doc.text(
    'Generated by LaserSpecHub - Compare laser equipment specifications',
    margin,
    yPosition
  );
  doc.text(
    `Page ${doc.getCurrentPageInfo().pageNumber}`,
    pageWidth - margin - 20,
    yPosition
  );

  // Save PDF
  const filename = `laser-comparison-${data.timestamp.getTime()}.pdf`;
  doc.save(filename);
}





