<script setup lang="ts">
const currentYear = new Date().getFullYear();

// useRuntimeConfig() is auto-imported by Nuxt. Destructure .public to access
// client-safe config values that can be overridden via env vars.
const { public: config } = useRuntimeConfig();
</script>

<template>
  <footer class="bg-base-200/60 border-t border-base-300/50">
    <div class="max-w-[1200px] mx-auto px-4 py-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p
            class="text-lg font-bold mb-1"
            style="font-family: var(--font-serif)"
          >
            {{ config.siteName }}
          </p>
          <p
            class="text-sm text-base-content/60"
            style="font-family: var(--font-sans)"
          >
            {{ config.siteTagline }}
          </p>
        </div>
        <nav class="flex gap-6" style="font-family: var(--font-sans)">
          <NuxtLink to="/" class="link link-hover text-sm">Home</NuxtLink>
          <NuxtLink to="/blog" class="link link-hover text-sm">Blog</NuxtLink>
          <NuxtLink to="/about" class="link link-hover text-sm">About</NuxtLink>
          <a
            href="https://github.com/sharique"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover text-sm"
          >
            GitHub
          </a>
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            class="link link-hover text-sm"
            aria-label="RSS Feed"
          >
            RSS
          </a>
        </nav>
      </div>
      <div class="editorial-divider mt-8 mb-4">
        <span />
      </div>
      <p
        class="text-center text-xs text-base-content/50"
        style="font-family: var(--font-sans)"
      >
        &copy; {{ currentYear }} {{ config.siteName }}. All rights reserved.
      </p>
    </div>
  </footer>
</template>
