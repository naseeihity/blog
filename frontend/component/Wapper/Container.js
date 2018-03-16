import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PostPage from '../Posts/PostPage';
import ArticlePage from '../Aritcle/ArticlePage';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentArticle: null
    };
  }

  componentDidMount() {
    // fetch('/api')
    //   .then(res => res.json())
    //   .then(articles => this.setState({ articles }));
    fetch('https://api.github.com/repos/naseeihity/LearnToLearn/issues')
      .then(res => res.json())
      .then(articles => this.setState({ articles: articles.slice(0, 9) }));
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => <PostPage articles={this.state.articles} />}
        />
        <Route
          path="/post/:number"
          render={({ match }) => (
            <ArticlePage
              postNum={match.params.number}
              articles={this.state.articles}
            />
          )}
        />
      </div>
    );
  }
}

export default Container;
