import React from 'react';
import c from './Posts.module.scss';
import Post from './Post/Post.jsx';

const Posts = () => {
    return (
        <div className={c.posts}>
            <Post message='Hi,how are u?'/>
            <Post message='Hi, I`m fine, thank u))'/>
            <Post message='Oh, what a wonderful day!'/>
            <Post message='I like you.'/>
            <Post message='Yah'/>
            <Post message='Fuck'/>
        </div>
    );
}

export default Posts;
