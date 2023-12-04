import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    baga:3
};


export const myCounterSlice = createSlice({
  name: 'myCounter',
  initialState,
  reducers: {
    cngWaga:(state)=>{
        state.baga +=1
    },
  },
});

export const {cngWaga } = myCounterSlice.actions;
export const selectBaga = (state) => state.myCounter.baga;
export default myCounterSlice.reducer;
