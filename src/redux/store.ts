import { configureStore } from "@reduxjs/toolkit";
import propertyQrReducer from "./propertyQrSlice";

const store = configureStore({
  reducer: {
    propertyQr: propertyQrReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
