import React from 'react'
import {useState} from 'react';
import {Link, useLocation,useNavigate} from 'react-router-dom'


function Signup({addFunction,props}) {
  const navigate = useNavigate();
  const[newUserName,setUserName]= useState('')
  const[newUserEmail,setUserEmail]= useState('')
  const[newUserPassword,setUserPassword]= useState('')
  const chkInput= async()=>{
    
      if(!newUserName){
          alert("plese enter user name")
          return
      }

      if(!newUserEmail){
          alert("plese enter gmail")
          return
      }
      if(!newUserPassword){
          alert("plese enter password")
          return
      }

      const newUser ={
              
              name: newUserName,
              email: newUserEmail,
              password:newUserPassword,
              
  }
  

  addFunction(newUser);
  setUserName('')
  setUserEmail('')
  setUserPassword('')
  


  }


  return (
    <div className='container-fluid loginBack'>
<div className='row justify-content-center align-items-center'>
    <div className='FormLogin col-lg-4 col-sm-7 '>
        <h1 className='text-center font-weight-bold p-5'>SignUp  </h1>

        <div className='form-group'>
           <label>User Name :</label>
           <input
           type="text"
        placeholder="enter your user name"
        className='form-control '
        value={newUserName}
        onChange={(e)=>setUserName(e.target.value)}
        />
        </div>


        <div className='form-group'>
        <label>Email :</label>
        <input
        type="text"
        placeholder="enter your email"
        className='form-control '
        value={newUserEmail}
        onChange={(e)=>setUserEmail(e.target.value)}
        />
        </div>
      
        <div className='form-group'>
        <label>Password :</label>
        <input
        type="password"
        placeholder="enter your password"
        className='form-control '
        value={newUserPassword}
        onChange={(e)=>setUserPassword(e.target.value)}
        />
        </div>

        <div className='form-group'>
        <button type='button' onClick={()=>chkInput()} className='btn btn-primary formButton'>SignUp</button>
        </div>
        <p class="font-weight-light text-center">Already have account ? <Link className='text-primary' to='/login'>Login </Link></p>
   
    </div>
    </div>
    </div>
 
    
  )
}

export default Signup
