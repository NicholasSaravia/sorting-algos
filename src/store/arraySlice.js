import { createSlice } from "@reduxjs/toolkit";

const arraySlice = createSlice({
    name: "array",
    initialState: {
        value: [],
        currentIndex: 0
    },
    reducers:{
        setArray: (state, action) => {
            state.value = action.payload;
        },
        setCurrentIndex: (state, action) => {
            state.currentIndex = action.payload
        }
    }
});

export const {setArray, setCurrentIndex} = arraySlice.actions;
export default arraySlice.reducer;