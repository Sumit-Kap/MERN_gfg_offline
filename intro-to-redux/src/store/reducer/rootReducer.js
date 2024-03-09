import bankingReducer from "./bankingReducer";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
    banking: bankingReducer,
})

export default rootReducer;