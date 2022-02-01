import React from "react";
import PropTypes from "prop-types";
import ReactHtmlParser from "react-html-parser";
import classNames from "../../../utils/className";
import StyledParagraph from "./paragraph.styles";

export const paragraphSizes = [1, 2];

const Paragraph = ({
  size,
  maxLines,
  gradient,
  parseHtml,
  children,
  ...props
}) => {
  const secureSize = paragraphSizes.includes(parseInt(size, 10))
    ? parseInt(size, 10)
    : 1;
  return (
    <StyledParagraph
      {...props}
      maxLines={maxLines}
      title={maxLines > 0 && typeof children === "string" ? children : ""}
      className={classNames(`p${secureSize}`, {
        limit: maxLines > 0,
        gradient,
      })}
    >
      {parseHtml && typeof children === "string"
        ? ReactHtmlParser(children)
        : children}
    </StyledParagraph>
  );
};

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  size: PropTypes.oneOf([
    ...paragraphSizes,
    ...paragraphSizes.map((s) => s.toString()),
  ]),
  maxLines: PropTypes.number,
  gradient: PropTypes.bool,
  parseHtml: PropTypes.bool,
};

Paragraph.defaultProps = {
  children: undefined,
  size: 1,
  maxLines: undefined,
  gradient: true,
  parseHtml: false,
};

export default Paragraph;
