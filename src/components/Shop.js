import React from 'react'
import { useSelector, useDispatch } from 
'react-redux'
import { actionCreators } from '../Action/Index'
export const Shop = () => {
    const {amount} = useSelector(state => state)
    const dispatch = useDispatch();
  return (
    <div>Shop
   <h1> Deposit / Withdraw Money   
    <br/>
    Amount is {amount}
   </h1>
   
   <br/>
      <button className='btn btn-primary' onClick=
      {() => {dispatch(actionCreators.depositMoney(100))}}> +  </button>  
      Update Balance
      <button className='btn btn-primary' onClick={() => {dispatch(actionCreators.withdrawMoney(100))}}> -  </button>  
      
        </div>
  )
}


 