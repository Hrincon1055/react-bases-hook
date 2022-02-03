import React, { useLayoutEffect, useRef, useState } from "react";
import "./layout.css";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];
  const [boxSize, setBoxSize] = useState({});
  const pTag = useRef();
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect </h1>
      <hr />
      <div className="row">
        <blockquote className="blockquote float-end">
          <p ref={pTag} className="mb-2">
            {quote}
          </p>
        </blockquote>
        <pre>{JSON.stringify(boxSize, null, 2)}</pre>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn btn-primary" onClick={increment}>
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};
