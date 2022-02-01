import React from "react";
import { Header } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

export default {
  title: "Molecules / Header",
  component: Header,
  argTypes: simpleArgTypes({
    title: {
      description: "The secction Title",
      type: "string",
      control: "text",
    },
    actions: {
      description: "Actions buttons array",
      type: "Array<{type: string, ...Button props}>",
      defaultValue: [],
      control: "object",
    },
    sections: {
      description:
        "Sections array with label and url. The last item always is active and not need url.",
      type: "Array<{label: string, url: string}>",
      defaultValue: [],
      control: "object",
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
const Template = (args) => <Header {...args} />;

export const SampleHeader = Template.bind({});
SampleHeader.args = {
  title: "Listado de notas",
  actions: [
    {
      type: "add",
      onClick: () => actions.log("onClick triggered"),
    },
  ],
  sections: [{ label: "Notas", url: "#" }, { label: "Listado de notas" }],
};
