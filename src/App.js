import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";

const defaultTodos = [
  {
    text: "Go to the supermarket",
    completed: true,
  },
  {
    text: "Go to the gym",
    completed: false,
  },
  {
    text: "Clean my house",
    completed: false,
  },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter todoCompleted={12} total={20} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((el) => (
          <TodoItem key={el.text} text={el.text} completed={el.completed} />
        ))}
      </TodoList>
    </React.Fragment>
  );
}

export default App;
