# Cursor AI Configuration Guide for LaserSpecHub

This document explains how to use Cursor AI effectively with LaserSpecHub's optimized configuration.

## 📋 Configuration Files Overview

### 1. `.cursorrules` - AI Behavior Rules

This file teaches Cursor about your project:

**What it includes:**
- ✅ Project overview and tech stack
- ✅ Next.js 14 App Router patterns
- ✅ TypeScript best practices
- ✅ Cloudflare D1 database patterns
- ✅ SEO requirements
- ✅ Security guidelines
- ✅ File structure conventions
- ✅ External link strategies

**Key configuration references:**
```
@next.config.js       # Next.js configuration
@tsconfig.json        # TypeScript settings
@wrangler.toml        # Cloudflare deployment
@tailwind.config.ts   # Styling configuration
@package.json         # Dependencies and scripts
```

### 2. `.cursorignore` - File Exclusions

Optimizes Cursor's indexing by excluding unnecessary files:

**Excluded directories:**
- `node_modules/` - ~10,000+ files saved
- `.next/` - Build output
- `.wrangler/` - Cloudflare cache
- `coverage/` - Test coverage
- `dist/`, `build/`, `out/` - Build artifacts
- `.d1/` - Local database files

**Benefits:**
- ⚡ Faster code search and navigation
- 🎯 Better AI context relevance
- 💾 Stays within 10,000 file index limit
- 🚀 Improved performance

### 3. `.vscode/settings.json` - Editor Integration

VS Code settings for seamless development:

**Features:**
- Auto-format with Prettier on save
- Auto-fix ESLint issues on save
- Auto-organize imports
- Tailwind CSS IntelliSense
- TypeScript workspace version
- Search exclusions matching `.cursorignore`

## 🚀 Using Cursor Effectively

### Generate Cursor Rules (Already Done!)

This project has been set up using Cursor's auto-generation feature customized for:
- Next.js 14 with Cloudflare Pages
- D1 Database
- TypeScript
- Tailwind CSS

The rules were generated and then customized based on the PRD requirements.

### Best Practices with Cursor

#### 1. **Ask Project-Specific Questions**

Cursor understands your project context:

```
✅ Good: "Create a server component for displaying equipment details"
✅ Good: "Add a D1 query to get equipment by laser type"
✅ Good: "Implement the power calculator with proper SEO metadata"

❌ Avoid: "Create a React component" (too generic)
❌ Avoid: "Add a database query" (specify D1)
```

#### 2. **Reference Configuration Files**

Cursor can read your config files:

```
💡 "Update next.config.js to add a new redirect"
💡 "Modify tsconfig.json to add a new path alias"
💡 "Check wrangler.toml for database binding"
```

#### 3. **Follow Project Patterns**

Cursor will automatically:
- Use Server Components by default
- Add `"use client"` only when needed
- Implement proper TypeScript types
- Use Tailwind utility classes
- Follow security best practices
- Add SEO metadata

#### 4. **Database Operations**

Cursor knows your database schema:

```
💡 "Add a new query to get equipment by brand"
💡 "Create a function to track comparison usage"
💡 "Update the equipment table schema"
```

It will:
- Use parameterized queries (security)
- Follow the schema in `migrations/0001_initial_schema.sql`
- Use helper functions from `lib/db/client.ts`
- Handle JSON fields properly

## 🎯 Cursor Features to Use

### 1. **CMD+K (Edit Code)**

Use for:
- Modifying existing code
- Adding new features to files
- Refactoring components
- Fixing bugs

Example prompts:
```
"Add loading state to this component"
"Refactor this to use Server Actions"
"Add error handling for database queries"
```

### 2. **CMD+L (Chat)**

Use for:
- Understanding code
- Planning features
- Getting explanations
- Architecture discussions

Example prompts:
```
"Explain how the equipment comparison works"
"What's the best way to implement the power calculator?"
"How should I structure the equipment listing page?"
```

### 3. **CMD+Shift+K (Generate Code)**

Use for:
- Creating new files
- Scaffolding components
- Writing tests
- Generating utilities

Example prompts:
```
"Create a new equipment card component"
"Generate a utility function for power calculation"
"Write types for the comparison API response"
```

### 4. **@-mentions**

Reference specific parts of your codebase:

```
@types/equipment.ts - Reference type definitions
@lib/db/client.ts - Reference database utilities
@app/page.tsx - Reference the home page
@next.config.js - Reference Next.js config
```

## 🔍 Understanding .cursorignore

### What Gets Indexed (Important Files)

✅ Source code (`/app`, `/components`, `/lib`, `/types`)
✅ Configuration files
✅ Documentation (`*.md`)
✅ Database migrations
✅ Public assets (selective)

### What Gets Ignored (Unimportant Files)

