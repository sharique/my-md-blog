<template>
  <header class="bg-gray-800 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-2xl font-bold">
        <NuxtLink to="/"> My Blog </NuxtLink>
      </h1>
      <nav>
        <ul class="flex space-x-4">
          <li><a href="/">Home</a></li>
          <li><a href="/blog">Blogs</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
