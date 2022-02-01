import styled from "styled-components";
import { rgba } from "polished";
import StyledHeading from "../../atoms/heading/heading.styles";
import { StyledSidebarItem } from "../../atoms/sidebaritem/sidebaritem.styles";
import { StyledButton } from "../../atoms/button/button.styles";

export const StyledSidebarContainer = styled.div(
  ({ left, isOpen, theme: { sidebar, transition } }) => `
   ${StyledButton} {
    position: fixed;
    display: inline-block;
    z-index: calc(${sidebar?.zIndex} + 1);
    top: ${sidebar?.collapseButton?.top};
    left: calc(${left || 0}px + ${isOpen ? `${sidebar?.width} - 15` : 4}px);
    transition: ${transition?.[2]};
    transition-property: left, background-color, box-shadow;
    z-index: ${sidebar?.collapseButton?.zIndex};
    width: 32px;
  }
`
);

export const StyledBackdrop = styled.div(
  ({ theme: { sidebar, transition, color } }) => `
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${rgba(color?.dark || "#000", 0.2)};
  z-index: ${sidebar?.backdrop?.zIndex};
  visibility: hidden;
  opacity: 0;

  transition: ${transition?.[2]};
  transition-property: opacity, visibility;

  &.show {
    visibility: visible;
    opacity: 1;
  }
`
);
export const StyledSidebar = styled.div(
  ({ left, theme: { color, header, boxShadow, sidebar, transition } }) => `
  overflow: hidden;
  position: fixed;
  background-color: ${color?.light};
  opacity:1;
  color: ${color?.neutral?.[8]};
  height: calc(100% - ${header?.height});
  box-shadow: ${boxShadow?.[2]};
  top: ${header?.height};
  left: ${left || 0}px;
  z-index: ${sidebar?.zIndex};

  /** Open animation */
  width: 20px;
  transition: ${transition?.[2]};
  transition-property: width;

  ${StyledSidebarItem} {
    visibility: hidden;
    transition: ${transition?.[2]};
    transition-property: visibility;
  }

  &.show {
    opacity:.95;
    width: ${sidebar?.width};
    ${StyledSidebarItem} {
      visibility: visible;
    }
  }

  ${StyledHeading} {
    padding: 1.5rem 2rem 2rem 2.5rem;
    margin: 0;
  }
`
);

export default StyledSidebar;
