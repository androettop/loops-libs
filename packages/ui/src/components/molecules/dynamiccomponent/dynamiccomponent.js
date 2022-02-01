import React from "react";
import Avatar from "../../atoms/avatar/avatar";
import Badge from "../../atoms/badge/badge";
import Button from "../../atoms/button/button";
import Heading from "../../atoms/heading/heading";
import Image from "../../atoms/image/image";
import Paragraph from "../../atoms/paragraph/paragraph";
import Separator from "../../atoms/separator/separator";
import StatusBadge from "../statusbadge/statusbadge";
import CopyableButton from "../copyablebutton/copyablebutton";
import TooltipButton from "../tooltipbutton/tooltipbutton";
import ToggleSwitch from "../../atoms/toggleswitch/toggleswitch";

/**
 * This is the list of componentes ready to use with dynamic components.
 * The element in the value props array is the property where the value
 * should be setted.
 *
 * If there is more than one property, the value is setted to the first
 * one unless it already has a value in additional props.
 */
const availableComponents = {
  Badge: {
    component: Badge,
    valueProps: ["text"],
  },
  ToggleSwitch: {
    component: ToggleSwitch,
    valueProps: ["value"],
  },
  StatusBadge: {
    component: StatusBadge,
    valueProps: ["code"],
  },
  Heading: {
    component: Heading,
    valueProps: ["children"],
  },
  Paragraph: {
    component: Paragraph,
    valueProps: ["children"],
  },
  Button: {
    component: Button,
    valueProps: ["text"],
  },
  Separator: {
    component: Separator,
  },
  TooltipButton: {
    component: TooltipButton,
    valueProps: ["text", "title"],
  },
  CopyableButton: {
    component: CopyableButton,
    valueProps: ["value"],
  },
  Image: {
    component: Image,
    valueProps: ["src"],
  },
  Avatar: {
    component: Avatar,
    valueProps: ["image", "name", "letters"],
  },
};

const DynamicComponent = ({
  type,
  value,
  propagate = true,
  hideIfUndefined,
  props: additionalProps = {},
}) => {
  const components = [];

  // get the component config
  let component = availableComponents[type];

  // get default config if component is not defined
  if (!component) {
    component = {
      component: React.Fragment,
      valueProps: ["children"],
    };
  }

  // component alias to Render
  const Comp = component.component;

  let values;

  if (Array.isArray(value)) {
    values = value;
  } else if (hideIfUndefined && typeof value === "undefined") {
    values = [];
  } else {
    values = [value];
  }

  const props = { ...additionalProps };

  for (const individualValue of values) {
    // setting the prop value
    if (component.valueProps) {
      for (const prop of component.valueProps) {
        if (!Object.getOwnPropertyDescriptor(additionalProps, prop)) {
          props[prop] = individualValue;
          break;
        }
      }
    }

    const handleActions = ["onClick"];
    const handleActionValues = ["disabled"];

    const actionsProps = {};
    for (const action of handleActions) {
      actionsProps[action] = props[action];
      if (typeof props[action] === "function") {
        actionsProps[action] = (e) => {
          if (!propagate && e?.stopPropagation) {
            e.stopPropagation();
          }
          return props[action](individualValue);
        };
      }
    }

    for (const action of handleActionValues) {
      actionsProps[action] = props[action];
      if (typeof props[action] === "function") {
        actionsProps[action] = props[action](individualValue);
      }
    }
    components.push(<Comp {...props} {...actionsProps} />);
  }

  // TODO: add key props
  return components;
};

export default DynamicComponent;
