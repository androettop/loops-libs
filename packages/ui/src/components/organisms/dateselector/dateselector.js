import React, { useMemo } from "react";
import PropTypes from "prop-types";
import TextInput from "../../atoms/textinput/textinput";
import Calendar from "../../molecules/calendar/calendar";
import { StyledDateSelector } from "./dateselector.styles";

const DateSelector = ({
  value,
  range,
  onChange,
  label,
  placeholder,
  disabled,
  error,
  touched,
}) => {
  const textValue = useMemo(() => {
    if (range && value?.from && value?.to) {
      return `${value?.from?.toLocaleDateString()} - ${value?.to?.toLocaleDateString()}`;
    }
    if (!range && value instanceof Date) {
      return `${value.toLocaleDateString()}`;
    }
    return "";
  }, [value]);
  return (
    <StyledDateSelector>
      <TextInput
        label={label}
        value={textValue}
        icon="calendar"
        error={error}
        touched={touched}
        readOnly
        disabled={disabled}
        placeholder={
          placeholder || range ? "Seleccionar fechas" : "Seleccionar fecha"
        }
      />
      <Calendar
        range={range}
        value={value}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onChange={(...args) => {
          document?.activeElement?.blur();
          if (onChange) {
            onChange(...args);
          }
        }}
      />
    </StyledDateSelector>
  );
};

DateSelector.propTypes = {
  value: Calendar.propTypes.value,
  range: Calendar.propTypes.range,
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
};

DateSelector.defaultProps = {
  value: undefined,
  range: false,
  onChange: undefined,
  label: undefined,
  placeholder: undefined,
  disabled: false,
  error: undefined,
  touched: false,
};

export default DateSelector;
