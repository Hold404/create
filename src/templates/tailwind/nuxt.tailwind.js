const { nuxtBaseFiles } = require('../base/nuxt.base');

const nuxtTailwindFiles = [
  ...nuxtBaseFiles,
  {
    filename: 'nuxt.config.ts',
    fileContent: `// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
`,
  },
  {
    filename: 'package.json',
    fileContent: `{
  "name": "@hold404/create-result",
  "private": true,
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
  "devDependencies": {
    "@types/node": "^18",
    "nuxt": "^3.5.0",
    "autoprefixer": "10.4.14",
    "postcss": "8.4.23",
    "tailwindcss": "3.3.2"
  }
}    
`,
  },
  {
    filename: 'tailwind.config.js',
    fileContent: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
`,
  },
  {
    filename: 'postcss.config.js',
    fileContent: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}    
`,
  },
  {
    filename: 'app.vue',
    fileContent: `<template>
  <div>
    <h2>Hold404</h2>
  </div>
</template>
<script setup lang="ts">
import './globals.css';
</script>
`,
  },
  {
    filename: 'globals.css',
    fileContent: `@tailwind base;
@tailwind components;
@tailwind utilities;
`,
  },
];

module.exports = { nuxtTailwindFiles };
