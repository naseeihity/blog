import React from "react";

const Post = props => {
  const title = props.article.title;
  const content = props.article.content;
  return (
    <article>
      <h2>{title}</h2>
      <p>{content}</p>
    </article>
  );
};

export default Post;
