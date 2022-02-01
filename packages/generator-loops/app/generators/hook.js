module.exports.hookGenerator = {
  prompts: [
    {
      type: "input",
      name: "hookName",
      message: 'Hook name (should start with "use"): ',
      required: true,
      validate: (value) => {
        if (!value.startsWith("use")) {
          throw new Error("The hook name should starts with use");
        } else {
          return true;
        }
      },
    },
  ],

  writing: (generator) => {
    const { hookName: hookNameNoTrim } = generator.props;
    const hookName = hookNameNoTrim.trim();

    generator.fs.copyTpl(
      generator.templatePath("hook/hook-js"),
      generator.destinationPath(
        `packages/hooks/src/${hookName}/${hookName}.js`
      ),
      {
        hookName,
      }
    );

    const indexPath = generator.destinationPath("packages/hooks/src/index.js");
    generator.fs.copy(indexPath, indexPath, {
      process(content) {
        let indexContent = content.toString();

        const importLine = `import ${hookName} from './${hookName}/${hookName}';`;

        // ignore add index if already exists
        if (indexContent.indexOf(importLine) < 0) {
          // add the import
          indexContent = `${importLine}\n${indexContent}`;

          // add the export
          indexContent = indexContent.replace(
            "export {",
            `export {\n  ${hookName}, `
          );
        }

        return indexContent;
      },
    });
  },
};
