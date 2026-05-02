# My MD Blog

A markdown-powered blog built with Nuxt 4 and the Nuxt Content module. Articles are written as `.md` files and rendered automatically. Deployed to Vercel as a fully static site.

## Overview

- **Framework:** Nuxt 4 (Vue 3)
- **Content:** `@nuxt/content` v3 — reads `.md` files from `content/blog/`
- **Styling:** Tailwind CSS v4 + DaisyUI v5 (warm editorial design)
- **Testing:** Vitest + `@vue/test-utils`
- **Deployment:** Vercel static (auto deploy)

## Features

- Blog listing with pagination (10 posts per page)
- Individual post pages rendered from Markdown with typography styles
- Dark / light mode toggle (persisted via localStorage)
- Zod-validated frontmatter schema (title, date, summary, tags, status)
- Draft posts excluded from listing (only `status: published` posts shown)
- Responsive layout with mobile hamburger menu and study-desk hero illustration
- Open Graph + Twitter Card meta tags on every page (via `useSeoMeta`)
- Per-post SEO frontmatter (`seo.description`, `seo.keywords`, `og:image`)
- Social sharing buttons per post — Web Share API, Twitter/X, Facebook, WhatsApp
- Auto-generated `sitemap.xml` via `@nuxtjs/sitemap` (published posts only)
- RSS feed at `/rss.xml` (published posts only)
- Site name, tagline, and URL configurable via environment variables
- Reading time estimate on post cards and post header (AST word count, 200 wpm)
- Scroll-to-top floating button (fades in after 300px, smooth scroll, passive listener)

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run generate   # Static site generation (use this for deployment)
npm run preview    # Preview production build
npm run test       # Run tests (watch mode)
npm run test:run   # Run tests once
npx eslint .       # Lint
npx eslint --fix . # Auto-fix lint warnings
```

> **Note:** Use `npm run generate`, not `npm run build`, for deployment. `@nuxt/content` uses `better-sqlite3` (a native addon) which fails in Vercel's Lambda runtime. `generate` runs SQLite only at build time and outputs a fully static site.

## Environment Variables

Copy `.env.example` to `.env` and customise:

```bash
NUXT_PUBLIC_SITE_NAME="My Blog"
NUXT_PUBLIC_SITE_TAGLINE="Thoughts on web development & code."
NUXT_PUBLIC_SITE_URL="http://localhost:3000"
```

Set the same variables in the Vercel dashboard for production.

## Content

Blog posts live in `content/blog/*.md`. Frontmatter schema:

```yaml
title: "Post Title"       # required
date: 2025-01-01          # required
summary: "Short summary"  # required
tags: ["Tag1", "Tag2"]    # optional
author: "Name"            # optional
status: "published"       # "draft" | "published" (defaults to draft)
seo:                      # optional — used for OG/Twitter meta tags
  description: "..."
  keywords: ["kw1", "kw2"]
  og:image: "https://example.com/cover.jpg"
```

## Planned

- [x] Scroll-to-top floating button
- [ ] Tag pages (`/blog/tag/[tag]`) with clickable tag pills
- [x] RSS feed improvements (already live at `/rss.xml`)
- [x] Reading time estimate on post cards and post header

## Project Structure

```
app/
  pages/          # File-based routes (/, /blog, /blog/[slug], /about)
  components/     # AppHeader, AppFooter, BlogTeaser, ThemeToggle,
                  # StudyDeskHero, SocialShare
  layouts/        # default.vue — 1200px centered container
  composables/    # useTheme.ts, usePagination.ts
  utils/          # formatDate.ts, readingTime.ts
content/
  blog/           # Markdown blog posts
server/
  api/
    __sitemap__/  # Dynamic sitemap source endpoint
  routes/
    rss.xml.ts    # RSS feed endpoint
```
