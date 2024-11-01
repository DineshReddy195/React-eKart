import React, { useEffect, useState } from 'react'
import './Products.css'
import { NavLink } from 'react-router-dom';
import Footer from '../Footer/Footer'

function Products() {
  const [info,setInfo]=useState([]);
  const [state,setState]=useState([]);
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>{console.log(data);setInfo(data);setState(data)})
  },[])
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 text-center'>New Products</h1><hr/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className='buttons d-flex justify-content-center mb-5 pb-5'>
          <div>
            <button className='btn btn-outline-dark me-2' onClick={()=>{setInfo(state)}}>ALL</button>
            </div>
            <div>
            <button className='btn btn-outline-dark me-2' onClick={()=>{setInfo(state.filter((item)=>item.category==="men's clothing"))}}>Men's Clothing</button>
          </div>
          <div>
          <button className='btn btn-outline-dark me-2' onClick={()=>{setInfo(state.filter((item)=>item.category==="women's clothing"))}}>Women's Clothing</button>
          </div>
          <div>
          <button className='btn btn-outline-dark me-2' onClick={()=>{setInfo(state.filter((item)=>item.category==="jewelery"))}}>Jewelery</button>
          </div>
          <div>
          <button className='btn btn-outline-dark me-2' onClick={()=>{setInfo(state.filter((item)=>item.category==="electronics"))}}>Electronics</button>
          </div>
          </div>
          <div>
      {info.length!==0?    
      <div className='cards-container'>
      {info.map((element)=>{
        return (
          <div className='mapped'>
      <div className='gridded'>
        <img src={element.image} alt={element.title} className='image-class'/>
        <h4>{element.title.substring(0,18)}...</h4>
        <p className='lead fw-bold'>$ {element.price}</p>
        <NavLink to={`/productdetail/${element.id}`}><button className='btn btn-outline-dark'>View Details</button></NavLink>
      </div>
      </div>
        )
      })}
    </div>:<h1 className='text-danger'>No Data Found</h1>}
    </div>
        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Products
