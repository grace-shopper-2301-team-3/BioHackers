import React, { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import cartItemSlice from "./cartItemSlice"

const CartItem = () => {
  const dispatch = useDispatch()

  return (
    <div className='cartItemContainer'>
      <p>hello from cartitem</p>
    </div>
  )
}

export default CartItem
