#!/usr/bin/env node
/*
  Scrape a curated list of manufacturer product pages and import into the app via /api/admin/import.
  Heuristics are conservative; missing fields are left null. Improve adapters over time.
*/

// Node 18+ has global fetch
const cheerio = require('cheerio');
const { URL } = require('node:url');
const { setTimeout: delay } = require('node:timers/promises');
const pdfParse = require('pdf-parse');

const BRAND_COUNTRY = {
  'TRUMPF': 'DE',
  'Trumpf': 'DE',
  'Bystronic': 'CH',
  'AMADA': 'JP',
  'Mazak': 'JP',
  'LVD': 'BE',
  'Prima': 'IT',
  'Prima Power': 'IT',
  'Mitsubishi': 'JP',
  "Han's Laser": 'CN',
  'Bodor': 'CN',
  'Epilog': 'US',
  'Trotec': 'AT',
  'Universal Laser': 'US',
  'ULS': 'US',
};

// Brand-specific adapters: return partial fields to override generic parsing
const brandAdapters = {
  'TRUMPF': ($, baseUrl) => {
    const t = $('main').text().replace(/\s+/g, ' ');
    const out = {};
    const power = t.match(/(\d{1,2}(?:\.\d)?)\s*kW/i);
    if (power) out.power_kw = Number(power[1]);
    const area = t.match(/(\d{3,5})\s*[x×]\s*(\d{3,5})\s*mm/i);
    if (area) { const A = +area[1], B = +area[2]; if (A>=500 && B>=500) { out.work_area_length=A; out.work_area_width=B; } }
    out.laser_type = 'Fiber';
    return out;
  },
  'AMADA': ($) => {
    const t = $('body').text().replace(/\s+/g, ' ');
    const out = { laser_type: 'Fiber' };
    const area = t.match(/(\d{3,5})\s*[x×]\s*(\d{3,5})\s*mm/i);
    if (area) { const A = +area[1], B = +area[2]; if (A>=500 && B>=500) { out.work_area_length=A; out.work_area_width=B; } }
    return out;
  },
  'Mazak': ($) => {
    const t = $('body').text().replace(/\s+/g, ' ');
    const out = { laser_type: 'Fiber' };
    const power = t.match(/(\d{1,2}(?:\.\d)?)\s*kW/i);
    if (power) out.power_kw = Number(power[1]);
    return out;
  },
  'LVD': ($) => {
    const t = $('body').text().replace(/\s+/g, ' ');
    const out = { laser_type: 'Fiber' };
    const area = t.match(/(\d{3,5})\s*[x×]\s*(\d{3,5})\s*mm/i);
    if (area) { const A = +area[1], B = +area[2]; if (A>=500 && B>=500) { out.work_area_length=A; out.work_area_width=B; } }
    return out;
  },
  'Prima Power': ($) => {
    const t = $('body').text().replace(/\s+/g, ' ');
    const out = { laser_type: 'Fiber' };
    const power = t.match(/(\d{1,2}(?:\.\d)?)\s*kW/i);
    if (power) out.power_kw = Number(power[1]);
    return out;
  },
  'Mitsubishi': ($) => {
    const t = $('body').text().replace(/\s+/g, ' ');
    const out = { laser_type: 'Fiber' };
    const area = t.match(/(\d{3,5})\s*[x×]\s*(\d{3,5})\s*mm/i);
    if (area) { const A = +area[1], B = +area[2]; if (A>=500 && B>=500) { out.work_area_length=A; out.work_area_width=B; } }
    return out;
  },
  "Han's Laser": ($) => {
    return { laser_type: 'Fiber' };
  },
  'Bodor': ($) => {
    return { laser_type: 'Fiber' };
  },
  'Trotec': ($) => {
    const t = $('body').text().toLowerCase();
    const isCo2 = t.includes('co2') || t.includes('engraver') || t.includes('speedy');
    return { laser_type: isCo2 ? 'CO2' : 'CO2' };
  },
  'Universal Laser': ($) => ({ laser_type: 'CO2' }),
  'ULS': ($) => ({ laser_type: 'CO2' }),
};

