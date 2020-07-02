import React from 'react';
import {changePostTextActionCreator, sendPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) =>{
    return{
        postText : state.profile.postText
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        addPostContainer : (mes) =>{
            dispatch(sendPostActionCreator(mes))
            dispatch(changePostTextActionCreator(''))},
        onPostChangeContainer : (change) =>{
            dispatch(changePostTextActionCreator(change))
        }

    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
