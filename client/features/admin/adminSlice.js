import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk for adding a new product
export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (productData) => {
    const response = await axios.post(`/products`, productData);
    return response.data;
  }
);

// Thunk for editing an existing product
export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, productData }) => {
    const response = await axios.put(`/products/${id}`, productData);
    return response.data;
  }
);

// Thunk for removing an existing product
export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id) => {
    await axios.delete(`/products/${id}`);
    return id;
  }
);

// Thunk for adding a new user
export const addUser = createAsyncThunk("users/addUser", async (userData) => {
  const response = await axios.post(`/users`, userData);
  return response.data;
});

// Thunk for editing an existing user
export const editUser = createAsyncThunk(
  "users/editUser",
  async ({ id, userData }) => {
    const response = await axios.put(`/users/${id}`, userData);
    return response.data;
  }
);

// Thunk for removing an existing user
export const removeUser = createAsyncThunk("users/removeUser", async (id) => {
  await axios.delete(`/users/${id}`);
  return id;
});

// Thunk for fetching payment options
export const fetchPaymentOptions = createAsyncThunk(
  "paymentOptions/fetchPaymentOptions",
  async () => {
    const response = await axios.get(`/payment-options`);
    return response.data;
  }
);

// Thunk for adding a new payment option
export const addPaymentOption = createAsyncThunk(
  "paymentOptions/addPaymentOption",
  async (paymentOptionData) => {
    const response = await axios.post(`/payment-options`, paymentOptionData);
    return response.data;
  }
);

// Thunk for editing an existing payment option
export const editPaymentOption = createAsyncThunk(
  "paymentOptions/editPaymentOption",
  async ({ id, paymentOptionData }) => {
    const response = await axios.put(
      `/payment-options/${id}`,
      paymentOptionData
    );
    return response.data;
  }
);

// Thunk for removing an existing payment option
export const removePaymentOption = createAsyncThunk(
  "paymentOptions/removePaymentOption",
  async (id) => {
    await axios.delete(`/payment-options/${id}`);
    return id;
  }
);

// SLICE
export const adminSlice = createSlice({
  name: "admin",
  initialState: {
    products: [],
    users: [],
    paymentOptions: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter((p) => p.id !== action.payload);
      })
      .addCase(fetchPaymentOptions.fulfilled, (state, action) => {
        state.paymentOptions = action.payload;
      })
      .addCase(addPaymentOption.fulfilled, (state, action) => {
        state.paymentOptions.push(action.payload);
      })
      .addCase(editPaymentOption.fulfilled, (state, action) => {
        const index = state.paymentOptions.findIndex(
          (p) => p.id === action.payload.id
        );
        if (index !== -1) {
          state.paymentOptions[index] = action.payload;
        }
      })
      .addCase(removePaymentOption.fulfilled, (state, action) => {
        state.paymentOptions = state.paymentOptions.filter(
          (p) => p.id !== action.payload
        );
      });
  },
});

// REDUCER
export default adminSlice.reducer;
