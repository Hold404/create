#! /usr/bin/env node
const inquirer = require('inquirer');
const { writeFileSync, mkdirSync } = require('fs');

const { reactCssFiles } = require('./templates/css/react.css');
const { reactScssFiles } = require('./templates/scss/react.scss');
const { reactTailwindFiles } = require('./templates/tailwind/react.tailwind');

const { vueCssFiles } = require('./templates/css/vue.css');
const { vueScssFiles } = require('./templates/scss/vue.scss');
const { vueTailwindFiles } = require('./templates/tailwind/vue.tailwind');

const { nuxtCssFiles } = require('./templates/css/nuxt.css');
const { nuxtScssFiles } = require('./templates/scss/nuxt.scss');
const { nuxtTailwindFiles } = require('./templates/tailwind/nuxt.tailwind');

const { nextCssFiles } = require('./templates/css/next.css');
const { nextScssFiles } = require('./templates/scss/next.scss');
const { nextTailwindFiles } = require('./templates/tailwind/next.tailwind');

let framework;
let cssFramework;
let usePrettier;
let projectName;
let directoryPrefix;

async function main() {
  console.log(
    `📌 Welcome to Hold404's extended project template creation tool.\n`
  );

  await inquirer
    .prompt({
      type: 'input',
      message: '\x1b[37m Project name: \x1b[0m',
      name: 'projectName',
    })
    .then((answers) => {
      projectName = answers.projectName;
      directoryPrefix = projectName === '' ? '' : '/' + projectName;
    });

  await inquirer
    .prompt({
      type: 'list',
      message: '\x1b[37m Which framework would you like to use? \x1b[0m',
      name: 'framework',
      choices: ['React.js', 'Vue.js', 'Nuxt.js', 'Next.js'],
    })
    .then((answers) => {
      framework = answers.framework;
    });

  await inquirer
    .prompt({
      type: 'list',
      message: '\x1b[37m Which css framework would you like to use? \x1b[0m',
      name: 'cssFramework',
      choices: ['None', 'SCSS', 'TailwindCSS'],
    })
    .then((answers) => {
      cssFramework = answers.cssFramework;
    });

  await inquirer
    .prompt({
      type: 'confirm',
      message: '\x1b[37m Would you like to use prettier? \x1b[0m',
      name: 'usePrettier',
    })
    .then((answers) => {
      usePrettier = answers.usePrettier;
    });

  const cwd = process.cwd();

  try {
    let files;
    let isSrc = true;

    switch (framework) {
      case 'React.js': {
        if (cssFramework === 'None') files = reactCssFiles;
        if (cssFramework === 'SCSS') files = reactScssFiles;
        if (cssFramework === 'TailwindCSS') files = reactTailwindFiles;
        break;
      }

      case 'Vue.js': {
        if (cssFramework === 'None') files = vueCssFiles;
        if (cssFramework === 'SCSS') files = vueScssFiles;
        if (cssFramework === 'TailwindCSS') files = vueTailwindFiles;
        break;
      }

      case 'Nuxt.js': {
        if (cssFramework === 'None') files = nuxtCssFiles;
        if (cssFramework === 'SCSS') files = nuxtScssFiles;
        if (cssFramework === 'TailwindCSS') files = nuxtTailwindFiles;
        isSrc = false;
        break;
      }

      case 'Next.js': {
        if (cssFramework === 'None') files = nextCssFiles;
        if (cssFramework === 'SCSS') files = nextScssFiles;
        if (cssFramework === 'TailwindCSS') files = nextTailwindFiles;
        break;
      }
    }

    if (directoryPrefix !== '') mkdirSync('.' + directoryPrefix);
    if (isSrc) mkdirSync('.' + directoryPrefix + '/src');
    if (framework == 'Next.js') mkdirSync('.' + directoryPrefix + '/src/pages');

    files.forEach((file) => {
      writeFileSync(
        `${cwd}${directoryPrefix}/${file.filename}`,
        file.fileContent
      );
    });

    if (usePrettier)
      writeFileSync(
        `${cwd}${directoryPrefix}/.prettierrc`,
        `{
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}`
      );

    console.log(
      `\x1b[1m\n🎉 Project is created. Next steps: \x1b[0m${
        projectName !== ''
          ? '\n  \x1b[32m>\x1b[0m \x1b[1mcd ' + projectName + '\x1b[0m'
          : ''
      }\n  \x1b[32m>\x1b[0m Install packages with \x1b[1mnpm install\x1b[0m\n  \x1b[32m>\x1b[0m Run server with \x1b[1mnpm run dev\x1b[0m\n`
    );
  } catch (e) {
    console.log(`\n🧨 Error ocurred.`);
  }
}

main();
