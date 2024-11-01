import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { myContext } from '../Context/Context';

function Register() {
  const {register,setRegister}=useContext(myContext)

  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload on submit

    // Get existing users from localStorage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Add new user to the array
    const newUser = {
      name: register.name,
      email: register.email,
      password: register.password,
    };
    
    const updatedUsers = [...existingUsers, newUser];

    // Store the updated array back in localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Optional: Clear form inputs
    setRegister({ name: '', email: '', password: '' });

    alert('User registered successfully!');
  };

  return (
    <div className='template d-flex justify-content-center align-items-center vh-100 bg-primary register'>
      <div className='form_container p-5 rounded bg-white'>
        <form onSubmit={handleSubmit}  className='mx-auto'>
        <h4 className='text-center display-6'>Register</h4>
          <div className='mb-3 mt-5'>
              <label htmlFor="name" className='form-label'>Name</label>
              <input
            type='text'
            name='name'
            placeholder='Enter your Name'
            className='form-control named'
            required
            value={register.name}
            onChange={handleChange}
          />
          </div>
          <div className='mb-3 mt-5'>
          <label htmlFor="email" className='form-label'>Email</label>
          <input
            type='email'
            name='email'
            placeholder='Enter your Email'
            className='form-control mailed'
            required
            value={register.email}
            onChange={handleChange}
          />
          </div>
          <div className='mb-3 mt-5'>
          <label htmlFor="password" className='form-label'>Password</label>
          <input
            type='password'
            name='password'
            placeholder='Enter your Password'
            className='form-control pwd'
            required
            value={register.password}
            onChange={handleChange}
          />
          </div>
          <div className='d-grid'>
          <button type='submit' className='btn btn-primary'>Register</button>
          </div>
          <p className='lead'>
            Already have an account? <Link to='/login' className='link'>Login</Link> here.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
