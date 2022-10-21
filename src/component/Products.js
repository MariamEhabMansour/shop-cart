import React from 'react'
import {useState,useEffect} from 'react'
import {Link,useParams} from 'react-router-dom'

function Products() {
    const {c_id} = useParams()
    const [products,setProducts] = useState([])
    const [categoryName,setcategoryName] = useState('')

    useEffect(()=>{
        const xyz = async ()=>{
          const  data = await getProducts()
          setProducts(data)
          const catName = await getCategoryName(c_id)
          setcategoryName(catName.name)
        }
  
        xyz()
    },[])
  
    const getCategoryName = async (c_id)=>{
      const res = await fetch(`http://localhost:5000/categories/${c_id}`)
      const data = await res.json()
      return data;
    }

    const getProducts = async ()=>{
      const res = await fetch(`http://localhost:5000/products?c_id=${c_id}`)
      const data = await res.json()
      return data;
    }

  return (
    <div>
    <div className='mainContents'>
       <div className="container-fluid bg-secondary mb-5">
  <div className="d-flex flex-column align-items-center justify-content-center" style={{minHeight:"300px"}}>
    <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
    <div className="d-inline-flex">
      <p className="m-0"><Link to={`/`}>Home</Link></p>
      <p className="m-0 px-2">-</p>
      <p className="m-0">{categoryName}</p>
    </div>
  </div>
  </div>
    </div>
  
<div className='row'>
    {products.map((x)=>(
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1" key={x.id}>
      <div className="card product-item border-0 mb-4">
        <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
          
          <Link to={`/product/${x.id}`}>
            <img  className="img-fluid w-100 h-100" alt="website template image" src={x.img} />
          </Link>
          </div>
        <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
          <h6 className="text-truncate mb-3"> {x.name}</h6>
          <div className="d-flex justify-content-center">
            <h6>{x.price}</h6>
            <h6 className="text-muted ml-2"><del>{x.oldPrice} EGP</del></h6>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light border">
          <Link to={`/product/${x.id}`} className="btn btn-sm text-dark p-0">
            <i className="fas fa-eye text-primary mr-1"></i>View Detail</Link> 
            <button href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button>
              </div>
      </div>
    </div>
    ))}
    </div>


     

      </div>
     

    
  )
}

export default Products

