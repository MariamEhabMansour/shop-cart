import React from 'react'
import {useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import Home from './Home';

function Logout(props) {
  let location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      props.setUser([])
      const timer = setTimeout(() =>  navigate('/'), 3000);
      return () => clearTimeout(timer);
    }, []);


  return (
    <div className='mainContents'>
      <div className='alert alert-success' >You logged out successfully!</div>
      <Home/>
    </div>
  )
}

export default Logout
