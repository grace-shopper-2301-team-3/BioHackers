import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { fetchCart } from "./cartSlice";
import { Button } from "@mui/material";


const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartUpdated, setCartUpdated] = useState(false);


  useEffect(() => {
    if (cart.length) {
      const cartArray = Array.from(cart);
      const total = cartArray.reduce((acc, curr) => {
        const itemTotal = curr.product.productPrice * curr.quantity;
        console.log({itemTotal, itemPrice: curr.product.productPrice, quantity: curr.quantity})
        return acc + itemTotal;
      }, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  }, [cart, cartUpdated]);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <div className="cartContainer">
      <p>Your Shopping Cart</p>
        {Array.isArray(cart) && cart.length ? cart.map((cartItem) => (
          <div key={cartItem.id}>
            <CartItem cartItem={cartItem} />
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
      {cart.length ? (
        <div key={cart.id} className="checkoutContainer">
          <p>total: USD ${totalPrice}</p>
          <Link to="/checkout">
            <Button variant="contained">Check Out</Button>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Cart;
