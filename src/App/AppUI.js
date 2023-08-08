import React, { useState } from "react";
import { TodoCounter } from "../TodoCounter/index";
import { TodoSearch } from "../TodoSearch/index";
import { TodoList } from "../TodoList/index";
import { TodoItem } from "../TodoItem/index";
import { CreateTodoButton } from "../CreateTodoButton/index";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   {
//     text: "Learn react to develop",
//     completed: true,
//   },
//   {
//     text: "Go to the gym",
//     completed: false,
//   },
//   {
//     text: "Clean my house",
//     completed: false,
//   },
// ];

function App() {
  //todo variable parsedTodos, es el array que se actualiza de local storage
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  //todo variable parsedTodos, es el array que se actualiza de local storage
  // const [todos, setTodos] = React.useState(parsedTodos);

  //creamos un estado para el buscador
  const [searchValue, setSearchValue] = React.useState("");

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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex((el) => el.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
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
