import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  title: "",
  imageUrl: "",
  gender: "",
  price: 0,
  color: "",
  id: "",
  description: "",
  status: "",
};

export const infoSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    Info: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { Info } = infoSlice.actions;

export default infoSlice.reducer;
