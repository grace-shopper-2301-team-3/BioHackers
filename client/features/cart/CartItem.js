import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import cartItemSlice from "./cartItemSlice"
import { removeFromCartAsync, fetchCart } from "./cartSlice"

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  const handleIncrementQuantity = async (item) => {
    try {
    const action = await dispatch(getSingleProduct(id))
    const product = action.payload
    const addToCartAction = await dispatch(addToCartAsync(product))
    const updatedCart = addToCartAction.payload;
    console.log("updatedCart", updatedCart);
    } catch (err) {
        console.log('error adding to cart in single product', err)
    }

}

  const handleRemove = async (itemId) => {
    try {
      await dispatch(removeFromCartAsync(itemId))
      dispatch(fetchCart())
      setCartUpdated(!cartUpdated);
    } catch (err) {
      console.log('error removing item from cart', err)
    }
  }

  return (
    <div className='cartItemContainer'>
      <img src={cartItem.itemImageUrl} />
      <p>${cartItem.itemPrice}</p>
      <span>{cartItem.itemName}</span>
      <button className='decrementQuantityButton' onClick={() => handleIncrementQuantity(cartItem)} >-</button>
      <span>{cartItem.quantity}</span>
      <button className='incrementQuantityButton'>+</button>
      <button className='removeFromCartButton' onClick={() => handleRemove(cartItem.id)}>Remove</button>
    </div>
  )
}

export default CartItem
