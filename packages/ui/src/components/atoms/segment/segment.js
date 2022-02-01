import React from "react";
import PropTypes from "prop-types";
import classNames from "../../../utils/className";
import { defaultTheme } from "../../../utils/themeUtils";
import StyledSegment from "./segment.styles";

export const segmentVariants = [
  "light",
  "dark",
  ...Object.keys(defaultTheme.color),
];

const Segment = ({ hover, variant, compact, ...props }) => (
  <StyledSegment
    {...props}
    className={classNames(`segment-${variant}`, {
      hover,
      pointer: !!props.onClick,
      compact,
    })}
  />
);

Segment.propTypes = {
  hover: PropTypes.bool,
  variant: PropTypes.oneOf(segmentVariants),
  compact: PropTypes.bool,
  onClick: PropTypes.func,
};

Segment.defaultProps = {
  hover: false,
  variant: "light",
  compact: false,
  onClick: null,
};

export default Segment;
