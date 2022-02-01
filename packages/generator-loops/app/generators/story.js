const lodash = require("lodash");

module.exports.storyGenerator = {
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "Component name (alphanumeric, spaces will be removed):",
      required: true,
      validate: (value) => {
        if (!value.trim()) {
          throw new Error("The component name is required");
        } else {
          return true;
        }
      },
    },
    {
      type: "list",
      name: "componentType",
      message: "Component type:",
      required: true,
      choices: [
        {
          name: "Atom",
          value: "atom",
        },
        {
          name: "Molecule",
          value: "molecule",
        },
        {
          name: "Organism",
          value: "organism",
        },
        {
          name: "Template",
          value: "template",
        },
      ],
    },
  ],

  writing: (generator) => {
    const { componentType, componentName: componentNameNoTrim } =
      generator.props;
    const componentName = componentNameNoTrim.trim();

    // Camelize and remove spaces
    const componentCamel = lodash.camelCase(componentName);
    const componentPascal = lodash.startCase(componentCamel).replace(/ /g, "");
    const componentLowercase = componentCamel.toLocaleLowerCase();
    const componentKebab = lodash.kebabCase(componentName);

    generator.fs.copyTpl(
      generator.templatePath("story/component.stories-js"),
      generator.destinationPath(
        `packages/docs/src/components/${componentType}s/${componentLowercase}/${componentLowercase}.stories.js`
      ),
      {
        componentName,
        componentType: `${lodash.startCase(componentType)}s`,
        componentPascal,
      }
    );
    generator.fs.copyTpl(
      generator.templatePath("story/doc.mdx"),
      generator.destinationPath(
        `packages/docs/src/components/${componentType}s/${componentLowercase}/doc.mdx`
      ),
      {
        componentName,
        componentType: `${componentType}s`,
        componentKebab,
        componentLowercase,
      }
    );
  },
};
