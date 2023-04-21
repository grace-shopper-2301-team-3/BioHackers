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

export const incrementQuantityAsync = createAsyncThunk('cartItem/incrementQuantity', async () => {
  try {
    const response = await axios.post('/api/cart', { itemName: product.productName, itemPrice: product.productPrice, itemImageUrl: product.imageUrl})
    return response.data
  } catch (err) {
    console.log('err in incrementquantity', err)
  }
})

export const removeFromCartAsync = createAsyncThunk('cartItem/removeFromCart', async (itemId) => {
  try {
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
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        return action.payload
      })
      .addCase(incrementQuantityAsync, (state, action) => {
        return action.payload
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        return action.payload
      })
   }
});

export default cartSlice.reducer
