import styled from "styled-components";
import { StyledTextInput } from "../../atoms/textinput/textinput.styles";

export const StyledFileInput = styled.div`
  input[type="file"] {
    display: none;
  }

  ${StyledTextInput} input {
    cursor: pointer;
  }
`;
