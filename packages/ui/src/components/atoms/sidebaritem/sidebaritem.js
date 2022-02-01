import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "../../../utils/className";
import Icon, { iconList } from "../icon/icon";
import { StyledSidebarItem, SubMenuCollapsable } from "./sidebaritem.styles";

const SidebarItem = ({
  text,
  onClick,
  active,
  icon,
  type = "button",
  children,
  withLine,
  ...props
}) => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const hasChildren = !!children;

  const handleClick = () => {
    if (hasChildren) {
      setSubMenuOpen(!isSubMenuOpen);
    }
    onClick();
  };

  return (
    <>
      <StyledSidebarItem
        {...props}
        hasIcon={!!icon}
        type={type}
        title={text}
        className={classNames({ active, withLine })}
        onClick={handleClick}
      >
        {icon ? <Icon name={icon} /> : null}
        <span>
          <span>{text}</span>
        </span>

        {hasChildren && (
          <Icon
            className="caret"
            name={isSubMenuOpen ? "caretDown" : "caretRight"}
          />
        )}
      </StyledSidebarItem>

      {hasChildren && (
        <SubMenuCollapsable className={classNames({ show: isSubMenuOpen })}>
          {children}
        </SubMenuCollapsable>
      )}
    </>
  );
};

SidebarItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(iconList)),
  type: PropTypes.string,
  children: PropTypes.node,
  withLine: PropTypes.bool,
};

SidebarItem.defaultProps = {
  type: "button",
  onClick: () => {},
  active: false,
  icon: undefined,
  children: null,
  withLine: false,
};

export default SidebarItem;
