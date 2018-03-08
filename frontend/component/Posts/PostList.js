import React from "react";
import Post from "./Post";

const PostList = props => {
  return (
    <ul>
      {props.articles.map((article, index) => (
        <Post key={index} article={article} />
      ))}
    </ul>
  );
};

export default PostList;
