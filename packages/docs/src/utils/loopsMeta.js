import React from "react";
import { Paragraph, Badge, ThemeProvider, Row, Col } from "@loops-ar/ui";
import PropTypes from "prop-types";

export default function LoopsMeta({ author, readingTime }) {
  const tags = [
    {
      label: "Reading time",
      value: `${readingTime} minute${readingTime > 1 ? "s" : ""}`,
      variant: "info",
      key: "reading-time",
    },
    {
      label: "Author",
      value: author,
      key: "author",
    },
  ];

  return (
    <ThemeProvider>
      <Row style={{ marginBottom: "16px" }} noGutters>
        {tags.map((tag) => (
          <Col xs="auto" key={tag?.key} style={{ marginRight: "8px" }}>
            <Paragraph>
              <b>{tag.label}</b>:{" "}
              <Badge type="pill" variant={tag.variant} text={tag.value} />
            </Paragraph>
          </Col>
        ))}
      </Row>
    </ThemeProvider>
  );
}

LoopsMeta.propTypes = {
  author: PropTypes.string,
  readingTime: PropTypes.number,
};

LoopsMeta.defaultProps = {
  author: "The same of the commit",
  readingTime: 5,
};
