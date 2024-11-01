import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Products.css';
import Scroll from '../Scroll/Scroll';
import { myContext } from '../Context/Context';

function Productdetail() {
  const {addToCart,cart}=useContext(myContext)
  const navigate=useNavigate()
    const [item,setItem]=useState({
        image:'',
        description:'',
        title:'',
        price:'',
        category:'',
        rating:'',
        rate:''
    });

    const isInCart = cart.some((cartItem) => cartItem.id === item.id);

    const handleAddToCart=()=>{
      addToCart(item);
      navigate('/cart')
    }
    const {id}=useParams()
    useEffect(()=>{
       fetch(`https://fakestoreapi.com/products/${id}`).then((res)=>res.json()).then((data)=>{console.log(data);setItem(data)})
    },[id])
  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
          <h1>{item.title}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <img src={item.image} alt={item.title} className='img-fluid' />
        </div>
        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
          <h2>{item.title}</h2>
          <h4 className='text-blue'>
            <strong>Price: <span>$</span>{item.price}</strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Some info about product:
          </p>
          <p className='text-muted lead'>{item.description}</p>

          <div className='d-flex'>
            <button className='btn btn-info m-3'>Buy Now</button>
            <button className='btn btn-secondary m-3' onClick={handleAddToCart}>{isInCart?"In Cart":"Add To Cart"}</button>
          </div>
         
        </div>
        <Scroll/>
      </div>
    </div>
  )
}

export default Productdetail
