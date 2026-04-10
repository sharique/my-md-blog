---
title: "Upgrading to Vite 8 in a Nuxt Project"
date: 2026-03-15
slug: "upgrading-to-vite-8-with-nuxt"
summary: "Vite 8 ships with a completely new build engine under the hood. Here's how I upgraded my Nuxt blog to Vite 8, why a direct npm install won't work, and what actually changed."
tags: ["Vite", "Nuxt", "JavaScript"]
author: "Sharique"
status: "published"
seo:
  description: "Step-by-step guide to upgrading a Nuxt 4 project to Vite 8 using npm overrides, including what changed in Vite 8 and how to verify the migration."
  keywords: ["Vite 8", "Nuxt", "Vite upgrade", "npm overrides", "Rolldown", "Oxc"]
---

Vite 8 is out, and it's not a small release. The entire build pipeline has been replaced — esbuild and Rollup are out, Rolldown and Oxc are in. For most projects, the upgrade is seamless. But if you're on Nuxt, there's a catch you need to know about before you do anything.

## The Problem with Nuxt and Vite Versions

If you look at your Nuxt project's `package.json`, you won't find a `vite` entry. That's because Nuxt manages Vite as an internal dependency — it ships its own version of Vite and handles all Vite configuration internally.

This means running `npm install vite@8` won't do what you want. npm will install Vite 8 in your `node_modules`, but Nuxt will continue using its own bundled version. You'd end up with two copies of Vite and no actual upgrade.

The correct approach is to use npm's `overrides` field, which forces every package in your dependency tree — including Nuxt — to resolve `vite` to the version you specify.

## The Fix

Open your `package.json` and add an `overrides` field at the top level:

```json
{
  "overrides": {
    "vite": "^8.0.0"
  }
}
```

Then run:

```bash
npm install
```

That's it. npm will now resolve all `vite` imports across your entire dependency tree to Vite 8. You can confirm it worked by checking the installed version:

```bash
node -e "console.log(require('./node_modules/vite/package.json').version)"
```

You should see `8.0.0`.

## Verifying the Build

Run your production build to make sure everything works:

```bash
npm run build
```

If the upgrade is successful, you'll see Vite's version reported in Nuxt's build output:

```
Nuxt 4.4.2 (with Nitro 2.13.1, Vite 8.0.0 and Vue 3.5.30)
```

For this project — a Nuxt 4 blog using `@nuxt/content`, Tailwind CSS v4, and DaisyUI — the build completed without any errors or warnings. The client built in ~2.9 seconds and the server in ~1.5 seconds.

## What Actually Changed in Vite 8

Understanding what changed helps you know what to watch out for if you do run into issues.

### Rolldown replaces Rollup and esbuild

The biggest change in Vite 8 is that Rollup (used for production bundling) and esbuild (used for dependency pre-bundling and JS transforms) have been replaced by [Rolldown](https://rolldown.rs/) — a new Rust-based bundler — and [Oxc](https://oxc.rs/) for transforms and minification.

In practice, this means:

- **`build.rollupOptions`** is now `build.rolldownOptions`
- **`optimizeDeps.esbuildOptions`** is now `optimizeDeps.rolldownOptions`
- **`esbuild.jsx` / `esbuild.define`** options move to `oxc.jsx` / `oxc.define`

If you have a custom `vite.config.ts` using any of these options, you'll need to update them. For a standard Nuxt project with no custom Vite config (like this one), none of this matters — Nuxt handles it internally.

### JavaScript minification now uses Oxc

The default JS minifier has switched from esbuild to Oxc Minifier. This is generally faster and produces similar output, but there's one limitation to be aware of: **Oxc does not support lowering native decorators**. If your code uses the `@decorator` syntax and you need it transpiled for older browsers, you'll need to add a Babel or SWC plugin as a workaround.

### Browser targets have been raised

The minimum browser targets in Vite 8 are slightly higher:

| Browser | Vite 7 | Vite 8 |
|---------|--------|--------|
| Chrome  | 107    | 111    |
| Edge    | 107    | 111    |
| Firefox | 104    | 114    |
| Safari  | 16.0   | 16.4   |

For most modern web apps this is a non-issue, but if you're targeting older browsers, double-check that your target audience falls within the new minimums.

### Some advanced options have been removed

A few less commonly used features were dropped:

- The `"system"` and `"amd"` output formats are no longer supported
- The `shouldTransformCachedModule`, `resolveImportMeta`, and `renderDynamicImport` plugin hooks have been removed
- `build()` now throws a `BundleError` (with an `.errors` property) instead of a raw error object

Again, for a typical Nuxt app you're unlikely to hit any of these.

## Should You Do This?

Nuxt 4.2.2 ships with Vite 7 by default. Using `overrides` to force Vite 8 is a reasonable thing to do — it's the standard approach for testing ahead of official framework support — but it's worth knowing that:

1. **It's not officially supported yet.** Nuxt hasn't cut a release with Vite 8. If something breaks after a future `npm update`, the override is the first thing to check.
2. **It works fine for this project.** No issues encountered — the build is clean, dev server starts up, and all pages render correctly.
3. **Remove the override when Nuxt officially upgrades.** Once a Nuxt version ships with Vite 8 natively, you can drop the `overrides` field and let Nuxt manage the version again.

The migration itself took less than five minutes. The harder part was understanding *why* `npm install vite@8` doesn't work for a Nuxt project — and now you know.
