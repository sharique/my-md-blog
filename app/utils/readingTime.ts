function extractText(node: unknown): string {
  if (node !== null && typeof node === "object" && !Array.isArray(node)) {
    const obj = node as Record<string, unknown>;
    // Minimark format: { type: "minimark", value: [...tuples] }
    if (Array.isArray(obj.value)) {
      return obj.value.map(extractText).join(" ");
    }
    // MDC AST text node: { type: "text", value: "string" }
    if (obj.type === "text" && typeof obj.value === "string") {
      return obj.value;
    }
    // MDC AST element/root: { children: [...] }
    if (Array.isArray(obj.children)) {
      return (obj.children as unknown[]).map(extractText).join(" ");
    }
    return "";
  }

  // Minimark tuple: [tag, props, ...children]
  if (Array.isArray(node)) {
    return node.slice(2).map(extractText).join(" ");
  }

  // Text leaf inside a minimark tuple
  if (typeof node === "string") {
    return node;
  }

  return "";
}

export function readingTime(
  body: unknown,
  wordsPerMinute = 200,
): string {
  if (!body) return "1 min read";
  const text = extractText(body);
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} ${minutes === 1 ? "min" : "mins"} read`;
}
