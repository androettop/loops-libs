import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Form, ThemeProvider } from "@loops-ar/ui";
import store from "../store";

export const DebugProvider = ({ debug, children }) => (
  <ThemeProvider debug={debug}>{children}</ThemeProvider>
);

DebugProvider.propTypes = {
  debug: PropTypes.bool,
  children: PropTypes.node,
};

DebugProvider.defaultProps = {
  debug: false,
  children: null,
};

export const ThemeDecorator =
  (debug = false) =>
  (storyFn) =>
    <DebugProvider debug={debug}>{storyFn()}</DebugProvider>;

export const ReduxDecorator = (storyFn) => (
  <Provider store={store}>{storyFn()}</Provider>
);

export const FormDecorator = (storyFn) => (
  <Provider store={store}>
    <Form
      onSubmit={(e) => {
        e.preventdefault();
      }}
    >
      {storyFn()}
    </Form>
  </Provider>
);
