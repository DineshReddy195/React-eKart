import React, { useContext, useState } from 'react';
import './Nav.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { myContext } from '../Context/Context';

const Nav = () => {
  const navigate = useNavigate();
  const { cart,login,setIsLoggedin } = useContext(myContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsLoggedin(false)
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='nav-bar py-3 bg-light shadow-sm'>
      <div className='nav-title'>
        <Link to='/'><h1 className='h1'>eKart</h1></Link>
      </div>
      
      <div className='nav-links'>
        <NavLink to='/' className='links'>Home</NavLink>
        <NavLink to='/products' className='links'>Products</NavLink>
        <NavLink to='/about' className='links'>About</NavLink>
        <NavLink to='/contact' className='links'>Contact</NavLink>
        <button className='btn btn-outline-dark' onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i> Logout
        </button>
        <p className='user-name mt-3'>{login?.name || 'Guest'}</p>
        <NavLink to='/cart'>
          <button className='btn btn-outline-dark ms-2'>
            <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i>
            Cart {cart?.length || 0}
          </button>
        </NavLink>
      </div>

      {/* Menu icon for smaller screens */}
      <div className='menu' onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* Dropdown menu for smaller screens */}
      {menuOpen && (
        <div className='dropdown-menu'>
          <NavLink to='/' className='dropdown-link' onClick={toggleMenu}>Home</NavLink>
          <NavLink to='/products' className='dropdown-link' onClick={toggleMenu}>Products</NavLink>
          <NavLink to='/about' className='dropdown-link' onClick={toggleMenu}>About</NavLink>
          <NavLink to='/contact' className='dropdown-link' onClick={toggleMenu}>Contact</NavLink>
          <button className='btn btn-outline-dark logout-btn' onClick={() => { handleLogout(); toggleMenu(); }}>
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </button>
          <NavLink to='/cart' className='dropdown-link' onClick={toggleMenu}>
            <button className='btn btn-outline-dark cart-btn'>
              <i className="fa fa-shopping-cart me-1" aria-hidden="true"></i>
              Cart {cart?.length || 0}
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Nav;
