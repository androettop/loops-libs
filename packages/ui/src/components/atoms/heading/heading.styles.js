import styled from "styled-components";

const StyledHeading = styled.h1(
  ({ maxLines, theme: { color, heading, fontWeight, fontSize } }) => `
  color: ${color?.neutral?.[10]};
  margin: 0;
  font-family: ${heading?.fontFamily};

  &.limit {
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: ${maxLines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &.h1 {
    font-weight: ${fontWeight[700]};
    font-size: ${fontSize[32]};
  }
  &.h2 {
    font-weight: ${fontWeight[700]};
    font-size: ${fontSize[24]};
  }
  &.h3 {
    font-weight: ${fontWeight[600]};
    font-size: ${fontSize[20]};
  }
  &.h4 {
    font-weight: ${fontWeight[600]};
    font-size: ${fontSize[18]};
  }
  &.h5 {
    font-weight: ${fontWeight[500]};
    font-size: ${fontSize[16]};
  }
  &.h6 {
    font-weight: ${fontWeight[500]};
    font-size: ${fontSize[14]};
  }
`
);

export default StyledHeading;
