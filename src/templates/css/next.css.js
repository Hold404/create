const { nextBaseFiles } = require('../base/next.base');

const nextCssFiles = [
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
    "typescript": "5.0.4"
  }
}
`,
  },
  {
    filename: 'src/pages/_app.tsx',
    fileContent: `import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
`,
  },
];

module.exports = { nextCssFiles };
