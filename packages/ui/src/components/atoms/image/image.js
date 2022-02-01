import React from "react";
import PropTypes from "prop-types";
import StyledImage, { StyledImageContainer } from "./image.styles";
import classNames from "../../../utils/className";

export const imageModes = ["none", "fill", "contain", "cover", "scale-down"];

const Image = ({ fluid, rounded, circle, mode, className, ...props }) => (
  <StyledImageContainer rounded={rounded} circle={circle}>
    {mode !== "cover" ? (
      <StyledImage
        {...props}
        mode="cover"
        className={classNames(className, "blurred", {
          fluid,
          rounded,
          circle,
        })}
      />
    ) : null}
    <StyledImage
      {...props}
      mode={imageModes.includes(mode) ? mode : imageModes[0]}
      className={classNames(className, {
        fluid,
        rounded,
        circle,
      })}
    />
  </StyledImageContainer>
);

Image.propTypes = {
  fluid: PropTypes.bool,
  rounded: PropTypes.bool,
  circle: PropTypes.bool,
  mode: PropTypes.oneOf(imageModes),
  className: PropTypes.string,
};

Image.defaultProps = {
  fluid: false,
  rounded: false,
  circle: false,
  mode: "none",
  className: undefined,
};

export default Image;
