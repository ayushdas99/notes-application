import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../auth/authSlice'
import noteReducer from '../notes/noteSlice'



export default configureStore({
    reducer: {
        auth: authReducer,
        note: noteReducer,
        
    },
});