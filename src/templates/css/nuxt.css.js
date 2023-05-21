const { nuxtBaseFiles } = require('../base/nuxt.base');

const nuxtCssFiles = [
  ...nuxtBaseFiles,
  {
    filename: 'nuxt.config.ts',
    fileContent: `// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

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
    "nuxt": "^3.5.0"
  }
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
`,
  },
];

module.exports = { nuxtCssFiles };
