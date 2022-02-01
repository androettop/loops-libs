import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { useScrollPosition } from "@loops-ar/hooks";
import { actionButtons } from "../../../utils/actionButtons";
import Breadcrumb, {
  sectionsPropType,
} from "../../atoms/breadcrumb/breadcrumb";
import Button from "../../atoms/button/button";
import Col from "../../atoms/col/col";
import Heading from "../../atoms/heading/heading";
import Row from "../../atoms/row/row";
import { StyledHeader } from "./header.styles";
import classNames from "../../../utils/className";
import { defaultTheme } from "../../../utils/themeUtils";

const HeaderAction = ({ type, ...btnProps }) => {
  const { icon, ...props } = actionButtons[type] || {};
  return <Button {...props} {...btnProps} />;
};

HeaderAction.propTypes = {
  type: PropTypes.oneOf(Object.keys(actionButtons)).isRequired,
};

const Header = ({ title, sections, actions = [] }) => {
  // TODO: Si se cambia el marco hay que modificar este id.
  const { top: scrollTop } = useScrollPosition("content2");
  const navBarHeight = Number(
    defaultTheme?.header?.height.split("px")?.[0] || 64
  );

  const isFixed = useMemo(() => scrollTop > navBarHeight + 32, [scrollTop]);

  return (
    <StyledHeader isFixed={isFixed}>
      <Row
        alignItems="center"
        className={classNames("fixed", { show: isFixed })}
      >
        <Col>
          <Heading size="2">{title}</Heading>
          <Breadcrumb sections={sections} />
        </Col>
        <Col xs="auto">
          {actions?.map((action) => (
            <HeaderAction key={action.type} {...action} />
          ))}
        </Col>
      </Row>

      <Row alignItems="center" className={classNames({ show: !isFixed })}>
        <Col>
          <Heading size="2">{title}</Heading>
          <Breadcrumb sections={sections} />
        </Col>
        <Col xs="auto">
          {actions?.map((action) => (
            <HeaderAction key={action.type} {...action} />
          ))}
        </Col>
      </Row>
    </StyledHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  sections: sectionsPropType.isRequired,
  actions: PropTypes.arrayOf(PropTypes.object),
};

Header.defaultProps = {
  actions: [],
};

export default Header;
