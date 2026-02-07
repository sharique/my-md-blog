<script setup lang="ts">
const { data: latestPosts } = await useAsyncData("latest-posts", () => {
  return queryCollection("blog").order("date", "DESC").limit(3).all();
});

useSeoMeta({
  title: "My Blog - Home",
  description:
    "Welcome to my blog. A showcase of Vue.js and Nuxt.js skills, powered by Markdown.",
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="hero bg-base-200 rounded-box py-16">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-4xl font-bold">Welcome to My Blog</h1>
          <p class="py-6">
            A blogging application powered by Markdown, built with Vue.js and
            Nuxt.js framework.
          </p>
          <NuxtLink to="/blog" class="btn btn-primary">Read Blog</NuxtLink>
        </div>
      </div>
    </div>

    <!-- Latest Posts -->
    <div v-if="latestPosts?.length" class="mt-10">
      <h2 class="text-2xl font-bold mb-6">Latest Posts</h2>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <BlogTeaser
          v-for="post in latestPosts"
          :key="post.id"
          :post="post"
        />
      </div>
    </div>
  </div>
</template>
