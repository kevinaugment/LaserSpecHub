#!/usr/bin/env node

/**
 * Data Migration Script: JSON to Flat Fields
 * Purpose: Migrate data from JSON fields to individual columns
 * Usage: node scripts/migrate-json-to-flat.js
 * 
 * This script:
 * 1. Reads all equipment from laser_equipment table
 * 2. Parses JSON fields (max_cutting_thickness, cutting_speed, dimensions, applications)
 * 3. Updates equipment records with parsed values in new flat columns
 * 4. Creates application records and relationships
 */

const { createClient } = require('@libsql/client');

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Parse JSON string safely
 */
function parseJSON(jsonString) {
  if (!jsonString || jsonString === 'null') return null;
  try {
    return JSON.parse(jsonString);
  } catch (e) {
    console.error('Failed to parse JSON:', jsonString, e.message);
    return null;
  }
}

/**
 * Migrate cutting thickness data
 */
function migrateCuttingThickness(equipmentId, jsonData, db) {
  if (!jsonData) return null;

  const thickness = parseJSON(jsonData);
  if (!thickness) return null;

  const updates = [];
  const params = [equipmentId];

  // Map JSON keys to column names
  const fieldMapping = {
    steel: 'max_thickness_steel',
    aluminum: 'max_thickness_aluminum',
    stainless: 'max_thickness_stainless',
    copper: 'max_thickness_copper',
    brass: 'max_thickness_brass',
    acrylic: 'max_thickness_acrylic',
    wood: 'max_thickness_wood',
    mdf: 'max_thickness_mdf',
    fabric: 'max_thickness_fabric',
    leather: 'max_thickness_leather',
    titanium: 'max_thickness_titanium',
    nickel: 'max_thickness_nickel',
  };

  for (const [jsonKey, columnName] of Object.entries(fieldMapping)) {
    if (thickness[jsonKey] !== undefined) {
      updates.push(`${columnName} = ?`);
      params.push(thickness[jsonKey]);
    }
  }

  return { updates, params };
}

/**
 * Migrate cutting speed data
 */
function migrateCuttingSpeed(equipmentId, jsonData) {
  if (!jsonData) return null;

  const speed = parseJSON(jsonData);
  if (!speed) return null;

  const updates = [];
  const params = [equipmentId];

  // Map JSON keys to column names
  const fieldMapping = {
    steel_5mm: 'cutting_speed_steel_5mm',
    steel_10mm: 'cutting_speed_steel_10mm',
    steel_20mm: 'cutting_speed_steel_20mm',
    aluminum_5mm: 'cutting_speed_aluminum_5mm',
    aluminum_10mm: 'cutting_speed_aluminum_10mm',
    stainless_5mm: 'cutting_speed_stainless_5mm',
    stainless_10mm: 'cutting_speed_stainless_10mm',
    acrylic_5mm: 'cutting_speed_acrylic_5mm',
    acrylic_10mm: 'cutting_speed_acrylic_10mm',
    wood_5mm: 'cutting_speed_wood_5mm',
    wood_10mm: 'cutting_speed_wood_10mm',
    titanium_5mm: 'cutting_speed_titanium_5mm',
  };

  for (const [jsonKey, columnName] of Object.entries(fieldMapping)) {
    if (speed[jsonKey] !== undefined) {
      updates.push(`${columnName} = ?`);
      params.push(speed[jsonKey]);
    }
  }

  return { updates, params };
}

/**
 * Migrate dimensions data
 */
function migrateDimensions(equipmentId, jsonData) {
  if (!jsonData) return null;

  const dimensions = parseJSON(jsonData);
  if (!dimensions) return null;

  const updates = [];
  const params = [equipmentId];

  if (dimensions.length !== undefined) {
    updates.push('dimension_length = ?');
    params.push(dimensions.length);
  }
  if (dimensions.width !== undefined) {
    updates.push('dimension_width = ?');
    params.push(dimensions.width);
  }
  if (dimensions.height !== undefined) {
    updates.push('dimension_height = ?');
    params.push(dimensions.height);
  }

  return { updates, params };
}

/**
 * Migrate applications data
 */
async function migrateApplications(equipmentId, jsonData, db) {
  if (!jsonData) return;

  const applications = parseJSON(jsonData);
  if (!applications || !Array.isArray(applications)) return;

  for (const appName of applications) {
    try {
      // Get or create application
      let appResult = await db.execute({
        sql: 'SELECT id FROM applications WHERE name = ?',
        args: [appName],
      });

      let appId;
      if (appResult.rows && appResult.rows.length > 0) {
        appId = appResult.rows[0].id;
      } else {
        // Create new application
        const insertResult = await db.execute({
          sql: 'INSERT INTO applications (name, category) VALUES (?, ?)',
          args: [appName, 'General'],
        });
        appId = insertResult.lastInsertRowid;
      }

      // Create equipment-application relationship
      await db.execute({
        sql: 'INSERT OR IGNORE INTO equipment_applications (equipment_id, application_id) VALUES (?, ?)',
        args: [equipmentId, appId],
      });
    } catch (error) {
      console.error(`Error migrating application "${appName}":`, error.message);
    }
  }
}

