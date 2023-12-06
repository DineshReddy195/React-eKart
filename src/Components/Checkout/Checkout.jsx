import React from 'react'
import './Checkout.css'

function Checkout() {
  return (
    <div>
      <form className='form-control mt-3 form-checkout'>
      <h2 className='bg-light shadow-sm '>Billing Address</h2>
        <div className='d-flex names'>
      <div>
      <label>First Name</label><br/>
      <input type='text' placeholder='Enter First Name' className='form-control f-name'/>
      </div>
      <div>
      <label>Last Name</label><br/>
      <input type='text' placeholder='Enter Last Name' className='form-control s-name'/>
      </div>
      </div>
      <label>Email</label>
      <input type='email' placeholder='me@example.com' className='form-control'/>
      <label>Address</label>
      <input type='text' placeholder='1234 Main Street' className='form-control'/>
      <label>Address 2 (Optional)</label>
      <input type='text' placeholder='Apartment or Suite' className='form-control'/>
      <div className='d-flex checkout-div'>
        <div>
          <label>Country</label>
          <select className='form-control country'>
            <option selected>Choose...</option>
            <option>India</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>United Arab Emirates</option>
            <option>Australia</option>
          </select>
        </div>
        <div>
          <label>State</label>
          <select className='form-control state'>
            <option selected>Choose...</option>
            <option>Andhra Pradesh</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
            <option>Kerala</option>
            <option>Maharastra</option>
            <option>Delhi</option>
            <option>Haryana</option>
          </select>
        </div>
        <div>
          <label>Zip</label>
          <input type='number' placeholder='Enter zip code' className='form-control zip-code'/>
        </div>
      </div><hr/>
      <div>
        <h2>Payment</h2>
      </div>
      </form>
    </div>
  )
}

export default Checkout
