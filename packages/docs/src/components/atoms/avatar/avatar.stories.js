import React from "react";
import { Avatar, themes } from "@loops-ar/ui";
import simpleArgTypes from "../../../utils/argTypes";
import Doc from "./doc.mdx";

const defaultTheme = themes.LightTheme;

export default {
  title: "Atoms / Avatar",
  component: Avatar,
  argTypes: simpleArgTypes({
    letters: {
      description: "Text to display directly inside the avatar.",
      type: "string",
      control: "text",
    },
    name: {
      description: "Username, only the first 2 initials will be displayed.",
      type: "string",
      control: "text",
    },
    icon: {
      description: "You can specify a material design icon (react-icons)",
      type: "string",
      control: "text",
    },
    image: {
      description: "Image url for profile picture",
      type: "string",
      control: "text",
    },
    variant: {
      description: "The avatar background color.",
      type: defaultTheme.variants.map((e) => `'${e}'`).join(" | "),
      defaultValue: defaultTheme.variants[0],
      options: defaultTheme.variants,
      control: "select",
    },
    size: {
      description: "Change the size of the avatar.",
      type: "'small' | 'medium' | 'large'",
      defaultValue: "medium",
      options: ["small", "medium", "large"],
      control: "select",
    },
    shape: {
      description: "Change the shape of the avatar.",
      type: "'circle' | 'square' | 'rounded'",
      defaultValue: "circle",
      options: ["circle", "square", "rounded"],
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
const Template = (args) => <Avatar {...args} />;

// 👇 Each story then reuses that template
export const Image1 = Template.bind({});
Image1.args = { image: "https://mui.com/static/images/avatar/1.jpg" };

export const Image2 = Template.bind({});
Image2.args = { image: "https://mui.com/static/images/avatar/2.jpg" };

export const Image3 = Template.bind({});
Image3.args = { image: "https://mui.com/static/images/avatar/3.jpg" };

export const Letter1 = Template.bind({});
Letter1.args = { letters: "AB" };

export const Letter2 = Template.bind({});
Letter2.args = { letters: "C", variant: "primary" };

export const Letter3 = Template.bind({});
Letter3.args = { letters: "D", variant: "secondary" };

export const Letter4 = Template.bind({});
Letter4.args = { name: "John Doe", variant: "primary" };

export const Letter5 = Template.bind({});
Letter5.args = { name: "Pepe Argento", variant: "secondary" };

export const Small = Template.bind({});
Small.args = {
  size: "small",
  image: "https://mui.com/static/images/avatar/1.jpg",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
  image: "https://mui.com/static/images/avatar/1.jpg",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  image: "https://mui.com/static/images/avatar/1.jpg",
};

export const Icon1 = Template.bind({});
Icon1.args = { icon: "folder", variant: "neutral" };

export const Icon2 = Template.bind({});
Icon2.args = { icon: "search", variant: "primary" };

export const Icon3 = Template.bind({});
Icon3.args = { icon: "trash", variant: "error" };

export const Square = Template.bind({});
Square.args = { shape: "square", variant: "primary", name: "John Doe" };

export const Rounded = Template.bind({});
Rounded.args = { shape: "rounded", variant: "success", letters: "FG" };

export const PropsSample = Template.bind({});
PropsSample.args = {};
