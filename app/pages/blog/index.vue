<script setup lang="ts">
import { ref, computed } from "vue";
const route = useRoute();
const pageSize = 10;
const currentPage = ref(parseInt(route.query.page as string) || 1);

const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").all();
});
const totalPages = Math.ceil(posts.value.length / pageSize);

// Sort posts by date (most recent first) and paginate
const sortedPosts = computed(() => {
  if (!posts.value) return [];
  return [...posts.value].sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA;
  });
});

const goToPage = (page: number) => {
  currentPage.value = page;
  navigateTo({ query: { page: page.toString() } });
};
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return sortedPosts.value.slice(start, end);
});

useSeoMeta({
  title: "Blogs home page",
  description: "This is my personal blog",
});
</script>

<template>
  <div>
    <h1>Blogs</h1>
    <ul>
      <li v-for="post in paginatedItems" :key="post.id">
        <BlogTeaser :post="post" />
      </li>
    </ul>

    <div class="pager">
      <button
        class="btn btn-accent px-1"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
      >
        Previous
      </button>
      <button
        class="btn btn-accent"
        :disabled="currentPage == totalPages"
        @click="goToPage(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>
