import React from "react";
import PropTypes from "prop-types";
import { StyledModal } from "./modal.styles";
import Segment from "../../atoms/segment/segment";
import Button from "../../atoms/button/button";

const modalSizes = ["sm", "md", "lg"];

const Modal = ({
  children,
  isOpen,
  backdropClose,
  size,
  handleClose,
  ...props
}) => (
  <>
    <StyledModal
      isOpen={isOpen}
      size={size}
      onClick={backdropClose ? handleClose : undefined}
      {...props}
    />
    <Segment>
      <Button
        icon="close"
        mode="link"
        onClick={backdropClose ? handleClose : undefined}
      />
      {children}
    </Segment>
  </>
);

Modal.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool,
  backdropClose: PropTypes.bool,
  handleClose: PropTypes.func,
  size: PropTypes.oneOf(modalSizes),
};

Modal.defaultProps = {
  children: undefined,
  isOpen: false,
  backdropClose: true,
  handleClose: () => {},
  size: "md",
};

export default Modal;
