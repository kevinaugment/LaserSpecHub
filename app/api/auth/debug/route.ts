import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/db/client';

export const runtime = 'nodejs';

/**
 * Debug endpoint to verify authentication setup
 * This endpoint helps troubleshoot authentication issues
 */
export async function GET() {
  const debugInfo: any = {
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV,
    checks: {},
  };

  // Check 1: Environment Variables
  debugInfo.checks.envVars = {
    TURSO_DATABASE_URL: !!process.env.TURSO_DATABASE_URL,
    TURSO_AUTH_TOKEN: !!process.env.TURSO_AUTH_TOKEN,
    NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'NOT SET',
  };

  // Check 2: Database Connection
  try {
    const db = getDatabase();
    const stmt = db.prepare('SELECT COUNT(*) as count FROM users');
    const result = await stmt.all();
    debugInfo.checks.database = {
      connected: true,
      userCount: result.results[0]?.count || 0,
    };
  } catch (error) {
    debugInfo.checks.database = {
      connected: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }

  // Check 3: Admin User Exists
  try {
    const db = getDatabase();
    const stmt = db.prepare("SELECT email, role FROM users WHERE role = 'admin' LIMIT 1");
    const result = await stmt.all();
    debugInfo.checks.adminUser = {
      exists: result.results.length > 0,
      email: result.results[0]?.email || 'N/A',
    };
  } catch (error) {
    debugInfo.checks.adminUser = {
      exists: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }

  // Check 4: NextAuth Configuration
  debugInfo.checks.nextAuth = {
    secretConfigured: !!process.env.NEXTAUTH_SECRET,
    urlConfigured: !!process.env.NEXTAUTH_URL,
    expectedUrl: 'https://laser-spec-hub.vercel.app',
    actualUrl: process.env.NEXTAUTH_URL,
  };

  // Overall Status
  const allChecks = Object.values(debugInfo.checks).every((check: any) => {
    if (typeof check === 'object' && 'connected' in check) {
      return check.connected;
    }
    if (typeof check === 'object' && 'exists' in check) {
      return check.exists;
    }
    return true;
  });

  debugInfo.status = allChecks ? 'HEALTHY' : 'ISSUES_DETECTED';

  return NextResponse.json(debugInfo, { 
    status: 200,
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}
