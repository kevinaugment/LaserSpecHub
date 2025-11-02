const fs = require('fs');
const { createCanvas } = require('canvas');

// Create a simple icon with gradient background
function createIcon(size, filename) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#3B82F6');
  gradient.addColorStop(1, '#1D4ED8');
  
  // Fill background
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.fill();

  // Draw "LS" text
  ctx.fillStyle = '#ffffff';
  ctx.font = `bold ${size * 0.3}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('LS', size / 2, size / 2);

  // Save as PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filename, buffer);
  console.log(`✓ Generated ${filename}`);
}

// Generate icons
console.log('Generating PWA icons...');
createIcon(192, 'public/icon-192.png');
createIcon(512, 'public/icon-512.png');
createIcon(32, 'public/favicon.png');
console.log('\nAll icons generated successfully!');

