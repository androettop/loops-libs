import React from "react";
import { Button, iconList, themes } from "@loops-ar/ui";
import simpleArgTypes from "../../../utils/argTypes";
import Doc from "./doc.mdx";

const defaultTheme = themes.LightTheme;

export default {
  title: "Atoms / Button",
  component: Button,
  argTypes: simpleArgTypes({
    text: {
      description: "Label text of the button",
      type: "string",
      control: { type: "text" },
    },
    icon: {
      description: "You can specify a icon (See Atoms > Icon)",
      type: Object.keys(iconList)
        .map((e) => `'${e}'`)
        .join(" | "),
      options: Object.keys(iconList),
      control: "select",
    },
    disabled: {
      description:
        "Whether the button is disabled. A disabled button is translucent and onClick is not called.",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    onClick: {
      description: "Function to execute on click.",
      type: "function",
    },
    variant: {
      description:
        "Custom text color for link and outline button, or background color for solid button.",
      type: defaultTheme.variants.map((e) => `'${e}'`).join(" | "),
      defaultValue: defaultTheme.variants[0],
      options: defaultTheme.variants,
      control: "select",
    },
    invert: {
      description: "Inverts the color luminosity for lighter/darker buttons.",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    size: {
      description: "Change the size of the button.",
      type: "'small' | 'medium' | 'large'",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: "select",
    },
    mode: {
      description:
        "Mode of the button. You can change the mode to adjust the styling to give it desired emphasis.",
      type: "'solid' | 'link' | 'outline'",
      defaultValue: "solid",
      options: ["solid", "link", "outline"],
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

// 👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

// 👇 Each story then reuses that template
export const Solid = Template.bind({});
Solid.args = { variant: "primary", mode: "solid", text: "Solid" };

export const SolidDisabled = Template.bind({});
SolidDisabled.args = {
  variant: "primary",
  mode: "solid",
  text: "Solid",
  disabled: true,
};

export const SolidSmall = Template.bind({});
SolidSmall.args = {
  variant: "primary",
  mode: "solid",
  text: "Small",
  size: "small",
};

export const SolidLarge = Template.bind({});
SolidLarge.args = {
  variant: "primary",
  mode: "solid",
  text: "Large",
  size: "large",
};

export const SolidMedium = Template.bind({});
SolidMedium.args = {
  variant: "primary",
  mode: "solid",
  text: "Medium",
  size: "medium",
};

export const Outline = Template.bind({});
Outline.args = { variant: "primary", mode: "outline", text: "Outline" };

export const OutlineDisabled = Template.bind({});
OutlineDisabled.args = {
  variant: "primary",
  mode: "outline",
  text: "Outline",
  disabled: true,
};

export const Link = Template.bind({});
Link.args = { variant: "primary", mode: "link", text: "Link" };

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {
  variant: "primary",
  mode: "link",
  text: "Link",
  disabled: true,
};

export const PrimaryVariant = Template.bind({});
PrimaryVariant.args = { variant: "primary", text: "Primary" };

export const SecondaryVariant = Template.bind({});
SecondaryVariant.args = { variant: "secondary", text: "Secondary" };

export const NeutralVariant = Template.bind({});
NeutralVariant.args = { variant: "neutral", text: "Neutral" };

export const ErrorVariant = Template.bind({});
ErrorVariant.args = { variant: "error", text: "Error" };

export const Delete = Template.bind({});
Delete.args = { variant: "error", text: "Delete", icon: "trash" };

export const IconTrash = Template.bind({});
IconTrash.args = { icon: "trash", mode: "link", variant: "error" };

export const IconPlus = Template.bind({});
IconPlus.args = { icon: "plus", mode: "link", variant: "primary" };
