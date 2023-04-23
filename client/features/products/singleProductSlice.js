import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const getSingleProduct = createAsyncThunk('/singleProduct', async (id) => {
  try {
    console.log("AXIOS WORKING IN SINGLE Product")
    const { data } = await axios.get(`/api/products/${id}`);
    return data;
  } catch (error) {
    return error.message;
  }
});

// export const addProductAsync = createAsyncThunk(
//   "singleProduct",
//   async ({ productName, productPrice, imageUrl, description, category }) => {
//     try {
//       const { data } = await axios.post(`/products`, {
//         productName,
//         productPrice,
//         imageUrl,
//         // productId,
//         description,
//         category
//       });
//       return data;
//     } catch (err) {
//       console.log(err);
//       throw err;
//     }
//   }
// );

export const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState: {
        Product: [],
        error: null,
        status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
		builder
			.addCase(getSingleProduct.fulfilled, (state, action) => {
				return action.payload;
			})
      .addCase(getSingleProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
      })
    }
  });
export const selectSingleProduct = (state) => state.singleProduct;

export default singleProductSlice.reducer;
