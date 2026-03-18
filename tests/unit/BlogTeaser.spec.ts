import { describe, it, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import BlogTeaser from "~/components/BlogTeaser.vue";

const basePost = {
  id: "1",
  path: "/blog/test",
  title: "Test",
  author: "Sharique",
  summary: "Summary",
  tags: [],
};

describe("BlogTeaser", () => {
  it("renders a formatted date", async () => {
    const wrapper = await mountSuspended(BlogTeaser, {
      props: { post: { ...basePost, date: "2025-03-15" } },
    });
    expect(wrapper.text()).toContain("March 15, 2025");
  });

  it("renders nothing for missing date", async () => {
    const wrapper = await mountSuspended(BlogTeaser, {
      props: { post: { ...basePost, date: "" } },
    });
    expect(wrapper.text()).not.toMatch(/\d{4}/);
  });
});
