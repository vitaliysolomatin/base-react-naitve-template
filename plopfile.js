const componentGenerator = {
  description: 'application basic component',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'type component name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'App/Components/{{pascalCase name}}/{{pascalCase name}}.component.tsx',
      templateFile: 'plop-templates/component/component.hbs',
    },
    {
      type: 'add',
      path: 'App/Components/{{pascalCase name}}/{{pascalCase name}}.styles.tsx',
      templateFile: 'plop-templates/component/styles.hbs',
    },
    {
      type: 'add',
      path: 'App/Components/{{pascalCase name}}/index.tsx',
      templateFile: 'plop-templates/component/index.hbs',
    },
  ],
};

const screenGenerator = {
  description: 'application basic screen',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'type screen name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'App/Screens/{{pascalCase name}}/{{pascalCase name}}.screen.tsx',
      templateFile: 'plop-templates/screen/screen.hbs',
    },
    {
      type: 'add',
      path: 'App/Screens/{{pascalCase name}}/{{pascalCase name}}.styles.tsx',
      templateFile: 'plop-templates/screen/styles.hbs',
    },
    {
      type: 'add',
      path: 'App/Screens/{{pascalCase name}}/index.tsx',
      templateFile: 'plop-templates/screen/index.hbs',
    },
  ],
};

const storeGenerator = {
  description: 'application store',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'type store name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'App/Stores/{{pascalCase name}}/{{pascalCase name}}.models.ts',
      templateFile: 'plop-templates/store/models.hbs',
    },
    {
      type: 'add',
      path: 'App/Stores/{{pascalCase name}}/{{pascalCase name}}.index.ts',
      templateFile: 'plop-templates/store/index.hbs',
    },
    {
      type: 'add',
      path: 'App/Stores/{{pascalCase name}}/{{pascalCase name}}.sagas.ts',
      templateFile: 'plop-templates/store/sagas.hbs',
    },
    {
      type: 'add',
      path: 'App/Stores/{{pascalCase name}}/{{pascalCase name}}.service.ts',
      templateFile: 'plop-templates/store/service.hbs',
    },
    {
      type: 'add',
      path: 'App/Stores/{{pascalCase name}}/{{pascalCase name}}.slice.ts',
      templateFile: 'plop-templates/store/slice.hbs',
    },
    {
      type: 'add',
      path: 'App/Stores/{{pascalCase name}}/{{pascalCase name}}.utils.ts',
      templateFile: 'plop-templates/store/utils.hbs',
    },
    {
      type: 'add',
      path: 'App/Stores/{{pascalCase name}}/{{pascalCase name}}.selector.ts',
      templateFile: 'plop-templates/store/selector.hbs',
    },
  ],
};

// eslint-disable-next-line no-undef
module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('c', componentGenerator);

  plop.setGenerator('screen', screenGenerator);
  plop.setGenerator('sc', screenGenerator);

  plop.setGenerator('store', storeGenerator);
  plop.setGenerator('st', storeGenerator);
};
