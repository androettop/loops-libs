import React from "react";
import PropTypes from "prop-types";
import { StyledPagination } from "./pagination.styles";
import Button from "../../atoms/button/button";

const Pagination = ({ changePage, totalPages, currentPage }) => {
  const MAX_BUTTONS = 3;
  const buttons = [];

  if (currentPage === 1) {
    for (let i = currentPage; i <= MAX_BUTTONS && i <= totalPages; i += 1) {
      buttons.push(i);
    }
  } else if (currentPage === totalPages) {
    for (let i = currentPage; i > 0 && buttons.length < MAX_BUTTONS; i -= 1) {
      buttons.unshift(i);
    }
  } else {
    for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
      buttons.push(i);
    }
  }

  const handleClick = (page) => {
    if (page <= totalPages && page >= 1 && page !== currentPage) {
      changePage(page);
    }
  };

  return (
    <StyledPagination>
      <Button icon="caretsLeft" onClick={() => handleClick(1)} />
      <Button
        icon="caretLeft"
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
      />

      {buttons?.map((btn) => (
        <Button
          text={btn}
          variant={btn === currentPage ? "primary" : "neutral"}
          onClick={() => handleClick(btn)}
        />
      ))}

      <Button
        icon="caretRight"
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
      />
      <Button icon="caretsRight" onClick={() => handleClick(totalPages)} />
    </StyledPagination>
  );
};

Pagination.propTypes = {
  changePage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
