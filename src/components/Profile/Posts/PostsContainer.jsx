import React from 'react';
import c from './Posts.module.scss';
import Post from './Post/Post.jsx';
import Posts from "./Posts";
const PostsContainer = (props) => {
    let state = props.store.getState()
    let postsData = state.profile.posts
    return (
        <Posts postsData = {postsData}/>
    );
}

export default PostsContainer;
