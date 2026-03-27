# Adding New Posts Without Next.js Redeployment

## Overview

Your Next.js site now supports adding new blog posts (tin tức) without requiring a full application redeployment. This is achieved through:

1. **File-based content storage** — Articles are stored in JSON (`articles.json`) instead of TypeScript
2. **On-demand ISR (Incremental Static Regeneration)** — The `/api/revalidate` endpoint triggers cache updates
3. **Dynamic rendering fallback** — New articles render dynamically for unknown routes

## Workflow: Adding a New Post

### Step 1: Edit articles.json

Navigate to: `/thanhnamoto/app/tin-tuc/_data/articles.json`

Add a new article object to the `articles` array:

```json
{
  "slug": "your-article-slug",
  "title": "Your Article Title",
  "description": "Short description (SEO meta)",
  "category": "Category Name",
  "categoryColor": "sky",  // or "amber", "emerald"
  "readTime": "5 phút",
  "date": "2026-03-27",
  "excerpt": "Brief excerpt for article lists",
  "content": [
    {
      "type": "p",
      "text": "Your paragraph text here..."
    },
    {
      "type": "h2",
      "text": "Section Title"
    },
    {
      "type": "ul",
      "items": ["Item 1", "Item 2", "Item 3"]
    },
    {
      "type": "image",
      "src": "/images/your-image.png",
      "alt": "Image alt text",
      "caption": "Optional caption"
    },
    {
      "type": "note",
      "text": "Important note to highlight"
    }
  ],
  "faq": [
    {
      "question": "FAQ question?",
      "answer": "FAQ answer"
    }
  ]
}
```

### Step 2: Trigger Revalidation

After saving the article to `articles.json`, call the revalidation endpoint:

**Option A: Using curl**
```bash
curl -X POST "https://thanhnamoto.com/api/revalidate?token=YOUR_SECRET_TOKEN"
```

**Option B: Using JavaScript/Node.js**
```javascript
fetch('https://thanhnamoto.com/api/revalidate?token=YOUR_SECRET_TOKEN', {
  method: 'POST'
}).then(res => res.json()).then(console.log);
```

**Option C: Manual (for testing locally)**
```bash
curl -X POST "http://localhost:3000/api/revalidate?token=dev-secret-change-in-production"
```

### Step 3: Verify

1. **Article list page** — New article appears at `/tin-tuc`
2. **Article detail page** — Accessible at `/tin-tuc/{slug}`
3. **Sitemap** — Updated automatically at `/sitemap.xml`
4. **Metadata** — SEO tags generated automatically

## Environment Setup

### Local Development

The token for local development is set in `.env.local`:
```
REVALIDATE_SECRET=dev-secret-change-in-production
```

### Production (Vercel)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project → Settings → Environment Variables
3. Add: `REVALIDATE_SECRET` with a secure random token
4. Example: `REVALIDATE_SECRET=your-secure-random-token-here`

