import React from 'react';

const Post = (props) => {
  const { title, content } = props.article;
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Post;
