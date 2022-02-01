import React from "react";
import Button from "../../atoms/button/button";
import Tooltip from "../../atoms/tooltip/tooltip";

const TooltipButton = ({ title, position, ...props }) => (
  <Tooltip title={title} position={position}>
    <Button {...props} />
  </Tooltip>
);

TooltipButton.propTypes = {
  ...Button.propTypes,
  ...Tooltip.propTypes,
};

export default TooltipButton;
