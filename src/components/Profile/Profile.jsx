import React from 'react';
import c from './Profile.module.scss'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import PostsContainer from "./Posts/PostsContainer";
import Person from "./Person/Person";
import PersonContainer from "./Person/PersonContainer";
const Profile = (props) => {
    return (
        <div className={c.content}>
            <div className={c.slider}>
            </div>
            <Person profile={props.profile} person={props.person}/>
            <MyPostsContainer/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
