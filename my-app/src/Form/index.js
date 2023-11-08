import { useState } from "react"
import './index.css';


const Form = (props)=> {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phno, setPhno] = useState("");
  const [gender, setGender] = useState("");


  const handleInputChange = (event) =>{
    if(event.target.name==="fname"){
      setFname(event.target.value);
    }else if (event.target.name==="lname"){
      setLname(event.target.value);
    }else if(event.target.name==="email"){
      setEmail(event.target.value);
    }else if(event.target.name==="age"){
      setAge(event.target.value);
    }else if(event.target.name==="phno"){
      setPhno(event.target.value);
    }else if(event.target.name==="gender"){
      setGender(event.target.value);
    }
  }


  // const handleFnameInputChange = (event) =>{
  //   setFname(evet.target.value)
  // }
  // const handleLnameInputChange = (event) =>{
  //   setLname(event.target.value)
  // }
  // const handleEmailInputChange = (event) =>{
  //   setEmail(event.target.value)
  // }
  // const handleAgeInputChange = (event)=>{
  //   setAge(event.target.value)
  // }
  // const handlePhnoInputChange = (event) =>{
  //   setPhno(event.target.value)
  // }
  // const handleGenderInputChange = (event) =>{
  //   setGender(event.target.value)
  // }


  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label>First Name</label>
          <input type="text"
          name="fname"
          value={fname}
          onChange={handleInputChange}/>
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input type="text"
          name="lname"
          value={lname}
          onChange={handleInputChange}/>
        </div>
        <div className='form-group'>
          <label>Email</label>
          <input type="text"
          name="Email"
          value={email}
          onChange={handleInputChange}/>
        </div>
        <div className='form-group'>
          <label>Age</label>
          <input type="text"
          name="Age"
          value={age}
          onChange={handleInputChange}/>
          
        </div>
        <div className='form-group'>
          <label>Phno</label>
          <input type='text'
          name="Phno"
          value={phno}
          onChange={handleInputChange}/>
        </div>
        <div className='form-group'>
          <label>Gender</label>
          <input type="text"
          name="Gender"
          value=""
          onChange={handleInputChange}/>
        </div>
        <div>
          <button type="submit" className="btn">Submit</button>
        </div>
        
        
      </form>
    
    </div>
  )
}

export default Form;