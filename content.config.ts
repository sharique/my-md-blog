import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        // Required fields
        title: z.string(),
        date: z.coerce.date(),
        slug: z.string().optional(), // Auto-generated from filename if not provided
        summary: z.string(),

        // Optional fields with defaults
        tags: z.array(z.string()).default([]),
        author: z.string().default("Unknown"),
        status: z.enum(["draft", "published"]).default("draft"),

        // Custom SEO fields
        seo: z
          .object({
            description: z.string().optional(),
            keywords: z.array(z.string()).optional(),
            "og:image": z.string().optional(),
          })
          .optional(),
      }),
    }),
  },
});
