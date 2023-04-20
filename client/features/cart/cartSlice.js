import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0
}

export const fetchCartAsync = createAsyncThunk('cart', async () => {
  try {
    const { data } = await axios.get('/api/cart')
    return data
  } catch (err) {
    console.log('fetchcart error', err)
  }
})

export const addToCartAsync = createAsyncThunk('cart/addToCart', async () => {
  try {
    console.log('addtocartasync is hit')
  } catch (err) {
    console.log('addtocart error', err)
  }
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
      return action.payload
      })
  }
})

export const selectCart = (state) => {
  return state.cartItems
}

export default cartSlice.reducer

