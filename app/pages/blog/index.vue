<script setup lang="ts">
import { ref } from "vue";
import { usePagination } from "~/composables/usePagination";

const route = useRoute();
const currentPage = ref(parseInt(route.query.page as string) || 1);

const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").all();
});

const { totalPages, paginatedItems: getPaginatedItems } = usePagination(posts);
const paginatedItems = getPaginatedItems(currentPage);

const goToPage = (page: number) => {
  currentPage.value = page;
  navigateTo({ query: { page: page.toString() } });
};

useSeoMeta({
  title: "Blogs home page",
  description: "This is my personal blog",
  ogTitle: "Blogs home page",
  ogDescription: "This is my personal blog",
  ogType: "website",
  twitterCard: "summary",
});
</script>

<template>
  <div>
    <div class="accent-bar mb-4 animate-fade-in-up"/>
    <h1
      class="text-3xl md:text-4xl font-bold mb-8 animate-fade-in-up"
      style="font-family: var(--font-serif);"
    >
      All Posts
    </h1>
    <ul class="flex flex-col gap-6">
      <li
        v-for="(post, index) in paginatedItems"
        :key="post.id"
        class="animate-fade-in-up"
        :class="`animate-delay-${Math.min(index + 1, 5)}`"
      >
        <BlogTeaser :post="post" />
      </li>
    </ul>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex justify-center items-center mt-12 gap-4">
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
      <span
        class="text-sm text-base-content/60"
        style="font-family: var(--font-sans);"
      >
        Page {{ currentPage }} of {{ totalPages }}
      </span>
    </div>
  </div>
</template>
