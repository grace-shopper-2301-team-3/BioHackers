import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import { fetchCart } from "./cartSlice"

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  // console.log({cart})

  return (
    <div className='cartContainer'>
      <p>your shopping cart</p>
        {cart.length ? cart.map((cartItem) => (
          <div key={cartItem.id}>
            <CartItem cartItem={cartItem} />
          </div>
        ))
        :
        <p>your cart is empty</p>}
      {/* <CartItem /> */}
    </div>
  )
}

export default Cart
