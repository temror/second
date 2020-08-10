import React from 'react';
import {onPostChange, addPost} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) =>{
    return{
        postText : state.profile.postText
    }
}
const MyPostsContainer = connect(mapStateToProps,
    {addPost, onPostChange})(MyPosts)

export default MyPostsContainer;