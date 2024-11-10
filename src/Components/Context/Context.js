import React, { useState, createContext, useEffect } from "react";

export const myContext = createContext();

const Cartfunction = ({ children }) => {
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [isLoggedin,setIsLoggedin]=useState(false)
  const [login,setLogin]=useState({email:"",password:""});
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return Array.isArray(JSON.parse(savedCart)) ? JSON.parse(savedCart) : [];
  });

  // Calculate totals for the cart
  const getTotals = (cartItems) => {
    const subTotal = Math.ceil(cartItems.reduce((acc, item) => {
      const itemTotal = item.total || 0;
      return acc + itemTotal;
    }, 0));

    const tempTax = subTotal * 0.1; //Tax is 10%
    const tax = parseFloat(tempTax.toFixed(2));//Used to fix to 2 decimal places
    const total = Math.ceil(subTotal + tax);
    return { subTotal, tax, total };
  };

  // Update cart totals
  const addTotals = (cartItems) => {
    const totals = getTotals(cartItems);
    setCartSubTotal(totals.subTotal);
    setCartTax(totals.tax);
    setCartTotal(totals.total);
  };

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (!existingItem) {
        const newItem = {
          ...item,
          count: item.count || 1,
          total: item.price ? item.price * (item.count || 1) : 0
        };
        const updatedCart = [...prevCart, newItem];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        addTotals(updatedCart);
        return updatedCart;
      }
      return prevCart;
    });
  };

  const handleRemove = () => {
    setCart([]);
    localStorage.removeItem("cart");
    addTotals([]);
  };

  const decrement = (id) => {
    const tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    if (selectedProduct) {
      selectedProduct.count -= 1;
      if (selectedProduct.count === 0) {
        removeItem(id);
      } else {
        selectedProduct.total = selectedProduct.count * selectedProduct.price;
        setCart(tempCart);
        addTotals(tempCart);
      }
    }
  };

  const increment = (id) => {
    const tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);

    if (selectedProduct) {
      selectedProduct.count += 1;
      selectedProduct.total = selectedProduct.count * selectedProduct.price;
      setCart(tempCart);
      addTotals(tempCart);
    }
  };

  const removeItem = (id) => {
    const tempCart = cart.filter((item) => item.id !== id);
    setCart(tempCart);
    localStorage.setItem("cart", JSON.stringify(tempCart));
    addTotals(tempCart);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <myContext.Provider
      value={{
        cart,
        cartSubTotal,
        cartTax,
        cartTotal,
        addToCart,
        increment,
        decrement,
        removeItem,
        clearCart: handleRemove,
        register,
        setRegister,
        login,
        setLogin,
        isLoggedin,setIsLoggedin
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default Cartfunction;
