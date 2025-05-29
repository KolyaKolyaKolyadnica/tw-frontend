import { createSlice } from "@reduxjs/toolkit";
import { updateGradientOffset } from "@/utils/qrHelpers";

export const propertyQrSlice = createSlice({
  name: "propertyQr",
  initialState: {
    text: "https://github.com/KolyaKolyaKolyadnica/tw-frontend",
    dotsOptions: {
      shape: "classy",
      gradient: [
        { offset: 0, color: "#4267b2" },
        { offset: 1, color: "#ff0000" },
      ],
    },
    cornersSquareOptions: {
      gradient: [
        { offset: 0, color: "#4267b2" },
        { offset: 1, color: "#ff0000" },
      ],
    },
    backgroundOptions: {
      gradient: [
        { offset: 0, color: "#4267b2" },
        { offset: 1, color: "#ffffff" },
      ],
    },
    logo: "",
  },

  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    setShape: (state, action) => {
      state.dotsOptions.shape = action.payload;
    },
    setLogo: (state, action) => {
      state.logo = action.payload;
    },

    updateColorStore: (
      state,
      action: PayloadAction<{
        storeKey: "dotsOptions" | "cornersSquareOptions" | "backgroundOptions";
        targetColor: number | null;
        newColor: string;
      }>
    ) => {
      const { storeKey, targetColor, newColor } = action.payload;

      if (targetColor !== null) {
        state[storeKey].gradient[targetColor].color = newColor;
      }
    },

    deleteColorStore: (
      state,
      action: PayloadAction<{
        storeKey: "dotsOptions" | "cornersSquareOptions" | "backgroundOptions";
        index: number;
      }>
    ) => {
      const { storeKey, index } = action.payload;
      const newArr = [
        ...state[storeKey].gradient.filter((el, i) => i !== index),
      ];

      state[storeKey].gradient = updateGradientOffset(newArr);
    },

    pushColorStore: (
      state,
      action: PayloadAction<{
        storeKey: "dotsOptions" | "cornersSquareOptions" | "backgroundOptions";
      }>
    ) => {
      const { storeKey } = action.payload;

      const newArr = [
        ...state[storeKey].gradient,
        {
          offset: 0,
          color:
            state[storeKey].gradient[state[storeKey].gradient.length - 1]
              ?.color || "#000000",
        },
      ];

      state[storeKey].gradient = updateGradientOffset(newArr);
    },
  },
});

export const {
  setText,
  setShape,
  setLogo,
  updateColorStore,
  deleteColorStore,
  pushColorStore,
} = propertyQrSlice.actions;

export default propertyQrSlice.reducer;