let TARGETS = [
  // TRUMPF
  { brand: 'TRUMPF', model: 'TruLaser 5030', url: 'https://www.trumpf.com/en_US/products/machines-systems/2d-laser-cutting-machines/trulaser-5030-5040-5060-fiber/' },
  { brand: 'TRUMPF', model: 'TruLaser 3030', url: 'https://www.trumpf.com/en_US/products/machines-systems/2d-laser-cutting-machines/trulaser-3030-fiber/' },
  // Bystronic
  { brand: 'Bystronic', model: 'ByStar Fiber 4020', url: 'https://www.bystronic.com/en/products/laser-cutting-systems/bystar-fiber' },
  { brand: 'Bystronic', model: 'BySmart Fiber 3015', url: 'https://www.bystronic.com/en/products/laser-cutting-systems/bysmart-fiber' },
  // AMADA
  { brand: 'AMADA', model: 'LCG AJ 4020', url: 'https://www.amada.com/america/product/laser-cutting/aj-fiber' },
  { brand: 'AMADA', model: 'ENSIS 3015 AJ', url: 'https://www.amada.com/america/product/laser-cutting/ensis-aj' },
  // Mazak
  { brand: 'Mazak', model: 'OPTIPLEX 3015', url: 'https://www.mazakoptilas.com/products/optiplex-3015-fiber' },
  { brand: 'Mazak', model: 'OPTIPLEX NEXUS 3015', url: 'https://www.mazakoptilas.com/products/optiplex-nexus-3015-fiber' },
  // LVD
  { brand: 'LVD', model: 'Electra FL-3015', url: 'https://www.lvdgroup.com/en/electra-fiber-laser-cutting-machine' },
  { brand: 'LVD', model: 'Phoenix FL 4020', url: 'https://www.lvdgroup.com/en/phoenix-fiber-laser-cutting-machine' },
  // Prima Power
  { brand: 'Prima Power', model: 'Fiber EVO 4', url: 'https://www.primapower.com/products/laser-cutting/platino-fiber' },
  { brand: 'Prima Power', model: 'Laser Genius+', url: 'https://www.primapower.com/products/laser-cutting/laser-genius-plus' },
  // Mitsubishi
  { brand: 'Mitsubishi', model: 'ML3015eX-F40', url: 'https://us.mitsubishilaser.com/products/ml3015-ex-fiber' },
  { brand: 'Mitsubishi', model: 'GX-F 3015', url: 'https://us.mitsubishilaser.com/products/gx-f' },
  // Han's
  { brand: "Han's Laser", model: 'G3015F', url: 'https://www.hanslaser.net/product/laser-cutting/g3015f' },
  { brand: "Han's Laser", model: 'G4020H', url: 'https://www.hanslaser.net/product/laser-cutting/g4020h' },
  // Bodor
  { brand: 'Bodor', model: 'P3015', url: 'https://www.bodor.com/product/p-series' },
  { brand: 'Bodor', model: 'A3', url: 'https://www.bodor.com/product/a-series' },
  // Epilog (CO2)
  { brand: 'Epilog', model: 'Fusion Pro 48', url: 'https://www.epiloglaser.com/laser-machines/fusion-pro-laser-series/' },
  { brand: 'Epilog', model: 'Fusion Edge 36', url: 'https://www.epiloglaser.com/laser-machines/fusion-edge-laser-series/' },
  // Trotec (CO2)
  { brand: 'Trotec', model: 'Speedy 400', url: 'https://www.troteclaser.com/en/laser-machines/speedy-laser-engraver' },
  { brand: 'Trotec', model: 'Speedy 300', url: 'https://www.troteclaser.com/en/laser-machines/laser-engraving-machines/speedy-300' },
  // Universal Laser / ULS (CO2)
  { brand: 'Universal Laser', model: 'PLS6.150D', url: 'https://www.ulsinc.com/products/pls6-150d' },
  { brand: 'ULS', model: 'VLS 6.60', url: 'https://www.ulsinc.com/products/vls-660' },
];

