import React from 'react';
import c from './Post.module.scss'

const Post = (props) => {
    return (
        <div className={c.post}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg"></img>
            <p>{props.message}</p>
        </div>
    );
}

export default Post;
