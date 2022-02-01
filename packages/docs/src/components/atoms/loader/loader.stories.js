import React from "react";
import { Loader, loaderTypes } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Atoms / Loader",
  component: Loader,
  argTypes: simpleArgTypes({
    type: {
      description: "The loader type can be differents forms",
      type: loaderTypes?.map((e) => `'${e}'`).join(" | "),
      control: "select",
      options: loaderTypes,
      defaultValue: loaderTypes[0],
    },
    size: {
      description: "Size of loader",
      type: "number",
      defaultValue: 50,
    },
    center: {
      description: "Center loader",
      type: "boolean",
      defaultValue: "true",
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
const Template = (args) => <Loader {...args} />;

export const Ring = Template.bind({});
Ring.args = {
  // Here we define the args
};

export const Spinner = Template.bind({});
Spinner.args = {
  // Here we define the args
  type: "spinner",
};

export const Ripple = Template.bind({});
Ripple.args = {
  // Here we define the args
  type: "ripple",
};
