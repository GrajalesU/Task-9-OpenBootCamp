import React from "react";
import { useRef } from "react";
import { ADD_TODO } from "../actions/todoActions";
import { useTodoDispatch } from "../context/TodoContext";

const TodoForm = () => {
  const dispatch = useTodoDispatch();
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_TODO, text: form.current[0].value });
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <h2>Create new task</h2>
      <label htmlFor="text">Text</label>
      <input type="text" id="text" required/>
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
