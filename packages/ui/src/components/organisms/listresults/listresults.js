import React from "react";
import PropTypes from "prop-types";
import { generateKey } from "../../../utils/listsUtils";
import Col from "../../atoms/col/col";
import Row from "../../atoms/row/row";
import Segment from "../../atoms/segment/segment";
import Heading from "../../atoms/heading/heading";
import ItemResult from "../itemresult/itemresult";
import { utils } from "../../../utils/themeUtils";
import { StyledListResultsContainer } from "./listresults.styles";
import classNames from "../../../utils/className";

const ListResults = ({
  columns,
  data,
  noDataComponent,
  layout,
  onClick,
  disabled,
  imageField,
  imageMode,
  imageDescriptionField,
  mode,
  singleRow,
  onSelect,
  selectedItems,
  itemIdentifier,
  errorField,
  ...props
}) => {
  if (onSelect && onClick) {
    throw new Error("No puedes establecer onSelect y onClick al mismo tiempo.");
  }

  const showLabels = singleRow && columns.some((e) => e.label);

  if (data) {
    for (const record of data) {
      if (!record._key) {
        record._key = generateKey(record.id);
      }
    }
  }

  const isItemSelected = (item) =>
    selectedItems?.includes(item?.[itemIdentifier]);

  let itemToRender;
  if (data?.length > 0) {
    itemToRender = data?.map((record) => (
      <Col
        key={record._key}
        xs={utils.themeValue(props, "gridColumns")}
        {...layout}
      >
        <ItemResult
          singleRow={singleRow}
          mode={mode}
          selected={isItemSelected(record)}
          onClick={
            onSelect ? () => onSelect(record?.[itemIdentifier]) : onClick
          }
          disabled={disabled}
          record={record}
          columns={columns}
          imageMode={imageMode}
          imageField={imageField}
          imageDescriptionField={imageDescriptionField}
          errorField={errorField}
        />
      </Col>
    ));
  } else if (noDataComponent) {
    itemToRender = <noDataComponent />;
  } else {
    itemToRender = null;
  }

  return (
    <StyledListResultsContainer className={classNames({ singleRow })}>
      <Row>
        {showLabels && (
          <Col>
            <Segment variant="neutral" compact>
              <Row noGutters>
                {columns?.map((column) => (
                  <Col {...column.layout}>
                    <Heading size="5">{column.label}</Heading>
                  </Col>
                ))}
              </Row>
            </Segment>
          </Col>
        )}
        {itemToRender}
      </Row>
    </StyledListResultsContainer>
  );
};

ListResults.propTypes = {
  data: PropTypes.array,
  columns: ItemResult.propTypes.columns,
  imageField: ItemResult.propTypes.imageField,
  imageMode: PropTypes.string,
  imageDescriptionField: ItemResult.propTypes.imageDescriptionField,
  onClick: ItemResult.propTypes.onClick,
  disabled: ItemResult.propTypes.disabled,
  mode: ItemResult.propTypes.mode,
  singleRow: ItemResult.propTypes.singleRow,
  noDataComponent: PropTypes.node,
  layout: PropTypes.shape(Col.propTypes),
  onSelect: PropTypes.func,
  selectedItems: PropTypes.array,
  itemIdentifier: PropTypes.string,
  errorField: PropTypes.string,
};

ListResults.defaultProps = {
  data: undefined,
  columns: undefined,
  imageField: undefined,
  imageMode: "contain",
  imageDescriptionField: undefined,
  onClick: undefined,
  disabled: false,
  mode: undefined,
  singleRow: false,
  noDataComponent: null,
  layout: undefined,
  onSelect: undefined,
  selectedItems: [],
  itemIdentifier: "id",
  errorField: "error",
};

export default ListResults;
