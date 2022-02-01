import React from "react";
import PropTypes from "prop-types";
import classNames from "../../../utils/className";
import {
  StyledCalendarButton,
  StyledNumberContainer,
} from "./calendarbutton.styles";

export const calendarButtonTypes = [
  "default",
  "today",
  "active",
  "disabled",
  "rangestart",
  "rangecenter",
  "rangeend",
];

const CalendarButton = ({ type = "default", text, ...props }) => {
  const filteredType = calendarButtonTypes.includes(type)
    ? type
    : calendarButtonTypes[0];
  return (
    <StyledCalendarButton {...props}>
      <StyledNumberContainer className={classNames(filteredType)}>
        {text}
      </StyledNumberContainer>
    </StyledCalendarButton>
  );
};

CalendarButton.propTypes = {
  type: PropTypes.oneOf(calendarButtonTypes),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CalendarButton.defaultProps = {
  type: "default",
  text: undefined,
};

export default CalendarButton;
