import "./App.css";
import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {
    text: "Learn react to develop",
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
  let parsedTodos;
  //persistencia con local storage
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  //todos convertidos a json, es decir, array traidos de local storage

  if (localStorageTodos) {
    parsedTodos = JSON.parse(localStorageTodos);
  } else {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  }

  //creamos un estado para el buscador
  const [searchValue, setSearchValue] = React.useState("");
  //todo variable parsedTodos, es el array que se actualiza de local storage
  const [todos, setTodos] = React.useState(parsedTodos);
  
  const todoCompleted = todos.filter((el) => el.completed).length;
  const total = todos.length;
  const searchedTodos = todos.filter((el) =>
  el.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  
  //funcion para modificar el estado y el local storage, parametro=nuevo array a actualizar 
  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem("TODOS_V1",JSON.stringify(newTodos));
  }

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
