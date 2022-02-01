import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "../../../utils/className";
import { StyledInputError } from "../textinput/textinput.styles";
import {
  StyledToggleSwitch,
  StyledToggleSwitchDot,
} from "./toggleswitch.styles";

const ToggleSwitch = ({
  value,
  onChange,
  label,
  error,
  touched,
  disabled,
  readOnly,
  ...props
}) => {
  const withError = error && touched;
  const [focused, setFocused] = useState(false);
  return (
    <StyledToggleSwitch
      disabled={!!disabled}
      className={classNames(
        { focused, error: withError, active: value, label: Boolean(label) },
        "pointer"
      )}
    >
      <input
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        type="checkbox"
        checked={value}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
      />
      <label>{label}</label>
      <StyledToggleSwitchDot disabled={!!disabled} />
      {withError && <StyledInputError>{error}</StyledInputError>}
    </StyledToggleSwitch>
  );
};

ToggleSwitch.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  label: PropTypes.string,
  error: PropTypes.string,
  touched: PropTypes.bool,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
};

ToggleSwitch.defaultProps = {
  value: false,
  onChange: undefined,
  label: undefined,
  error: undefined,
  touched: false,
  disabled: false,
  readOnly: false,
};

export default ToggleSwitch;
