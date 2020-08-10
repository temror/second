import React from 'react';
import c from './MyPosts.module.scss'

const MyPosts = (props) => {
    let newPost = React.createRef();
    let addPost = () => {
        props.addPost(newPost.current.value)
        props.onPostChange('')
    }
    let onPostChange = () => {
        props.onPostChange(newPost.current.value)
    }
    return (
        <div className={c.create_posts}>
            <h1>Your post:</h1>
            <div className={c.text_area}>
                <input className={c.textarea} type="text"
                       ref={newPost}
                       value={props.postText}
                       onChange={onPostChange}/>
                <input className={c.button} type="button" value="Send >" onClick={addPost}/>
            </div>
        </div>
    );
}

export default MyPosts;
