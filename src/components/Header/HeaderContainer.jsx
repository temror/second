import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import {authMe, setIsFetching, setUserData} from "../../redux/auth-reducer";
import Preloader from "../../common/Preloader/Preloader";

class HeaderAPI extends React.Component{
    componentDidMount()
    {this.props.authMe()}
render(){
    return <>{this.props.isFetching && <Preloader/>}
    <Header{...this.props}/></>}}

let mapStateToProps = (state) =>
{
    return {
        isFetching: state.auth.isFetching,
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isLog: state.auth.isLog
}
}

let HeaderContainer = connect(mapStateToProps,
    {setUserData,setIsFetching,authMe})(HeaderAPI)

export default HeaderContainer