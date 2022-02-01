import * as React from "react";
import { Source as PureSource } from "@storybook/components";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "@loops-ar/ui";

const routerDecorator = (Story) => (
  <MemoryRouter>
    <Story />
  </MemoryRouter>
);

const Source = ({ children, ...props }) => {
  return <PureSource {...props} code={children} dark />;
};

export const parameters = {
  backgrounds: {
    default: "white",
    values: [
      { name: "black", value: "#000000" },
      { name: "white", value: "#ffffff" },
    ],
  },
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
  docs: {
    components: {
      code: Source,
    },
  },
};

const withTheme = (story) => {
  return <ThemeProvider>{story()}</ThemeProvider>;
};

addDecorator(withTheme);
addDecorator(routerDecorator);
