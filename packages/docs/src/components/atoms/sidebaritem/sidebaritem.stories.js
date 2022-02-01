import React from "react";
import { SidebarItem } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Atoms / Sidebar Item",
  component: SidebarItem,
  argTypes: simpleArgTypes({
    text: {
      description: "Label text of the item",
      type: "string",
      control: "text",
    },
    icon: {
      description: "You can specify a material design icon (react-icons)",
      type: "string",

      control: "text",
    },
    disabled: {
      description: "A disabled item is translucent and onClick is not called.",
      type: "boolean",
      control: "boolean",
    },
    onClick: {
      description: "Function to execute on click.",
      type: "function",
    },
    active: {
      description: "Highlight the item to show it as active.",
      type: "boolean",
      control: "boolean",
    },
    type: {
      description: "HTML button type attribute",
      type: "'button' | 'submit'",
      defaultValue: "button",
      options: ["button", "submit"],
      control: "select",
    },
    children: {
      description: "Children items",
      type: "Array<SidebarItem>",
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
const Template = (args) => <SidebarItem {...args} />;

export const SampleSidebarItem = Template.bind({});
SampleSidebarItem.args = {
  text: "Sample input",
};

export const SampleSidebarItemActive = Template.bind({});
SampleSidebarItemActive.args = {
  text: "Sample input",
  active: true,
};

export const SampleSidebarItemIconActive = Template.bind({});
SampleSidebarItemIconActive.args = {
  text: "Home page",
  icon: "home",
  active: true,
};

export const SampleSidebarItemIcon = Template.bind({});
SampleSidebarItemIcon.args = {
  text: "Home page",
  icon: "home",
};

export const SampleSidebarItemDisabled = Template.bind({});
SampleSidebarItemDisabled.args = {
  text: "Home page",
  icon: "home",
  disabled: true,
};

export const SampleSidebarItemChildren = Template.bind({});
SampleSidebarItemChildren.args = {
  text: "Administration",
  icon: "settings",
  children: [
    <SidebarItem icon="security" text="Child 1" key="child1" />,
    <SidebarItem icon="photo" active text="Child 2" key="child2" />,
  ],
};

export const SampleSidebarItemWithline = Template.bind({});
SampleSidebarItemWithline.args = {
  text: "Home page",
  icon: "home",
  active: true,
  withLine: true,
};
