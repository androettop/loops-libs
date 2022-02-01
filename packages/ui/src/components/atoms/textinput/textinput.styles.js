import styled from "styled-components";

export const StyledInput = styled.input(
  ({
    theme: {
      color,
      input,
      lineHeight,
      fontFamily,
      fontSize,
      transition,
      borderWidth,
    },
  }) => `
  /*No resizable for textarea*/
  resize: none;
  display: block;

  box-sizing: border-box;

  &:focus + label {
    color: ${color?.primary?.[5]};
  }

  &:focus {
    box-shadow: ${input?.focused?.boxShadow};
    border-color: ${color?.primary?.[3]};
  }

  &.error + label {
    color: ${color?.error?.[6]};
  }

  &.error {
    border-color: ${color?.error?.[6]};
  }

  & {
    transition: ${transition?.[2]};
    transition-property: box-shadow, border-color;
    width: 100%;
    color: ${color?.neutral?.[8]};
    font-family: ${fontFamily};
    outline: 0 !important;
    background-color: ${color?.light};
    font-size: ${fontSize?.[16]};
    line-height: ${lineHeight?.[24]};
    padding: 11px 12px; /* hack for 1px border */
    border-radius: 4px;
    border-width: ${borderWidth};
    border-style: solid;
    border-color: ${color?.neutral?.[2]};
  }

  &.label{
    margin-top: 18px;
  }

  &.withIcon{
    padding-right: 48px;
  }
  &:focus + label + svg{
    color: ${color?.primary?.[5]};
  }
  &.error + label + svg {
    color: ${color?.error?.[6]};
  }

  &:disabled{
    background-color: ${color?.neutral?.[0]};
    cursor: not-allowed !important; 
  }
`
);

export const StyledTextInput = styled.div(
  ({ theme: { color, fontSize, transition } }) => `
  position: relative;

  label {
    position: absolute;
    box-sizing: border-box;
    top: -16px;
    left: 0;
    width: 100%;
    font-size: ${fontSize?.[12]};
    line-height: 10px;
    transition: ${transition?.[2]};
    color: ${color?.neutral?.[8]};
  }  

  .icon,svg{
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 24px;
    color: ${color?.neutral?.[7]};
    transform: translate(-50%, -50%);
    transition: ${transition?.[2]};
    transition-property: color;
    cursor: pointer;
  }
  
  .icon:not(.pointer), svg:not(.pointer){
    pointer-events: none;
  }
`
);
export const StyledInputError = styled.span(
  ({ theme: { color } }) => `
  font-size: 12px;
  color: ${color?.error?.[5]};
  position: absolute;
  line-height:12px;
  bottom:-16px;
  left:0;
`
);
