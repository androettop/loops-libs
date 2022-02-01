import React from "react";
import { TextInput, inputTypes, iconList } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

export default {
  title: "Atoms / Text input",
  component: TextInput,
  argTypes: simpleArgTypes({
    placeholder: {
      description: "The input placeholder",
      type: "string",
      control: "text",
    },
    label: {
      description: "The input label",
      type: "string",
      control: "text",
    },
    multiLine: {
      description: "Displays the input as a textarea",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    type: {
      description: "The input type",
      type: inputTypes?.map((e) => `'${e}'`).join(" | "),
      defaultValue: inputTypes[0],
      options: inputTypes,
      control: "select",
    },
    icon: {
      description: "You can specify a icon (See Atoms > Icon)",
      type: Object.keys(iconList)
        .map((e) => `'${e}'`)
        .join(" | "),
      options: Object.keys(iconList),
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
const Template = (args) => <TextInput {...args} />;

export const SampleTextInput = Template.bind({});
SampleTextInput.args = {
  label: "Sample input",
  placeholder: "Write here",
  onChange: actions.log,
};

export const SamplePassword = Template.bind({});
SamplePassword.args = {
  label: "Sample password input",
  type: "password",
  placeholder: "Password",
  onChange: actions.log,
};

export const SampleMultiline = Template.bind({});
SampleMultiline.args = {
  label: "Sample text areas",
  placeholder: "Write here",
  multiLine: true,
  onChange: actions.log,
};

export const SampleIcon = Template.bind({});
SampleIcon.args = {
  label: "Search",
  placeholder: "Search",
  icon: "search",
  onChange: actions.log,
};

export const SampleClickable = Template.bind({});
SampleClickable.args = {
  label: "Message",
  placeholder: "Write your message",
  icon: "send",
  onIconClick: actions.log,
};

export const SampleValidation = Template.bind({});
SampleValidation.args = {
  label: "Required field",
  placeholder: "I am a placeholder",
  required: true,
  error: "This field is mandatory!",
  touched: true,
};

export const SampleReadonly = Template.bind({});
SampleReadonly.args = {
  label: "Readonly field",
  placeholder: "You can't write here",
  readOnly: true,
};

export const SampleDisabled = Template.bind({});
SampleDisabled.args = {
  label: "Disabled field",
  value: "Lorem ipsum",
  disabled: true,
};
