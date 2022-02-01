import React from "react";
import { Icon, iconList, Row, Col, Segment, Paragraph } from "@loops-ar/ui";
import Doc from "./doc.mdx";
import simpleArgTypes from "../../../utils/argTypes";

const iconNames = Object.keys(iconList);

export default {
  title: "Atoms / Icon",
  component: Icon,
  argTypes: simpleArgTypes({
    name: {
      description: "The icon name.",
      type: iconNames.map((e) => `'${e}'`).join(" | "),
      options: iconNames,
      control: "select",
    },
  }),
  parameters: {
    viewMode: "docs",
    docs: {
      page: Doc,
    },
  },
};

export const AllIcons = () => (
  <Row>
    {Object.keys(iconList).map((name) => (
      <Col xs="auto" key={name}>
        <Segment
          hover
          style={{ width: "140px", height: "100px", textAlign: "center" }}
        >
          <Icon name={name} style={{ fontSize: "24px" }} />
          <Paragraph>{name}</Paragraph>
        </Segment>
      </Col>
    ))}
  </Row>
);
