import type { Metadata } from 'next';
import { Suspense } from 'react';
import { generatePageMetadata } from '@/lib/utils/metadata';
import { getDatabase } from '@/lib/db/client';
import type { LaserEquipment } from '@/types/equipment';
import { EquipmentGridClient } from '@/components/equipment/equipment-grid-client';

// Force dynamic rendering to avoid build-time database access
export const dynamic = 'force-dynamic';

export const metadata: Metadata = generatePageMetadata({
  title: 'Laser Equipment Database',
  description:
    'Browse our comprehensive database of 50+ laser cutting machines. Search and filter by power, laser type, brand, and specifications.',
  path: '/equipment',
  keywords: [
    'laser equipment database',
    'laser machine catalog',
    'equipment specifications',
    'laser cutter models',
  ],
});

interface SearchParams {
  search?: string;
  laserType?: string;
  powerMin?: string;
  powerMax?: string;
  brand?: string;
  coolingType?: string;
}

async function getEquipmentData(searchParams: SearchParams) {
  const db = getDatabase();
  
  // Build query with filters
  let query = `SELECT * FROM laser_equipment WHERE is_active = 1`;
  const params: (string | number)[] = [];

  // Search filter
  if (searchParams.search) {
    query += ` AND (brand LIKE ? OR model LIKE ? OR description LIKE ?)`;
    const searchTerm = `%${searchParams.search}%`;
    params.push(searchTerm, searchTerm, searchTerm);
  }

  // Laser type filter
  if (searchParams.laserType && searchParams.laserType !== 'all') {
    query += ` AND laser_type = ?`;
    params.push(searchParams.laserType);
  }

  // Power range filter
  if (searchParams.powerMin) {
    query += ` AND power_kw >= ?`;
    params.push(parseFloat(searchParams.powerMin));
  }
  if (searchParams.powerMax) {
    query += ` AND power_kw <= ?`;
    params.push(parseFloat(searchParams.powerMax));
  }

  // Brand filter
  if (searchParams.brand && searchParams.brand !== 'all') {
    query += ` AND brand = ?`;
    params.push(searchParams.brand);
  }

  // Cooling type filter
  if (searchParams.coolingType && searchParams.coolingType !== 'all') {
    query += ` AND cooling_type = ?`;
    params.push(searchParams.coolingType);
  }

  query += ` ORDER BY brand, model`;

  const stmt = db.prepare(query);
  const results = params.length > 0 ? await stmt.bind(...params).all() : await stmt.all();
  
  const equipment = results.results as any[];

  // Parse JSON fields
  const parsedEquipment: LaserEquipment[] = equipment.map((eq) => ({
    ...eq,
    max_cutting_thickness: eq.max_cutting_thickness 
      ? JSON.parse(eq.max_cutting_thickness as string) 
      : null,
    cutting_speed: eq.cutting_speed 
      ? JSON.parse(eq.cutting_speed as string) 
      : null,
    dimensions: eq.dimensions 
      ? JSON.parse(eq.dimensions as string) 
      : null,
    applications: eq.applications 
      ? JSON.parse(eq.applications as string) 
      : [],
  }));

  // Get unique brands for filter
  const brandsStmt = db.prepare(`SELECT DISTINCT brand FROM laser_equipment WHERE is_active = 1 ORDER BY brand`);
  const brandsResults = await brandsStmt.all();
  const brands = brandsResults.results.map((r: { brand: string }) => r.brand);

  return { equipment: parsedEquipment, brands };
}

export default async function EquipmentPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { equipment, brands } = await getEquipmentData(searchParams);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Equipment Database
        </h1>
        <p className="text-lg text-gray-600">
          Browse our comprehensive database of laser cutting machines with detailed specifications and advanced filters.
        </p>
      </div>
      
      <Suspense fallback={
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading equipment...</p>
        </div>
      }>
        <EquipmentGridClient equipment={equipment} brands={brands} />
      </Suspense>
    </div>
  );
}
