import React from "react";
import { ToggleSwitch } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

export default {
  title: "Atoms / Toggle Switch",
  component: ToggleSwitch,
  argTypes: simpleArgTypes({
    value: {
      description: "The input value (boolean)",
      type: "boolean",
      control: "boolean",
    },
    label: {
      description: "The input label",
      type: "string",
      control: "text",
    },
    onChange: {
      description: "Function to execute on change.",
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
const Template = (args) => <ToggleSwitch {...args} />;

export const SampleSwitchTrue = Template.bind({});
SampleSwitchTrue.args = {
  value: true,
  onChange: actions.log,
};

export const SampleSwitchFalse = Template.bind({});
SampleSwitchFalse.args = {
  value: false,
  onChange: actions.log,
};

export const SampleSwitchLabel = Template.bind({});
SampleSwitchLabel.args = {
  value: false,
  label: "Active",
  onChange: actions.log,
};

export const SampleSwitchError = Template.bind({});
SampleSwitchError.args = {
  value: false,
  touched: true,
  error: "Error message",
  label: "Active",
  onChange: actions.log,
};

export const SampleSwitchReadonlyOff = Template.bind({});
SampleSwitchReadonlyOff.args = {
  label: "Readonly off",
  value: false,
  onChange: actions.log,
  readOnly: true,
};

export const SampleSwitchReadonlyOn = Template.bind({});
SampleSwitchReadonlyOn.args = {
  label: "Readonly on",
  value: true,
  onChange: actions.log,
  readOnly: true,
};

export const SampleSwitchDisabledOff = Template.bind({});
SampleSwitchDisabledOff.args = {
  label: "Disabled off",
  value: false,
  onChange: actions.log,
  disabled: true,
};

export const SampleSwitchDisabledOn = Template.bind({});
SampleSwitchDisabledOn.args = {
  label: "Disabled on",
  value: true,
  onChange: actions.log,
  disabled: true,
};
