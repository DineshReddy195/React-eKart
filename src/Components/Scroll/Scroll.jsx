import React, { useEffect, useState } from 'react'
import './Scroll.css'
import { NavLink } from 'react-router-dom';

function Sample() {
  const [info,setInfo]=useState([]);
  const [state,setState]=useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then((res)=>res.json()).then((data)=>{console.log(data);setInfo(data);setState(data)})
  },[])
  let scrolled=document.getElementById('example')
  const stopScroll=()=>{
    scrolled.stop()
  }
  const startScroll=()=>{
    scrolled.start()
  }
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-5 text-center'>You will like these products</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <marquee id='example' scrolldelay='1' >
          <div className='full-card' onMouseOver={stopScroll} onMouseOut={startScroll}>
      {info.length!==0?    
      <div className='cards-container-sample'>
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
    </marquee>
        </div>
      </div>
    </div>
  )
}

export default Sample
