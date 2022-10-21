import './App.css';
import Home from './component/Home';
import Footer from './component/Footer';
import Header from './component/Header';
import Nav from './component/Nav';
import About from './component/About';
import Ads from './component/Ads';
import Login from './component/Login';
import Signup from './component/Signup';
import Success from './component/Success';
import Logout from './component/Logout';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import {useState} from 'react'
import Products from './component/Products';
import Product from './component/Product';
import Shop from './component/Shop';
import Order from './component/Order';
import Body from './component/Body';
import Pagination from './component/Pagination';

function App() {
  const [user,setUser] = useState([])
  return (
    <div className='container-fluid'>
    
 <BrowserRouter>
    <Header/>
    <Nav user={user}/>

    <Routes>
    <Route path='/body' element={<Body user={user}/>}/>
      <Route path='/order' element={<Order user={user}/>}/>
      <Route path='/about' element={<About />}/>
      <Route path='/' element={<Home user={user} />} />
      <Route path='/login'  element={<Login setUser={setUser} />}/>
      <Route path='signup' element={<Signup setUser={setUser} />} />
      <Route path = '/success' element={<Success />} />
      <Route path = '/logout' element={<Logout setUser={setUser} />} />
      <Route path = '/products/:c_id' element={<Products ser={user}/>} />
      <Route path = '/product/:pro_id' element={<Product user={user}/>} />
      <Route path='/shop' element={<Shop />}/>
      <Route path='pagination' element={<Pagination/>}  />
   
    

   </Routes>
  

    
    <Footer/>




   
   </BrowserRouter>

    </div>
   
  );
}

export default App;
