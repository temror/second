import React from 'react';
import c from './Profile.module.scss'
import Person from './Person/Person'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import PostsContainer from "./Posts/PostsContainer";
const Profile = (props) => {
    let newPerson = props.newPersonContainer.person.map(p=>
        <Person
            avatar = {p.avatar}
            surname={p.surname}
            name={p.name}
            age={p.age}
            male={p.male}
            city={p.city}
        />)
    return (
        <div className={c.content}>
            <div className={c.slider}>
                <div className={c.link}>I</div>
                <div className={c.link}>Wanna</div>
                <div className={c.link}>Hold</div>
                <div className={c.link}>Your</div>
                <div className={c.link}>Hand</div>
            </div>
            {newPerson}
            <MyPostsContainer/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
