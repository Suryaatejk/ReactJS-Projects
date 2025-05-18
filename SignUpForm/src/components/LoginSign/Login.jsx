import React from 'react'
import { useState } from 'react'
import './Login.css'
import usericon from '../../assets/person.png'
import passicon from '../../assets/password.png'    
import emailicon from '../../assets/email.png'

const Login = () => {

  const [action,setAction] = useState('Sign Up');
  
  return (
    <div className="container">
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==='Login'? <div></div> :<div className="input">
                <img src={usericon} alt="" />
                <input type="name" placeholder='Name' />
            </div>}
            
            <div className="input">
                <img src={emailicon} alt="" />
                <input type="email" placeholder='Email' />
            </div>
            <div className="input">
                <img src={passicon} alt="" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        {action==='Sign Up' ? <div> </div> : <div className="forgot-password">Lost Password? <span>Click Here</span></div>}

        <div className="submit-container">
            <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==='Sign Up'?'submit gray':'submit'} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Login
