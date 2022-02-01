import React from "react";
import { CalendarButton, calendarButtonTypes } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Atoms / Calendar Button",
  component: CalendarButton,
  argTypes: simpleArgTypes({
    text: {
      description: "Label text of the calendarButton",
      type: "string",
      control: "text",
    },
    type: {
      description: `The calendarButton type can be ${calendarButtonTypes.join(
        ", "
      )}`,
      type: calendarButtonTypes.map((e) => `'${e}'`).join(" | "),
      defaultValue: calendarButtonTypes[0],
      options: calendarButtonTypes,
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
const Template = (args) => <CalendarButton {...args} />;

export const DefaultCalendarButton = Template.bind({});
DefaultCalendarButton.args = {
  type: "default",
  text: 15,
};

export const TodayCalendarButton = Template.bind({});
TodayCalendarButton.args = {
  type: "today",
  text: 15,
};

export const ActiveCalendarButton = Template.bind({});
ActiveCalendarButton.args = {
  type: "active",
  text: 15,
};

export const DisabledCalendarButton = Template.bind({});
DisabledCalendarButton.args = {
  type: "disabled",
  text: 15,
};

export const RangestartCalendarButton = Template.bind({});
RangestartCalendarButton.args = {
  type: "rangestart",
  text: 15,
};

export const RangecenterCalendarButton = Template.bind({});
RangecenterCalendarButton.args = {
  type: "rangecenter",
  text: 15,
};

export const RangeendCalendarButton = Template.bind({});
RangeendCalendarButton.args = {
  type: "rangeend",
  text: 15,
};
