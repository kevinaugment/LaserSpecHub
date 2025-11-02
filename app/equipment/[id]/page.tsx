import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getDatabase } from '@/lib/db/client';
import type { LaserEquipment } from '@/types/equipment';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { StructuredData } from '@/components/ui/structured-data';
import { FavoriteButton } from '@/components/equipment/favorite-button';

// Force dynamic rendering to avoid build-time database access
export const dynamic = 'force-dynamic';

async function getEquipmentById(id: string): Promise<LaserEquipment | null> {
  const db = getDatabase();
  
  const stmt = db.prepare('SELECT * FROM laser_equipment WHERE id = ? AND is_active = 1');
  const result = await stmt.bind(id).first();
  
  if (!result) {
    return null;
  }

  const equipment = result as any;

  // Parse JSON fields
  const parsedEquipment: LaserEquipment = {
    ...equipment,
    max_cutting_thickness: equipment.max_cutting_thickness
      ? JSON.parse(equipment.max_cutting_thickness as string)
      : null,
    cutting_speed: equipment.cutting_speed
      ? JSON.parse(equipment.cutting_speed as string)
      : null,
    dimensions: equipment.dimensions
      ? JSON.parse(equipment.dimensions as string)
      : null,
    applications: equipment.applications
      ? JSON.parse(equipment.applications as string)
      : [],
  };
  
  return parsedEquipment;
}

async function getEquipmentImages(equipmentId: string) {
  const db = getDatabase();
  
  const stmt = db.prepare(`
    SELECT * FROM equipment_images
    WHERE equipment_id = ?
    ORDER BY display_order ASC, created_at DESC
  `);
  
  const result = await stmt.bind(equipmentId).all();
  return result.results || [];
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const equipment = await getEquipmentById(params.id);

  if (!equipment) {
    return generatePageMetadata({
      title: 'Equipment Not Found',
      description: 'The requested equipment could not be found.',
      path: `/equipment/${params.id}`,
    });
  }

  return generatePageMetadata({
    title: `${equipment.brand} ${equipment.model} - Specifications`,
    description: equipment.description || `Detailed specifications for ${equipment.brand} ${equipment.model} ${equipment.laser_type} laser cutting machine with ${equipment.power_kw}kW power.`,
    path: `/equipment/${params.id}`,
    keywords: [
      equipment.brand,
      equipment.model,
      `${equipment.laser_type} laser`,
      'specifications',
      'laser equipment',
    ],
  });
}

