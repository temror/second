import React from 'react';
import c from './Profile.module.scss'
import Person from './Person/Person'
import MyPosts from './MyPosts/MyPosts'
import Posts from './Posts/Posts'

const Profile = () => {
    return (
        <div className={c.content}>
            <img className={c.slider} src="https://klike.net/uploads/posts/2019-01/1547367999_1.jpg"></img>
            <Person
            surname='Дунаева'
            name='Олеся'
            age="18"
            male="Женскиваи"
            city="Большая Алешня"
            />
            <MyPosts/>
            <Posts/>
        </div>
    );
}

export default Profile;
