# Vercel Migration Guide

## Summary of Changes

Your LaserSpecHub application has been migrated from Cloudflare Pages to Vercel deployment. Here are the key changes made:

### 1. Dependencies Updated

- **Upgraded Next.js**: `14.2.0` → `15.5.2` (latest stable version)
- **Removed deprecated package**: `@cloudflare/next-on-pages` (no longer maintained)
- **Removed Cloudflare tools**: `wrangler` package
- **Updated ESLint config**: `eslint-config-next` to `15.0.0`

### 2. Configuration Changes

**package.json**:
- Removed Cloudflare-specific scripts (`preview`, `deploy`, `db:migrate`, `db:local`)
- Removed `@cloudflare/next-on-pages` dependency
- Removed `wrangler` from devDependencies

**next.config.js**:
- Removed custom Cloudflare image loader
- Now uses Vercel's built-in image optimization
- Removed deprecated `swcMinify` option (enabled by default in Next.js 15)

### 3. Next.js 15 Compatibility Fixes

Added Suspense boundaries for `useSearchParams()` usage (required in Next.js 15):
- Updated `/app/comparison/page.tsx`
- Updated `/app/equipment/page.tsx`

### 4. Build Verification

✅ Build successfully completes with no errors
✅ All pages render correctly
✅ TypeScript type checking passes

## Database Migration Required

⚠️ **IMPORTANT**: Your application uses Cloudflare D1 database, which is not available on Vercel.

You need to choose a database solution compatible with Vercel:

### Option 1: Vercel Postgres (Recommended)
```bash
# Install Vercel Postgres
npm install @vercel/postgres

# Set up database in Vercel dashboard
# Update lib/db/client.ts to use @vercel/postgres
```

### Option 2: Neon (Serverless Postgres)
```bash
# Install Neon driver
npm install @neondatabase/serverless

# Sign up at https://neon.tech
# Update connection string in environment variables
```

### Option 3: PlanetScale (MySQL)
```bash
# Install PlanetScale driver
npm install @planetscale/database

# Sign up at https://planetscale.com
# Update connection details
```

### Option 4: Supabase (PostgreSQL)
```bash
# Install Supabase client
npm install @supabase/supabase-js

# Sign up at https://supabase.com
# Update with Supabase credentials
```

## Database Schema Migration

Your database schema is in `/migrations/0001_initial_schema.sql`. You'll need to:

1. Create a new database with your chosen provider
2. Run the schema migration
3. Import your existing data (if any)
4. Update `/lib/db/client.ts` to connect to the new database

## Environment Variables

Update these in your Vercel project settings:

```env
# Database connection (example for Vercel Postgres)
POSTGRES_URL="postgres://..."
POSTGRES_PRISMA_URL="postgres://..."
POSTGRES_URL_NON_POOLING="postgres://..."
POSTGRES_USER="..."
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="..."

# Site URL
NEXT_PUBLIC_SITE_URL="https://your-vercel-domain.vercel.app"
```

## Deployment Steps

1. **Push changes to GitHub**:
   ```bash
   git add .
   git commit -m "Migrate to Vercel and Next.js 15"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to https://vercel.com
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Set up database**:
   - Choose a database provider (see options above)
   - Add database credentials to Vercel environment variables
   - Update `/lib/db/client.ts` to use the new database
   - Run database migrations

4. **Test the deployment**:
   - Verify all pages load correctly
   - Test database connectivity
   - Check image optimization
   - Test dynamic routes

## Files to Update After Database Choice

Once you've chosen a database provider, update:

1. `/lib/db/client.ts` - Database connection logic
2. `/app/api/equipment/route.ts` - API endpoints using database
3. `/app/api/equipment/[id]/route.ts` - Individual equipment API
4. `/app/equipment/page.tsx` - Equipment listing page
5. `/app/equipment/[id]/page.tsx` - Equipment detail page

## What to Keep

- `wrangler.toml` - Can be kept for reference or removed
- `lib/cloudflare-image-loader.ts` - Can be removed (no longer used)
- `/migrations/` folder - Keep for database schema reference

## What to Remove (Optional)

You can safely delete these files if you're fully committed to Vercel:

```bash
rm wrangler.toml
rm lib/cloudflare-image-loader.ts
```

## Testing Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Next Steps

1. ✅ Dependencies updated
2. ✅ Build passing
3. ⏳ Choose database provider
4. ⏳ Update database client code
5. ⏳ Configure Vercel project
6. ⏳ Deploy to Vercel

## Support

If you encounter issues:
- Next.js 15 docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs
- Vercel Postgres: https://vercel.com/docs/storage/vercel-postgres

## Rollback Plan

If you need to revert to Cloudflare Pages deployment:

```bash
git revert HEAD
npm install
```

Then redeploy to Cloudflare Pages using the previous configuration.







