import { combineReducers } from "redux";
import amountReducer from './Reducer/AmountReducer';

const reducers = combineReducers(
  {
    amount:amountReducer
    
  }
)

export default reducers;
