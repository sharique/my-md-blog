---
title: "Getting Started with Nuxt Content"
date: 2024-12-22
slug: "nuxt-content-example"
summary: "Learn how to build a dynamic content management system using Nuxt Content module for creating blogs, documentation, and more."
tags: ["Nuxt", "Vue", "Content Management", "JAMstack"]
author: "Sharique Hasan"
status: "published"
url: "/blog/nuxt-content-tutorial"
seo:
  description: "Complete guide to building a content management system with Nuxt Content module"
  keywords: ["Nuxt Content", "Vue.js", "Static Site Generator", "CMS"]
---

# Building Content-Rich Applications with Nuxt Content

Nuxt Content is a powerful module that transforms your Nuxt.js application into a content management system. It allows you to write content in Markdown, YAML, CSV, or JSON files and query them through a MongoDB-like API.

## Key Features

- **File-based CMS**: Store your content as files in your repository
- **Powerful Querying**: MongoDB-like API for content queries  
- **Hot Reloading**: Instant updates during development
- **Full-text Search**: Built-in search capabilities
- **Syntax Highlighting**: Code blocks with highlighting support

## Getting Started

First, install the Nuxt Content module:

```bash
npm install @nuxt/content
```

Then add it to your `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ]
})
```

## Writing Content

Create markdown files in the `content/` directory:

```markdown
---
title: "My First Post"
description: "This is my first blog post"
---

# Hello World

This is the content of my post.
```

## Querying Content

Use the `queryContent()` composable to fetch your content:

```vue
<script setup>
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('/blog').find()
)
</script>
```

This example demonstrates how Nuxt Content can be used to create sophisticated content management workflows with minimal setup.