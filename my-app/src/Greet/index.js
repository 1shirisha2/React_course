import React from 'react'
import "./index.css"
function Greet() {
    const addMyName=(event)=>{

console.log(event.target.value)
    }
  return (
    
    <div className='container'>
        <h1 className = "name">Search</h1>
        <input onChange={addMyName} className = "index" type = "text" placeholder ="Enter the text.."/>
        <h1>shirisha</h1>
       <h1 className = "name2">sahanvi</h1>
    </div>
  )
}


export default Greet;