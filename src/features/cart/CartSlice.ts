import cartItems from "@/mock/cartItems";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: cartItems,
  amount: 0, // 合計カート内アイテム数
  total: 0, // 合計金額
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
