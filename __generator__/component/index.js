const doesComponentExist = require('../utils');

const actions = (data) => {
  let temp;

  if (data.type === 'stateless function') {
    temp = './component/stateless.ts.hbs';
  } else {
    temp = './component/stateful.ts.hbs';
  }

  const actionsList = [
    {
      type: 'add',
      path: '../src/components/{{properCase name}}/index.tsx',
      templateFile: temp,
      abortOnFail: true,
    },
    {
      type: 'add',
      path: '../src/components/{{properCase name}}/tests/index.test.tsx',
      templateFile: './component/test.ts.hbs',
      abortOnFail: true,
    },
  ];

  return actionsList;
};
const componentGenerator = {
  description: 'Generate a dynamic component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'stateless function',
      choices: () => ['stateless function', 'stateful function'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your component?',
      default: 'Test',
      validate: (value) => {
        if (/.+/.test(value)) {
          return doesComponentExist(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'Component name is required';
      },
    },
  ],
  actions,
};

module.exports = componentGenerator;
