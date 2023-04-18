import { createSlice } from '@reduxjs/toolkit';

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

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        newItem.quantity = 1
        state.items.push(newItem)
      }
      state.totalPrice += newItem.price
      saveState(state)
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload
      const existingItem = state.items.find(item => item.id === itemToRemove.id)
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--
        } else {
          state.items = state.items.filter(item => item.id !== itemToRemove.id)
        }
        state.totalPrice -= itemToRemove.price
        saveState(state)
      }
    },
    clearCart: state => {
      state.items = []
      state.totalPrice = 0
      saveState(state)
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
