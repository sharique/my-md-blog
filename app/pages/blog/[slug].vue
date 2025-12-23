<script setup>
const slug = useRoute().params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection("blog").path(`/blog/${slug}`).first();
});

const formattedDate = computed(() => {
  if (!post.value?.date) return "";
  const date = new Date(post.value.date);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});
</script>

<template>
  <div>
    <div>
      <h2 class="text-3xl md:text-4xl font-bold mb-2">{{ post.title }}</h2>
    </div>
    <time :datetime="post.date" class="text-sm text-base-content/70 mb-4 block">
      {{ formattedDate }}
    </time>
    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer :value="post" class="prose max-w-none" />
    <div class="flex flex-wrap items-center gap-2 mt-6">
      <span class="font-semibold">Tags:</span>
      <button
        v-for="tag in post.tags"
        :key="tag"
        class="btn btn-sm btn-outline"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>
