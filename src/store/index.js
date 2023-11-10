import { configureStore } from "@reduxjs/toolkit";
import WarehouseReducer from "./wareHouseSlice.js";

export const store = configureStore({
  reducer: {
    wareHouse: WarehouseReducer,
  },
});
