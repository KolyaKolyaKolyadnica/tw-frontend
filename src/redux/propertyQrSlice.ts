import { createSlice } from "@reduxjs/toolkit";

export const propertyQrSlice = createSlice({
  name: "propertyQr",
  initialState: {
    text: "https://github.com/KolyaKolyaKolyadnica/tw-frontend",
    shape: "classy",
    colorStops: [
      { offset: 0, color: "#4267b2" },
      { offset: 1, color: "#ff0000" },
    ],
    colorBg: [
      { offset: 0, color: "#4267b2" },
      { offset: 1, color: "#ff0000" },
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
    updateColorStore: (
      state,
      action: PayloadAction<{
        storeKey: "colorStops";
        targetColor: number;
        newColor: string;
      }>
    ) => {
      const { storeKey, targetColor, newColor } = action.payload;
      if (targetColor !== -1) {
        state[storeKey][targetColor].color = newColor;
      }
    },

    deleteColorStore: (
      state,
      action: PayloadAction<{ storeKey: "colorStops"; index: number }>
    ) => {
      const { storeKey, index } = action.payload;

      const newArr = [
        ...state[storeKey].slice(0, index),
        ...state[storeKey].slice(index + 1),
      ];

      state[storeKey] = updateOffset(newArr);
    },

    pushColorStore: (
      state,
      action: PayloadAction<{ storeKey: "colorStops" | "colorBg" }>
    ) => {
      const { storeKey } = action.payload;
      console.log("storeKey", storeKey);
      console.log("state.colorStops", JSON.stringify(state[storeKey]));
      const newArr = [
        ...state[storeKey],
        {
          offset: 0,
          color:
            state[storeKey][state[storeKey].length - 1]?.color || "#000000",
        },
      ];

      state[storeKey] = updateOffset(newArr);
    },
  },
});

function updateOffset(newArr: { offset: number; color: string }[]) {
  const step = newArr.length > 1 ? 1 / (newArr.length - 1) : 0;
  return newArr.map((el, i) => ({
    ...el,
    offset: 0 + step * i,
  }));
}

export const {
  setText,
  setShape,
  setColorStops,
  setLogo,
  updateColorStore,
  deleteColorStore,
  pushColorStore,
} = propertyQrSlice.actions;

export default propertyQrSlice.reducer;