// Optional brand listing sources to auto-discover more product pages
const LISTING_SOURCES = [
  { brand: "Han's Laser", url: 'https://www.hanslaser.net/product/laser-cutting', match: /\/product\/laser-cutting\//i, max: 8 },
  { brand: 'Bystronic', url: 'https://www.bystronic.com/en/products/laser-cutting-systems', match: /\/products\/laser-cutting-systems\//i, max: 8 },
  { brand: 'Epilog', url: 'https://www.epiloglaser.com/laser-machines/', match: /\/laser-machines\//i, max: 6 },
];

const BRAND_SITEMAPS = [
  { brand: 'TRUMPF', base: 'https://www.trumpf.com', sitemap: '/sitemap.xml' },
  { brand: 'Bystronic', base: 'https://www.bystronic.com', sitemap: '/sitemap.xml' },
  { brand: 'AMADA', base: 'https://www.amada.com', sitemap: '/sitemap.xml' },
  { brand: 'Mazak', base: 'https://www.mazakoptilas.com', sitemap: '/sitemap.xml' },
  { brand: 'LVD', base: 'https://www.lvdgroup.com', sitemap: '/sitemap.xml' },
  { brand: 'Prima Power', base: 'https://www.primapower.com', sitemap: '/sitemap.xml' },
  { brand: 'Mitsubishi', base: 'https://us.mitsubishilaser.com', sitemap: '/sitemap.xml' },
  { brand: "Han's Laser", base: 'https://www.hanslaser.net', sitemap: '/sitemap.xml' },
  { brand: 'Bodor', base: 'https://www.bodor.com', sitemap: '/sitemap.xml' },
  { brand: 'Epilog', base: 'https://www.epiloglaser.com', sitemap: '/sitemap.xml' },
  { brand: 'Trotec', base: 'https://www.troteclaser.com', sitemap: '/sitemap.xml' },
  { brand: 'ULS', base: 'https://www.ulsinc.com', sitemap: '/sitemap.xml' },
];

const BRAND_ALLOWED_HOSTS = {
  'TRUMPF': ['www.trumpf.com'],
  'Bystronic': ['www.bystronic.com'],
  'AMADA': ['www.amada.com', 'www.amada.co.uk', 'www.amada.eu'],
  'Mazak': ['www.mazakoptilas.com'],
  'LVD': ['www.lvdgroup.com'],
  'Prima Power': ['www.primapower.com'],
  'Mitsubishi': ['us.mitsubishilaser.com'],
  "Han's Laser": ['www.hanslaser.net'],
  'Bodor': ['www.bodor.com'],
  'Epilog': ['www.epiloglaser.com'],
  'Trotec': ['www.troteclaser.com'],
  'Universal Laser': ['www.ulsinc.com'],
  'ULS': ['www.ulsinc.com'],
};

function isHostAllowed(url, brand) {
  try {
    const u = new URL(url);
    const allowed = BRAND_ALLOWED_HOSTS[brand];
    if (!allowed || allowed.length === 0) return true;
    return allowed.includes(u.host);
  } catch { return false; }
}

function isLikelyProductUrl(url, brand) {
  if (!/^https?:\/\//i.test(url)) return false;
  if (/\.(xml|jpg|png|webp|gif|svg|css|js)(?:$|\?)/i.test(url)) return false;
  const u = url.toLowerCase();
  if (!/(product|products|machines|systems|laser|cutting|engraving)/.test(u)) return false;
  if (/(contact|about|news|sitemap|category|tag|search|download|driver|install|support|guide)/.test(u)) return false;
  if (brand === 'Epilog' && !/laser-machines/.test(u)) return false;
  if (brand === 'Bystronic' && !/laser-cutting/.test(u)) return false;
  if (brand === "Han's Laser" && !/laser-cutting/.test(u)) return false;
  if (!isHostAllowed(url, brand)) return false;
  return true;
}

function isLikelySpecPdf(url) {
  if (!/\.pdf($|\?)/i.test(url)) return false;
  const u = url.toLowerCase();
  if (/(spec|brochure|data|datasheet)/.test(u) && !/(user|guide|manual|driver|install|report)/.test(u)) return true;
  return false;
}

function isGoodRecord(record) {
  if (!record.brand || !record.model || !record.laser_type) return false;
  const hasCore =
    (typeof record.power_kw === 'number' && record.power_kw > 0) ||
    (typeof record.work_area_length === 'number' && record.work_area_length >= 500) ||
    (typeof record.work_area_width === 'number' && record.work_area_width >= 300) ||
    (record.max_cutting_thickness && Object.keys(record.max_cutting_thickness).length > 0);
  if (!hasCore) return false;
  const badModels = ['About', 'Contact', 'News', 'Sitemap', 'Activity', 'Become A Dealer', 'Solutions And Products'];
  if (badModels.includes(record.model)) return false;
  const url = (record.manufacturer_url || '').toLowerCase();
  if (/\.(xml)$/.test(url)) return false;
  if (/(welder|welding|driver|install|category|tag|search)/.test(url)) return false;
  if (record.brand === 'Bodor' && /welder/.test(url)) return false;
  return true;
}

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

function parseSpecs($, baseUrl) {
  const fullText = $('body').text().replace(/\s+/g, ' ').trim();
  const textLower = fullText.toLowerCase();

  // laser_type
  const laser_type = normalizeLaserTypeFromText(fullText);

  // power (kW)
  let power_kw = null;
  const powerMatch = fullText.match(/(\d{1,2}(?:\.\d)?)\s*kW/i);
  if (powerMatch) power_kw = Number(powerMatch[1]);

  // work area (mm) patterns like 3000 x 1500, 4000×2000, 1219 x 914
  let work_area_length = null;
  let work_area_width = null;
  const areaMatch = fullText.match(/(\d{3,5})\s*[x×]\s*(\d{3,5})\s*mm/i);
  if (areaMatch) {
    const A = Number(areaMatch[1]);
    const B = Number(areaMatch[2]);
    if (A >= 500 && B >= 500) {
      work_area_length = A;
      work_area_width = B;
    }
  }

  // wavelength heuristic
  let wavelength = null;
  if (laser_type === 'Fiber') wavelength = 1070;
  if (laser_type === 'CO2') wavelength = 10600;

  // control system (best effort)
  let control_system = null;
  if (textLower.includes('siemens')) control_system = 'Siemens 840D';
  else if (textLower.includes('beckhoff')) control_system = 'Beckhoff TwinCAT';
  else if (textLower.includes('fanuc')) control_system = 'Fanuc CNC';
  else if (textLower.includes('cypcut')) control_system = 'Cypcut';
  else if (textLower.includes('amnc')) control_system = 'AMNC';

  // cooling
  let cooling_type = null;
  if (textLower.includes('water cooling') || textLower.includes('water-cooled') || textLower.includes('chiller')) cooling_type = 'Water';
  if (laser_type === 'Fiber' && !cooling_type) cooling_type = 'Water';
  if (laser_type === 'CO2' && !cooling_type) cooling_type = 'Air';

  // OpenGraph image
  let image_url = $('meta[property="og:image"]').attr('content') || null;
  if (image_url) {
    try { image_url = new URL(image_url, baseUrl).toString(); } catch {}
  }

  // description
  const ogDesc = $('meta[property="og:description"]').attr('content') || '';
  const metaDesc = $('meta[name="description"]').attr('content') || '';
  const description = (ogDesc || metaDesc || '').trim() || null;

  // spec sheet link (best-effort: pdf link with brochure/spec)
  let spec_sheet_url = null;
  $('a[href]').each((_, a) => {
    const href = $(a).attr('href');
    if (!href) return;
    const text = $(a).text().toLowerCase();
    if (/\.pdf($|\?)/i.test(href) && (text.includes('spec') || text.includes('brochure') || text.includes('data'))) {
      try { spec_sheet_url = new URL(href, baseUrl).toString(); } catch {}
    }
  });

  return {
    laser_type, power_kw, work_area_length, work_area_width,
    wavelength, control_system, cooling_type, image_url, description, spec_sheet_url,
  };
}

// Extract thickness and speed from tables where possible
function extractTables($) {
  const result = { max_cutting_thickness: null, cutting_speed: null };
  const thickness = {};
  const speed = {};
  $('table').each((_, table) => {
    const headers = [];
    $(table)
      .find('tr')
      .each((i, tr) => {
        const cells = $(tr)
          .find('th,td')
          .map((_, c) => $(c).text().trim())
          .get();
        if (!cells.length) return;
        if (i === 0) headers.push(...cells.map((h) => h.toLowerCase()));
        const rowText = cells.join(' ').toLowerCase();
        // thickness rows
        if (rowText.includes('steel') || rowText.includes('stainless') || rowText.includes('aluminum') || rowText.includes('brass') || rowText.includes('copper')) {
          const mat = cells[0].toLowerCase();
          const val = cells.find((t) => /mm/.test(t)) || cells[1];
          const num = extractNumber(val);
          if (num && num > 0 && num <= 80) { // sanity guard
            if (mat.includes('steel') && !mat.includes('stainless')) thickness.steel = Math.max(thickness.steel || 0, num);
            if (mat.includes('stainless')) thickness.stainless = Math.max(thickness.stainless || 0, num);
            if (mat.includes('aluminum') || mat.includes('aluminium')) thickness.aluminum = Math.max(thickness.aluminum || 0, num);
            if (mat.includes('brass')) thickness.brass = Math.max(thickness.brass || 0, num);
            if (mat.includes('copper')) thickness.copper = Math.max(thickness.copper || 0, num);
          }
        }
        // speed rows like steel 10 mm 3.0 m/min
        if (/(m\/min|mm\/s)/i.test(rowText) && /\d+\s*mm/.test(rowText)) {
          const mat = (cells[0] || '').toLowerCase();
          const thickMatch = rowText.match(/(\d+)\s*mm/);
          const speedMatch = rowText.match(/(\d+(?:\.\d+)?)\s*(m\/min|mm\/s)/i);
          if (thickMatch && speedMatch) {
            const k = `${mat.includes('steel') && !mat.includes('stainless') ? 'steel' : mat.includes('stainless') ? 'stainless' : mat.includes('aluminum') || mat.includes('aluminium') ? 'aluminum' : 'steel'}_${thickMatch[1]}mm`;
            let val = Number(speedMatch[1]);
            const unit = speedMatch[2].toLowerCase();
            if (unit === 'mm/s') val = val * 0.06; // convert approx to m/min
            speed[k] = Math.max(speed[k] || 0, val);
          }
        }
      });
  });
  result.max_cutting_thickness = Object.keys(thickness).length ? thickness : null;
  result.cutting_speed = Object.keys(speed).length ? speed : null;
  return result;
}

async function fetchPage(url) {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (compatible; LaserSpecHubBot/1.0; +https://example.com)'
    },
  });
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  const html = await res.text();
  return cheerio.load(html);
}

async function discoverTargetsFromListing() {
  const discovered = [];
  for (const src of LISTING_SOURCES) {
    try {
      const $ = await fetchPage(src.url);
      const seen = new Set();
      $('a[href]').each((_, a) => {
        const href = $(a).attr('href');
        if (!href) return;
        if (!src.match.test(href)) return;
        try {
          const u = new URL(href, src.url).toString();
          if (seen.has(u)) return;
          seen.add(u);
        } catch {}
      });
      const urls = Array.from(seen).slice(0, src.max);
      for (const u of urls) {
        // Derive a model name from URL slug
        const slug = u.split('/').filter(Boolean).pop() || '';
        const model = slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase()).slice(0, 40) || 'Model';
        discovered.push({ brand: src.brand, model, url: u });
      }
      console.log(`Discovered ${urls.length} ${src.brand} URLs from listing`);
      await delay(400);
    } catch (e) {
      console.warn(`Listing discovery failed for ${src.brand}:`, e.message);
    }
  }
  return discovered;
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LaserSpecHubBot/1.0)' } });
  if (!res.ok) throw new Error(`Failed: ${res.status}`);
  return await res.text();
}

