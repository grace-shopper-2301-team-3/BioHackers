import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateInventoryAsync = createAsyncThunk(
  "inventory/updateInventory",
  async ({ productId, quantity }) => {
    try {
      const { data } = await axios.patch(`/api/products/${productId}`, {
        quantity,
      });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const initialState = {
  inventory: [],
  error: null,
  status: "idle",
};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateInventoryAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateInventoryAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.inventory = action.payload;
      })
      .addCase(updateInventoryAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectInventory = (state) => state.inventory;

export default inventorySlice.reducer;
