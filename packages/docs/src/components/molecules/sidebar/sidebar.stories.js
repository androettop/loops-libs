import React from "react";
import { Sidebar, SidebarItem } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Molecules / Sidebar",
  component: Sidebar,
  argTypes: simpleArgTypes({
    title: {
      description: "Displays a heading at the top of the sidebar",
      type: "string",
      control: "text",
    },
    isOpen: {
      description: "Determine if the sidebar is open/visible or not.",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    collapseButton: {
      description: "Show or hide the collapse button",
      type: "boolean",
      defaultValue: true,
      control: "boolean",
    },
    backdrop: {
      description: "Show or hide the backdrop when sidebar is open",
      type: "boolean",
      defaultValue: true,
      control: "boolean",
    },
    children: {
      description: "The sidebar content",
      type: "ReactNode",
      control: false,
    },
    left: {
      description:
        "The left position of the sidebar (can be the width of the main menú)",
      type: "string",
      control: "text",
    },
    handleClose: {
      type: "function",
      control: false,
      description: "Handle close callback",
    },
    handleOpen: {
      type: "function",
      control: false,
      description: "Handle close callback",
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
const Template = (args) => <Sidebar {...args} />;

export const SidebarSample = Template.bind({});
SidebarSample.args = {
  title: "Acciones",
  children: (
    <>
      <SidebarItem text="Home" />
      <SidebarItem active icon="home" text="Item with icon" />
      <SidebarItem text="Item with children">
        <SidebarItem text="Child 1" />
        <SidebarItem text="Child 2" />
      </SidebarItem>
      <SidebarItem text="Item with a long long long text" />
    </>
  ),
};