async function discoverFromSitemaps() {
  const out = [];
  for (const s of BRAND_SITEMAPS) {
    try {
      const xml = await fetchText(s.base + s.sitemap);
      const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => m[1]);
      const productUrls = urls.filter((u) => isLikelyProductUrl(u, s.brand));
      const pdfUrls = urls.filter((u) => isLikelySpecPdf(u) && isHostAllowed(u, s.brand));
      const uniq = new Set();
      for (const u of productUrls.slice(0, 30)) {
        if (uniq.has(u)) continue; uniq.add(u);
        const slug = u.split('/').filter(Boolean).pop() || '';
        const model = slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase()).slice(0, 40) || 'Model';
        out.push({ brand: s.brand, model, url: u });
      }
      for (const p of pdfUrls.slice(0, 50)) {
        const slug = p.split('/').pop() || 'Spec';
        const model = slug.replace(/[-_]/g, ' ').replace(/\.[A-Za-z0-9]+$/, '').slice(0, 40) || 'Spec';
        out.push({ brand: s.brand, model, url: p });
      }
      console.log(`Sitemap discovered for ${s.brand}: ${productUrls.length} pages, ${pdfUrls.length} pdfs`);
      await delay(300);
    } catch (e) {
      console.warn(`Sitemap discovery failed for ${s.brand}:`, e.message);
    }
  }
  return out;
}

