import React from 'react'

export default function TodoItem({todo,onDelete}) {

  return (
    <div >
   
      
      <div className="card m-2 p-3">
      <h6> {todo.title}</h6>
      <h6>{todo.desc}</h6>
      <button className="btn btn-primary  " onClick={()=>
        {onDelete(todo)}}>Delete</button>
      </div>
 
   
     
    </div>
    
  )
}
