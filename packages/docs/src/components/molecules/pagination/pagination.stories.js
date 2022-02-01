import React from "react";
import { Pagination } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Molecules / Pagination",
  component: Pagination,
  argTypes: simpleArgTypes({
    changePage: {
      description:
        "Function that is passed as a parameter the page to change to",
      default: () => {},
      type: "function",
      required: true,
    },
    totalPages: {
      description: "is the array of objects with the data",
      type: "number",
      control: "number",
      required: true,
    },
    currentPage: {
      description: "actual page",
      type: "number",
      control: "number",
      required: true,
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
const Template = (args) => <Pagination {...args} />;

export const SamplePagination = Template.bind({});
SamplePagination.args = {
  // Here we define the args
};
