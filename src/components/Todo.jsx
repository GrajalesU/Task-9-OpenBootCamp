import React from "react";
import { TOGGLE_TODO } from "../actions/todoActions";
import { useTodoDispatch } from "../context/TodoContext";
const Todo = ({ todo }) => {
  const dispatch = useTodoDispatch();
  const toggleTodo = () => {
    dispatch({ type: TOGGLE_TODO, id: todo.id });
  };

  return (
    <li
      key={todo.id}
      onClick={toggleTodo}
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "#8FA013" : "black",
        cursor: "pointer",
        fontSize: "1.5rem",
      }}
    >
      {todo.text}
    </li>
  );
};

export default Todo;
