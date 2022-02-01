import styled from "styled-components";

export const StyledSidebarItem = styled.button(
  ({
    hasIcon,
    theme: { fontFamily, fontSize, sidebar, color, transition },
  }) => `
  user-select: none;
  font-family: ${fontFamily};
  font-size: ${fontSize?.[16]};
  padding: ${sidebar?.vSpacing} ${sidebar?.hSpacing};
  cursor: pointer;
  color: ${color?.neutral?.[8]};
  transition: ${transition?.[1]};
  transition-property: background-color;
  max-height: 56px;
  width: ${sidebar?.width};
  border: 0;
  background-color: transparent;
  text-align: left;
  position: relative;
  display: grid;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: ${hasIcon ? "30px 1fr" : "1fr"};
  grid-template-rows: 1fr;
  grid-template-areas: "${hasIcon ? "areaicon areatext" : "areatext"}";

  &.withLine.active {
    box-shadow: inset -3px 0 ${color?.primary?.[5]};
  }

  &:disabled {
    opacity: 0.5;
  }

  .icon::not(.caret){
    grid-area:areaicon;
  }

  .icon,
  svg {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-right: 8px;
  }

  .icon.caret,
  svg.caret {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .caret {
    font-size: 16px;
    float: right;
    position: relative;
    right: -11px;
    top: 4px;
  }

  > span {
    grid-area:areatext;
    display: inline-block;
    span{
      vertical-align: middle;
      line-height: 24px;
      font-size:16px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow-wrap: anywhere;
    }

  }

  &:hover:not(:disabled) {
    background: ${color?.neutral?.[0]};
  }

  &:active:not(:disabled) {
    background: ${color?.neutral?.[1]};
  }

  &.active:not(:disabled) {
    background: ${color?.primary?.[0]};
    color: ${color?.primary?.[5]};
  }
`
);

export const SubMenuCollapsable = styled.div(
  ({ theme: { sidebar } }) => `
  width: 100%;
  display: none;

  &.show {
    display: block;
  }

  /** Additional padding for nested items */
  ${StyledSidebarItem} {
    padding: 1rem ${sidebar?.hSpacing} 1rem calc(${sidebar?.hSpacing} + 0.5rem);
  }
`
);
