<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
</script>

<template>
  <div>
    <AppHeader />

    <div class="w-full flex justify-center">
      <div class="w-full max-w-[1200px] px-4 py-8">
        <div class="flex flex-col gap-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
