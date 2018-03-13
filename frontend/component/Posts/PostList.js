import React from 'react';
import Post from './Post';

const PostList = props => (
  <ul>
    {props.articles.map(article => <Post key={article.id} article={article} />)}
  </ul>
);

export default PostList;
