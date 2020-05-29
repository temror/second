import React from 'react';
import c from './Posts.module.scss';
import Post from './Post/Post.jsx';
    const Posts = (props) => {
    let newPostsData = props.postsData.map(p => ( <Post message={p.text} likes={p.likesCount}/>))
    return (
        <div className={c.posts}>
            { newPostsData }
        </div>
    );
}

export default Posts;
