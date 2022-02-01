import React from "react";
import { Paragraph } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Atoms / Paragraph",
  component: Paragraph,
  argTypes: simpleArgTypes({
    children: {
      description: "The paragraph text",
      type: "ReactNode",
      control: "text",
    },
    maxLines: {
      description: "Maximum number of lines to display (optional)",
      type: "number",
    },
    gradient: {
      description:
        "If a value was set for maxLines this property allows showing or hiding the gradient effect",
      type: "boolean",
      defaultValue: true,
      control: "boolean",
    },
    size: {
      description: "Font size of the parragraph",
      type: "string | number",
      defaultValue: 1,
      control: "number",
    },
    parseHtml: {
      description:
        "If this value is true, the paragraph content will be parsed as HTML",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
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
const Template = (args) => <Paragraph {...args} />;

export const SampleParagraph1 = Template.bind({});
SampleParagraph1.args = {
  children: "Paragraph 1",
  size: 1,
};

export const SampleParagraph2 = Template.bind({});
SampleParagraph2.args = {
  children: "Paragraph 2",
  size: 2,
};

export const SampleMaxLines = Template.bind({});
SampleMaxLines.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  maxLines: 2,
};

export const SampleGradient = Template.bind({});
SampleGradient.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  maxLines: 2,
  gradient: false,
};
