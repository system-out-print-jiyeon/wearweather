import { combineReducers } from "redux";
// import userReducer from "./user";
// import certReducer from "./cert";


const reducer = combineReducers({
    // user: userReducer,
    // certList: certReducer
})
 
export default reducer

export type RootState = ReturnType<typeof reducer>;
