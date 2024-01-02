import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "../Reducer/Auth.Reducer";

//create new store
const store = createStore(authReducer, applyMiddleware(thunk));

export default store;
