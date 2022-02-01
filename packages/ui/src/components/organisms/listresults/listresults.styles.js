import styled from "styled-components";
import StyledCol from "../../atoms/col/col.styles";
import StyledSegment from "../../atoms/segment/segment.styles";
import { CardHeader } from "../itemresult/itemresult.styles";

export const StyledListResultsContainer = styled.div(
  ({ theme: { segment } }) => `
  &.singleRow ${StyledSegment} {
    margin-bottom: 1px;
    border-radius: 0;
    padding: 12px 16px;
  }
  &.singleRow ${StyledSegment}.segment-neutral {
    padding: 16px 16px 14px 16px;
  }

  &.singleRow ${StyledSegment}.hover:hover {
    transform: translateZ(1px);
  }

  &.singleRow ${StyledSegment}.hover:hover {
    box-shadow: 0 0 2px rgb(125,138,151,0.24), 0 0 32px 0 rgb(125,138,151,0.24);
  }

  &.singleRow ${StyledSegment}.hover:active {
    box-shadow: 0 0 2px rgb(125,138,151,0.24), 0 0 16px 0 rgb(125,138,151,0.24);
  }

  &.singleRow ${StyledCol}:first-child ${StyledSegment} {
    border-top-left-radius: ${segment?.borderRadius};
    border-top-right-radius: ${segment?.borderRadius};
  }

  &.singleRow ${StyledCol}:last-child div ${StyledSegment} {
    margin-bottom: 0;
    border-bottom-left-radius: ${segment?.borderRadius};
    border-bottom-right-radius: ${segment?.borderRadius};
  }

  ${CardHeader}.compact {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  &.singleRow ${StyledCol}:not(:last-child) div ${CardHeader}.compact {
    border-bottom-left-radius: 0 !important;
  }
`
);
