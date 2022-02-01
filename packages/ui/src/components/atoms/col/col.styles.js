import styled, { css } from "styled-components";

const generateSizesForBreakpoint = (breakpoint) => {
  if (breakpoint?.size === 0) {
    return `
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  `;
  }
  if (breakpoint?.size === "auto") {
    return `
    flex: 0 0 auto;
    width: auto !important;
    max-width: none !important;
    flex-basis: auto !important;
    flex-grow: 0 !important;
  `;
  }
  if (breakpoint?.size > 0 && breakpoint?.size <= 12) {
    return `
    flex: 0 0 ${(100 / 12) * breakpoint?.size}%;
    max-width: ${(100 / 12) * breakpoint?.size}%;
  `;
  }
  return "";
};

const generatePaddingForBreakpoint = (breakpoint) => {
  const styles = {};
  if (breakpoint?.padding?.top) {
    styles.paddingTop = `${breakpoint?.padding?.top * 0.25}rem !important`;
  }
  if (breakpoint?.padding?.right) {
    styles.paddingRight = `${breakpoint?.padding?.right * 0.25}rem !important`;
  }
  if (breakpoint?.padding?.bottom) {
    styles.paddingBottom = `${
      breakpoint?.padding?.bottom * 0.25
    }rem !important`;
  }
  if (breakpoint?.padding?.left) {
    styles.paddingLeft = `${breakpoint?.padding?.left * 0.25}rem !important`;
  }

  return css(styles);
};

const generateAlignForBreakpoint = (breakpoint) => {
  const styles = {
    left: "margin-right: auto; text-align: left;",
    center: "margin-right: auto; margin-left: auto; text-align: center;",
    right: "margin-left: auto; text-align: right;",
  };

  return styles?.[breakpoint?.align] || "";
};

const StyledCol = styled.div(
  ({ xs, sm, md, lg, xl, theme: { gridBreakpoints } }) => `
  //position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;

  ${generateSizesForBreakpoint(xs)}
  ${generatePaddingForBreakpoint(xs)}
  ${generateAlignForBreakpoint(xs)}
  
  @media (min-width: ${gridBreakpoints?.sm}) {
    ${sm?.size ? generateSizesForBreakpoint(sm) : ""}
    ${generatePaddingForBreakpoint(sm)}
    ${generateAlignForBreakpoint(sm)}
  }

  @media (min-width: ${gridBreakpoints?.md}) {
    ${md?.size ? generateSizesForBreakpoint(md) : ""}
    ${generatePaddingForBreakpoint(md)}
    ${generateAlignForBreakpoint(md)}
  }

  @media (min-width: ${gridBreakpoints?.lg}) {
    ${lg?.size ? generateSizesForBreakpoint(lg) : ""}
    ${generatePaddingForBreakpoint(lg)}
    ${generateAlignForBreakpoint(lg)}
  }

  @media (min-width: ${gridBreakpoints?.xl}) {
    ${xl?.size ? generateSizesForBreakpoint(xl) : ""}
    ${generatePaddingForBreakpoint(xl)}
    ${generateAlignForBreakpoint(xl)}
  }
`
);

export default StyledCol;
