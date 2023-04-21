import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import CartItem from "./CartItem";
import { addToCartAsync, selectCart } from "./cartSlice";

const Cart = () => {
  const cart = useSelector(selectCart)
  // console.log('cartItems:', cart.cartItems)

  return (
    <div className='cartContainer'>
      <h1>Your Cart</h1>
      <div className='cartItemsContainer'>
        {cart.cartItems.length ?
        cart.cartItems.map((item) => (
          <CartItem key={item.productId} />
        )) :
        <p>Your cart is empty</p>
        }
      </div>
    </div>
  )
}

export default Cart
