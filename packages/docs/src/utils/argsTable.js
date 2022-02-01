import React, { useMemo } from "react";
import { ListResults, Paragraph, Col, Segment, ThemeProvider } from "@loops-ar/ui";
import PropTypes from "prop-types";

const columns = [
  {
    label: "Name",
    name: "name",
    type: "Paragraph",
    layout: {
      md: 2,
    },
  },
  {
    label: "Type",
    name: "type",
    type: "Paragraph",
    props: {
      style: { color: "#0a2e36" },
      maxLines: 2,
      gradient: false,
    },
    layout: {
      md: 4,
    },
  },
  {
    label: "Default",
    name: "default",
    type: "Paragraph",
    layout: {
      md: 2,
    },
  },
  {
    label: "Description",
    name: "description",
    type: "Paragraph",
    layout: {
      md: 4,
    },
  },
];

const NoDataComponent = () => (
  <Col xs="12">
    <Segment compact>
      <Paragraph style={{ color: "#ec2d43" }}>
        You need to define the component argTypes in the story
      </Paragraph>
    </Segment>
  </Col>
);

export default function ArgsTable({ story }) {
  const formatData = (argTypes) =>
    Object.keys(argTypes).map((typeName) => {
      const type = argTypes[typeName];
      let defaultValue;

      if (typeof type?.defaultValue === "string") {
        defaultValue = `'${type?.defaultValue}'`;
      } else if (typeof type?.defaultValue === "object") {
        defaultValue = JSON.stringify(type?.defaultValue);
      } else {
        defaultValue = `${type?.defaultValue}`;
      }
      return {
        name: `${typeName}${type?.type?.required ? "*" : ""}`,
        type: type?.type?.name,
        default: defaultValue,
        description: type?.description,
      };
    });

  const data = useMemo(() => formatData(story.argTypes), [story]);
  return (
    <ThemeProvider>
      <Paragraph size="2" style={{ marginBottom: "16px" }}>
        <i>Note: Mandatory props are marked with an asterisk</i>
      </Paragraph>
      <ListResults
        columns={columns}
        data={data}
        noDataComponent={NoDataComponent}
        mode="list"
        singleRow
      />
    </ThemeProvider>
  );
}

ArgsTable.propTypes = {
  story: PropTypes.object.isRequired,
};
