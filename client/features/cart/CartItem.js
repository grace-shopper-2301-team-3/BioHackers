import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import cartItemSlice from "./cartItemSlice"

const CartItem = ({ cartItem }) => {

  return (
    <div className='cartItemContainer'>
      <p>{cartItem.itemName}</p>
      <p>${cartItem.itemPrice}</p>
      <p>{cartItem.itemImageUrl}</p>
    </div>
  )
}

export default CartItem
