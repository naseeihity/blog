import React, { Component } from 'react';
import PostList from './PostList';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(articles => this.setState({ data: articles }));
  }

  render() {
    return <PostList articles={this.state.data} />;
  }
}

export default Posts;
