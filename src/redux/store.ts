import { configureStore } from "@reduxjs/toolkit";
import propertyQrReducer from "./propertyQrSlice";

export default configureStore({
  reducer: {
    propertyQr: propertyQrReducer,
  },
});
