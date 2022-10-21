import React from 'react'
import {useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import Home from './Home'


function LoginFirst(props) {
  
    const location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() =>  navigate('/'), 3000);
      return () => clearTimeout(timer);
    }, []);



  return (
    <div>
    <div className='mainContents'>
      <div className='alert alert-danger'>please log in first</div>
      
    </div>
    <Home/>
    </div>
    
  )
}

export default LoginFirst