import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css';
import { myContext } from '../Context/Context';

function Login() {
  const navigate=useNavigate()
  const {login,setLogin,setIsLoggedin}=useContext(myContext)
  const handleChange=(e)=>{
    setLogin({...login,[e.target.name]:e.target.value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const users=JSON.parse(localStorage.getItem("users"))||[];
    const loggedin=users.find(data=>data.email===login.email&&data.password===login.password);
    if(loggedin){
      alert("Login Successful!");
      setLogin(loggedin);
      setIsLoggedin(true)
      navigate("/")
    }else{
      alert("User not registered!")
    }
  }
  return (
    <div className='template d-flex justify-content-center align-items-center vh-100 bg-primary login '>
      <div className='form_container p-5 rounded bg-white'>
        <form onSubmit={handleSubmit} className='mx-auto'>
        <h4 className='text-center display-6'>Login</h4>
          <div className='mb-3 mt-5'>
              <label htmlFor="email" className='form-label'>Email</label>
              <input type='email' placeholder='Enter your Mail id' name='email' value={login.email} className='form-control mailed' required onChange={handleChange}/>
          </div>
          <div className='mb-3'>
              <label htmlFor="password" className='form-label'>Password</label>
              <input type='password' placeholder='Enter your Password' name='password' value={login.password} className='form-control pwd' required onChange={handleChange}/>
          </div>
          <div className='d-grid'>
          <button type='submit' className='btn btn-primary'>Login</button>
          </div>
       <p className='text-end mt-2 lead'>Don't have account? <Link to='/register' className='link ms-2'> Register </Link> here</p>
       </form>
      </div>
    </div>
  )
}

export default Login
