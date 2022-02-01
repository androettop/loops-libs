import styled from "styled-components";

export const StyledImageContainer = styled.div(
  ({ rounded, circle, theme: { color, borderRadius } }) => `
  position: relative;
  background-color: ${color?.neutral?.[8]};
  display: inline-block;
  overflow: hidden;
  ${rounded ? `border-radius: ${borderRadius?.[8]};` : ``}
  ${circle ? `border-radius: 50% !important;` : ``}
`
);

const StyledImage = styled.img(
  ({ mode, theme: { borderRadius } }) => `
  vertical-align: middle;
  position: relative;
  object-fit: ${mode};
  object-position: center;
  &.rounded {
    border-radius: ${borderRadius?.[8]};
  }

  &.circle {
    border-radius: 50% !important;
  }

  &.fluid {
    max-width: 100%;
    height: auto;
  }

  &.blurred {
    filter: blur(4px);
    opacity: .5;
    position: absolute;
  }
`
);

export default StyledImage;
