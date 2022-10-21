import React from 'react'

import { useLocation ,Link } from 'react-router-dom'

function Nav(props){
    let location = useLocation();
  return(
    
    <div className="container-fluid mb-0">
    <div className="row border-top px-xl-5">
 
        <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                <Link to="" className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">

                        <Link to="/" className={`nav-item nav-link ${location.pathname == "/" && 'active'}`}>Home</Link>
                        <Link to="/shop" className={`nav-item nav-link ${location.pathname == "/shop" && 'active'}`}>Shop</Link>
                        <Link to="" className="nav-item nav-link">Shop Detail</Link>
                        <div className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link to="/Body" className="dropdown-item">Shopping Cart</Link>
                                <Link to="/Order" className="dropdown-item">Checkout</Link>
                            </div>
                        </div>
                        <Link to="/about" className={`nav-item nav-link ${location.pathname == "/aboute" && 'active'}`}>About Us</Link>
                       
                    </div>
                    <div className="navbar-nav ml-auto py-0">

                     {props.user.id==null ? 
                         <Link to="/login" className={`nav-item nav-link  ${location.pathname == "/login" && 'active'}`}>
                             <span className="fas fa-user p-2"></span> 
                         Login
                         </Link>
                        
                            :
                            <Link to="/logout" className={`nav-item nav-link ${location.pathname == "/logout" && 'active'}`}>
                                <span className="fas fa-sign-out-alt p-2"></span>
                                
                                logout
                                </Link>
                    } 


                     
                    </div>
                </div>
            </nav>
   
        </div>
    </div>
</div>

  )
}

export default Nav
