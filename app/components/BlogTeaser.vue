<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      if (!this.post.date) return "";
      const date = new Date(this.post.date);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
  },
});
</script>

<template>
  <div class="blog-teaser card card-border">
    <div class="card-body">
      <div class="card-title">
        <NuxtLink :to="post.path">
          <h2 class="text-2xl font-bold mb-2">Blog title + {{ post.title }}</h2>
        </NuxtLink>
      </div>
      <time :datetime="post.date">{{ formattedDate }}</time>
      <p class="py-4">
        {{ post.summary }}
      </p>
      <div class="card-action">
        <button class="btn btn-primary">
          <NuxtLink :to="post.path"> Read More </NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>
