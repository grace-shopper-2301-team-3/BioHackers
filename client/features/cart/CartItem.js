import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import cartItemSlice from "./cartItemSlice"
import { addToCartAsync, removeFromCartAsync, fetchCart, changeQuantityAsync } from "./cartSlice"
import { fetchCartItem } from "./cartItemSlice"


const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch()

  const handleIncrementQuantity = async (item) => {
    try {
      await dispatch(changeQuantityAsync({ item, numToChangeBy: 1}))
      dispatch(fetchCart())
    } catch (err) {
        console.log('error incrementing quantity in cartitem', err)
    }
  }

    const handleDecrementQuantity = async (item) => {
      try {
        if (item.quantity === 1) {
          dispatch(removeFromCartAsync(item.id))
        }
        else {
          dispatch(changeQuantityAsync({ item, numToChangeBy: -1}))
        }
        dispatch(fetchCart())
      } catch (err) {
          console.log('error incrementing quantity in cartitem', err)
      }
  }

  const handleRemove = async (itemId) => {
    try {
      await dispatch(removeFromCartAsync(itemId))
      dispatch(fetchCart())
    } catch (err) {
      console.log('error removing item from cart', err)
    }
  }

  return (
    <div className='cartItemContainer'>
      <img src={cartItem.itemImageUrl} />
      <p>${cartItem.itemPrice}</p>
      <span>{cartItem.itemName}</span>
      <button className='decrementQuantityButton' onClick={() => handleDecrementQuantity(cartItem)} >-</button>
      <span>{cartItem.quantity}</span>
      <button className='incrementQuantityButton'
        onClick={() => handleIncrementQuantity(cartItem)}>+</button>
      <button className='removeFromCartButton'
        onClick={() => handleRemove(cartItem.id)}>Remove</button>
    </div>
  )
}

export default CartItem
