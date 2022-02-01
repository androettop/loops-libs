import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  StyledBreadcrumb,
  StyledBreadcrumbSection,
  StyledBreadcrumbSeparator,
} from "./breadcrumb.styles";

const Breadcrumb = ({ sections = [], ...props }) => (
  <StyledBreadcrumb {...props}>
    {sections?.map((section, i) => {
      const components = [];
      const isLastSection = i === sections.length - 1;

      if (section.url && !isLastSection) {
        components.push(
          <StyledBreadcrumbSection key={section.label}>
            <Link to={section.url}>{section.label}</Link>
          </StyledBreadcrumbSection>
        );
      } else {
        components.push(
          <StyledBreadcrumbSection key={section.label}>
            {section.label}
          </StyledBreadcrumbSection>
        );
      }

      if (!isLastSection) {
        components.push(
          <StyledBreadcrumbSeparator key={`_${section.label}`} />
        );
      }

      return components;
    })}
  </StyledBreadcrumb>
);

export const sectionsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    url: PropTypes.string,
  })
);

Breadcrumb.propTypes = {
  sections: sectionsPropType.isRequired,
};

Breadcrumb.defaultProps = {};

export default Breadcrumb;
