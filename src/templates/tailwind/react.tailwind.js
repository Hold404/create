const { reactBaseFiles } = require('../base/react.base');

const reactTailwindFiles = [
  ...reactBaseFiles,
  {
    filename: 'package.json',
    fileContent: `{
  "name": "@hold404/create-result",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.37",
    "@types/react-dom": "^18.0.11",
    "@typescript-eslint/eslint-plugin": "^5.59.0",
    "@typescript-eslint/parser": "^5.59.0",
    "@vitejs/plugin-react": "^4.0.0",
    "eslint": "^8.38.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.3.4",
    "typescript": "^5.0.2",
    "vite": "^4.3.2",
    "autoprefixer": "10.4.14",
    "postcss": "8.4.23",
    "tailwindcss": "3.3.2"
  }
}
`,
  },
  {
    filename: 'src/main.tsx',
    fileContent: `import React from 'react';
import ReactDOM from 'react-dom/client';
import './globals.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <h2>Hold404</h2>
    </div>
  </React.StrictMode>
);
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
    "./src/**/*.{js,ts,jsx,tsx}",
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

module.exports = { reactTailwindFiles };
