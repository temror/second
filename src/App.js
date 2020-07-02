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
import ProfileContainer from "./components/Profile/ProfileContainer";
//import Footer from "./components/Footer/Footer";
const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Sidebar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs/>}/>
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
