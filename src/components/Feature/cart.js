import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  count: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: { value: initialStateValue },
  reducers: {
    cart: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { cart } = cartSlice.actions;

export default cartSlice.reducer;
