import React from 'react'
import './About.css'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div>
          <div className="container mt-4">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 text-center'>About Us</h1><hr/>
            <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum</p>
          </div>
        </div>
        <div>
          <h4 className='display-6 text-center' >Our Products</h4>
        </div>
        <div className='services mt-4 mb-5'>
        <div className="card clothing">
  <img src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="men's clothing"/>
  <div className="card-body">
    <h4 className="card-text">Men's Clothing</h4>
  </div>
</div>
<div className="card clothing">
  <img src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="women's clothing"/>
  <div className="card-body">
    <h4 className="card-text">Women's Clothing</h4>
  </div>
</div>
<div className="card clothing">
  <img src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="jewelery"/>
  <div className="card-body">
    <h4 className="card-text">Jewelery</h4>
  </div>
</div>
<div className="card clothing">
  <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="electronics"/>
  <div className="card-body">
    <h4 className="card-text">Electronics</h4>
  </div>
</div>
        </div>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default About
