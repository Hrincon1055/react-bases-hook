import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import "../02-useEffect/effect.css";
import { useCounter } from "../hooks/useCounter";

export const MenoHook = () => {
  const [show, setShow] = useState(true);
  const { counter, increment } = useCounter(5000);

  const menpProceso = useMemo(() => procesoPesado(counter), [counter]);
  return (
    <div>
      <h1> MenoHook</h1>
      <h3>Counter: {counter}</h3>
      <hr />
      <p>{menpProceso}</p>
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
      <button onClick={() => setShow(!show)} className="btn btn-info">
        Show/Hiden {JSON.stringify(show)}
      </button>
    </div>
  );
};
