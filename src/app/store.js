import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../feature/counter/cart/cartSlice';


export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
