import "./TodoCounter.css";

function TodoCounter({ todoCompleted, total }) {
  return (
    <h1 className="todo-counter">
      You have completed {todoCompleted} of {total} TODOs
    </h1>
  );
}

export { TodoCounter };
