import React from 'react'
import{useState,useEffect} from 'react'
import {useLocation, Link,useNavigate} from 'react-router-dom'

function Order(props) {
    const [products,setProducts] = useState([]) 
    const [productsFull,setProductsFull] = useState([]) 
    const [total,setTotal] = useState(0.00) 
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState('')
const navigate = useNavigate();
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

      const deleteCart = async(cart_id)=>{
          const res =await fetch(`http://localhost:5000/cart_pro/${cart_id}`,
{
    method :'DELETE'
}
          )
      }

          const getProducts = async(pro_id)=>{
            const res =await fetch(`http://localhost:5000/products/${pro_id}`)
            console.log(`http://localhost:5000/products/${pro_id}`)
            const data = await res.json()
            return data
          }

  const placeOrder= async()=>{
              if (address=="") {
                  alert("please enter address")
                  return
              }
              if (phone=="") {
                alert("please enter phone")
                return
            }
            const newOrder={
                u_id: props.user.id,
                o_address:address,
                o_phone:phone,
                o_total:total
 }
 const data = await addOrder(newOrder)
const o_id=data.id
for (let i = 0; i < products.length; i++) {
    let ord_pro={
        o_id:o_id,
        pro_id:products[i].pro_id,
        qnty:products[i].qnty
    }
    await addOrderPro(ord_pro)
    await deleteCart(products[i].id)

}
navigate('/succes/1')
}

const addOrder= async (obj)=>{
            const res =await fetch(`http://localhost:5000/order/`,
    {
            method:'POST',
            headers : {
                'Content-type':'application/json'
            },
    body : JSON.stringify(obj)
    }
            )
            const data = await res.json()
            return data
          }

const addOrderPro= async (obj)=>{
            const res =await fetch(`http://localhost:5000/ord_pro/`,
    {
            method:'POST',
            headers : {
                'Content-type':'application/json'
            },
    body : JSON.stringify(obj)
    }
            )
            const data = await res.json()
            return data
          }

  
  return (
    
    <div className="container-fluid">
    <div className="row">
        {props.user.id==null ?
    <div className='mainContent col-12'>
  <div className='alert alert-danger'>
please login first
</div>  
    </div>    
    :<>
    
        <aside className="col-lg-9">
            <div className="card">
                <div className="table-responsive">
                    <table className="table table-borderless table-shopping-cart">
                        <thead className="text-muted">
                            <tr className="small text-uppercase">
                                <th scope="col">Product</th>
                                <th scope="col" width="120">Quantity</th>
                                <th scope="col" width="120">Price</th>
                                <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {productsFull.map((x)=>(
                            <tr key={x.id}>
                                <td>
                                    <figure className="itemside align-items-center">
                                        <div className="aside"><img src={x.img} className="img-sm"/></div>
                                        <figcaption className="info"> <Link href="#" className="title text-dark" data-abc="true">{x.title}</Link>
                                            <p className="text-muted small">SIZE: :{x.name}<br/> Brand: {x.brand}</p>
                                        </figcaption>
                                    </figure>
                                </td>
                                <td> 
                                    <input type="number" className="form-control" value={x.qnty}/>
                                    </td>
                                <td>
                                    <div className="price-wrap"> <var className="price">{x.oldPrice}</var> <small className="text-muted"> {x.price}</small> </div>
                                </td>
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
                    <dl className="dlist-align">
                        <dt>Total price:</dt>
                        <dd className="text-right ml-3">{Math.round(total*100)/100} egy</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Discount:</dt>
                        <dd className="text-right text-danger ml-3">- $0.00</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Total:</dt>
                        <dd className="text-right text-dark b ml-3"><strong>{total} EGP</strong></dd>
                    </dl>
                    <hr/> 
                    <div className='form_group'>
                        <label> Shipping Address</label>
                        <input type="text" placeholder="Shipping Address" className="form-control"
                        value={address}
                        onChange={(e)=>setAddress(e.target.value)}
                        />

                    </div>
                    <div className='form_group'>
                        <label> Phone</label>
                        <input type="text" placeholder="Phone" className="form-control"
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        />

                    </div>
                    <br/>
                    <br/>
                    <button className="btn btn-out btn-primary btn-square btn-main" data-abc="true" onClick={()=>placeOrder()}> place order </button>
                     <Link href="#" className="btn btn-out btn-success btn-square btn-main mt-2" data-abc="true">Continue Shopping</Link>
                </div>
            </div>
        </aside>
        </>
}
    </div>
</div>
  )
}

export default Order