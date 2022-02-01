import React from "react";
import PropTypes from "prop-types";
import { StyledButton, StyledButtonContainer } from "./button.styles";
import classNames from "../../../utils/className";
import { defaultTheme } from "../../../utils/themeUtils";
import Icon, { iconList } from "../icon/icon";

const buttonSizes = ["small", "medium", "large"];
const buttonModes = ["link", "outline", "solid"];

const Button = ({
  className,
  icon,
  mode,
  size,
  style,
  text,
  type,
  variant,
  ...props
}) => (
  <StyledButtonContainer className={className} style={style}>
    <StyledButton
      {...props}
      type={type}
      className={classNames(`button-${variant}`, `mode-${mode}`, size, {
        "icon-btn": !text && icon,
      })}
    >
      {icon ? <Icon name={icon} /> : null}
      <span>{text}</span>
    </StyledButton>
  </StyledButtonContainer>
);

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(defaultTheme.variants),
  size: PropTypes.oneOf(buttonSizes),
  mode: PropTypes.oneOf(buttonModes),
  type: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(iconList)),
  className: PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  text: "",
  variant: "neutral",
  size: "medium",
  mode: "solid",
  type: "button",
  icon: undefined,
  className: "",
  style: undefined,
};

export default Button;
