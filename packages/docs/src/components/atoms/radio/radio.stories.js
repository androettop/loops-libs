import React from "react";
import { Radio } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

export default {
  title: "Atoms / Radio",
  component: Radio,
  argTypes: simpleArgTypes({
    /* TODO: Add argTypes */
  }),
  parameters: {
    viewMode: "docs",
    docs: {
      page: Doc,
    },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <Radio {...args} />;

export const SampleRadio = Template.bind({});
SampleRadio.args = {
  value: 2,
  options: [
    {
      label: "First option",
      value: 1,
    },
    {
      label: "Second option",
      value: 2,
    },
    {
      label: "Third option",
      value: 3,
    },
  ],
  onChange: actions.log,
};

export const SampleValidation = Template.bind({});
SampleValidation.args = {
  touched: true,
  error: "This is an error message!",
  value: 1,
  options: [
    {
      label: "First option",
      value: 1,
    },
    {
      label: "Second option",
      value: 2,
    },
    {
      label: "Third option",
      value: 3,
    },
  ],
  onChange: actions.log,
};

export const SampleReadonly = Template.bind({});
SampleReadonly.args = {
  value: 1,
  options: [
    {
      label: "First option",
      value: 1,
    },
    {
      label: "Second option",
      value: 2,
    },
    {
      label: "Third option",
      value: 3,
    },
  ],
  onChange: actions.log,
  readOnly: true,
};

export const SampleDisabled = Template.bind({});
SampleDisabled.args = {
  value: 1,
  options: [
    {
      label: "First option",
      value: 1,
    },
    {
      label: "Second option",
      value: 2,
    },
    {
      label: "Third option",
      value: 3,
    },
  ],
  onChange: actions.log,
  disabled: true,
};
