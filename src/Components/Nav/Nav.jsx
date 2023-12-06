import React from 'react'
import './Nav.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate=useNavigate()
  const handleLogout=()=>{
    navigate('/')
  }
  return (
    <div className='nav-bar py-3 bg-light shadow-sm'>
      <div>
        <h1>eKart</h1>
      </div>
      <div>
        <NavLink to='/' className='links'>Home</NavLink>
        <NavLink to='/products' className='links'>Products</NavLink>
        <NavLink to='/about' className='links'>About</NavLink>
        <NavLink to='/contact' className='links'>Contact</NavLink>
      </div>
      <div className='buttons'>
        <NavLink to='/login'><button className='btn btn-outline-dark' onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i>Logout</button></NavLink>
        {/* <NavLink to='/register'><button className='btn btn-outline-dark ms-2'><i class="fa fa-user-plus me-1" aria-hidden="true"></i>Register</button></NavLink> */}
        <NavLink to='/cart'><button className='btn btn-outline-dark ms-2'><i class="fa fa-shopping-cart me-1" aria-hidden="true"></i>Cart</button></NavLink>
      </div>
    </div>
  )
}

export default Nav
