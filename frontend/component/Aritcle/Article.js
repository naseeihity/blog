import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: props.post
    };
  }

  componentDidMount() {
    this.props.postOpened(this.state.currentPost);
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
