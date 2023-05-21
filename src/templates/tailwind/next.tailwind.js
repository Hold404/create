const { nextBaseFiles } = require('../base/next.base');

const nextTailwindFiles = [
  ...nextBaseFiles,
  {
    filename: 'package.json',
    fileContent: `{
  "name": "@hold404/create-result",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@types/node": "20.2.1",
    "@types/react": "18.2.6",
    "@types/react-dom": "18.2.4",
    "next": "13.4.3",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "5.0.4",
    "autoprefixer": "10.4.14",
    "postcss": "8.4.23",
    "tailwindcss": "3.3.2"
  }
}
`,
  },
  {
    filename: 'src/pages/_app.tsx',
    fileContent: `import type { AppProps } from 'next/app';
import '@/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
`,
  },
  {
    filename: 'tailwind.config.js',
    fileContent: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
    filename: 'src/globals.css',
    fileContent: `@tailwind base;
@tailwind components;
@tailwind utilities;
`,
  },
];

module.exports = { nextTailwindFiles };
