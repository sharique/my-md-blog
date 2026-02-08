import { describe, it, expect } from "vitest";

// Date formatting pattern used in both BlogTeaser.vue and blog/[slug].vue
function formatDate(date: string | null | undefined): string {
  if (!date) return "";
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

describe("formatDate", () => {
  it("formats a valid date string correctly", () => {
    expect(formatDate("2025-01-15")).toBe("January 15, 2025");
  });

  it("formats another valid date correctly", () => {
    expect(formatDate("2024-12-25")).toBe("December 25, 2024");
  });

  it("formats ISO date string", () => {
    expect(formatDate("2025-06-01T12:00:00Z")).toBe("June 1, 2025");
  });

  it("returns empty string for null date", () => {
    expect(formatDate(null)).toBe("");
  });

  it("returns empty string for undefined date", () => {
    expect(formatDate(undefined)).toBe("");
  });

  it("returns empty string for empty string date", () => {
    expect(formatDate("")).toBe("");
  });
});
