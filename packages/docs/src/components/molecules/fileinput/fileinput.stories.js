import React from "react";
import { FileInput } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Molecules / File Input",
  component: FileInput,
  argTypes: simpleArgTypes({
    label: {
      description: "",
      type: "object",
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
const Template = (args) => <FileInput {...args} />;

export const SampleFileInput = Template.bind({});
SampleFileInput.args = {
  label: "ejemplo File Input",
};
