import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSidebarPosition } from "@loops-ar/hooks";
import { actionButtons } from "../../../utils/actionButtons";
import { generateKey } from "../../../utils/listsUtils";
import Button from "../../atoms/button/button";
import SidebarItem from "../../atoms/sidebaritem/sidebaritem";
import Sidebar from "../../molecules/sidebar/sidebar";
import { StyledFormActions } from "./formactions.styles";

const FormActionButton = ({ type, visible, ...btnProps }) => {
  const { icon, ...props } = actionButtons[type] || {};
  return <Button {...props} {...btnProps} />;
};

FormActionButton.propTypes = {
  type: PropTypes.oneOf(Object.keys(actionButtons)).isRequired,
  visible: PropTypes.bool,
};

FormActionButton.defaultProps = {
  visible: true,
};

const FormActionSidebarItem = ({ type, visible, ...btnProps }) => {
  const { ...props } = actionButtons[type] || {};
  return <SidebarItem {...props} {...btnProps} />;
};

FormActionSidebarItem.propTypes = FormActionButton.propTypes;
FormActionSidebarItem.defaultProps = FormActionButton.defaultProps;

const FormAction = ({ actions, alwaysVisible }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarPosition = useSidebarPosition();
  const handleClick = (onClick) => {
    if (typeof onClick === "function") {
      onClick();
    }
    setSidebarOpen(false);
  };
  for (const action of actions) {
    if (!action._key) {
      action._key = generateKey("action");
    }
  }
  const visibleActions = actions.filter((e) => e.visible);
  return (
    <>
      {visibleActions.length > 2 ? (
        <>
          <Sidebar
            left={sidebarPosition}
            handleClose={() => setSidebarOpen(false)}
            handleOpen={() => setSidebarOpen(true)}
            title="Acciones"
            isOpen={sidebarOpen}
          >
            {visibleActions.map(({ _key, onClick, ...action }) => (
              <FormActionSidebarItem
                {...action}
                key={_key}
                onClick={() => handleClick(onClick)}
              />
            ))}
          </Sidebar>
          <StyledFormActions>
            <Button
              text="Acciones"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              variant="primary"
            />
            {visibleActions
              ?.filter((e) => alwaysVisible.includes(e.type))
              ?.map(({ _key, ...action }) => (
                <FormActionButton key={_key} {...action} />
              ))}
          </StyledFormActions>
        </>
      ) : (
        <StyledFormActions>
          {visibleActions
            ?.filter((e) => e.visible)
            .map(({ _key, ...action }) => (
              <FormActionButton key={_key} {...action} />
            ))}
        </StyledFormActions>
      )}
    </>
  );
};

FormAction.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.object).isRequired,
  alwaysVisible: PropTypes.arrayOf(PropTypes.string),
};

FormAction.defaultProps = {
  alwaysVisible: ["save"],
};

export default FormAction;
