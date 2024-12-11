import React from "react";

const ButtonNum = ({ num, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {num}
    </button>
  );
};

export default ButtonNum;
