import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function FormTodo() {
  const dispatch = useDispatch();

  const [inputForm, setInputForm] = useState("");

  const inputFormHandler = (event) => {
    setInputForm(event.target.value);
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_TODO", payload: { nama: inputForm, status: false } });
    setInputForm("");
  };

  return (
    <div>
      <form onSubmit={clickSubmit}>
        <input
          onChange={inputFormHandler}
          type="text"
          value={inputForm}
          placeholder="Input Todos"
        ></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
}
