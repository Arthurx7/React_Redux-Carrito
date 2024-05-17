import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(product => product.id !== action.payload);
    },
    updateProductQuantity: (state, action) => {
      const product = state.products.find(product => product.id === action.payload.id);
      if (product) {
        product.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addProduct, removeProduct, updateProductQuantity } = cartSlice.actions;

export const selectCart = (state) => state.cart.products;

export default cartSlice.reducer;
