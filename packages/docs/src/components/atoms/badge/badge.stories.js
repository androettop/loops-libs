import React from "react";
import { Badge, badgeTypes, themes } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

const defaultTheme = themes.LightTheme;

export default {
  title: "Atoms / Badge",
  component: Badge,
  argTypes: simpleArgTypes({
    text: {
      description: "Label text of the badge",
      type: "string",
      control: "text",
    },
    variant: {
      description: "Custom color for badge",
      type: defaultTheme.variants.map((e) => `'${e}'`).join(" | "),
      control: "select",
      options: defaultTheme.variants,
      defaultValue: defaultTheme.variants[0],
      required: true,
    },
    type: {
      description: "The badge type can be Default, Bordered or Pill",
      type: badgeTypes?.map((e) => `'${e}'`).join(" | "),
      control: "select",
      options: badgeTypes,
      defaultValue: badgeTypes[0],
      required: true,
    },
    close: {
      description: "Add a close icon.",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    onClick: {
      description: "onClick action, use only with close prop",
      type: "function",
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
const Template = (args) => <Badge {...args} />;

export const PrimaryBadge = Template.bind({});
PrimaryBadge.args = {
  variant: "primary",
  text: "Primary",
};

export const SecondaryBadge = Template.bind({});
SecondaryBadge.args = {
  variant: "secondary",
  text: "Secondary",
};

export const ErrorBadge = Template.bind({});
ErrorBadge.args = {
  variant: "error",
  text: "Error",
};

export const InfoBadge = Template.bind({});
InfoBadge.args = {
  variant: "info",
  text: "Info",
};

export const NeutralBadge = Template.bind({});
NeutralBadge.args = {
  variant: "neutral",
  text: "Neutral",
};

export const PillBadge = Template.bind({});
PillBadge.args = {
  text: "Pill",
  type: "pill",
};

export const BorderedBadge = Template.bind({});
BorderedBadge.args = {
  text: "Bordered",
  type: "bordered",
};

export const CloseBadge = Template.bind({});
CloseBadge.args = {
  text: "Close",
  close: true,
  onClick: (e) => actions.log("Badge clicked:", e),
};
