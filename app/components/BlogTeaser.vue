<script setup lang="ts">
import { formatDate } from "~/utils/formatDate";

const props = defineProps<{
  post: {
    id: string;
    path: string;
    title: string;
    date: string;
    author: string;
    summary: string;
    tags?: string[];
  };
}>();

const formattedDate = computed(() => formatDate(props.post.date));
</script>

<template>
  <div class="card card-border card-editorial bg-base-100">
    <div class="card-body">
      <div class="accent-bar mb-3"/>
      <NuxtLink :to="post.path" class="group">
        <h2
          class="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200"
          style="font-family: var(--font-serif);"
        >
          {{ post.title }}
        </h2>
      </NuxtLink>
      <span
        class="text-sm text-base-content/60"
        style="font-family: var(--font-sans);"
      >
        {{ formattedDate }}
        <span class="mx-1">&middot;</span>
        {{ post.author }}
      </span>
      <p
        class="py-3 text-base-content/80 leading-relaxed"
        style="font-family: var(--font-sans);"
      >
        {{ post.summary }}
      </p>
      <div v-if="post.tags?.length" class="flex flex-wrap gap-2 mb-3">
        <span
          v-for="tag in post.tags.slice(0, 3)"
          :key="tag"
          class="tag-pill"
        >
          {{ tag }}
        </span>
      </div>
      <div class="card-actions justify-end mt-auto">
        <NuxtLink
          :to="post.path"
          class="btn btn-sm btn-ghost text-primary hover:btn-primary hover:text-primary-content"
          style="font-family: var(--font-sans);"
        >
          Read more &rarr;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