export default async function EquipmentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const equipment = await getEquipmentById(params.id);

  if (!equipment) {
    notFound();
  }

  // Fetch equipment images
  const images = await getEquipmentImages(params.id);

  const getLaserTypeBadgeVariant = (type: string) => {
    switch (type.toLowerCase()) {
      case 'fiber':
        return 'primary';
      case 'co2':
        return 'info';
      case 'solid':
        return 'success';
      default:
        return 'default';
    }
  };

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${equipment.brand} ${equipment.model}`,
    description: equipment.description || `${equipment.brand} ${equipment.model} ${equipment.laser_type} laser cutting machine`,
    brand: {
      '@type': 'Brand',
      name: equipment.brand,
    },
    offers: equipment.price_range ? {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: equipment.price_range.split('-')[0],
      highPrice: equipment.price_range.split('-')[1],
    } : undefined,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Laser Type',
        value: equipment.laser_type,
      },
      {
        '@type': 'PropertyValue',
        name: 'Laser Power',
        value: `${equipment.power_kw} kW`,
      },
      equipment.wavelength ? {
        '@type': 'PropertyValue',
        name: 'Wavelength',
        value: `${equipment.wavelength} nm`,
      } : undefined,
      equipment.control_system ? {
        '@type': 'PropertyValue',
        name: 'Control System',
        value: equipment.control_system,
      } : undefined,
    ].filter(Boolean),
  };

  return (
    <>
      <StructuredData data={structuredData} />
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm text-gray-600">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/equipment" className="hover:text-primary-600">Equipment</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{equipment.brand} {equipment.model}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {equipment.brand} {equipment.model}
            </h1>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge variant={getLaserTypeBadgeVariant(equipment.laser_type)}>
                {equipment.laser_type} Laser
              </Badge>
              <Badge variant="primary" size="md">
                {equipment.power_kw} kW
              </Badge>
              {equipment.cooling_type && (
                <Badge variant="default">
                  {equipment.cooling_type} Cooled
                </Badge>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <FavoriteButton equipmentId={equipment.id} />
            <Link href="/comparison">
              <Button variant="primary">
                Add to Comparison
              </Button>
            </Link>
          </div>
        </div>

        {equipment.description && (
          <p className="text-lg text-gray-700 mb-4">{equipment.description}</p>
        )}

        {equipment.price_range && (
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 rounded-lg">
            <span className="text-sm text-gray-700 mr-2">Price Range:</span>
            <span className="text-xl font-bold text-primary-700">
              ${equipment.price_range.replace('-', ' - $')}
            </span>
          </div>
        )}
      </div>

      {/* Equipment Images Gallery */}
      {images.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Product Images</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image: any) => (
              <div key={image.id} className="relative group overflow-hidden rounded-lg border border-gray-200">
                <Image
                  src={image.image_url}
                  alt={image.alt_text || `${equipment.brand} ${equipment.model}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                {image.is_primary === 1 && (
                  <div className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded">
                    Primary
                  </div>
                )}
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-2">
                    {image.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Specifications */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Specifications */}
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Basic Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-b border-gray-100 pb-3">
                  <dt className="text-sm text-gray-600 mb-1">Laser Type</dt>
                  <dd className="text-base font-medium text-gray-900">{equipment.laser_type}</dd>
                </div>
                <div className="border-b border-gray-100 pb-3">
                  <dt className="text-sm text-gray-600 mb-1">Laser Power</dt>
                  <dd className="text-base font-medium text-gray-900">{equipment.power_kw} kW</dd>
                </div>
                {equipment.work_area_length && equipment.work_area_width && (
                  <div className="border-b border-gray-100 pb-3">
                    <dt className="text-sm text-gray-600 mb-1">Work Area</dt>
                    <dd className="text-base font-medium text-gray-900">
                      {equipment.work_area_length} × {equipment.work_area_width} mm
                    </dd>
                  </div>
                )}
                {equipment.wavelength && (
                  <div className="border-b border-gray-100 pb-3">
                    <dt className="text-sm text-gray-600 mb-1">Wavelength</dt>
                    <dd className="text-base font-medium text-gray-900">{equipment.wavelength} nm</dd>
                  </div>
                )}
                {equipment.beam_quality && (
                  <div className="border-b border-gray-100 pb-3">
                    <dt className="text-sm text-gray-600 mb-1">Beam Quality (M²)</dt>
                    <dd className="text-base font-medium text-gray-900">{equipment.beam_quality}</dd>
                  </div>
                )}
                {equipment.positioning_accuracy && (
                  <div className="border-b border-gray-100 pb-3">
                    <dt className="text-sm text-gray-600 mb-1">Positioning Accuracy</dt>
                    <dd className="text-base font-medium text-gray-900">±{equipment.positioning_accuracy} mm</dd>
                  </div>
                )}
                {equipment.repeat_accuracy && (
                  <div className="border-b border-gray-100 pb-3">
                    <dt className="text-sm text-gray-600 mb-1">Repeat Accuracy</dt>
                    <dd className="text-base font-medium text-gray-900">±{equipment.repeat_accuracy} mm</dd>
                  </div>
                )}
                {equipment.control_system && (
                  <div className="border-b border-gray-100 pb-3">
                    <dt className="text-sm text-gray-600 mb-1">Control System</dt>
                    <dd className="text-base font-medium text-gray-900">{equipment.control_system}</dd>
                  </div>
                )}
              </dl>
            </CardContent>
          </Card>

          {/* Cutting Capabilities */}
          {equipment.max_cutting_thickness && (
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Cutting Capabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Maximum Cutting Thickness</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(equipment.max_cutting_thickness).map(([material, thickness]) => (
                      <div key={material} className="bg-gray-50 rounded-lg p-3">
                        <div className="text-xs text-gray-600 capitalize">{material}</div>
                        <div className="text-lg font-bold text-gray-900">{thickness} mm</div>
                      </div>
                    ))}
                  </div>
                </div>

                {equipment.cutting_speed && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Cutting Speed</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {Object.entries(equipment.cutting_speed).map(([material, speed]) => (
                        <div key={material} className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-600 capitalize">{material.replace('_', ' ')}</div>
                          <div className="text-lg font-bold text-gray-900">{speed} m/min</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Physical Specifications */}
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Physical Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipment.dimensions && typeof equipment.dimensions === 'object' && (
                  <div className="border-b border-gray-100 pb-3">
                    <dt className="text-sm text-gray-600 mb-1">Dimensions (L×W×H)</dt>
                    <dd className="text-base font-medium text-gray-900">
                      {equipment.dimensions.length} × {equipment.dimensions.width} × {equipment.dimensions.height} mm
                    </dd>
                  </div>
                )}
                {equipment.weight && (
                  <div className="border-b border-gray-100 pb-3">
                    <dt className="text-sm text-gray-600 mb-1">Weight</dt>
                    <dd className="text-base font-medium text-gray-900">{equipment.weight} kg</dd>
                  </div>
                )}
                {equipment.cooling_type && (
                  <div className="border-b border-gray-100 pb-3">
                    <dt className="text-sm text-gray-600 mb-1">Cooling System</dt>
                    <dd className="text-base font-medium text-gray-900">{equipment.cooling_type}</dd>
                  </div>
                )}
                {equipment.power_consumption && (
                  <div className="border-b border-gray-100 pb-3">
                    <dt className="text-sm text-gray-600 mb-1">Power Consumption</dt>
                    <dd className="text-base font-medium text-gray-900">{equipment.power_consumption} kW</dd>
                  </div>
                )}
              </dl>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <FavoriteButton equipmentId={equipment.id} />
              <Link href="/comparison" className="block">
                <Button variant="primary" fullWidth>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Compare with Others
                </Button>
              </Link>
              <Link href="/tools/power-calculator" className="block">
                <Button variant="outline" fullWidth>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Power Calculator
                </Button>
              </Link>
              {equipment.manufacturer_url && (
                <a 
                  href={equipment.manufacturer_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="ghost" fullWidth>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Manufacturer Site
                  </Button>
                </a>
              )}
            </CardContent>
          </Card>

          {/* Applications */}
          {equipment.applications && Array.isArray(equipment.applications) && equipment.applications.length > 0 && (
            <Card variant="bordered">
              <CardHeader>
                <CardTitle>Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {equipment.applications.map((app, idx) => (
                    <Badge key={idx} variant="default">
                      {app}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Brand Info */}
          <Card variant="bordered">
            <CardHeader>
              <CardTitle>Manufacturer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xl font-bold text-gray-900 mb-2">{equipment.brand}</div>
              <p className="text-sm text-gray-600 mb-4">
                Model: {equipment.model}
              </p>
              {equipment.manufacturer_url && (
                <a
                  href={equipment.manufacturer_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  Visit Website →
                </a>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Back to List */}
      <div className="mt-8">
        <Link href="/equipment">
          <Button variant="ghost">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Equipment Database
          </Button>
        </Link>
      </div>
    </div>
    </>
  );
}


