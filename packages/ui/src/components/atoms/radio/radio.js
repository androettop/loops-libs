import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "../../../utils/className";
import {
  StyledLabel,
  StyledRadio,
  StyledRadioCheck,
  StyledRadioInput,
  StyledRadioLabel,
} from "./radio.styles";
import { StyledInputError } from "../textinput/textinput.styles";

const Radio = ({
  onChange,
  label,
  error,
  touched,
  options,
  name,
  value,
  className,
  disabled,
  readOnly,
  ...props
}) => {
  const withError = error && touched;
  const [focused, setFocused] = useState(false);
  return (
    <StyledRadio
      {...props}
      className={classNames({ error: withError, focused, disabled }, className)}
    >
      <StyledLabel>{label}</StyledLabel>
      {options?.map((option) => (
        <StyledRadioLabel
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          key={option?.value}
        >
          <StyledRadioInput
            disabled={disabled}
            readOnly={readOnly}
            type="radio"
            onChange={(e) => {
              if (!readOnly && onChange) {
                onChange(e?.target?.value);
              }
            }}
            value={option?.value}
            name={name}
            checked={value !== undefined && option?.value === value}
          />
          <StyledRadioCheck />
          <span>{option?.label}</span>
        </StyledRadioLabel>
      ))}
      {withError && <StyledInputError>{error}</StyledInputError>}
    </StyledRadio>
  );
};

Radio.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.any,
      label: PropTypes.string,
    })
  ),
  name: PropTypes.string,
  value: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

Radio.defaultProps = {
  onChange: undefined,
  label: undefined,
  error: undefined,
  touched: false,
  options: undefined,
  name: undefined,
  value: undefined,
  className: undefined,
  disabled: false,
  readOnly: false,
};

export default Radio;
