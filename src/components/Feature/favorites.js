import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  count: 0,
};
export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { value: initialStateValue },
  reducers: {
    favorite: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { favorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
