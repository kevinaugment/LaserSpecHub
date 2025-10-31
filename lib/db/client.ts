/**
 * Database client utilities
 * Provides a unified adapter around Turso (libsql) and a dev-time mock.
 */

import type { LaserEquipment, EquipmentFilters } from '@/types/equipment';
import { createClient, Client } from '@libsql/client';

/**
 * Get D1 database instance from Cloudflare Workers environment
 * This should be called from API routes or server components
 */
export function getDb(env: any) {
  if (!env?.DB) {
    throw new Error('D1 database not available in environment');
  }
  return env.DB;
}

/**
 * Get database instance for development/server components
 * In production, this will use Cloudflare's platform binding
 * In development, returns a mock database for build purposes
 */
let tursoClientSingleton: Client | null = null;

function getTursoClient(): Client {
  if (tursoClientSingleton) return tursoClientSingleton;

  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (!url || !authToken) {
    throw new Error('Turso configuration missing: set TURSO_DATABASE_URL and TURSO_AUTH_TOKEN');
  }

  tursoClientSingleton = createClient({ url, authToken });
  return tursoClientSingleton;
}

function createTursoAdapter() {
  const client = getTursoClient();

  return {
    prepare: (sql: string) => {
      const stmt = client.prepare(sql);

      const wrap = (args: any[]) => ({
        all: async () => {
          // libsql returns { rows }
          // map to D1-like { results }
          // @ts-ignore
          const res = await (stmt as any).all(...(args.length ? [args] : []));
          const rows = (res as any).rows ?? res ?? [];
          return { results: rows };
        },
        first: async () => {
          // @ts-ignore
          const res = await (stmt as any).all(...(args.length ? [args] : []));
          const rows = (res as any).rows ?? res ?? [];
          return rows[0] ?? null;
        },
        run: async () => {
          // @ts-ignore
          const res = await (stmt as any).run(...(args.length ? args : []));
          const lastId = Number((res as any).lastInsertRowid ?? 0);
          return { success: true, meta: { last_row_id: lastId } };
        },
      });

      return {
        bind: (...args: any[]) => wrap(args),
        all: async () => {
          // @ts-ignore
          const res = await (stmt as any).all();
          const rows = (res as any).rows ?? res ?? [];
          return { results: rows };
        },
        first: async () => {
          // @ts-ignore
          const res = await (stmt as any).all();
          const rows = (res as any).rows ?? res ?? [];
          return rows[0] ?? null;
        },
        run: async () => {
          // @ts-ignore
          const res = await (stmt as any).run();
          const lastId = Number((res as any).lastInsertRowid ?? 0);
          return { success: true, meta: { last_row_id: lastId } };
        },
      };
    },
  };
}

export function getDatabase() {
  // Prefer Turso if configured
  if (process.env.TURSO_DATABASE_URL && process.env.TURSO_AUTH_TOKEN) {
    return createTursoAdapter();
  }

  // In Cloudflare runtime, a D1 binding might be present
  if (typeof process !== 'undefined' && (process.env as any).DB) {
    return (process.env as any).DB;
  }

  // Fallback: dev-time mock to avoid build failures
  const mockDb = {
    prepare: (_sql: string) => ({
      bind: (..._args: any[]) => ({
        all: async () => ({ results: [] as any[] }),
        first: async () => null,
        run: async () => ({ success: true, meta: { last_row_id: 0 } }),
      }),
      all: async () => ({ results: [] as any[] }),
      first: async () => null,
      run: async () => ({ success: true, meta: { last_row_id: 0 } }),
    }),
  };

  return mockDb;
}

/**
 * Parse JSON fields from database results
 */
function parseEquipmentRow(row: any): LaserEquipment {
  return {
    ...row,
    max_cutting_thickness: row.max_cutting_thickness
      ? JSON.parse(row.max_cutting_thickness)
      : null,
    cutting_speed: row.cutting_speed ? JSON.parse(row.cutting_speed) : null,
    dimensions: row.dimensions ? JSON.parse(row.dimensions) : null,
    applications: row.applications ? JSON.parse(row.applications) : null,
    is_active: Boolean(row.is_active),
  };
}

/**
 * Get all active equipment with optional filters
 */
