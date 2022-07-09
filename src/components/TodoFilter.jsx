import React from "react";
import { ACTIVE, ALL, COMPLETED } from "../actions/filterActions";
import { SET_FILTER } from "../actions/todoActions";
import { useTodoDispatch } from "../context/TodoContext";

const TodoFilter = () => {
  const dispatch = useTodoDispatch();
  const handleChange = (filter) => {
    dispatch({ type: SET_FILTER, filter });
  };
  return (
    <div>
      <button onClick={() => handleChange(ALL)}>SHOW ALL</button>
      <button onClick={() => handleChange(COMPLETED)}>SHOW COMPLETED</button>
      <button onClick={() => handleChange(ACTIVE)}>SHOW ACTIVE</button>
    </div>
  );
};

export default TodoFilter;
