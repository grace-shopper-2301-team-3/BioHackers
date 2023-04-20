import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import CartItem from "./CartItem";

const Cart = () => {
  // const cart = useSelector()

  return (
    <div className='cartContainer'>
      <h1>Your Cart</h1>
      <CartItem />

      {}
    </div>
  )
}

export default Cart
