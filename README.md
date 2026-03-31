# My MD Blog

A markdown-powered blog built with Nuxt 4 and Nuxt content module. Articles are written as `.md` files and rendered automatically. Deployed to Vercel.

## Overview

- **Framework:** Nuxt 4 (Vue 3)
- **Content:** `@nuxt/content` v3 — reads `.md` files from `content/blog/`
- **Styling:** Tailwind CSS v4 + DaisyUI v5 (warm editorial design)
- **Testing:** Vitest + `@vue/test-utils`
- **Deployment:** Vercel auto deploy

## Features

- Blog listing with pagination (10 posts per page)
- Individual post pages rendered from Markdown with typography styles
- Dark / light mode toggle (persisted)
- Zod-validated frontmatter schema (title, date, summary, tags, status)
- Draft posts excluded from listing (only `status: published` posts shown)
- Responsive layout with a study-desk hero illustration on the home page
- SEO-ready frontmatter (`seo.description`, `seo.keywords`, `og:image`)

## Commands

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Build for production
npm run generate   # Static site generation
npm run preview    # Preview production build
npm run test       # Run tests (watch mode)
npm run test:run   # Run tests once
npx eslint .       # Lint
npx eslint --fix . # Auto-fix lint warnings
```

## Content

Blog posts live in `content/blog/*.md`. Frontmatter schema:

```yaml
title: "Post Title"       # required
date: 2025-01-01          # required
summary: "Short summary"  # required
tags: ["Tag1", "Tag2"]    # optional
author: "Name"            # optional
status: "published"       # "draft" | "published" (defaults to draft)
```

## Planned

- [ ] Sitemap (`/sitemap.xml`) via `@nuxtjs/sitemap`
- [ ] Social sharing Open Graph tags per post
- [ ] Design improvements (typography, spacing, component polish)

## Project Structure

```
app/
  pages/          # File-based routes (/, /blog, /blog/[slug], /about)
  components/     # AppHeader, AppFooter, BlogTeaser, ThemeToggle, StudyDeskHero
  layouts/        # default.vue — 1200px centered container
  composables/    # useTheme.ts, usePagination.ts
content/
  blog/           # Markdown blog posts
```
