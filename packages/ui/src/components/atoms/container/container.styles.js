import styled from "styled-components";

const StyledContainer = styled.div(
  ({ theme: { gridBreakpoints, containerMaxWidths, gridGutter } }) => `
  width: 100%;
  padding-right: ${gridGutter / 2}rem;
  padding-left: ${gridGutter / 2}rem;
  margin-right: auto;
  margin-left: auto;
  box-sizing: border-box;

  @media (min-width: ${gridBreakpoints?.sm}) {
    max-width: ${containerMaxWidths?.sm};
  }

  @media (min-width: ${gridBreakpoints?.md}) {
    max-width: ${containerMaxWidths?.md};
  }

  @media (min-width: ${gridBreakpoints?.lg}) {
    max-width: ${containerMaxWidths?.lg};
  }

  @media (min-width: ${gridBreakpoints?.xl}) {
    max-width: ${containerMaxWidths?.xl};
  }
`
);

export default StyledContainer;
