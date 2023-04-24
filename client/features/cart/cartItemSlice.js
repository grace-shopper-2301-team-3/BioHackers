import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  quantity: 1,
  itemId: null,
  itemName: null,
  itemPrice: null,
  itemImageUrl: null,
}

//
export const fetchCartItem = createAsyncThunk('cartItem', async (id) => {
  try {
    const { data } = await axios.get(`/api/cart/${id}`)
    return data
  } catch (err) {
    console.log('fetchcartitem err', err)
  }
})

const cartItemSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItem.fulfilled, (state, action) => {
        return action.payload
      })
  }
});



export const selectCartItem = (state) => {
  return state.cartItem
}

export default cartItemSlice.reducer;

