import React, { useContext } from "react";
import { myContext } from "../Context/Context"; // Use named import here

const CartItem = ({ item }) => {
  const { increment, decrement, removeItem } = useContext(myContext);

  if (!increment || !decrement || !removeItem) {
    console.error("Context values are not available.");
    return null;
  }

  const { id, title, image, price, total, count } = item;

  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img src={image} style={{ width: "5rem", height: "5rem" }} className="img-fluid" alt={title} />
      </div>
      <div className="col-10 mx-auto col-lg-2">{title}</div>
      <div className="col-10 mx-auto col-lg-2"><strong>${price}</strong></div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <button className="btn btn-black mx-1" onClick={() => decrement(id)}>-</button>
          <span className="btn btn-black mx-1">{count}</span>
          <button className="btn btn-black mx-1" onClick={() => increment(id)}>+</button>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <i className="fas fa-trash cart-icon cursor-pointer" onClick={() => removeItem(id)}></i>
      </div>
      <div className="col-10 mx-auto col-lg-2"><strong>${total}</strong></div>
    </div>
  );
};

export default CartItem;
