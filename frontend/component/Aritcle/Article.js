import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './markdown.css';

const { Prism } = window;
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: props.article
    };
    this.Prism = Prism;
  }

  componentDidMount() {
    this.Prism.highlightAll();
  }
  componentDidUpdate() {
    this.Prism.highlightAll();
  }

  render() {
    // TODO： add 404 page
    const { article } = this.props;
    return (
      <div>
        {article ? (
          <ReactMarkdown className={styles.typo} source={article.body} />
        ) : (
          'Loading……'
        )}
      </div>
    );
  }
}

export default Article;
