import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

function CompleteIcon(props) {
  return (
    <span
      className={`${
        props.completed ? "completed-todo-icon" : "no-completed-todo-icon"
      }`}
      onClick={props.completeTodo}
    >
      <AiOutlineCheckCircle />
    </span>
  );
}

export { CompleteIcon };
