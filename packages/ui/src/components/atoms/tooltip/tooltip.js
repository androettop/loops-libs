import React from "react";
import PropTypes from "prop-types";
import StyledTooltip from "./tooltip.styles";

export const tooltipPositions = ["top", "right", "bottom", "left"];

const Tooltip = ({ title, children, position }) => {
  const classes = [];

  if (!title) {
    classes.push("disabled");
  }

  classes.push(
    tooltipPositions.includes(position) ? position : tooltipPositions[0]
  );

  return (
    <StyledTooltip className={classes.join(" ")}>
      <div
        role="presentation"
        className="tip"
        onClick={(e) => e.stopPropagation()}
        onKeyPress={(e) => e.stopPropagation()}
      >
        {title}
      </div>
      {children}
    </StyledTooltip>
  );
};

Tooltip.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  position: PropTypes.oneOf(tooltipPositions),
};

Tooltip.defaultProps = {
  position: "top",
  children: null,
  title: "",
};

export default Tooltip;
