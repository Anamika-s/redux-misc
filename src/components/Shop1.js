import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators } from '../Action/Index'
import {withdraw, deposit} from '../state/reducers/Index'
export const Shop1 = () => {
    const amt= useSelector((state) => state.amt)
    const dispatch = useDispatch();
  return (
    <div>Shop
   <h1> Deposit / Withdraw Money   
    <br/>
    Amount is {amt}
   </h1>
   
   <br/>
      <button className='btn btn-primary' onClick={() => dispatch(deposit(100))}> +  </button>  
      Update Balance
      <button className='btn btn-primary' onClick={() => dispatch(withdraw(100))}> -  </button>  
      
        </div>
  )
}


 