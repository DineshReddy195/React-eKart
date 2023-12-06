import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import './Products.css';
import Scroll from '../Scroll/Scroll';
import { myContext } from '../Context/Context';

function Productdetail() {
  const [product,setProduct]=useState([])
  const {cart,setCart}=useContext(myContext)
    const [item,setItem]=useState({
        image:'',
        description:'',
        title:'',
        price:'',
        category:'',
        rating:'',
        rate:''
    });
    const {id}=useParams()
    useEffect(()=>{
       fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>res.json()).then((data)=>{console.log(data);setItem(data)})
    },[])
    const addItem=(item)=>{
       
    }
  return (
    <div>
      <div className=" py-5 product-details">
        <div className="row py-4 carded">
           {item.length!==0?<div className='details'>
           <div className='left-panel'>
           <img src={item.image} alt={item.title} className='image-details'/></div>
           <div className='right-panel'>
            <h4 className='text-uppercase text-black-50'>{item.category}</h4>
            <h2 className='display-6'>{item.title}</h2>
            <p className='lead fw-bolder'>Rating: {item.rating&&item.rating.rate} <i className='fa fa-star'></i></p>
            <h3 className='display-6 fw-bold my-4'>$ {item.price}</h3>
            <p className="lead">{item.description}</p>
            <button className='btn btn-outline-dark px-4 py-2' onClick={addItem(item)}>Add to cart</button>
            <NavLink to='/cart' className='btn btn-dark ms-2 ps-3 py-2'>Go To Cart</NavLink>
           </div>
           </div>:<h1 className='text-danger'>No Data Found</h1>}
        </div>
      </div>
      <div>
        <Scroll/>
      </div>
    </div>
  )
}

export default Productdetail
