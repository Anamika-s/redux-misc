import taskSlice from './Index'
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer: 
    {
        taskclice : taskSlice
    }
})