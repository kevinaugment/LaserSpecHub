# Environment Variables Configuration

This document lists all environment variables required for LaserSpecHub.

## Required Environment Variables

### Database Configuration

```bash
# Turso Database URL - Get this from your Turso dashboard
TURSO_DATABASE_URL="libsql://your-database-name.turso.io"

# Turso Auth Token - Get this from your Turso dashboard  
TURSO_AUTH_TOKEN="your-turso-auth-token"
```

### Authentication

```bash
# NextAuth Secret - Generate a random string for production
# Generate using: openssl rand -base64 32
NEXTAUTH_SECRET="your-secret-key-change-in-production"

# NextAuth URL - Your application URL
# Development: http://localhost:3000
# Production: https://your-domain.com
NEXTAUTH_URL="http://localhost:3000"
```

### Environment

```bash
NODE_ENV="development"  # or "production"
```

## Setup Instructions

### 1. Create Environment File

Create a `.env.local` file in the project root:

```bash
cp ENV.EXAMPLE.txt .env.local
# Or manually create .env.local with the variables listed above
```

### 2. Configure Turso Database

1. Sign up at [https://turso.tech](https://turso.tech)
2. Create a new database
3. Copy the `DATABASE_URL` and `AUTH_TOKEN` to your `.env.local`

Example:
```bash
TURSO_DATABASE_URL="libsql://laserspec-hub-your-org.turso.io"
TURSO_AUTH_TOKEN="eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9..."
```

### 3. Generate NextAuth Secret

Generate a secure random string for `NEXTAUTH_SECRET`:

```bash
openssl rand -base64 32
```

Add it to `.env.local`:
```bash
NEXTAUTH_SECRET="generated-secret-here"
```

### 4. Set NextAuth URL

For local development:
```bash
NEXTAUTH_URL="http://localhost:3000"
```

For production (in Vercel environment variables):
```bash
NEXTAUTH_URL="https://your-domain.vercel.app"
```

### 5. Run Database Migrations

After configuring the environment variables, run migrations to create the database schema:

```bash
npm run migrate
```

This will create all necessary tables including the `users` table.

### 6. Create Admin User

Use the provided script to create an admin account:

```bash
node scripts/create-admin.js admin@example.com SecurePassword123 "Admin Name"
```

Example:
```bash
node scripts/create-admin.js admin@laserspec.com MyAdminPass2024 "Site Administrator"
```

The script will:
- Hash the password securely
- Create the admin user in the database
- Display login credentials

### 7. Verify Configuration

Start the development server:

```bash
npm run dev
```

Test admin login at:
- Admin panel: `http://localhost:3000/admin/login`
- User login: `http://localhost:3000/auth/login`

## Production Deployment (Vercel)

### Add Environment Variables in Vercel

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

| Variable | Value | Notes |
|----------|-------|-------|
| `TURSO_DATABASE_URL` | `libsql://your-db.turso.io` | Production database URL |
| `TURSO_AUTH_TOKEN` | `eyJhbGci...` | Production auth token |
| `NEXTAUTH_SECRET` | `<random-32-char-string>` | **Must be different from development** |
| `NEXTAUTH_URL` | `https://your-domain.vercel.app` | Your production URL |
| `NODE_ENV` | `production` | Set automatically by Vercel |

### Important Production Notes

⚠️ **Security Reminders:**

1. **Never use the default `NEXTAUTH_SECRET`** - Generate a new one for production
2. **Use a production Turso database** - Don't share between dev and production
3. **Create a separate admin user** for production with a strong password
4. **Keep environment variables secret** - Don't commit `.env.local` to git

## Troubleshooting

### Error: "Turso configuration missing"

**Problem:** Missing `TURSO_DATABASE_URL` or `TURSO_AUTH_TOKEN`

**Solution:** 
1. Check if `.env.local` exists in the project root
2. Verify the variables are set correctly
3. Restart the dev server after adding variables

### Error: "Cannot find name 'users'"

**Problem:** Database migrations not applied

**Solution:**
```bash
npm run migrate
```

### Error: "User not found" during login

**Problem:** No admin user exists in the database

**Solution:**
```bash
# Create admin user
node scripts/create-admin.js admin@example.com password123 "Admin"

# Verify user was created (optional - requires turso CLI)
turso db shell your-database-name
> SELECT * FROM users;
```

### Error: HTTP 500 on `/api/auth/error`

**Problem:** This was fixed by creating the error page

**Solution:** Already resolved in latest version. Pull latest changes:
```bash
git pull origin main
```

## Database Schema

The migrations create the following tables:

- `users` - User authentication and profiles
- `laser_equipment` - Equipment catalog
- `equipment_submissions` - User-submitted equipment
- `comparisons` - Comparison history
- `contact_submissions` - Contact form submissions
- `calculator_usage` - Calculator usage tracking
- `page_views` - Page view analytics
- `link_clicks` - Link click tracking
- `user_favorites` - User favorite equipment
- `comparison_saves` - Saved comparisons

## Next Steps

After setting up environment variables:

1. ✅ Run migrations: `npm run migrate`
2. ✅ Create admin user: `node scripts/create-admin.js`
3. ✅ Start dev server: `npm run dev`
4. ✅ Test login: `http://localhost:3000/admin/login`
5. ✅ Seed equipment data (optional): `node scripts/seed-equipment.js`

## Support

If you encounter issues:

1. Check the Vercel deployment logs
2. Check browser console for errors
3. Check server logs for `[Auth]` prefixed messages
4. Verify all environment variables are set correctly

