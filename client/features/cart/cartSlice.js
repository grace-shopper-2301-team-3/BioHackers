import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const CART_STORAGE_KEY = 'cart';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem(CART_STORAGE_KEY)
    if (serializedState === null) {
      return {
        items: [],
        total: 0,
      }
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading cart state from storage', err)
    return {
      items: [],
      totalPrice: 0,
    }
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(CART_STORAGE_KEY, serializedState)
  } catch (err) {
    console.error('error saving cart state to storage', err)
  }
};

const initialState = loadState();

export const addItemAsync = createAsyncThunk(
  'cart/addItem',
  async (newItem, { getState }) => {
    const existingItem = getState().cart.items.find(item => item.id === newItem.id)
    if (existingItem) {
      existingItem.quantity++
    } else {
      newItem.quantity = 1
      getState().cart.items.push(newItem)
    }
    getState().cart.totalPrice += newItem.price
    saveState(getState().cart)
    return getState().cart
  }
)

export const removeItemAsync = createAsyncThunk(
  'cart/removeItem',
  async (itemToRemove, { getState }) => {
    const existingItem = getState().cart.items.find(item => item.id === itemToRemove.id)
    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity--
      } else {
        getState().cart.items = getState().cart.items.filter(item => item.id !== itemToRemove.id)
      }
      getState().cart.totalPrice -= itemToRemove.price
      saveState(getState().cart)
    }
    return getState().cart
  }
)

export const clearCartAsync = createAsyncThunk(
  'cart/clearCart',
  async (_, { getState }) => {
    getState().cart.items = []
    getState().cart.totalPrice = 0
    saveState(getState().cart)
    return getState().cart
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addItemAsync.fulfilled, (state, action) => {
        return action.payload
      })
      .addCase(removeItemAsync.fulfilled, (state, action) => {
        return action.payload
      })
      .addCase(clearCartAsync.fulfilled, (state, action) => {
        return action.payload
      })
  },
});

export default cartSlice.reducer;
