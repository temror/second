import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import * as axios from "axios";
import {setIsFetching, setUserData} from "../../redux/auth-reducer";
import Preloader from "../../common/Preloader/Preloader";

class HeaderAPI extends React.Component{
    componentDidMount()
    {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true
        })
            .then(response =>{
                this.props.setIsFetching(false)
                if(response.data.resultCode === 0){
                this.props.setUserData(
                    response.data.data.id,
                    response.data.data.email,
                    response.data.data.login)}
            })
    }
render(){
    return <>
        {this.props.isFetching && <Preloader/>}
    <Header
        {...this.props}/>
</>
}
}

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

let HeaderContainer = connect(mapStateToProps,{setUserData,setIsFetching})(HeaderAPI)

export default HeaderContainer