import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        postsData : state.profile.posts
    }
}

const PostsContainer = connect(mapStateToProps)(Posts)
export default PostsContainer;
