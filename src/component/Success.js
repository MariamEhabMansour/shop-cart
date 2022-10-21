import {useEffect} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import Home from './Home';

function Success(props) {
  const location = useLocation()
    const navigate = useNavigate();

    useEffect(() => {
      const timer = setTimeout(() =>  navigate('/'), 3000);
      return () => clearTimeout(timer);
    }, []);



  return (
    <div className='mainContents'>
      <div className='alert alert-success'>Logged in successfully!</div>
      <Home/>
    </div>
    
  )
}

export default Success
