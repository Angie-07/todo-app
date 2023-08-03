import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

function DeleteIcon(props) {
  return (
    <div>
      <span className="delete" onClick={props.deleteTodo}>
        <AiOutlineCloseCircle/>
      </span>
    </div>
  )
}

export { DeleteIcon }
