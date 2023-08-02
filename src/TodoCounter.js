import './TodoCounter.css';

function TodoCounter(props) {
  return (
    <h1>
        You have completed {props.todoCompleted} of {props.total} TODOs
    </h1>
  )
}

export { TodoCounter }