To generate a secure token:
```bash
# macOS/Linux
openssl rand -hex 32

# Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Article Field Reference

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `slug` | string | Yes | URL-safe identifier (e.g., `my-article-title`) |
| `title` | string | Yes | Full article title for display |
| `description` | string | Yes | Meta description for SEO (160 chars max) |
| `category` | string | Yes | Category name (e.g., "Bảo dưỡng", "Sơn xe") |
| `categoryColor` | string | Yes | One of: `"sky"`, `"amber"`, `"emerald"` |
| `readTime` | string | Yes | Estimated read time (e.g., "5 phút", "10 phút") |
| `date` | string (ISO) | Yes | Publication date (YYYY-MM-DD format) |
| `excerpt` | string | Yes | Brief summary for article lists |
| `content` | array | Yes | Array of content sections (see below) |
| `faq` | array | No | Optional FAQ section for schema markup |

## Content Sections

Each item in the `content` array can be one of:

**Paragraph**
```json
{ "type": "p", "text": "Your paragraph text..." }
```

**Heading**
```json
{ "type": "h2", "text": "Section Title" }
```

**Bullet List**
```json
{ "type": "ul", "items": ["Item 1", "Item 2", "Item 3"] }
```

**Image**
```json
{
  "type": "image",
  "src": "/images/filename.png",
  "alt": "Image alt text",
  "caption": "Optional caption"
}
```

**Highlighted Note**
```json
{ "type": "note", "text": "Important message or callout" }
```

**Inline Links** (in paragraph text)
```json
{ "type": "p", "text": "Check this [link text](https://url.com) in the article" }
```

## SEO Features (Automatic)

✅ **Article Schema** — JSON-LD structured data
✅ **FAQ Schema** — When FAQ items are included
✅ **OpenGraph Tags** — For social media sharing
✅ **Twitter Cards** — For Twitter sharing
✅ **Canonical URLs** — Prevents duplicate content
✅ **Sitemap** — Updated with new articles
✅ **Metadata** — Auto-generated titles and descriptions

## No Redeploy Needed For

- ✅ Adding new articles
- ✅ Editing article content
- ✅ Updating article metadata
- ✅ Changing article dates
- ✅ Adding/removing FAQ items

## Still Requires Redeployment

- ❌ Changes to page layout/design
- ❌ Changes to article type definitions
- ❌ Changes to styling/CSS
- ❌ Updates to route handlers
- ❌ Configuration changes

## Troubleshooting

### New article not appearing?
1. Verify the slug is unique (no duplicates)
2. Check the token is correct: `REVALIDATE_SECRET` from `.env.local` or Vercel
3. Confirm `/api/revalidate` returns `"success": true`
4. Clear browser cache or use incognito mode

### Article shows in sitemap but not on page?
1. Wait 5-10 seconds for revalidation to complete
2. Hard refresh the browser (Cmd+Shift+R or Ctrl+Shift+R)
3. Check the browser console for errors

### Formatting issues in article?
1. Verify all strings in JSON are properly quoted
2. Check that arrays are closed with `]`
3. Use a JSON validator: https://jsonlint.com/
4. Ensure categoryColor is one of: `"sky"`, `"amber"`, `"emerald"`

## Local Testing Workflow

```bash
# 1. Start dev server
pnpm dev

# 2. Add/edit article in articles.json

# 3. Trigger revalidation
curl -X POST "http://localhost:3000/api/revalidate?token=dev-secret-change-in-production"

# 4. Check article appears
curl http://localhost:3000/tin-tuc/{your-slug}

# 5. Verify in browser
open http://localhost:3000/tin-tuc/{your-slug}
```

## Production Workflow (Vercel)

```bash
# 1. Push changes to git (with new article in articles.json)
git add thanhnamoto/app/tin-tuc/_data/articles.json
git commit -m "feat: add new article about X"
git push origin main

# 2. Wait for Vercel deployment to complete (2-3 minutes)

# 3. Trigger revalidation with your production token
curl -X POST "https://thanhnamoto.com/api/revalidate?token=YOUR_PRODUCTION_SECRET"

# 4. Article is live (no full redeploy required!)
```

## Files Changed

This implementation modified:

- **`articles.ts`** — Imports from JSON instead of hardcoded array
- **`articles.json`** — New file with article content
- **`[slug]/page.tsx`** — Added `dynamicParams = true` for new articles
- **`api/revalidate/route.ts`** — New endpoint for on-demand revalidation
- **`.env.local`** — Added `REVALIDATE_SECRET`

## Architecture Benefits

1. **Zero downtime** — No application redeployment needed
2. **Fast updates** — Articles live in <1 second after revalidation
3. **Version controlled** — Articles in git history
4. **SEO-optimized** — Pre-rendered pages + dynamic fallback
5. **Type-safe** — TypeScript types maintained

## Support

For issues or questions about this setup, check:
- `/thanhnamoto/app/tin-tuc/_data/articles.json` — Article schema
- `/thanhnamoto/app/api/revalidate/route.ts` — Revalidation logic
- `/thanhnamoto/CLAUDE.md` — Project constraints
