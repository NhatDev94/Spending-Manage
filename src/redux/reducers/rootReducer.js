import { combineReducers } from "redux";
import spendingReducer from "./spendingReducer";
import filterReducer from './filterReducer'
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    spendingReducer,
    filterReducer,
    userReducer
})

export default rootReducer