import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // TODO： add 404 page
    const { post } = this.props;
    return (
      <div>{post ? <ReactMarkdown source={post.body} /> : 'Loading……'}</div>
    );
  }
}

export default Article;
