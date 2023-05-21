const nextBaseFiles = [
  {
    filename: 'tsconfig.json',
    fileContent: `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
`,
  },
  {
    filename: 'next.config.js',
    fileContent: `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
`,
  },
  {
    filename: 'next-env.d.ts',
    fileContent: `/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.
`,
  },
  {
    filename: 'src/pages/_document.tsx',
    fileContent: `import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
`,
  },
  {
    filename: 'src/pages/index.tsx',
    fileContent: `import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h2>Hold404</h2>
    </div>
  );
};

export default Home;
`,
  },
];

module.exports = { nextBaseFiles };
