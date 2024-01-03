import depWithDrawReducer from './reducers/Index';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: 
    {
        amt : depWithDrawReducer
    }
})