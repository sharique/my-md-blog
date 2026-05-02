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

// Minimark format — the actual format Nuxt Content v3 stores in SQLite:
// { type: "minimark", value: [["tag", props, ...children], ...] }
// Text leaves are plain strings inside the tuple, not { type: "text", value } objects.
function mm(...nodes: unknown[]) {
  return { type: "minimark", value: nodes };
}
function mmP(text: string) {
  return ["p", {}, text];
}
function mmUl(...items: string[]) {
  return ["ul", {}, ...items.map((t) => ["li", {}, t])];
}

describe("readingTime — minimark format", () => {
  it("returns '1 min read' for an empty minimark body", () => {
    expect(readingTime(mm())).toBe("1 min read");
  });

  it("returns '1 min read' for fewer than 200 words", () => {
    expect(readingTime(mm(mmP(words(50))))).toBe("1 min read");
  });

  it("returns '1 min read' for exactly 200 words", () => {
    expect(readingTime(mm(mmP(words(200))))).toBe("1 min read");
  });

  it("returns '2 mins read' for 201 words", () => {
    expect(readingTime(mm(mmP(words(201))))).toBe("2 mins read");
  });

  it("counts words across multiple minimark paragraphs", () => {
    expect(readingTime(mm(mmP(words(150)), mmP(words(150))))).toBe("2 mins read");
  });

  it("counts words in minimark list items", () => {
    const items = Array.from({ length: 201 }, (_, i) => `word${i}`);
    expect(readingTime(mm(mmUl(...items)))).toBe("2 mins read");
  });

  it("counts words in nested minimark tuples", () => {
    const blockquote = ["blockquote", {}, ["p", {}, words(201)]];
    expect(readingTime(mm(blockquote))).toBe("2 mins read");
  });
});
