import thunk from "redux-thunk";
import {userLoginReducer, } from "./modules/login/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";


const reducers = combineReducers({
  postUserLogin: userLoginReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
