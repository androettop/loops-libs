import styled from "styled-components";

const StyledRow = styled.div(
  ({ alignItems, justifyContent, noGutters }) => `
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
  margin-right: ${noGutters ? 0 : "-0.75rem"};
  margin-left: ${noGutters ? 0 : "-0.75rem"};

  align-items: ${alignItems};
  justify-content: ${justifyContent};

  & > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: ${noGutters ? 0 : "0.75rem"};
    padding-left: ${noGutters ? 0 : "0.75rem"};
    margin-top: 0;
  }
`
);

export default StyledRow;
