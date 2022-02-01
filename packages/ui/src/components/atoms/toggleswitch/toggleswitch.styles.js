import styled from "styled-components";
import { StyledInputError } from "../textinput/textinput.styles";

const StyledToggleSwitchDot = styled.div(
  ({ disabled, theme: { color, boxShadow, transition } }) => `
  position: absolute;
  top: 2px;
  width: 20px;
  height: 20px;
  background-color: ${!disabled ? color?.light : color?.neutral?.[2]};
  box-shadow: ${boxShadow?.[2]};
  border-radius: 50%;
  transition: ${transition?.[2]};
`
);

const StyledToggleSwitch = styled.label(
  ({ disabled, theme: { color, fontSize, transition, input } }) => `
  display:inline-block;
  width: 48px;
  height: 24px;
  border-radius:10rem;
  background-color: ${color?.neutral?.[1]};
  position: relative;
  margin: 12px 0 12px 0;
  transition: ${transition?.[2]};
  transition-property: background-color;
  transition-delay: .1s !important;

  &.label{
    margin-top: 30px;
  }

  &.active {
    background-color: ${!disabled ? color?.primary?.[5] : color?.neutral?.[1]};
  }
  &.active ${StyledToggleSwitchDot}{
    left:26px;
  }
  &:not(.active) ${StyledToggleSwitchDot}{
    left:2px;
  }
  box-sizing: border-box; 
  &.pointer{
    cursor: pointer;
  }

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  label {
    position: absolute;
    box-sizing: border-box;
    top: -30px;
    left: 0;
    width: 100%;
    font-size: ${fontSize?.[12]};
    line-height: 10px;
    transition: ${transition?.[2]};
    color: ${color?.neutral?.[8]};
  }

  input:focus + label {
    color: ${color?.primary?.[5]};
  }

  &.error input + label {
    color: ${color?.error?.[6]};
  }

  &.error input {
    border-color: ${color?.error?.[6]};
  }
  &.error input + label + svg {
    color: ${color?.error?.[6]};
  }

  &.focused{
    box-shadow: ${input?.focused?.boxShadow};
  }

  ${StyledInputError}{
    bottom: -28px; 
  }
`
);

export { StyledToggleSwitch, StyledToggleSwitchDot };
