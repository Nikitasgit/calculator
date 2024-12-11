const Result = ({ state }) => {
  return (
    <div className="screen">
      <span className="result">{state.result}</span>
      <span className="calc">
        {state.a && state.a}
        {state.operator && state.operator}
        {state.b && state.b}
      </span>
    </div>
  );
};

export default Result;
