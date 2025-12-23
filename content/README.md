# Content Directory Organization

## Directory Structure

```
/content/
├── README.md                    # This documentation file
├── blog/                       # Blog posts (future organization)
│   ├── 2023/                  
│   ├── 2024/
│   └── 2025/
├── drafts/                     # Draft content (optional)
└── *.md                        # Root level posts (current structure)
```

## File Naming Conventions

- Use kebab-case for all markdown files: `my-blog-post.md`
- Dates can be prefixed optionally: `2023-12-22-post-title.md`
- Avoid spaces, special characters, and uppercase in filenames
- Use descriptive, SEO-friendly names

## Frontmatter Schema

### Required Fields
- `title`: Post title
- `date`: Publication date (YYYY-MM-DD or ISO format)
- `slug`: URL slug (auto-generated from filename if not provided)
- `summary`: Brief description for listings

### Optional Fields
- `tags`: Array of tags for categorization
- `author`: Author name (defaults to "Unknown")
- `status`: "draft" or "published" (defaults to "draft")
- `seo`: SEO metadata object
  - `description`: Meta description
  - `keywords`: Array of keywords
  - `og:image`: Open Graph image URL
- `url`: Custom URL override (overrides slug-based routing)

## Supported Frontmatter Formats

Both YAML and TOML frontmatter are supported:

### YAML Format
```yaml
---
title: "My Blog Post"
date: 2023-12-22
slug: my-blog-post
summary: "This is a summary"
tags: ["technology", "programming"]
author: "John Doe"
status: "published"
seo:
  description: "Custom meta description"
  keywords: ["keyword1", "keyword2"]
  og:image: "/assets/images/post-image.jpg"
url: "/custom/url/path"
---
```

### TOML Format
```toml
+++
title = "My Blog Post"
date = "2023-12-22"
slug = "my-blog-post"
summary = "This is a summary"
tags = ["technology", "programming"]
author = "John Doe"
status = "published"

[seo]
description = "Custom meta description"
keywords = ["keyword1", "keyword2"]
"og:image" = "/assets/images/post-image.jpg"

url = "/custom/url/path"
+++
```

## Compatibility Notes

- Existing content files are preserved and remain compatible
- Legacy frontmatter fields (`description`) are handled gracefully
- Migration from old format to new format is optional
- Default values are provided for missing optional fields