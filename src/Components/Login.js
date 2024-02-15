import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
    
    <div className='LoginPage'>
        <h1 style={{fontSize:'3rem'}}>Login</h1>
        <div className='loginComponents'>
            
            <input className='loginInput' type="email" placeholder='Email'
            />
            <br />
            <input className='loginInput' type="password" placeholder='Password'/>
            <br />
            <button className='loginbtn'>Login</button>
            <p>or Login with Edulab</p>
            <button className='loginGoogle'><img src="./images/google.svg" alt="" />Login with google</button>
        </div>
    </div>
    </>
  )
}

export default Login;