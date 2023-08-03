import './TodoItem.css'

function TodoItem(props) {
  return (
    <li className='todo-item'>
        <div className='div-lista'>
          {/* <input type='checkbox'/> */}
          <span className={`${props.completed ? "completed-todo-icon" : "no-completed-todo-icon"}`}>V</span>
          <p className={`${props.completed && "completed-todo"}`}>{props.text}</p>
        </div>
        <span className='eliminar'>X</span>
    </li>
  )
}

export {TodoItem}
