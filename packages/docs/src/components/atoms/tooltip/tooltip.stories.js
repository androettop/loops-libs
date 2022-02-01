import React from "react";
import { Tooltip, tooltipPositions } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Atoms / Tooltip",
  component: Tooltip,
  argTypes: simpleArgTypes({
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
const Template = (args) => <Tooltip {...args} />;

export const SampleTooltip = Template.bind({});
SampleTooltip.args = {
  children: <p>Sample content</p>,
  title: "I am a tooltip :)",
};

export const SampleTooltipPositionTop = Template.bind({});
SampleTooltipPositionTop.args = {
  children: <p>Tooltip on top</p>,
  title: "I am a tooltip :)",
  position: "top",
};

export const SampleTooltipPositionBottom = Template.bind({});
SampleTooltipPositionBottom.args = {
  children: <p>Tooltip on bottom</p>,
  title: "I am a tooltip :)",
  position: "bottom",
};

export const SampleTooltipPositionLeft = Template.bind({});
SampleTooltipPositionLeft.args = {
  children: <p>Tooltip in the left</p>,
  title: "I am a tooltip :)",
  position: "left",
};

export const SampleTooltipPositionRight = Template.bind({});
SampleTooltipPositionRight.args = {
  children: <p>Tooltip in the right</p>,
  title: "I am a tooltip :)",
  position: "right",
};
