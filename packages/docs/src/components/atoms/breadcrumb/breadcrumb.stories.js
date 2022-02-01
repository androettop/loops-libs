import React from "react";
import { Breadcrumb } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

export default {
  title: "Atoms / Breadcrumb",
  component: Breadcrumb,
  argTypes: simpleArgTypes({
    sections: {
      description:
        "Sections array with label and url. The last item always is active and not need url.",
      type: "Array<{label: string, url: string}>",
      defaultValue: [],
      control: "object",
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
const Template = (args) => <Breadcrumb {...args} />;

export const SampleBreadcrumb = Template.bind({});
SampleBreadcrumb.args = {
  sections: [
    {
      label: "Notas",
      url: "#",
    },
    {
      label: "Listado",
    },
  ],
};
