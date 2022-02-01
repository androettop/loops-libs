import React from "react";
import { Calendar } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

export default {
  title: "Molecules / Calendar",
  component: Calendar,
  argTypes: simpleArgTypes({
    value: {
      description: "The selected date.",
      type: "Date",
      control: "date",
    },
    range: {
      description: "If it's true the user can select a date range.",
      type: "boolean",
      control: "boolean",
    },
    onChange: {
      description: "onChange callback is called when a day is selected",
      type: "(date:Date) => void",
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
const Template = (args) => <Calendar {...args} />;

export const SampleCalendar = Template.bind({});
SampleCalendar.args = {
  range: true,
  value: { from: new Date("09-12-2021"), to: new Date("09-25-2021") },
  onChange: (date) => {
    actions.log(date);
  },
};
