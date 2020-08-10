import React from 'react';
import c from './Posts.module.scss';
    const Posts = (props) => {
    return (
        <div className={c.posts}>
            { props.postsData.map(p => (
                <div className={c.post}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg"></img>
                    <p>{p.text}</p>
                </div>)) }
        </div>
    );
}

export default Posts;
