import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getSingleProduct } from '../products/singleProductSlice'

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

export const addToCartAsync = createAsyncThunk('cart/addToCart', async (product) => { //work on this
  try {
    return product
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
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.cartItems.push(action.payload);
        state.totalQuantity++;
        state.totalPrice += action.payload.productPrice;
      })
  }
})

export const selectCart = (state) => {
  return state.cart
}

export default cartSlice.reducer

