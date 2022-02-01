import React from "react";
import { Heading } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Atoms / Heading",
  component: Heading,
  argTypes: simpleArgTypes({
    children: {
      description: "The heading text",
      type: "ReactNode",
      defaultValue: undefined,
      control: "text",
    },
    size: {
      description: "Size of the heading (Corresponds to tags h1, h2, etc)",
      type: "string | number",
      defaultValue: 1,
      control: "number",
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
const Template = (args) => <Heading {...args} />;

export const SampleHeading1 = Template.bind({});
SampleHeading1.args = {
  children: "Heading 1",
  size: 1,
};

export const SampleHeading2 = Template.bind({});
SampleHeading2.args = {
  children: "Heading 2",
  size: 2,
};

export const SampleHeading3 = Template.bind({});
SampleHeading3.args = {
  children: "Heading 3",
  size: 3,
};

export const SampleHeading4 = Template.bind({});
SampleHeading4.args = {
  children: "Heading 4",
  size: 4,
};

export const SampleHeading5 = Template.bind({});
SampleHeading5.args = {
  children: "Heading 5",
  size: 5,
};

export const SampleHeading6 = Template.bind({});
SampleHeading6.args = {
  children: "Heading 6",
  size: 6,
};

export const SampleMaxLines = Template.bind({});
SampleMaxLines.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  size: 6,
  maxLines: 1,
};
