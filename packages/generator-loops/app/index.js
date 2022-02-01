const Generator = require("yeoman-generator");
const { componentGenerator } = require("./generators/component");
const { hookGenerator } = require("./generators/hook");
const { storyGenerator } = require("./generators/story");

const generators = [
  {
    name: "component",
    title: "Component (in @loops-ar/ui)",
    generator: componentGenerator,
  },
  {
    name: "story",
    title: "Story (in @loops-ar/docs)",
    generator: storyGenerator,
  },
  {
    name: "hook",
    title: "Hook (in @loops-ar/hooks)",
    generator: hookGenerator,
  },
];

const getGenerator = (name) =>
  generators.find((generator) => generator.name === name).generator;

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: "list",
        name: "generator",
        // Que queres generar?
        message: "What do you want to generate?",
        required: true,
        choices: generators.map((generator) => ({
          name: generator.title,
          value: generator.name,
        })),
      },
    ];

    return this.prompt(prompts).then((props) => {
      // run selected generator props.
      const generator = getGenerator(props.generator);

      return this.prompt(generator.prompts).then((generatorProps) => {
        this.props = { ...props, ...generatorProps };
      });
    });
  }

  writing() {
    const generator = getGenerator(this.props.generator);

    generator.writing(this);
  }
};
