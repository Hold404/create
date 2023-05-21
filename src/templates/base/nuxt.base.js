const nuxtBaseFiles = [
  {
    filename: 'tsconfig.json',
    fileContent: `{
  // https://nuxt.com/docs/guide/concepts/typescript
  "extends": "./.nuxt/tsconfig.json"
}    
`,
  },
];

module.exports = { nuxtBaseFiles };
