import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import {
  ThemeProvider as SCThemeProvider,
  createGlobalStyle,
} from "styled-components";
import * as themes from "../themes";

const GlobalStyle = createGlobalStyle`
  body,html {
    margin:0;
    padding:0;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
  }
`;

const ThemeProvider = ({ dark, children, debug }) => {
  const theme = dark ? themes.LightTheme : themes.LightTheme;
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <SCThemeProvider theme={{ ...theme, debug }}>{children}</SCThemeProvider>
    </>
  );
};

ThemeProvider.propTypes = {
  dark: PropTypes.bool,
  children: PropTypes.node,
  debug: PropTypes.bool,
};

ThemeProvider.defaultProps = {
  dark: false,
  children: null,
  debug: false,
};

export default ThemeProvider;
