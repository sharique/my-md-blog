<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>

<template>
  <div>
    <Header />
    <div class="flex flex-col items-center justify-center px-12">
      <slot />
    </div>
  </div>
</template>
