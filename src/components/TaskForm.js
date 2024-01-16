import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { actionCreators } from '../Action/Index'
import {ADD_TASK,DELETE_TASK} from '../Reducers/Index';

export default function TaskForm() {
    const taskclice= useSelector((state) => state)
const dispatch = useDispatch();

    const task1 = {name:"t1", duration:20}
    // Add = () =>
    // {

    // }
  return (
    
    <div>TaskForm
        {taskclice.length}
    {/* {() => dispatch(deposit(100))} */}
    {/* <button onClick={Add}> Add </button> */}
    <button onClick={()=>dispatch(ADD_TASK(task1))}> Add </button>
    </div>
  )
}
