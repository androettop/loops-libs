import styled from "styled-components";
import { StyledInputError } from "../textinput/textinput.styles";

export const StyledLabel = styled.label(
  ({ theme: { fontSize, transition, color } }) => `
  display: block;
  box-sizing: border-box;
  top: -16px;
  left: 0;
  width: 100%;
  font-size: ${fontSize?.[12]};
  line-height: 10px;
  transition: ${transition?.[2]};
  color: ${color?.neutral?.[8]};
  margin-bottom: 8px;
`
);

export const StyledRadio = styled.div(
  ({ theme: { color } }) => `
  --accent-color: ${color?.primary?.[5]};
  --light-color: ${color?.primary?.[0]};

  &.error {
    --accent-color: ${color?.error?.[5]};
    --light-color: ${color?.light};
  }

  &.disabled {
    --accent-color: ${color?.neutral?.[5]};
    --light-color: ${color?.neutral?.[0]};
  }

  &.focused ${StyledLabel} {
    color: var(--accent-color);
  }

  ${StyledInputError} {
    bottom: unset;
    left: unset;
  }
`
);

export const StyledRadioLabel = styled.label`
  display: block;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledRadioCheck = styled.span`
  margin-right: 4px;
  vertical-align: bottom;
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  background-color: var(--light-color);
  box-shadow: inset 0 0 0 1px var(--accent-color);
`;

export const StyledRadioInput = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${StyledRadioCheck} {
    background-color: var(--accent-color);
    box-shadow: inset 0 0 0 1px var(--accent-color),
      inset 0 0 0 3px var(--light-color);
  }

  &:focus + ${StyledRadioCheck} + span {
    color: var(--accent-color);
  }
`;
