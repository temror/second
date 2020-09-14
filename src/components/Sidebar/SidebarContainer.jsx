import React from 'react';
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

let mapStateToProps = (state) =>{
    return{
        userId : state.auth.userId}}


const SidebarContainer = connect(mapStateToProps,
    {})(Sidebar)

export default SidebarContainer;
