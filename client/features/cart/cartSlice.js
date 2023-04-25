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
      return data.sort((a, b) => a.id - b.id)
    } catch (err) {
      console.log('fetchcartitem err', err)
    }
  })

  export const changeQuantityAsync = createAsyncThunk('cartItem/changeQuantity', async ({ product, newQuantity, numToChangeBy }) => {
    try {
      const response = await axios.patch(`/api/cart`, { quantity: newQuantity, productId: product.id, numToChangeBy })
      return response.data
    } catch (err) {
      console.log('err in changequantity', err)
    }
  })

  export const removeFromCartAsync = createAsyncThunk('cartItem/removeFromCart', async (itemId) => {
    try {
      console.log('itemId:', itemId)
      await axios.delete( `/api/cart/${itemId}`)
      return itemId
    } catch (err) {
      console.log('err in removeFromCartAsync', err)
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
        .addCase(changeQuantityAsync.fulfilled, (state, action) => {
          return action.payload
        })
        .addCase(removeFromCartAsync.fulfilled, (state, action) => {
          return action.payload
        })
    }
  });

  export default cartSlice.reducer