export async function getEquipment(
  db: any,
  filters?: EquipmentFilters
): Promise<LaserEquipment[]> {
  let query = 'SELECT * FROM laser_equipment WHERE is_active = 1';
  const params: any[] = [];

  if (filters?.laser_type && filters.laser_type.length > 0) {
    const placeholders = filters.laser_type.map(() => '?').join(',');
    query += ` AND laser_type IN (${placeholders})`;
    params.push(...filters.laser_type);
  }

  if (filters?.min_power !== undefined) {
    query += ' AND power_kw >= ?';
    params.push(filters.min_power);
  }

  if (filters?.max_power !== undefined) {
    query += ' AND power_kw <= ?';
    params.push(filters.max_power);
  }

  if (filters?.brand && filters.brand.length > 0) {
    const placeholders = filters.brand.map(() => '?').join(',');
    query += ` AND brand IN (${placeholders})`;
    params.push(...filters.brand);
  }

  query += ' ORDER BY brand, model';

  const stmt = db.prepare(query);
  const result = await stmt.bind(...params).all();

  return result.results.map(parseEquipmentRow);
}

/**
 * Get equipment by ID
 */
export async function getEquipmentById(
  db: any,
  id: number
): Promise<LaserEquipment | null> {
  const stmt = db.prepare(
    'SELECT * FROM laser_equipment WHERE id = ? AND is_active = 1'
  );
  const result = await stmt.bind(id).first();

  return result ? parseEquipmentRow(result) : null;
}

/**
 * Get multiple equipment by IDs
 */
export async function getEquipmentByIds(
  db: any,
  ids: number[]
): Promise<LaserEquipment[]> {
  if (ids.length === 0) return [];

  const placeholders = ids.map(() => '?').join(',');
  const query = `SELECT * FROM laser_equipment WHERE id IN (${placeholders}) AND is_active = 1`;

  const stmt = db.prepare(query);
  const result = await stmt.bind(...ids).all();

  return result.results.map(parseEquipmentRow);
}

/**
 * Save comparison history
 */
export async function saveComparison(
  db: any,
  equipmentIds: number[],
  userIp?: string,
  userAgent?: string,
  sessionId?: string
): Promise<number> {
  const stmt = db.prepare(
    'INSERT INTO comparisons (equipment_ids, user_ip, user_agent, session_id) VALUES (?, ?, ?, ?)'
  );

  const result = await stmt
    .bind(
      JSON.stringify(equipmentIds),
      userIp || null,
      userAgent || null,
      sessionId || null
    )
    .run();

  return result.meta.last_row_id;
}

/**
 * Track calculator usage
 */
export async function trackCalculatorUsage(
  db: any,
  calculatorType: 'power' | 'size' | 'cost',
  inputData: Record<string, unknown>,
  resultData: Record<string, unknown>,
  userIp?: string
): Promise<void> {
  const stmt = db.prepare(
    'INSERT INTO calculator_usage (calculator_type, input_data, result_data, user_ip) VALUES (?, ?, ?, ?)'
  );

  await stmt
    .bind(
      calculatorType,
      JSON.stringify(inputData),
      JSON.stringify(resultData),
      userIp || null
    )
    .run();
}

/**
 * Track link clicks
 */
export async function trackLinkClick(
  db: any,
  sourcePage: string,
  destinationUrl: string,
  linkText?: string,
  linkType?: string,
  userIp?: string
): Promise<void> {
  const stmt = db.prepare(
    'INSERT INTO link_clicks (source_page, destination_url, link_text, link_type, user_ip) VALUES (?, ?, ?, ?, ?)'
  );

  await stmt
    .bind(
      sourcePage,
      destinationUrl,
      linkText || null,
      linkType || null,
      userIp || null
    )
    .run();
}

/**
 * Get all unique brands
 */
export async function getBrands(db: any): Promise<string[]> {
  const stmt = db.prepare(
    'SELECT DISTINCT brand FROM laser_equipment WHERE is_active = 1 ORDER BY brand'
  );
  const result = await stmt.all();

  return result.results.map((row: any) => row.brand);
}

/**
 * Get power range statistics
 */
export async function getPowerStats(db: any): Promise<{
  min: number;
  max: number;
  avg: number;
}> {
  const stmt = db.prepare(
    'SELECT MIN(power_kw) as min, MAX(power_kw) as max, AVG(power_kw) as avg FROM laser_equipment WHERE is_active = 1'
  );
  const result = await stmt.first();

  return {
    min: result?.min || 0,
    max: result?.max || 0,
    avg: result?.avg || 0,
  };
}



