import { describe, it, expect } from "vitest";
import { ref } from "vue";
import { usePagination } from "~/composables/usePagination";

const makePosts = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    date: new Date(2025, i % 12, i + 1).toISOString(),
    title: `Post ${i}`,
  }));

describe("usePagination", () => {
  it("sorts posts by date descending", () => {
    const posts = ref(makePosts(3));
    const { sortedItems } = usePagination(posts);
    const dates = sortedItems.value.map((p) => new Date(p.date!).getTime());
    expect(dates[0]).toBeGreaterThanOrEqual(dates[1]!);
    expect(dates[1]).toBeGreaterThanOrEqual(dates[2]!);
  });

  it("returns correct slice for page 1", () => {
    const posts = ref(makePosts(15));
    const page = ref(1);
    const { paginatedItems } = usePagination(posts);
    expect(paginatedItems(page).value).toHaveLength(10);
  });

  it("returns correct slice for page 2", () => {
    const posts = ref(makePosts(15));
    const page = ref(2);
    const { paginatedItems } = usePagination(posts);
    expect(paginatedItems(page).value).toHaveLength(5);
  });

  it("calculates totalPages correctly", () => {
    const posts = ref(makePosts(25));
    const { totalPages } = usePagination(posts);
    expect(totalPages.value).toBe(3);
  });

  it("handles empty array", () => {
    const posts = ref<{ date?: string; title: string }[]>([]);
    const page = ref(1);
    const { totalPages, paginatedItems } = usePagination(posts);
    expect(totalPages.value).toBe(0);
    expect(paginatedItems(page).value).toHaveLength(0);
  });

  it("handles single page (≤10 items)", () => {
    const posts = ref(makePosts(7));
    const page = ref(1);
    const { totalPages, paginatedItems } = usePagination(posts);
    expect(totalPages.value).toBe(1);
    expect(paginatedItems(page).value).toHaveLength(7);
  });
});
