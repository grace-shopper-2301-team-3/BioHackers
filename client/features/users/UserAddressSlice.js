import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  addresses: [],
  status: "idle",
  error: null,
};

export const getAllAddresses = createAsyncThunk(
  "addresses/fetchAll",
  async () => {
    const response = await axios.get(`/api/addresses`);
    return response.data;
  }
);

export const getSingleAddress = createAsyncThunk("addresses/getSingle", async (id) => {
    const response = await axios.get(`/api/addresses/${id}`);
    return response.data;
  }
);

export const addAddress = createAsyncThunk("addresses/add", async (address) => {
  const response = await axios.post(`/api/addresses`, address);
  return response.data;
});

export const deleteAddress = createAsyncThunk("delete", async (id) => {
    const response = await axios.delete(`/api/addresses/${id}`);
    return response.data;
  }
);

export const editAddress = createAsyncThunk("edit", async (address) => {
    const response = await axios.put(`/api/addresses/${address.id}`, address);
    return response.data;
  }
);

const UserAddressSlice = createSlice({
  name: "addresses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllAddresses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addresses = action.payload;
      })
      .addCase(getSingleAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addresses.push(action.payload);
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addresses.push(action.payload);
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.addresses = state.addresses.filter(
          (address) => address.id !== action.payload.id
        );
      })
      .addCase(editAddress.fulfilled, (state, action) => {
        state.status = "succeeded";
        const editedAddress = action.payload;
        const existingAddress = state.addresses.find(
          (address) => address.id === editedAddress.id
        );
        if (existingAddress) {
          existingAddress.addressLine1 = editedAddress.addressLine1;
          existingAddress.addressLine2 = editedAddress.addressLine2;
          existingAddress.city = editedAddress.city;
          existingAddress.state = action.payload;
        }
      })
      .addCase(editAddress.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setAddress, removeAddress, setAddressList } =
  UserAddressSlice.actions;

export default UserAddressSlice.reducer;
