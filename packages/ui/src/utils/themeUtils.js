/**
 * Utilities for working with styles and themes
 *
 * This utility exports an object "utils" and "scUtils" ĺa first
 * for general use and the second for use specifically in
 * styled-components.
 */

import { LightTheme } from "../themes";

export const defaultTheme = LightTheme;

/** Utility set for general use */
const utils = {
  /**
   * Returns the current theme if it is set, otherwise it returns
   * the default theme
   * @param {any} props
   * @returns {theme}
   */
  theme: ({ theme }) => (theme?.remUnit ? theme : defaultTheme),
  /**
   * Returns the value of the specified property in the theme
   * @param {any} props
   * @param {string} property
   * @returns {any}
   */
  themeValue: (props, property) => utils.theme(props)[property],
  /**
   * @deprecated
   * Transform units to rem
   * @param {any} props
   * @param {number | (props) => number} units
   * @returns {string}
   */
  rem: ({ theme: _theme }, ...units) => {
    const theme = utils.theme({ theme: _theme });
    return units
      .map((unit) => {
        if (typeof unit === "function") {
          return `${parseFloat(unit({ theme: _theme }) * theme.remUnit).toFixed(
            2
          )}rem`;
        }
        return `${parseFloat(unit * theme.remUnit).toFixed(2)}rem`;
      })
      .join(" ");
  },
  /**
   * Returns the media query string
   * @param {any} props
   * @param {'max' | 'min'} type
   * @param {string} size
   * @returns {string}
   */
  mediaQuery: (props, type, size) => {
    const theme = utils.theme(props);
    return `@media (${type}-width: ${theme.gridBreakpoints[size]})`;
  },
};

/**
 * Set of utilities for styled components
 *
 * The methods in this set are the same as in "utils" but without
 * the "props" parameter.
 */
const scUtils = {
  theme: () => (props) => utils.theme(props),
  themeValue: (property) => (props) => utils.themeValue(props, property),
  /** @deprecated */
  rem:
    (...units) =>
    (props) =>
      utils.rem(props, ...units),
  mediaQuery: (type, size) => (props) => utils.mediaQuery(props, type, size),
};

export { scUtils, utils };
