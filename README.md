# LaserSpecHub

LaserSpecHub is a laser processing equipment specification comparison platform built with Next.js 14 and Cloudflare infrastructure.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Deployment**: Cloudflare Pages
- **Database**: Cloudflare D1 (SQLite)
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **PDF Generation**: jsPDF

## Project Structure

```
/app                  # Next.js App Router pages
  /api                # API Route Handlers
  /comparison         # Equipment comparison tool
  /equipment          # Equipment listing and details
  /tools              # Calculators (power, size)
  /guides             # Content articles
/components           # React components
  /ui                 # Reusable UI components
  /equipment          # Equipment-specific components
  /tools              # Tool components
/lib                  # Utility functions
  /db                 # D1 database utilities
  /utils              # Helper functions
/types                # TypeScript type definitions
/public               # Static assets
/migrations           # D1 database migrations
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Cloudflare account (for deployment)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd LaserSpecHub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Initialize D1 database (local development):
```bash
npm run db:local
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

Build the application:
```bash
npm run build
```

Preview the build with Cloudflare Pages:
```bash
npm run preview
```

### Deployment

Deploy to Cloudflare Pages:
```bash
npm run deploy
```

## Database Setup

### Create D1 Database

```bash
wrangler d1 create laserspec-db
```

Copy the database ID to `wrangler.toml`.

### Run Migrations

```bash
# Local development
npm run db:local

# Production
npm run db:migrate
```

## Key Features

- **Equipment Comparison Tool**: Compare up to 5 laser equipment specifications side-by-side
- **Power Calculator**: Calculate required laser power based on material and thickness
- **Size Matching Tool**: Find equipment matching workpiece dimensions
- **Laser Type Wizard**: Guided selection for laser type (CO2/Fiber/Solid)
- **Equipment Database**: Searchable database of 50+ laser equipment models
- **Technical Articles**: SEO-optimized content about laser technology

## Development Guidelines

### Code Style

- Use TypeScript for all files
- Follow Next.js 14 App Router patterns
- Use Server Components by default
- Add `"use client"` only when necessary
- Follow naming conventions in `.cursorrules`

### SEO Best Practices

- Generate unique meta tags for each page
- Implement Product Schema for equipment
- Create dynamic OpenGraph images
- Maintain proper internal linking

### Performance

- Optimize images with next/image
- Use dynamic imports for heavy components
- Implement proper caching strategies
- Target Core Web Vitals metrics

## Testing

```bash
# Run type checking
npm run type-check

# Run linting
npm run lint
```

## Contributing

1. Create a feature branch
2. Make changes with tests
3. Run linter and type check
4. Submit PR with description

## License

Proprietary - All rights reserved

## Contact

Project maintained by SEO Growth Team






