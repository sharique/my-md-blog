<script setup lang="ts">
const { data: posts } = await useAsyncData("blog", () => {
  return queryCollection("blog").all();
});

useSeoMeta({
  title: "Blogs home page",
  description: "This is my personal blog",
});
</script>

<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <BlogTeaser :post="post" />
      </li>
    </ul>
  </div>
</template>
