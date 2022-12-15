import thunk from "redux-thunk";
import {userLoginReducer, } from "./modules/login/reducer";
import { userRegisterReducer } from "./modules/register/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";


const reducers = combineReducers({
  postUserLogin: userLoginReducer,
  registerUser: userRegisterReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
