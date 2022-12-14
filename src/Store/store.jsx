import thunk from "redux-thunk";
import {userLoginReducer, } from "./modules/login/reducer";
import { userRegisterReducer } from "./modules/register/reducer";
import { postImageReducer } from "./modules/images/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";


const reducers = combineReducers({
  postUserLogin: userLoginReducer,
  registerUser: userRegisterReducer,
  postImage: postImageReducer,

});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
