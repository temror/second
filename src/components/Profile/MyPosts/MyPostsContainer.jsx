import React from 'react';
import {changePostTextActionCreator, sendPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let postText = state.profile.postText
    let addPost = (mes) => {
        props.store.dispatch(sendPostActionCreator(mes))
        props.store.dispatch(changePostTextActionCreator(''))
    }
    let onPostChange = (change) => {
        props.store.dispatch(changePostTextActionCreator(change))

    }
    return (
        <MyPosts
            postText={postText}
            addPostContainer={addPost}
            onPostChangeContainer={onPostChange}/>
    );
}

export default MyPostsContainer;
