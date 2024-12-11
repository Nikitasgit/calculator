import React from "react";
import ButtonNum from "./ButtonNum";

const numbersValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const ButtonsNum = ({ onNumberClick }) => {
  return (
    <section className="buttons-numbers-container">
      {numbersValues.map((num) => (
        <ButtonNum key={num} num={num} onClick={() => onNumberClick(num)} />
      ))}
    </section>
  );
};

export default ButtonsNum;
