import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduсer";
import usersReducer from "./users-reduser";
import authReducer from "./auth-reducer";

let reducers = combineReducers( {
    profile : profileReducer,
    dialogs : dialogsReducer,
    users: usersReducer,
    auth: authReducer})

let store = createStore(reducers);

window.store = store;

export default store;