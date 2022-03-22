import {combineReducers} from "@reduxjs/toolkit";
import reducer from "./reducer";

export const reducers = combineReducers({
    count: reducer

})