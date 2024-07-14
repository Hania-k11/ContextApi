import React from "react";

import { CartContext } from "../context/Cart";

import { useCart } from "../context/Cart";

const Cart = () => {
  const cart = useCart();
  const total = cart.items.reduce((a, b)=> a + b.price, 0) ;
  return (
    <div className="Cart">
      <h1>cart</h1>

      {

        cart && cart.items.map(items => <li>
            {items.name} - ${items.price};
        </li>)
      }
      <li>Macbook - $10000</li>

      <h5>Total Bill: ${total} </h5>
    </div>
  );
};

export default Cart;
