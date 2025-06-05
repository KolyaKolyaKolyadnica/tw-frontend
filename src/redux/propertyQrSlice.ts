import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { updateGradientOffset } from "@/utils/qrHelpers";
import type {
  QrCodeState,
  StoreKeyTypeColor,
  StoreKeyTypePoint,
} from "./types";
import { CornerDotType, CornerSquareType, DotType } from "qr-code-styling";

export const propertyQrSlice = createSlice({
  name: "propertyQr",
  initialState: <QrCodeState>{
    shape: "square",
    width: 100,
    height: 100,
    type: "svg",
    data: "https://github.com/KolyaKolyaKolyadnica/tw-frontend",
    dotsOptions: {
      type: "classy",
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#4267b2" },
          { offset: 1, color: "#ff0000" },
        ],
      },
    },
    cornersSquareOptions: {
      type: undefined,
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#4267b2" },
          { offset: 1, color: "#ff0000" },
        ],
      },
    },
    cornersDotOptions: {
      type: undefined,
      gradient: {
        type: "linear",
        rotation: 0,
        colorStops: [
          { offset: 0, color: "#4267b2" },
          { offset: 1, color: "#ff0000" },
        ],
      },
    },
    backgroundOptions: {
      gradient: {
        type: "linear",
        rotation: 90,
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

    optionsType: (
      state,
      action: PayloadAction<{
        storeKey: StoreKeyTypePoint;
        newType: DotType | CornerSquareType | CornerDotType;
      }>
    ) => {
      const { storeKey, newType } = action.payload;

      state[storeKey].type = newType;
    },

    setLogo: (state, action) => {
      state.image = action.payload;
    },

    updateColorStore: (
      state,
      action: PayloadAction<{
        storeKey: StoreKeyTypeColor;
        targetColor: number | null;
        newColor: string;
      }>
    ) => {
      const { storeKey, targetColor, newColor } = action.payload;
      const { colorStops } = state[storeKey].gradient;

      if (targetColor !== null) {
        colorStops[targetColor].color = newColor;
      }
    },

    deleteColorStore: (
      state,
      action: PayloadAction<{
        storeKey: StoreKeyTypeColor;
        index: number;
      }>
    ) => {
      const { storeKey, index } = action.payload;
      const { colorStops } = state[storeKey].gradient;

      const newArr = [...colorStops.filter((el, i) => i !== index)];

      state[storeKey].gradient.colorStops = updateGradientOffset(newArr);
    },

    getColorStore: (
      state,
      action: PayloadAction<{
        storeKey: StoreKeyTypeColor;
      }>
    ) => {
      const { storeKey } = action.payload;
      const { colorStops } = state[storeKey].gradient;

      const newArr = [
        ...colorStops,
        {
          offset: 0,
          color: colorStops[colorStops.length - 1]?.color || "#000000",
        },
      ];

      state[storeKey].gradient.colorStops = updateGradientOffset(newArr);
    },
    rotationGradient: (
      state,
      action: PayloadAction<{
        storeKey: StoreKeyTypeColor;
        rotationAngle: number;
      }>
    ) => {
      const { storeKey, rotationAngle } = action.payload;
      state[storeKey].gradient.rotation = rotationAngle;
    },
  },
});

export const {
  setText,
  optionsType,
  setLogo,
  updateColorStore,
  deleteColorStore,
  getColorStore,
  rotationGradient,
} = propertyQrSlice.actions;

export default propertyQrSlice.reducer;
