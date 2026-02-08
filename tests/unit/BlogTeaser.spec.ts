import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BlogTeaser from "~/components/BlogTeaser.vue";

describe("BlogTeaser", () => {
  const createPost = (overrides = {}) => ({
    title: "Test Post",
    date: "2025-01-15",
    author: "Test Author",
    summary: "A test summary",
    path: "/blog/test-post",
    id: "1",
    ...overrides,
  });

  it("formats a valid date correctly", () => {
    const wrapper = mount(BlogTeaser, {
      props: { post: createPost({ date: "2025-01-15" }) },
      global: { stubs: { NuxtLink: true } },
    });
    expect(wrapper.vm.formattedDate).toBe("January 15, 2025");
  });

  it("returns empty string when date is null", () => {
    const wrapper = mount(BlogTeaser, {
      props: { post: createPost({ date: null }) },
      global: { stubs: { NuxtLink: true } },
    });
    expect(wrapper.vm.formattedDate).toBe("");
  });

  it("returns empty string when date is undefined", () => {
    const wrapper = mount(BlogTeaser, {
      props: { post: createPost({ date: undefined }) },
      global: { stubs: { NuxtLink: true } },
    });
    expect(wrapper.vm.formattedDate).toBe("");
  });

  it("requires the post prop", () => {
    const postProp = BlogTeaser.props.post;
    expect(postProp.required).toBe(true);
    expect(postProp.type).toBe(Object);
  });

  it("renders the post title", () => {
    const wrapper = mount(BlogTeaser, {
      props: { post: createPost({ title: "My Blog Post" }) },
      global: {
        stubs: {
          NuxtLink: { template: "<a><slot /></a>" },
        },
      },
    });
    expect(wrapper.text()).toContain("My Blog Post");
  });

  it("renders the post author", () => {
    const wrapper = mount(BlogTeaser, {
      props: { post: createPost({ author: "Jane Doe" }) },
      global: { stubs: { NuxtLink: true } },
    });
    expect(wrapper.text()).toContain("Jane Doe");
  });

  it("renders the post summary", () => {
    const wrapper = mount(BlogTeaser, {
      props: { post: createPost({ summary: "This is a summary" }) },
      global: { stubs: { NuxtLink: true } },
    });
    expect(wrapper.text()).toContain("This is a summary");
  });
});
