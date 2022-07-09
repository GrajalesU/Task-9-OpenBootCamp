import { ACTIVE, ALL, COMPLETED } from "../actions/filterActions";
import { useTodoState } from "../context/TodoContext";
import Todo from "./Todo";

const TodoList = () => {
  const { todos, filter } = useTodoState();
  const filteredTodos = todos.filter((todo) => {
    if (filter === ALL) {
      return true;
    } else if (filter === ACTIVE) {
      return !todo.completed;
    } else if (filter === COMPLETED) {
      return todo.completed;
    }
  });
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
