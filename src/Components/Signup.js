import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    
   
      <div className='LoginPage'>
      
        <h1 style={{fontSize:'3rem'}}>Register</h1>
        <div className='SignupComp' style={{textAlign:"center"}}>
            <input className='loginInput' type="email" placeholder='Email'
            />
            <br />
            <input className='loginInput' type="password" placeholder='Password'/>
            <br />
            <button className='loginbtn'>Signup</button>
            <br />
            <button className='loginGoogle' style={{marginTop:'10px'}}><img src="./images/google.svg" alt="" />Login with google</button>
        </div>
        
      </div>
    
    
  )
}

export default Signup