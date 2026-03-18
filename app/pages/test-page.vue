<script setup lang="ts">
import { ref, computed } from "vue";
const route = useRoute();
const pageSize = 10;
const currentPage = ref(parseInt(route.query.page as string) || 1);
const items = ref(Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`)); // Sample data
const totalPages = Math.ceil(items.value.length / pageSize);
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  const end = start + pageSize;
  return items.value.slice(start, end);
});

const goToPage = (page: number) => {
  currentPage.value = page;
  navigateTo({ query: { page: page.toString() } });
};
</script>
<template>
  <div>
    <ul>
      <li v-for="item in paginatedItems" :key="item">{{ item }}</li>
    </ul>
    <button
      class="btn btn-accent"
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
</template>
