import React from "react";
import "../02-useEffect/effect.css";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
export const MultipleCustomHook = () => {
  const { counter, increment } = useCounter(1);
  const { data, error, loading } = useFetch(
    `https://breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];
  return (
    <div>
      <h1>Breaking Bad quotes</h1>
      <hr />
      <div className="row">
        {loading ? (
          <div className="alert alert-info text-center">Loading....</div>
        ) : (
          <blockquote className="blockquote float-end">
            <p className="mb-2">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )}
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
