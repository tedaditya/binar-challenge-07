import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import carReducer from "./CarReducer"

export default combineReducers({
    auth: authReducer,
    car: carReducer
});