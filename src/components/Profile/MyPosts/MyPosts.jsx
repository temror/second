import React from 'react';
import c from './MyPosts.module.scss'
const MyPosts = () =>
{
    return (
      <div className = {c.create_posts}>
        <h1>Your post:</h1>
        <div className = {c.text_area}>
          <input className = {c.textarea} type="text"></input>
          <input className = {c.button} type="button" value="Send"></input>
        </div>
        </div>
    );
}

export default MyPosts;
