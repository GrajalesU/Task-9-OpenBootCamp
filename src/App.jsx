import { TodoProvider } from "./context/TodoContext";
import TodoList from "./components/TodoList";
import "./App.css";
import TodoFilter from "./components/TodoFilter";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <TodoProvider>
      <TodoList />
      <TodoFilter />
      <TodoForm />
    </TodoProvider>
  );
}

export default App;
