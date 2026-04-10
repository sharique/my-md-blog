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

  site: {
    url: "https://my-md-blog.vercel.app", // override with NUXT_PUBLIC_SITE_URL env var
    name: "My MD Blog",
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
