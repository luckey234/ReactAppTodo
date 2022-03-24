import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title,setTitle]=useState ("") ;
    const [desc,setDesc]=useState ("") ;
    const submit=(e)=>{
e.preventDefault();
if(!title || !desc){
    alert("title or description cannot be blank")
}
props.addTodo(title,desc);


    }
  return (
    <div>
        <form onSubmit={submit}>
            <h5 className='text-center'><b>Add a Todo</b></h5>
  <div className="form-group">
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" value={title } 
    onChange={(e)=>{
        setTitle(e.target.value)
    }} id="title"/>
 
  </div>
  <div className="form-group">
    <label htmlFor="desc">Description</label>
    <input type="text" value={desc} className="form-control" id="desc"
     onChange={(e)=>{
        setDesc(e.target.value)
    }}/>
  </div>

  <button type="submit" className="btn btn-success btn-sm mt-3">Add Todo</button>
</form>

    </div>
  )
}
