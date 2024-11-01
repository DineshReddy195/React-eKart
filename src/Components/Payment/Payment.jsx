import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payments = ({ amount }) => {
  const navigate=useNavigate()

  const handlePayment = () => {
    // Load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;

    script.onload = () => {
      const options = {
        key:'rzp_test_7kLTQYNX44MciF', // Replace with your Razorpay key ID
        amount: amount, // Amount in paise (if you're passing in INR, this is fine)
        currency: 'INR', // Ensure currency is INR
        name: 'eKart',
        description: 'Test Transaction',
        image: 'https://example.com/logo.png', // Optional
        handler: (response) => {
          //alert(`Payment Successful: ${response.razorpay_payment_id}`);
          console.log("Payment Response: ", response);
          //clearCart();
          navigate('/')
        },
        prefill: {
          name: 'eKart',
          email: 'payments@eKart.com',
          contact: '9999999999',
        },
        notes: {
          address: 'Customer Address',
        },
        theme: {
          color: '#F37254',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    };

    document.body.appendChild(script);
  };

  return (
    <div>
      <h1>Razorpay Payment</h1>
      <button onClick={handlePayment} className='btn btn-outline-success'>Pay with Razorpay</button>
    </div>
  );
};

export default Payments;
