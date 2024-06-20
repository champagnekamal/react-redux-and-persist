import { createSlice } from "@reduxjs/toolkit";


 export interface CounterState {
    name:string,
    age:string,
    birthyear:number
 }

export const counterslice = createSlice({
    name: "counter",
    initialState: { name: 'akash',age:'24',birthyear:0 },
    reducers: {
        UPDATE_ALL: (state:CounterState, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.birthyear = action.payload.birthyear;
        },
     
    },
})

export const {UPDATE_ALL} = counterslice.actions

export default counterslice.reducer