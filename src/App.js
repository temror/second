import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
//import Footer from "./components/Footer/Footer";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Sidebar friend={props.state.sidebar.friend}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <Profile
                               profile={props.state.profile}
                               dispatch={props.dispatch}/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogs={props.state.dialogs}
                               dispatch={props.dispatch}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
                {/*
                <Footer />*/}
            </div>
    );
}

export default App;
