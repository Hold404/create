const vueBaseFiles = [
  {
    filename: 'vite.config.ts',
    fileContent: `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
`,
  },
  {
    filename: 'tsconfig.node.json',
    fileContent: `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}
`,
  },
  {
    filename: 'tsconfig.json',
    fileContent: `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
`,
  },
  {
    filename: 'index.html',
    fileContent: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@hold404/create-result</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
`,
  },
  {
    filename: 'src/App.vue',
    fileContent: `<template>
  <div>
    <h2>Hold404</h2>
  </div>
</template>
`,
  },
  {
    filename: 'src/vite-env.d.ts',
    fileContent: `/// <reference types="vite/client" />`,
  },
];

module.exports = { vueBaseFiles };
