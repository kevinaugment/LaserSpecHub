# LaserSpecHub - Project Setup Guide

This guide will help you set up the LaserSpecHub project with optimal Cursor AI configuration.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration.

### 3. Create Cloudflare D1 Database

```bash
# Login to Cloudflare
npx wrangler login

# Create D1 database for development
npx wrangler d1 create laserspec-db-dev

# Create D1 database for production
npx wrangler d1 create laserspec-db

# Copy the database IDs to wrangler.toml
```

Update `wrangler.toml` with your database IDs:

```toml
[[d1_databases]]
binding = "DB"
database_name = "laserspec-db"
database_id = "YOUR_DATABASE_ID_HERE"
```

### 4. Run Database Migrations

```bash
# For local development
npm run db:local

# For production
npm run db:migrate
```

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Cursor Configuration Files

This project includes optimized Cursor AI configuration files:

### `.cursorrules`

This file contains comprehensive rules for Cursor to understand:
- Project structure and tech stack
- Coding standards and best practices
- Next.js 14 App Router patterns
- Cloudflare-specific configurations
- TypeScript conventions
- SEO requirements
- Security guidelines

**Key Features:**
- References `@next.config.js`, `@tsconfig.json`, `@wrangler.toml`
- Tailwind CSS integration
- D1 database patterns
- External link strategies (OPMT Laser)

### `.cursorignore`

Optimizes Cursor's indexing by excluding:
- `node_modules/` - Dependencies (saves ~10,000 files)
- `.next/` - Build output
- `.wrangler/` - Cloudflare cache
- Database files
- IDE configurations
- Log files
- Temporary files

**Benefits:**
- Faster code search
- Better context relevance
- Stays within 10,000 file index limit
- Reduces noise in AI suggestions

### `.vscode/settings.json`

VS Code settings for optimal development:
- Auto-format on save with Prettier
- ESLint auto-fix on save
- Tailwind CSS IntelliSense
- TypeScript workspace version
- Optimized search exclusions

## 🎯 Using Cursor AI Effectively

### 1. Ask Project-Specific Questions

Cursor will automatically understand the project context from `.cursorrules`:

```
✅ "Create a new equipment comparison component"
✅ "Add a D1 query to filter equipment by laser type"
✅ "Implement the power calculator tool"
```

### 2. Reference Configuration Files

The rules already reference key config files, so Cursor understands:
- Next.js configuration
- TypeScript settings
- Cloudflare deployment config

### 3. Follow Project Conventions

Cursor will automatically:
- Use TypeScript strict mode
- Follow Next.js 14 App Router patterns
- Use Server Components by default
- Implement proper SEO metadata
- Use Tailwind utility classes
- Follow security best practices

### 4. Database Operations

Cursor understands the D1 database schema and will:
- Use parameterized queries
- Follow the schema in `migrations/0001_initial_schema.sql`
- Use helper functions from `lib/db/client.ts`

## 📊 Project Structure

```
/app                    # Next.js App Router
  /api                  # API routes
  /comparison           # Comparison tool
  /equipment            # Equipment pages
  /tools                # Calculators
  layout.tsx
  page.tsx
  globals.css

/components             # React components
  /ui                   # Reusable UI
  /equipment            # Equipment-specific
  /tools                # Tool components

/lib                    # Utilities
  /db                   # Database utilities
  /utils                # Helper functions
  cloudflare-image-loader.ts

/types                  # TypeScript types
  equipment.ts

/migrations             # D1 migrations
  0001_initial_schema.sql

/public                 # Static assets

Configuration Files:
  .cursorrules          # Cursor AI rules
  .cursorignore         # File exclusions
  next.config.js        # Next.js config
  tsconfig.json         # TypeScript config
  wrangler.toml         # Cloudflare config
  tailwind.config.ts    # Tailwind config
  .eslintrc.json        # ESLint config
  .prettierrc           # Prettier config
```

## 🔧 Development Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server
npm run preview          # Preview with Cloudflare Pages

# Code Quality
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript checks

# Database
npm run db:local         # Run migrations locally
npm run db:migrate       # Run migrations on production

# Deployment
npm run deploy           # Deploy to Cloudflare Pages
```

## 🎨 Coding Standards

### TypeScript
- Use strict mode (already configured)
- Define explicit types
- Avoid `any` type
- Use interfaces for objects

### Components
- Server Components by default
- Add `"use client"` only when needed (interactivity, hooks, browser APIs)
- Use semantic HTML
- Follow accessibility guidelines

### Styling
- Use Tailwind utility classes
- Use `cn()` helper for conditional classes
- Follow mobile-first responsive design
- Use CSS variables for theming

### Database
- Use parameterized queries (SQL injection prevention)
- Handle errors properly
- Use transactions for multiple operations
- Index frequently queried columns

## 🔒 Security

- Input validation on all forms
- SQL injection prevention (parameterized queries)
- CSRF protection
- Security headers configured
- No sensitive data in error messages

## 📈 SEO Best Practices

- Unique meta tags per page
- Structured data (Product Schema)
- Dynamic OpenGraph images
- Semantic HTML structure
- Internal linking strategy
- Sitemap generation

## 🌐 Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Environment variables: Set in Cloudflare dashboard

3. Set up D1 database binding in Cloudflare dashboard

4. Deploy!

### Environment Variables

Required in Cloudflare Pages:
- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://your-domain.com`

D1 database binding is configured via `wrangler.toml`

## 🐛 Troubleshooting

### Cursor Not Finding Files
- Check `.cursorignore` - ensure you haven't excluded important files
- Restart Cursor
- Check if file count is within 10,000 limit

### TypeScript Errors
- Run `npm run type-check`
- Ensure all imports are correct
- Check `tsconfig.json` paths configuration

### Build Errors
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Next.js configuration

### Database Issues
- Verify `wrangler.toml` has correct database IDs
- Check migration files in `/migrations`
- Run migrations: `npm run db:local`

## 📚 Additional Resources

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [D1 Database Documentation](https://developers.cloudflare.com/d1/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Cursor AI Documentation](https://docs.cursor.com/)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run linting and type checks
4. Test locally with Cloudflare Wrangler
5. Submit a pull request

## 📝 Notes

- The project uses Next.js 14 App Router (not Pages Router)
- Server Components are preferred for better performance
- D1 database is SQLite-compatible
- Images are optimized through Cloudflare
- SEO is a primary focus (follow metadata patterns)

---

For questions or issues, contact the SEO Growth Team.






