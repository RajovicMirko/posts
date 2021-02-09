import "./pagination.scss";
import React from "react";
import { generateClassFromObject } from "utils/helpers";

const Arrow = ({ icon, disabledCondition, onClick }) => {
  const classCustom = {
    disabled: disabledCondition,
  };

  return (
    <i
      className={`${icon} ${generateClassFromObject(classCustom)}`}
      onClick={onClick}
    ></i>
  );
};

const defaultProps = {
  dataLength: 0,
  perPage: 10,
  currentPage: 1,
  onClick: () => {},
};

function Pagination(props) {
  const pagesCount = Math.ceil(props.dataLength / props.perPage);

  const handleNumberClick = (event) => props.onClick(parseInt(event.target.id));
  const handleBack = () => props.onClick(props.currentPage - 1);
  const handleForward = () => props.onClick(props.currentPage + 1);

  const numbers = Array.from({ length: pagesCount }, (v, i) => {
    const id = i + 1;
    const classCustom = {
      active: id === props.currentPage,
    };

    return (
      <span
        key={id}
        id={id}
        className={generateClassFromObject(classCustom)}
        onClick={handleNumberClick}
      >
        {id}
      </span>
    );
  });

  return (
    <div className="pagination">
      <Arrow
        icon="fas fa-chevron-left"
        disabledCondition={props.currentPage === 1}
        onClick={handleBack}
      />
      {numbers}
      <Arrow
        icon="fas fa-chevron-right"
        disabledCondition={props.currentPage === pagesCount}
        onClick={handleForward}
      />
    </div>
  );
}

Pagination.defaultProps = defaultProps;
export default Pagination;
