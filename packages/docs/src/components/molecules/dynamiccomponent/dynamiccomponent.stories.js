import React from "react";
import {
  DynamicComponent,
  Badge,
  ToggleSwitch,
  StatusBadge,
  Heading,
  Paragraph,
  Button,
  Separator,
  TooltipButton,
  CopyableButton,
  Image,
  Avatar,
} from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

const availableComponents = {
  Badge: {
    component: Badge,
    valueProps: ["text"],
  },
  ToggleSwitch: {
    component: ToggleSwitch,
    valueProps: ["value"],
  },
  StatusBadge: {
    component: StatusBadge,
    valueProps: ["code"],
  },
  Heading: {
    component: Heading,
    valueProps: ["children"],
  },
  Paragraph: {
    component: Paragraph,
    valueProps: ["children"],
  },
  Button: {
    component: Button,
    valueProps: ["text"],
  },
  Separator: {
    component: Separator,
  },
  TooltipButton: {
    component: TooltipButton,
    valueProps: ["text", "title"],
  },
  CopyableButton: {
    component: CopyableButton,
    valueProps: ["value"],
  },
  Image: {
    component: Image,
    valueProps: ["src"],
  },
  Avatar: {
    component: Avatar,
    valueProps: ["image", "name", "letters"],
  },
};

const typeDefinition = Object.keys(availableComponents)
  .map((e) => `'${e}'`)
  .join(" | ");

export default {
  title: "Molecules / Dynamic Component",
  component: DynamicComponent,
  argTypes: simpleArgTypes({
    type: {
      description: "The name of the component to render.",
      type: typeDefinition,
      options: Object.keys(availableComponents),
      control: "select",
    },
    value: {
      description: "The value for the component",
      type: "any",
      control: "text",
    },
    props: {
      description: "Additional props for the generated component",
      type: "object",
      defaultValue: {},
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
const Template = (args) => <DynamicComponent {...args} />;

export const SampleImage = Template.bind({});
SampleImage.args = {
  type: "Image",
  value: "https://dummyimage.com/100x100/000/fff",
  props: {
    rounded: true,
  },
};

export const SampleButton = Template.bind({});
SampleButton.args = {
  type: "Button",
  props: {
    text: "Press me",
    onClick: () => actions.log("Clicked"),
  },
};

export const SampleTooltipButton1 = Template.bind({});
SampleTooltipButton1.args = {
  type: "TooltipButton",
  value: "From value",
  props: {
    text: "From prop",
    position: "right",
  },
};

export const SampleTooltipButton2 = Template.bind({});
SampleTooltipButton2.args = {
  type: "TooltipButton",
  value: "From value",
  props: {
    title: "From prop",
    position: "right",
  },
};
