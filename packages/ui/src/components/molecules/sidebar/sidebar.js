import React from "react";
import PropTypes from "prop-types";
import Heading from "../../atoms/heading/heading";
import Button from "../../atoms/button/button";
import classNames from "../../../utils/className";
import {
  StyledSidebar,
  StyledBackdrop,
  StyledSidebarContainer,
} from "./sidebar.styles";

const Sidebar = ({
  isOpen,
  left,
  backdrop,
  collapseButton,
  title,
  children,
  handleClose,
  handleOpen,
  ...props
}) => (
  <StyledSidebarContainer isOpen={isOpen} left={left}>
    {backdrop && (
      <StyledBackdrop
        className={classNames({ show: isOpen })}
        onClick={handleClose}
      />
    )}

    {collapseButton && (
      <Button
        variant="primary"
        icon={isOpen ? "caretLeft" : "caretRight"}
        onClick={isOpen ? handleClose : handleOpen}
      />
    )}

    <StyledSidebar
      className={classNames({ show: isOpen })}
      left={left}
      {...props}
    >
      {title && <Heading size="4">{title}</Heading>}
      {children}
    </StyledSidebar>
  </StyledSidebarContainer>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  left: PropTypes.number,
  backdrop: PropTypes.bool,
  collapseButton: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
};

Sidebar.defaultProps = {
  isOpen: false,
  left: 0,
  backdrop: true,
  collapseButton: true,
  title: undefined,
  children: null,
  handleClose: undefined,
  handleOpen: undefined,
};

export default Sidebar;
