import styled from "styled-components";
import {
  StyledButton,
  StyledButtonContainer,
} from "../../atoms/button/button.styles";

export const StyledPagination = styled.div`
  display: inline-block;
  ${StyledButtonContainer},${StyledButton} {
    width: 32px;
    height: 32px;
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
    align-items: center;
    border-radius: 8px !important;
    vertical-align: top;
  }
  ${StyledButtonContainer}:not(:first-child) {
    margin-left: 4px;
  }
`;
