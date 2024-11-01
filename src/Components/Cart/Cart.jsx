import React from "react";
// import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import EmptyCart from "./EmptyCart";
import { useContext } from "react";
import { myContext } from "../Context/Context";

const Cart = (props) => {
  const { cart } = useContext(myContext);

  return (
    <section>
      {cart.length > 0 ? (
        <>
          <CartColumns />
          <CartList />
          <CartTotals history={props.history}/>
        </>
      ) : (
        <EmptyCart />
      )}
    </section>
  );
};

export default Cart;
