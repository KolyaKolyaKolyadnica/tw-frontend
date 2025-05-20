import { createSlice } from "@reduxjs/toolkit";

export const propertyQrSlice = createSlice({
  name: "propertyQr",
  initialState: {
    text: "",
    shape: "classy",
    logo: "",
  },
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setShape: (state, action) => {
      state.shape = action.payload;
    },
    setLogo: (state, action) => {
      state.logo = action.payload;
    },
  },
});

export const { setText, setShape, setLogo } = propertyQrSlice.actions;
export default propertyQrSlice.reducer;
