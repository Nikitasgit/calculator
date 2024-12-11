import React from "react";

const Screen = ({ total, operation }) => {
  return (
    <div className="screen">
      <h2>{total}</h2>
      <h4>{operation}</h4>
    </div>
  );
};

export default Screen;
