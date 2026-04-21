// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  nitro: {
    preset: "vercel-static",
  },

  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/image",
    "@nuxt/test-utils",
    "@vercel/speed-insights",
    "@nuxtjs/sitemap",
  ],

  // Used by @nuxtjs/sitemap to build <loc> URLs. Override via NUXT_PUBLIC_SITE_URL.
  site: {
    url: "https://my-md-blog.vercel.app",
  },

  // Single source of truth for site config in components.
  // Nuxt auto-maps: runtimeConfig.public.siteName → NUXT_PUBLIC_SITE_NAME, etc.
  runtimeConfig: {
    public: {
      siteName: "My Blog",
      siteTagline: "Thoughts on web development & code.",
      siteUrl: "https://my-md-blog.vercel.app",
    },
  },

  sitemap: {
    sources: ["/api/__sitemap__/urls"],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["./app/tailwind.css"],
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        },
      },
    },
  },
});
