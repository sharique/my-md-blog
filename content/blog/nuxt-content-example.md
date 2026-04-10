---
title: "Getting Started MD Blog"
date: 2026-3-22
slug: "nuxt-content-example"
summary: "A practical walkthrough of how this blog works — writing posts in Markdown, the frontmatter schema, and how SEO and Open Graph tags are generated automatically from post metadata."
tags: ["Nuxt", "Vue", "Content Management", "SEO"]
author: "Sharique"
status: "published"
seo:
  description: "Learn how this Nuxt 4 blog works — Markdown posts, frontmatter schema, Zod validation, and automatic Open Graph and Twitter Card meta tags via useSeoMeta."
  keywords: ["Nuxt Content", "Markdown blog", "Open Graph", "useSeoMeta", "frontmatter"]
---

This post walks through how this blog is built — how posts are written, what the frontmatter schema looks like, and how SEO and social sharing tags are generated automatically for every post.

## Writing a Post

Every blog post is a plain Markdown file stored in `content/blog/`. The filename becomes the URL slug:

```
content/blog/my-post-title.md  →  /blog/my-post-title
```

At the top of each file is a **frontmatter block** — a YAML section wrapped in `---` that provides metadata about the post.

## Frontmatter Schema

Here is the full schema this blog supports:

```yaml
---
title: "My Post Title"        # required — shown in the page heading and browser tab
date: 2025-01-15              # required — used for sorting and displayed on the post
summary: "Short description"  # required — shown on the blog listing card
tags: ["Vue", "Nuxt"]         # optional — displayed as pills at the bottom of the post
author: "Your Name"           # optional — defaults to "Unknown"
status: "published"           # "draft" | "published" — drafts are hidden from the listing
seo:
  description: "Custom text for search engines and social previews"
  keywords: ["keyword1", "keyword2"]
  og:image: "https://example.com/cover.jpg"
---
```

All fields are validated at build time using **Zod**. If a required field is missing, the build will fail with a clear error.

### Draft vs Published

Setting `status: "draft"` hides the post from the blog listing and sitemap. It is still accessible by direct URL during development, making it easy to preview before publishing.

## SEO and Open Graph Tags

Every page on this blog sets meta tags automatically using Nuxt's built-in `useSeoMeta()` composable. On post pages, the tags are populated from the frontmatter:

```ts
useSeoMeta({
  title: () => post.value?.title,
  description: () => post.value?.seo?.description || post.value?.summary,
  // Open Graph — controls previews on LinkedIn, Slack, iMessage, etc.
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.seo?.description || post.value?.summary,
  ogImage: () => post.value?.seo?.["og:image"] || "",
  ogType: "article",
  // Twitter / X Card
  twitterCard: "summary_large_image",
  twitterTitle: () => post.value?.title,
  twitterDescription: () => post.value?.seo?.description || post.value?.summary,
});
```

### Fallback chain for description

The `seo.description` field is optional. When it is absent, `useSeoMeta` falls back to the post's `summary`. This means every post gets a meaningful social preview as long as `summary` is set — even without a dedicated `seo` block.

### og:image

If you provide an `og:image` URL in the frontmatter, it will appear as the preview image when the post is shared on social platforms. The URL must be **absolute** (e.g. `https://example.com/cover.jpg`) — relative paths are not fetched by social crawlers.

## Markdown Features

Standard Markdown is fully supported inside the post body:

### Headings

```markdown
## H2 heading
### H3 heading (also appears in the table of contents)
```

### Code Blocks

Fenced code blocks with language hints get syntax highlighting automatically:

````markdown
```ts
const greeting = (name: string) => `Hello, ${name}!`
```
````

### Lists, Bold, Italic

```markdown
- item one
- **bold text**
- _italic text_
```

### Links

```markdown
[Link text](https://example.com)
```

## Sitemap

Published posts are included in `/sitemap.xml` automatically. A server endpoint queries all posts with `status: "published"` and passes them to `@nuxtjs/sitemap`, which pre-renders the sitemap file at build time. Draft posts are excluded.
