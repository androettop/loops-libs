import React from "react";
import { Separator, themes } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

const defaultTheme = themes.LightTheme;

export default {
  title: "Atoms / Separator",
  component: Separator,
  argTypes: simpleArgTypes({
    compact: {
      description: "Removes the separator margin",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    variant: {
      description: "The separator color.",
      type: defaultTheme.variants.map((e) => `'${e}'`).join(" | "),
      defaultValue: defaultTheme.variants[0],
      options: defaultTheme.variants,
      control: "select",
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
const Template = (args) => <Separator {...args} />;

export const DefaultSeparator = Template.bind({});
DefaultSeparator.args = {};

export const CompactSeparator = Template.bind({});
CompactSeparator.args = {
  compact: true,
};

export const PrimarySeparator = Template.bind({});
PrimarySeparator.args = {
  variant: "primary",
};

export const ErrorSeparator = Template.bind({});
ErrorSeparator.args = {
  variant: "error",
};
