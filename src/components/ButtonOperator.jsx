import React from "react";

const ButtonOperator = ({ value, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {value}
    </button>
  );
};

export default ButtonOperator;
