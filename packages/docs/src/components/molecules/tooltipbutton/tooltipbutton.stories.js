import React from "react";
import { TooltipButton, iconList, themes, tooltipPositions } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

const defaultTheme = themes.LightTheme;

export default {
  title: "Molecules / Tooltip Button",
  component: TooltipButton,
  argTypes: simpleArgTypes({
    text: {
      description: "Label text of the button",
      type: "string",
      control: "text",
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
    title: {
      description: "The tooltip title",
      type: "string",
      control: "text",
    },
    position: {
      description: "The position of the tooltip.",
      type: tooltipPositions?.map((e) => `'${e}'`).join(" | "),
      defaultValue: tooltipPositions?.[0],
      options: tooltipPositions,
    },
    children: {
      description: "The content wrapped by the tooltip",
      type: "ReactNode",
      control: false,
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
const Template = (args) => <TooltipButton {...args} />;

export const SampleTooltipButton = Template.bind({});
SampleTooltipButton.args = {
  text: "Button",
  title: "I'm a tooltip button",
};
