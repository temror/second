import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduсer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers( {
    profile : profileReducer,
    dialogs : dialogsReducer,
    users: usersReducer,
    auth: authReducer})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store;

export default store;