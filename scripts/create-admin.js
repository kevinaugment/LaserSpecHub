#!/usr/bin/env node

/**
 * Create Admin User Script
 * Usage: node scripts/create-admin.js <email> <password> <name>
 * Example: node scripts/create-admin.js admin@example.com password123 "Admin User"
 */

const bcrypt = require('bcryptjs');
const { createClient } = require('@libsql/client');

async function createAdmin() {
  // Parse command line arguments
  const args = process.argv.slice(2);
  
  if (args.length < 2) {
    console.error('❌ Usage: node scripts/create-admin.js <email> <password> [name]');
    console.error('   Example: node scripts/create-admin.js admin@example.com password123 "Admin User"');
    process.exit(1);
  }

  const email = args[0];
  const password = args[1];
  const name = args[2] || 'Admin';

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.error('❌ Invalid email format');
    process.exit(1);
  }

  // Validate password length
  if (password.length < 8) {
    console.error('❌ Password must be at least 8 characters long');
    process.exit(1);
  }

  // Check for required environment variables
  if (!process.env.TURSO_DATABASE_URL || !process.env.TURSO_AUTH_TOKEN) {
    console.error('❌ Missing environment variables: TURSO_DATABASE_URL and TURSO_AUTH_TOKEN');
    console.error('   Please set them in your .env.local file');
    process.exit(1);
  }

  try {
    console.log('🔐 Creating admin user...');
    console.log(`   Email: ${email}`);
    console.log(`   Name: ${name}`);

    // Create database client
    const db = createClient({
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN,
    });

    // Check if user already exists
    const checkStmt = db.prepare('SELECT id FROM users WHERE email = ?');
    const existingUser = await checkStmt.bind(email).all();

    if (existingUser.results && existingUser.results.length > 0) {
      console.error(`❌ User with email ${email} already exists`);
      process.exit(1);
    }

    // Hash password
    console.log('🔒 Hashing password...');
    const passwordHash = await bcrypt.hash(password, 10);

    // Insert admin user
    const insertStmt = db.prepare(`
      INSERT INTO users (email, password_hash, name, role, email_verified)
      VALUES (?, ?, ?, 'admin', 1)
    `);

    await insertStmt.bind(email, passwordHash, name).run();

    console.log('✅ Admin user created successfully!');
    console.log('');
    console.log('📝 Login credentials:');
    console.log(`   Email: ${email}`);
    console.log(`   Password: ${password}`);
    console.log('');
    console.log('🔗 Login URL: http://localhost:3000/admin/login');
    console.log('');
    console.log('⚠️  Please change the password after first login!');

  } catch (error) {
    console.error('❌ Error creating admin user:', error.message);
    process.exit(1);
  }
}

// Run the script
createAdmin();




