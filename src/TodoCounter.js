function TodoCounter(props) {
  return (
    <h1>
        Completaste {props.todoCompleted} de {props.total} TODOs
    </h1>
  )
}

export { TodoCounter }
