import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setProfile, setIsFetching, getProfile} from "../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {withRouter} from 'react-router-dom'

class ProfileAPI extends React.Component{
    componentDidMount() {this.props.getProfile(this.props.match.params.id)}
    render() {
        return(<>
            {this.props.isFetching && <Preloader/>}
            <Profile
                {...this.props}
                profile = {this.props.profile}
                person = {this.props.person}/>
            </>)}}

let mapStateToProps = (state) =>{
    return{
        profile : state.profile.profile,
        person: state.profile.person,
        isFetching: state.profile.isFetching}}

let ProfileRouter = withRouter(ProfileAPI)

const ProfileContainer = connect(mapStateToProps,
    {setProfile,setIsFetching,getProfile})(ProfileRouter)

export default ProfileContainer;
