import { describe, it, expect } from "vitest";

// Extract pure pagination logic from blog/index.vue for testing
function sortPostsByDate(posts: Array<{ date?: string | null }>) {
  return [...posts].sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA;
  });
}

function paginateItems<T>(items: T[], page: number, pageSize: number): T[] {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return items.slice(start, end);
}

function calculateTotalPages(totalItems: number, pageSize: number): number {
  return Math.ceil(totalItems / pageSize);
}

describe("sortPostsByDate", () => {
  it("sorts posts by date descending (most recent first)", () => {
    const posts = [
      { date: "2024-01-01", title: "Old" },
      { date: "2025-06-15", title: "Newest" },
      { date: "2025-01-01", title: "Middle" },
    ];
    const sorted = sortPostsByDate(posts);
    expect(sorted[0].title).toBe("Newest");
    expect(sorted[1].title).toBe("Middle");
    expect(sorted[2].title).toBe("Old");
  });

  it("handles posts with null dates (treated as epoch)", () => {
    const posts = [
      { date: null, title: "No date" },
      { date: "2025-01-01", title: "Has date" },
    ];
    const sorted = sortPostsByDate(posts);
    expect(sorted[0].title).toBe("Has date");
    expect(sorted[1].title).toBe("No date");
  });

  it("returns empty array for empty input", () => {
    expect(sortPostsByDate([])).toEqual([]);
  });

  it("does not mutate the original array", () => {
    const posts = [
      { date: "2025-01-01" },
      { date: "2024-01-01" },
    ];
    const original = [...posts];
    sortPostsByDate(posts);
    expect(posts).toEqual(original);
  });
});

describe("paginateItems", () => {
  const items = Array.from({ length: 25 }, (_, i) => ({ id: i + 1 }));

  it("returns correct slice for page 1", () => {
    const result = paginateItems(items, 1, 10);
    expect(result).toHaveLength(10);
    expect(result[0].id).toBe(1);
    expect(result[9].id).toBe(10);
  });

  it("returns correct slice for page 2", () => {
    const result = paginateItems(items, 2, 10);
    expect(result).toHaveLength(10);
    expect(result[0].id).toBe(11);
    expect(result[9].id).toBe(20);
  });

  it("returns remaining items on last partial page", () => {
    const result = paginateItems(items, 3, 10);
    expect(result).toHaveLength(5);
    expect(result[0].id).toBe(21);
    expect(result[4].id).toBe(25);
  });

  it("returns empty array for page beyond total", () => {
    const result = paginateItems(items, 4, 10);
    expect(result).toHaveLength(0);
  });

  it("returns empty array for empty input", () => {
    const result = paginateItems([], 1, 10);
    expect(result).toHaveLength(0);
  });

  it("handles single page of items", () => {
    const singlePage = [{ id: 1 }, { id: 2 }];
    const result = paginateItems(singlePage, 1, 10);
    expect(result).toHaveLength(2);
  });

  it("handles exact page boundary", () => {
    const exactItems = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }));
    const page1 = paginateItems(exactItems, 1, 10);
    const page2 = paginateItems(exactItems, 2, 10);
    const page3 = paginateItems(exactItems, 3, 10);
    expect(page1).toHaveLength(10);
    expect(page2).toHaveLength(10);
    expect(page3).toHaveLength(0);
  });
});

describe("calculateTotalPages", () => {
  it("calculates correct total pages", () => {
    expect(calculateTotalPages(25, 10)).toBe(3);
  });

  it("returns 1 for items less than page size", () => {
    expect(calculateTotalPages(5, 10)).toBe(1);
  });

  it("returns 0 for zero items", () => {
    expect(calculateTotalPages(0, 10)).toBe(0);
  });

  it("handles exact page boundary", () => {
    expect(calculateTotalPages(20, 10)).toBe(2);
  });

  it("returns 1 for single item", () => {
    expect(calculateTotalPages(1, 10)).toBe(1);
  });
});
