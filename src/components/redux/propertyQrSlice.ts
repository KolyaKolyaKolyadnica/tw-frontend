import { createSlice } from "@reduxjs/toolkit";

export const propertyQrSlice = createSlice({
  name: "propertyQr",
  initialState: {
    text: "https://github.com/KolyaKolyaKolyadnica/tw-frontend",
    shape: "classy",
    colorStops: [
      { offset: 0, color: "#4267b2" },
      // { offset: 1, color: "#ff0000" },
    ],
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
    setColorStops: (state, action) => {
      state.colorStops = action.payload;
    },
    // Возможно с целью аптимизации будет лучше обрашаться к каждому значению отдельно, а не перезаписывать весь обект полностью?
    // setColorStops_Test: (state, action) => {
    //   const { type, index, value } = action.payload;

    //   switch (type) {
    //     case "update":
    //       if (index !== undefined && value) {
    //         state.colorStops[index] = value;
    //       }
    //       break;

    //     case "push":
    //       if (value) {
    //         state.colorStops.push(value);
    //       }
    //       break;

    //     case "delete":
    //       if (index !== undefined) {
    //         state.colorStops.splice(index, 1);
    //       }
    //       break;

    //     default:
    //       console.warn("Unknown gradient operation:", type);
    //   }
    // },
  },
});

export const { setText, setShape, setColorStops, setLogo } =
  propertyQrSlice.actions;
export default propertyQrSlice.reducer;
