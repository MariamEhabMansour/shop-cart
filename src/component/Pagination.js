import React from 'react'
import { Link } from 'react-router-dom'

function Pagination({total,perPage,changePage}) {
    const pages = []
    const totalNumberPages = Math.ceil(total/perPage)
    for(let i=1 ; i<= totalNumberPages ; i++){
        pages.push(i)
    }
  return (
    <nav>
      <ul className='pagination'>
          {
              pages.map((number)=>(
                  <li key={number} className='page-item'>
                      <Link onClick={()=>changePage(number)} className='page-link'>{number}</Link>
                  </li>
              ))
          }
      </ul>
    </nav>
  )
}

export default Pagination