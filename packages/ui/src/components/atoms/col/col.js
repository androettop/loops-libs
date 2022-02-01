/* eslint-disable */
// TODO: Mejorar este código y habilitar eslint
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import StyledCol from "./col.styles";

const sizeToNumberOrAuto = (size) => {
  let parsedSize = size === "auto" ? size : Number(size);
  return Number.isNaN(parsedSize) ? 0 : parsedSize;
};

const normalizeColProps = (breakpoint) => {
  const onlySize = !Number.isNaN(Number(breakpoint)) || breakpoint === "auto";

  const size = onlySize
    ? sizeToNumberOrAuto(breakpoint)
    : sizeToNumberOrAuto(breakpoint?.size);

  let padding;

  let align;

  if (!onlySize) {
    const isGlobalPadding = !Number.isNaN(Number(breakpoint?.padding));
    if (isGlobalPadding) {
      padding = {
        top: breakpoint?.padding,
        right: breakpoint?.padding,
        bottom: breakpoint?.padding,
        left: breakpoint?.padding,
      };
    } else {
      padding = {
        top: breakpoint?.padding?.top,
        right: breakpoint?.padding?.right,
        bottom: breakpoint?.padding?.bottom,
        left: breakpoint?.padding?.left,
      };
    }

    align = breakpoint?.align;
  }

  return {
    size,
    padding,
    align,
  };
};

const Col = ({ xs, sm, md, lg, xl, ...props }) => {
  const normalizedXsProps = useMemo(() => normalizeColProps(xs), [xs]);
  const normalizedSmProps = useMemo(() => normalizeColProps(sm), [sm]);
  const normalizedMdProps = useMemo(() => normalizeColProps(md), [md]);
  const normalizedLgProps = useMemo(() => normalizeColProps(lg), [lg]);
  const normalizedXlProps = useMemo(() => normalizeColProps(xl), [xl]);

  let normalizedProps = {
    xs: normalizedXsProps,
    sm: normalizedSmProps,
    md: normalizedMdProps,
    lg: normalizedLgProps,
    xl: normalizedXlProps,
  };

  return <StyledCol {...normalizedProps} {...props} />;
};

Col.propTypes = {
  className: PropTypes.string,
};

Col.defaultProps = {
  className: "",
};

export default Col;
