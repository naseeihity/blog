import React from 'react';
import Post from './Post';

const PostList = props => (
  <div>
    {props.articles.map(article => <Post key={article.id} article={article} />)}
  </div>
);

export default PostList;
