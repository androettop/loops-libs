import React from "react";
import { Segment, segmentVariants } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

export default {
  title: "Atoms / Segment",
  component: Segment,
  argTypes: simpleArgTypes({
    children: {
      description: "The segment content",
      type: "ReactNode",
      control: "text",
    },
    variant: {
      description: "Add a light background color",
      type: segmentVariants?.map((e) => `'${e}'`).join(" | "),
      defaultValue: segmentVariants?.[0],
      options: segmentVariants,
      control: "select",
    },
    hover: {
      description: "Show an effect when hovering over.",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    compact: {
      description: "Reduce the segment spacing.",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    onClick: {
      description: "Function to execute on click.",
      type: "function",
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
const Template = (args) => <Segment {...args} />;

export const SegmentLight = Template.bind({});
SegmentLight.args = {
  children: "My content",
  variant: "light",
};

export const SegmentDark = Template.bind({});
SegmentDark.args = {
  children: "My content",
  variant: "dark",
};

export const SegmentPrimary = Template.bind({});
SegmentPrimary.args = {
  children: "My content",
  variant: "primary",
};

export const SegmentWarning = Template.bind({});
SegmentWarning.args = {
  children: "My content",
  variant: "warning",
};

export const SegmentCompact = Template.bind({});
SegmentCompact.args = {
  children: "Compact segment",
  compact: true,
};

export const SegmentClickable = Template.bind({});
SegmentClickable.args = {
  children: "Clickable segment",
  onClick: () => actions.log("Clicked!"),
};

export const SegmentHover = Template.bind({});
SegmentHover.args = {
  children: "Segment with hover effect",
  onClick: () => actions.log("Clicked!"),
  hover: true,
};
