import React from "react";
import { DateSelector } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

export default {
  title: "Organisms / Date Selector",
  component: DateSelector,
  argTypes: simpleArgTypes({
    value: {
      description: "The selected date.",
      type: "Date",
      control: "date",
    },
    range: {
      description: "If it's true the user can select a date range.",
      type: "boolean",
      defaultValue: false,
      control: "boolean",
    },
    onChange: {
      description: "onChange callback is called when a day is selected",
      type: "(date:Date) => void",
      control: false,
    },
    label: {
      description: "The input label",
      type: "string",
      control: "text",
    },
    placeholder: {
      description: "The input placeholder",
      type: "string",
      control: "text",
    },
    disabled: {
      description: "A disabled item is translucent and onClick is not called.",
      type: "boolean",
      control: "boolean",
      defaultValue: false,
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
const Template = (args) => <DateSelector {...args} />;

export const SampleDateSelector = Template.bind({});
SampleDateSelector.args = {
  range: true,
  value: { from: new Date("09-12-2021"), to: new Date("09-25-2021") },
  onChange: (date) => {
    actions.log(date);
  },
};
