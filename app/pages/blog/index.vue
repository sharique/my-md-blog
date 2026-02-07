<script setup lang="ts">
import { ref, computed } from "vue";
const route = useRoute();
const pageSize = 10;
const currentPage = ref(parseInt(route.query.page as string) || 1);

const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").all();
});

const totalPages = computed(() =>
  Math.ceil((posts.value?.length || 0) / pageSize),
);

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
    <h1 class="text-3xl font-bold mb-6">Blogs</h1>
    <ul class="flex flex-col gap-6">
      <li v-for="post in paginatedItems" :key="post.id">
        <BlogTeaser :post="post" />
      </li>
    </ul>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex justify-center items-center mt-8 gap-4">
      <div class="join">
        <button
          class="join-item btn"
          :disabled="currentPage === 1"
          @click="goToPage(currentPage - 1)"
        >
          Previous
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          class="join-item btn"
          :class="{ 'btn-active': page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </button>
        <button
          class="join-item btn"
          :disabled="currentPage === totalPages"
          @click="goToPage(currentPage + 1)"
        >
          Next
        </button>
      </div>
      <span class="text-sm text-base-content/70">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
    </div>
  </div>
</template>
