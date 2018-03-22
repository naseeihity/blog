import React, { Component } from 'react';
import { CircularProgress } from 'material-ui/Progress';
import moment from 'moment';
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
    let body;
    let updated_at;
    let year;
    let month;
    let day;
    if (article) {
      ({ body, updated_at } = article);
      year = moment(updated_at).year();
      month = moment.monthsShort(moment(updated_at).month());
      day = moment(updated_at).date();
    }

    return (
      <div className={styles.article_container}>
        {article ? (
          <div>
            <div className={styles.article_info}>
              <div className={styles.article_time}>
                {month} {day}, {year}
              </div>
            </div>
            <ReactMarkdown className={styles.typo} source={body} />
          </div>
        ) : (
          <div className={styles.article_progress}>
            <CircularProgress size={70} color="secondary" />
          </div>
        )}
      </div>
    );
  }
}

export default Article;
