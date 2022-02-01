import React from "react";
import PropTypes from "prop-types";
import Container from "../../atoms/container/container";
import Row from "../../atoms/row/row";
import Col from "../../atoms/col/col";
import Segment from "../../atoms/segment/segment";
import {
  StyledDashboardFacets,
  StyledDashboardHeader,
  StyledDashboardPagination,
  StyledDashboardResults,
  StyledDashboardSearch,
  StyledDashboardTemplate,
} from "./dashboardtemplate.styles";

const byTag = (tag) => (e) => e?.type?.tag === tag;

const DashboardTemplate = ({ children, oneColumn }) => {
  const childrenArray = React.Children.toArray(children);
  const header = childrenArray.find(byTag("header"));
  const search = childrenArray.find(byTag("search"));
  const facets = childrenArray.find(byTag("facets"));
  const results = childrenArray.find(byTag("results"));
  const pagination = childrenArray.find(byTag("pagination"));

  return (
    <StyledDashboardTemplate>
      <Container>
        <Row>
          <Col>
            <Segment>{header}</Segment>
          </Col>
        </Row>
        <Row>
          <Col>
            <Segment>{search}</Segment>
          </Col>
        </Row>
        <Row>
          {!oneColumn && (
            <Col
              xs={{
                display: "none",
              }}
              md={{
                display: "block",
                size: "4",
              }}
              lg={{
                display: "block",
                size: "3",
              }}
            >
              {facets}
            </Col>
          )}

          {!oneColumn && (
            <Col
              xs={{
                size: "12",
                display: "block",
              }}
              md={{
                display: "none",
              }}
            >
              {facets}
            </Col>
          )}

          <Col>
            <Row>
              <Col>{results}</Col>
            </Row>
            <Row>
              <Col>{pagination}</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </StyledDashboardTemplate>
  );
};

DashboardTemplate.Header = StyledDashboardHeader;
DashboardTemplate.Header.tag = "header";

DashboardTemplate.Search = StyledDashboardSearch;
DashboardTemplate.Search.tag = "search";

DashboardTemplate.Facets = StyledDashboardFacets;
DashboardTemplate.Facets.tag = "facets";

DashboardTemplate.Results = StyledDashboardResults;
DashboardTemplate.Results.tag = "results";

DashboardTemplate.Pagination = StyledDashboardPagination;
DashboardTemplate.Pagination.tag = "pagination";

DashboardTemplate.propTypes = {
  children: PropTypes.node,
  oneColumn: PropTypes.bool,
};

DashboardTemplate.defaultProps = {
  children: null,
  oneColumn: false,
};

export default DashboardTemplate;