/**
 * Main migration function
 */
async function migrate() {
  log('\n🚀 Starting JSON to Flat Fields Migration\n', 'bright');

  // Check environment variables
  if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
    log('❌ Missing environment variables: TURSO_DATABASE_URL and TURSO_AUTH_TOKEN', 'red');
    log('   Please set them in your .env.local file', 'yellow');
    process.exit(1);
  }

  const db = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  });

  try {
    // Step 1: Get all equipment
    log('📊 Step 1: Fetching all equipment...', 'cyan');
    const result = await db.execute(
      'SELECT id, brand, model, max_cutting_thickness, cutting_speed, dimensions, applications FROM laser_equipment'
    );

    const equipment = result.rows;
    log(`   Found ${equipment.length} equipment records`, 'green');

    // Step 2: Migrate each equipment
    log('\n📝 Step 2: Migrating equipment data...', 'cyan');
    let successCount = 0;
    let errorCount = 0;

    for (const item of equipment) {
      try {
        log(`\n   Processing: ${item.brand} ${item.model} (ID: ${item.id})`, 'blue');

        const allUpdates = [];
        const allParams = [];

        // Migrate cutting thickness
        const thicknessResult = migrateCuttingThickness(item.id, item.max_cutting_thickness, db);
        if (thicknessResult) {
          allUpdates.push(...thicknessResult.updates);
          allParams.push(...thicknessResult.params.slice(1)); // Skip equipment_id
          log('      ✓ Migrated cutting thickness', 'green');
        }

        // Migrate cutting speed
        const speedResult = migrateCuttingSpeed(item.id, item.cutting_speed);
        if (speedResult) {
          allUpdates.push(...speedResult.updates);
          allParams.push(...speedResult.params.slice(1)); // Skip equipment_id
          log('      ✓ Migrated cutting speed', 'green');
        }

        // Migrate dimensions
        const dimensionsResult = migrateDimensions(item.id, item.dimensions);
        if (dimensionsResult) {
          allUpdates.push(...dimensionsResult.updates);
          allParams.push(...dimensionsResult.params.slice(1)); // Skip equipment_id
          log('      ✓ Migrated dimensions', 'green');
        }

        // Update equipment record
        if (allUpdates.length > 0) {
          const updateSQL = `UPDATE laser_equipment SET ${allUpdates.join(', ')} WHERE id = ?`;
          await db.execute({
            sql: updateSQL,
            args: [...allParams, item.id],
          });
        }

        // Migrate applications
        await migrateApplications(item.id, item.applications, db);
        log('      ✓ Migrated applications', 'green');

        successCount++;
      } catch (error) {
        log(`      ✗ Error: ${error.message}`, 'red');
        errorCount++;
      }
    }

    // Step 3: Summary
    log('\n' + '='.repeat(60), 'bright');
    log('📊 Migration Summary:', 'bright');
    log('='.repeat(60), 'bright');
    log(`   Total equipment: ${equipment.length}`, 'cyan');
    log(`   ✓ Successful: ${successCount}`, 'green');
    log(`   ✗ Errors: ${errorCount}`, errorCount > 0 ? 'red' : 'green');
    log('='.repeat(60) + '\n', 'bright');

    // Step 4: Verification
    log('🔍 Step 3: Verifying migration...', 'cyan');
    const verifyResult = await db.execute(
      'SELECT COUNT(*) as total FROM laser_equipment WHERE max_thickness_steel IS NOT NULL OR cutting_speed_steel_10mm IS NOT NULL OR dimension_length IS NOT NULL'
    );
    const migratedCount = verifyResult.rows[0].total;
    log(`   ${migratedCount} equipment records have new flat fields populated`, 'green');

    const appCountResult = await db.execute('SELECT COUNT(*) as total FROM equipment_applications');
    const appRelCount = appCountResult.rows[0].total;
    log(`   ${appRelCount} application relationships created`, 'green');

    log('\n✅ Migration completed successfully!\n', 'bright');
    log('📌 Next steps:', 'yellow');
    log('   1. Verify data in database', 'yellow');
    log('   2. Update application code to use new fields', 'yellow');
    log('   3. Test thoroughly before deploying', 'yellow');
    log('   4. After verification, old JSON fields can be deprecated\n', 'yellow');

  } catch (error) {
    log(`\n❌ Migration failed: ${error.message}`, 'red');
    console.error(error);
    process.exit(1);
  }
}

// Run migration
migrate();

