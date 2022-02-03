import React from "react";
import { useCounter } from "../hooks/useCounter";
import "./counter.css";
//? Inicio

export const CounterWithCustomHook = () => {
  const { state, reset, increment, decrement } = useCounter();
  return (
    <>
      <h1>Counter With CustomHook: {state}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      &nbsp;
      <button className="btn" onClick={reset}>
        Reset
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        -1
      </button>
    </>
  );
};
