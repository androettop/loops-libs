import React from "react";
import { FormAction } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

export default {
  title: "Organisms / FormAction",
  component: FormAction,
  argTypes: simpleArgTypes({
    actions: {
      description: "to define",
      type: "array",
      required: true,
    },
    alwaysVisible: {
      description: "to define",
      type: "array",
      defaultValue: ["save"],
    },
  }),
  parameters: {
    viewMode: "docs",
    docs: {
      page: Doc,
    },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <FormAction {...args} />;

export const SampleFormAction = Template.bind({});
SampleFormAction.args = {
  isOpen: true,
  actions: [
    {
      type: "save",
      onClick: () => actions.log("Guardado"),
      visible: true,
    },
    {
      type: "clone",
      onClick: () => actions.log("Guardado"),
      visible: true,
    },
    {
      type: "spellcheck",
      onClick: () => actions.log("Corregido"),
      visible: false,
    },
    {
      type: "delete",
      onClick: () => actions.log("Guardado"),
      visible: true,
    },
    {
      type: "export",
      onClick: () => actions.log("Guardado"),
      visible: true,
    },
    {
      type: "preview",
      onClick: () => actions.log("Guardado"),
      visible: true,
    },
  ],
};
