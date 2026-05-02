import { describe, it, expect } from "vitest";
import { readingTime } from "~/utils/readingTime";

function words(n: number): string {
  return Array.from({ length: n }, (_, i) => `word${i}`).join(" ");
}

function textNode(value: string) {
  return { type: "text", value };
}

function paragraph(...text: string[]) {
  return {
    type: "element",
    tag: "p",
    children: text.map(textNode),
  };
}

function root(...children: object[]) {
  return { type: "root", children };
}

describe("readingTime", () => {
  it("returns '1 min read' for null body", () => {
    expect(readingTime(null)).toBe("1 min read");
  });

  it("returns '1 min read' for undefined body", () => {
    expect(readingTime(undefined)).toBe("1 min read");
  });

  it("returns '1 min read' for a body with no text content", () => {
    expect(readingTime(root())).toBe("1 min read");
  });

  it("returns '1 min read' for fewer than 200 words", () => {
    expect(readingTime(root(paragraph(words(50))))).toBe("1 min read");
  });

  it("returns '1 min read' for exactly 200 words", () => {
    expect(readingTime(root(paragraph(words(200))))).toBe("1 min read");
  });

  it("returns '2 mins read' for 201 words", () => {
    expect(readingTime(root(paragraph(words(201))))).toBe("2 mins read");
  });

  it("returns '2 mins read' for 400 words", () => {
    expect(readingTime(root(paragraph(words(400))))).toBe("2 mins read");
  });

  it("counts words across multiple paragraphs", () => {
    const body = root(
      paragraph(words(150)),
      paragraph(words(150)),
    );
    expect(readingTime(body)).toBe("2 mins read");
  });

  it("counts words in deeply nested nodes", () => {
    const nested = {
      type: "element",
      tag: "blockquote",
      children: [
        {
          type: "element",
          tag: "p",
          children: [textNode(words(201))],
        },
      ],
    };
    expect(readingTime(root(nested))).toBe("2 mins read");
  });

  it("ignores extra whitespace when counting words", () => {
    const body = root({ type: "element", tag: "p", children: [textNode("  hello   world  ")] });
    expect(readingTime(body)).toBe("1 min read");
  });

  it("respects a custom wordsPerMinute value", () => {
    expect(readingTime(root(paragraph(words(100))), 50)).toBe("2 mins read");
  });

  it("returns at minimum '1 min read' even with a high wordsPerMinute", () => {
    expect(readingTime(root(paragraph(words(10))), 1000)).toBe("1 min read");
  });
});
