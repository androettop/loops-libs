import React from "react";
import { Modal } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";
import { actions } from "../../../utils/actionLog";

export default {
  title: "Molecules / Modal",
  component: Modal,
  argTypes: simpleArgTypes({
    isOpen: {
      description: "Inticates if the modal is visible or not",
      type: "boolean",
      control: "boolean",
      defaultValue: false,
    },
    /*
        "prop_name":{
            description:"prop description",
            type: "string",
            control: "text",
            defaultValue: "default value",
            required: true,
        }
    */
  }),
  parameters: {
    viewMode: "docs",
    docs: {
      page: Doc,
    },
  },
};

// We create a “template” of how args map to rendering
const Template = (args) => <Modal {...args} />;

export const SampleModal = Template.bind({});
SampleModal.args = {
  // Here we define the args
  handleClose: actions.log,
};
