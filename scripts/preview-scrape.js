#!/usr/bin/env node
const cheerio = require('cheerio');
const { URL } = require('node:url');
const { writeFileSync } = require('node:fs');

const TARGETS = [
  { brand: 'Bystronic', model: 'ByStar Fiber 4020', url: 'https://www.bystronic.com/en/products/laser-cutting-systems/bystar-fiber' },
  { brand: "Han's Laser", model: 'G3015F', url: 'https://www.hanslaser.net/product/laser-cutting/g3015f' },
  { brand: 'Epilog', model: 'Fusion Pro 48', url: 'https://www.epiloglaser.com/laser-machines/fusion-pro-laser-series/' }
];

function normalizeLaserTypeFromText(text) {
  const t = text.toLowerCase();
  if (t.includes('fiber')) return 'Fiber';
  if (t.includes('co2') || t.includes('co₂')) return 'CO2';
  if (t.includes('solid state') || t.includes('solid-state')) return 'Solid';
  return null;
}

function extractNumber(value) {
  if (!value) return null;
  const m = String(value).match(/\d+(?:\.\d+)?/);
  return m ? Number(m[0]) : null;
}

function extractTables($) {
  const result = { max_cutting_thickness: null, cutting_speed: null };
  const thickness = {};
  const speed = {};
  $('table').each((_, table) => {
    $(table)
      .find('tr')
      .each((i, tr) => {
        const cells = $(tr)
          .find('th,td')
          .map((_, c) => $(c).text().trim())
          .get();
        if (!cells.length) return;
        const rowText = cells.join(' ').toLowerCase();
        if (rowText.includes('steel') || rowText.includes('stainless') || rowText.includes('aluminum') || rowText.includes('brass') || rowText.includes('copper')) {
          const mat = cells[0].toLowerCase();
          const val = cells.find((t) => /mm/.test(t)) || cells[1];
          const num = extractNumber(val);
          if (num && num > 0 && num <= 80) {
            if (mat.includes('steel') && !mat.includes('stainless')) thickness.steel = Math.max(thickness.steel || 0, num);
            if (mat.includes('stainless')) thickness.stainless = Math.max(thickness.stainless || 0, num);
            if (mat.includes('aluminum') || mat.includes('aluminium')) thickness.aluminum = Math.max(thickness.aluminum || 0, num);
            if (mat.includes('brass')) thickness.brass = Math.max(thickness.brass || 0, num);
            if (mat.includes('copper')) thickness.copper = Math.max(thickness.copper || 0, num);
          }
        }
        if (/(m\/min|mm\/s)/i.test(rowText) && /\d+\s*mm/.test(rowText)) {
          const mat = (cells[0] || '').toLowerCase();
          const thickMatch = rowText.match(/(\d+)\s*mm/);
          const speedMatch = rowText.match(/(\d+(?:\.\d+)?)\s*(m\/min|mm\/s)/i);
          if (thickMatch && speedMatch) {
            const k = `${mat.includes('steel') && !mat.includes('stainless') ? 'steel' : mat.includes('stainless') ? 'stainless' : mat.includes('aluminum') || mat.includes('aluminium') ? 'aluminum' : 'steel'}_${thickMatch[1]}mm`;
            let val = Number(speedMatch[1]);
            const unit = speedMatch[2].toLowerCase();
            if (unit === 'mm/s') val = val * 0.06;
            speed[k] = Math.max(speed[k] || 0, val);
          }
        }
      });
  });
  result.max_cutting_thickness = Object.keys(thickness).length ? thickness : null;
  result.cutting_speed = Object.keys(speed).length ? speed : null;
  return result;
}

function parseSpecs($, baseUrl) {
  const fullText = $('body').text().replace(/\s+/g, ' ').trim();
  const textLower = fullText.toLowerCase();
  const laser_type = normalizeLaserTypeFromText(fullText);
  let power_kw = null;
  const powerMatch = fullText.match(/(\d{1,2}(?:\.\d)?)\s*kW/i);
  if (powerMatch) power_kw = Number(powerMatch[1]);
  let work_area_length = null;
  let work_area_width = null;
  const areaMatch = fullText.match(/(\d{3,5})\s*[x×]\s*(\d{3,5})\s*mm/i);
  if (areaMatch) {
    const A = Number(areaMatch[1]);
    const B = Number(areaMatch[2]);
    if (A >= 500 && B >= 500) { work_area_length = A; work_area_width = B; }
  }
  let wavelength = null;
  if (laser_type === 'Fiber') wavelength = 1070;
  if (laser_type === 'CO2') wavelength = 10600;
  let control_system = null;
  if (textLower.includes('siemens')) control_system = 'Siemens 840D';
  else if (textLower.includes('beckhoff')) control_system = 'Beckhoff TwinCAT';
  else if (textLower.includes('fanuc')) control_system = 'Fanuc CNC';
  else if (textLower.includes('cypcut')) control_system = 'Cypcut';
  else if (textLower.includes('amnc')) control_system = 'AMNC';
  let cooling_type = null;
  if (textLower.includes('water cooling') || textLower.includes('water-cooled') || textLower.includes('chiller')) cooling_type = 'Water';
  if (laser_type === 'Fiber' && !cooling_type) cooling_type = 'Water';
  if (laser_type === 'CO2' && !cooling_type) cooling_type = 'Air';
  let image_url = $('meta[property="og:image"]').attr('content') || null;
  if (image_url) { try { image_url = new URL(image_url, baseUrl).toString(); } catch {} }
  const ogDesc = $('meta[property="og:description"]').attr('content') || '';
  const metaDesc = $('meta[name="description"]').attr('content') || '';
  const description = (ogDesc || metaDesc || '').trim() || null;
  let spec_sheet_url = null;
  $('a[href]').each((_, a) => {
    const href = $(a).attr('href');
    if (!href) return;
    const text = $(a).text().toLowerCase();
    if (/\.pdf($|\?)/i.test(href) && (text.includes('spec') || text.includes('brochure') || text.includes('data'))) {
      try { spec_sheet_url = new URL(href, baseUrl).toString(); } catch {}
    }
  });
  const tables = extractTables($);
  return { laser_type, power_kw, work_area_length, work_area_width, wavelength, control_system, cooling_type, image_url, description, spec_sheet_url, ...tables };
}

async function fetchPage(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LaserSpecHubBot/1.0)' } });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const html = await res.text();
  return cheerio.load(html);
}

async function main() {
  const out = [];
  for (const t of TARGETS) {
    try {
      const $ = await fetchPage(t.url);
      const specs = parseSpecs($, t.url);
      out.push({ brand: t.brand, model: t.model, manufacturer_url: t.url, ...specs });
      console.log(`OK: ${t.brand} ${t.model}`);
    } catch (e) {
      console.error(`ERR: ${t.brand} ${t.model}:`, e.message);
    }
  }
  writeFileSync('scrape-preview.json', JSON.stringify(out, null, 2));
  console.log('Wrote scrape-preview.json');
}

main().catch((e) => { console.error(e); process.exit(1); });


