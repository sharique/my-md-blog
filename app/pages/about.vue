<template>
    <div>
        <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-2">About</h2>
        </div>
        <div class="text">
            <p>
                A lightweight, markdown-powered blog built with Nuxt 4. Write
                your posts in Markdown, and the site takes care of the rest —
                rendering, routing, and styling are all handled automatically.
            </p>

            <h3 class="text-2xl font-semibold mt-6 mb-2">Tech Stack</h3>
            <ul class="list-disc list-inside space-y-1">
                <li>
                    <strong>Nuxt 4</strong> — Vue-based framework for
                    server-rendered and static sites
                </li>
                <li>
                    <strong>Nuxt Content</strong> — Reads Markdown files from
                    the project and turns them into queryable, routable pages
                </li>
                <li>
                    <strong>Tailwind CSS 4</strong> — Utility-first CSS
                    framework
                </li>
                <li>
                    <strong>DaisyUI</strong> — Component library built on
                    Tailwind for ready-made UI elements
                </li>
            </ul>

            <h3 class="text-2xl font-semibold mt-6 mb-2">How It Works</h3>
            <p>
                Blog posts are plain Markdown files stored in the project's
                <code>content/</code> directory. Nuxt Content parses them at
                build time, generates the pages, and provides a query API for
                listing and filtering posts. No external database or CMS is
                required.
            </p>

            <h3 class="text-2xl font-semibold mt-6 mb-2">Source Code</h3>
            <p>
                The project is open source. Feel free to explore, fork, or
                contribute on
                <a
                    class="link link-primary"
                    href="https://github.com/sharique/my-md-blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    >GitHub</a
                >.
            </p>
        </div>
    </div>
</template>
