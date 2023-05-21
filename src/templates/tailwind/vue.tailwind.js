const { vueBaseFiles } = require('../base/vue.base');

const vueTailwindFiles = [
  ...vueBaseFiles,
  {
    filename: 'package.json',
    fileContent: `{
  "name": "@hold404/create-result",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.2.47"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.1.0",
    "typescript": "^5.0.2",
    "vite": "^4.3.2",
    "vue-tsc": "^1.4.2",
    "autoprefixer": "10.4.14",
    "postcss": "8.4.23",
    "tailwindcss": "3.3.2"
  }
}
`,
  },
  {
    filename: 'src/main.ts',
    fileContent: `import { createApp } from 'vue';
import App from './App.vue';
import './globals.css';

createApp(App).mount('#app');
`,
  },
  {
    filename: 'src/globals.css',
    fileContent: `@tailwind base;
@tailwind components;
@tailwind utilities;
`,
  },
  {
    filename: 'tailwind.config.js',
    fileContent: `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
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
    fileContent: `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}    
`,
  },
];

module.exports = { vueTailwindFiles };
