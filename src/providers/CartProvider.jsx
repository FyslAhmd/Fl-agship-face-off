import React from "react";
import { CartContext } from "./Context";

const CartProvider = ({ childern }) => {
  const [cart, setCart] = React.useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {childern}
    </CartContext.Provider>
  );
};

export default CartProvider;