async function fetchPdfBuffer(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; LaserSpecHubBot/1.0)' } });
  if (!res.ok) throw new Error(`PDF fetch failed: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  return buf;
}

async function parsePdfSpecs(url) {
  try {
    const buf = await fetchPdfBuffer(url);
    const data = await pdfParse(buf);
    const text = data.text.replace(/\s+/g, ' ');
    const out = {};
    // power kW
    const p = text.match(/(\d{1,2}(?:\.\d)?)\s*kW/i);
    if (p) out.power_kw = Number(p[1]);
    // work area mm
    const a = text.match(/(\d{3,5})\s*[x×]\s*(\d{3,5})\s*mm/i);
    if (a) { const A = +a[1], B = +a[2]; if (A>=500 && B>=500) { out.work_area_length=A; out.work_area_width=B; } }
    // wavelength heuristic from context words
    if (/fiber/i.test(text)) out.laser_type = 'Fiber';
    if (/co2|co₂/i.test(text)) out.laser_type = 'CO2';
    if (out.laser_type === 'Fiber') out.wavelength = 1070;
    if (out.laser_type === 'CO2') out.wavelength = 10600;
    // thickness table heuristics
    const thickness = {};
    const mats = ['steel', 'stainless', 'aluminum', 'aluminium', 'brass', 'copper'];
    for (const m of mats) {
      const re = new RegExp(`${m}[^\n]*?(\d{1,2}(?:\.\d+)?)\s*mm`, 'i');
      const mm = text.match(re);
      if (mm) {
        const val = Number(mm[1]);
        if (val > 0 && val <= 80) {
          const key = m === 'aluminium' ? 'aluminum' : (m === 'steel' ? 'steel' : m);
          thickness[key] = Math.max(thickness[key] || 0, val);
        }
      }
    }
    if (Object.keys(thickness).length) out.max_cutting_thickness = thickness;
    return out;
  } catch (e) {
    return {};
  }
}

async function main() {
  const baseImportUrl = process.env.IMPORT_URL || 'http://localhost:3000/api/admin/import';
  const onlyBrand = process.env.BRAND || process.argv.slice(2).find((a) => a.startsWith('--brand='))?.split('=')[1];
  const dryRun = String(process.env.DRY_RUN || '').toLowerCase() === 'true' || process.argv.includes('--dry');
  const outputPath = process.env.OUTPUT || (process.argv.find((a) => a.startsWith('--output='))?.split('=')[1]);
  const seedsPath = process.env.SEEDS || (process.argv.find((a) => a.startsWith('--seeds='))?.split('=')[1]);
  // Expand targets with discovered URLs
  try {
    if (seedsPath) {
      try {
        const fs = require('node:fs');
        const text = fs.readFileSync(seedsPath, 'utf-8');
        const seeds = JSON.parse(text);
        if (Array.isArray(seeds)) {
          const existingUrls = new Set(TARGETS.map((t) => t.url));
          for (const s of seeds) {
            if (!s || !s.url || !s.brand) continue;
            if (onlyBrand && s.brand.toLowerCase() !== onlyBrand.toLowerCase()) continue;
            if (!existingUrls.has(s.url)) {
              TARGETS.push({ brand: s.brand, model: s.model || 'Model', url: s.url });
              existingUrls.add(s.url);
            }
          }
          console.log(`Loaded ${seeds.length} seeds from ${seedsPath}`);
        }
      } catch (e) {
        console.warn(`Failed to load seeds: ${e.message}`);
      }
    }
    const extra = await discoverTargetsFromListing();
    const fromSitemaps = await discoverFromSitemaps();
    // Deduplicate by URL
    const existingUrls = new Set(TARGETS.map((t) => t.url));
    for (const rec of [...extra, ...fromSitemaps]) if (!existingUrls.has(rec.url)) { TARGETS.push(rec); existingUrls.add(rec.url); }
  } catch {}

  // Filter by brand if specified
  if (onlyBrand) {
    TARGETS = TARGETS.filter((t) => t.brand.toLowerCase() === onlyBrand.toLowerCase());
  }

  const results = [];

  // Simple concurrency to be polite
  for (const t of TARGETS) {
    try {
      let specs = {};
      let $ = null;
      if (/\.pdf($|\?)/i.test(t.url)) {
        specs = await parsePdfSpecs(t.url);
      } else {
        $ = await fetchPage(t.url);
        specs = parseSpecs($, t.url);
        if (brandAdapters[t.brand]) {
          try {
            const override = brandAdapters[t.brand]($, t.url) || {};
            specs = { ...specs, ...override };
          } catch {}
        }
      }
      const tables = $ ? extractTables($) : { max_cutting_thickness: undefined, cutting_speed: undefined };
      const record = {
        brand: t.brand,
        model: t.model,
        laser_type: specs.laser_type,
        power_kw: specs.power_kw,
        work_area_length: specs.work_area_length,
        work_area_width: specs.work_area_width,
        positioning_accuracy: null,
        repeat_accuracy: null,
        beam_quality: null,
        wavelength: specs.wavelength,
        control_system: specs.control_system,
        cooling_type: specs.cooling_type,
        power_consumption: null,
        dimensions: null,
        weight: null,
        price_range: null,
        manufacturer_url: t.url,
        spec_sheet_url: specs.spec_sheet_url,
        image_url: specs.image_url,
        description: specs.description,
        applications: null,
        origin_country: BRAND_COUNTRY[t.brand] || null,
        max_cutting_thickness: tables.max_cutting_thickness,
        cutting_speed: tables.cutting_speed,
      };
      // Brand-based defaulting/override
      if (t.brand === 'Epilog' || t.brand === 'Trotec' || t.brand === 'Universal Laser' || t.brand === 'ULS') record.laser_type = 'CO2';
      if (!record.laser_type) {
        if (t.brand === 'TRUMPF' || t.brand === 'Bystronic' || t.brand === 'AMADA' || t.brand === 'Mazak' || t.brand === 'LVD' || t.brand === 'Mitsubishi' || t.brand === 'Bodor' || t.brand === "Han's Laser" || t.brand === 'Prima Power') record.laser_type = 'Fiber';
      }
      if (!isGoodRecord(record)) {
        console.warn(`Skip (quality gate): ${t.brand} ${t.model}`);
        continue;
      }
      results.push(record);
      console.log(`Prepared: ${t.brand} ${t.model}`);
      await delay(500);
    } catch (e) {
      console.error(`Error on ${t.brand} ${t.model}:`, e.message);
    }
  }

  if (results.length === 0) {
    console.error('No records to import');
    process.exit(1);
  }

  if (dryRun || outputPath) {
    const fs = require('node:fs');
    const path = outputPath || `data/equipment-import-${onlyBrand ? onlyBrand.toLowerCase()+'-' : ''}${Date.now()}.json`;
    const dir = require('node:path').dirname(path);
    try { fs.mkdirSync(dir, { recursive: true }); } catch {}
    if (path.endsWith('.csv')) {
      const headers = ['brand','model','laser_type','power_kw','work_area_length','work_area_width','max_cutting_thickness','cutting_speed','positioning_accuracy','repeat_accuracy','beam_quality','wavelength','control_system','cooling_type','power_consumption','dimensions','weight','price_range','manufacturer_url','spec_sheet_url','image_url','description','applications','origin_country'];
      const toCell = (v) => {
        if (v === null || v === undefined) return '';
        if (typeof v === 'object') return '"'+JSON.stringify(v).replace(/"/g,'""')+'"';
        const s = String(v);
        return (s.includes(',') || s.includes('"') || s.includes('\n')) ? '"'+s.replace(/"/g,'""')+'"' : s;
      };
      const lines = [headers.join(',')];
      for (const r of results) {
        const row = [
          r.brand, r.model, r.laser_type, r.power_kw ?? '', r.work_area_length ?? '', r.work_area_width ?? '',
          r.max_cutting_thickness ?? '', r.cutting_speed ?? '', r.positioning_accuracy ?? '', r.repeat_accuracy ?? '',
          r.beam_quality ?? '', r.wavelength ?? '', r.control_system ?? '', r.cooling_type ?? '', r.power_consumption ?? '',
          r.dimensions ?? '', r.weight ?? '', r.price_range ?? '', r.manufacturer_url ?? '', r.spec_sheet_url ?? '',
          r.image_url ?? '', r.description ?? '', r.applications ?? '', r.origin_country ?? ''
        ].map(toCell);
        lines.push(row.join(','));
      }
      fs.writeFileSync(path, lines.join('\n'));
    } else {
      fs.writeFileSync(path, JSON.stringify({ records: results }, null, 2));
    }
    console.log(`Wrote output: ${path} (records: ${results.length})`);
    return;
  }

  // POST to import API
  const resp = await fetch(baseImportUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ records: results }),
  });
  const json = await resp.json().catch(() => ({}));
  if (!resp.ok || !json.success) {
    console.error('Import failed:', json);
    process.exit(1);
  }
  console.log(`Import success. Inserted: ${json.inserted}, Updated: ${json.updated}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


