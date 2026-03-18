import { describe, it, expect } from "vitest";
import { formatDate } from "~/utils/formatDate";

describe("formatDate", () => {
  it("formats a valid ISO date string", () => {
    expect(formatDate("2025-03-15")).toBe("March 15, 2025");
  });
  it("returns empty string for null", () => {
    expect(formatDate(null)).toBe("");
  });
  it("returns empty string for undefined", () => {
    expect(formatDate(undefined)).toBe("");
  });
  it("returns empty string for empty string", () => {
    expect(formatDate("")).toBe("");
  });
});
