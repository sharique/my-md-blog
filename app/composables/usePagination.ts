import { computed } from "vue";
import type { Ref } from "vue";

export function usePagination<T extends { date?: string }>(
  items: Ref<T[] | null>,
  pageSize = 10,
) {
  const sortedItems = computed(() => {
    if (!items.value) return [];
    return [...items.value].sort(
      (a, b) =>
        new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime(),
    );
  });

  const totalPages = computed(() =>
    Math.ceil((items.value?.length || 0) / pageSize),
  );

  const paginatedItems = (page: Ref<number>) =>
    computed(() => {
      const start = (page.value - 1) * pageSize;
      return sortedItems.value.slice(start, start + pageSize);
    });

  return { sortedItems, totalPages, paginatedItems };
}
