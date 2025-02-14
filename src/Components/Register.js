import React from 'react';
import { useState } from 'react';
import {registerUser} from '../services/api';



const Register = () => {
    const [ form,setForm] = useState({name:'',email:'',password:'',department:'HR'});

    const handleChange=(e)=>setForm({...form, [e.target.name]:e.target.value});

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await registerUser(form);
        alert('Registration Successful..!');
    }
  return (
    <>
      <form onSubmit={handleSubmit} className='container'>
        <br />
        <input type="text" name='name' placeholder='Enter Name' required
        onChange={handleChange} /> <br /><br />
        <input type="email" name='email' placeholder='Enter Email' required
        onChange={handleChange} /> <br /><br />
        <input type="password" name='password' placeholder='Enter Password' required
        onChange={handleChange} /> <br /><br />

        <select name="department" onChange={handleChange} >

            <option value="HR">HR</option>
            <option value="Development">Development</option>
            <option value="Support">Support</option>
        </select> <br /><br />


        <button className='btn btn-primary' type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register
