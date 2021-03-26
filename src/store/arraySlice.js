import { createSlice } from "@reduxjs/toolkit";

const arraySlice = createSlice({
  name: "array",
  initialState: {
    value: [],
    currentIndex: 0,
    comparedIndex: 1,
  },
  reducers: {
    setArray: (state, action) => {
      state.value = action.payload;
    },
    setCurrentIndex: (state, action) => {
      state.currentIndex = action.payload;
    },
    setComparedIndex: (state, action) => {
      state.comparedIndex = action.payload;
    },
    updateArrayPositions: (state, action) => {
      const { index1, index2 } = action.payload;
      const temp = state.value[index1];
      state.value[index1] = state.value[index2];
      state.value[index2] = temp;
      // state.value = [
      //   ...state.value.slice(0, index1),
      //   state.value[index2],
      //   state.value[index1],
      //   ...state.value.slice(index2 + 1)
      // ]
    },
  },
});

export const {
  setArray,
  setCurrentIndex,
  updateArrayPositions,
  setComparedIndex
} = arraySlice.actions;


export default arraySlice.reducer;
