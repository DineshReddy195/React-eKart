import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';

function Login() {
  return (
    <div className='sign-in'>
      <div className='container logged-in text-center'>
        <form>
        <h1 className='text-center display-6'>Login</h1>
       <input type='email' placeholder='Enter your Mail id' className='form-control mailed' required/><br/><br/>
       <input type='password' placeholder='Enter your Password' className='form-control pwd' required/><br/><br/>
       <input type='submit' value='Submit' className='btn btn-outline-danger ms-5'/>
       <p className='lead'>Don't have account? <Link to='/register' className='link'> Register </Link> here</p>
       </form>
      </div>
    </div>
  )
}

export default Login
