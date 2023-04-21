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

const cartItemSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    // increment the quantity by 1
    addToQuantity(state) {
      state.quantity += 1;
    },
    // decrement the quantity by 1
    removeFromQuantity(state) {
      state.quantity -= 1;
    },
    // set the quantity to a specific value
    setQuantity(state, action) {
      state.quantity = action.payload;
    }
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase()
  // }
});

export const { addToQuantity, removeFromQuantity, setQuantity } = cartItemSlice.actions;

export default cartItemSlice.reducer;

