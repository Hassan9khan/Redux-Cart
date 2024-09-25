import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartSice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }
})
