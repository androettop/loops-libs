import React from "react";
import { StatusBadge, statusCodes } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Molecules / Status Badge",
  component: StatusBadge,
  argTypes: simpleArgTypes({
    code: {
      description: "The status code.",
      type: Object.keys(statusCodes)
        .map((e) => `'${e}'`)
        .join(" | "),
      defaultValue: "default",
      options: Object.keys(statusCodes),
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

// We create a “template” of how args map to rendering
const Template = (args) => <StatusBadge {...args} />;

export const Status102 = Template.bind({});
Status102.args = {
  code: 102,
};

export const Status200 = Template.bind({});
Status200.args = {
  code: 200,
};

export const Status201 = Template.bind({});
Status201.args = {
  code: 201,
};

export const Status202 = Template.bind({});
Status202.args = {
  code: 202,
};

export const Status203 = Template.bind({});
Status203.args = {
  code: 203,
};

export const Status204 = Template.bind({});
Status204.args = {
  code: 204,
};

export const Status205 = Template.bind({});
Status205.args = {
  code: 205,
};
export const Status206 = Template.bind({});
Status206.args = {
  code: 206,
};

export const Status207 = Template.bind({});
Status207.args = {
  code: 207,
};

export const Status404 = Template.bind({});
Status404.args = {
  code: 404,
};

export const Status503 = Template.bind({});
Status503.args = {
  code: 503,
};

export const Status1 = Template.bind({});
Status1.args = {
  code: 1,
};

export const Status2 = Template.bind({});
Status2.args = {
  code: 2,
};

export const Status3 = Template.bind({});
Status3.args = {
  code: 4,
};

export const Status4 = Template.bind({});
Status4.args = {
  code: 4,
};

export const Status5 = Template.bind({});
Status5.args = {
  code: 5,
};

export const Status6 = Template.bind({});
Status6.args = {
  code: 6,
};

export const Status7 = Template.bind({});
Status7.args = {
  code: 7,
};
