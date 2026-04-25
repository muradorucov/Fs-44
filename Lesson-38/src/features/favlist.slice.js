import { createSlice } from "@reduxjs/toolkit";

const favlistSlice = createSlice({
  name: "favlist",
  initialState: {
    value: []
  },
  reducers: {
    addToListAction: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromListAction: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload)
    }
  }
})


export const { addToListAction, removeFromListAction } = favlistSlice.actions;
export default favlistSlice.reducer;