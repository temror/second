import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import Profile from './components/Profile.jsx';


const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;
