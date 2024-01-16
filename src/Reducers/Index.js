import { createSlice } from "@reduxjs/toolkit";
export const taskSlice = createSlice({
 name :'taskclice',
 initialState: {
    task: [],
  },
 reducers:{
    ADD_TASK: (state, action)=>
    {
        return {
            ...state,
            task: [...state.task, action.payload],
          }
    },
    DELETE_TASK: (state, action)=>
    {
        return {
            ...state,
            task: state.task.filter((item) => item.id !== action.payload.id),
          }
    },
    LIST_TASK : (state, action)=>
    {
        return{ 
            state 
        }
    }

 }
})

export const {ADD_TASK, DELETE_TASK, LIST_TASK} = taskSlice.actions;
export default taskSlice.reducer;