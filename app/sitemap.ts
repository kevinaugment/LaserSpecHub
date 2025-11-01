import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.laserspechub.com';
  
  // Static pages
  const staticPages = [
    '',
    '/equipment',
    '/comparison',
    '/equipment/submit',
    // Tools
    '/tools/power-calculator',
    '/tools/workspace-matcher',
    '/tools/laser-type-wizard',
    '/tools/cost-estimator',
    '/tools/kerf-calculator',
    '/tools/power-density-calculator',
    '/tools/nozzle-life-calculator',
    '/tools/chiller-calculator',
    // Guides
    '/guides/selection',
    '/guides/tech-explain',
    '/guides/reports',
    '/guides/power-selection-guide',
    '/guides/power-3k-6k-12k',
    '/guides/compare',
    '/guides/co2-vs-fiber-laser',
    '/guides/glossary',
    '/guides/assist-gas-chart',
    '/guides/cutting-speed-chart',
    '/guides/material-thickness-parameters',
    '/guides/wavelength-absorption',
    '/guides/beam-quality-guide',
    '/guides/focus-position-guide',
    '/guides/nozzle-selection-guide',
    '/guides/lens-specifications',
    '/guides/penetration-depth',
    '/guides/edge-quality-standards',
    '/guides/precision-factors-comparison',
    '/guides/work-area-size-comparison',
    '/guides/control-systems-comparison',
    '/guides/cutting-method-comparison',
    '/guides/compliance-certification',
    '/guides/safety-operations',
    '/guides/laser-safety-classes',
    '/guides/installation-requirements',
    '/guides/maintenance-schedule',
    '/guides/troubleshooting-guide',
    '/guides/process-optimization-guide',
    '/guides/nesting-optimization-guide',
    '/guides/programming-tips',
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1 : page.startsWith('/guides') ? 0.6 : 0.8,
  })) as MetadataRoute.Sitemap;
}
