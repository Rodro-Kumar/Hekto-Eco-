import { configureStore } from "@reduxjs/toolkit";
import Slice from "../Slice/Slice";
export const store = configureStore({
  reducer: {
    Product: Slice,
  },
});
