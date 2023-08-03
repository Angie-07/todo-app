import "./TodoItem.css";
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";

function TodoItem(props) {
  return (
    <li className="todo-item">
      <div className="div-lista">
        <CompleteIcon
          completed={props.completed}
          completeTodo={props.completeTodo}
        />
        <p className={`${props.completed && "completed-todo"}`}>{props.text}</p>
      </div>
      <DeleteIcon deleteTodo={props.deleteTodo} />
    </li>
  );
}

export { TodoItem };
