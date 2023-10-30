import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";




const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    
    userCart :[],
  },
  reducers: {
    addItem: (state, action) => {
        state.userCart.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
