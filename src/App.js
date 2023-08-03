import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

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
  //creamos un estado para el buscador
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);

  const todoCompleted = todos.filter((el) => el.completed).length;
  const total = todos.length;
  const searchedTodos = todos.filter(el=>el.text.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <React.Fragment>
      <TodoCounter todoCompleted={todoCompleted} total={total} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((el) => (
          <TodoItem key={el.text} text={el.text} completed={el.completed} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
