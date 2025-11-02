import sharp from 'sharp';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Read the SVG file
const svgBuffer = readFileSync(join(projectRoot, 'app', 'icon.svg'));

// Generate icons
async function generateIcons() {
  console.log('Generating PWA icons...');

  // Generate 192x192 icon
  await sharp(svgBuffer)
    .resize(192, 192)
    .png()
    .toFile(join(projectRoot, 'public', 'icon-192.png'));
  console.log('✓ Generated icon-192.png');

  // Generate 512x512 icon
  await sharp(svgBuffer)
    .resize(512, 512)
    .png()
    .toFile(join(projectRoot, 'public', 'icon-512.png'));
  console.log('✓ Generated icon-512.png');

  // Generate favicon.ico (32x32 and 16x16)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(projectRoot, 'public', 'favicon-32.png'));
  console.log('✓ Generated favicon-32.png (for favicon.ico)');

  await sharp(svgBuffer)
    .resize(16, 16)
    .png()
    .toFile(join(projectRoot, 'public', 'favicon-16.png'));
  console.log('✓ Generated favicon-16.png (for favicon.ico)');

  console.log('\nAll icons generated successfully!');
  console.log('Note: favicon.ico should be created from favicon-32.png and favicon-16.png');
}

generateIcons().catch(console.error);

