import ButtonOperator from "./ButtonOperator";

const ButtonsOperators = ({ onOperatorClick }) => {
  const operators = ["x", "+", "-", "/", "=", "c"];
  return (
    <section className="buttons-operators">
      {operators.map((op) => (
        <ButtonOperator
          key={op}
          value={op}
          onClick={() => onOperatorClick(op)}
        />
      ))}
    </section>
  );
};

export default ButtonsOperators;
