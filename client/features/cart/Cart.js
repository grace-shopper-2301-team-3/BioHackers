import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import { fetchCart } from "./cartSlice"

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartUpdated, setCartUpdated] = useState(false);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  useEffect(() => {
    if (cart.length) {
      const total = cart.reduce((acc, curr) => acc + curr.itemPrice, 0);
      setTotalPrice(total)
    } else {
      setTotalPrice(0);
    }
  }, [cart, cartUpdated]);


  return (
    <div className='cartContainer'>
      <p>Your Shopping Cart</p>
        {cart.length ? cart.map((cartItem) => (
          <div key={cartItem.id}>
            <CartItem cartItem={cartItem} />
          </div>
        ))
        :
        <p>Your cart is empty</p>}
        <p>total: ${totalPrice}</p>
        <button>Check Out</button>
    </div>
  )
}

export default Cart
