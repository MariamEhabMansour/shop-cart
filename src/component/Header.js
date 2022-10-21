import React from 'react'
import { Link } from 'react-router-dom'
function Header(){
  return(
    <div>
    
      <div className="row bg-secondary py-2 px-xl-5">
            <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">

                    <Link className="text-dark" to="">FAQs</Link>

                    <span className="text-muted px-2">|</span>

                    <Link className="text-dark" to="">Help</Link>

                    <span className="text-muted px-2">|</span>

                    <Link className="text-dark" to="">Support</Link>
                </div>
            </div>

            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">

                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-facebook-f"></i>
                    </Link>

                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-twitter"></i>
                    </Link>

                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-linkedin-in"></i>
                    </Link>

                    <Link className="text-dark px-2" to="">
                        <i className="fab fa-instagram"></i>
                    </Link>

                    <Link className="text-dark pl-2" to="">
                        <i className="fab fa-youtube"></i>
                    </Link>

                </div>
            </div>
        </div>
     <div class="row align-items-center py-3 px-xl-5">
     <div class="col-lg-3 d-none d-lg-block">

         <Link to="" class="text-decoration-none">
             <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">M</span>Shopper</h1>
         </Link>

     </div>
     <div class="col-lg-6 col-6 text-left">
         <form action="">
             <div class="input-group">

                 <input type="text" class="form-control" placeholder="Search for products"/>

                 <div class="input-group-append">
                     <span class="input-group-text bg-transparent text-primary">
                         <i class="fa fa-search"></i>
                     </span>
                 </div>

             </div>
         </form>
     </div>
     <div class="col-lg-3 col-6 text-right">
        
         <Link to="" class="btn border">
             <i class="fas fa-heart text-primary"></i>
             {/* <span class="badge">0</span> */}
         </Link>

         <Link to="/Body" class="btn border">
             <i class="fas fa-shopping-cart text-primary"></i>
             {/* <span class="badge">0</span> */}
         </Link>
     </div>
 </div>
</div>

  )
}

export default Header
