import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
}

export const fetchCart = createAsyncThunk('fetchCart', async () => {
  try {
    const { data } = await axios.get(`/api/cart`)
    return data
  } catch (err) {
    console.log('fetchcartitem err', err)
  }
})

export const addToCartAsync = createAsyncThunk('addToCartAsync', async (product) => {
  try {
    const response = await axios.post('/api/cart', { itemName: product.productName, itemPrice: product.productPrice, itemImageUrl: product.imageUrl})
    return response.data
  } catch (err) {
    console.log('addtocart err', err)
  }
})

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        return action.payload
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        return action.payload
      })
   }
});

export default cartSlice.reducer
