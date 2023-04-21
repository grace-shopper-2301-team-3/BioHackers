import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import cartItemSlice from "./cartItemSlice"

const CartItem = ({ cartItem }) => {

  return (
    <div className='cartItemContainer'>
      <img src={cartItem.itemImageUrl} />
      <p>${cartItem.itemPrice}</p>
      <span>{cartItem.itemName}</span>
      <button className='decrementQuantityButton' >-</button>
      <span>{cartItem.quantity}</span>
      <button className='incrementQuantityButton'>+</button>
    </div>
  )
}

export default CartItem
