import React from "react";
import TodoContextProvider from "./context/TodoContextProvider";
import TodoList from "./components/todo/TodoList";
import TodoAdd from "./components/todo/TodoAdd";

const AppTodo = () => {
  return (
    <TodoContextProvider>
      <TodoList />
      <TodoAdd />
    </TodoContextProvider>
  );
};

export default AppTodo;
