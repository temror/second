import React from 'react';
import Profile from "./Profile";
const ProfileContainer = (props) => {
    let state = props.store.getState()
    let newPerson = state.profile.person
    return (
        <Profile store = {props.store} newPersonContainer = {newPerson}/>
    );
}

export default ProfileContainer;
