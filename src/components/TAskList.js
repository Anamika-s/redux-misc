import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { actionCreators } from '../Action/Index'
import {LIST_TASK} from '../Reducers/Index';

export default function TAskList() {
    const taskclice= useSelector((state) => state)
const dispatch = useDispatch();
console.log(taskclice)
  

  return (
    
    <div>TAskList  </div>
  )
}
