import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
            <App store={store}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );}
rerenderEntireTree()
store.subscribe(()=>{
    rerenderEntireTree()
})
serviceWorker.unregister();
