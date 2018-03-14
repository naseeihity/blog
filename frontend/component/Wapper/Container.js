import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Route } from 'react-router-dom';
import Ribbon from '../Ribbon';
import Posts from '../Posts/index';
import Article from '../Aritcle/Article';

import styles from './container.css';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentArticle: null
    };
    this.getPostDetail = this.getPostDetail.bind(this);
    this.postOpened = this.postOpened.bind(this);
  }

  componentDidMount() {
    // fetch('/api')
    //   .then(res => res.json())
    //   .then(articles => this.setState({ articles }));
    fetch('https://api.github.com/repos/naseeihity/LearnToLearn/issues')
      .then(res => res.json())
      .then(articles => this.setState({ articles: articles.slice(0, 9) }));
  }

  getPostDetail(num) {
    const { articles } = this.state;
    const artic = articles.find(article => num === String(article.number));
    return artic;
  }

  postOpened(article) {
    this.setState({ currentArticle: article });
  }

  render() {
    return (
      <div>
        <Ribbon curArticle={this.state.currentArticle} />
        <div className={styles.container_main}>
          <div className={styles.container_box}>
            <Paper className={styles.container_context} elevation={5}>
              <Route
                exact
                path="/"
                render={() => <Posts articles={this.state.articles} />}
              />
              <Route
                path="/post/:number"
                render={({ match }) => {
                  const post = this.getPostDetail(match.params.number);
                  return (
                    <Article
                      post={post}
                      postOpened={article => this.postOpened(article)}
                    />
                  );
                }}
              />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
