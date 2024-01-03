import { createSlice } from "@reduxjs/toolkit";
export const depWithDrawSlice = createSlice({
 name :'depwithdraw',
 initialState:100,
 reducers:{
    withdraw: (state, action)=>
    {
        return state+= action.payload;
    },
    deposit: (state, action)=>
    {
 return state-= action.payload;
    }
    
 }
})

export const {withdraw, deposit} = depWithDrawSlice.actions;
export default depWithDrawSlice.reducer;