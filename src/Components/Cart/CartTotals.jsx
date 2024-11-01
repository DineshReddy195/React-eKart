import { useContext } from "react";
import { myContext } from "../Context/Context";
import Payments from "../Payment/Payment";

const CartTotals = ({ history }) => {
  const context = useContext(myContext);
  console.log("Context in CartTotals:", context); // Check if values are logged correctly
  const { cartSubTotal, cartTax, cartTotal, clearCart } = context || {};

  if (!context) return null; // Early return if context is unavailable

  // Conversion rate (example: 1 USD = 80 INR)
  const conversionRate = 80; // Replace with actual rate or fetch from API

  // Convert total to INR and then to paise
  const amountInINR = cartTotal * conversionRate; // Convert to INR
  const amountInPaise = Math.round(amountInINR * 100); // Convert to paise (integer)

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
          <button
            className="btn btn-outline-danger text-uppercase mb-3 px-5"
            onClick={clearCart}
          >
            clear cart
          </button>
          <h5><span className="text-title">subtotal:</span> <strong>${cartSubTotal}</strong></h5>
          <h5><span className="text-title">tax:</span> <strong>${cartTax}</strong></h5>
          <h5><span className="text-title">total:</span> <strong>${cartTotal}</strong></h5>
          <Payments amount={amountInPaise} clearCart={clearCart} history={history} />
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
