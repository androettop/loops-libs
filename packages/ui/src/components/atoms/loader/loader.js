import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  RingLoader,
  RippleLoader,
  SpinnerLoader,
} from "./loader.styles";

export const loaderTypes = ["ring", "spinner", "ripple"];

const Loader = ({ type, size, center, ...props }) => {
  if (!loaderTypes.includes(type)) return <></>;

  const types = {
    ring: <RingLoader size={size} {...props} />,
    ripple: (
      <RippleLoader size={size} {...props}>
        <div />
        <div />
      </RippleLoader>
    ),
    spinner: (
      <SpinnerLoader size={size} {...props}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </SpinnerLoader>
    ),
  };

  return <Wrapper center={center}>{types[type]}</Wrapper>;
};

Loader.propTypes = {
  size: PropTypes.number,
  type: PropTypes.oneOf(loaderTypes),
  center: PropTypes.bool,
};

Loader.defaultProps = {
  size: 50,
  type: "ring",
  center: true,
};

export default Loader;
