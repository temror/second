import React from 'react';
import c from './Posts.module.scss';
import Post from './Post/Post.jsx';

const Posts = () =>
{
    return (
      <div className= {c.posts}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      </div>
    );
}

export default Posts;
