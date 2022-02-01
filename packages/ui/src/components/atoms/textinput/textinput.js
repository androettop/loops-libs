import React, { useState } from "react";
import PropTypes from "prop-types";
import Icon, { iconList } from "../icon/icon";
import classNames from "../../../utils/className";
import {
  StyledInput,
  StyledInputError,
  StyledTextInput,
} from "./textinput.styles";

export const inputTypes = ["text", "email", "number", "password", "textarea"];

const defaultType = inputTypes[0];
const TextInput = ({
  label,
  validate,
  icon,
  onIconClick,
  type,
  multiLine,
  rows,
  readOnly,
  required,
  error,
  touched,
  autoComplete,
  ...props
}) => {
  const withError = error && touched;
  const [focused, setFocused] = useState(false);
  return (
    <StyledTextInput className={classNames({ focused })}>
      <StyledInput
        as={multiLine ? "textarea" : "input"}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        type={inputTypes.includes(type) ? type : defaultType}
        className={classNames("input", {
          error: withError,
          validate,
          label: Boolean(label),
          withIcon: !!icon,
        })}
        autoComplete={autoComplete}
        rows={rows}
        readOnly={readOnly}
        required={required}
        {...props}
      />
      <label>{label ? `${label} ${required ? "(*)" : ""}` : ""}</label>
      {icon && (
        <Icon
          className={classNames({ pointer: !!onIconClick })}
          onClick={onIconClick}
          name={icon}
        />
      )}
      {withError && <StyledInputError>{error}</StyledInputError>}
    </StyledTextInput>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  validate: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(iconList)),
  onIconClick: PropTypes.func,
  type: PropTypes.string,
  multiLine: PropTypes.bool,
  rows: PropTypes.number,
  readOnly: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.string,
  touched: PropTypes.bool,
  autoComplete: PropTypes.string,
};

TextInput.defaultProps = {
  label: "",
  validate: false,
  icon: undefined,
  onIconClick: undefined,
  type: defaultType,
  multiLine: false,
  rows: 3,
  readOnly: false,
  required: false,
  error: "",
  touched: false,
  autoComplete: "off",
};

export default TextInput;
