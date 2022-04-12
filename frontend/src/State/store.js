import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../auth/authSlice'
import goalReducer from '../goals/goalSlice'


export default configureStore({
    reducer: {
        auth: authReducer,
        goals: goalReducer,
        
    },
});