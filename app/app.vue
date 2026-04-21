<script setup lang="ts">
const config = useRuntimeConfig();
useHead({
  link: [
    {
      rel: "alternate",
      type: "application/rss+xml",
      href: `${config.public.siteUrl}/rss.xml`,
      title: `${config.public.siteName} RSS Feed`,
    },
  ],
});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
