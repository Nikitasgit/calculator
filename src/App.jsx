import Result from "./components/Result.jsx";
import ButtonsOperators from "./components/ButtonsOperators.jsx";
import { useEffect, useReducer } from "react";
import ButtonsNum from "./components/ButtonsNum.jsx";

const initialState = {
  result: 0,
  a: null,
  operator: null,
  b: null,
  message: "",
};

const calculateResult = (a, operator, b) => {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "x":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "set_a":
      return { ...state, a: state.a * 10 + action.payload, result: 0 };
    case "set_b":
      return { ...state, b: state.b * 10 + action.payload };
    case "set_operator":
      return { ...state, operator: action.payload };
    case "calc":
      return {
        ...state,
        result: calculateResult(state.a, state.operator, state.b),
      };
    case "reset":
      return action.payload
        ? { ...initialState, a: action.payload }
        : initialState;
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleNumberClick = (num) => {
    if (state.result) {
      return dispatch({ type: "reset", payload: Number(num) });
    }
    if (!state.operator) {
      return dispatch({ type: "set_a", payload: Number(num) });
    } else {
      return dispatch({ type: "set_b", payload: Number(num) });
    }
  };
  const handleOperatorClick = (op) => {
    if (op === "=") {
      dispatch({ type: "calc" });
    } else if (op === "c") {
      dispatch({ type: "reset" });
    } else if (state.a !== null && state.a !== 0) {
      dispatch({ type: "set_operator", payload: op });
    }
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <main className="calculator">
      <Result state={state} />
      <section className="calculator-buttons">
        <ButtonsOperators onOperatorClick={handleOperatorClick} />{" "}
        <ButtonsNum onNumberClick={handleNumberClick} />
      </section>
    </main>
  );
}

export default App;
