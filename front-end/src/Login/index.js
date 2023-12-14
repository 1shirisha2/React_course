import {useState} from 'react'
import "./index.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")


//     const handleEmailInputChange = (event) =>{
//           setEmail(event.target.value)}

//           const handlePasswordInputChange = (event) =>{
//             setPassword(event.target.value)}
          const handleInputChange = (event) =>{
              if(event.target.name==="Email"){
                  setEmail(event.target.value)

              }else if(event.target.name==="Password"){
                  setPassword(event.target.value)
              }
             

            } 
                  
           
         


  return (
  <div className='container'>
      
  <form className='form'>
 <div className='group'>
  <input className='input' type="text" placeholder="email" 
  name="Email" value={email}
  onChange={handleInputChange}
  /></div>

  <div className='group'>
        <input className='input' type="password" placeholder="password"
        name="Password" value={password}
        onChange={handleInputChange}
        /> 
        </div>


        <button type="Login" className="button">Login</button>
        </form>
      
  </div>
  )
}

export default Login;