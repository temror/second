import React from 'react';
import c from './Profile.module.scss'
import Person from './Person/Person'
import MyPosts from './MyPosts/MyPosts'
import Posts from './Posts/Posts'
const Profile = (props) => {
    let newPerson = props.profile.person.map(p=>
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
            <MyPosts dispatch={props.dispatch} postText={props.profile.postText}/>
            <Posts postsData={props.profile.posts}/>
        </div>
    );
}

export default Profile;
