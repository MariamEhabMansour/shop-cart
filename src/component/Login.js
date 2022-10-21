import React from 'react'
import {useState} from 'react';
import {Link, useLocation,useNavigate} from 'react-router-dom'


function Login(props) {
    const navigate = useNavigate();
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const chk = async ()=>{
        if(email == ""){
            alert("Please Enter an email")
            return
        }
        if(password == ""){
            alert("Please Enter a password")
            return
        }
        
        const res = await fetch(`http://localhost:5000/user?email=${email}&password=${password}`)
        const data = await res.json()
        if(data.length > 0){
            props.setUser(data[0])
            navigate('/success')
        }
        else{
            alert("error")
        }

        
    }

  return (
    <div className='container-fluid loginBack'>
<div className='row justify-content-center align-items-center'>
    <div className='FormLogin col-lg-4 col-sm-7 '>
        <h1 className='text-center font-weight-bold p-5'>Login  </h1>
        <div className='form-group'>
        <label>Email :</label>
        <input
        type="text"
        placeholder="enter your email"
        className='form-control '
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
      
        <div className='form-group'>
        <label>Password :</label>
        <input
        type="password"
        placeholder="enter your password"
        className='form-control '
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
        </div>

        <div className='form-group '>
        <button type='button' onClick={()=>chk()} className='btn btn-primary formButton '>Login</button>
        </div>
        <p class="font-weight-light text-center">Not registered ? <Link className='text-primary' to='/signup'> Create an account </Link></p>
    </div>
    </div>
    </div>
    
  )
}

export default Login
