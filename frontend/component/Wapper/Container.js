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
      articles: []
    };
    this.getPostDetail = this.getPostDetail.bind(this);
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(articles => this.setState({ articles }));
  }

  getPostDetail(num) {
    const { articles } = this.state;
    const artic = articles.find(article => num === String(article.number));
    return artic;
  }

  render() {
    return (
      <div>
        <Ribbon />
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
                  return <Article post={post} />;
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
