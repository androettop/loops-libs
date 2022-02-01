import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDimensions } from "@loops-ar/hooks";
import Image from "../../atoms/image/image";
import classNames from "../../../utils/className";
import { generateKey } from "../../../utils/listsUtils";
import { utils } from "../../../utils/themeUtils";
import Col from "../../atoms/col/col";
import Row from "../../atoms/row/row";
import Segment from "../../atoms/segment/segment";
import DynamicComponent from "../../molecules/dynamiccomponent/dynamiccomponent";
import { CardHeader, Placeholder, StyledItemResult } from "./itemresult.styles";

const itemResultModes = ["responsive", "card", "list"];

const ItemResult = ({
  columns,
  record,
  imageMode,
  imageField,
  imageDescriptionField,
  onClick,
  disabled,
  mode,
  singleRow,
  selected,
  errorField,
  ...props
}) => {
  const { ref, dimensions } = useDimensions();
  const cardWidth = utils.theme(props)?.card?.width;
  const gridColumns = utils.theme(props)?.gridColumns;

  const itemMode = itemResultModes.includes(mode) ? mode : "responsive";
  const cardMode =
    itemMode === "card" ||
    (itemMode === "responsive" && dimensions.width < cardWidth);
  const [isExpanded, setExpanded] = useState(false);
  const [rows, setRows] = useState([]);
  const isDisabled =
    typeof disabled === "function" ? disabled(record) : !!disabled;

  const hasHoverProps = !!columns?.some((e) => e.hoverProps);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const newRows = [];
    let currentRow;
    for (const column of columns) {
      if (!currentRow || column.newRow) {
        column._row_key = column._row_key || generateKey("row");
        newRows.push({ key: column._row_key, content: [] });
        currentRow = newRows[newRows.length - 1];
      }
      const layout = column.layout || {};
      const compProps = {
        ...column.props,
        ...(isExpanded ? column.hoverProps : {}),
      };

      const handleActions = ["onClick", "disabled"];
      for (const action of handleActions) {
        if (column.props && column.props[action]) {
          compProps[action] = (value) =>
            typeof column.props[action] === "function"
              ? column.props[action](record, value)
              : column.props[action];
        }
      }

      currentRow.content.push(
        <Col key={column.name + record._key} {...layout}>
          <DynamicComponent
            propagate={false}
            type={column.type}
            value={column.name && record[column.name]}
            hideIfUndefined={!!column.name}
            props={compProps}
          />
        </Col>
      );
    }
    setRows(newRows);
  }, [isExpanded, columns, record, onClick]);

  const hasImage = !!record?.[imageField] && !imageError;

  let colXs;
  if (cardMode) {
    colXs = gridColumns;
  } else if (singleRow) {
    colXs = 2;
  } else {
    colXs = 3;
  }

  const variant = record?.[errorField] ? "error" : undefined;

  return (
    <StyledItemResult
      selected={selected}
      onMouseEnter={hasHoverProps ? () => setExpanded(true) : undefined}
      onMouseLeave={hasHoverProps ? () => setExpanded(false) : undefined}
      ref={mode === "responsive" ? ref : undefined}
    >
      <Segment
        compact={singleRow}
        onClick={!isDisabled && onClick ? () => onClick(record) : undefined}
        variant={variant}
        hover
      >
        <Row>
          {imageField && (
            <Col style={!cardMode ? { height: "100%" } : undefined} xs={colXs}>
              <CardHeader
                className={classNames({ cardMode, compact: singleRow })}
              >
                {!hasImage && <Placeholder />}
                {hasImage && (
                  <Image
                    alt={record?.[imageDescriptionField]}
                    onError={() => setImageError(true)}
                    mode={imageMode}
                    src={record[imageField]}
                  />
                )}
              </CardHeader>
            </Col>
          )}
          <Col>
            {rows?.map(({ key, content }) => (
              <Row noGutters alignItems={singleRow && "center"} key={key}>
                {content}
              </Row>
            ))}
          </Col>
        </Row>
      </Segment>
    </StyledItemResult>
  );
};

ItemResult.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      name: PropTypes.string,
      label: PropTypes.string,
      layout: PropTypes.shape(Col.propTypes),
      props: PropTypes.object,
      newRow: PropTypes.bool,
    })
  ),
  record: PropTypes.object.isRequired,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  imageMode: PropTypes.string.isRequired,
  imageField: PropTypes.string,
  singleRow: PropTypes.bool,
  imageDescriptionField: PropTypes.string,
  onClick: PropTypes.func,
  mode: PropTypes.oneOf(itemResultModes),
  selected: PropTypes.bool,
  errorField: PropTypes.string.isRequired,
};

ItemResult.defaultProps = {
  columns: undefined,
  imageField: undefined,
  singleRow: false,
  disabled: false,
  imageDescriptionField: undefined,
  onClick: undefined,
  mode: itemResultModes[0],
  selected: false,
};

export default ItemResult;
