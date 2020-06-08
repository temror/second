import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {changePostText, sendPost} from './redux/store'
export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} sendPost={sendPost} changePostText={changePostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );}
