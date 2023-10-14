import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/ModalSlice";
import cartReducer from "./features/cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
