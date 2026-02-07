<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
    <footer class="footer footer-center bg-base-200 text-base-content p-10">
        <nav>
            <div class="grid grid-flow-col gap-4">
                <NuxtLink to="/" class="link link-hover">Home</NuxtLink>
                <NuxtLink to="/blog" class="link link-hover">Blog</NuxtLink>
                <NuxtLink to="/about" class="link link-hover">About</NuxtLink>
                <a
                    href="https://github.com/sharique"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link link-hover"
                >
                    GitHub
                </a>
            </div>
        </nav>
        <aside>
            <p>&copy; {{ currentYear }} My Blog. All rights reserved.</p>
        </aside>
    </footer>
</template>
