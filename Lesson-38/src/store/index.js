import { configureStore } from "@reduxjs/toolkit";
import favlistReducer from "../features/favlist.slice"

export const store = configureStore({
  reducer: {
    favlist: favlistReducer
  }
})
