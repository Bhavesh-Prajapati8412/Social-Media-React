import {configureStore, createSlice} from "@reduxjs/toolkit"

// const INITIAL_VALUE = {
//   counter: 0
// }

const counterSlice = createSlice({
  name: 'counter',
  initialState: {counterVal:  0},
  reducers:{
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;

    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    }
  }
})

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if(action.type === 'INCREMENT'){
//     return {counter: store.counter + 1};
//   } else if(action.type === 'DECREMENT'){
//     return {counter: store.counter - 1};
//   } else if(action.type === 'ADD'){
//     return {counter: store.counter + Number(action.payload.num)};
//   } else if(action.type === 'SUBTRACT'){
//     return {counter: store.counter - Number(action.payload.num)};
//   }
//   return store;
// }


const counterStore = configureStore({reducer: {
  counter: counterSlice.reducer
}});

export const counterAction = counterSlice.action;
export default counterStore;