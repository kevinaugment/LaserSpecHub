import jsPDF from 'jspdf';
import type { PowerCalculationResult, PowerCalculationInput } from '@/lib/calculators/power-calculator';
import { MATERIALS, formatPower } from '@/lib/calculators/power-calculator';

export interface PDFExportData {
  input: PowerCalculationInput;
  result: PowerCalculationResult;
  timestamp: Date;
}

export function exportPowerCalculationPDF(data: PDFExportData): void {
  const doc = new jsPDF();
  const material = MATERIALS[data.input.materialId];
  
  if (!material) {
    throw new Error('Material not found');
  }
  
  // Header
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text('Laser Power Calculation Report', 105, 20, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Generated: ${data.timestamp.toLocaleString()}`, 105, 28, { align: 'center' });
  doc.text('LaserSpecHub.com', 105, 33, { align: 'center' });
  
  // Input Parameters
  let yPos = 45;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Input Parameters', 20, yPos);
  
  yPos += 10;
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  
  const inputParams = [
    ['Material:', material.name],
    ['Material Category:', material.category === 'metal' ? 'Metal' : 'Non-Metal'],
    ['Thickness:', `${data.input.thickness} ${data.input.unit === 'metric' ? 'mm' : 'inches'}`],
    ['Cutting Speed:', `${data.input.cuttingSpeed} ${data.input.unit === 'metric' ? 'm/min' : 'ft/min'}`],
    ['Quality Level:', data.input.quality.charAt(0).toUpperCase() + data.input.quality.slice(1)],
  ];
  
  inputParams.forEach(([label, value]) => {
    doc.text(label || '', 25, yPos);
    doc.setFont('helvetica', 'bold');
    doc.text(value || '', 80, yPos);
    doc.setFont('helvetica', 'normal');
    yPos += 7;
  });
  
  // Results
  yPos += 8;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Calculation Results', 20, yPos);
  
  yPos += 10;
  doc.setFontSize(16);
  doc.setTextColor(37, 99, 235); // primary-600
  doc.text(`Recommended Power: ${formatPower(data.result.recommendedPower)}`, 25, yPos);
  
  yPos += 8;
  doc.setFontSize(11);
  doc.setTextColor(0, 0, 0);
  doc.setFont('helvetica', 'normal');
  doc.text(`Power Range: ${formatPower(data.result.minPower)} - ${formatPower(data.result.maxPower)}`, 25, yPos);
  
  yPos += 8;
  doc.text(`Recommended Laser Type: ${data.result.laserType.map(t => t.toUpperCase()).join(', ')} Laser`, 25, yPos);
  
  yPos += 8;
  doc.text(`System Efficiency: ${data.result.efficiency}%`, 25, yPos);
  
  // Recommendations
  if (data.result.recommendations.length > 0) {
    yPos += 12;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Recommendations', 20, yPos);
    
    yPos += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    
    data.result.recommendations.forEach((rec, idx) => {
      const lines = doc.splitTextToSize(`${idx + 1}. ${rec}`, 170);
      lines.forEach((line: string) => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(line, 25, yPos);
        yPos += 5;
      });
      yPos += 2;
    });
  }
  
  // Warnings
  if (data.result.warnings.length > 0) {
    yPos += 8;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(234, 179, 8); // yellow-600
    doc.text('Warnings', 20, yPos);
    
    yPos += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(161, 98, 7); // yellow-700
    
    data.result.warnings.forEach((warning) => {
      const lines = doc.splitTextToSize(`⚠ ${warning}`, 170);
      lines.forEach((line: string) => {
        if (yPos > 270) {
          doc.addPage();
          yPos = 20;
        }
        doc.text(line, 25, yPos);
        yPos += 5;
      });
      yPos += 2;
    });
  }
  
  // Footer
  doc.setFontSize(8);
  doc.setTextColor(128, 128, 128);
  doc.setFont('helvetica', 'italic');
  const footerY = 285;
  doc.text('Disclaimer: Results are estimates based on typical conditions. Actual requirements may vary.', 105, footerY, { align: 'center' });
  doc.text('Always consult with equipment manufacturers for final specifications.', 105, footerY + 4, { align: 'center' });
  
  // Save
  const filename = `laser-power-calculation-${Date.now()}.pdf`;
  doc.save(filename);
}



