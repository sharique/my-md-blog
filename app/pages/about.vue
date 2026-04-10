<template>
  <div class="animate-fade-in-up">
    <div class="accent-bar mb-4"/>
    <h2
      class="text-3xl md:text-4xl font-bold mb-6"
      style="font-family: var(--font-serif);"
    >
      About
    </h2>
    <div class="prose max-w-none" style="font-family: var(--font-sans);">
      <p>
        A lightweight, markdown-powered blog built with Nuxt 4. Write
        your posts in Markdown, and the site takes care of the rest —
        rendering, routing, styling, and SEO are all handled automatically.
      </p>

      <h3 style="font-family: var(--font-serif);">Features</h3>
      <ul>
        <li>Paginated blog listing with 10 posts per page</li>
        <li>Individual post pages rendered from Markdown with full typography styles</li>
        <li>Dark / light mode toggle, persisted across visits</li>
        <li>Draft posts hidden from listing — only <code>status: published</code> posts are shown</li>
        <li>Open Graph and Twitter Card meta tags on every page for rich social sharing previews</li>
        <li>Auto-generated <code>/sitemap.xml</code> for search engine discovery</li>
        <li>Zod-validated frontmatter schema with optional SEO fields per post</li>
      </ul>

      <h3 style="font-family: var(--font-serif);">Tech Stack</h3>
      <ul>
        <li>
          <strong>Nuxt 4</strong> — Vue-based framework for static site generation
        </li>
        <li>
          <strong>Nuxt Content v3</strong> — reads Markdown files from
          <code>content/blog/</code> and turns them into queryable, routable pages
        </li>
        <li>
          <strong>Tailwind CSS v4</strong> — utility-first CSS framework
        </li>
        <li>
          <strong>DaisyUI v5</strong> — component library built on Tailwind for ready-made UI elements
        </li>
        <li>
          <strong>Zod</strong> — schema validation for post frontmatter
        </li>
        <li>
          <strong>Vitest</strong> — unit and component testing
        </li>
      </ul>

      <h3 style="font-family: var(--font-serif);">How It Works</h3>
      <p>
        Blog posts are plain Markdown files stored in the <code>content/blog/</code>
        directory. Nuxt Content parses them at build time, generates the pages, and
        provides a query API for listing and filtering posts. No external database or
        CMS is required — the entire site is statically generated and deployed to Vercel.
      </p>
      <p>
        Want to see how a post is written?
        <NuxtLink to="/blog/nuxt-content-example" class="link link-primary">
          Read the example post
        </NuxtLink>
        for a walkthrough of the frontmatter schema and Markdown features supported out of the box.
      </p>

      <h3 style="font-family: var(--font-serif);">Source Code</h3>
      <p>
        The project is open source. Feel free to explore, fork, or
        contribute on
        <a
          class="link link-primary"
          href="https://github.com/sharique/my-md-blog"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub</a>.
      </p>
    </div>
  </div>
</template>
