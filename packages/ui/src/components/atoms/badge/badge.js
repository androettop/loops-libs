import React from "react";
import PropTypes from "prop-types";
import classNames from "../../../utils/className";
import { defaultTheme } from "../../../utils/themeUtils";
import Icon from "../icon/icon";
import StyledBadge from "./badge.styles";

export const badgeTypes = ["default", "bordered", "pill"];

const Badge = ({ variant, type, text, close, onClick, block, ...props }) => {
  const filteredType = badgeTypes.includes(type) ? type : badgeTypes[0];
  return (
    <StyledBadge
      {...props}
      onClick={onClick}
      className={classNames(`badge-${variant}`, `type-${filteredType}`, {
        pointer: !!onClick,
        block,
      })}
      variant={variant}
    >
      {text}
      {close && <Icon name="close" />}
    </StyledBadge>
  );
};

Badge.propTypes = {
  variant: PropTypes.oneOf(defaultTheme?.variants),
  type: PropTypes.oneOf(badgeTypes),
  text: PropTypes.string.isRequired,
  close: PropTypes.bool,
  onClick: PropTypes.func,
  block: PropTypes.bool,
};

Badge.defaultProps = {
  variant: "neutral",
  type: "default",
  close: false,
  onClick: undefined,
  block: false,
};

export default Badge;
