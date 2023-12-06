import React from 'react'
import './Footer.css'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div className='footer'>
      <div className='footer-heading'><i class="fa-solid fa-location-dot"></i>&nbsp;&nbsp;<span>Electronic City, Bangalore</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <i class="fa-solid fa-phone"></i>&nbsp;&nbsp;<span>Call: +91 8096028621</span><br/><br/><br/>
      <i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;<span>ndkr2716@gmail.com</span></div>
      <div className='footer-main'>
        <div className='footer-flexed'>
            <h2 style={{marginLeft:'25px'}}>USEFUL LINKS</h2>
            <NavLink to='/' className='footer-links'>Home</NavLink><br/>
        <NavLink to='/products' className='footer-links'>Products</NavLink><br/>
        <NavLink to='/about' className='footer-links'>About</NavLink><br/>
        <NavLink to='/contact' className='footer-links'>Contact</NavLink><br/>
        </div>
        <div>
        <h2 style={{marginLeft:'25px'}}>SOCIAL MEDIA</h2>
        <Link to='https://www.linkedin.com/in/nerlapalli-dinesh-kumar-reddy/' className='linkedin'><i class="fa-brands fa-linkedin"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='https://twitter.com/' className='twitter'><i class="fa-brands fa-twitter"></i></Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='https://mail.google.com/' className='mail'><i class="fa-solid fa-envelope"></i></Link>
        </div>
        <div>
        <h2 style={{marginLeft:'25px'}}>OUR HEAD OFFICE</h2> 
        <h4 className='office'>Our head office is in Electronic city, Bangalore</h4>
        </div>
        </div>
      </div>
      <h2 style={{textAlign:'center'}}>2045 All Rights Reserved</h2>
    </div>
  )
}

export default Footer
