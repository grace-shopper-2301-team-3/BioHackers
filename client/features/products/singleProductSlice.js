import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleProduct = createAsyncThunk(
  "/singleProduct",
  async (id) => {
    try {
      console.log("AXIOS WORKING IN SINGLE Product");
      const { data } = await axios.get(`/api/products/${id}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const createProduct = createAsyncThunk(
  "/createProduct",
  async (product) => {
    try {
      const { data } = await axios.post(`/api/products`, product);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const updateProduct = createAsyncThunk(
  "/updateProduct",
  async (product) => {
    try {
      const { data } = await axios.put(`/api/products/${product.id}`, product);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const deleteProduct = createAsyncThunk("/deleteProduct", async (id) => {
  try {
    const { data } = await axios.delete(`/api/products/${id}`);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    data: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getSingleProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.data.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        const index = state.data.findIndex(
          (product) => product.id === action.payload.id
        );
        if (index !== -1) {
          state.data.splice(index, 1);
        }
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
export const selectSingleProduct = (state) => state.singleProduct;

export default singleProductSlice.reducer;
