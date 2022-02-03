import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import "./effect.css";

export const FormWithCustomHook = () => {
  const { values, handleInputChange } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = values;
  useEffect(() => {
    console.log("Email cambio");
  }, [email]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control mb-4"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control mb-4"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="password"
          className="form-control mb-4"
          placeholder="******"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};
