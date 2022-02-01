import styled from "styled-components";
import { StyledTextInput } from "../../atoms/textinput/textinput.styles";
import { StyledCalendar } from "../../molecules/calendar/calendar.styles";

export const StyledDateSelector = styled.div(
  ({ theme: { transition } }) => `
    position: relative;
    ${StyledCalendar} {
        position: absolute;
        top: calc(100% + 4px);
        left:0;
        visibility: hidden;
        opacity: 0;
        transition: ${transition?.[2]};
        z-index: 10
    }

    ${StyledTextInput} input{
        cursor:pointer;
    }

    ${StyledTextInput}.focused + ${StyledCalendar} {
        visibility: visible;
        opacity: 1;
    }
`
);
