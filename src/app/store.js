import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import myCounterReducer from '../features/counter/myCounterSlice';
import clrReducer from '../features/counter/clrSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    myCounter :myCounterReducer,
    clr: clrReducer
  },
});
