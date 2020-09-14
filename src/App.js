import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
//import Footer from "./components/Footer/Footer";
const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <SidebarContainer/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:id?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' a
                       render={() => <Dialogs/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>
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