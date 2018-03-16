import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Ribbon from '../Ribbon';
import Article from './Article';

import styles from '../Wapper/container.css';

class ArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getPostDetail = this.getPostDetail.bind(this);
  }

  getPostDetail(num) {
    const { articles } = this.props;
    const artic = articles.find(article => num === String(article.number));
    return artic;
  }

  render() {
    const curArticle = this.getPostDetail(this.props.postNum);
    return (
      <div>
        <Ribbon curArticle={curArticle} hasSub={false} />
        <div className={styles.container_main}>
          <div className={styles.container_box}>
            <Paper className={styles.container_context} elevation={5}>
              <Article article={curArticle} />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticlePage;
