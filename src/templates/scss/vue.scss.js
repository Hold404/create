const { vueBaseFiles } = require('../base/vue.base');

const vueScssFiles = [
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
    "sass": "1.62.1"
  }
}
`,
  },
  {
    filename: 'src/main.ts',
    fileContent: `import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
`,
  },
];

module.exports = { vueScssFiles };
