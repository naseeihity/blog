import React, { Component } from 'react';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.post.content}</div>;
  }
}

export default Article;
