import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllProductss = createAsyncThunk('products/getAll', async () => {
  try {
    const { data } = await axios.get(`/api/products`);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const allStudentsSlice = createSlice({
    name: "products",
    initialState: {
        allProducts: [],
        error: null,
        status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
		builder
			.addCase(getAllProducts.fulfilled, (state, action) => {
				return action.payload;
			})
            .addCase(getAllProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
        }
  });
export const selectProducts = (state) => {
  return state.products;
} 

export default allProductsSlice.reducer;
