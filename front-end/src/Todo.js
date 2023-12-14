import React from 'react'
import {useState} from 'react'
import axios from 'axios'
function Todo() {
    const [data,setNewData]=useState("")

    
    const addTodo = () =>{
     const newData ={
        text:data,
        complete:false
        

     }
     console.log(newData) 
     const response =axios.post("http://localhost:5000/todos",newData) 
    }

  return (
    <div>
        <h1>Todo App</h1>
        <div>
            <input type = "text" placeholder='enter the text' onChange={(e)=>{setNewData(e.target.value)}}/>

          <button onClick={addTodo}>
            Add
          </button>
        </div>
    </div>
   
  )
}

export default Todo;