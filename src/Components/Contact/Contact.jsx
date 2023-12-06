import React from 'react'
import './Contact.css'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  const navigate=useNavigate()
  const handleSend=()=>{
    navigate('/')
  }
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 text-center'>Contact</h1><hr/>
          </div>
        </div>
        <div className='forms'>
          <form>
            <label>Name</label><br/>
            <input type='text' placeholder='Enter  Your Name' className='form-control name' required/>
            <label>Email</label><br/>
            <input type='email' placeholder='Enter  Your Mail' className='form-control mail-id' required/>
            <label>Message</label><br/>
            <textarea type='text' placeholder='Enter  Your Message' className='form-control message mb-3' cols='30' required/>
            <button className='btn btn-secondary mb-5 ms-5' onClick={handleSend}>Send</button>
          </form>
        </div>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default Contact
