/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const { createClient } = require('@libsql/client');

async function ensureMigrationsTable(client) {
  await client.execute(`
    CREATE TABLE IF NOT EXISTS _migrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      filename TEXT NOT NULL UNIQUE,
      applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}

async function getAppliedMigrations(client) {
  const res = await client.execute(`SELECT filename FROM _migrations ORDER BY filename ASC;`);
  const rows = res.rows || [];
  const set = new Set(rows.map((r) => r.filename));
  return set;
}

function splitSql(sql) {
  return sql
    .split('\n')
    .filter((line) => !line.trim().startsWith('--'))
    .join('\n')
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);
}

async function applyMigration(client, filePath, filename) {
  const sql = fs.readFileSync(filePath, 'utf8');
  const statements = splitSql(sql);
  for (const stmt of statements) {
    await client.execute(stmt);
  }
  await client.execute(`INSERT INTO _migrations (filename) VALUES (?);`, [filename]);
}

async function run() {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;
  if (!url || !authToken) {
    console.error('Missing TURSO_DATABASE_URL or TURSO_AUTH_TOKEN in environment');
    process.exit(1);
  }

  const client = createClient({ url, authToken });
  const migrationsDir = path.resolve(__dirname, '..', 'migrations');
  const files = fs
    .readdirSync(migrationsDir)
    .filter((f) => f.endsWith('.sql'))
    .sort();

  await ensureMigrationsTable(client);
  const applied = await getAppliedMigrations(client);

  const pending = files.filter((f) => !applied.has(f));
  if (pending.length === 0) {
    console.log('No pending migrations.');
    return;
  }

  console.log(`Applying ${pending.length} migration(s):\n- ${pending.join('\n- ')}`);
  for (const filename of pending) {
    const filePath = path.join(migrationsDir, filename);
    await applyMigration(client, filePath, filename);
    console.log(`Applied: ${filename}`);
  }

  console.log('All pending migrations applied.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});


