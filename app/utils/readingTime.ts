/**
 * Recursively extracts plain text from a Nuxt Content v3 body AST node.
 * The body is a tree of { type, value?, children? } nodes.
 */

function extractText(node: Record<string, unknown>): string {
  if (node.type === "text" && typeof node.value === "string") {
    return node.value;
  }

  if (Array.isArray(node.children)) {
    return (node.children as Record<string, unknown>[])
      .map(extractText)
      .join(" ");
  }
  return " ";
}

/**
 * Estimates reading time from a Nuxt Content v3 body AST.
 * Returns a string like "3 min read".
 *
 * @param body - The post.body object from queryCollection()
 * @param wordsPerMinute - Reading speed, defaults to 200 wpm
 */
export function readingTime(
  body: Record<string, unknown> | null | undefined,
  wordsPerMinute = 200,
): string {
  if (!body) return "1 min read";
  const text = extractText(body);
  const workCount = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(workCount / wordsPerMinute));

  return `${minutes} ${minutes === 1 ? "min" : "mins"} read`;
}
