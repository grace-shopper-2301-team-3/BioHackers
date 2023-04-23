import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllCategories = createAsyncThunk('categories/getAll', async () => {
  try {
    console.log("ALL CATEGORIES AXIOS WORKING")
    const { data } = await axios.get(`/api/categories`);
    return { allCategories: data };
  } catch (error) {
    return error.message;
  }
});

export const allCategoriesSlice = createSlice({
    name: "categories",
    initialState: {
        allCategories: [],
        error: null,
        status: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllCategories.fulfilled, (state, action) => {
          state.allCategories = action.payload.allCategories;
          state.status = 'succeeded';
        })
        .addCase(getAllCategories.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        })
    },
  });
export const selectCategory = (state) => {
  return state.categories;
} 

export default allCategoriesSlice.reducer;
