import React from 'react'
import { useState } from 'react';
import {loginUser} from '../services/api';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await loginUser(email,password);
        if (res.success) {
            alert("Login Successful.!");
        } else {
            alert('Invalid Credentials.!');
        }
    }

  return (
    <>
      <form onSubmit={handleSubmit} className='container'> 
        <br />
        <input type="email" placeholder='Enter Email'
         onChange={(e)=>setEmail(e.target.value)} required/> <br /> <br />

        <input type="password" placeholder='Enter Password'
         onChange={(e)=>setPassword(e.target.value)} required/> <br /><br />
        <button className='btn btn-primary' type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
