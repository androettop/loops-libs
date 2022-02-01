import React from "react";
import PropTypes from "prop-types";
import Badge from "../../atoms/badge/badge";

export const statusCodes = {
  default: { content: "Default", variant: "neutral" },
  102: { content: "---", variant: "neutral" },
  200: { content: "Publicado", variant: "primary" },
  201: { content: "Creado", variant: "success" },
  202: { content: "Programado", variant: "primary" },
  203: { content: "Asignado", variant: "secondary" },
  204: { content: "En proceso", variant: "primary" },
  205: { content: "---", variant: "neutral" },
  206: { content: "---", variant: "neutral" },
  207: { content: "Anulado", variant: "neutral" },
  404: { content: "Eliminado", variant: "error" },
  503: { content: "Error", variant: "error" },
  1: { content: "Creado", variant: "success" },
  2: { content: "Pendiente", variant: "info" },
  3: { content: "Acción", variant: "success" },
  4: { content: "Publicado", variant: "primary" },
  5: { content: "Despublicada", variant: "neutral" },
  6: { content: "Procesada", variant: "warning" },
  7: { content: "Con errores", variant: "error" },
};

const StatusBadge = ({ code, ...props }) => {
  const status = statusCodes[code.toString()];
  return <Badge {...props} text={status.content} variant={status.variant} />;
};

StatusBadge.propTypes = {
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StatusBadge;
