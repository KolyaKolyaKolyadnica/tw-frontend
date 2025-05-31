import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateGradientOffset } from "@/utils/qrHelpers";

export const propertyQrSlice = createSlice({
  name: "propertyQr",
  initialState: {
    width: 100,
    height: 100,
    type: "svg",
    data: "https://github.com/KolyaKolyaKolyadnica/tw-frontend",
    dotsOptions: {
      shape: "classy",
      gradient: {
        type: "linear",
        rotation: 45 * (Math.PI / 180),
        colorStops: [
          { offset: 0, color: "#4267b2" },
          { offset: 1, color: "#ff0000" },
        ],
      },
    },
    cornersSquareOptions: {
      gradient: {
        type: "linear",
        rotation: 90 * (Math.PI / 180),
        colorStops: [
          { offset: 0, color: "#4267b2" },
          { offset: 1, color: "#ff0000" },
        ],
      },
    },
    backgroundOptions: {
      gradient: {
        type: "linear",
        rotation: 90 * (Math.PI / 180),
        colorStops: [
          { offset: 0, color: "#4267b2" },
          { offset: 1, color: "#ffffff" },
        ],
      },
    },
    image: "",
  },

  reducers: {
    setText: (state, action) => {
      state.data = action.payload;
    },
    setShape: (state, action) => {
      state.dotsOptions.shape = action.payload;
    },
    setLogo: (state, action) => {
      state.image = action.payload;
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
      const currentColorStops = state[storeKey].gradient.colorStops;

      if (targetColor !== null) {
        currentColorStops[targetColor].color = newColor;
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
      const currentColorStops = state[storeKey].gradient.colorStops;

      const newArr = [...currentColorStops.filter((el, i) => i !== index)];

      state[storeKey].gradient.colorStops = updateGradientOffset(newArr);
    },

    getColorStore: (
      state,
      action: PayloadAction<{
        storeKey: "dotsOptions" | "cornersSquareOptions" | "backgroundOptions";
      }>
    ) => {
      const { storeKey } = action.payload;
      const currentColorStops = state[storeKey].gradient.colorStops;

      const newArr = [
        ...currentColorStops,
        {
          offset: 0,
          color:
            currentColorStops[currentColorStops.length - 1]?.color || "#000000",
        },
      ];

      state[storeKey].gradient.colorStops = updateGradientOffset(newArr);
    },
  },
});

export const {
  setText,
  setShape,
  setLogo,
  updateColorStore,
  deleteColorStore,
  getColorStore,
} = propertyQrSlice.actions;

export default propertyQrSlice.reducer;
