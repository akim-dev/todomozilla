/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  //   reading user input
  function handleChange(e) {
    setName(e.target.value);
    // console.log(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // alert("Submitted");
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label_wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What need to be done
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
