import styled from "styled-components";

const StyledSeparator = styled.hr(
  ({ compact, variant, theme: { color, borderWidth } }) => `
  margin: ${compact ? "0" : "16px 0"};
  color: inherit;
  background-color: ${color?.[variant]?.[3]};
  border: 0;
  opacity: 1;
  height: ${borderWidth};
`
);

export default StyledSeparator;
