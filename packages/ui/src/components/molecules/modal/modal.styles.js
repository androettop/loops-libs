import styled from "styled-components";
import { StyledButtonContainer } from "../../atoms/button/button.styles";
import StyledSegment from "../../atoms/segment/segment.styles";

export const StyledModal = styled.div(
  ({ isOpen, size, theme: { transition, modal, containerMaxWidths } }) => `
  position: fixed;
  background: ${modal?.backdropColor};
  left:0;
  top:0;
  width: 100%;
  height: 100%;
  z-index: ${modal?.zIndex};

  &, & ~ ${StyledSegment}{
    transition: ${transition?.[2]};
    ${
      isOpen
        ? `visibility: visible; opacity: 1;`
        : `visibility: hidden; opacity: 0;`
    } 
  }

  & ~ ${StyledSegment}{
    position: fixed;
    z-index: ${modal?.zIndex + 1};
    top: ${isOpen ? "88px" : "160px"};
    left: 50%;
    transform: translateX(-50%);
    cursor: default;
    width: 100%;
    max-width: ${containerMaxWidths?.[size]};
  }  

  & ~ ${StyledSegment} ${StyledButtonContainer}:first-child{
    position:absolute;
    top: 8px;
    right: 8px;
  }

`
);