❌ Dependencies (`node_modules/`)
❌ Build output (`.next/`, `dist/`)
❌ Cache files (`.cache/`, `.turbo/`)
❌ Environment files (`.env*`)
❌ IDE configs (`.vscode/`, `.idea/`)
❌ Database files (`*.db`, `.d1/`)
❌ Logs (`*.log`)

### Why This Matters

With 10,000 file limit:
- Without `.cursorignore`: ~15,000+ files (limit exceeded)
- With `.cursorignore`: ~500 files (well within limit)

This means:
- ⚡ Faster code intelligence
- 🎯 Better AI suggestions
- 💡 More relevant context
- 🚀 Improved performance

## 📊 File Count Optimization

### Check Your File Count

```bash
# Count all files (before .cursorignore)
find . -type f | wc -l

# Count indexed files (after .cursorignore)
find . -type f \
  -not -path "./node_modules/*" \
  -not -path "./.next/*" \
  -not -path "./.wrangler/*" \
  | wc -l
```

### Stay Within Limits

**10,000 File Limit Strategy:**
- Exclude all dependencies
- Exclude all build outputs
- Exclude all cache directories
- Keep only source code and configs

**Current Project:**
- Total files: ~15,000
- Indexed files: ~500
- Buffer: 9,500 files for growth

## 🛠️ Customizing Configuration

### Adding to .cursorrules

When adding new patterns or conventions:

```markdown
## Your New Section

### Feature Name
- Rule 1
- Rule 2
- Example code
```

### Adding to .cursorignore

When adding new directories to ignore:

```
# New build outputs
/custom-output/

# New cache directories
.custom-cache/
```

### VS Code Settings

When adding new editor preferences:

```json
{
  "editor.newSetting": "value"
}
```

## 🎨 Example Workflows

### Workflow 1: Adding a New Feature

1. **Plan** (CMD+L):
   ```
   "I need to add a laser type selection wizard. 
   What's the best approach?"
   ```

2. **Generate** (CMD+Shift+K):
   ```
   "Create a new wizard component in /components/tools/
   with step-by-step laser type selection"
   ```

3. **Refine** (CMD+K):
   ```
   "Add form validation and error handling"
   ```

4. **Integrate**:
   ```
   "Create a page for this wizard at /app/tools/wizard"
   ```

### Workflow 2: Database Query

1. **Reference schema**:
   ```
   "@migrations/0001_initial_schema.sql
   Show me the equipment table structure"
   ```

2. **Create query**:
   ```
   "Add a function in @lib/db/client.ts
   to get equipment by multiple filters"
   ```

3. **Use in API**:
   ```
   "Create an API route at /app/api/equipment
   that uses this query"
   ```

### Workflow 3: Fixing Issues

1. **Understand** (CMD+L):
   ```
   "@app/comparison/page.tsx
   Why is this component not rendering properly?"
   ```

2. **Fix** (CMD+K):
   ```
   "Fix the rendering issue and add error boundaries"
   ```

3. **Test**:
   ```
   "Add console logging to debug the comparison state"
   ```

## 📚 Advanced Tips

### 1. Context Management

Cursor uses the last ~20 messages for context. Keep chats focused:
- ✅ One feature per chat
- ✅ Clear, specific prompts
- ❌ Avoid multiple unrelated tasks

### 2. File References

Use `@` mentions to include specific files:
```
"@types/equipment.ts @lib/db/client.ts
Update these to add a new field"
```

### 3. Multi-step Tasks

Break complex tasks into steps:
```
1. "First, create the TypeScript types"
2. "Now create the database query function"
3. "Finally, create the API route"
```

### 4. Code Review

Ask Cursor to review your code:
```
"Review this component for:
- TypeScript best practices
- Security issues
- Performance optimizations
- Accessibility"
```

## 🚨 Common Issues

### Issue: Cursor Not Finding Files

**Solution:**
1. Check if file is in `.cursorignore`
2. Restart Cursor
3. Verify file count: `find . -type f | wc -l`

### Issue: Wrong Patterns Used

**Solution:**
1. Review `.cursorrules`
2. Be more specific in prompts
3. Reference configuration files

### Issue: Slow Performance

**Solution:**
1. Clear Cursor cache
2. Review `.cursorignore` is working
3. Reduce number of open files
4. Restart Cursor

## 📈 Monitoring Performance

### Check Indexing

```bash
# Files being indexed
find . -type f \
  -not -path "./node_modules/*" \
  -not -path "./.next/*" \
  | head -20

# Total indexed files
find . -type f \
  -not -path "./node_modules/*" \
  -not -path "./.next/*" \
  | wc -l
```

### Optimize When Needed

If approaching 10,000 file limit:
1. Review `.cursorignore`
2. Add more exclusions
3. Remove unused dependencies
4. Clean build artifacts

## 🎓 Learning Resources

- [Cursor Documentation](https://docs.cursor.com/)
- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Cloudflare D1 Guides](https://developers.cloudflare.com/d1/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Remember:** The better your prompts, the better Cursor's suggestions!

Be specific, reference files, and follow the project's established patterns.











