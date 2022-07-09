import { createContext, useReducer, useContext } from "react";
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_FILTER,
} from "../actions/todoActions";
import { ALL } from "../actions/filterActions";
let IDS = 0;
const INITIAL_STATE = {
  todos: [
    {
      id: IDS++,
      text: "first todo",
      completed: false,
    },
  ],
  filter: ALL,
};

const TodoStateContext = createContext(INITIAL_STATE);
const TodoDispatchContext = createContext();

function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: IDS++,
            text: action.text,
            completed: false,
          },
        ],
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.filter,
      };

    default:
      return state;
  }
}

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context)
    throw new Error("useTodoState must be used within a TodoProvider");
  return context;
}

function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context)
    throw new Error("useTodoDispatch must be used within a TodoProvider");
  return context;
}

export { TodoProvider, useTodoState, useTodoDispatch };