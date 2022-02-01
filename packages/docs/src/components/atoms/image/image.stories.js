import React from "react";
import { Image, imageModes } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Atoms / Image",
  component: Image,
  argTypes: simpleArgTypes({
    fluid: {
      description: "Sets image as fluid image.",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    rounded: {
      description: "Sets image shape as rounded rectangle.",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    circle: {
      description: "Sets image shape as circle.",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    mode: {
      description: "The image fill mode.",
      type: imageModes?.map((e) => `'${e}'`).join(" | "),
      defaultValue: imageModes?.[0],
      options: imageModes,
      control: "select",
    },
    src: {
      description: "The image url",
      type: "string",
      control: "text",
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
const Template = (args) => <Image {...args} />;

export const SampleImage = Template.bind({});
SampleImage.args = {
  src: "https://dummyimage.com/100x100/000/fff",
};

export const RoundedShape = Template.bind({});
RoundedShape.args = {
  src: "https://dummyimage.com/100x100/000/fff",
  rounded: true,
};

export const CircleShape = Template.bind({});
CircleShape.args = {
  src: "https://dummyimage.com/100x100/000/fff",
  circle: true,
};

export const CoverMode = Template.bind({});
CoverMode.args = {
  src: "https://dummyimage.com/200x300/000/fff",
  width: "100px",
  height: "100px",
  mode: "cover",
};

export const ContainMode = Template.bind({});
ContainMode.args = {
  src: "https://dummyimage.com/200x300/000/fff",
  width: "100px",
  height: "100px",
  mode: "contain",
};

export const FillMode = Template.bind({});
FillMode.args = {
  src: "https://dummyimage.com/200x300/000/fff",
  width: "100px",
  height: "100px",
  mode: "fill",
};

export const ScaleDownMode = Template.bind({});
ScaleDownMode.args = {
  src: "https://dummyimage.com/50x50/000/fff",
  width: "100px",
  height: "100px",
  mode: "scale-down",
};
