import React from "react";
import PropTypes from "prop-types";
import classNames from "../../../utils/className";
import StyledHeading from "./heading.styles";

const Heading = ({ size, children, maxLines, ...props }) => {
  const secureSize =
    parseInt(size, 10) >= 1 && parseInt(size, 10) <= 6 ? parseInt(size, 10) : 1;
  return (
    <StyledHeading
      {...props}
      as={`h${secureSize}`}
      className={classNames(`h${secureSize}`, { limit: maxLines > 0 })}
      maxLines={maxLines}
    >
      {children}
    </StyledHeading>
  );
};

Heading.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  ]),
  children: PropTypes.node,
  maxLines: PropTypes.number,
};

Heading.defaultProps = {
  size: 1,
  children: null,
  maxLines: undefined,
};

export default Heading;
