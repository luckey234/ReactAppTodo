import React from 'react'
import TodoItem from '../Mycomponent/TodoItem'

export default function Todos(props) {
  return (
    <div className="container">
        <h5 className='text-center my-3 p-3'><b>todos list</b></h5>
        {props.todos.map((todo)=>{
            
           return <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete}/>
        })}
    
    </div>
  )
}
