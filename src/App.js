
import './App.css';
import  Header from './Mycomponent/Header'
import Footer from "./Mycomponent/Footer";
import TodoItem from "./Mycomponent/TodoItem";
import Todos from "./Mycomponent/Todos"
import { AddTodo } from "./Mycomponent/AddTodo"
import React, { useState } from 'react';
import {About} from './Mycomponent/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  
  const onDelete=(todos)=>{
    // console.log('I am on delete',todo);
    let index=todos.indexOf(todo)
    todo.splice(index,1)
    settodo(todo.filter((e)=>{
return e!=todo
    }))
  }
  const addTodo=(title,desc)=>{
    console.log('I am adding this todo',title,desc);
   let  id=todo[todo.length-1].id+1
    const myTodo={
      id:id,
      title:title,
      desc:desc
    }
    console.log(myTodo);
    // this.todo.push(this.myTodo)
    settodo([...todo,myTodo]);
    localStorage.setItem('todos',JSON.stringify(todo))
  }

  const [todo, settodo] = useState([{
  id:1,
  title:'Among the targeted malls are Marina Mall',
  desc:'Among the targeted malls are Marina Mall, (Chennai), Brookefields Mall (Coimbatore), DB Mall (Bhopal) and Logix Mall (Noida)'
},
{
  id:2,
  title:'ET Prime Membership Benefits',
  desc:'Get a complimentary Times Prime Membership for 1 year worth ₹ 999'
},
{
  id:3,
  title:'Get One Year Docubay Subscription',
  desc:'Stream award-winning international documentaries from more than 100 countries. KNOW MORE'
},
]);
  return (
    <>
    <Router>
 <Header  />
 <div className="row">
   <div className="col-sm-6 mt-4  p-4">
   <Switch>
     
   <Route exact path="/"render={()=>{
     return(
     <>
     <AddTodo addTodo={addTodo}/>
     <div className="col-sm-6  p-4">
     
     <Todos todos={todo} onDelete={onDelete}/>
       </div>
       </>)
   }}>
           
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
         
        </Switch>
  
   </div>
  
 </div>

 {/* <TodoItem/> */}
 <Footer/>
 </Router>
     </>
     
  );
}

export default App;
