import React from 'react'
import {useState,useEffect} from 'react'
import Pagination from './Pagination'
import {Link,useParams} from 'react-router-dom'


function Shop(props) {
  const {c_id} = useParams()
  const [products,setProducts] = useState([])
  const [categoryName,setcategoryName] = useState('')

  const [usersData,setUserData] = useState([])
  const [usersDataSearch,setUserDataSearch] = useState([])


  const [currentPage , setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(5)

  const[searchWord,setSearchWord]=useState('')


  const last = currentPage * perPage;
  const first = last - perPage;
  const newData = usersDataSearch.slice(first,last)

  useEffect(()=>{
      const xyz = async ()=>{
        const  data = await getProducts()
        setProducts(data)
        const catName = await getCategoryName(c_id)
        setcategoryName(catName.name)
        
      }

      xyz()
  },[])
  useEffect(()=>{
    const getUsers = async ()=>{
      const data = await fetchUsers();
      setUserData(data);
      setUserDataSearch(data);
    }
    getUsers();
  },[])
  const fetchUsers= async ()=>{
    const res = await fetch(`http://localhost:5000/products`)
    const data = await res.json()
    return data
  }
  const changePage = (number)=>{
    setCurrentPage(number)
  }
  const getCategoryName = async (c_id)=>{
    const res = await fetch(`http://localhost:5000/categories/`)
    const data = await res.json()
    return data;
  }

  const getProducts = async ()=>{
    const res = await fetch(`http://localhost:5000/products`)
    const data = await res.json()
    return data;
  }
  return (
    <div class="container-fluid pt-5">
    <div class="row px-xl-5">
      <div class="col-lg-3 col-md-12">
        <div class="border-bottom mb-4 pb-4">
          <h5 class="font-weight-semi-bold mb-4">Filter by price</h5>
          <form action="#" method="post">
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" checked id="price-all"/>
              <label class="custom-control-label" for="price-all">All Price</label>
              <span class="badge border font-weight-normal">1000</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="price-1"/>
              <label class="custom-control-label" for="price-1">$0 - $100</label>
              <span class="badge border font-weight-normal">150</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="price-2"/>
              <label class="custom-control-label" for="price-2">$100 - $200</label>
              <span class="badge border font-weight-normal">295</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="price-3"/>
              <label class="custom-control-label" for="price-3">$200 - $300</label>
              <span class="badge border font-weight-normal">246</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="price-4"/>
              <label class="custom-control-label" for="price-4">$300 - $400</label>
              <span class="badge border font-weight-normal">145</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input type="checkbox" class="custom-control-input" id="price-5"/>
              <label class="custom-control-label" for="price-5">$400 - $500</label>
              <span class="badge border font-weight-normal">168</span></div>
          </form>
        </div>
        <div class="border-bottom mb-4 pb-4">
          <h5 class="font-weight-semi-bold mb-4">Filter by color</h5>
          <form action="#" method="post">
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" checked id="color-all"/>
              <label class="custom-control-label" for="price-all">All Color</label>
              <span class="badge border font-weight-normal">1000</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="color-1"/>
              <label class="custom-control-label" for="color-1">Black</label>
              <span class="badge border font-weight-normal">150</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="color-2"/>
              <label class="custom-control-label" for="color-2">White</label>
              <span class="badge border font-weight-normal">295</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="color-3"/>
              <label class="custom-control-label" for="color-3">Red</label>
              <span class="badge border font-weight-normal">246</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="color-4"/>
              <label class="custom-control-label" for="color-4">Blue</label>
              <span class="badge border font-weight-normal">145</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input type="checkbox" class="custom-control-input" id="color-5"/>
              <label class="custom-control-label" for="color-5">Green</label>
              <span class="badge border font-weight-normal">168</span></div>
          </form>
        </div>
        <div class="mb-5">
          <h5 class="font-weight-semi-bold mb-4">Filter by size</h5>
          <form action="#" method="post">
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" checked id="size-all"/>
              <label class="custom-control-label" for="size-all">All Size</label>
              <span class="badge border font-weight-normal">1000</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="size-1"/>
              <label class="custom-control-label" for="size-1">XS</label>
              <span class="badge border font-weight-normal">150</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="size-2"/>
              <label class="custom-control-label" for="size-2">S</label>
              <span class="badge border font-weight-normal">295</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="size-3"/>
              <label class="custom-control-label" for="size-3">M</label>
              <span class="badge border font-weight-normal">246</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
              <input type="checkbox" class="custom-control-input" id="size-4"/>
              <label class="custom-control-label" for="size-4">L</label>
              <span class="badge border font-weight-normal">145</span></div>
            <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
              <input type="checkbox" class="custom-control-input" id="size-5"/>
              <label class="custom-control-label" for="size-5">XL</label>
              <span class="badge border font-weight-normal">168</span></div>
          </form>
        </div>
      </div>
      <div class="col-lg-9 col-md-12">
        <div class="row pb-3">
          <div class="col-12 pb-1">
         
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
          <Link to={`/product/${x.id}`} className="btn btn-sm text-dark p-0 text-center">
            <i className="fas fa-eye text-primary mr-1"></i>View Detail</Link> 
            {/* <button href="" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</button> */}
              </div>
      </div>
    </div>
    ))}
    </div>
    <Pagination total={usersDataSearch.length} perPage={perPage} changePage={changePage} />
   
</div>
</div>
</div>
</div>
</div>
          
       
  
  )
}

export default Shop