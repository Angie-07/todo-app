import './TodoItem.css'

function TodoItem(props) {
  
  const fun = (event) =>{
    console.log(event);
  }
  
  return (
    <li className='todo-item'>
        <div className='div-lista'>
          {/* <input type='checkbox'/> */}
          <span className={`${props.completed ? "completed-todo-icon" : "no-completed-todo-icon"}`} onClick={props.completeTodo}>V</span>
          <p className={`${props.completed && "completed-todo"}`}>{props.text}</p>
        </div>
        <span className='delete' onClick={props.deleteTodo}>X</span>
    </li>
  )
}

export {TodoItem}
