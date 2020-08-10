import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import * as axios from "axios";
import {setProfile,setIsFetching} from "../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import {withRouter} from 'react-router-dom'

class ProfileAPI extends React.Component{
    componentDidMount() {
        this.props.setIsFetching(true)
        let id = this.props.match.params.id
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(
            response => {
                this.props.setIsFetching(false)
                this.props.setProfile(
                    response.data)
            })
    }

    render() {
        return(<>
            {this.props.isFetching && <Preloader/>}
            <Profile {...this.props} profile = {this.props.profile} person = {this.props.person}/>
            </>
        )
    }
}

let mapStateToProps = (state) =>{
    return{
        profile : state.profile.profile,
        person: state.profile.person,
        isFetching: state.profile.isFetching

    }
}

let ProfileRouter = withRouter(ProfileAPI)

const ProfileContainer = connect(mapStateToProps,{setProfile,setIsFetching})(ProfileRouter)

export default ProfileContainer;
