<script setup>
import { formatDate } from "~/utils/formatDate";

const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});

const formattedDate = computed(() => formatDate(post.value?.date));

useSeoMeta({
  title: () => post.value?.title || "Post not found",
  description: () => post.value?.seo?.description || post.value?.summary || "",
  keywords: () => post.value?.seo?.keywords?.join(",") || "",
  ogTitle: () => post.value?.title || "",
  ogDescription: () => post.value?.seo?.description || post.value?.summary || "",
  ogImage: () => post.value?.seo?.["og:image"] || "",
  ogType: "article",
  twitterCard: "summary_large_image",
  twitterTitle: () => post.value?.title || "",
  twitterDescription: () => post.value?.seo?.description || post.value?.summary || "",
});
</script>

<template>
  <article class="animate-fade-in-up">
    <header class="mb-8">
      <div class="accent-bar mb-4"/>
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight"
        style="font-family: var(--font-serif);"
      >
        {{ post.title }}
      </h1>
      <time
        :datetime="post.date"
        class="text-sm text-base-content/60 block"
        style="font-family: var(--font-sans);"
      >
        {{ formattedDate }}
        <span class="mx-1">&middot;</span>
        {{ post.author }}
      </time>
    </header>

    <ContentRenderer :value="post" class="prose max-w-none" />

    <footer class="mt-10">
      <div class="editorial-divider mb-6">
        <span/>
      </div>
      <div class="flex flex-wrap items-center gap-2">
        <span
          class="text-sm font-semibold text-base-content/70 mr-1"
          style="font-family: var(--font-sans);"
        >
          Tags:
        </span>
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="tag-pill"
        >
          {{ tag }}
        </span>
      </div>
    </footer>
  </article>
</template>
