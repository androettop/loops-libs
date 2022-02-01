import React from "react";
import PropTypes from "prop-types";
import StyledSeparator from "./separator.styles";
import { defaultTheme } from "../../../utils/themeUtils";

const Separator = ({ compact, variant, ...props }) => (
  <StyledSeparator compact={compact} variant={variant} {...props} />
);

Separator.propTypes = {
  compact: PropTypes.bool,
  variant: PropTypes.oneOf(defaultTheme?.variants),
};

Separator.defaultProps = {
  compact: false,
  variant: "neutral",
};

export default Separator;
