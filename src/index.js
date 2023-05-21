const inquirer = require('inquirer');
const { writeFileSync, mkdirSync } = require('fs');

const { reactFiles } = require('./templates/react.template');
const { vueFiles } = require('./templates/vue.template');
const { nuxtFiles } = require('./templates/nuxt.template');
const { nextFiles } = require('./templates/next.template');

let framework;
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
        files = reactFiles;
        break;
      }

      case 'Vue.js': {
        files = vueFiles;
        break;
      }

      case 'Nuxt.js': {
        files = nuxtFiles;
        isSrc = false;
        break;
      }

      case 'Next.js': {
        files = nextFiles;
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
