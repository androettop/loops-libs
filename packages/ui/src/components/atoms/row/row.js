import React from "react";
import PropTypes from "prop-types";
import StyledRow from "./row.styles";

const Row = ({ alignItems, justifyContent, noGutters, ...props }) => (
  <StyledRow
    alignItems={alignItems}
    justifyContent={justifyContent}
    noGutters={noGutters}
    {...props}
  />
);

Row.propTypes = {
  alignItems: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
  justifyContent: PropTypes.oneOf(["flex-start", "center", "flex-end"]),
  noGutters: PropTypes.bool,
};

Row.defaultProps = {
  alignItems: "flex-start",
  justifyContent: "flex-start",
  noGutters: false,
};

export default Row;
