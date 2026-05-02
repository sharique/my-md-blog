<script setup lang="ts">
import { readingTime } from "~/utils/readingTime";

const { data: latestPosts } = await useAsyncData("latest-posts", () => {
  return queryCollection("blog").order("date", "DESC").limit(3).all();
});

useSeoMeta({
  title: "My Blog - Home",
  description: "Welcome to my blog. A showcase of Vue.js and Nuxt.js skills, powered by Markdown.",
  ogTitle: "My Blog - Home",
  ogDescription: "Welcome to my blog. A showcase of Vue.js and Nuxt.js skills, powered by Markdown.",
  ogType: "website",
  twitterCard: "summary",
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="hero-editorial rounded-box overflow-hidden">
      <div class="py-12 md:py-20 px-6">
        <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-5xl mx-auto">
          <!-- Text content -->
          <div class="flex-1 text-center lg:text-left animate-fade-in-up">
            <p class="text-sm font-medium tracking-widest uppercase text-base-content/50 mb-4" style="font-family: var(--font-sans);">
              A writer's corner
            </p>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style="font-family: var(--font-serif);">
              Thoughts, Notes <br class="hidden md:block" >&amp; Reflections
            </h1>
            <div class="accent-bar mx-auto lg:mx-0 mb-6"/>
            <p class="text-lg text-base-content/70 max-w-lg mx-auto lg:mx-0 mb-8" style="font-family: var(--font-sans); line-height: 1.7;">
              A quiet space for writing about web development, ideas, and
              the craft of building things with code.
            </p>
            <div class="flex gap-4 justify-center lg:justify-start">
              <NuxtLink to="/blog" class="btn btn-primary px-8">
                Read the Blog
              </NuxtLink>
              <NuxtLink to="/about" class="btn btn-ghost">
                About
              </NuxtLink>
            </div>
          </div>
          <!-- Desk illustration -->
          <div class="flex-1 max-w-md lg:max-w-lg animate-fade-in-up animate-delay-2">
            <StudyDeskHero />
          </div>
        </div>
      </div>
    </div>

    <!-- Latest Posts -->
    <div v-if="latestPosts?.length" class="mt-16">
      <div class="editorial-divider mb-8">
        <h2 class="text-2xl md:text-3xl font-bold whitespace-nowrap" style="font-family: var(--font-serif);">
          Latest Posts
        </h2>
      </div>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BlogTeaser
          v-for="(post, index) in latestPosts"
          :key="post.id"
          :post="post"
          :read-time="readingTime(post.body)"
          class="animate-fade-in-up"
          :class="`animate-delay-${index + 2}`"
        />
      </div>
    </div>
  </div>
</template>
