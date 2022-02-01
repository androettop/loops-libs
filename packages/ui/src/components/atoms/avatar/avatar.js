import React from "react";
import PropTypes from "prop-types";
import StyledAvatar from "./avatar.styles";
import classNames from "../../../utils/className";
import Icon from "../icon/icon";

const Avatar = ({
  letters,
  name,
  image,
  icon,
  size = "medium",
  variant = "neutral",
  shape = "circle",
  ...props
}) => {
  let text;
  if (letters) {
    text = letters;
  } else if (name) {
    text = name
      .split(" ")
      .map((e) => e.substring(0, 1))
      .slice(0, 2)
      .join("");
  }

  return (
    <StyledAvatar
      title={name}
      image={image}
      {...props}
      className={classNames(
        `avatar-${variant}`,
        `shape-${shape}`,
        `size-${size}`
      )}
    >
      {image && <img src={image} alt={name || text} />}
      {text && <span>{text}</span>}
      {icon && <Icon name={icon} />}
    </StyledAvatar>
  );
};

Avatar.propTypes = {
  letters: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
  shape: PropTypes.string,
};

Avatar.defaultProps = {
  letters: "",
  name: "",
  image: "",
  icon: "",
  size: "medium",
  variant: "neutral",
  shape: "circle",
};

export default Avatar;
