import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reduсer";

let reducers = combineReducers( {
    profile : profileReducer,
    dialogs : dialogsReducer})

let store = createStore(reducers);

export default store;