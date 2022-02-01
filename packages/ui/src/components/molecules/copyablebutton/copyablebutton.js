import React, { useState, useCallback } from "react";
import copy from "copy-to-clipboard";
import Button from "../../atoms/button/button";
import Tooltip from "../../atoms/tooltip/tooltip";

const copyMessageTimeout = 3000;

const CopyableButton = ({ value, ...props }) => {
  const { title, position, ...propsNoTitle } = props;
  const [tooltipTitle, setTooltipTitle] = useState(value);

  const copyValue = useCallback(() => {
    try {
      copy(value, {
        format: "text/plain",
        onCopy: () => {
          setTooltipTitle("¡Copiado!");
        },
      });
    } catch {
      setTooltipTitle("No se pudo copiar");
    }
    const timeout = setTimeout(() => {
      setTooltipTitle(value);
    }, copyMessageTimeout);

    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <Tooltip title={tooltipTitle} position={position}>
      <Button
        {...propsNoTitle}
        onClick={(e) => {
          e.stopPropagation();
          copyValue();
        }}
      />
    </Tooltip>
  );
};

CopyableButton.propTypes = {
  ...Button.propTypes,
  ...Tooltip.propTypes,
};

export default CopyableButton;
