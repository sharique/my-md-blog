<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <div class="w-full flex justify-center flex-1">
      <div class="w-full max-w-[1200px] px-4 py-8">
        <div class="flex flex-col gap-6">
          <slot />
        </div>
      </div>
    </div>

    <AppFooter />
  </div>
</template>
