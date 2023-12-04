import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    color: "red"
};


export const clrSlice = createSlice({
  name: 'clr',
  initialState,
  reducers: {
    cngColor:(state,payload)=>{
        // console.log(payload.payload.color);
        state.color =payload.payload.color
    },
  },
});

export const {cngColor } = clrSlice.actions;
export const selectColor = (state) => state.clr.color;
export default clrSlice.reducer;
