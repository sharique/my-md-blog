<script setup lang="ts">
// useRuntimeConfig() is auto-imported by Nuxt.
// .public contains values accessible on both server and client.
const { public: config } = useRuntimeConfig();
</script>

<template>
  <div class="navbar bg-base-200/80 backdrop-blur-sm sticky top-0 z-50 border-b border-base-300/50">
    <div class="navbar-start">
      <!-- Mobile dropdown menu -->
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg"
        >
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/blog">Blogs</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </div>
      <NuxtLink
        to="/"
        class="btn btn-ghost text-xl tracking-tight"
        style="font-family: var(--font-serif); font-weight: 700;"
      >
        {{ config.siteName }}
      </NuxtLink>
    </div>
    <!-- Desktop nav links -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1" style="font-family: var(--font-sans);">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/blog">Blogs</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <ThemeToggle />
    </div>
  </div>
</template>
