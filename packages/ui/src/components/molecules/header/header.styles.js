import styled from "styled-components";
import { StyledBreadcrumb } from "../../atoms/breadcrumb/breadcrumb.styles";
import StyledCol from "../../atoms/col/col.styles";
import StyledHeading from "../../atoms/heading/heading.styles";
import StyledRow from "../../atoms/row/row.styles";

export const StyledHeader = styled.div(
  ({ theme: { transition } }) => `
  ${StyledHeading} {
  margin: 0;
  line-height: 19px;
  margin-bottom: 24px;
  }
  ${StyledBreadcrumb} {
    margin: 0;
    line-height: 10px;
  }

  & > ${StyledRow}{
    visibility: hidden;
    opacity: 0;
    transition: ${transition?.[2]};
    transition-property: visibility, opacity;
  }

  & > ${StyledRow}:not(.fixed).show, & > ${StyledRow}.fixed.show{
    visibility: visible;
    opacity: 1;
  }

  .fixed ${StyledCol}:first-child {
      position: fixed;
      z-index:1010;
      top: 24px;
  }

  .fixed ${StyledCol}:first-child ${StyledHeading}, .fixed ${StyledCol}:first-child ${StyledBreadcrumb} {
    display: inline-block;
    margin: 8px 0 0 24px; 
  }
  
  .fixed ${StyledCol}:last-child {
      position: fixed;
      z-index:1010;
      top: 24px;
      right: 96px;
      text-align: right;
  }

`
);
