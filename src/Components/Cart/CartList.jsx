import React, { useContext } from "react";
import CartItem from "./CartItem";
import { myContext } from "../Context/Context";

const CartList = () => {
  const { cart } = useContext(myContext);

  return (
    <div className="container-fluid">
      {cart.map(item => <CartItem key={item.id} item={item} />)}
    </div>
  );
};

export default CartList;
