import styled from "styled-components";
import {
  StyledButton,
  StyledButtonContainer,
} from "../../atoms/button/button.styles";
import StyledCol from "../../atoms/col/col.styles";
import StyledRow from "../../atoms/row/row.styles";

export const StyledCalendar = styled.div(
  ({ theme: { color } }) => `
    ${StyledButton}{
        display:flex;
        align-items:center;
    }
    ${StyledCol}{
        display:flex;
        align-items: center;
        justify-content: center;
    }
    ${StyledRow}:first-child{
        padding: 8px 8px 12px 8px;
    }
    ${StyledRow}.days{
        padding: 0 12px;
        font-size: 12px;
        color: ${color?.neutral?.[5]}
    }

    ${StyledRow}.year ${StyledCol}, ${StyledRow}.month ${StyledCol}{
        padding-top: 8.75px;
        padding-bottom: 8.75px;
    }

    ${StyledRow}.year ${StyledButtonContainer}, ${StyledRow}.month ${StyledButtonContainer}{
        width: 100%;
        text-align: center;
    }
    ${StyledRow}.year ${StyledButton}, ${StyledRow}.month ${StyledButton}{
        justify-content: center;
        padding: 16px 0;
        width: 100%;
        text-align: center;
        --border-color: transparent; /* See button.styles.js */
    }
`
);
