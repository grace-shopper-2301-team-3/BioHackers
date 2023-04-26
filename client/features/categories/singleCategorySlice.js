import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSingleCategory = createAsyncThunk(
  "/singleCategory",
  async (id) => {
    try {
      console.log("AXIOS WORKING IN SINGLE Category");
      const { data } = await axios.get(`/api/categories/${id}`);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);

export const addCategoryAsync = createAsyncThunk(
  "singleCategory",
  async ({ name, imageUrl, categoryId, description }) => {
    try {
      const { data } = await axios.post(`/Categorys`, {
        name,
        imageUrl,
        categoryId,
        description,
      });
      return data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

export const singleCategorySlice = createSlice({
  name: "singleCategory",
  initialState: {
    Category: [],
    error: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleCategory.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(getSingleCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectSingleCategory = (state) => state.singleCategory;

export default singleCategorySlice.reducer;
