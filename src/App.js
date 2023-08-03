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
  const searchedTodos = todos.filter((el) =>
    el.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  //btn completar todo, el identificador key es text
  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((el) => el.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(el=>el.text===text);
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };

  return (
    <React.Fragment>
      <TodoCounter todoCompleted={todoCompleted} total={total} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((el) => (
          <TodoItem
            key={el.text}
            text={el.text}
            completed={el.completed}
            completeTodo={() => completeTodo(el.text)}
            deleteTodo={() => deleteTodo(el.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
