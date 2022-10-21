import React from 'react'
import { Link } from 'react-router-dom'

function Ads() {
  return (
    <div className='container-fluid '>
                 <div id="header-carousel" className="row carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" style={{height: "500px"}}>
                        <img className="img-fluid" src="https://image.shutterstock.com/image-photo/feminine-clothes-pastel-pink-color-260nw-1598789659.jpg" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "700px"}}>
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                <Link to="/shop" className="btn btn-light py-2 px-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" style={{height: "500px"}}>
                        <img className="img-fluid" src="https://image.shutterstock.com/image-photo/hangers-clothes-store-260nw-1529694914.jpg" alt="Image"/>
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "700px"}}>
                                <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                <Link to="/shop" className="btn btn-light py-2 px-3">Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="carousel-control-prev" to="#header-carousel" data-slide="prev">
                    <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                        <span className="carousel-control-prev-icon mb-n2"></span>
                    </div>
                </Link>
                <Link className="carousel-control-next" to="#header-carousel" data-slide="next">
                    <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                        <span className="carousel-control-next-icon mb-n2"></span>
                    </div>
                </Link>
            </div>
    </div>
  )
}

export default Ads