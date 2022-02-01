const lodash = require("lodash");

module.exports.componentGenerator = {
  prompts: [
    {
      type: "input",
      name: "componentName",
      message: "Component name (alphanumeric, spaces will be removed): ",
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
      message: "Component type: ",
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

    generator.fs.copyTpl(
      generator.templatePath("component/component-js"),
      generator.destinationPath(
        `packages/ui/src/components/${componentType}s/${componentLowercase}/${componentLowercase}.js`
      ),
      {
        componentPascal,
        componentLowercase,
      }
    );

    generator.fs.copyTpl(
      generator.templatePath("component/component.styles-js"),
      generator.destinationPath(
        `packages/ui/src/components/${componentType}s/${componentLowercase}/${componentLowercase}.styles.js`
      ),
      {
        componentPascal,
      }
    );

    const indexPath = generator.destinationPath("packages/ui/src/index.js");
    generator.fs.copy(indexPath, indexPath, {
      process(content) {
        let indexContent = content.toString();

        const importLine = `\nimport ${componentPascal} from "./components/${componentType}s/${componentLowercase}/${componentLowercase}";`;

        // ignore add index if already exists
        if (indexContent.indexOf(importLine) < 0) {
          // add the import
          indexContent = indexContent.replace(
            `// ${componentType}s`,
            `// ${componentType}s\n${importLine}`
          );

          // add the export
          indexContent = indexContent.replace(
            "export {",
            `export {\n  ${componentPascal}, `
          );
        }

        return indexContent;
      },
    });
  },
};
