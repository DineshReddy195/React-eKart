import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
  return (
    <div className='container register'>
      <div className='text-center'>
      <form>
      <h1 className='text-center display-6'>Register</h1>
      <input type='text' placeholder='Enter your Name' className='form-control named' required/><br/><br/>
      <input type='email' placeholder='Enter your Mail' className='form-control mailed' required/><br/><br/>
      <input type='password' placeholder='Enter your Password' className='form-control pwd' required/><br/><br/>
      <input type='submit' value='Submit' className='btn btn-outline-success'/>
      <p className='lead'>Already have account? <Link to='/login' className='link'> Login </Link>here</p>
      </form>
      </div>
    </div>
  )
}

export default Register
