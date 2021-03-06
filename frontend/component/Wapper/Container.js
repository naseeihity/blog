import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostPage from '../Posts/PostPage';
import ArticlePage from '../Aritcle/ArticlePage';
import NoMatch from '../NotFound';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      total: 0,
      currentArticle: null
    };
  }

  componentDidMount() {
    // fetch('/api')
    //   .then(res => res.json())
    //   .then(articles => this.setState({ articles }));
    fetch(
      'https://api.github.com/repos/naseeihity/LearnToLearn/issues?assignee=naseeihity&page=1&per_page=100'
    )
      .then(res => res.json())
      .then(articles =>
        this.setState({
          articles,
          total: articles.length
        })
      );
  }

  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={({ match }) => (
              <PostPage total={this.state.total} match={match} />
            )}
          />
          <Route
            path="/pages/:page"
            render={({ match }) => (
              <PostPage total={this.state.total} match={match} />
            )}
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
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default Container;
