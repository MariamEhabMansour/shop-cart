import React from 'react'
import{useState,useEffect} from 'react'
import {useLocation, Link} from 'react-router-dom'
import Home from './Home';
import LoginFirst from './LoginFirst';

function Body(props) {
    const [products,setProducts] = useState([]) 
    const [productsFull,setProductsFull] = useState([]) 
    const [total,setTotal] = useState(0.00) 

    useEffect(()=>{
        const xyz = async ()=>{
         const data = await getCart()
         setProducts(data)
         console.log(data)
         const new_data=[]
         let priceTotal=0
         for (let i = 0; i < data.length; i++) {
            const res = await getProducts(data[i].pro_id)
            res.qnty = data[i].qnty
            res.cart_id = data[i].id
            priceTotal+=(res.qnty * res.price)
             new_data.push(res)

         }
         console.log(new_data)
         setProductsFull(new_data)
         setTotal(priceTotal)
        }
        xyz()
         },[])
         const getCart = async()=>{
            const res =await fetch(`http://localhost:5000/cart_pro?u_id=${props.user.id}`)
            const data = await res.json()
            return data
          }

          const getTotal = ()=>{
              let tot = 0
              for (let i = 0; i < productsFull.length; i++) {
                  tot += (productsFull[i].qnty * productsFull[i].price);
                  
              }
              setTotal(tot)
          }
          const addOne = async(pro_id)=>{
                const new_data = []
                for (let i = 0; i < productsFull.length; i++) {
                    if (productsFull[i].id ==pro_id) {
                        productsFull[i].qnty++
                        products[i].qnty++
                        const res = await editqnty (products[i])

                }
                new_data.push(productsFull[i])
            }
            setProductsFull(new_data)
            getTotal()
          }
          const nOne = async(pro_id)=>{
            const new_data = []
            for (let i = 0; i < productsFull.length; i++) {
                if (productsFull[i].id ==pro_id) {
                  if ( productsFull[i].qnty>1) 
                    productsFull[i].qnty--  
                    products[i].qnty--
                    const res = await editqnty (products[i])

            }
            new_data.push(productsFull[i])
        }
        setProductsFull(new_data)
        getTotal()
      }
      const editqnty= async (obj)=>{
        const res =await fetch(`http://localhost:5000/cart_pro/${obj.id}`,
{
        method:'PUT',
        headers : {
            'Content-type':'application/json'
        },
body : JSON.stringify(obj)
}
        )
      }

      const deleteCart = async(pro_id ,cart_id)=>{
          setProducts(products.filter((x)=> x.pro_id !=pro_id))
          setProductsFull(productsFull.filter((x)=> x.id !=pro_id))
          const res =await fetch(`http://localhost:5000/cart_pro/${cart_id}`,
{
    method :'DELETE'
}
          )
      }

          const getProducts = async(c_id)=>{
            const res =await fetch(`http://localhost:5000/products/${c_id}`)
            console.log(`http://localhost:5000/products/${c_id}`)
            const data = await res.json()
            return data
          }
  return (
    
    <div className="container-fluid">
    <div className="row">
        {props.user.id==null ?
    <div className='mainContent col-12'>
  <div className=''>

<LoginFirst/>

</div>  


    </div>    
    :<>
    
        <aside className="col-lg-8">
            <div className="card">
                <div className="table-responsive">
                    <table className="table table-bordered text-center mb-0">
                        <thead className="text-muted bg-secondary text-dark">
                            <tr className="small text-uppercase">
                                <th scope="col">Product</th>
                                <th scope="col" width="120">Quantity</th>
                                <th scope="col" width="120">Price</th>
                                <th scope="col" className="text-right d-none d-md-block" width="200">Remove</th>
                            </tr>
                        </thead>
                        <tbody className='align-middle'>
                            {productsFull.map((x)=>(
                            <tr key={x.id}>
                                <td>
                                    <figure className="itemside align-items-center">
                                        <div className="aside"><img src={x.img} className="img-sm align-middle" /></div>
                                        <figcaption className="info"> <Link  className="title text-dark" data-abc="true">{x.title}</Link>
                                            <p className="text-muted small">SIZE: :{x.name}<br/> Brand: {x.brand}</p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td> 

                                <div class="input-group quantity mx-auto" style={{width:"100px"}}>
                                    <div class="input-group-btn">
                                       <button class="btn btn-sm btn-primary btn-minus" onClick={()=> nOne(x.id)}><i class="fa fa-minus"></i></button>
                                 </div>
                                    <input type="number" class="form-control form-control-sm bg-secondary text-center p-2" value={x.qnty}/>
                                     <div class="input-group-btn">
                                     <button class="btn btn-sm btn-primary btn-plus" onClick={()=> addOne(x.id)}><i class="fa fa-plus"></i></button>
                                     </div>
                                     </div>
                                   
                                     </td>
                                <td>
                                    <div className="price-wrap align-middle"> <var className="price">{x.oldPrice}</var> <small className="text-muted"> {x.price}</small> </div>
                                </td>
                                
                                    
                                <td className="align-middle">  <buttton className="btn btn-primary" data-abc="true" onClick={()=> deleteCart(x.id ,x.cart_id)}> Remove</buttton> </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </aside>
        <aside className="col-lg-3">
            <div className="card">
                <div className="card-body">
                    <dl className="dlist-align m-3">
                        <dt>Total price:</dt>
                        <dd className="text-right ml-3">{Math.round(total*100)/100} egy</dd>
                    </dl>
                    <dl className="dlist-align m-3">
                        <dt>Discount:</dt>
                        <dd className="text-right text-danger ml-3">- $0.00</dd>
                    </dl>
                    <dl className="dlist-align m-3">
                        <dt>Total:</dt>
                        <dd className="text-right text-dark b ml-3"><strong>{total} EGP</strong></dd>
                    </dl>
                    <hr className='mt-4'/> 
                    <Link to="/order" className="btn btn-out btn-primary btn-square btn-main mt-5" data-abc="true">chick out  </Link> <Link  className="btn btn-out btn-secondary btn-square btn-main mt-5" data-abc="true">Continue Shopping</Link>

                </div>
            </div>
        </aside>
        </>
}
    </div>
</div>
  )
}

export default Body