import React, { useState } from "react";
import "../02-useEffect/effect.css";
import { MultipleCustomHook } from "../03-examples/MultipleCustomHook";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>RealExampleRef</h1>
      <hr />
      {show && <MultipleCustomHook />}
      <button className="btn btn-info mt-5" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </div>
  );
};
