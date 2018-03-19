import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import { NavigateNext, NavigateBefore } from 'material-ui-icons';
import qs from 'query-string';
import { Link } from 'react-router-dom';
import PaginationBoxView from '../utils/paginate';
import PostList from './PostList';

import styles from './post.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      currentPage: 1,
      pageSize: 4,
      pageCount: props.total || 1,
      loading: true
    };
    this.getArticles = this.getArticles.bind(this);
  }

  componentDidMount() {
    const { articles, pageCount } = this.state;
    const page = this.props.match ? this.props.match.params.page : 1;
    if (articles.length === 0 && page <= pageCount) {
      this.getArticles(page);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.total && !Object.is(nextProps.total, this.props.total)) {
      this.setState({
        pageCount: Math.ceil(nextProps.total / this.state.pageSize)
      });
    }

    if (nextProps.match && !Object.is(nextProps.match, this.props.match)) {
      this.getArticles(nextProps.match.params.page);
    }
  }

  getArticles(page, pageSize) {
    const opts = {
      per_page: pageSize || this.state.pageSize,
      page: page || this.props.match.params.page
    };

    fetch(
      `https://api.github.com/repos/naseeihity/LearnToLearn/issues?${qs.stringify(
        opts
      )}`
    )
      .then(res => res.json())
      .then(articles =>
        this.setState({
          articles,
          currentPage: opts.page
        })
      );
  }

  render() {
    const { articles, pageCount, currentPage } = this.state;
    return (
      <div>
        <Typography
          align="center"
          variant="button"
          color="inherit"
          className={styles.post_title}
        >
          LATEST POSTS
        </Typography>
        <PostList articles={articles} />
        <div className={styles.post_paginate}>
          <PaginationBoxView
            to="/pages"
            previousLabel={
              <NavigateBefore
                viewBox={'0 0 25 25'}
                className={styles.post_paginate_icon}
              />
            }
            nextLabel={
              <NavigateNext
                viewBox={'0 0 25 25'}
                className={styles.post_paginate_icon}
              />
            }
            breakLabel={<Link to="/pages">...</Link>}
            breakClassName={'break-me'}
            activeClassName={styles.post_paginate_active}
            pageCount={pageCount}
            initialPage={0}
            forcePage={currentPage - 1}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            containerClassName={'pagination'}
            disabledClassName={styles.post_paginate_disabled}
            subContainerClassName={'pages pagination'}
          />
        </div>
      </div>
    );
  }
}

export default Posts;
